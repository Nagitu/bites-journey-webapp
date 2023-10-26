import {AuthProvider} from '../../utils/AuthContext';
import Navbar from '@/components/Navbar/Navbar';
import Logincomponent from '@/components/Login/Logincomponent';
import {checkTokenAndRedirect} from '../../utils/auth.utils';
import {useRouter} from 'next/router';
import {useEffect} from 'react';

const Login = () => {
    const router = useRouter();

    useEffect(() => {
        checkTokenAndRedirect(router, '/home', '/login','/login');
      }, []);

    return (
        <div>
            <AuthProvider>
                <Navbar/>
                <Logincomponent/>
            </AuthProvider>
        </div>
    );
};

export default Login;
