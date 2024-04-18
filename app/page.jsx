'use client'
import Head from 'next/head';
import Link from 'next/link';
import Header from './components/header';
import Footer from './components/footer';

const Welcome = () => {
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
          <h1 className="text-6xl font-bold mb-8">Welcome to Tour360</h1>
          <p className="text-3xl mb-10">Your ultimate tour guide!</p>
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
          <div>
            <h2 className="text-4xl font-bold mb-4">Trending</h2>
            {/* Add trending content here */}
          </div>
         {/* Placeholder content */}
         <div className="text-xl">
            <p>This is a placeholder for additional content below the Trending section.</p>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Welcome;
