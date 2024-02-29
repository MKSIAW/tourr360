
import Head from 'next/head';
import Link from 'next/link';

const Welcome = () => {
  return (
    <div className="welcome-container">
      <Head>
        <title>Welcome to Tour360</title>
        <meta name="description" content="Welcome to Tour360 - Your ultimate tour guide!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Tour360</h1>
        <p>Your ultimate tour guide!</p>
        <Link href="/tours">Explore Tours</Link>
      </main>

    
    </div>
  );
}

export default Welcome;
