import React from 'react'

export const Contact = () => {
    return (
        <div className="flex justify-center min-h-screen items-center  bg-[#fbfbfb] pt-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 items-center gap-10 max-w-screen-lg w-full lg:w-5/6 md:w-4/6  ">
                <div className="flex flex-col justify-between  md:block w-5/6 mx-auto">
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="relative flex justify-center items-center flex-col text-center sm:text-left mb-10 mt-6">
                            <h1 className="font-black text-4xl md:text-5xl text-black">
                                Contact Us
                            </h1>
                            <img
                                src="/assets/underline-C1Mgkxna.png"
                                alt="underline"
                                className="absolute top-[-4rem] left-1/2 transform -translate-x-1/2 w-48 md:w-56 h-auto md:top-[-4rem]"
                            />
                        </div>
                        <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500 text-justify">
                            We'd love to hear from you! Whether you have a question, feedback, or
                            just want to say hello, feel free to reach out. Your thoughts are
                            important to us, and we're here to assist you with anything you need.
                            Fill out the form below, and we'll get back to you as soon as
                            possible.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-2  text-center md:px-0 md:grid-cols-2 justify-center">
                        <div className="flex flex-col items-center">
                            <div className="p-6">
                                <svg
                                    className="flex-shrink-0 w-10 h-10 mx-auto text-[#ed1f26]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1}
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <p className="mt-6 text-base font-medium text-gray-900">
                                    +91 7837189549
                                </p>
                                <p className="mt-1 text-base font-medium text-gray-900">
                                    +91 7973117120
                                </p>
                            </div>
                        </div>
                        <div className="rounded-xl flex flex-col items-center">
                            <div className="p-6">
                                <svg
                                    className="flex-shrink-0 w-10 h-10 mx-auto text-[#ed1f26]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <p className="mt-6 text-base font-medium text-gray-900">
                                    sahiljamwal2720@gmail.com
                                </p>
                                <p className="mt-1 text-base font-medium text-gray-900">
                                    bharal224@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-5/6 justify-self-center md:w-full bg-white rounded-[40px] p-8 shadow-lg mb-10 lg:mb-0 ">
                    <div className="relative flex justify-center items-center flex-col text-center sm:text-left mb-10 ">
                        <h1 className="font-semibold text-2xl md:text-3xl text-black">
                            Send us a message
                        </h1>
                    </div>
                    <form className="flex flex-col space-y-6">
                        <div className="flex flex-col">
                            <label htmlFor="username" className="font-semibold">
                                Username
                            </label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                autoComplete="off"
                                required=""
                                className="w-full bg-white p-4 rounded-[20px]  shadow-sm border placeholder:text-gray-500 focus:outline-none focus:border-blue-400"
                                defaultValue=" "
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email" className="font-semibold">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="off"
                                required=""
                                className="w-full bg-white p-4 rounded-[20px]  shadow-sm border placeholder:text-gray-500 focus:outline-none focus:border-blue-400"
                                defaultValue=" "
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="message" className="font-semibold">
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                autoComplete="off"
                                required=""
                                cols={30}
                                rows={3}
                                className="w-full bg-white p-4 rounded-[20px]  shadow-sm border placeholder:text-gray-500 focus:outline-none focus:border-blue-400"
                                defaultValue={""}
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="block w-full font-bold bg-gradient-to-r from-purple-500 to-red-500 text-white py-4 mt-6 rounded-[20px] transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}
