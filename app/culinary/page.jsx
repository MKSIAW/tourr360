'use client'
import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';

const Page = () => {
  return (
    <>
    <Header/>
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Exploring Ghanaian Cuisine: A Culinary Adventure</h1>
        <p className="text-gray-600">By Explorer • May 31, 2024 • 8 minutes read</p>
      </header>
      <section className="mb-8">
      <img
  src="/images/cuisine2.webp" alt="Aerial view of Kauai island coastline and mountains"className="max-w-screen-1xl mx-auto mb-4"
/>

        <p className="text-lg leading-relaxed">
        Dive into the vibrant flavors and rich heritage of Ghanaian cuisine with us! From aromatic soups to spicy stews, join our culinary journey through the heart of West Africa. Discover the ingredients, traditions, and stories that make Ghanaian food a true delight for the senses. Get ready to tantalize your taste buds and expand your culinary horizons!
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">1. Okra</h2>
        <img src="/images/okra.webp" alt="Aerial view of oceanfront resort with pools and lush grounds" className="w-full mb-4" />
        <p className="text-lg leading-relaxed">
        Also known as "lady's fingers," okra is a vegetable commonly used in Ghanaian cuisine to add texture and thickness to soups and stews. It is prized for its mucilaginous properties, which help to thicken dishes like okra soup and groundnut soup, while also contributing a unique flavor.</p>
        
        
      </section>
      <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. Palm Oil</h2>
          <img src="/images/palmoil.webp" alt="santoku" className="w-full mb-4" />
          <p className="text-lg leading-relaxed">
          Palm oil is a staple cooking oil in Ghanaian cuisine, prized for its vibrant color and distinct flavor. It is derived from the fruit of the oil palm tree and is widely used in frying, sautéing, and as a base for soups and stews. Palm oil adds richness and depth to dishes, as well as a characteristic reddish-orange hue.
          </p>
          
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. Cloves</h2>
          <img src="/images/cloves.webp" alt="The Green Leaf Cafe" className="w-full mb-4" />
          <p className="text-lg leading-relaxed">
          Cloves are aromatic flower buds commonly used as a spice in Ghanaian cooking to add depth and warmth to dishes. They have a strong, sweet, and slightly bitter flavor profile, with hints of both sweetness and spiciness. Cloves are often used whole or ground in spice blends, marinades, and sauces.
          </p>
         
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">4. Yam</h2>
          <img src="/images/yam.webp" alt="The Green Leaf Cafe" className="w-full mb-4" />
          <p className="text-lg leading-relaxed">
          Yam is a starchy tuber widely consumed in Ghana and is a versatile ingredient in Ghanaian cuisine. It can be boiled, fried, mashed, or roasted and is used in a variety of dishes, including yam fufu, yam chips, and yam porridge. Yam is prized for its hearty texture and mild flavor.
          </p>
         
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">5. Black-eyed Peas</h2>
          <img src="/images/beans.webp" alt="The Green Leaf Cafe" className="w-full mb-4" />
          <p className="text-lg leading-relaxed">
          Black-eyed peas, also known as beans, are a type of legume commonly used in Ghanaian cuisine for their nutty flavor and creamy texture. They are often cooked in stews, soups, and rice dishes, such as waakye, a popular Ghanaian rice and beans dish. Black-eyed peas are also a good source of protein and fiber in Ghanaian cooking.
          </p>
         
        </section>

      


      </div>
      <Footer />
    </>
  );
};

export default Page;