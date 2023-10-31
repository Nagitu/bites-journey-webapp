import Link from 'next/link';
import React, { useState } from 'react';
import { useAuth } from '../../utils/AuthContext';

const ProfileMenu = ({ userData }) => {
  const { logout } = useAuth();
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = () => {
    logout();
    window.location.href = '/login';
  };

  return (
    <div className="navbar relative">
      <div className="navbar-profile-toggle" onClick={toggleProfileDropdown}>
        <div
          className="rounded-full w-8 h-8 bg-blue-500 flex items-center justify-center text-white text-xl"
        >
          {userData?.data.username ? userData?.data.username.charAt(0).toUpperCase() : ''}
        </div>
      </div>
      {isProfileDropdownOpen && (
        <div className="profile-dropdown flex flex-col gap-6 items-center absolute mt-2 bg-white border border-gray-300 shadow-md p-4 rounded-lg z-10 right-0">
          {/* Konten dropdown profil Anda di sini */}
          {userData && (
            <div className='flex flex-col'>
              <p className="text-teal-800 font-semibold">{userData.data.email}</p>
            </div>
          )}
          <Link href="/Profile" className='hover:text-lime-200'>Profil Saya</Link>
          <div className='flex flex-row'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6  sm:flex"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>

            <Link href="/Article/create" className="sm:flex">
              Create Article
            </Link>
          </div>
          <button onClick={handleLogout} className='hover:text-lime-200'>Logout</button>
          {/* Tempatkan elemen lainnya sesuai kebutuhan */}
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
