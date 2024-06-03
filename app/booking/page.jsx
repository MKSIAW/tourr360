'use client'

import Header from '../components/header';
import Footer from '../components/footer';
import React, { useState, useEffect } from 'react';

const BookingPage = () => {
  const [formData, setFormData] = useState({
    date: '',
    guests: 1,
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    whereTo: '',
    pickupLocation: '',
    activityLanguage: '',
    promoCode: '',
    cardNumber: '',
    cvc: '',
    nameOnCard: '',
    expiryDate: ''
  });

  const [availability, setAvailability] = useState(''); // State to store availability status

  useEffect(() => {
    // Fetch availability data when the date changes
    if (formData.date) {
      // Simulate fetching availability data from the server
      // Replace this with actual API call
      const fakeAvailabilityData = {
        date: formData.date,
        available: Math.random() < 0.7 // Simulating availability randomly
      };
      setAvailability(fakeAvailabilityData);
    }
  }, [formData.date]);

  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      title: `${formData.firstName} ${formData.lastName} Booking`,
      content: `
        <p>Date: ${formData.date}</p>
        <p>Guests: ${formData.guests}</p>
        <p>First Name: ${formData.firstName}</p>
        <p>Last Name: ${formData.lastName}</p>
        <p>Email: ${formData.email}</p>
        <p>Phone Number: ${formData.phoneNumber}</p>
        <p>Where To: ${formData.whereTo}</p>
        <p>Pickup Location: ${formData.pickupLocation}</p>
        <p>Activity Language: ${formData.activityLanguage}</p>
        <p>Promo Code: ${formData.promoCode}</p>
        <p>Card Number: ${formData.cardNumber}</p>
        <p>CVC: ${formData.cvc}</p>
        <p>Name on Card: ${formData.nameOnCard}</p>
        <p>Expiry Date: ${formData.expiryDate}</p>
      `,
      status: 'publish'
    };

    try {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJtaWNoZWxsZSIsImlhdCI6MTcxNDQ4ODQ1NywiZXhwIjoxODcyMTY4NDU3fQ.cg9eGdXaeKaKQiBtLscqfl7wUTq_BXUite33psQPjxk";
      const response = await fetch('http://localhost/wordpress/wp-json/wp/v2/posts/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Failed to post data to WordPress');
      }

      const responseData = await response.json();
      console.log('Data posted to WordPress:', responseData);

    } catch (error) {
      console.error('Error posting data to WordPress:', error);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1
            formData={formData}
            handleChange={handleChange}
            handleNextStep={handleNextStep}
          />
        );
      case 2:
        return (
          <Step2
            formData={formData}
            handleChange={handleChange}
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
          />
        );
      case 3:
        return (
          <Step3
            formData={formData}
            handleChange={handleChange}
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
            handleSubmit={handleSubmit}
          />
        );
      default:
        return null;
    }
  };

  
    return (
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        <div className="flex-grow container mx-auto py-8">
          <h1 className="text-3xl font-bold mb-8 flex justify-center">Book Your Experience</h1>
          <div className="bg-white p-8 rounded-lg shadow-md max-w-lg mx-auto" style={{ backgroundImage: 'url(/path-to-your-pattern-image.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <Step1
              formData={formData}
              handleChange={handleChange}
              handleNextStep={handleNextStep}
              availability={availability}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  };
const Step1 = ({ formData, handleChange, handleNextStep, availability }) => {
  const isDateAvailable = availability && availability.available;

  return (
    <form onSubmit={handleNextStep} className="space-y-4">
      <div className="mb-6">
        <label htmlFor="date" className="block text-sm font-medium text-gray-700">Select Date:</label>
        <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${availability && availability.available ? 'border-green-500' : 'border-red-500'}`} />
      </div>
      {availability && (
        <div className="text-sm mb-4">
          {availability.available ? (
            <span className="text-green-500">Available</span>
          ) : (
            <span className="text-red-500">Not Available</span>
          )}
        </div>
      )}
      <div className="mb-6">
        <label htmlFor="guests" className="block text-sm font-medium text-gray-700">Number of Guests:</label>
        <input type="number" id="guests" name="guests" value={formData.guests} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
      </div>
      <button type="submit" className={`w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 ${!isDateAvailable ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={!isDateAvailable}>Next</button>
    </form>
  );
};


const Step2 = ({ formData, handleChange, handleNextStep, handlePreviousStep }) => {
  return (
    <form onSubmit={handleNextStep} className="space-y-4">
      <div className="mb-6">
        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name:</label>
        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-6">
        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name:</label>
        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-6">
        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number:</label>
        <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-6">
        <label htmlFor="whereTo" className="block text-sm font-medium text-gray-700">Where to?</label>
        <input type="text" id="whereTo" name="whereTo" value={formData.whereTo} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-6">
        <label htmlFor="pickupLocation" className="block text-sm font-medium text-gray-700">Pickup Location:</label>
        <input type="text" id="pickupLocation" name="pickupLocation" value={formData.pickupLocation} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-6">
        <label htmlFor="activityLanguage" className="block text-sm font-medium text-gray-700">Activity Language:</label>
        <input type="text" id="activityLanguage" name="activityLanguage" value={formData.activityLanguage} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-6">
        <label htmlFor="promoCode" className="block text-sm font-medium text-gray-700">Promo Code:</label>
        <input type="text" id="promoCode" name="promoCode" value={formData.promoCode} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
      </div>
      <div className="flex justify-between mt-4">
        <button type="button" onClick={handlePreviousStep} className="w-1/3 bg-gray-500 text-white px-2 py-2 rounded-md hover:bg-gray-600">Previous</button>
        <button type="submit" className="w-1/3 bg-blue-500 text-white px-2 py-2 rounded-md hover:bg-blue-600">Next</button>
      </div>
    </form>
  );
};

const Step3 = ({ formData, handleChange, handleNextStep, handlePreviousStep, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="mb-6">
        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number:</label>
        <input type="text" id="cardNumber" name="cardNumber" value={formData.cardNumber} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-6">
        <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">CVC:</label>
        <input type="text" id="cvc" name="cvc" value={formData.cvc} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-6">
        <label htmlFor="nameOnCard" className="block text-sm font-medium text-gray-700">Name on Card:</label>
        <input type="text" id="nameOnCard" name="nameOnCard" value={formData.nameOnCard} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-6">
        <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">Expiry Date:</label>
        <input type="text" id="expiryDate" name="expiryDate" value={formData.expiryDate} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
      </div>
      <div className="flex justify-between mt-4">
        <button type="button" onClick={handlePreviousStep} className="w-1/3 bg-gray-500 text-white px-2 py-2 rounded-md hover:bg-gray-600">Previous</button>
        <button type="submit" className="w-1/3 bg-blue-500 text-white px-2 py-2 rounded-md hover:bg-blue-600">Book</button>
      </div>
    </form>
  );
};

export default BookingPage;
