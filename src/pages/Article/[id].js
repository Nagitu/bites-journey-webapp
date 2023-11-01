import {useRouter} from 'next/router';
import DetailPage from '@/components/ArticlePage/DetailPage';
import {AuthProvider} from '../../utils/AuthContext';
import Navbar from '@/components/Navbar/Navbar';
import React from 'react';

function Article() {
    const router = useRouter();
    const {id} = router.query;

    // Gunakan ID untuk mengambil data artikel dari API
    return (
        <div>
            <AuthProvider>
                <div className='bg-neutral-200 h-screen'>
                    <Navbar/>
                    <div className="mt-16">
                        {/* Tambahkan margin atas */}
                        <DetailPage id={id}/>
                    </div>
                </div>
            </AuthProvider>
        </div>
    );
}

export default Article;
