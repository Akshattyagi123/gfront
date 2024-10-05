import React from 'react'
import { useState, useEffect } from 'react';
import Aos from "aos";
import Footer from './Footer';
import "aos/dist/aos.css";




export const Header = () => {
    const [show1, setshow1] = useState(false);
    const [show2, setshow2] = useState(false);
    const [show3, setshow3] = useState(false);
    const [show4, setshow4] = useState(false);
    const [show5, setshow5] = useState(false);
    const [show6, setshow6] = useState(false);

    useEffect(() => {
        Aos.init();
    }, []);
    return (

        <div id="root">

            <div className="relative md:h-screen lg:h-screen h-[70vh] overflow-hidden">

                <video
                    className="absolute left-0 w-full md:h-full h-[70vh] object-cover scale-125"
                    src="/assets/ptuvid-Bj470qcU.mp4"
                    autoPlay
                    muted
                    loop
                    preload="auto"
                    playsInline=""
                    style={{ filter: "brightness(60%) contrast(120%)" }}
                />

                <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-500" />


            </div>
            <div className=' relative -mt-[150px] '>
                <svg
                    viewBox="0 0 500 150"
                    preserveAspectRatio="none"
                    className="w-full h-[150px]"
                >
                    <path
                        d="M-5.07,73.52 C149.99,150.00 299.66,-102.13 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                        style={{ stroke: "none", fill: "rgb(255, 255, 255)" }}
                    />
                </svg></div>

            <div className="bg-white">
                <section className="bg-opacity-30 py-10 sm:py-16 lg:py-24">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 lg:justify-center">
                            <div className="flex flex-col items-center lg:items-start">
                                <h1
                                    className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-7xl text-center lg:text-left aos-init aos-animate"
                                    data-aos="fade-up"
                                >
                                    WELCOME TO
                                    <span className="text-[#ed1f26] block">PTU STUDY ZONE</span>
                                </h1>
                                <p
                                    className="mt-4 text-base text-black lg:mt-8 sm:text-xl text-center lg:text-left aos-init"
                                    data-aos="fade-up"
                                    data-aos-delay={100}
                                >
                                    Navigate the Realm of Engineering Education : <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 font-bold">
                                        Explore, Learn, Excel - Once at PTU STUDY ZONE
                                    </span>
                                </p>
                                <a
                                    title=""
                                    className="inline-flex items-center px-6 py-4 mt-8 font-bold text-[#323290] transition-all duration-200 bg-transparent border-2 border-[#323290] rounded-full lg:mt-8 hover:bg-[#323290] hover:text-white focus:bg-[#323290] focus:text-white aos-init"
                                    role="button"
                                    data-aos="fade-up"
                                    data-aos-delay={200}
                                    href="/register"
                                >
                                    Join Us
                                    <svg
                                        className="w-6 h-6 ml-8 -mr-2"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </a>
                            </div>
                            <div className="w-5/6 md:w-2/3 lg:w-full m-auto">
                                <img
                                    className="w-full aos-init"
                                    src="/assets/student.png"
                                    alt="Study Zone"
                                    data-aos="zoom-out"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div
                className="h-96 flex items-center justify-center mt-24"
                style={{
                    backgroundImage:
                        'url("/assets/slider-image1-DcAlHLbk.jpg"), linear-gradient(to right, rgb(91, 66, 156), rgb(40, 72, 110))',
                    backgroundBlendMode: "overlay",
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed"
                }}
            >
                <div className="text-center px-1 sm:px-0">
                    <h1
                        className="text-4xl font-bold text-white mb-4 aos-init"
                        data-aos="zoom-out"
                        data-duration={1000}
                    >
                        START LEARNING NOW
                    </h1>
                    <h2
                        className="text-2xl font-medium text-white mb-8 aos-init"
                        data-aos="zoom-out"
                        data-duration={1000}
                        data-aos-delay={100}
                    >
                        Enhance your skills with best available resources
                    </h2>
                    <div className="flex gap-4 justify-center">
                        <a
                            className="bg-[#323290] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded aos-init"
                            data-aos="zoom-out"
                            data-duration={1000}
                            data-aos-delay={200}
                            href="/login"
                        >
                            Get started now
                        </a>
                        <a
                            className="bg-[#ed1f26] hover:bg-pink-700 text-white font-bold py-2 px-4 rounded aos-init"
                            data-aos="zoom-out"
                            data-duration={1000}
                            data-aos-delay={200}
                            href="/login"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <div className="relative overflow-hidden ">
                    <div
                        className="absolute inset-0 z-[-1]"
                        style={{
                            backgroundSize: "cover",
                            width: "100%",
                            height: "120vh",
                            backgroundRepeat: "no-repeat",
                            backgroundAttachment: "fixed",
                            transform: "scaleX(-1)",
                        }}
                    />
                    <div className="flex  flex-col lg:flex-row items-center lg:items-start justify-between max-w-6xl mx-auto py-12 px-4 mt-16 mb-0 gap-40   md:mt-32 md:mb-0 lg:mt-32 lg:mb-24">
                        <div className="mt-8 lg:mt-0 lg:ml-8 w-5/6 flex-grow lg:w-full order-2 lg:order-1 ">
                            <div
                                className="max-w-md mx-auto rounded-2xl p-8 bg-white shadow-lg background aos-init aos-animate"
                                data-aos="fade-up"
                            >
                                <div className="mb-4">
                                    <div className="bg-[#323290] text-white flex items-center justify-between p-4 rounded-full cursor-pointer ">
                                        <h3 className="font-semibold text-base md:text-lg lg:text-xl">
                                            Our Mission
                                        </h3>
                                        <div
                                            onClick={() => setshow1(!show1)}
                                            className="w-8 h-8 bg-white text-[#323290] rounded-full flex items-center justify-center text-lg md:text-xl  "
                                        >
                                            +
                                        </div>
                                    </div>
                                    {show1 ?
                                        <div className="bg-white text-[#323290] p-4 rounded-3xl shadow-inner translate-y-5 ">
                                            At PTU Study Zone, we are driven by a singular mission: to
                                            empower PTU students pursuing B.Tech in Computer Science and
                                            Engineering with the tools and resources they need to excel
                                            in their studies. We believe that access to quality
                                            educational materials and a supportive community can make
                                            all the difference in your educational experience.
                                        </div>
                                        : null}
                                </div>
                                <div className="mb-4">
                                    <div className="bg-[#323290] text-white flex items-center justify-between p-4 rounded-full cursor-pointer ">
                                        <h3 className="font-semibold text-base md:text-lg lg:text-xl">
                                            What We Offer
                                        </h3>
                                        <div onClick={() => setshow2(!show2)} className="w-8 h-8 bg-white text-[#323290] rounded-full flex items-center justify-center text-lg md:text-xl">
                                            +
                                        </div>
                                    </div>

                                    {show2 ? <div className="bg-white text-[#323290] p-4 rounded-3xl shadow-inner">
                                        Our platform provides a centralized hub for students to
                                        access essential study resources, including lecture notes,
                                        previous year question papers, and comprehensive syllabus
                                        information. We've designed our website to simplify the
                                        search for study materials, making it easy for you to find
                                        the resources you need to succeed in your coursework.
                                    </div> : null}

                                </div>
                                <div className="mb-4">
                                    <div className="bg-[#323290] text-white flex items-center justify-between p-4 rounded-full cursor-pointer ">
                                        <h3 className="font-semibold text-base md:text-lg lg:text-xl">
                                            Subject-Specific YouTube Channels
                                        </h3>
                                        <div onClick={() => setshow3(!show3)} className="w-8 h-8 bg-white text-[#323290] rounded-full flex items-center justify-center text-lg md:text-xl">
                                            +
                                        </div>
                                    </div>

                                    {show3 ? <div className="bg-white text-[#323290] p-4 rounded-3xl shadow-inner">
                                        We understand that learning extends beyond the classroom,
                                        which is why we've curated a collection of subject-specific
                                        YouTube channels to supplement your studies. These channels
                                        cover a range of topics, offering video lectures and
                                        tutorials to enhance your understanding and support your
                                        academic growth.
                                    </div> : null
                                    }
                                </div>
                                <div className="mb-4">
                                    <div className="bg-[#323290] text-white flex items-center justify-between p-4 rounded-full cursor-pointer ">
                                        <h3 className="font-semibold text-base md:text-lg lg:text-xl">
                                            Community and Support
                                        </h3>
                                        <div onClick={() => setshow4(!show4)} className="w-8 h-8 bg-white text-[#323290] rounded-full flex items-center justify-center text-lg md:text-xl">
                                            +
                                        </div>
                                    </div>

                                    {show4 ? <div className="bg-white text-[#323290] p-4 rounded-3xl shadow-inner">
                                        Education is a collaborative journey, and we encourage the
                                        exchange of ideas and experiences. Our discussion forums
                                        provide a platform for you to engage with fellow students,
                                        ask questions, and share valuable insights. We believe in
                                        the strength of community-driven learning.
                                    </div> : null}

                                </div>
                                <div className="mb-4">
                                    <div className="bg-[#323290] text-white flex items-center justify-between p-4 rounded-full cursor-pointer ">
                                        <h3 className="font-semibold text-base md:text-lg lg:text-xl">
                                            Your Success Is Our Priority
                                        </h3>
                                        <div onClick={() => setshow5(!show5)} className="w-8 h-8 bg-white text-[#323290] rounded-full flex items-center justify-center text-lg md:text-xl">
                                            +
                                        </div>
                                    </div>

                                    {show5 ? <div className="bg-white text-[#323290] p-4 rounded-3xl shadow-inner">
                                        PTU Study Zone is committed to helping you succeed in your
                                        academic pursuits. We are continuously working to expand and
                                        improve our offerings to meet your evolving needs. Your
                                        feedback and suggestions are invaluable in shaping the
                                        future of our platform.
                                    </div> : null}

                                </div>
                                <div className="mb-4">
                                    <div className="bg-[#323290] text-white flex items-center justify-between p-4 rounded-full cursor-pointer ">
                                        <h3 className="font-semibold text-base md:text-lg lg:text-xl">
                                            Join Our Community
                                        </h3>
                                        <div onClick={() => setshow6(!show6)} className="w-8 h-8 bg-white text-[#323290] rounded-full flex items-center justify-center text-lg md:text-xl">
                                            +
                                        </div>
                                    </div>

                                    {show6 ? <div className="bg-white text-[#323290] p-4 rounded-3xl shadow-inner">
                                        We invite you to explore the wealth of resources we have to
                                        offer, engage with your peers, and make the most of your
                                        time at PTU. We are here to support your educational journey
                                        and provide you with the tools you need to thrive. Thank you
                                        for choosing PTU Study Zone. We look forward to being part
                                        of your academic success story.
                                    </div> : null}
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 lg:mt-0 lg:ml-8 flex-grow order-1 lg:order-2 w-5/6 m-auto lg:w-full">
                            <div
                                className="relative flex justify-center items-center flex-col text-center sm:text-left aos-init aos-animate"
                                data-aos="zoom-out"
                            >
                                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold flex items-center justify-center sm:justify-start mb-20">
                                    <span className="mr-2">About</span>
                                    <span className="text-[#ed1f26]">US</span>
                                </h1>
                                <img
                                    src="/assets/underline-C1Mgkxna.png"
                                    className="absolute top-[-4rem] sm:top-[-4rem] md:top-[-5rem] left-1/2 transform -translate-x-1/2 w-48 sm:w-56 md:w-72"
                                />
                                <img src="/assets/student1.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-4 py-8 md:px-8 lg:px-16 lg:mt-0 md:mt-24 mt-16">
                <h1
                    className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16 md:mb-28 lg:mb-36 relative aos-init"
                    data-aos="fade-up"
                    data-aos-duration={1000}
                >
                    Resources We <span className="text-[#ed1f26]">Offer</span>
                    <div className="flex justify-center">
                        <img
                            src="/assets/underline-C1Mgkxna.png"
                            alt="Underline"
                            className="w-[15rem] -top-20 sm:w-[20rem] sm:-top-28 md:w-[30rem] md:-top-48 absolute"
                        />
                    </div>
                </h1>
                <div className="max-w-7xl min-w-2xl mx-auto py-12 px-4 grid gap-8 grid-cols-1 w-5/6 sm:w-2/3 md:w-full lg:w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div
                        className="bg-white rounded-2xl shadow-md shadow-[#323290] p-6 relative mb-24 flex flex-col items-center hover:scale-105 transition-transform duration-300 aos-init"
                        data-aos="zoom-out"
                        data-aos-duration={1000}
                    >
                        <div
                            className="bg-[#323290] w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto mb-6 rounded-full text-white flex items-center justify-center absolute -top-12 md:-top-16 lg:-top-20 right-0 aos-init"
                            data-aos="zoom-out"
                            data-aos-duration={1000}
                            data-aos-offset={100}
                        >
                            <img
                                src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2078'%20id='Notes'%3e%3cpath%20fill='%23ffffff'%20fill-rule='evenodd'%20d='M75.8%2011.6a1.985%201.985%200%200%200-2.6%203%207.392%207.392%200%200%201%202.8%205.8v46.4a7.514%207.514%200%200%201-7.4%207.4H11.4A7.514%207.514%200%200%201%204%2066.8V20.4a7.514%207.514%200%200%201%207.4-7.4h30a2%202%200%201%200%200-4h-30A11.27%2011.27%200%200%200%200%2020.4v46.2C.068%2072.868%205.132%2077.932%2011.4%2078h57A11.4%2011.4%200%200%200%2080%2066.8V20.4a11.606%2011.606%200%200%200-4.2-8.8zM56.2%2068a2.3%202.3%200%200%200%201.8%201.2%201.922%201.922%200%200%200%201.8-1.2l6-12.2a1.2%201.2%200%200%200%20.2-.8V8a8%208%200%201%200-16%200v47a.965.965%200%200%200%20.2.8l6%2012.2zm1.8-5.4L55.2%2057h5.6L58%2062.6zM54%208a4%204%200%201%201%208%200v17.2h-8V8zm0%2021.2h8v4h-8v-4zm0%208.2h8V53h-8V37.4zm-14.2-5H12.2a2%202%200%201%200%200%204H40a1.847%201.847%200%200%200%201.8-2%201.89%201.89%200%200%200-2-2zm0%208H12.2a2%202%200%201%200%200%204H40a1.847%201.847%200%200%200%201.8-2%201.89%201.89%200%200%200-2-2zm0%208H12.2a2%202%200%201%200%200%204H40a1.847%201.847%200%200%200%201.8-2%201.89%201.89%200%200%200-2-2z'%20class='color3f4662%20svgShape'%3e%3c/path%3e%3c/svg%3e"
                                alt="Student Grievances Icon"
                                className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
                            />
                        </div>
                        <h2
                            className="text-base md:text-lg lg:text-xl font-bold mb-2 text-gray-800 pt-16 aos-init"
                            data-aos="zoom-out"
                            data-aos-duration={1000}
                            data-aos-delay={100}
                        >
                            Student Grievances
                        </h2>
                        <p
                            className="text-sm md:text-base lg:text-lg text-gray-600 mb-4 leading-relaxed text-center justify aos-init"
                            data-aos="zoom-out"
                            data-aos-duration={1000}
                            data-aos-delay={100}
                            data-aos-offset={100}
                        >
                            Submit your complaints or issues here. The Head of Department (HOD)
                            will review them, take appropriate action, and work towards resolving
                            them.
                        </p>
                        <button
                            className="bg-white text-[#323290] font-semibold border-2 border-[#323290] py-2 px-4 md:py-2.5 md:px-6 rounded-full shadow hover:bg-[#323290] hover:text-white transition-colors duration-300 aos-init"
                            data-aos="zoom-out"
                            data-aos-duration={1000}
                            data-aos-delay={100}
                            data-aos-offset={100}
                        >
                            Explore
                        </button>
                    </div>
                    <div
                        className="bg-white rounded-2xl shadow-md shadow-[#323290] p-6 relative mb-24 flex flex-col items-center hover:scale-105 transition-transform duration-300 aos-init"
                        data-aos="zoom-out"
                        data-aos-duration={1000}
                    >
                        <div
                            className="bg-[#323290] w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto mb-6 rounded-full text-white flex items-center justify-center absolute -top-12 md:-top-16 lg:-top-20 right-0 aos-init"
                            data-aos="zoom-out"
                            data-aos-duration={1000}
                            data-aos-offset={100}
                        >
                            <img
                                src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'%20id='Edit'%3e%3cpath%20d='M416%2056H96c-22.056%200-40%2017.944-40%2040v320c0%2022.056%2017.944%2040%2040%2040h320c22.056%200%2040-17.944%2040-40V96c0-22.056-17.944-40-40-40Zm24%20360c0%2013.232-10.768%2024-24%2024H96c-13.232%200-24-10.768-24-24V96c0-13.232%2010.768-24%2024-24h320c13.232%200%2024%2010.768%2024%2024v320Z'%20fill='%23ffffff'%20class='color000000%20svgShape'%3e%3c/path%3e%3cpath%20d='M399.032%20186.344c-3-3-8.312-3-11.312%200L251.952%20322.112a7.989%207.989%200%200%200-1.936%203.128l-11.312%2033.936a7.988%207.988%200%200%200%201.936%208.184%208.009%208.009%200%200%200%205.656%202.344c.848%200%201.696-.136%202.528-.416l33.936-11.312a8.086%208.086%200%200%200%203.128-1.928L421.656%20220.28a7.979%207.979%200%200%200%202.344-5.656c0-2.12-.84-4.16-2.344-5.656l-22.624-22.624zM275.912%20343.4l-16.968%205.656%205.656-16.968%20128.776-128.776%2011.312%2011.312L275.912%20343.4zM128%20136h256c4.424%200%208-3.584%208-8s-3.576-8-8-8H128c-4.416%200-8%203.584-8%208s3.584%208%208%208zm0%2048h224c4.424%200%208-3.584%208-8s-3.576-8-8-8H128c-4.416%200-8%203.584-8%208s3.584%208%208%208zm0%2048h176c4.424%200%208-3.584%208-8s-3.576-8-8-8H128c-4.416%200-8%203.584-8%208s3.584%208%208%208zm0%2048h128c4.416%200%208-3.576%208-8%200-4.424-3.584-8-8-8H128c-4.416%200-8%203.576-8%208%200%204.424%203.584%208%208%208zm96%2032h-96c-4.416%200-8%203.576-8%208%200%204.424%203.584%208%208%208h96c4.416%200%208-3.576%208-8%200-4.424-3.584-8-8-8zm-16%2048h-80c-4.416%200-8%203.576-8%208%200%204.424%203.584%208%208%208h80c4.416%200%208-3.576%208-8%200-4.424-3.584-8-8-8z'%20fill='%23ffffff'%20class='color000000%20svgShape'%3e%3c/path%3e%3c/svg%3e"
                                alt="Blogs Icon"
                                className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
                            />
                        </div>
                        <h2
                            className="text-base md:text-lg lg:text-xl font-bold mb-2 text-gray-800 pt-16 aos-init"
                            data-aos="zoom-out"
                            data-aos-duration={1000}
                            data-aos-delay={100}
                        >
                            Blogs
                        </h2>
                        <p
                            className="text-sm md:text-base lg:text-lg text-gray-600 mb-4 leading-relaxed text-center justify aos-init"
                            data-aos="zoom-out"
                            data-aos-duration={1000}
                            data-aos-delay={100}
                            data-aos-offset={100}
                        >
                            Engage with the community by writing and reading blogs that share
                            insights, tips, and experiences.
                        </p>
                        <button
                            className="bg-white text-[#323290] font-semibold border-2 border-[#323290] py-2 px-4 md:py-2.5 md:px-6 rounded-full shadow hover:bg-[#323290] hover:text-white transition-colors duration-300 aos-init"
                            data-aos="zoom-out"
                            data-aos-duration={1000}
                            data-aos-delay={100}
                            data-aos-offset={100}
                        >
                            Explore
                        </button>
                    </div>
                    <div
                        className="bg-white rounded-2xl shadow-md shadow-[#323290] p-6 relative mb-24 flex flex-col items-center hover:scale-105 transition-transform duration-300 aos-init"
                        data-aos="zoom-out"
                        data-aos-duration={1000}
                    >
                        <div
                            className="bg-[#323290] w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto mb-6 rounded-full text-white flex items-center justify-center absolute -top-12 md:-top-16 lg:-top-20 right-0 aos-init"
                            data-aos="zoom-out"
                            data-aos-duration={1000}
                            data-aos-offset={100}
                        >
                            <img
                                src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'%20id='paper'%3e%3cpath%20d='M112%2064v336h16V80h304v337.143c0%208.205-6.652%2014.857-14.857%2014.857H94.857C86.652%20432%2080%20425.348%2080%20417.143V128h16v-16H64v305.143C64%20434.157%2077.843%20448%2094.857%20448h322.285C434.157%20448%20448%20434.157%20448%20417.143V64H112z'%20fill='%23ffffff'%20class='color000000%20svgShape'%3e%3c/path%3e%3cpath%20d='M160%20112h128v16H160zM160%20192h240v16H160zM160%20272h192v16H160zM160%20352h240v16H160z'%20fill='%23ffffff'%20class='color000000%20svgShape'%3e%3c/path%3e%3c/svg%3e"
                                alt="Previous Year Questions (PYQ) Icon"
                                className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
                            />
                        </div>
                        <h2
                            className="text-base md:text-lg lg:text-xl font-bold mb-2 text-gray-800 pt-16 aos-init"
                            data-aos="zoom-out"
                            data-aos-duration={1000}
                            data-aos-delay={100}
                        >
                            Previous Year Questions (PYQ)
                        </h2>
                        <p
                            className="text-sm md:text-base lg:text-lg text-gray-600 mb-4 leading-relaxed text-center justify aos-init"
                            data-aos="zoom-out"
                            data-aos-duration={1000}
                            data-aos-delay={100}
                            data-aos-offset={100}
                        >
                            A vast repository of previous year question papers to help you
                            understand exam patterns and prepare effectively.
                        </p>
                        <button
                            className="bg-white text-[#323290] font-semibold border-2 border-[#323290] py-2 px-4 md:py-2.5 md:px-6 rounded-full shadow hover:bg-[#323290] hover:text-white transition-colors duration-300 aos-init"
                            data-aos="zoom-out"
                            data-aos-duration={1000}
                            data-aos-delay={100}
                            data-aos-offset={100}
                        >
                            Explore
                        </button>
                    </div>
                    <div
                        className="bg-white rounded-2xl shadow-md shadow-[#323290] p-6 relative mb-24 flex flex-col items-center hover:scale-105 transition-transform duration-300 aos-init"
                        data-aos="zoom-out"
                        data-aos-duration={1000}
                    >
                        <div
                            className="bg-[#323290] w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto mb-6 rounded-full text-white flex items-center justify-center absolute -top-12 md:-top-16 lg:-top-20 right-0 aos-init"
                            data-aos="zoom-out"
                            data-aos-duration={1000}
                            data-aos-offset={100}
                        >
                            <img
                                src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%20id='WorkChecklist'%3e%3cg%20fill='%23ffffff'%20class='color000000%20svgShape'%3e%3cpath%20d='M47%2024a3%203%200%200%200%203-3%202.951%202.951%200%200%200-.3-1.285l-2.992%202.992-1.414-1.414%202.991-2.993A2.951%202.951%200%200%200%2047%2018a3%203%200%200%200%200%206zm0%2025a3%203%200%200%200%203-3%202.951%202.951%200%200%200-.3-1.285l-2.992%202.992-1.414-1.414%202.991-2.993A2.951%202.951%200%200%200%2047%2043a3%203%200%200%200%200%206zm0-12a3%203%200%200%200%203-3%202.951%202.951%200%200%200-.3-1.285l-2.992%202.992-1.414-1.414%202.991-2.993A2.951%202.951%200%200%200%2047%2031a3%203%200%200%200%200%206zm-25-6a5%205%200%200%200-10%200v1.91a5.022%205.022%200%200%200%201%20.09%208.622%208.622%200%200%200%203.61-.92A10.362%2010.362%200%200%201%2021%2031a7.718%207.718%200%200%201%201%20.07zm-3%2014.76v-2.05a7.042%207.042%200%200%201-4%200v2.05l2%204z'%20fill='%23ffffff'%20class='color000000%20svgShape'%3e%3c/path%3e%3cpath%20d='m23.67%2048.76-.69%203.44a1%201%200%200%201-.64.74.974.974%200%200%201-.34.06%201.048%201.048%200%200%201-.63-.22l-2.6-2.09-.88%201.76a1%201%200%200%201-1.78%200l-.88-1.76-2.6%202.09A1.048%201.048%200%200%201%2012%2053a.974.974%200%200%201-.34-.06%201%201%200%200%201-.64-.74l-.69-3.44A8%208%200%200%200%206%2055.85V60h22v-4.15a8%208%200%200%200-4.33-7.09Z'%20fill='%23ffffff'%20class='color000000%20svgShape'%3e%3c/path%3e%3cpath%20d='m19.69%2048.86%201.65%201.33.46-2.3-1.33-.59-.78%201.56zM22%2033.09a5.022%205.022%200%200%200-1-.09%208.622%208.622%200%200%200-3.61.92A10.362%2010.362%200%200%201%2013%2035a7.718%207.718%200%200%201-1-.07V37a5%205%200%200%200%2010%200Z'%20fill='%23ffffff'%20class='color000000%20svgShape'%3e%3c/path%3e%3cpath%20d='M54%204.1V11a.987.987%200%200%201-.62.92.838.838%200%200%201-.38.08%201.007%201.007%200%200%201-.71-.29L50%209.41l-2.29%202.3a1%201%200%200%201-1.09.21A.987.987%200%200%201%2046%2011V4H23a5%205%200%200%200-5%205v15.08A7%207%200%200%201%2024%2031v2a3%203%200%200%201%200%206h-.29A7.073%207.073%200%200%201%2021%2042.74v2.61l3.06%201.36A10.013%2010.013%200%200%201%2030%2055.85V60h23a5%205%200%200%200%205-5V9a5.017%205.017%200%200%200-4-4.9ZM22%208h2v2h-2Zm8%206h-8v-2h8Zm0-4h-4V8h4Zm10%2039h-8v-2h8Zm0-4h-8v-2h8Zm0-8h-8v-2h8Zm0-4h-8v-2h8Zm0-9h-8v-2h8Zm0-4h-8v-2h8Zm12%2026a5.013%205.013%200%201%201-2.25-4.17l1.54-1.54%201.42%201.42-1.54%201.54A4.979%204.979%200%200%201%2052%2046Zm-.83-14.75a5.013%205.013%200%201%201-1.42-1.42l1.54-1.54%201.42%201.42Zm0-13a5.013%205.013%200%201%201-1.42-1.42l1.54-1.54%201.42%201.42ZM14.31%2048.86l-.78-1.56-1.33.59.46%202.3%201.65-1.33z'%20fill='%23ffffff'%20class='color000000%20svgShape'%3e%3c/path%3e%3cpath%20d='M9%2036a1%201%200%200%200%201%201v-2a1%201%200%200%200-1%201zm15-1v2a1%201%200%200%200%200-2zM49.29%207.29a1.008%201.008%200%200%201%201.42%200L52%208.59V4h-4v4.59z'%20fill='%23ffffff'%20class='color000000%20svgShape'%3e%3c/path%3e%3c/g%3e%3c/svg%3e"
                                alt="Syllabus Icon"
                                className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
                            />
                        </div>
                        <h2
                            className="text-base md:text-lg lg:text-xl font-bold mb-2 text-gray-800 pt-16 aos-init"
                            data-aos="zoom-out"
                            data-aos-duration={1000}
                            data-aos-delay={100}
                        >
                            Syllabus
                        </h2>
                        <p
                            className="text-sm md:text-base lg:text-lg text-gray-600 mb-4 leading-relaxed text-center justify aos-init"
                            data-aos="zoom-out"
                            data-aos-duration={1000}
                            data-aos-delay={100}
                            data-aos-offset={100}
                        >
                            Stay on track with our comprehensive syllabus guide. Tailored to your
                            curriculum, it’s your roadmap to mastering every subject.
                        </p>
                        <button
                            className="bg-white text-[#323290] font-semibold border-2 border-[#323290] py-2 px-4 md:py-2.5 md:px-6 rounded-full shadow hover:bg-[#323290] hover:text-white transition-colors duration-300 aos-init"
                            data-aos="zoom-out"
                            data-aos-duration={1000}
                            data-aos-delay={100}
                            data-aos-offset={100}
                        >
                            Explore
                        </button>
                    </div>
                    <div
                        className="bg-white rounded-2xl shadow-md shadow-[#323290] p-6 relative mb-24 flex flex-col items-center hover:scale-105 transition-transform duration-300 aos-init"
                        data-aos="zoom-out"
                        data-aos-duration={1000}
                    >
                        <div
                            className="bg-[#323290] w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto mb-6 rounded-full text-white flex items-center justify-center absolute -top-12 md:-top-16 lg:-top-20 right-0 aos-init"
                            data-aos="zoom-out"
                            data-aos-duration={1000}
                            data-aos-offset={100}
                        >
                            <img
                                src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20100%20100'%20id='Books'%3e%3cpath%20d='M18%2031h3v6H7c-.79%200-1.51.47-1.83%201.19-.32.73-.18%201.57.35%202.16%205%205.5%205%2013.8%200%2019.3-.53.59-.67%201.43-.35%202.16C5.49%2062.53%206.21%2063%207%2063h75c7.17%200%2013-5.83%2013-13s-5.83-13-13-13H41v-6h52c.79%200%201.51-.47%201.83-1.19.32-.73.18-1.57-.35-2.16-5-5.5-5-13.8%200-19.3.53-.59.67-1.43.35-2.16A2.008%202.008%200%200%200%2093%205H18C10.83%205%205%2010.83%205%2018s5.83%2013%2013%2013zm64%2010c4.96%200%209%204.04%209%209s-4.04%209-9%209H10.91a18.274%2018.274%200%200%200%200-18H21v8a2%202%200%200%200%203.2%201.6l6.8-5.1%206.8%205.1c.35.26.78.4%201.2.4a2%202%200%200%200%202-2v-8h41zm-57%204V21h12v24l-4.8-3.6c-.36-.27-.78-.4-1.2-.4s-.84.13-1.2.4L25%2045zM18%209h71.09a18.274%2018.274%200%200%200%200%2018H41v-8c0-1.1-.9-2-2-2H23c-1.1%200-2%20.9-2%202v8h-3c-4.96%200-9-4.04-9-9s4.04-9%209-9zm76.83%2061.19A2.008%202.008%200%200%200%2093%2069H18c-7.17%200-13%205.83-13%2013s5.83%2013%2013%2013h75c.79%200%201.51-.47%201.83-1.19.32-.73.18-1.57-.35-2.16-5-5.5-5-13.8%200-19.3.53-.59.67-1.43.35-2.16zM89.09%2091H18c-4.96%200-9-4.04-9-9s4.04-9%209-9h71.09a18.274%2018.274%200%200%200%200%2018z'%20fill='%23ffffff'%20class='color000000%20svgShape'%3e%3c/path%3e%3c/svg%3e"
                                alt="Books Available Icon"
                                className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
                            />
                        </div>
                        <h2
                            className="text-base md:text-lg lg:text-xl font-bold mb-2 text-gray-800 pt-16 aos-init"
                            data-aos="zoom-out"
                            data-aos-duration={1000}
                            data-aos-delay={100}
                        >
                            Books Available
                        </h2>
                        <p
                            className="text-sm md:text-base lg:text-lg text-gray-600 mb-4 leading-relaxed text-center justify aos-init"
                            data-aos="zoom-out"
                            data-aos-duration={1000}
                            data-aos-delay={100}
                            data-aos-offset={100}
                        >
                            Access a collection of recommended books for each subject to enhance
                            your learning and understanding.
                        </p>
                        <button
                            className="bg-white text-[#323290] font-semibold border-2 border-[#323290] py-2 px-4 md:py-2.5 md:px-6 rounded-full shadow hover:bg-[#323290] hover:text-white transition-colors duration-300 aos-init"
                            data-aos="zoom-out"
                            data-aos-duration={1000}
                            data-aos-delay={100}
                            data-aos-offset={100}
                        >
                            Explore
                        </button>
                    </div>
                    <div
                        className="bg-white rounded-2xl shadow-md shadow-[#323290] p-6 relative mb-24 flex flex-col items-center hover:scale-105 transition-transform duration-300 aos-init"
                        data-aos="zoom-out"
                        data-aos-duration={1000}
                    >
                        <div
                            className="bg-[#323290] w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto mb-6 rounded-full text-white flex items-center justify-center absolute -top-12 md:-top-16 lg:-top-20 right-0 aos-init"
                            data-aos="zoom-out"
                            data-aos-duration={1000}
                            data-aos-offset={100}
                        >
                            <img
                                src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%20id='ResourceAllocation'%3e%3cpath%20d='M33.293%2058.81a1%201%200%200%200-.293.707V63h2v-3.07l2.414-2.413A2.014%202.014%200%200%200%2038%2056.103v-7.46a3.003%203.003%200%200%200-3-3v-12.77a3%203%200%200%200-6%200v5.77h-1a3.006%203.006%200%200%200-2.83%202H24a3.006%203.006%200%200%200-2.83%202H21a4.004%204.004%200%200%200-4%204v9.736a1.994%201.994%200%200%200%20.336%201.11l1.496%202.243a.993.993%200%200%201%20.168.555V63h2v-2.713a2.987%202.987%200%200%200-.504-1.664L19%2056.379v-9.735a2.003%202.003%200%200%201%202-2V48h2v-4.356a1%201%200%200%201%201-1h1v4h2v-5a1%201%200%200%201%201-1h1v4h2v-11.77a1%201%200%200%201%202-.001v21.23h2v-6.46a1%201%200%200%201%201%201v7.46Z'%20fill='%23ffffff'%20class='color000000%20svgShape'%3e%3c/path%3e%3cpath%20d='M39%2032.683a7%207%200%201%200-12.833%203.87l1.666-1.107a5%205%200%201%201%208.499-.264l1.73%201.002A6.997%206.997%200%200%200%2039%2032.683zM54%2024a9%209%200%201%200-9-9%209.01%209.01%200%200%200%209%209zm-3-2.685V19a2.003%202.003%200%200%201%202-2h2a2.003%202.003%200%200%201%202%202v2.315a6.91%206.91%200%200%201-6%200zM54%2015a1.5%201.5%200%201%201%201.5-1.5A1.502%201.502%200%200%201%2054%2015zm0-7a6.993%206.993%200%200%201%205%2011.89V19a3.987%203.987%200%200%200-2.125-3.512%203.5%203.5%200%201%200-5.75%200A3.987%203.987%200%200%200%2049%2019v.89A6.993%206.993%200%200%201%2054%208zM10%2024a9%209%200%201%200-9-9%209.01%209.01%200%200%200%209%209zm0-16a7%207%200%201%201-7%207%207.008%207.008%200%200%201%207-7z'%20fill='%23ffffff'%20class='color000000%20svgShape'%3e%3c/path%3e%3cpath%20d='M10%2018a1%201%200%200%201-1-1H7a2.995%202.995%200%200%200%202%202.816V21h2v-1.184A2.993%202.993%200%200%200%2010%2014a1%201%200%201%201%201-1h2a2.996%202.996%200%200%200-2-2.815V9H9v1.184A2.993%202.993%200%200%200%2010%2016a1%201%200%200%201%200%202zm25.206-.298.008-.999a7.827%207.827%200%200%200%201.13-.629l.1.016.864.482a.999.999%200%200%200%201.176-.148%208.937%208.937%200%200%200%202.482-4.161%201%201%200%200%200-.479-1.132l-.9-.503q.03-.316.03-.628t-.03-.628l.9-.503a1%201%200%200%200%20.479-1.13%208.93%208.93%200%200%200-2.478-4.166%201.004%201.004%200%200%200-1.177-.148l-.869.485.489.873-.587-.857a12.88%2012.88%200%200%200-1.138-.664v-.968a1%201%200%200%200-.741-.966%209.766%209.766%200%200%200-2.583-.327%209.565%209.565%200%200%200-2.347.331%201%201%200%200%200-.741.966l-.01.999a7.848%207.848%200%200%200-1.128.629l-.1-.016-.864-.482a1.002%201.002%200%200%200-1.176.148%208.937%208.937%200%200%200-2.482%204.161%201%201%200%200%200%20.479%201.132l.9.503q-.03.316-.03.628t.03.628l-.9.503a1%201%200%200%200-.479%201.13%208.925%208.925%200%200%200%202.477%204.166%201%201%200%200%200%201.176.148l.87-.485.1-.016a12.702%2012.702%200%200%200%201.137.664v.968a1%201%200%200%200%20.741.966%209.506%209.506%200%200%200%202.46.328l.122-.001a9.566%209.566%200%200%200%202.348-.331%201%201%200%200%200%20.741-.966zm-2-.964v.16a7.128%207.128%200%200%201-1.114.101%206.735%206.735%200%200%201-1.298-.099v-.162a2.035%202.035%200%200%200-1.184-1.857%205.651%205.651%200%200%201-.836-.465%202.11%202.11%200%200%200-2.192-.072l-.191.107a6.915%206.915%200%200%201-1.185-1.975l.78-.436a1.002%201.002%200%200%200%20.494-1.06%204.96%204.96%200%200%201%200-1.96%201.002%201.002%200%200%200-.495-1.06l-.779-.436a6.93%206.93%200%200%201%201.189-1.972l.186.104a2.104%202.104%200%200%200%202.19-.07%205.702%205.702%200%200%201%20.838-.467%202.034%202.034%200%200%200%201.185-1.857v-.16a7.127%207.127%200%200%201%201.113-.101%206.763%206.763%200%200%201%201.299.099v.162a2.037%202.037%200%200%200%201.184%201.857%205.752%205.752%200%200%201%20.836.465%202.11%202.11%200%200%200%202.193.072l.19-.106a6.897%206.897%200%200%201%201.185%201.974l-.78.436a1.002%201.002%200%200%200-.494%201.06%204.96%204.96%200%200%201%200%201.96%201.002%201.002%200%200%200%20.495%201.06l.779.436a6.93%206.93%200%200%201-1.189%201.972l-.186-.104a2.111%202.111%200%200%200-2.19.07%205.763%205.763%200%200%201-.84.467%202.037%202.037%200%200%200-1.183%201.857z'%20fill='%23ffffff'%20class='color000000%20svgShape'%3e%3c/path%3e%3cpath%20d='M32%206a4%204%200%201%200%204%204%204.004%204.004%200%200%200-4-4Zm0%206a2%202%200%201%201%202-2%202.003%202.003%200%200%201-2%202ZM31%2020h2v5h-2zM37.414%2025.846l7.81-5.656%201.172%201.62-7.81%205.656zM17.604%2021.81l1.173-1.62%207.81%205.656-1.174%201.62z'%20fill='%23ffffff'%20class='color000000%20svgShape'%3e%3c/path%3e%3c/svg%3e"
                                alt="Curated YouTube Channels Icon"
                                className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
                            />
                        </div>
                        <h2
                            className="text-base md:text-lg lg:text-xl font-bold mb-2 text-gray-800 pt-16 aos-init"
                            data-aos="zoom-out"
                            data-aos-duration={1000}
                            data-aos-delay={100}
                        >
                            Curated YouTube Channels
                        </h2>
                        <p
                            className="text-sm md:text-base lg:text-lg text-gray-600 mb-4 leading-relaxed text-center justify aos-init"
                            data-aos="zoom-out"
                            data-aos-duration={1000}
                            data-aos-delay={100}
                            data-aos-offset={100}
                        >
                            Explore our curated YouTube channels for each subject, where you can
                            access video lectures and tutorials tailored to the syllabus of Punjab
                            Technical University.
                        </p>
                        <button
                            className="bg-white text-[#323290] font-semibold border-2 border-[#323290] py-2 px-4 md:py-2.5 md:px-6 rounded-full shadow hover:bg-[#323290] hover:text-white transition-colors duration-300 aos-init"
                            data-aos="zoom-out"
                            data-aos-duration={1000}
                            data-aos-delay={100}
                            data-aos-offset={100}
                        >
                            Explore
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-[#f1f0fe]">
                <div
                    className="relative inline-block w-full h-[100px] sm:h-[150px] -mt-[50px] sm:-mt-[100px] overflow-hidden z-5"
                    style={{ animation: "3s ease-in-out 1s 1 normal both running move-wave" }}
                >
                    <svg
                        viewBox="0 0 500 150"
                        preserveAspectRatio="none"
                        className="w-full h-full"
                    >
                        <path
                            d="M-5.07,73.52 C149.99,150.00 299.66,-102.13 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                            style={{ stroke: "none", fill: "rgb(241, 240, 254)" }}
                        />
                    </svg>
                </div>
                <Footer></Footer>
            </div>
            <div className="Toastify" />
        </div>

    )
}
export default Header;
