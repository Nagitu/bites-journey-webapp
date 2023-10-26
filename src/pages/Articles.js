import React, { useEffect } from 'react'
import Navbar from '@/components/Navbar/Navbar'
import ArticlePage from '@/components/ArticlePage/ArticlePage'
import {AuthProvider} from '../../utils/AuthContext'
import { useRouter } from 'next/router'
import { checkTokenAndRedirect } from '../../utils/auth.utils'

const Articles = () => {

    const router = useRouter();

    useEffect(() => {
        checkTokenAndRedirect(router, '/Articles','/Articles','/Articles');
    }, []);

    return (
        <div>
            <AuthProvider>
                <div className='bg-white h-full'>
                    <Navbar/>
                    <ArticlePage/>
                </div>
            </AuthProvider>
        </div>
    )
}

export default Articles