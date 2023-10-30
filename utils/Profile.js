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
