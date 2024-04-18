import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>About Us - Tour360</title>
        <meta name="description" content="Learn more about Tour360 - Your ultimate tour guide!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      
<Header/>
      {/* Main content */}
      <main className="flex-grow">
        <div className="container mx-auto py-8 px-4">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg">Welcome to Tour360, your ultimate guide to exploring the captivating beauty and rich culture of Ghana from the comfort of your home. At Tour360, we are passionate about bringing the wonders of this vibrant country to life through immersive virtual tours.</p>
            {/* Add more content here */}
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="team-member">
                <img src="/images/team-member1.jpg" alt="Team Member 1" className="w-32 h-32 mx-auto rounded-full mb-4" />
                <h3 className="text-xl font-semibold">John Doe</h3>
                <p className="text-gray-600">CEO</p>
              </div>
              <div className="team-member">
                <img src="/images/team-member2.jpg" alt="Team Member 2" className="w-32 h-32 mx-auto rounded-full mb-4" />
                <h3 className="text-xl font-semibold">Jane Smith</h3>
                <p className="text-gray-600">Marketing Director</p>
              </div>
              {/* Add more team members here */}
            </div>
          </section>
        </div>
      </main>

     
      <Footer/>
    </div>
  );
}

export default About;
