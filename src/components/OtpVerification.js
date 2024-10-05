import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../api';

const OtpVerification = ({ setIsLoggedIn }) => {
    const [otp, setOtp] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    // Extract userId from the URL parameters
    const query = new URLSearchParams(location.search);
    const userId = query.get('userId'); // Get userId from URL

    const handleOtpSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(BASE_URL + '/api/auth/verify', {
                otp,
                userId // Pass userId to the verification API
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            // Check the response for success
            if (response.status == 200) {
                setIsLoggedIn(true); // Set logged in state
                localStorage.setItem('login', true)
                navigate('/'); // Redirect to homepage or dashboard
            } else {
                setMessage(response.data.msg); // Display error message
            }
        } catch (error) {
            if (error.response) {
                if (error.response.status === 400) {
                    setMessage(error.response.data.msg); // Handle bad request error
                } else {
                    setMessage(error.response.data.msg); // Handle other errors
                }
            } else {
                setMessage('Verification failed, please try again');
            }
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 ">
            <h1 className="text-2xl mb-4">Enter OTP</h1>
            {message && <p className="text-red-500">{message}</p>}
            <form onSubmit={handleOtpSubmit} className="flex flex-col gap-4">
                <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter OTP"
                    // default=" "
                    className="p-2 rounded border border-gray-300"
                    required
                />
                <button type="submit" className="py-2 px-4 rounded bg-gradient-to-r from-purple-500 to-red-500">
                    Verify OTP
                </button>
            </form>
        </div>
    );
};

export default OtpVerification;

