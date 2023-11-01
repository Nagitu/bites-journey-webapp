import React from 'react'
import ProfileMenu from '@/components/ProfilePage/ProfileMenu';
import {AuthProvider} from '../../utils/AuthContext';
import Navbar from '@/components/Navbar/Navbar';
import { useEffect } from 'react';
import { checkTokenAndRedirect } from '../../utils/auth.utils';
import { Router, useRouter } from 'next/router';
import EditFormComponent from '@/components/editPrsofile/EditProfile.Component';

const editArticle = () => {
    // const router = useRouter()
    // useEffect(() => {
    //     checkTokenAndRedirect(router, '/Profile', '/login');
    // });

  return (
    <div>
        <AuthProvider>
            <div className='bg-white h-screen overflow-auto flex -flex-col gap-40 item '>
                    <Navbar/>
                    <EditFormComponent />
                </div>
            </AuthProvider>
        </div>
  )
}

export default editArticle