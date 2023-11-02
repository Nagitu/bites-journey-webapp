import jwtDecode from "jwt-decode";


export const checkTokenAndRedirect = (router, validPage, expiredPage, loginPage) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    
    if (!token) {
      // console.log('Token tidak ditemukan, redirect ke halaman login');
      router.push(loginPage);
      return; // Hentikan eksekusi jika token tidak ditemukan
    }
    
    const tokenValid = jwtDecode(token).exp > Math.floor(Date.now() / 1000);

    if (tokenValid) {
      router.push(validPage); // Redirect ke halaman validPage
    } else {
      // console.log('Token sudah kedaluwarsa');
      localStorage.removeItem('token');
      router.push(expiredPage); // Redirect ke halaman expiredPage
    }
  }
};


export const checkPage = (router) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');

    !token && (window.location.href = '/login'); // Jika token tidak ada, redirect ke /login
  }
};
