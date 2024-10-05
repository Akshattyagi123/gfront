import React from 'react'

export const Grievance = () => {
    return (
        <div className="flex justify-center min-h-screen items-center bg-[#fbfbfb] pt-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 items-center gap-10 max-w-screen-lg w-full lg:w-5/6 md:w-4/6">
                <div className="flex flex-col justify-between  md:block w-5/6 mx-auto">
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="relative flex justify-center items-center flex-col text-center sm:text-left mb-10 mt-6">
                            <h1 className="font-black text-3xl md:text-4xl text-black">
                                Student Grievances
                            </h1>
                            <img
                                src="/assets/underline-C1Mgkxna.png"
                                alt="underline"
                                className="absolute top-[-4rem] left-1/2 transform -translate-x-1/2 w-48 md:w-56 h-auto md:top-[-5rem]"
                            />
                        </div>
                        <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500 text-justify">
                            These issues will be forwarded to the Head of Department (HOD), who
                            will review them, take appropriate action, and work towards resolving
                            them.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-2  text-center md:px-0 md:grid-cols-2 justify-center">
                        <img
                            src="/assets/complaintImg-CCYCZMTF.png"
                            className="w-full col-start-1 col-span-2"
                        />
                    </div>
                </div>
                <div className="w-5/6 justify-self-center md:w-full bg-white rounded-[20px] p-6 shadow-lg mb-10 lg:mb-0">
                    <div className="relative flex justify-center items-center flex-col text-center sm:text-left mb-6">
                        <h1 className="font-semibold text-2xl md:text-3xl text-black">
                            Submit Your Complaint
                        </h1>
                    </div>
                    <form className="flex flex-col space-y-4">
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
                                className="w-full bg-white p-3 py-2 rounded-[15px] shadow-sm border placeholder:text-gray-500 focus:outline-none focus:border-blue-400"
                                defaultValue="Akshat Tyagi"
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
                                className="w-full bg-white p-3 py-2 rounded-[15px] shadow-sm border placeholder:text-gray-500 focus:outline-none focus:border-blue-400"
                                defaultValue="akshatt961@gmail.com"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="date" className="font-semibold">
                                Date
                            </label>
                            <input
                                type="date"
                                name="date"
                                id="date"
                                autoComplete="off"
                                required=""
                                className="w-full bg-white p-3 py-2 rounded-[15px] shadow-sm border placeholder:text-gray-500 focus:outline-none focus:border-blue-400"
                                defaultValue=""
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="department" className="font-semibold">
                                Department
                            </label>
                            <select
                                name="department"
                                id="department"
                                required=""
                                className="w-full bg-white p-3 py-2 rounded-[15px] shadow-sm border placeholder:text-gray-500 focus:outline-none focus:border-blue-400"
                            >
                                <option value="" className="text-gray-500">
                                    Select Department
                                </option>
                                <option value="B.Tech Computer Science Engineering">
                                    B.Tech Computer Science Engineering
                                </option>
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="problem" className="font-semibold">
                                Problem
                            </label>
                            <textarea
                                name="problem"
                                id="problem"
                                autoComplete="off"
                                required=""
                                cols={30}
                                rows={2}
                                placeholder="Describe your issue briefly; the Head of Department (HOD) will review it"
                                className="w-full bg-white p-3 py-2 rounded-[15px] shadow-sm border placeholder:text-gray-500 focus:outline-none focus:border-blue-400"
                                defaultValue={""}
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="block w-full font-bold bg-gradient-to-r from-purple-500 to-red-500 text-white py-3 mt-4 rounded-[15px] transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95"
                            >
                                Submit Complaint
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}
