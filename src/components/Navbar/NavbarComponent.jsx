import React, { useState,useEffect } from 'react'
import NavbarMenu from './NavbarMenu'
import SearchBar from './Searchbar'
import Link from 'next/link'
import { useAuth } from '../../../utils/AuthContext'
import Image from 'next/image'
import ProfileMenu from './ProfileMenu'




const NavbarComponent = ({userData}) => {
   
//    console.log(userData);
    const [token, setToken] = useState('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedToken = localStorage.getItem('token');
            setToken(storedToken);
        }
    }, []);

  return (
  <div className="rounded-sm fixed top-0 left-0 right-0 z-50">
    <div
        className="navbar p-4 flex flex-row justify-between items-center text-teal-900 bg-white border-b-4 border-gray-300">
        <div className="flex">
        <div className="logo" >
            <Link href={'/home'}>
            <Image src="/photo_2023-10-07_10-07-17.jpg" width="90" height="60" alt="Logo"/>
            </Link>
        </div>
            <SearchBar/>
        </div>
        <div className="flex sm:block ">
            <div className="relative">
                <div className="flex justify-between gap-5 text-sm">
                    <NavbarMenu href="/" text="Home" icon={                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
}/>
                    <NavbarMenu href="/Articles" text="Articles" icon={                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"/>
}/>
                    {token && (
                    <NavbarMenu href="/Article/create" text="Create Article" icon={                                <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"/>
}/>
                    )}
                </div>
            </div>
        </div>
        <div>
            { token ?
            <ProfileMenu userData={userData}/>
            :
            <div>
                <NavbarMenu href="/login" text="Sign In"/>
                <NavbarMenu href="/Register" text="Register"/>
            </div>
            }
        </div>
    </div>
</div>
  )
}

export default NavbarComponent