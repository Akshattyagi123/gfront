import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { Register } from './components/Register';
import OtpVerification from './components/OtpVerification';
import { Login } from './components/Login';
import { Contact } from './components/Contact';
import { Grievance } from './components/Grievance';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import AboutPage from './components/AboutPage';






function App() {
  const [isLoggedIn, setIsLoggedIn] = useState('false');
  return (
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn}></Navbar>
      <Routes>
        <Route path='/' element={<Header setIsLoggedIn={setIsLoggedIn} />}></Route>
        <Route path='/Register' element={<Register />}></Route>
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />}></Route>
        <Route path='/grievance' element={<Grievance />}></Route>
        <Route path="/otp-verification" element={<OtpVerification setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
      </Routes>
    </div>
  );
}


export default App;
