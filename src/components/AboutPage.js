import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";


const AboutPage = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    const [open, setopen] = useState(-1);
    const [open1, setopen1] = useState(false);
    const [open2, setopen2] = useState(false);
    const [open3, setopen3] = useState(false);
    const [open4, setopen4] = useState(false);
    const [open5, setopen5] = useState(false);
    const [open6, setopen6] = useState(false);
    const [open7, setopen7] = useState(false);
    const [open8, setopen8] = useState(false);

    return (
        <div>
            <div
                className="relative flex justify-center items-center flex-col text-center sm:text-left mb-10 mt-6 aos-init aos-animate mt-14"
                data-aos="zoom-out"
                data-aos-duration={1000}
            >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold flex items-center justify-center sm:justify-start text-center">
                    <span className="mr-2">About Us</span>
                </h1>
                <img
                    src="/assets/underline-C1Mgkxna.png"
                    className="absolute top-[-4rem]  sm:top-[-5rem] md:top-[-6rem] lg:top-[-5rem] left-1/2 transform -translate-x-1/2 w-48 sm:w-56 md:w-72"
                />
            </div>
            <section className="flex flex-col lg:flex-row items-center justify-between py-12 px-4 lg:px-16 md:mt-20 overflow-hidden ">
                <div
                    className="z-20 w-4/6 sm:w-3/5 md:w-3/6 lg:w-1/2 flex justify-center lg:justify-start aos-init aos-animate"
                    data-aos="zoom-out"
                    data-aos-duration={1000}
                >
                    <img
                        src="/assets/aboutPage-DUlwE1VT.png"
                        alt="Person with Laptop"
                        className="w-full h-auto object-cover rounded-lg scale-150"
                    />
                </div>
                <div
                    className="w-full sm:w-5/6 lg:w-1/2 mt-4 md:mt-0 md:pl-12 p-10 rounded-3xl border-2 shadow-2xl aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-duration={1000}
                >
                    <p className="text-[#323290] uppercase font-semibold text-sm sm:text-base lg:text-lg mb-4">
                        Learn Anything
                    </p>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                        Welcome to PTU Study Zone!
                    </h2>
                    <div
                        className="space-y-6 aos-init aos-animate"
                        data-aos="zoom-out"
                        data-aos-duration={1000}
                        data-aos-delay={100}
                    >
                        <div className="flex items-start shadow-2xl p-4 rounded-3xl border-2 hover:scale-105 transition-all duration-300">
                            <div className="flex-shrink-0">
                                <img
                                    src="/assets/study-NBdxLPRO.png"
                                    className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14"
                                    alt="Study Logo"
                                />
                            </div>
                            <div
                                onClick={() => setopen(!open)}
                                className="ml-4 flex-grow cursor-pointer"
                            >
                                <div className="flex justify-between items-center">
                                    <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800 hover:text-[#323290]">
                                        Your Comprehensive All-in-One Study Powerhouse
                                    </h3>
                                    <div
                                        className={`flex items-center ml-auto transition-transform duration-300 ${open ? "rotate-180" : ""
                                            }`}
                                    >
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 448 512"
                                            className="text-gray-600"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Transition for dropdown content */}
                                <div
                                    className={`overflow-hidden transition-all duration-700  ${open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="div mt-2">
                                        <p className="text-sm sm:text-base lg:text-lg text-gray-600">
                                            PTU Study Zone offers a streamlined platform for students
                                            to access essential academic resources. We provide curated
                                            study materials, past papers, and practice books
                                            specifically for PTU courses, making it easy to find
                                            reliable resources in one place.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start shadow-2xl p-4 rounded-3xl border-2 hover:scale-105 group transition-all duration-300">
                            <div className="flex-shrink-0">
                                <img
                                    src="/assets/resource-Yo49Dg-d.png"
                                    className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14"
                                />
                            </div>
                            <div onClick={() => setopen1(!open1)} className="ml-4 flex-grow">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-base  sm:text-lg lg:text-xl font-semibold text-gray-800 hover:text-[#323290] cursor-pointer">
                                        Empowering Students with Quality Resources
                                    </h3>
                                    <div
                                        className={`flex items-center cursor-pointer ml-auto ${open1 ? " rotate-180 " : ""
                                            }`}
                                    >
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 448 512"
                                            className="text-gray-600 transition-all duration-700"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div
                                    className={`overflow-hidden transition-all duration-700  ${open1 ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="div mt-2">
                                        <p className="text-sm sm:text-base lg:text-lg text-gray-600">
                                            PTU Study Zone offers a streamlined platform for students
                                            to access essential academic resources. We provide curated
                                            study materials, past papers, and practice books
                                            specifically for PTU courses, making it easy to find
                                            reliable resources in one place.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start shadow-2xl p-4 rounded-3xl border-2 hover:scale-105 group transition-all duration-300">
                            <div className="flex-shrink-0">
                                <img
                                    src="/assets/community-DGnXCg0Q.png"
                                    className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14"
                                />
                            </div>
                            <div onClick={() => setopen2(!open2)} className="ml-4 flex-grow">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-base  sm:text-lg lg:text-xl font-semibold text-gray-800 hover:text-[#323290] cursor-pointer">
                                        A Community-Driven Learning Experience
                                    </h3>
                                    <div
                                        className={`flex items-center cursor-pointer ml-auto ${open2 ? " rotate-180 " : ""
                                            }`}
                                    >
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 448 512"
                                            className="text-gray-600 transition-all duration-700"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div
                                    className={`overflow-hidden transition-all duration-700  ${open2 ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="div mt-2">
                                        <p className="text-sm sm:text-base lg:text-lg text-gray-600">
                                            PTU Study Zone offers a streamlined platform for students
                                            to access essential academic resources. We provide curated
                                            study materials, past papers, and practice books
                                            specifically for PTU courses, making it easy to find
                                            reliable resources in one place.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex flex-col lg:flex-row items-center justify-between lg:py-12 px-4 lg:px-16 lg:mt-8 -mt-20 overflow-hidden">
                <div
                    className="w-full sm:w-5/6 lg:w-1/2 lg:pl-12 p-10 rounded-3xl border-2 shadow-2xl order-2 lg:order-1 -mt-20 sm:-mt-32 md:-mt-36 lg:-mt-0 aos-init aos-animate"
                    data-aos="zoom-out"
                    data-aos-duration={1000}
                >
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                        What We Offer!
                    </h2>
                    <div
                        className="space-y-6 aos-init aos-animate"
                        data-aos="zoom-out"
                        data-aos-duration={1000}
                        data-aos-delay={100}
                    >
                        <div className="flex items-start shadow-2xl p-4 rounded-3xl border-2 hover:scale-105 group transition-all duration-300">
                            <div className="flex-shrink-0">
                                <img
                                    src="/assets/note-DAuHLyTP.png"
                                    className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14"
                                />
                            </div>
                            <div onClick={() => setopen3(!open3)} className="ml-4 flex-grow">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-base  sm:text-lg lg:text-xl font-semibold text-gray-800 group-hover:text-[rgb(50,50,144)] cursor-pointer">
                                        Student Grievances
                                    </h3>
                                    <div className={`flex items-center ml-auto transition-transform duration-300 cursor-pointer ${open3 ? "rotate-180" : ""
                                        }`}>
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 448 512"
                                            className="text-gray-600 transition-all duration-700"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div
                                    className={`overflow-hidden transition-all duration-700  ${open3 ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="div mt-2">
                                        <p className="text-sm sm:text-base lg:text-lg text-gray-600">
                                            PTU Study Zone offers a streamlined platform for students
                                            to access essential academic resources. We provide curated
                                            study materials, past papers, and practice books
                                            specifically for PTU courses, making it easy to find
                                            reliable resources in one place.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start shadow-2xl p-4 rounded-3xl border-2 hover:scale-105 group transition-all duration-300">
                            <div className="flex-shrink-0">
                                <img
                                    src="/assets/pyq-Dolk0u-s.png"
                                    className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14"
                                />
                            </div>
                            <div onClick={() => setopen4(!open4)} className="ml-4 flex-grow">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-base  sm:text-lg lg:text-xl font-semibold text-gray-800 group-hover:text-[#323290] cursor-pointer">
                                        Previous Year Questions (PYQ)
                                    </h3>
                                    <div className={`flex items-center cursor-pointer ml-auto ${open4 ? 'rotate-180' : ''}`} >
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 448 512"
                                            className="text-gray-600 transition-all duration-700"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div
                                    className={`overflow-hidden transition-all duration-700  ${open4 ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="div mt-2">
                                        <p className="text-sm sm:text-base lg:text-lg text-gray-600">
                                            A vast repository of previous year question papers to help
                                            you understand exam patterns and prepare effectively.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start shadow-2xl p-4 rounded-3xl border-2 hover:scale-105 group transition-all duration-300">
                            <div className="flex-shrink-0">
                                <img
                                    src="/assets/syllabus-DF4oYQ4T.png"
                                    className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14"
                                />
                            </div>
                            <div onClick={() => setopen5(!open5)} className="ml-4 flex-grow">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-base  sm:text-lg lg:text-xl font-semibold text-gray-800 group-hover:text-[#323290] cursor-pointer">
                                        Syllabus Information
                                    </h3>
                                    <div className={`flex items-center cursor-pointer ml-auto ${open5 ? 'rotate-180' : ''}`}>
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 448 512"
                                            className="text-gray-600 transition-all duration-700"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div
                                    className={`overflow-hidden transition-all duration-700  ${open5 ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="div mt-2">
                                        <p className="text-sm sm:text-base lg:text-lg text-gray-600 ">
                                            Stay informed with the most recent syllabus updates to plan
                                            your studies efficiently.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start shadow-2xl p-4 rounded-3xl border-2 hover:scale-105 group transition-all duration-300">
                            <div className="flex-shrink-0">
                                <img
                                    src="/assets/blog-CuU2dD2J.png"
                                    className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14"
                                />
                            </div>
                            <div onClick={() => setopen6(!open6)} className="ml-4 flex-grow">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-base  sm:text-lg lg:text-xl font-semibold text-gray-800 group-hover:text-[#323290] cursor-pointer">
                                        Blogs
                                    </h3>
                                    <div className={`flex items-center cursor-pointer ml-auto ${open6 ? 'rotate-180' : ''}`}>
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 448 512"
                                            className="text-gray-600 transition-all duration-700"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div
                                    className={`overflow-hidden transition-all duration-700  ${open6 ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="mt-2">
                                        <p className="text-sm sm:text-base lg:text-lg text-gray-600 ">
                                            Engage with the community by writing and reading blogs that
                                            share insights, tips, and experiences.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start shadow-2xl p-4 rounded-3xl border-2 hover:scale-105 group transition-all duration-300">
                            <div className="flex-shrink-0">
                                <img
                                    src="/assets/youtube-t5Ps9dEY.png"
                                    className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14"
                                />
                            </div>
                            <div onClick={() => setopen7(!open7)} className="ml-4 flex-grow">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-base  sm:text-lg lg:text-xl font-semibold text-gray-800 group-hover:text-[#323290]">
                                        Curated YouTube Channels
                                    </h3>
                                    <div className={`flex items-center cursor-pointer ml-auto ${open7 ? ' rotate-180' : ''}`}>
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 448 512"
                                            className="text-gray-600 transition-all duration-700"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div
                                    className={`overflow-hidden transition-all duration-700  ${open7 ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className=" mt-2">
                                        <p className="text-sm sm:text-base lg:text-lg text-gray-600 ">
                                            Explore our curated YouTube channels for video lectures and
                                            tutorials tailored to Punjab Technical University's
                                            syllabus.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start shadow-2xl p-4 rounded-3xl border-2 hover:scale-105 group transition-all duration-300">
                            <div className="flex-shrink-0">
                                <img
                                    src="/assets/book-C7M0qZnT.png"
                                    className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14"
                                />
                            </div>
                            <div onClick={() => setopen8(!open8)} className="ml-4 flex-grow">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-base cursor-pointer sm:text-lg lg:text-xl font-semibold text-gray-800 group-hover:text-[#323290]">
                                        Books Available
                                    </h3>
                                    <div className={`flex items-center cursor-pointer ml-auto ${open8 ? ' rotate-180' : ''}`}>
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 448 512"
                                            className="text-gray-600 transition-all duration-700"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div
                                    className={`overflow-hidden transition-all duration-700  ${open8 ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="mt-2">
                                        <p className="text-sm sm:text-base lg:text-lg text-gray-600 ">
                                            Access a range of textbooks and reference books recommended
                                            for your courses.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="z-10 w-4/6 sm:w-3/5 md:w-3/6 lg:w-1/2 flex justify-center lg:justify-start order-1 lg:order-2 aos-init aos-animate"
                    data-aos="zoom-out"
                    data-aos-duration={1000}
                >
                    <img
                        src="/assets/aboutPage1-CmXUIzVi.png"
                        alt="Person with Laptop"
                        className="w-full h-auto object-cover rounded-lg scale-75"
                    />
                </div>
            </section>
            <section className=" flex flex-col md:flex-row items-center justify-between py-12 px-4 lg:space-x-10 md:space-x-2 overflow-hidden">
                <div
                    className="sm:w-5/6 md:w-full lg:w-1/2 mt-8 md:mt-0 md:pl-12 p-10 rounded-3xl border-2 shadow-2xl aos-init aos-animate"
                    data-aos="zoom-out"
                    data-aos-duration={1000}
                >
                    <div className="flex items-center mb-4">
                        <img
                            src="/assets/bulb-BkRYyTwO.png"
                            className="w-16 h-16 sm:w-20 sm:h-20"
                        />
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold ml-4">
                            Our Vision
                        </h2>
                    </div>
                    <div
                        className="flex items-start shadow-2xl p-4 rounded-3xl border-2 hover:scale-105 transition-all duration-300 aos-init aos-animate"
                        data-aos="zoom-out"
                        data-aos-duration={1000}
                        data-aos-delay={100}
                    >
                        <div className="ml-4">
                            <p className="text-sm sm:text-base lg:text-lg text-gray-600">
                                We're expanding PTU Study Zone to include a Teacher Panel for
                                real-time communication, assignment submissions, and feedback.
                                Future updates will offer personalized learning paths,
                                interactive materials, and a discussion forum to foster
                                collaboration and support, creating a more engaged and
                                supportive academic community.
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className="sm:w-5/6 md:w-full lg:w-1/2 mt-8 md:mt-0 md:pl-12 p-10 rounded-3xl border-2 shadow-2xl aos-init aos-animate"
                    data-aos="zoom-out"
                    data-aos-duration={1000}
                >
                    <div className="flex items-center mb-4">
                        <img
                            src="/assets/brain-CwWeUtXQ.png"
                            className="w-16 h-16 sm:w-20 sm:h-20"
                        />
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold ml-4">
                            Core Inspiration
                        </h2>
                    </div>
                    <div
                        className="flex items-start shadow-2xl p-4 rounded-3xl border-2 hover:scale-105 transition-all duration-300 aos-init aos-animate"
                        data-aos="zoom-out"
                        data-aos-duration={1000}
                        data-aos-delay={100}
                    >
                        <div className="ml-4">
                            <p className="text-sm sm:text-base lg:text-lg text-gray-600">
                                PTU Study Zone was created out of our own first-year challenges
                                with finding study resources and understanding the syllabus. We
                                wanted to solve these issues by providing a centralized platform
                                that offers all essential academic materials in one place,
                                making the academic journey smoother and more accessible for
                                future students.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div className=" w-full p-2 md:p-8 lg:p-12 rounded-3xl border-2 shadow-2xl flex flex-col bg-gray-50 ml-2 mr-2 overflow-hidden">
                <div
                    className=" flex items-center space-x-2 md:space-x-5 self-center mb-8 md:mb-10 aos-init aos-animate"
                    data-aos="zoom-out"
                    data-aos-duration="1000"
                >
                    <img
                        src="/assets/brains.png"
                        alt=""
                        className="w-16 h-16 md:w-20 md:h-20 "
                    />
                    <h2 className=" text-3xl md:text-4xl font-extrabold text-center text-[#323290]">
                        Meet The Developers!
                    </h2>
                </div>
                <section className="flex flex-col md:flex-row items-center justify-between px-4 md:px-0  lg:px-16 md:space-x-0 lg:space-x-10 ">
                    <div
                        className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-6 lg:pl-12 p-6 md:p-0 aos-init aos-animate"
                        data-aos="zoom-out"
                        data-aos-duration={1000}
                        data-aos-delay={100}
                    >
                        <div className="max-w-xs md:max-w-sm mx-auto rounded-3xl overflow-hidden shadow-2xl group relative hover:scale-105 transition-transform duration-300 bg-white">
                            <img
                                className="w-auto h-48 md:h-64 m-auto"
                                src="/assets/team.jpg"
                                alt="image-1"
                            />
                            <div className="px-4 md:px-6 py-4">
                                <div className="font-extrabold text-xl md:text-2xl mb-2 text-center text-[#323290]">
                                    <a href="#">Demmo</a>
                                </div>
                                <p className="text-base md:text-lg font-semibold text-center text-gray-800">
                                    Student
                                </p>
                                <p className="text-base md:text-lg font-semibold text-center text-gray-800">
                                    BTech CSE (3rd Year)
                                </p>
                                <p className="text-base md:text-lg font-semibold text-center text-gray-800">
                                    Punjab Technical University
                                </p>
                            </div>
                            <div className="absolute left-4 top-4 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700">
                                <a
                                    href="https://www.linkedin.com/"
                                    className="block my-1 md:my-2 text-white hover:scale-105"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="/assets/linkedin-C4XGmgse.png"
                                        className="w-8 md:w-11 h-8 md:h-11"
                                        alt="LinkedIn"
                                    />
                                </a>
                                <a
                                    href="https://github.com/"
                                    className="block my-1 md:my-2 text-white hover:scale-105"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="/assets/github-DcPzeaH2.png"
                                        className="w-8 md:w-11 h-8 md:h-11"
                                        alt="GitHub"
                                    />
                                </a>
                                <a
                                    href="https://www.instagram.com/"
                                    className="block my-1 md:my-2 text-white hover:scale-105"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="/assets/instagram-BPQ3K29S.png"
                                        className="w-8 md:w-11 h-8 md:h-11"
                                        alt="Instagram"
                                    />
                                </a>
                                <a
                                    href="https://geteternalknowledge.blogspot.com"
                                    className="block my-1 md:my-2 text-white hover:scale-105"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="/assets/blogger-ghCiDV1M.png"
                                        className="w-8 md:w-11 h-8 md:h-11"
                                        alt="Blog"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-6 lg:pl-12 p-6 md:p-0 aos-init aos-animate"
                        data-aos="zoom-out"
                        data-aos-duration={1000}
                        data-aos-delay={100}
                    >
                        <div className="max-w-xs md:max-w-sm mx-auto rounded-3xl overflow-hidden shadow-2xl group relative hover:scale-105 transition-transform duration-300 bg-white">
                            <img
                                className="w-auto h-48 md:h-64 m-auto"
                                src="/assets/team.jpg"
                                alt="image-2"
                            />
                            <div className="px-4 md:px-6 py-4">
                                <div className="font-extrabold text-xl md:text-2xl mb-2 text-center text-[#323290]">
                                    Demmo
                                </div>
                                <p className="text-base md:text-lg font-semibold text-center text-gray-800">
                                    Student
                                </p>
                                <p className="text-base md:text-lg font-semibold text-center text-gray-800">
                                    BTech CSE (3rd Year)
                                </p>
                                <p className="text-base md:text-lg font-semibold text-center text-gray-800">
                                    Punjab Technical University
                                </p>
                            </div>
                            <div className="absolute left-4 top-4 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700">
                                <a
                                    href="https://www.linkedin.com/in/"
                                    className="block my-1 md:my-2 text-white hover:scale-105"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="/assets/linkedin-C4XGmgse.png"
                                        className="w-8 md:w-11 h-8 md:h-11"
                                        alt="LinkedIn"
                                    />
                                </a>
                                <a
                                    href="https://github.com/"
                                    className="block my-1 md:my-2 text-white hover:scale-105"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="/assets/github-DcPzeaH2.png"
                                        className="w-8 md:w-11 h-8 md:h-11"
                                        alt="GitHub"
                                    />
                                </a>
                                <a
                                    href="https://www.instagram.com/"
                                    className="block my-1 md:my-2 text-white hover:scale-105"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="/assets/instagram-BPQ3K29S.png"
                                        className="w-8 md:w-11 h-8 md:h-11"
                                        alt="Instagram"
                                    />
                                </a>
                                <a
                                    href="#"
                                    className="block my-1 md:my-2 text-white hover:scale-105"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="/assets/blogger-ghCiDV1M.png"
                                        className="w-8 md:w-11 h-8 md:h-11"
                                        alt="Blog"
                                    />
                                </a>
                            </div>
                        </div>

                    </div>

                </section>

            </div>





        </div>

    );
};

export default AboutPage;
