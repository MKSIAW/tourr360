'use client'
import Header from '../components/header';
import Footer from '../components/footer';

const Page = () => {
  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Ghana's Best Hotel for 2024</h1>
          <p className="text-gray-600">By Hotel Explorer • May 23, 2024 • 7 minutes read</p>
        </header>
        <section className="mb-8">
          <img
            src="/images/hotel.avif"
            alt="Aerial view of Kauai island coastline and mountains"
            className="max-w-screen-1xl mx-auto mb-4"
          />
          <p className="text-lg leading-relaxed">
            Accra, the vibrant capital city of Ghana, is known for its diverse culinary scene. From traditional Ghanaian cuisine
            to international flavors, Accra has something for everyone. Here are some of the newest restaurants that have been
            making waves in the city.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Peduase Valley Resort</h2>
          <div className="explore-section bg-gray py-8 border-b border-gray-300">

            <div className="container mx-auto flex flex-col sm:flex-row items-center">
              <div className="w-full sm:w-2/3 mb-4 sm:mb-0">
                <img src="/images/peduase.jpg" alt="Food Placeholder 1" className="w-full h-[40rem] rounded-lg mb-0" />
              </div>
              <div className="w-full sm:w-1/2 flex flex-col justify-between sm:ml-4">
                <div className="w-full mb-4">
                  <img src="/images/peduase2.jpg" alt="Food Placeholder 2" className="w-full rounded-lg mb-4" />
                </div>
                <div className="w-full">
                  <img src="/images/peduase3.jpg" alt="Food Placeholder 3" className="w-full rounded-lg " />
                </div>
              </div>
            </div>

            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 ">
            <div className="border-gray-300 rounded-lg p-4 ">
              <div className="mb-4">
                <h3 className="font-bold">About</h3>
                <p>Located in the valley of Peduase, surrounded by the sights and sounds of nature, The Peduase Valley Resort is squarely centered on providing all our guests a refreshing and value for money destination.</p>
                <p>Contact: +(233)30 12345</p>
             </div> 
             
            </div>
            
              <div className="grid grid-cols-2 gap-4 ">
                <div className="mb-6">
                  <h3 className="font-bold">Property amenities</h3>
                  <p>Free High Speed Internet (WiFi)</p>
                  <p>Pool</p>
                  <p>Fitness Center with Gym / Workout Room</p>
                  <p>Free breakfast</p>
                  <p>Beach</p>
                  <p>Diving</p>
                  <p>Free airport transportation</p>
                  <p>Business Center with Internet Access</p>
                </div>
                <div className="mb-4">
                  <h3 className="font-bold">Room features</h3>
                  <p>Allergy-free room</p>
                  <p>Bathrobes</p>
                  <p>Air conditioning</p>
                  <p>Room service</p>
                  <p>Safe</p>
                  <p>Seating area</p>
                  <p>Minibar</p>
                  <p>Extra long beds</p>
                </div>
                <div className="mb-4">
                  <h3 className="font-bold">Room types</h3>
                  <p>Non-smoking rooms</p>
                  <p>Suites</p>
                </div>
                <div className="mb-4">
                  <h3 className="font-bold">Good to know</h3>
                  <p>HOTEL CLASS</p>
                </div>
                <div className="mb-4">
                  <h3 className="font-bold">HOTEL STYLE</h3>
                  <p>Charming</p>
                  <p>Luxury</p>
                </div>
                <div className="mb-4">
                  <h3 className="font-bold">LANGUAGES SPOKEN</h3>
                  <p>English, Filipino, Hindi, Indonesian and 2 more</p>
                </div>
             
              </div>
            </div>
           
          </div>
        </section>


        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. Movenpick Ambassasor Hotel</h2>

         <div className="container mx-auto flex flex-col sm:flex-row items-center">
            <div className="w-full sm:w-2/3 mb-4 sm:mb-0">
              <img src="/images/movenpick.jpg" alt="Food Placeholder 1" className="w-full h-[40rem] rounded-lg mb-0" />
            </div>
            <div className="w-full sm:w-1/3 flex flex-col justify-between sm:ml-4">
              <div className="w-full mb-4">
                <img src="/images/movenpick2.jpg" alt="Food Placeholder 2" className="w-full rounded-lg mb-4" />
              </div>
              <div className="w-full">
                <img src="/images/movenpick3.jpg" alt="Food Placeholder 3" className="w-full rounded-lg" />
              </div>
            </div>
          </div>
           <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 ">
            <div className="border-gray-300 rounded-lg p-4 ">
              <div className="mb-4">
                <h3 className="font-bold">About</h3>
                <p>Set in an urban oasis within the central district, our contemporary 5 Star hotel is only 7km from the airport where you will receive a warm Ghanaian welcome and complimentary airport shuttle. The Accra Financial Centre, World Trade Centre, International Conference Centre and Government Ministries are all close by.</p>
                <p>Contact: +(233)30 12345</p>
             </div> 
             
            </div>
            
              <div className="grid grid-cols-2 gap-4 ">
                <div className="mb-6">
                  <h3 className="font-bold">Property amenities</h3>
                  <p>Free High Speed Internet (WiFi)</p>
                  <p>Pool</p>
                  <p>Fitness Center with Gym / Workout Room</p>
                  <p>Free breakfast</p>
                  <p>Beach</p>
                  <p>Diving</p>
                  <p>Free airport transportation</p>
                  <p>Business Center with Internet Access</p>
                </div>
                <div className="mb-4">
                  <h3 className="font-bold">Room features</h3>
                  <p>Allergy-free room</p>
                  <p>Bathrobes</p>
                  <p>Air conditioning</p>
                  <p>Room service</p>
                  <p>Safe</p>
                  <p>Seating area</p>
                  <p>Minibar</p>
                  <p>Extra long beds</p>
                </div>
                <div className="mb-4">
                  <h3 className="font-bold">Room types</h3>
                  <p>Non-smoking rooms</p>
                  <p>Suites</p>
                </div>
                <div className="mb-4">
                  <h3 className="font-bold">Good to know</h3>
                  <p>HOTEL CLASS</p>
                </div>
                <div className="mb-4">
                  <h3 className="font-bold">HOTEL STYLE</h3>
                  <p>Charming</p>
                  <p>Luxury</p>
                </div>
                <div className="mb-4">
                  <h3 className="font-bold">LANGUAGES SPOKEN</h3>
                  <p>English, Filipino, Hindi, Indonesian and 2 more</p>
                </div>
             
              </div>
            </div>
        </section>


        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. Marriot Hotel</h2>
          <div className="container mx-auto flex flex-col sm:flex-row items-center">
            <div className="w-full sm:w-2/3 mb-4 sm:mb-0">
              <img src="/images/marriot.jpg" alt="Food Placeholder 1" className="w-full h-[40rem] rounded-lg mb-0" />
            </div>
            <div className="w-full sm:w-1/3 flex flex-col justify-between sm:ml-4">
              <div className="w-full mb-4">
                <img src="/images/marriot2.jpg" alt="Food Placeholder 2" className="w-full rounded-lg mb-4" />
              </div>
              <div className="w-full">
                <img src="/images/marriot3.webp" alt="Food Placeholder 3" className="w-full rounded-lg" />
              </div>
            </div>
          </div>
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 ">
            <div className="border-gray-300 rounded-lg p-4 ">
              <div className="mb-4">
                <h3 className="font-bold">About</h3>
                <p>A global symbol of luxury and hospitality, Marriott Hotels offer exceptional accommodations, top-notch amenities, and personalized service, ensuring a memorable stay for every traveler.</p>
                <p>Contact: +(233)30 12345</p>
             </div> 
             
            </div>
            
              <div className="grid grid-cols-2 gap-4 ">
                <div className="mb-6">
                  <h3 className="font-bold">Property amenities</h3>
                  <p>Free High Speed Internet (WiFi)</p>
                  <p>Pool</p>
                  <p>Fitness Center with Gym / Workout Room</p>
                  <p>Free breakfast</p>
                  <p>Beach</p>
                  <p>Diving</p>
                  <p>Free airport transportation</p>
                  <p>Business Center with Internet Access</p>
                </div>
                <div className="mb-4">
                  <h3 className="font-bold">Room features</h3>
                  <p>Allergy-free room</p>
                  <p>Bathrobes</p>
                  <p>Air conditioning</p>
                  <p>Room service</p>
                  <p>Safe</p>
                  <p>Seating area</p>
                  <p>Minibar</p>
                  <p>Extra long beds</p>
                </div>
                <div className="mb-4">
                  <h3 className="font-bold">Room types</h3>
                  <p>Non-smoking rooms</p>
                  <p>Suites</p>
                </div>
                <div className="mb-4">
                  <h3 className="font-bold">Good to know</h3>
                  <p>HOTEL CLASS</p>
                </div>
                <div className="mb-4">
                  <h3 className="font-bold">HOTEL STYLE</h3>
                  <p>Charming</p>
                  <p>Luxury</p>
                </div>
                <div className="mb-4">
                  <h3 className="font-bold">LANGUAGES SPOKEN</h3>
                  <p>English, Filipino, Hindi, Indonesian and 2 more</p>
                </div>
             
              </div>
            </div>
        </section>


        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">4. Kempinski Hotel</h2>
          <div className="container mx-auto flex flex-col sm:flex-row items-center">
            <div className="w-full sm:w-2/3 mb-4 sm:mb-0">
              <img src="/images/kempinski.jpg" alt="Food Placeholder 1" className="w-full h-[40rem] rounded-lg mb-0" />
            </div>
            <div className="w-full sm:w-1/3 flex flex-col justify-between sm:ml-4">
              <div className="w-full mb-4">
                <img src="/images/kempinski2.jpg" alt="Food Placeholder 2" className="w-full rounded-lg mb-4" />
              </div>
              <div className="w-full">
                <img src="/images/kempinski3.jpg" alt="Food Placeholder 3" className="w-full rounded-lg" />
              </div>
            </div>
          </div>
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 ">
            <div className="border-gray-300 rounded-lg p-4 ">
              <div className="mb-4">
                <h3 className="font-bold">About</h3>
                <p> With over a century of tradition, Kempinski Hotels epitomize luxury and sophistication, providing discerning guests with exquisite accommodations, fine dining, and unparalleled service in some of the world's most prestigious destinations.</p>
                <p>Contact: +(233)30 12345</p>
             </div> 
             
            </div>
            
              <div className="grid grid-cols-2 gap-4 ">
                <div className="mb-6">
                  <h3 className="font-bold">Property amenities</h3>
                  <p>Free High Speed Internet (WiFi)</p>
                  <p>Pool</p>
                  <p>Fitness Center with Gym / Workout Room</p>
                  <p>Free breakfast</p>
                  <p>Beach</p>
                  <p>Diving</p>
                  <p>Free airport transportation</p>
                  <p>Business Center with Internet Access</p>
                </div>
                <div className="mb-4">
                  <h3 className="font-bold">Room features</h3>
                  <p>Allergy-free room</p>
                  <p>Bathrobes</p>
                  <p>Air conditioning</p>
                  <p>Room service</p>
                  <p>Safe</p>
                  <p>Seating area</p>
                  <p>Minibar</p>
                  <p>Extra long beds</p>
                </div>
                <div className="mb-4">
                  <h3 className="font-bold">Room types</h3>
                  <p>Non-smoking rooms</p>
                  <p>Suites</p>
                </div>
                <div className="mb-4">
                  <h3 className="font-bold">Good to know</h3>
                  <p>HOTEL CLASS</p>
                </div>
                <div className="mb-4">
                  <h3 className="font-bold">HOTEL STYLE</h3>
                  <p>Charming</p>
                  <p>Luxury</p>
                </div>
                <div className="mb-4">
                  <h3 className="font-bold">LANGUAGES SPOKEN</h3>
                  <p>English, Filipino, Hindi, Indonesian and 2 more</p>
                </div>
             
              </div>
            </div>
        </section>




        <footer/>

      </div>
      <Footer />
    </>
  );
};

export default Page;