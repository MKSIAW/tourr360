'use client'
import React from 'react';
import { FiUser, FiMail, FiMessageCircle } from 'react-icons/fi'; // Import icons from react-icons library
import Footer from '../components/footer';
import Header from '../components/header';

export default function Page() {
  const posttoWordpress = async (e) => {
    e.preventDefault();

    // Get form data
const data = {
  'your-name': e.currentTarget['your-name'].value,
  'your-email': e.currentTarget['your-email'].value,
  'your-subject': e.currentTarget['your-subject'].value,
  'your-message': e.currentTarget['your-message'].value
};

    

    try {
     //const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJtaWNoZWxsZSIsImlhdCI6MTcxNDQ4ODQ1NywiZXhwIjoxODcyMTY4NDU3fQ.cg9eGdXaeKaKQiBtLscqfl7wUTq_BXUite33psQPjxk";
      const response = await fetch('http://localhost/wordpress/wp-json/contact-form-7/v1/contact-forms/144/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          //'Authorization': `Bearer ${token}`

          
          
        },
        body: JSON.stringify(data)
      });

      // Check if request was successful
      if (!response.ok) {
        throw new Error('Failed to post data to WordPress');
      }

      // Parse response data
      const responseData = await response.json();

      // Log response data
      console.log('Data posted to WordPress:', responseData);

      // Handle successful response from WordPress
    } catch (error) {
      // Log error if request fails
      console.error('Error posting data to WordPress:', error);
      // Handle error
    }
  };
 
  return (
    <div>
      <Header />
      <div className="container mx-auto px-8 py-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
        <form id="formPost" onSubmit={posttoWordpress} className="max-w-md mx-auto">
          <div className="mb-4">
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <FiUser className="text-gray-500 mr-2" />
              <input type="text" 
              name="name" 
              id="your-name"
               placeholder="Your Name" 
               className="w-full outline-none focus:outline-none" />
            </div>
          </div>
          <div className="mb-4">
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <FiMail className="text-gray-500 mr-2" />
              <input type="text" 
              name="email" 
              id="your-email" 
              placeholder="Your Email" 
              className="w-full outline-none focus:outline-none" />
            </div>
          </div>
          <div className="mb-4">
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <FiMail className="text-gray-500 mr-2" />
              <input type="text" 
              name="subject" 
              id="your-subject" 
              placeholder="Your Subject" 
              className="w-full outline-none focus:outline-none" />
            </div>
          </div>
          <div className="mb-4">
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <FiMessageCircle className="text-gray-500 mr-2" />
              <textarea 
              name="message" 
              id="your-message"
               placeholder="Your Message" 
               cols={30} rows={6} 
               className="w-full outline-none focus:outline-none"></textarea>
            </div>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
