import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';

const FoodAndDrinksPage = () => {
  return (
    <>
    <Header/>
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">7 Beaches to visit during summer</h1>
        <p className="text-gray-600">By Explorer • May 31, 2024 • 8 minutes read</p>
      </header>
      <section className="mb-8">
      <img
  src="/images/beach.webp" alt="Aerial view of Kauai island coastline and mountains"className="max-w-screen-1xl mx-auto mb-4"
/>

        <p className="text-lg leading-relaxed">
        Accra, the bustling capital of Ghana, is not just a hub of culture and history but also a haven for beach lovers. The city's coastline is dotted with a variety of beaches, each offering a unique experience. Whether you're looking for a lively atmosphere, a place to relax, or stunning views, Accra's beaches have something for everyone.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">1. Bojo Beach</h2>
        <img src="/images/bojo.jpg" alt="Aerial view of oceanfront resort with pools and lush grounds" className="w-full mb-4" />
        <p className="text-lg leading-relaxed">
        Bojo Beach offers a unique experience with its pristine sands and crystal-clear waters. Separated from the mainland by the Densu River, visitors reach the beach via a short boat ride, adding a sense of adventure to the visit. Bojo Beach is perfect for those seeking a more secluded and relaxing day by the sea.</p>

        <p className="text-lg leading-relaxed"> As you step inside the Country Club, you’ll be greeted by a warm and inviting atmosphere. The interior is sleek and stylish, with contemporary furnishings and a vibrant color scheme that adds a touch of energy to the space.</p>
        
        
      </section>
      <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. Busua Beach Resort</h2>
          <img src="/images/busua.jpg" alt="santoku" className="w-full mb-4" />
          <p className="text-lg leading-relaxed">
          Busua beach is fantastic stretch of sand and clean, warm sea. Locals are super friendly and helpful without being intrusive, just always on hand if you need anything. Lots of great bars dotted along the beach where you can get the days catch cooked fresh.
          </p>
          
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. Cape Three Points</h2>
          <img src="/images/cape3.jpg" alt="The Green Leaf Cafe" className="w-full mb-4" />
          <p className="text-lg leading-relaxed">
          Cape Three Points is a small peninsula in the Western Region of Ghana on the Atlantic Ocean. It forms the southernmost tip of Ghana.
          </p>
         
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. Coco Beach</h2>
          <img src="/images/coco.avif" alt="The Green Leaf Cafe" className="w-full mb-4" />
          <p className="text-lg leading-relaxed">
          The New Coco Beach Resort provides a great place for travelers to relax after a busy day. The New Coco Beach Resort is an ideal choice for travelers who want to take in the sights and sounds of Accra.
The nearby area boasts an abundance of attractions including Latter-Glory Prayer And Intercessory Ministry International, Royal Park and Church Of Pentecost - Teshie Nungua.
At the end of a busy day, travelers can unwind and relax in the hotel or go out and enjoy the city.
          </p>
         
        </section>

        <footer className="text-center mt-8">

          
  <p className="text-xl font-bold mb-4">Related Stories</p>
  <div className="flex justify-center space-x-4">
    <div className="placeholder bg-gray-0 p-2 rounded-lg">
      <Link href="/best-coffee-shops-in-accra">
        <img src="/images/coffee.avif" alt="Coffee Shop Placeholder" className="w-72 h-72 rounded-lg mb-4" />
      </Link>
      <span>Best Coffee Shops in Accra</span>
    </div>
    <div className="placeholder bg-gray-0 p-2 rounded-lg">
      <Link href="/must-try-street-food-in-ghana">
        <img src="/images/egg.webp" alt="Street Food Placeholder" className="w-72 h-72 rounded-lg mb-4" />
      </Link>
      <span>Must-Try Street Food in Ghana</span>
    </div>
    <div className="placeholder bg-gray-0 p-2 rounded-lg">
      <Link href="/exploring-ghanaian-cuisine">
        <img src="/images/cuisine.avif" alt="Cuisine Placeholder" className="w-72 h-72 rounded-lg mb-4" />
      </Link>
      <span>Exploring Ghanaian Cuisine: A Culinary Adventure</span>
    </div>
  </div>
</footer>



      </div>
      <Footer />
    </>
  );
};

export default FoodAndDrinksPage;