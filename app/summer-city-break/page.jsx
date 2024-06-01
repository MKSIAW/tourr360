import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';

const FoodAndDrinksPage = () => {
  return (
    <>
    <Header/>
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Top 3 City Breaks</h1>
        <p className="text-gray-600">By Explorer • May 31, 2024 • 3 minutes read</p>
      </header>
      <section className="mb-8">
      <img
  src="/images/ghana.jpg" alt="Aerial view of Kauai island coastline and mountains"className="max-w-screen-1xl mx-auto mb-4"
/>

        <p className="text-lg leading-relaxed">
        Ghana's vibrant cities offer a blend of culture, history, and modernity, making them perfect destinations for a memorable city break. Here are three must-visit cities for an unforgettable Ghanaian urban experience:
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">1. Kumasi</h2>
        <img src="/images/kumasi.jpg" alt="Aerial view of oceanfront resort with pools and lush grounds" className="w-full mb-4" />
        <p className="text-lg leading-relaxed">
        Known as the cultural heartbeat of Ghana, Kumasi is steeped in Ashanti tradition. Visit the sprawling Kejetia Market, one of West Africa's largest open-air markets, for a sensory overload of sights, sounds, and smells. Discover the rich history of the Ashanti Kingdom at the Manhyia Palace Museum and explore the lush grounds of the Kumasi Fort and Military Museum.</p>
        
        
      </section>
      <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. Cape Coast</h2>
          <img src="/images/capee.jpeg" alt="santoku" className="w-full mb-4" />
          <p className="text-lg leading-relaxed">
          A city with a poignant past, Cape Coast is home to the Cape Coast Castle and Elmina Castle, both UNESCO World Heritage Sites that serve as reminders of Ghana's role in the transatlantic slave trade. Delve into the country's history at the Cape Coast Castle's museum and take a sobering journey through the dungeons. Afterward, unwind at the picturesque beaches or explore the charming streets lined with colonial-era architecture.
          </p>
          
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. Accra</h2>
          <img src="/images/accra2.jpeg" alt="The Green Leaf Cafe" className="w-full mb-4" />
          <p className="text-lg leading-relaxed">
          As the capital city, Accra pulsates with life. Explore its bustling markets, such as Makola Market, where you can shop for traditional textiles and crafts. Don't miss the historical sites like the Kwame Nkrumah Mausoleum and Jamestown, offering glimpses into Ghana's past. Relax on Labadi Beach or indulge in the city's burgeoning culinary scene.</p>


         
        </section>

     

        
      </div>
      <Footer />
    </>
  );
};

export default FoodAndDrinksPage;