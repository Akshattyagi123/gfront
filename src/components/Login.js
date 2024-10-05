import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../api';
// response.data.userId
export const Login = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();
    const [message, setMessage] = useState(' ');
    const [email, setemail] = useState(' ');
    const [password, setpassword] = useState('');
    const handlesubmit = async (e) => {
        e.preventDefault();

        try {

            const response = await axios.post(BASE_URL + '/api/auth/login', {
                email,
                password,
            },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            console.log(response);

            if (response?.data?.userId) {

                navigate(`/otp-verification?userId=${response.data.userId}`);
            }
            else {
                setMessage(response.data.msg);
            }

        } catch (error) {
            if (error.response) {

                if (error.response.status === 400) {
                    setMessage(error.response.data.msg);
                }
                else {
                    setMessage(error.response.data.msg);

                }
            }
            else {
                setMessage('Registration failed,plss try again');
            }
        }
    };

    return (
        <div className="flex flex-col min-h-screen pt-4  md:pt-20 ">
            <div className="flex-grow flex flex-col-reverse md:flex-row lg:flex-row w-full max-w-[1160px] pt-16 md:pt-0 lg:pt-0 mx-auto justify-between items-center mt-[12vh]">
                <div className="w-full lg:w-1/2 md:w-1/2 flex justify-center items-center">
                    <img
                        src="/assets/login-BYNNgKXW.png"
                        alt="pattern"
                        width={500}
                        height={350}
                        loading="lazy"
                        className="max-w-full h-auto hidden md:block lg:block"
                    />
                </div>
                <div className="w-full lg:w-1/2 md:w-1/2  px-6 lg:px-0  text-white">
                    <div className=" mt-[0vh] bg-gradient-to-r from-purple-100 to-red-100 flex text-xl justify-center rounded-full max-w-md mx-auto mb-4 ">
                        <a
                            className=" bg-gradient-to-r from-purple-500 to-red-500 text-white font-bold  rounded-full flex-1 py-2  text-center"
                            href="/login"
                            style={{ fontSize: "0.9rem" }}
                        >
                            Log in
                        </a>
                        <a
                            className="bg-gradient-to-r from-purple-100 to-red-100 text-black font-bold rounded-full flex-1 py-2  text-center"
                            href="/register"
                            style={{ fontSize: "0.9rem" }}
                        >
                            Register
                        </a>
                    </div>
                    <form method='post' action='' className="flex flex-col gap-8 w-full max-w-md mx-auto mt-6 text-center border-2 rounded-3xl py-10 lg:py-20 px-6 lg:px-10 shadow-2xl " onSubmit={handlesubmit}>
                        <div className="relative h-11 w-full">
                            <input
                                type="email"
                                name="email"
                                value={email}

                                placeholder=""
                                className="shadow-xl peer h-full w-full rounded-xl border border-gray-300 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-gray-700 outline-none transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 focus:border-2 focus:border-[#ed1f26] focus:border-t-transparent focus:border-r-transparent focus:border-l-transparent disabled:border-0 disabled:bg-gray-50"
                                required=""
                                defaultValue=""
                                onChange={(e) => setemail(e.target.value)}
                            />
                            <label className="pointer-events-none absolute left-3 -top-1.5 flex items-center space-x-2 select-none text-[12px] font-medium leading-tight text-gray-800 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-focus:-top-1.5 peer-focus:text-[12px] peer-focus:text-[#ed1f26]">
                                <span>
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="envelope"
                                        className="svg-inline--fa fa-envelope "
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                                        />
                                    </svg>
                                </span>
                                <span>Email</span>
                            </label>
                        </div>
                        <div className="relative h-11 w-full">
                            <input
                                type="password"
                                name="password"
                                placeholder=""
                                value={password}
                                className="shadow-xl peer h-full w-full rounded-xl border border-gray-300 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-gray-700 outline-none transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 focus:border-2 focus:border-b-[#ed1f26] focus:border-t-transparent focus:border-r-transparent focus:border-l-transparent disabled:border-0 disabled:bg-gray-50"
                                required=""
                                defaultValue=""
                                onChange={(e) => setpassword(e.target.value)}
                            />
                            <label className="pointer-events-none absolute left-3 -top-1.5 flex items-center space-x-2 select-none text-[12px] font-medium leading-tight text-gray-800 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-focus:-top-1.5 peer-focus:text-[12px] peer-focus:text-[#ed1f26]">
                                <span>
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="lock"
                                        className="svg-inline--fa fa-lock "
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z"
                                        />
                                    </svg>
                                </span>
                                <span>Password</span>
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="py-2 px-4 rounded-full mt-6 font-medium text-white w-1/2 mx-auto block bg-gradient-to-r from-purple-500 to-red-500 transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95"
                        >
                            Login
                        </button>
                        <div className="flex flex-col items-center mt-4 space-y-2">
                            <p className="text-sm text-gray-600">
                                Forgot your password?{" "}
                                <a
                                    className="text-[#ed1f26] font-semibold hover:underline"
                                    href="/forgot-password"
                                >
                                    Click here
                                </a>
                            </p>
                            <p className="text-sm text-gray-600">
                                New Here?{" "}
                                <a
                                    className="text-[#ed1f26] font-semibold hover:underline"
                                    href="/register"
                                >
                                    Sign Up
                                </a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}
