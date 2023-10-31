
import axios from "axios";
import jwtDecode from "jwt-decode";

export default async function getProfileData(user, apikey) {
    try {
        const token = localStorage.getItem('token'); // Mendapatkan token dari localStorage
        if (!token) {
            console.error('Token is missing');
            return;
        }
        const response = await fetch(`/api/userApi?token=${token}`, {
            method: 'GET',
            headers: {
                'Authorization': token
            }
        });

        if (response.ok) {
            const result = await response.json();
          
            const data = { data: result.responseData.data, newAccessToken: result.newAccessToken };
           
            localStorage.setItem('token', result.newAccessToken);
            return data;
        } else {
            console.error('Failed to fetch data');
        }
    } catch (error) {
        console.error(error);
    }
}

export const updateUSer = ( formData) => {
    const token = localStorage.getItem('token');
    const id = jwtDecode(token).uid_users
    return axios.put(`http://localhost:9000/api/v1/user/update/${id}`, formData, {
      headers: {
        // 'Authorization': token,
        'x-api-key': 'binar-36', // Ganti dengan API key yang sesuai
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        console.log(response.data);
        return response.data; // Kembalikan data respons
      })
      .catch(error => {
        console.log(error);
        throw error;
      });
    console.log(username);
  }


