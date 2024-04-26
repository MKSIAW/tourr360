
import Head from 'next/head';
import Link from 'next/link';
import Header from './components/header';
import Footer from './components/footer';
import { FiMap, FiHotel, FiRestaurant, FiHome } from 'react-icons/fi';


const Welcome = () => {
  return (
    <div>
      
      <Header />
      <div className="welcome-container text-center text-gray-800">
        <main>
          <h2 className="text-4xl font-bold mb-4">Where to?</h2>
          <div className="flex justify-center space-x-8 mb-8">
            <Link href="/things-to-do">
              <div className="text-2xl hover:text-blue-500 hover:underline transition duration-300 ease-in-out flex items-center">
                <FiMap className="h-6 w-6 mr-2" /> 
                Things to do
              </div>
            </Link>

            <Link href="/hotels">
              <div className="text-2xl hover:text-blue-500 hover:underline transition duration-300 ease-in-out flex items-center">
                <FiHotel className="h-6 w-6 mr-2" /> 
                Hotels
              </div>
            </Link>

            <Link href="/restaurants">
              <div className="text-2xl hover:text-blue-500 hover:underline transition duration-300 ease-in-out flex items-center">
                <FiRestaurant className="h-6 w-6 mr-2" /> 
                Restaurants
              </div>
            </Link>

            <Link href="/vacation-rentals">
              <div className="text-2xl hover:text-blue-500 hover:underline transition duration-300 ease-in-out flex items-center">
                <FiHome className="h-6 w-6 mr-2" /> 
                Vacation Rentals
              </div>
            </Link>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Welcome;
