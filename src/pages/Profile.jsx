import ProfileMenu from '@/components/ProfilePage/ProfileMenu';
import {AuthProvider} from '../../utils/AuthContext';
import Navbar from '@/components/Navbar/Navbar';
import { useEffect } from 'react';
import { checkTokenAndRedirect } from '../../utils/auth.utils';
import { Router, useRouter } from 'next/router';


const Profile= () => {
    const router = useRouter()
    useEffect(() => {
        checkTokenAndRedirect(router, '/Profile', '/login');
    });


    return (
        <div>
            <AuthProvider>
            <div className='bg-white h-screen overflow-auto '>
                    <Navbar/>
                    <ProfileMenu/>
                </div>
            </AuthProvider>
        </div>
    );
};

export default Profile;
