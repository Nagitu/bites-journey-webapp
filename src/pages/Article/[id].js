import {useRouter} from 'next/router';
import DetailPage from '@/components/ArticlePage/DetailPage';
import {AuthProvider} from '../../utils/AuthContext';
import NavbarComponent from '@/components/Navbar/NavbarComponent';
import React from 'react';

function Article() {
    const router = useRouter();
    const {id} = router.query;

    // Gunakan ID untuk mengambil data artikel dari API
    return (
        <div>
            <AuthProvider>
                <div className='bg-neutral-200 h-screen'>
                    <NavbarComponent/>
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
