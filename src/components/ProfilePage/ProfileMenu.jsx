// Profile.js

import React from 'react';
import SideMenu from './SideMenu';
import ArticleCard from './ArticleCard';
import { useState, useEffect } from 'react';
import { fetchUserArticles } from '../../utils/Articles';
import EditFormComponent from '../editProfile/EditProfile.Component';


const ProfileMenu = ({ userData }) => {
  const [articles, setArticles] = useState([]);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  

  useEffect(() => {
    fetchUserArticles()
      .then((response) => {
        setArticles(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Fungsi untuk mengedit artikel
  const handleEdit = () => {
    {isEditingProfile ?setIsEditingProfile(false):setIsEditingProfile(true)};
  };
  const handleCancel = () => {
    {isEditingProfile ?setIsEditingProfile(false):setIsEditingProfile(true)};
  };
  const handleSave =() => {
    console.log(editedData)
  }
  

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
            <div className="md:col-span-1 p-4 border-solid border-2 h-fit w-72 rounded-xl relative">
              <div className="absolute -top-6 right-28 mb-5">
                <div className="rounded-full mb-5 w-12 h-12 bg-blue-500 flex items-center justify-center text-white text-xl">
                  {userData?.data.username ? userData?.data.username.charAt(0).toUpperCase() : ''}
                </div>
              </div>

              <div className="flex flex-col items-center gap-6 mt-5">
                <div className="flex flex-col items-center">
                  <h2 className="text-lg text-center font-semibold">{userData?.data.username}</h2>
                  <h2 className="text-sm text-center">{userData?.data.email}</h2>
                  <h2 className="text-sm text-center">{userData?.data.name}</h2>
                </div>
                <button
                  onClick={handleEdit}
                  className="border-transparent w-full bg-sky-400 hover:bg-blue-200 rounded-xl focus:border-teal-900 active:border-teal-900">
                  {isEditingProfile? 'profile menu':'Edit Profil'}
                </button>
              </div>
            </div>
          </div>
          
            {isEditingProfile ? (<div className='w-3/4 p-4 mb-4 rounded border-solid border-red flex flex-col'>
             <EditFormComponent userData={userData} onCancel={handleCancel} onSave={handleSave}/>
              </div>
            ) : (<div className="w-3/4 p-4 mb-4 rounded border-solid border-red flex flex-col">
            <main className="w-full buttom-0 flex flex-row flex-3 flex-wrap ">
            {articles.map((article) => (<ArticleCard key={article.id} articles={article} />))}
        </main>
          </div>
              // Tampilkan kartu profil atau kontennya di sini
            )}
        </div>
      </div>
    </div>
  );
};

export default ProfileMenu;
