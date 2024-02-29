
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
        <Link href="/dashboard">Explore Tours </Link>
      </main>

      <style js>{`
       .welcome-container {
        background-image: url('/images/background1.jpg');
        background-size: cover;
        background-position: center;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      main {
        text-align: center;
        color: white;
      }

      .animated-heading {
        animation: fadeInUp 1s ease;
      }

      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
      }

      p {
        font-size: 1.5rem;
        margin-bottom: 2rem;
      }

      a {
        font-size: 1.25rem;
        color: white;
        background-color: #0070f3;
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
        text-decoration: none;
      }

      a:hover {
        background-color: #0053aa;
      }
    `}</style>
  </div>
);
}


export default Welcome;
