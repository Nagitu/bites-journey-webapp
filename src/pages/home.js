import LandingPage from '@/components/LandingPage/LandingPage';
import {AuthProvider} from '../../utils/AuthContext';
import Navbar from '@/components/Navbar/Navbar';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { checkTokenAndRedirect } from '../../utils/auth.utils';

const Login = () => {
    const router = useRouter();

    useEffect(() => {
        checkTokenAndRedirect(router, '/home', '/home','/home');
    }, []);
    


    return (
        <div>
            <AuthProvider>
                <Navbar/>
                <LandingPage/>
            </AuthProvider>
        </div>
    );
};

export default Login;
