'use client'
import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';

const FoodAndDrinksPage = () => {
  return (
    <>
    <Header/>
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Top 3 Restaurants in Accra</h1>
        <p className="text-gray-600">By Foodie Explorer • May 23, 2024 • 7 minutes read</p>
      </header>
      <section className="mb-8">
      <img
  src="/images/food.jpg" alt="Aerial view of Kauai island coastline and mountains"className="max-w-screen-1xl mx-auto mb-4"
/>

        <p className="text-lg leading-relaxed">
        Accra, the vibrant capital city of Ghana, is known for its diverse culinary scene. From traditional Ghanaian cuisine
            to international flavors, Accra has something for everyone. Here are some of the newest restaurants that have been
            making waves in the city.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">1. Ernesto's Country Club Restaurant</h2>
        <img src="/images/ernesto.jpg" alt="Aerial view of oceanfront resort with pools and lush grounds" className="w-full mb-4" />
        <p className="text-lg leading-relaxed">
        Ernesto's country club restaurant offers High-end Italian, Mediterranean and Afro-Fusion Experience creating a unique dining experience. Nestled beside the Trasacco Valley Phase 2 Entrance on Luciana Blvd in Accra, Ghana, is the vibrant and lively Country Club. This trendy restaurant is a popular destination for locals and visitors alike, offering a modern and fun dining experience.</p>

        <p className="text-lg leading-relaxed"> As you step inside the Country Club, you’ll be greeted by a warm and inviting atmosphere. The interior is sleek and stylish, with contemporary furnishings and a vibrant color scheme that adds a touch of energy to the space.</p>
        
        
      </section>
      <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. Santoku</h2>
          <img src="/images/santoku.jpg" alt="santoku" className="w-full mb-4" />
          <p className="text-lg leading-relaxed">
          Santoku brings a touch of Tokyo to Accra, with its elegant restaurant, bar and terrace. There's a luxe feel to the space: minimalist interiors with polished concrete floors and brass lighting in the restaurant, while out on the terrace it's all linen upholstery and lush green foliage. When it comes to food, you can pick from staples like sushi, sashimi and gyoza, or go all-out with a tasting menu. There are impressive champagne and Japanese whisky lists, alongside a choice of creative cocktails, such as the award-winning Wasabiato, which blends wasabi, yuzu and cognac, and the Tokyo Night, which mixes vodka, lemon, kaffir lime syrup, apple, lemongrass, chilli, shiso and ginger ale.
          </p>
          
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. Poloclub Restaurant & Lounge</h2>
          <img src="/images/poloclub.jpg" alt="The Green Leaf Cafe" className="w-full mb-4" />
          <p className="text-lg leading-relaxed">
          The menu at PoloClub features a blend of international cuisines, with a focus on fine dining and exquisite
            cocktails. Whether you're looking to enjoy a romantic dinner, host a business meeting, or unwind with friends
            over drinks, PoloClub Restaurant and Lounge is the perfect destination.
          </p>
         
        </section>
        <footer className="text-center mt-8">

          
  <p className="text-xl font-bold mb-4">Related Stories</p>
  <div className="flex justify-center space-x-4">
    <div className="placeholder bg-gray-0 p-2 rounded-lg">
      <Link href="/best-coffee">
        <img src="/images/coffee.avif" alt="Coffee Shop Placeholder" className="w-72 h-72 rounded-lg mb-4" />
      </Link>
      <span>Best Coffee Shops in Accra</span>
    </div>
    <div className="placeholder bg-gray-0 p-2 rounded-lg">
      <Link href="/street-food">
        <img src="/images/egg.webp" alt="Street Food Placeholder" className="w-72 h-72 rounded-lg mb-4" />
      </Link>
      <span>Must-Try Street Food in Ghana</span>
    </div>
    <div className="placeholder bg-gray-0 p-2 rounded-lg">
      <Link href="/culinary">
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