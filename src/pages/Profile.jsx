import ProfileMenu from '@/components/ProfilePage/ProfileMenu';
import { AuthProvider } from '../../utils/AuthContext';
import { useEffect ,useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserData } from '../Redux/userDataSlice';
import { checkTokenAndRedirect } from '../../utils/auth.utils'; // Mengimpor fungsi checkTokenAndRedirect
import { useRouter } from 'next/router'; // Mengimpor useRouter
import getProfileData from '../../utils/Profile';
import NavbarComponent from '@/components/Navbar/NavbarComponent';


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
    //   console.log(cachedUserData);
    } else {
      // Data profil belum ada di cache, lakukan pemanggilan API dan simpan ke cache
      async function fetchData() {
        const fetchedUserData = await getProfileData();
        if (fetchedUserData) {
          setCachedUserData(fetchedUserData); // Simpan data di cache
          dispatch(setUserData(fetchedUserData));
           
        }
      }
      fetchData();
    }
  
    // Panggil checkTokenAndRedirect dengan router dan rute yang sesuai
    checkTokenAndRedirect(router, '/Profile', '/login', '/login'); // Sesuaikan dengan rute Anda
  }, [dispatch, cachedUserData, router]);
  return (
    <div>
      <AuthProvider>
        <div className="bg-white h-screen overflow-auto">
          <NavbarComponent userData={cachedUserData}/>
          <ProfileMenu userData={cachedUserData}/>
        </div>
      </AuthProvider>
    </div>
  );
};

export default Profile;
