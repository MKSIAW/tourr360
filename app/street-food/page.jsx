import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';

const Page = () => {
  return (
    <>
    <Header/>
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Must-Try Street Food in Ghana: A flavorful Journey</h1>
        <p className="text-gray-600">By Explorer • May 31, 2024 • 8 minutes read</p>
      </header>
      <section className="mb-8">
      <img
  src="/images/kosua.webp" alt="Aerial view of Kauai island coastline and mountains"className="max-w-screen-1xl mx-auto mb-4"
/>

        <p className="text-lg leading-relaxed">
        Ghana is a treasure trove of vibrant street food that showcases its rich culinary heritage. When you find yourself in this West African gem, don’t miss out on these must-try delights:
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">1. Waakye</h2>
        <img src="/images/waakye.webp" alt="Aerial view of oceanfront resort with pools and lush grounds" className="w-full mb-4" />
        <p className="text-lg leading-relaxed">
        A beloved staple, Waakye is a hearty dish of rice and beans cooked with millet leaves, giving it a distinctive color. It’s typically served with a variety of accompaniments such as fried plantains, boiled eggs, fish, meat, and shito (a spicy black pepper sauce). This meal is a flavor explosion in every bite.</p>
        
        
      </section>
      <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. Chinchinga</h2>
          <img src="/images/khebab.jpg" alt="santoku" className="w-full mb-4" />
          <p className="text-lg leading-relaxed">
          Known as Ghanaian kebabs, Chinchinga are skewered and grilled pieces of spicy meat, usually beef or chicken. The meat is marinated in a blend of spices and grilled over open flames, resulting in a smoky, savory treat that's a favorite among locals and visitors alike.
          </p>
          
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. Kosua ne Meko</h2>
          <img src="/images/meko.avif" alt="The Green Leaf Cafe" className="w-full mb-4" />
          <p className="text-lg leading-relaxed">
          Kosua ne Meko, a delightful combination of grilled goat meat and roasted plantains, is a popular street food in Ghana. The smoky flavor of the grilled goat meat perfectly complements the sweetness of the roasted plantains, creating a harmonious blend of flavors that’s simply irresistible.
          </p>
         
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">4. Koko and Koose</h2>
          <img src="/images/koko.jpg" alt="The Green Leaf Cafe" className="w-full mb-4" />
          <p className="text-lg leading-relaxed">
          Koko is a spiced millet porridge often enjoyed for breakfast. It’s mildly spicy and slightly tangy, making it a warming start to the day. Koose, deep-fried black-eyed pea fritters, are the perfect accompaniment. Together, they offer a delicious and nutritious morning meal.
          </p>
         
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">5. Banku and Tilapia</h2>
          <img src="/images/banku.jpg" alt="The Green Leaf Cafe" className="w-full mb-4" />
          <p className="text-lg leading-relaxed">
          Banku is a fermented corn and cassava dough that’s cooked into a smooth, stretchy texture. It’s often paired with grilled tilapia that’s been marinated with spices and grilled to perfection. Served with a side of pepper sauce, this dish is a must-try for any seafood lover.
          </p>
         
        </section>

      


      </div>
      <Footer />
    </>
  );
};

export default Page;