'use client'
import { useState } from 'react';
import { FaFacebook, FaTwitter, FaGoogle } from 'react-icons/fa';
import axios from 'axios';
import Header from '../components/header';
import Footer from '../components/footer';


const SignUp = () => {


  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const response = await axios.post('/signup', formData);
      console.log('Sign-up successful:', response.data);
    } catch (error) {
      console.error('Sign-up failed:', error);
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

    return (
      <div>
      <Header />
      <div className="flex items-center justify-center min-h-screen bg-cover bg-center" >
        <div className="sign-up-container w-96 mx-auto p-8 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>

         
            <div>
              <label htmlFor="email" className="block font-medium mb-2">Email</label>
               <input type="email" id="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter your email" />
            </div>

            <div>
              <label htmlFor="password" className="block font-medium mb-2">Password</label>
              <input type="password" id="password" value={formData.password} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter your password" />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block font-medium mb-2">Confirm Password</label>
              <input type="password" id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Confirm your password" />
            </div>

            <div>
              <label htmlFor="phoneNumber" className="block font-medium mb-2">Telephone Number</label>
              <input type="tel" id="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter your telephone number" />
            </div>

            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full">Sign Up</button>
        
          </form>
          <p className="mt-4 text-center">Already a member? <a href="/signin" className="text-blue-500 hover:underline">Sign In</a></p>
          <div className="flex items-center justify-center mt-4">
            <p className="mr-4">OR Sign Up with:</p>
            <FaFacebook className="w-8 h-8 mr-4 text-blue-600 cursor-pointer hover:text-blue-800" />
            <FaTwitter className="w-8 h-8 mr-4 text-blue-400 cursor-pointer hover:text-blue-600" />
            <FaGoogle className="w-8 h-8 mr-4 text-red-600 cursor-pointer hover:text-red-800" />
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;