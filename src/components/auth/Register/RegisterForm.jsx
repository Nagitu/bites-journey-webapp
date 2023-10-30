import React, {useState} from 'react';
import {useAuth} from '../../../../utils/AuthContext';

const RegisterForm = () => {
    const {registerUser, login} = useAuth();
    const [formData, setFormData] = useState(
        {username: '', name: '', password: '', email: ''}
    );
    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleRegister = async () => {
        try {
            console.log(formData);
            // Panggil fungsi register dengan data dari form
            await registerUser(formData);

            // Registrasi berhasil, lanjutkan untuk login hanya dengan username dan password
            const loginData = {
                username: formData.username,
                password: formData.password
            };
            await login(loginData);
            window.location.href = '/home'
            setRegistrationSuccess(true);
        } catch (error) {
            console.error('Error:', error);
            // Handle error
        }
    };

    return (
        <div
            className="rounded-xl bg-white dark:bg-gradient-to-r from-purple-900 to-blue-950 ring-2 ring-blue-500 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
            <div className="text-blue">
                <div className="mb-8 flex flex-col items-center gap-10">
                    <h1 className="mb-2 text-2xl">Bites Journey</h1>
                </div>
                <div className='flex flex-col items-center'>
                    <label>Username</label>
                    <input
                        className="rounded-3xl border-none bg-white dark:bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}/>
                </div>

                <div className='flex flex-col items-center'>
                    <label>Name</label>
                    <input
                        className="rounded-3xl border-none bg-white dark:bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}/>
                </div>

                <div className='flex flex-col items-center'>
                    <label>Password</label>
                    <input
                        className="rounded-3xl border-blue bg-white dark:border-blue px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}/>
                </div>

                <div className='flex flex-col items-center'>
                    <label>Email</label>
                    <input
                        className="rounded-3xl border-blue bg-white dark:border-blue px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}/>
                </div>
                <div className="mt-8 flex justify-center text-lg text-black">
                    <button
                        onClick={handleRegister}
                        className="rounded-3xl bg-white dark-bg-opacity-50 px-10 py-2 text-blue shadow-xl backdrop-blur-md transition-colors duration-300 hover-bg-yellow-600">
                        Register
                    </button>
                </div>
                {registrationSuccess && <p>Registration and Login Successful</p>}
            </div>
        </div>
    );
};

export default RegisterForm;
