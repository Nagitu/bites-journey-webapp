import Image from 'next/image'
import getProfileData from '../../../utils/Profile'
import React from 'react'
import { useAuth } from '../../../utils/AuthContext'
import { useState,useEffect } from 'react'

const SideMenu = () => {
    const [userData, setUserData] = useState(null);

    
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
      <div className="md:col-span-1 p-4 border-solid border-2 h-fit w-72 rounded-xl relative">
      <div className="absolute -top-6 right-28  mb-5">
          <div className="rounded-full mb-5 w-12 h-12 bg-blue-500 flex items-center justify-center text-white text-xl">
              {userData?.data.username ? userData?.data.username.charAt(0).toUpperCase() : ''}
          </div>
      </div>
  
      <div className="flex flex-col items-center gap-6 mt-5">
          <div className="flex flex-col items-center">
              <h2 className="text-lg text-center font-semibold">{userData?.data.username}</h2>
              <h2 className="text-sm text-center">{userData?.data.email}</h2>
              <h2 classna="text-sm text-center">{userData?.data.name}</h2>
          </div>
          <button
              onClick={handleEdit}
              className="border-transparent w-full bg-sky-400 hover:bg-blue-200 rounded-xl focus:border-teal-900 active:border-teal-900">
              Edit Profil
          </button>
      </div>
  </div>
  
  
      
    )
}

export default SideMenu