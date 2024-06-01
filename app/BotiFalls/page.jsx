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
      <h1 className="text-3xl font-bold mb-4 text-center">Boti Falls</h1>
      <div className="flex justify-center items-center mb-4">
  <FaStar className="text-yellow-500" />
  <span className="ml-1">5 reviews</span>
</div>


        <div className="flex gap-4 mb-4">
  <img src="/images/boti.jpg" alt="Image 1" className="rounded-lg w-1/2" /> {/* Adjusted width */}
  <div className="flex flex-col w-1/2 gap-4"> {/* Container for the other two images */}
    <img src="/images/boti2.jpg" alt="Image 2" className="rounded-lg h-1/2" /> 
    <img src="/images/boti3.jpg" alt="Image 3" className="rounded-lg h-1/2" /> 
  </div>
</div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-8">
          <div>
            <h2 className="text-xl font-bold mb-2">About</h2>
            <p className="mb-4">Boti Falls, located in the Eastern Region of Ghana, is a picturesque waterfall nestled in lush greenery and surrounded by scenic landscapes. Here are some key points about Boti Falls:</p>
            <div className="mb-4">
                
  <ol className="list-decimal list-inside"> 
  
    <li>
    Natural Beauty: Boti Falls is renowned for its stunning natural beauty, characterized by cascading waterfalls surrounded by dense tropical forests.
    </li>
    <li>
    Twin Waterfalls: Boti Falls comprises two main waterfalls, the upper falls and the lower falls, which descend from different heights into a serene pool below.
    </li>
    <li>
    Cultural Significance: The falls hold cultural significance for the local people, particularly the nearby Boti community. It is often used for rituals and traditional ceremonies.
    </li>
    <li>
    Adventure and Recreation: Visitors can engage in various activities at Boti Falls, including hiking, swimming in the pool beneath the falls, and exploring the surrounding forest trails.
    </li>
    <li>
    Tourist Facilities: There are basic tourist facilities available near Boti Falls, including picnic areas, restrooms, and stalls selling local crafts and refreshments.
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
                <li>Admission fees </li>
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
   
    <p>
    Morning:

    Depart Accra early (around 6:00 AM).
    Travel to Boti Falls (2.5 - 3 hours).

Mid-Morning:
3. Explore the falls and surrounding trails.

Late Morning:
4. Hike to Upper Falls for scenic views.

Noon:
5. Enjoy a picnic lunch by the falls.

Afternoon:
6. Visit Lower Falls for another perspective.

Late Afternoon:
7. Relax and explore the area further.

Evening:
8. Depart Boti Falls by 4:00 PM for return to Accra.
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
