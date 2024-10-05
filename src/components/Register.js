import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../api';

export const Register = () => {

    const navigate = useNavigate();

    const [message, setMessage] = useState('');
    const [name, setname] = useState('');
    const [rollno, setrollno] = useState('');
    const [department, setdepartment] = useState('');
    const [semester, setsemester] = useState('');
    const [phone, setphone] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const handlesubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(BASE_URL + '/api/auth/register', {
                name,
                rollno,
                department,
                semester,
                phone,
                email,
                password,
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.status == 201) {
                localStorage.setItem('login', true)
                navigate('/'); // Redirect to homepage or dashboard
            } else {
                setMessage(response.data.msg); // Display error message
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
                    <div className="-mt-[8vh] bg-gradient-to-r from-purple-100 to-red-100 flex text-xl justify-center rounded-full max-w-md mx-auto mb-4 ">
                        <a
                            className="bg-gradient-to-r from-purple-100 to-red-100 text-black font-bold rounded-full flex-1 py-2  text-center"
                            href="/login"
                            style={{ fontSize: "0.9rem" }}
                        >
                            Log in
                        </a>
                        <a
                            className="bg-gradient-to-r from-purple-500 to-red-500 text-white font-bold rounded-full flex-1 py-2  text-center"
                            href="/register"
                            style={{ fontSize: "0.9rem" }}
                        >
                            Register
                        </a>
                    </div>
                    <form className="flex flex-col gap-2 w-full max-w-md mx-auto mt-6  text-center border-2 rounded-3xl py-10 lg:py-12 px-6 lg:px-10 shadow-2xl" onSubmit={handlesubmit}>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="relative h-11 w-full col-start-1 col-span-2 md:col-span-1">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder=""
                                    className="shadow-xl peer h-full w-full rounded-xl border border-gray-300 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-gray-700 outline-none transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 focus:border-2 focus:border-[#ed1f26] focus:border-t-transparent focus:border-r-transparent focus:border-l-transparent disabled:border-0 disabled:bg-gray-50"
                                    required=""
                                    defaultValue=""
                                    value={name}
                                    onChange={(e) => setname(e.target.value)}
                                />
                                <label className="pointer-events-none absolute left-3 -top-1.5 flex items-center space-x-2  select-none text-[12px] font-medium leading-tight text-gray-800 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-focus:-top-1.5 peer-focus:text-[12px] peer-focus:text-[#ed1f26]">
                                    <span>
                                        <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="user"
                                            className="svg-inline--fa fa-user "
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 448 512"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"
                                            />
                                        </svg>
                                    </span>
                                    <span>Username</span>
                                </label>
                            </div>
                            <div className="relative h-11 w-full col-start-1 col-span-2 md:col-span-1">
                                <input
                                    type="text"
                                    name="rollno"
                                    placeholder=""
                                    className="shadow-xl peer h-full w-full rounded-xl border border-gray-300 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-gray-700 outline-none transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 focus:border-2 focus:border-[#ed1f26] focus:border-t-transparent focus:border-r-transparent focus:border-l-transparent disabled:border-0 disabled:bg-gray-50"
                                    required=""
                                    value={rollno}
                                    onChange={(e) => setrollno(e.target.value)}
                                    defaultValue=""
                                />
                                <label className="pointer-events-none absolute left-3 -top-1.5 flex items-center space-x-2  select-none text-[12px] font-medium leading-tight text-gray-800 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-focus:-top-1.5 peer-focus:text-[12px] peer-focus:text-[#ed1f26]">
                                    <span>
                                        <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="mobile"
                                            className="svg-inline--fa fa-mobile "
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 384 512"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M80 0C44.7 0 16 28.7 16 64l0 384c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L80 0zm80 432l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
                                            />
                                        </svg>
                                    </span>
                                    <span>Roll No.</span>
                                </label>
                            </div>
                            <div className="relative h-11 w-full col-start-1 col-span-2 ">
                                <select
                                    name="department"
                                    placeholder=""
                                    className="shadow-xl peer h-full w-full rounded-xl border border-gray-300 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-gray-700 outline-none transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 focus:border-2 focus:border-[#ed1f26] focus:border-t-transparent focus:border-r-transparent focus:border-l-transparent disabled:border-0 disabled:bg-gray-50"
                                    required=""
                                    value={department}
                                    onChange={(e) => setdepartment(e.target.value)}
                                >
                                    <option value="B.Tech Computer Science Engineering">
                                        B.Tech Computer Science Engineering
                                    </option>
                                    <option value="B.Tech Electronics and Communication Engineering">
                                        B.Tech Electronics and Communication Engineering
                                    </option>
                                    <option value="B.Tech Mechanical Engineering">
                                        B.Tech Mechanical Engineering
                                    </option>
                                </select>
                                <label className="pointer-events-none absolute left-3 -top-1.5 flex items-center space-x-2  select-none text-[12px] font-medium leading-tight text-gray-800 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-focus:-top-1.5 peer-focus:text-[12px] peer-focus:text-[#ed1f26]">
                                    <span>
                                        <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="building"
                                            className="svg-inline--fa fa-building "
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 384 512"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M48 0C21.5 0 0 21.5 0 48L0 464c0 26.5 21.5 48 48 48l96 0 0-80c0-26.5 21.5-48 48-48s48 21.5 48 48l0 80 96 0c26.5 0 48-21.5 48-48l0-416c0-26.5-21.5-48-48-48L48 0zM64 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm112-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM80 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM272 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z"
                                            />
                                        </svg>
                                    </span>
                                    <span>Department</span>
                                </label>
                            </div>
                            <div className="relative h-11 w-full col-start-1 col-span-2 md:col-span-1">
                                <select
                                    name="semester"
                                    placeholder=""
                                    className="shadow-xl peer h-full w-full rounded-xl border border-gray-300 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-gray-700 outline-none transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 focus:border-2 focus:border-[#ed1f26] focus:border-t-transparent focus:border-r-transparent focus:border-l-transparent disabled:border-0 disabled:bg-gray-50"
                                    required=""
                                    value={semester}
                                    onChange={(e) => setsemester(e.target.value)}
                                >
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                    <option value={6}>6</option>
                                    <option value={7}>7</option>
                                    <option value={8}>8</option>
                                </select>
                                <label className="pointer-events-none absolute left-3 -top-1.5 flex items-center space-x-2  select-none text-[12px] font-medium leading-tight text-gray-800 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-focus:-top-1.5 peer-focus:text-[12px] peer-focus:text-[#ed1f26]">
                                    <span>
                                        <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="list-ol"
                                            className="svg-inline--fa fa-list-ol "
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M24 56c0-13.3 10.7-24 24-24l32 0c13.3 0 24 10.7 24 24l0 120 16 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l16 0 0-96-8 0C34.7 80 24 69.3 24 56zM86.7 341.2c-6.5-7.4-18.3-6.9-24 1.2L51.5 357.9c-7.7 10.8-22.7 13.3-33.5 5.6s-13.3-22.7-5.6-33.5l11.1-15.6c23.7-33.2 72.3-35.6 99.2-4.9c21.3 24.4 20.8 60.9-1.1 84.7L86.8 432l33.2 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-88 0c-9.5 0-18.2-5.6-22-14.4s-2.1-18.9 4.3-25.9l72-78c5.3-5.8 5.4-14.6 .3-20.5zM224 64l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 160l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 160l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
                                            />
                                        </svg>
                                    </span>
                                    <span>Semester</span>
                                </label>
                            </div>
                            <div className="relative h-11 w-full col-start-1 col-span-2 md:col-span-1 ">
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder=""
                                    className="shadow-xl peer h-full w-full rounded-xl border border-gray-300 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-gray-700 outline-none transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 focus:border-2 focus:border-[#ed1f26] focus:border-t-transparent focus:border-r-transparent focus:border-l-transparent disabled:border-0 disabled:bg-gray-50"
                                    required=""
                                    value={phone}
                                    onChange={(e) => setphone(e.target.value)}
                                    defaultValue=""
                                />
                                <label className="pointer-events-none absolute left-3 -top-1.5 flex items-center space-x-2  select-none text-[12px] font-medium leading-tight text-gray-800 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-focus:-top-1.5 peer-focus:text-[12px] peer-focus:text-[#ed1f26]">
                                    <span>
                                        <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="phone"
                                            className="svg-inline--fa fa-phone "
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                                            />
                                        </svg>
                                    </span>
                                    <span>Phone</span>
                                </label>
                            </div>
                            <div className="relative h-11 w-full col-start-1 col-span-2 ">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder=""
                                    className="shadow-xl peer h-full w-full rounded-xl border  border-gray-300 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-gray-700 outline-none transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 focus:border-2 focus:border-[#ed1f26] focus:border-t-transparent focus:border-r-transparent focus:border-l-transparent disabled:border-0 disabled:bg-gray-50"
                                    required=""
                                    value={email}
                                    onChange={(e) => setemail(e.target.value)}
                                    defaultValue=""
                                />
                                <label className="pointer-events-none absolute left-3 -top-1.5 flex items-center space-x-2  select-none text-[12px] font-medium leading-tight text-gray-800 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-focus:-top-1.5 peer-focus:text-[12px] peer-focus:text-[#ed1f26]">
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
                            <div className="relative h-11 w-full col-start-1 col-span-2">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder=""
                                    className="shadow-xl peer h-full w-full rounded-xl border border-gray-300 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-black outline-none transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 focus:border-2 focus:border-[#ed1f26] focus:border-t-transparent focus:border-r-transparent focus:border-l-transparent disabled:border-0 disabled:bg-gray-50"
                                    required=""
                                    value={password}
                                    onChange={(e) => setpassword(e.target.value)}
                                    defaultValue=""
                                />
                                <label className="pointer-events-none absolute left-3 -top-1.5 flex items-center space-x-2  select-none text-[12px] font-medium leading-tight text-gray-800 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-focus:-top-1.5 peer-focus:text-[12px] peer-focus:text-[#ed1f26]">
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
                        </div>
                        <button
                            type="submit"
                            className="py-2 px-4 rounded-full mt-6 font-medium text-white w-1/2 mx-auto  block  bg-gradient-to-r from-purple-500 to-red-500   transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95"
                        >
                            Register Now
                        </button>
                        <p className="text-center mt-4 text-gray-600">
                            Already registered?{" "}
                            <a
                                className="text-[#ed1f26] font-semibold hover:underline"
                                href="/login"
                            >
                                Login
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}
