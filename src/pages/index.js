import LandingPage from '@/components/LandingPage/LandingPage';
import { AuthProvider } from '../utils/AuthContext';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { checkTokenAndRedirect } from '../utils/auth.utils';
import NavbarComponent from '@/components/Navbar/NavbarComponent';
import { useDispatch, useSelector } from 'react-redux';
import getProfileData from '../utils/Profile';
import { setUserData } from '@/Redux/userDataSlice';

const Index = () => {
  const dispatch = useDispatch();
  const router = useRouter(); // Menggunakan useRouter untuk mendapatkan instance router

  // Gunakan useMemo untuk mememoisasi userData
  const userData = useSelector((state) => state.userData);
  const [cachedUserData, setCachedUserData] = useState(null);

  useEffect(() => {
    if (!cachedUserData) {
      // Data pengguna belum di-cache, maka lakukan pemanggilan API
      async function fetchData() {
        const fetchedUserData = await getProfileData();
        if (fetchedUserData) {
          setCachedUserData(fetchedUserData);
          dispatch(setUserData(fetchedUserData));
        }
      }

      fetchData();
    }

    // Panggil checkTokenAndRedirect dengan router dan rute yang sesuai
    checkTokenAndRedirect(router, '/', '/', '/'); // Sesuaikan dengan rute Anda
  }, [dispatch, cachedUserData, router]);

  return (
    <div>
      <AuthProvider>
        <NavbarComponent userData={cachedUserData} />
        <LandingPage />
      </AuthProvider>
    </div>
  );
};

export default Index;
