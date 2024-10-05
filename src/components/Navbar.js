import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ isLoggedIn }) => {
    // State to manage the mobile menu and login status
    console.log(isLoggedIn);
    let exist=localStorage.getItem('login')
    const navigate=useNavigate()
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
function handleLogout(){
    localStorage.removeItem('login')
    navigate('/login')
}
    return (
        <div>
            <header className="fixed w-full z-30 transition-all duration-300 ease-in-out bg-transparent py-4">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between">
                        <div className="flex-shrink-0">
                            <a
                                title="home"
                                className="text-2xl font-bold transition-all duration-200 rounded font-pj hover:text-opacity-50 text-white"
                                href="/"
                            >
                                <img
                                    src="/assets/mainlogo.png"
                                    alt="Main Logo"
                                    style={{ height: 50, width: 'auto' }}
                                />
                            </a>
                        </div>
                        {/* Hamburger Button */}
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="focus:outline-none text-white"
                                onClick={toggleMenu}
                            >
                                <svg
                                    className="w-7 h-7"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                        {/* Mobile Menu */}
                        <div
                            className={`fixed inset-0 z-40 bg-white text-black transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                                }`}
                        >
                            <div className="flex justify-end p-4">
                                <button className="text-black" onClick={toggleMenu}>
                                    <svg
                                        className="w-6 h-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <nav className="flex flex-col items-center space-y-4 text-[#ed1f26] font-semibold">
                                <a className="relative inline-block text-[#ed1f26] group" href="/">
                                    Home
                                    <span className="absolute left-0 bottom-0 h-0.5 bg-red-500 transition-transform transform scale-x-0 group-hover:scale-x-100 w-full" />
                                </a>
                                <a
                                    className="relative inline-block text-[#ed1f26] group"
                                    href="/about"
                                >
                                    About Us
                                    <span className="absolute left-0 bottom-0 h-0.5 bg-red-500 transition-transform transform scale-x-0 group-hover:scale-x-100 w-full" />
                                </a>
                                {!exist ? (
                                    <>
                                        <button className="py-2 px-4 rounded-full mt-6 font-medium text-white w-28 mx-auto block bg-gradient-to-r from-purple-500 to-red-500 transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95">
                                            <a href="/login">Login</a>
                                        </button>
                                        <button className="py-2 px-4 rounded-full font-medium text-white w-28 mx-auto block bg-gradient-to-r from-purple-500 to-red-500 transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95">
                                            <a href="/register">Register</a>
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button className="py-2 px-4 rounded-full font-medium text-white w-28 mx-auto block bg-gradient-to-r from-purple-500 to-red-500 transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95">
                                            <a href="/dashboard">Dashboard</a>
                                        </button>
                                        <button onClick={()=>handleLogout()} className="py-2 px-4 rounded-full font-medium text-white w-28 mx-auto block bg-gradient-to-r from-purple-500 to-red-500 transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95">
                                            Logout
                                        </button>
                                    </>
                                )}
                            </nav>
                        </div>
                        {/* Desktop Links */}
                        <div className="hidden lg:absolute lg:inset-y-0 lg:flex lg:items-center lg:justify-center lg:space-x-12 lg:-translate-x-1/2 lg:left-1/2">
                            <a
                                title="About"
                                className="relative text-base font-medium transition-all duration-200 rounded font-pj text-white before:bg-white before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform before:duration-300"
                                href="/about"
                            >
                                About Us
                            </a>
                            {exist && (
                                <>
                                    <a
                                        title="Resources"
                                        className="relative text-base font-medium transition-all duration-200 rounded font-pj text-white before:bg-white before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform before:duration-300"
                                        href="/resources"
                                    >
                                        Resources
                                    </a>
                                    <a
                                        title="Blogs"
                                        className="relative text-base font-medium transition-all duration-200 rounded font-pj text-white before:bg-white before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform before:duration-300"
                                        href="/blogs"
                                    >
                                        Blogs
                                    </a>
                                    <a
                                        title="Complaints"
                                        className="relative text-base font-medium transition-all duration-200 rounded font-pj text-white before:bg-white before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform before:duration-300"
                                        href="/complaints"
                                    >
                                        Complaints
                                    </a>
                                    <a
                                        title="Contact Us"
                                        className="relative text-base font-medium transition-all duration-200 rounded font-pj text-white before:bg-white before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform before:duration-300"
                                        href="/contact"
                                    >
                                        Contact Us
                                    </a>
                                </>
                            )}
                        </div>
                        <div className="hidden lg:flex lg:items-center lg:space-x-6">
                            {!exist ? (
                                <>
                                    <a
                                        title="Login"
                                        className="px-5 py-2 text-base font-semibold leading-7 transition-all duration-200 bg-transparent border border-current rounded-xl font-pj hover:bg-white hover:text-black text-white"
                                        href="/login"
                                    >
                                        Login
                                    </a>
                                    <a
                                        title="Register"
                                        className="px-5 py-2 text-base font-semibold leading-7 transition-all duration-200 bg-transparent border border-current rounded-xl font-pj hover:bg-white hover:text-black text-white"
                                        href="/register"
                                    >
                                        Register
                                    </a>
                                </>
                            ) : (
                                <>
                                    <a
                                        title="Dashboard"
                                        className="px-5 py-2 text-base font-semibold leading-7 transition-all duration-200 bg-transparent border border-current rounded-xl font-pj hover:bg-white hover:text-black text-white"
                                        href="/dashboard"
                                    >
                                        Dashboard
                                    </a>
                                    <div
                                        title="Logout"
                                        className="px-5 py-2 text-base font-semibold leading-7 transition-all duration-200 bg-transparent border border-current rounded-xl font-pj hover:bg-white hover:text-black text-white"
                                        onClick={()=>handleLogout()} 
                                    >
                                        Logout
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;

