import ProfileMenu from '@/components/ProfilePage/ProfileMenu';
import { AuthProvider } from '../utils/AuthContext';
import React, { useEffect ,useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserData } from '../Redux/userDataSlice';
import { checkTokenAndRedirect } from '../utils/auth.utils'; // Mengimpor fungsi checkTokenAndRedirect
import { useRouter } from 'next/router'; // Mengimpor useRouter
import getProfileData from '../utils/Profile';
import NavbarComponent from '@/components/Navbar/NavbarComponent';
import LandingPage from './landingpage';


const Profile = () => {
  const dispatch = useDispatch();
  const router = useRouter(); // Menggunakan useRouter untuk mendapatkan instance router

  // Gunakan useMemo untuk mememoisasi userData
  const userData = useSelector((state) => state.userData);
  const [cachedUserData, setCachedUserData] = useState(null);

  useEffect(() => {
    if (cachedUserData) {
      // Data profil sudah ada di cache, gunakan data tersebut
      dispatch(setUserData(cachedUserData));
      console.log(cachedUserData);
    } else {
      // Data profil belum ada di cache, lakukan pemanggilan API dan simpan ke cache
      async function fetchData() {
        const fetchedUserData = await getProfileData();
        if (fetchedUserData) {
          setCachedUserData(fetchedUserData); // Simpan data di cache
          dispatch(setUserData(fetchedUserData));
          console.log(userData);
        }
      }
      fetchData();
    }
  
    // Panggil checkTokenAndRedirect dengan router dan rute yang sesuai
    checkTokenAndRedirect(router, '/Profile', '/expired', '/login'); // Sesuaikan dengan rute Anda
  }, [dispatch, cachedUserData, router]);

  return (
    <div>
      <AuthProvider>
        <div className="bg-white h-screen overflow-auto">
          <NavbarComponent userData={userData}/>
          <LandingPage/>
        </div>
      </AuthProvider>
    </div>
  );
};

export default Profile;
