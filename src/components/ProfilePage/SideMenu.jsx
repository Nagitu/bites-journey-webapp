import Image from 'next/image'
import getProfileData from '../../../utils/Profile'
import React from 'react'
import { useAuth } from '../../../utils/AuthContext'
import { useState,useEffect } from 'react'

const SideMenu = () => {
    const { logout } = useAuth();
    const [userData, setUserData] = useState(null);

    const handleLogout = () => {
      // Panggil fungsi logout
      logout();
      window.location.href = '/login'
    };
    const handleEdit = () => {
        window.location.href = '/Profile/edit'
      };

    useEffect(() => {
        async function fetchData() {
          const data = await getProfileData();
          if (data) {
            setUserData(data);
            console.log(data);
          }
        }
        fetchData();
      }, []);
      
    return (
     <div
    className=" hidden sm:block md:col-span-1 p-4 border-solid border-2 h-fit w-72  rounded-xl">
    <div className='flex flex-col gap-4'>
        <div
            className="w-full rounded-full border-blue-300 bg-white p-4 flex flex-row justify-between items-center ">
            <div>
                {/* Inisial Nama Pengguna sebagai Foto Profil */}
                <div
                    className="rounded-full w-12 h-12 bg-blue-500 flex items-center justify-center text-white text-xl">
                    {userData?.data.username ? userData?.data.username.charAt(0).toUpperCase() : ''}
                </div>
            </div>
            <div className=''>
                <h2 className="text-lg font-semibold">{userData?.data.username}</h2>
            </div>
        </div>
        <button
            className="border-transparent  hover:bg-blue-200 rounded-xl focus:border-teal-900 active:border-teal-900">
            Profil
        </button>
        <button
            onClick={handleEdit}
            className="border-transparent  hover:bg-blue-200 rounded-xl focus:border-teal-900 active:border-teal-900">
            Edit Profil
        </button>
        <button
            onClick={handleLogout}
            className="border-transparent  hover:bg-blue-200 rounded-xl focus:border-teal-900 active:border-teal-900">
            Logout
        </button>
    </div>
</div>
    )
}

export default SideMenu