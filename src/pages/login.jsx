import {AuthProvider} from '../../utils/AuthContext';
import Logincomponent from '@/components/auth/Login/Logincomponent';
import {checkTokenAndRedirect} from '../../utils/auth.utils';
import {useRouter} from 'next/router';
import {useEffect} from 'react';
import NavbarComponent from '@/components/Navbar/NavbarComponent';

const Login = () => {
    const router = useRouter();

    useEffect(() => {
        checkTokenAndRedirect(router, '/home', '/login','/login');
      }, []);

    return (
        <div>
            <AuthProvider>
                <NavbarComponent/>
                <Logincomponent/>
            </AuthProvider>
        </div>
    );
};

export default Login;
