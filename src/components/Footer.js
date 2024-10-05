import React from 'react'

const Footer = () => {
    return (
        <footer className="p-6 sm:p-10 text-black flex flex-wrap justify-evenly">
            <div className="mb-6 max-w-xs text-center sm:text-left">
                <img
                    src="/assets/mainlogo-CvKJyAPs.png"
                    alt="Hoping Minds"
                    className="w-32 sm:w-40 mb-6 sm:mb-10 mx-auto sm:mx-0"
                />
                <p className="text-sm sm:text-base">
                    PTU Study Zone is a comprehensive platform designed to simplify the
                    academic experience for students at Punjab Technical University.
                    Whether you're looking for well-organized notes, previous year
                    questions (PYQ), the latest syllabus, or educational resources,
                    everything you need is available in one place.
                </p>
            </div>
            <div className="mb-6 text-center sm:text-left">
                <h4 className="mb-4 font-semibold text-lg sm:text-xl">GET HELP</h4>
                <ul>
                    <li className="mb-2 text-sm sm:text-lg">
                        <a className="hover:underline" href="/about">
                            About
                        </a>
                    </li>
                    <li className="mb-2 text-sm sm:text-lg">
                        <button className="hover:underline">Contact Us</button>
                    </li>
                </ul>
            </div>
            <div className="mb-6 text-center sm:text-left">
                <h4 className="mb-4 font-semibold text-lg sm:text-xl">RESOURCES</h4>
                <ul>
                    <li className="mb-2 text-sm sm:text-lg">
                        <a className="hover:underline" href="/">
                            Home
                        </a>
                    </li>
                    <li className="mb-2 text-sm sm:text-lg">
                        <button className="hover:underline">Complaints</button>
                    </li>
                    <li className="mb-2 text-sm sm:text-lg">
                        <button className="hover:underline">Syllabus</button>
                    </li>
                    <li className="mb-2 text-sm sm:text-lg">
                        <button className="hover:underline">PYQ</button>
                    </li>
                    <li className="mb-2 text-sm sm:text-lg">
                        <button className="hover:underline">YouTube</button>
                    </li>
                    <li className="mb-2 text-sm sm:text-lg">
                        <button className="hover:underline">Blogs</button>
                    </li>
                </ul>
            </div>
            <div className="mb-6 text-center sm:text-left">
                <h4 className="mb-4 font-semibold text-lg sm:text-xl">CONTACT US</h4>
                <p className="text-sm sm:text-lg mb-2 flex items-center">
                    <strong className="mr-2"> {/* Add margin to the right of the SVG for spacing */}
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="phone"
                            className="svg-inline--fa fa-phone w-4 h-4" // Tailwind classes for size
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <path
                                fill="currentColor"
                                d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                            />
                        </svg>
                    </strong>
                    +91 12345677890
                </p>

                <p className="text-sm sm:text-lg flex items-center">
                    <strong className="mr-2"> {/* Add margin to the right of the SVG for spacing */}
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="envelope"
                            className="svg-inline--fa fa-envelope w-4 h-4" // Tailwind classes for size
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <path
                                fill="currentColor"
                                d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                            />
                        </svg>
                    </strong>
                    dummy@gmail.com
                </p>
                <p className="text-sm sm:text-lg mb-2 flex items-center">
                    <strong className="mr-2"> {/* Add margin to the right of the SVG for spacing */}
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="phone"
                            className="svg-inline--fa fa-phone w-4 h-4" // Tailwind classes for size
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <path
                                fill="currentColor"
                                d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                            />
                        </svg>
                    </strong>
                    +91 1234567890
                </p>


                <p className="text-sm sm:text-lg flex items-center">
                    <strong className="mr-2"> {/* Add margin to the right of the SVG for spacing */}
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="envelope"
                            className="svg-inline--fa fa-envelope w-4 h-4" // Tailwind classes for size
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <path
                                fill="currentColor"
                                d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                            />
                        </svg>
                    </strong>
                    dummy@gmail.com
                </p>


            </div>
            <div className="w-full text-center mt-6 text-sm sm:text-lg">
                <p>COPYRIGHT © ALL RIGHTS RESERVED 2024</p>
            </div>
        </footer>
    )
}

export default Footer