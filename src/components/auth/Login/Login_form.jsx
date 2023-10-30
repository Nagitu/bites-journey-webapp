import React, {useEffect, useState} from 'react'
import {useAuth} from '../../../../utils/AuthContext';
import Link from 'next/link';

const Login_form = () => {
    const {login} = useAuth();
    const [formData, setFormData] = useState({username: '', password: ''});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Panggil fungsi login dengan data dari form
            await login(formData);
            window.location.href = '/'
        } catch (error) {
            console.error('Error:', error);
            // Handle login error
        }
    };

    return (
        <div
            className="rounded-xl bg-white dark:bg-gradient-to-r from-purple-900 to-blue-950  ring-2 ring-blue-500 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
            <div className="text-blue flex flex-col items-center">
                <div className="mb-8 flex flex-col items-center">
                    <h1 className="mb-2 text-2xl">Bites Journey</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4 text-lg">
                        <input
                            className="rounded-3xl border-none bg-white dark:bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                            type="text"
                            name="username"
                            placeholder="id@email.com"
                            value={formData.username}
                            onChange={handleChange}/>
                    </div>

                    <div className="mb-4 text-lg flex items-center">
                        <input
                            className="rounded-3xl border-blue bg-white dark:border-blue px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                            type="password"
                            name="password"
                            placeholder="*********"
                            value={formData.password}
                            onChange={handleChange}/>
                    </div>
                    <div className="mt-8 flex justify-center text-lg text-black">
                        <button
                            type="submit"
                            className="rounded-3xl bg-white dark:bg-opacity-50 px-10 py-2 text-blue shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600">
                            Login
                        </button>
                    </div>
                </form>
                <div>
                    belum punya akun?{' '}
                    <Link href={'/Register'} className='text-gray-600 pt-auto hover:text-blue-500'>
                        daftar disini
                    </Link>
                </div>
            </div>

        </div>

    );
};

export default Login_form