import Head from 'next/head';
import Link from 'next/link';
import Header from './components/header';
import Footer from './components/footer';

const Welcome = ({ user }) => {
  return (
    <div>
      <Header />
      <div className="welcome-container min-h-screen flex justify-center items-center flex-col">
        <Head>
          <title>Welcome to Tour360</title>
          <meta name="description" content="Welcome to Tour360 - Your ultimate tour guide!" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="text-center text-gray-800">
          <div className="high-quality-images mb-8">
              {/* Add more high-quality images */}
          </div>
          <h1 className="text-4xl font-bold italic mb-8">Welcome to Tour360, {user ? user.name : 'Explorer'}!</h1>
        
          <div className="mb-8">
            <h2 className="text-4xl font-bold mb-4">WHERE TO?</h2>
            <div className="flex justify-center space-x-8">
              <Link href="/things-to-do">
                <id className="text-2xl hover:text-blue-500 transition duration-300 ease-in-out">Things to Do</id>
              </Link>
              <Link href="/hotels">
                <id className="text-2xl hover:text-blue-500 transition duration-300 ease-in-out">Hotels</id>
              </Link>
              <Link href="/restaurants">
                <id className="text-2xl hover:text-blue-500 transition duration-300 ease-in-out">Restaurants</id>
              </Link>
            </div>
          </div>
          <div className="interactive-features mb-8">
            {/* Implement interactive features here */}
            <div className="map-container mb-20">
              {/* Add a map component */}
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.9946617476623!2d-0.18696408478140827!3d5.603716495988574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdbfe4d493c31d0%3A0x6484e8db4e88a46e!2sAccra%2C%20Ghana!5e0!3m2!1sen!2s!4v1649418239932!5m2!1sen!2s" width="1250" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
            </div>
            {/* Add other interactive features like sliders or search bars */}
          </div>
          <div>

            <h2 className="text-2xl font-bold mb-4">Trending Destinations</h2>
            {/* Add featured destinations here */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-200 rounded-lg p-4">
                <img src="/images/jazz.jpg" alt="Destination 1" className="rounded-lg mb-2" />
                <h3 className="text-xl font-bold">Destination 1</h3>
                <p className="text-gray-700">Explore the wonders of Destination 1</p>
              </div>
              <div className="bg-gray-200 rounded-lg p-4">
                <img src="/images/elmina.jpg" alt="Destination 2" className="rounded-lg mb-2" />
                <h3 className="text-xl font-bold">Destination 2</h3>
                <p className="text-gray-700">Explore the wonders of Destination 2</p>
              </div>
              <div className="bg-gray-200 rounded-lg p-4">
                <img src="/images/kakum.jpg" alt="Destination 3" className="rounded-lg mb-2" />
                <h3 className="text-xl font-bold">Destination 3</h3>
                <p className="text-gray-700">Explore the wonders of Destination 3</p>
              </div>
              <div className="bg-gray-200 rounded-lg p-4">
                <img src="/images/kakum.jpg" alt="Destination 3" className="rounded-lg mb-2" />
                <h3 className="text-xl font-bold">Destination 3</h3>
                <p className="text-gray-700">Explore the wonders of Destination 3</p>
              </div>
              <div className="bg-gray-200 rounded-lg p-4">
                <img src="/images/kakum.jpg" alt="Destination 3" className="rounded-lg mb-2" />
                <h3 className="text-xl font-bold">Destination 3</h3>
                <p className="text-gray-700">Explore the wonders of Destination 3</p>
              </div>
              <div className="bg-gray-200 rounded-lg p-4">
                <img src="/images/kakum.jpg" alt="Destination 3" className="rounded-lg mb-2" />
                <h3 className="text-xl font-bold">Destination 3</h3>
                <p className="text-gray-700">Explore the wonders of Destination 3</p>
              </div>
             
              {/* Add more featured destinations */}
            </div>
          </div>
          
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Welcome;
