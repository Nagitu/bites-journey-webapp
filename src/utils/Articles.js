import axios from 'axios';
import FormData from 'form-data';
import jwtDecode from 'jwt-decode'

export const getArticles = async () => {
    const jwtToken = localStorage.getItem('token');
    const apikey = 'binar-36'
    const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://bites-journey-2.fly.dev/api/v1/article/',
        headers: {
            'Authorization': jwtToken,
            'x-api-key': apikey
        }
    };
    try {
        const response = await axios(config);
        return response.data.data; // Mengembalikan data respons
    } catch (error) {
        throw error; // Melempar kesalahan
    }
};

export const getArticleByID = async (id) => {
    try {
      const jwtToken = localStorage.getItem('token');
      const apikey = 'binar-36'
      const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://bites-journey-2.fly.dev/api/v1/article/id/${id}`,
        headers: {
          'Authorization': jwtToken,
          'x-api-key': apikey,
        }
      };
  
      const response = await axios.request(config);
      return response.data; // Mengembalikan data artikel
    } catch (error) {
      console.error('Error fetching article:', error);
      throw error; // Dilemparkan untuk menangani kesalahan di tempat lain
    }
  };

  export const deleteArticleById = async(id) =>{
    try {
      const jwtToken = localStorage.getItem('token');
      const apikey = 'binar-36'
      const config = {
        method: 'delete',
        maxBodyLength: Infinity,
        url: `https://bites-journey-2.fly.dev/api/v1/article/delete/${id}`,
        headers: {
          'Authorization': jwtToken,
          'x-api-key': 'binar-36'
        }
      };
      const response = await axios.request(config);
      return response.data; // Mengembalikan data artikel
    } catch (error) {
      console.error('Error fetching article:', error);
      throw error; // Dilemparkan untuk menangani kesalahan di tempat lain
    }
  }
  export const createArticle =async  (formData) => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.post('https://bites-journey-2.fly.dev/api/v1/article/create', formData, {
        headers: {
          'Authorization': token,
          'x-api-key': 'binar-36',
        },
      });
  
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  
  export function fetchUserArticles() {
    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token);
    const user = decodedToken.uid_users;
  
    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://bites-journey-2.fly.dev/api/v1/article/${user}`,
      headers: {
        'Authorization': `${token}`,
        'x-api-key': 'binar-36'
      }
    };
  
    return axios.request(config);
  }
  
  
  
  
  
  
  
  