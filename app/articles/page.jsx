import Header from "../components/header";
import Footer from "../components/footer";
import Link from 'next/link';


const ExplorePage = () => {
  return (
    <div>
      <Header/>
      <div className="container mx-auto py-8">
      <div className="text-center mt-4 font-arial">
            <h2 className="text-4xl font-semibold mb-4">Food and Drink</h2>
            <p className="text-3xl-gray-600  ">Dig into the best restaurants and bars, street food, and culinary hotspots around the world.</p>
            <p className="text-3xl-gray-600 mb-2">Who's Hungry?</p>
          </div>


        <div className="explore-section bg-gray py-8">
          <div className="container mx-auto flex flex-col sm:flex-row items-center">
            
            <div className="w-full sm:w-2/3 mb-4 sm:mb-0">
              <Link href="/foodanddrink">
              <img src="/images/food.jpg" alt="Food Placeholder 1" className="w-full h-[40rem] rounded-lg mb-0" />
              </Link>
            </div>
            <div className="w-full sm:w-1/3 flex flex-col justify-between sm:ml-4">
              <div className="w-full mb-4">
              <Link href="/foodanddrink">
                <img src="/images/drink.avif" alt="Food Placeholder 2" className="w-full rounded-lg mb-4" />
                </Link>
              </div>
              <div className="w-full">
              <Link href="/foodanddrink">
                <img src="/images/restaurant.webp" alt="Food Placeholder 3" className="w-full rounded-lg" />
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
           
          </div>
        </div>

      
        <div className="explore-section py-8">
          <div className="container mx-auto">
            <div className="text-center mt-4 font-arial">
            <h2 className="text-4xl font-semibold mb-4">Places to visit</h2>
            <p className="text-3xl-gray-600 mb-8 ">The most exciting destinations, experiences, hidden gems, and traveler faves to check out now.</p>
          </div>

          <div class="flex items-center justify-center -mx-8">
  <div class="w-full sm:w-1/2 mb-2 sm:mb-0 px-2">
    <Link href="/places-to-visit">
    <img src="/images/villagio.jpg" alt="Visit Placeholder 1" class="w-full rounded-lg h-96" />
    </Link>
  </div>

  <div class="w-full sm:w-1/2 flex flex-col justify-between px-2">
    <div class="w-full mb-2">
    <Link href="/places-to-visit">
      <img src="/images/polo.jpg" alt="Visit Placeholder 2" class="w-full rounded-lg h-72" />
      </Link>
    </div>
    <div class="w-full">
    <Link href="/places-to-visit">
      <img src="/images/jazz.jpg" alt="Visit Placeholder 3" class="w-full rounded-lg h-72" />
      </Link>
    </div>
  </div>

  <div class="w-full sm:w-1/2 mb-2 sm:mb-0 px-2">
  <Link href="/places-to-visit">
    <img src="/images/safari.avif" alt="Visit Placeholder 4" class="w-full rounded-lg h-96" />
    </Link>
  </div>

  <div class="w-full sm:w-1/2 flex flex-col justify-between px-2">
    <div class="w-full mb-2">
    <Link href="/places-to-visit">
      <img src="/images/kwams.jpg" alt="Visit Placeholder 5" class="w-full rounded-lg h-72" />
      </Link>
    </div>
    <div class="w-full">
    <Link href="/places-to-visit">
      <img src="/images/lake.jpg" alt="Visit Placeholder 6" class="w-full rounded-lg h-72" />
      </Link>
    </div>
  </div>

  <div class="w-full sm:w-1/2 mb-2 sm:mb-0 px-2">
  <Link href="/places-to-visit">
    <img src="/images/kempinski.jpg" alt="Visit Placeholder 7" class="w-full rounded-lg h-96" />
    </Link>
  </div>

  <div class="w-full sm:w-1/2 flex flex-col justify-between px-2">
    <div class="w-full mb-2">
    <Link href="/places-to-visit">
      <img src="/images/kintampo.jpg" alt="Visit Placeholder 8" class="w-full rounded-lg h-72" />
      </Link>
    </div>
    <div class="w-full">
    <Link href="/places-to-visit">
      <img src="/images/choice.jpg" alt="Visit Placeholder 9" class="w-full rounded-lg h-72" />
      </Link>
    </div>
  </div>
</div>
   <div className="text-center mt-4">
             
            </div>
          </div>
        </div>

        

        <div className="explore-section py-8 mb-10">
          <div className="container mx-auto">
           <h2 className="text-3xl font-semibold mb-8 ml-4">Get outside this summer</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">

            <div className="relative flex flex-col justify-between items-center bg-white rounded-lg p-2">
  <div className="relative">
  <Link href="/beaches">
    <img src="/images/beach.webp" alt="Beach Placeholder" className="w-full h-56 object-cover rounded-lg mb-4" />
    </Link>
    <button className="absolute top-0 right-0 text-red-500 hover:text-red-700 z-10">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 3a5.25 5.25 0 0110.394 1.623A5.25 5.25 0 0118 8.5c0 2.76-3.134 5.773-8.101 9.047a1.725 1.725 0 01-1.798 0C5.134 14.273 2 11.26 2 8.5a5.25 5.25 0 011-3.877A5.25 5.25 0 016 3z" />
      </svg>
    </button>
  </div>
  <h3 className="text-xl text-center mt-4 font-arial font-semibold mb-2">7 Best Beaches to Visit During Summer</h3>
  <p className="text-green-500 text-center font-arial mb-4">Discover stunning beaches to relax and enjoy the sun.</p>
  <div className="flex justify-between w-full mb-4">
    
  </div>
</div>



                <div className="flex flex-col justify-between items-center bg-white rounded-lg p-2 ">
                <div className="relative">
                <Link href="/beaches">
                <img src="/images/hiking.avif" alt="Beach Placeholder" className="w-full h-56 object-cover rounded-lg mb-4" />
                </Link>
                <button className="absolute top-0 right-0 text-red-500 hover:text-red-700 z-10">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 3a5.25 5.25 0 0110.394 1.623A5.25 5.25 0 0118 8.5c0 2.76-3.134 5.773-8.101 9.047a1.725 1.725 0 01-1.798 0C5.134 14.273 2 11.26 2 8.5a5.25 5.25 0 011-3.877A5.25 5.25 0 016 3z" />
      </svg>
    </button>
    </div>
                <h3 className="text-xl text-center mt-4 font-arial font-semibold mb-2">5 Best Hiking Trails for Summer</h3>
                <p className="text-green-500  text-center font-arial mb-4">Explore the great outdoors and discover the best hiking trails this summer.</p>
                <div className="flex justify-between w-full mb-4">
                  
                </div>
                </div>


                <div className="flex flex-col justify-between items-center bg-white rounded-lg p-2 ">
                <div className="relative">
                <Link href="/beaches">
                <img src="/images/city.webp" alt="Beach Placeholder" className="w-full h-56 object-cover rounded-lg mb-4" />
                </Link>
                <button className="absolute top-0 right-0 text-red-500 hover:text-red-700 z-10">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 3a5.25 5.25 0 0110.394 1.623A5.25 5.25 0 0118 8.5c0 2.76-3.134 5.773-8.101 9.047a1.725 1.725 0 01-1.798 0C5.134 14.273 2 11.26 2 8.5a5.25 5.25 0 011-3.877A5.25 5.25 0 016 3z" />
      </svg>
    </button>
    </div>
                <h3 className="text-xl text-center mt-4 font-arial font-semibold mb-2">Top 3 City Breaks for Summer</h3>
                <p className="text-green-500 text-center font-arial mb-4">Discover the best cities to explore and experience this summer.</p>
                <div className="flex justify-between w-full mb-4">
                  
                </div>
                </div>
            
            </div>
            
          </div>
        </div>

      </div>
      <Footer/>
    </div>
  );
};

export default ExplorePage;
