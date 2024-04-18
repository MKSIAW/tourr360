'use client'
import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

const BookingPage = () => {
  const [formData, setFormData] = useState({
    date: null,
    guests: 1,
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    pickupLocation: '',
    activityLanguage: '',
    promoCode: ''
  });
  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data to backend for processing
    console.log('Form submitted:', formData);
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
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Book Your Experience</h1>
        {renderStep()}
      </div>
      <Footer />
    </div>
  );
}

// Step1 component
const Step1 = ({ formData, handleChange, handleNextStep }) => {
  return (
    <form onSubmit={handleNextStep} className="max-w-lg mx-auto space-y-4">
      <div className="mb-6">
        <label htmlFor="date" className="block text-sm font-medium text-gray-700">Select Date:</label>
        <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-6">
        <label htmlFor="guests" className="block text-sm font-medium text-gray-700">Number of Guests:</label>
        <input type="number" id="guests" name="guests" value={formData.guests} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Next</button>
    </form>
  );
};

// Step2 component
const Step2 = ({ formData, handleChange, handleNextStep, handlePreviousStep }) => {
  return (
    <form onSubmit={handleNextStep} className="max-w-lg mx-auto space-y-4">
      <div className="mb-6">
        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name:</label>
        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
      </div>
      {/* Add similar styling for other input fields */}
      <div className="flex justify-between">
        <button type="button" onClick={handlePreviousStep} className="w-1/2 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600">Previous</button>
        <button type="submit" className="w-1/2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Next</button>
      </div>
    </form>
  );
};

// Step3 component
const Step3 = ({ formData, handleChange, handleNextStep, handlePreviousStep }) => {
  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
      <div className="mb-6">
        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number:</label>
        <input type="text" id="cardNumber" name="cardNumber" value={formData.cardNumber} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
      </div>
      {/* Add similar styling for other input fields */}
      <div className="flex justify-between">
        <button type="button" onClick={handlePreviousStep} className="w-1/2 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600">Previous</button>
        <button type="submit" className="w-1/2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Book</button>
      </div>
    </form>
  );
};

export default BookingPage;
