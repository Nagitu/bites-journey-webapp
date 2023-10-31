import { AuthProvider } from '../../utils/AuthContext';
import { checkPage, checkTokenAndRedirect } from '../../utils/auth.utils';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import FormComponent from '@/components/CreateArticleForm/FormComponent';
import NavbarComponent from '@/components/Navbar/NavbarComponent';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from '../../Redux/store';
import getProfileData from '../../utils/Profile';
import { setUserData } from '../../Redux/userDataSlice';


const Login = () => {
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
      checkTokenAndRedirect(router, '/Article/create', '/login', '/login'); // Sesuaikan dengan rute Anda
    }, [dispatch, cachedUserData, router]);

    return (
        <div>
            <AuthProvider>
                <Provider store={store}>
                <NavbarComponent userData={cachedUserData} />
                <FormComponent/>
                {/* <CreateArticleLayout /> */}
                </Provider>
            </AuthProvider>
        </div>
    );
};

export default Login;
