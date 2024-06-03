import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';

const Page = () => {
  return (
    <>
    <Header/>
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">5 Best Hiking Trails for Summer</h1>
        <p className="text-gray-600">By Explorer • May 31, 2024 • 8 minutes read</p>
      </header>
      <section className="mb-8">
      <img
  src="/images/hiking2.avif" alt="Aerial view of Kauai island coastline and mountains"className="max-w-screen-1xl mx-auto mb-4"
/>

        <p className="text-lg leading-relaxed">
        Accra, the vibrant capital of Ghana, is not only known for its beaches and cultural landmarks but also for its scenic hiking trails. For outdoor enthusiasts and nature lovers, the city's surrounding landscapes offer several opportunities for hiking and exploration. Here are a few top spots for hiking around Accra:
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">1. Nkawkaw Cocoa farm</h2>
        <img src="/images/nkawkaw.jpg" alt="Aerial view of oceanfront resort with pools and lush grounds" className="w-full mb-4" />
        <p className="text-lg leading-relaxed">
        Nestled in the Eastern Region of Ghana, the Nkawkaw Cocoa Farms offer a unique and enriching hiking experience. Just a few hours' drive from Accra, this hike takes you through lush cocoa plantations and beautiful natural landscapes.</p>

        <p className="text-lg leading-relaxed"> As you step inside the Country Club, you’ll be greeted by a warm and inviting atmosphere. The interior is sleek and stylish, with contemporary furnishings and a vibrant color scheme that adds a touch of energy to the space.</p>
        
        
      </section>
      <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. E3P - Bamboo Forest</h2>
          <img src="/images/bamboo.jpg" alt="santoku" className="w-full mb-4" />
          <p className="text-lg leading-relaxed">
          Nice hike through rubber plantations into the forest to the bamboo cathedral.
The loop in the middle leads to a destilery and can be omitted if you want to go straight.
The trail has been logged on the way back.
          </p>
          
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. Aburi</h2>
          <img src="/images/aburiwalk.jpg" alt="The Green Leaf Cafe" className="w-full mb-4" />
          <p className="text-lg leading-relaxed">
          A great walk to explore town and near by villages. Stumbled across a stunning waterfall which the locals confirmed its all year round
          </p>
         
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">4. Wli Agumatsa Falls</h2>
          <img src="/images/wli.jpg" alt="The Green Leaf Cafe" className="w-full mb-4" />
          <p className="text-lg leading-relaxed">
          Easy hike to Hohoe's largest waterfall, you will pass by 9 man-made bridges until you reach the beautiful waterfall where you can go in and take a picture under it, water depth reach a maximum of 1.5 meters.
          </p>
         
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">5. Lou Moon Family hike</h2>
          <img src="/images/lou.avif" alt="The Green Leaf Cafe" className="w-full mb-4" />
          <p className="text-lg leading-relaxed">
          45 minutes per way through forest, fields and along the sea.
GPS reception was not very precise but the trail is easy to find.
          </p>
         
        </section>

      


      </div>
      <Footer />
    </>
  );
};

export default Page;