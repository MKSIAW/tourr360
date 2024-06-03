import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';

const Page = () => {
  return (
    <>
    <Header/>
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Best Coffee Shops in Accra</h1>
        <p className="text-gray-600">By Food Explorer • May 31, 2024 • 8 minutes read</p>
      </header>
      <section className="mb-8">
      <img
  src="/images/coffee2.avif" alt="Aerial view of Kauai island coastline and mountains"className="max-w-screen-1xl mx-auto mb-4"
/>

        <p className="text-lg leading-relaxed">
        Accra, Ghana's vibrant capital, is a haven for coffee enthusiasts. Here are some of the best coffee spots that offer not just great brews but also unique atmospheres.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">1. Café Kwae</h2>
        <img src="/images/cafe.avif" alt="Aerial view of oceanfront resort with pools and lush grounds" className="w-full mb-4" />
        <p className="text-lg leading-relaxed">
        Located in Airport Residential, Café Kwae is known for its cozy ambiance and exceptional coffee. The baristas craft delicious espresso-based drinks, and their cold brew is a must-try. The café also offers a variety of pastries and healthy meals, making it a perfect spot for breakfast or lunch.</p>

        
        
      </section>
      <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. Vida e Caffè</h2>
          <img src="/images/vida.png" alt="santoku" className="w-full mb-4" />
          <p className="text-lg leading-relaxed">
          With several branches across the city, Vida e Caffè brings a taste of Portugal to Accra. Known for its vibrant atmosphere, this café serves up robust espressos and creamy cappuccinos. It's a great place to grab a quick coffee on the go or sit down and enjoy the lively environment.
          </p>
          
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. Second Cup</h2>
          <img src="/images/second.webp" alt="The Green Leaf Cafe" className="w-full mb-4" />
          <p className="text-lg leading-relaxed">
          Situated in the heart of Osu, Second Cup offers a serene space with a diverse coffee menu. From traditional favorites like lattes and americanos to more adventurous options like the Caramel Corretto, there’s something for every coffee lover. Their outdoor seating area is perfect for people-watching.
          </p>
         
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">4. Josie’s Cuppa Cappuccino</h2>
          <img src="/images/josie.jpg" alt="The Green Leaf Cafe" className="w-full mb-4" />
          <p className="text-lg leading-relaxed">
          Josie’s Cuppa Cappuccino, located in Labone, combines a stylish interior with top-notch coffee. Their attention to detail in brewing and presentation sets them apart. Enjoy a rich cup of cappuccino or try their flavorful teas. The café also doubles as an art gallery, showcasing local artists.</p>
         
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">5. Tea Baa</h2>
          <img src="/images/baa.jpg" alt="The Green Leaf Cafe" className="w-full mb-4" />
          <p className="text-lg leading-relaxed">
          Though primarily a tea house, Tea Baa in East Legon offers a delightful coffee selection. Their unique twist on traditional coffee drinks and the eclectic, laid-back vibe make it a favorite among locals and visitors alike. The rooftop seating is ideal for a relaxing evening with friends.
          </p>
         
        </section>

      


      </div>
      <Footer />
    </>
  );
};

export default Page;