import React from 'react'

export const Paper = () => {
    return (
        <div>
            {/* Header */}
            <div
                className="relative flex justify-center items-center flex-col text-center sm:text-left mb-10 mt-6 aos-init aos-animate"
                data-aos="zoom-out"
                data-aos-duration={1000}
            >
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold flex items-center justify-center sm:justify-start text-center">
                    <span className="mr-2">Previous Year Question Papers</span>
                </h1>
                <img
                    src="/assets/underline-C1Mgkxna.png"
                    className="absolute top-[-1rem] sm:top-[-1rem] lg:top-[-5rem] md:top-[-1rem] left-1/2 transform -translate-x-1/2 w-48 sm:w-56 md:w-72"
                />
                <p
                    className="text-lg md:text-xl text-[#323290] mt-12 font-semibold aos-init aos-animate"
                    data-aos="zoom-out"
                    data-aos-duration={1000}
                    data-aos-delay={100}
                >
                    Access previous year question papers to enhance your preparation and boost
                    your confidence for PTU exams.
                </p>
            </div>




            {/* Semester Tabs */}
            <div className=" relative flex flex-wrap rounded-xl bg-[#f1f0fe] text-[#323290] font-bold box-border shadow-md justify-between gap-6 w-[80%] text-sm m-auto items-center p-4 ">



                <button className="name">Semester 1</button>


                <button className="name">Semester 2</button>


                <button className="name">Semester 3</button>


                <button className="name">Semester 4</button>


                <button className="name">Semester 5</button>


                <button className="name">Semester 6</button>


                <button className="name">Semester 7</button>


                <button className="name">Semester 8</button>

            </div>
            <div
                className="dropdown-container block md:hidden aos-init aos-animate"
                data-aos="zoom-out"
                data-aos-duration={1000}
                data-aos-delay={200}
            >

            </div>



            {/* Content Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
                {/* Card 1 */}
                <div
                    className="bg-white rounded-2xl shadow-md shadow-[#323290] p-6 relative mt-16 flex flex-col items-center hover:scale-105 transition-transform duration-300 aos-init aos-animate"
                    data-aos="zoom-out"
                    data-aos-duration={1000}
                >
                    <div
                        className="bg-[#323290] w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto mb-6 rounded-full text-white flex items-center justify-center absolute -top-12 md:-top-16 lg:-top-20 right-0 aos-init aos-animate"
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
                        className="text-base md:text-lg lg:text-xl font-bold mb-2 text-gray-800 pt-16 aos-init aos-animate"
                        data-aos="zoom-out"
                        data-aos-duration={1000}
                        data-aos-delay={100}
                    >
                        Student Grievances
                    </h2>
                    <p
                        className="text-sm md:text-base lg:text-lg text-gray-600 mb-4 leading-relaxed text-center justify aos-init aos-animate"
                        data-aos="zoom-out"
                        data-aos-duration={1000}
                        data-aos-delay={100}
                        data-aos-offset={100}
                    >
                        Submit your complaints or issues here. The Head of Department (HOD) will
                        review them, take appropriate action, and work towards resolving them.
                    </p>
                    <button
                        className="bg-white text-[#323290] font-semibold border-2 border-[#323290] py-2 px-4 md:py-2.5 md:px-6 rounded-full shadow hover:bg-[#323290] hover:text-white transition-colors duration-300 aos-init aos-animate"
                        data-aos="zoom-out"
                        data-aos-duration={1000}
                        data-aos-delay={100}
                        data-aos-offset={100}
                    >
                        Explore
                    </button>
                </div>

                {/* Card 2 */}
                <div
                    className="bg-white rounded-2xl shadow-md shadow-[#323290] p-6 relative mt-16 flex flex-col items-center hover:scale-105 transition-transform duration-300 aos-init aos-animate"
                    data-aos="zoom-out"
                    data-aos-duration={1000}
                >
                    <div
                        className="bg-[#323290] w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto mb-6 rounded-full text-white flex items-center justify-center absolute -top-12 md:-top-16 lg:-top-20 right-0 aos-init aos-animate"
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
                        className="text-base md:text-lg lg:text-xl font-bold mb-2 text-gray-800 pt-16 aos-init aos-animate"
                        data-aos="zoom-out"
                        data-aos-duration={1000}
                        data-aos-delay={100}
                    >
                        Student Grievances
                    </h2>
                    <p
                        className="text-sm md:text-base lg:text-lg text-gray-600 mb-4 leading-relaxed text-center justify aos-init aos-animate"
                        data-aos="zoom-out"
                        data-aos-duration={1000}
                        data-aos-delay={100}
                        data-aos-offset={100}
                    >
                        Submit your complaints or issues here. The Head of Department (HOD) will
                        review them, take appropriate action, and work towards resolving them.
                    </p>
                    <button
                        className="bg-white text-[#323290] font-semibold border-2 border-[#323290] py-2 px-4 md:py-2.5 md:px-6 rounded-full shadow hover:bg-[#323290] hover:text-white transition-colors duration-300 aos-init aos-animate"
                        data-aos="zoom-out"
                        data-aos-duration={1000}
                        data-aos-delay={100}
                        data-aos-offset={100}
                    >
                        Explore
                    </button>
                </div>

                {/* Card 3 */}
                <div
                    className="bg-white rounded-2xl shadow-md shadow-[#323290] p-6 relative mt-16 flex flex-col items-center hover:scale-105 transition-transform duration-300 aos-init aos-animate"
                    data-aos="zoom-out"
                    data-aos-duration={1000}
                >
                    <div
                        className="bg-[#323290] w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto mb-6 rounded-full text-white flex items-center justify-center absolute -top-12 md:-top-16 lg:-top-20 right-0 aos-init aos-animate"
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
                        className="text-base md:text-lg lg:text-xl font-bold mb-2 text-gray-800 pt-16 aos-init aos-animate"
                        data-aos="zoom-out"
                        data-aos-duration={1000}
                        data-aos-delay={100}
                    >
                        Student Grievances
                    </h2>
                    <p
                        className="text-sm md:text-base lg:text-lg text-gray-600 mb-4 leading-relaxed text-center justify aos-init aos-animate"
                        data-aos="zoom-out"
                        data-aos-duration={1000}
                        data-aos-delay={100}
                        data-aos-offset={100}
                    >
                        Submit your complaints or issues here. The Head of Department (HOD) will
                        review them, take appropriate action, and work towards resolving them.
                    </p>
                    <button
                        className="bg-white text-[#323290] font-semibold border-2 border-[#323290] py-2 px-4 md:py-2.5 md:px-6 rounded-full shadow hover:bg-[#323290] hover:text-white transition-colors duration-300 aos-init aos-animate"
                        data-aos="zoom-out"
                        data-aos-duration={1000}
                        data-aos-delay={100}
                        data-aos-offset={100}
                    >
                        Explore
                    </button>
                </div>
                {/* card 4 */}
                <div
                    className="bg-white rounded-2xl shadow-md shadow-[#323290] p-6 relative mt-16 flex flex-col items-center hover:scale-105 transition-transform duration-300 aos-init aos-animate"
                    data-aos="zoom-out"
                    data-aos-duration={1000}
                >
                    <div
                        className="bg-[#323290] w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto mb-6 rounded-full text-white flex items-center justify-center absolute -top-12 md:-top-16 lg:-top-20 right-0 aos-init aos-animate"
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
                        className="text-base md:text-lg lg:text-xl font-bold mb-2 text-gray-800 pt-16 aos-init aos-animate"
                        data-aos="zoom-out"
                        data-aos-duration={1000}
                        data-aos-delay={100}
                    >
                        Student Grievances
                    </h2>
                    <p
                        className="text-sm md:text-base lg:text-lg text-gray-600 mb-4 leading-relaxed text-center justify aos-init aos-animate"
                        data-aos="zoom-out"
                        data-aos-duration={1000}
                        data-aos-delay={100}
                        data-aos-offset={100}
                    >
                        Submit your complaints or issues here. The Head of Department (HOD) will
                        review them, take appropriate action, and work towards resolving them.
                    </p>
                    <button
                        className="bg-white text-[#323290] font-semibold border-2 border-[#323290] py-2 px-4 md:py-2.5 md:px-6 rounded-full shadow hover:bg-[#323290] hover:text-white transition-colors duration-300 aos-init aos-animate"
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
    )
}
