import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Default styles
import './Login.css'; // Custom styles
import { Link } from 'react-router-dom';
function Login() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setLoginData({
      ...loginData,
      [name]: value
    });
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Login Data:", loginData);
    toast.success("You are logged in!");
  };

  const toastOptions = {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    theme: "dark"
  };
  return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md">
              <div className="flex justify-center mb-6">
                <img src="https://placehold.co/100x100" alt="Logo" className="w-24 h-24"/>
              </div>
              <h2 className="text-white text-2xl font-semibold text-center mb-2">Sign In To Your Account</h2>
              <p className="text-gray-400 text-center mb-6">
                Don't have an account? <Link to="/signup" className="text-blue-500">Sign Up</Link>
              </p>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-400 mb-1">Email*</label>
                  <input type="email" name="email" value={loginData.email} onChange={changeHandler} className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4 relative">
                  <label className="block text-gray-400 mb-1">Password*</label>
                  <input type="password" name="password" value={loginData.password} onChange={changeHandler} className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:border-blue-500" />
                </div>
                <button type="submit" onClick={submitHandler} className="w-full py-2 bg-pink-500 text-white font-semibold rounded hover:bg-pink-600">Sign In</button>
              </form>
              <div className="text-center mt-4">
                <a href="www.youtube.com" className="text-gray-400 hover:text-gray-200">Forgot Password?</a>
              </div>
              <div className="text-center mt-4">
                <p className="text-gray-400">Continue without signing in? <a href="www.youtube.com" className="text-blue-500">Explore</a></p>
              </div>
              <ToastContainer {...toastOptions} />
            </div>
      </div>
  );
}

export default Login;
