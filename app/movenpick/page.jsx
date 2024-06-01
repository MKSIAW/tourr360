'use client'
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import Header from '../components/header';
import Footer from '../components/footer';
import Link from 'next/link';
import { FiMapPin, FiInfo, FiAirplay, FiMap } from 'react-icons/fi';

const Beaches = () => {
  const [includedOpen, setIncludedOpen] = useState(false);
  const [departureOpen, setDepartureOpen] = useState(false);
  const [accessibilityOpen, setAccessibilityOpen] = useState(false);
  const [expectOpen, setExpectOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Movenpick Ambassador Hotel</h1>
      <div className="flex justify-center items-center mb-4">
  <FaStar className="text-yellow-500" />
  <span className="ml-1">5 reviews</span>
</div>


        <div className="flex gap-4 mb-4">
  <img src="/images/movenpick.jpg" alt="Image 1" className="rounded-lg w-1/2" /> {/* Adjusted width */}
  <div className="flex flex-col w-1/2 gap-4"> {/* Container for the other two images */}
    <img src="/images/movenpick2.jpg" alt="Image 2" className="rounded-lg h-1/2" /> 
    <img src="/images/movenpick3.jpg" alt="Image 3" className="rounded-lg h-1/2" /> 
  </div>
</div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-8">
          <div>
            <h2 className="text-xl font-bold mb-2">About</h2>
            <p className="mb-4">Our Tours as always gives you more, our well-traveled Tour Guides will make your adventures in Ghana....You will have a professional driver and a guide who is very knowledgeable and fun to be with. All your requests while on the tour will be answered...</p>
            <div className="mb-4">
  <ol className="list-decimal list-inside"> 
    <li>
    Set in an urban oasis within the central district, our contemporary 5 Star hotel is only 7km from the airport where you will receive a warm Ghanaian welcome and complimentary airport shuttle. The Accra Financial Centre, World Trade Centre, International Conference Centre and Government Ministries are all close by.
    </li>
  </ol>
</div>

          </div>


          <div className="border border-gray-300 rounded-lg p-4 mb-4">
  <div className="mb-4">
    <h2 className="text-xl font-bold mb-2">Reserve Your Spot</h2>
    {/* Date Selection */}
    <div className="flex items-center justify-between mb-2">
      <div className="rounded-full bg-gray-200 px-4 py-2">
        <input type="date" className="bg-transparent outline-none" />
      </div>
      {/* Number of Users Selection */}
      <div className="rounded-full bg-gray-200 px-4 py-2">
        <select className="bg-transparent outline-none">
          <option value="1">1 Adult</option>
          <option value="2">2 Adults</option>
          <option value="3">3 Adults</option>
          <option value="4">4 Adults</option>
        </select>
      </div>
    </div>
    {/* Tour Details */}
    <div className="border border-gray-200 rounded-lg p-4 mb-4">
  <p>Elmina Castle Experience</p>
  <div className="border-b border-gray-300 mb-2">
    <h2 className="text-xl font-bold mb-2">Reserve Now, Pay Later!</h2>
  </div>
  <p>Pickup included</p>
  <p>2 Adults x GHS 175.00</p>
  <p>Total GHS 350.00</p>
  <p>(No additional taxes or booking fees)</p>
 
 

</div>

    {/* Button to Booking Page */}
    <button className="bg-yellow-500 text-white font-bold py-4 px-16 rounded-full mt-6">
      <a href="/booking">Reserve Now</a>
    </button>
    {/* Refund Policy */}
    <p className="text-xs mt-2">Not sure? You can cancel this reservation up to 24 hours in advance for a full refund.</p>
  </div>
</div>


        </div>


        <div className="col">
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2 cursor-pointer" onClick={() => setIncludedOpen(!includedOpen)}>What's Included</h2>
            {includedOpen && (
              <ul className="list-disc list-inside pl-4">
                <li>Transportation</li>
                <li>Wifi onboard</li>
                <li>Admission fees & Accomodation </li>
               
              </ul>
            )}
          </div>
          <hr className="my-4" />
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2 cursor-pointer" onClick={() => setExpectOpen(!expectOpen)}>What to expect</h2>
            {expectOpen && (
              <>
              
                <p className="pl-4">
                <div className="mb-4">
  <h2 className="text-xl font-bold mb-2">Itinerary</h2>
  <div className="mb-4">
    <b>Afternoon: Arrival and Check-In</b>
    <p>
    Arrive at the Movenpick Ambassador Hotel, located in the heart of Accra.
    Check-in and settle into your room.
    Take a tour of the hotel facilities including the pool, fitness center, and spa.
    Relax and unwind after your journey.

    </p>
    <p>
      Duration: 2 hours
    </p>
  </div>

  <div className="mb-4">
    <b>Morning: Arrival at Polo Beach House</b>
    <p>
    Arrive at Polo Beach House located in Prampram.
    Take some time to settle in and explore the surroundings.
      Enjoy the pristine beach and the various water activities available such as swimming, beach volleyball, or simply relaxing by the shore.
    You can also take a walk along the beach to enjoy the scenic views.
    </p>
    <p>
      Duration: 30 minutes
    </p>
  </div>

</div>

 </p>
 </>
 )}
</div>


          <hr className="my-4" />
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2 cursor-pointer" onClick={() => setDepartureOpen(!departureOpen)}>Departure & Return</h2>
            {departureOpen && (
              <div className="pl-4">
                {/* Departure & Return information */}
                <div className="mb-4 flex items-center">
                  <FiMapPin className="h-6 w-6 mr-2" />
                  <div>
                    <b>Start:</b>
                    <p>Accra Mall, Plot C11 Tetteh Quarshie Interchange, Spintex Rd, Accra, Ghana</p>
                    <p>We can all meet at Accra Mall gate 2..or you better call the number provided let's decide together.</p>
                  </div>
                </div>

                <div className="mb-4 flex items-center">
                  <FiInfo className="h-6 w-6 mr-2" />
                  <div>
                    <b>Pickup details</b>
                    <p>We can all meet at Accra Mall gate 2..or you better call the number provided let's decide together.</p>
                  </div>
                </div>


                <p><b>End: This activity ends back at the meeting point.</b></p>
              </div>
            )}
          </div>



          <hr className="my-4" />
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2 cursor-pointer" onClick={() => setAccessibilityOpen(!accessibilityOpen)}>Accessibility</h2>
            {accessibilityOpen && (
             <p className="pl-4">
             <ul className="list-disc list-inside">
               <li>Not wheelchair accessible</li>
               <li>Service animals allowed</li>
               <li>Near public transportation</li>
             </ul>
             If you have questions about accessibility, we’d be happy to help. Just call this number:
             +233 20 909 8878
           </p>
           
            )}
          </div>

          <hr className="my-4" />
          <div className="mb-16">
            <h2 className="text-xl font-bold mb-2 cursor-pointer" onClick={() => setHelpOpen(!helpOpen)}>Help</h2>
            {helpOpen && (
              <p className="pl-4">If you have questions about this tour or need help making your booking, we’d be happy to help. Just call the number below and reference the product code: 376189P7
              +233 20 909 8878</p>
            )}
          </div>

        </div>



        <div className="text-left mt-20">
            <h2 className="text-3xl font-bold mb-4">Similar Experience</h2>
            <div className="flex gap-8">
              <div className="block transition duration-300 ease-in-out">
                <div className="placeholder bg-gray-0 p-2 rounded-lg ">
                  <Link href="BotiFalls">
                    <img src="/images/Aburi.jpg" alt="Placeholder 1" className="w-72 h-72 rounded-lg mb-4" />
                  </Link>
                  <h3 className="text-xl font-semibold mb-2">Boti Falls & Aburi Gardens Experience</h3>
                  <p className="text-green-500 mb-2">Rating: 4.5</p>
                  <p className="text-green-500">Price Range: GHS 50 - 100</p>
                </div>
              </div>

              <div className="block transition duration-300 ease-in-out">
                <div className="placeholder bg-gray-0 p-2 rounded-lg ">
                  <Link href="/SafariValley">
                    <img src="/images/shai.webp" alt="Placeholder 2" className="w-72 h-72 rounded-lg mb-4" />
                  </Link>
                  <h3 className="text-xl font-semibold mb-2">Private tour of Shai Hills Reserves, <p>Volta river & bead factory</p></h3>
                  <p className="text-green-500 mb-2">Rating: 4.2</p>
                  <p className="text-green-500">Price Range: GHS 30 - 80</p>
                </div>
              </div>

              <div className="block transition duration-300 ease-in-out">
                <div className="placeholder bg-gray-0 p-2 rounded-lg ">
                  <Link href="BotiFalls">
                    <img src="/images/53.jpg" alt="Placeholder 3" className="w-72 h-72 rounded-lg mb-4" />
                  </Link>
                  <h3 className="text-xl font-semibold mb-2">Nature Thrills</h3>
                  <p className="text-green-500 mb-2">Rating: 4.7</p>
                  <p className="text-green-500">Price Range: GHS 100 - 300</p>
                </div>
              </div>

              <div className="block transition duration-300 ease-in-out">
                <div className="placeholder bg-gray-0 p-2 rounded-lg ">
                  <Link href="/KwameNkrumahMausoleum">
                    <img src="/images/nature.jpeg" alt="Placeholder 4" className="w-72 h-72 rounded-lg mb-4" />
                  </Link>
                  <h3 className="text-xl font-semibold mb-2">Legon Botanical Garden and <p>Kwame Nkrumah Museum experience</p> </h3>
                  <p className="text-green-500 mb-2">Rating: 4.9</p>
                  <p className="text-green-500">Price Range: GHS 80 - 200</p>
                </div>
              </div>
            </div>
          </div>



      </div>
      <Footer />
    </>
  );
};

export default Beaches;
