import jwtDecode from "jwt-decode";

export const checkTokenAndRedirect = (router) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    
    const tokenValid = token && jwtDecode(token).exp > Math.floor(Date.now() / 1000);

    tokenValid
      ? router.push('/home') // Token valid, redirect ke /home
      : (console.log('Token sudah kedaluwarsa'), localStorage.removeItem('token')); // Token kedaluwarsa atau tidak ditemukan
  }
};

export const checkPage = (router) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');

    !token && (window.location.href = '/login'); // Jika token tidak ada, redirect ke /login
  }
};
