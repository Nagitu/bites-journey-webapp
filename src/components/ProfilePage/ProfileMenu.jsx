// Profile.js

import React from 'react';
import SideMenu from './SideMenu';
import ArticleCard from './ArticleCard';
import {useState, useEffect} from 'react';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

const ProfileMenu = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const decodedToken = jwtDecode(token);
        const user = decodedToken.uid_users;

        const config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `http://localhost:9000/api/v1/article/${user}`,
            headers: {
                'Authorization': `${token}`,
                'x-api-key': 'binar-36'
            }
        };
        axios
            .request(config)
            .then((response) => {
                setArticles(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // Fungsi untuk mengedit artikel
    const handleEdit = () => {
        // Lakukan tindakan edit
    };

    // Fungsi untuk menghapus artikel
    const handleDelete = () => {};
    return (
        <div className='flex flex-col border-solid border-black overflow-hidden'>
        <div className='w-screen h-96'>
            <img
                src="https://images.unsplash.com/photo-1560807707-8cc77767d783"
                alt="Deskripsi Gambar"
                className='w-full h-full'
            />
        </div>
    
        <div className="justify-center pt-10 text-black h-full sm:h-fit border-2 border-black-500 border-solid overflow-scroll ">
            <div className="flex flex-row h-screen">
                <div className='w-1/4 h-full hidden sm:block '>
                    <SideMenu />
                </div>
                <div className="w-3/4 p-4 mb-4 rounded border-solid border-red flex flex-col">
                    <main className="w-full buttom-0 flex flex-row flex-3 flex-wrap ">
                        {articles.map((article) => (<ArticleCard key={article.id} articles={article} />))}
                    </main>
                </div>
            </div>
        </div>
    </div>
    
    
    );
};

export default ProfileMenu;
