import {AuthProvider} from '../utils/AuthContext';
import RegisterComponent from '@/components/auth/Register/RegisterComponent';
import {checkTokenAndRedirect} from '../utils/auth.utils';
import {useRouter} from 'next/router';
import {useEffect} from 'react';
import NavbarComponent from '@/components/Navbar/NavbarComponent';

const Login = () => {
    const router = useRouter();

    useEffect(() => {
        checkTokenAndRedirect(router, '/', '/Register','/Register');
    }, [router]);

    return (
        <div>
            <AuthProvider>
                <NavbarComponent/>
               <RegisterComponent />
            </AuthProvider>
        </div>
    );
};

export default Login;
