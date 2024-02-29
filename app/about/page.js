import Head from 'next/head';

const About = () => {
  return (
    <div className="about-container">
      <Head>
        <title>About Us - Tour360</title>
        <meta name="description" content="Learn more about Tour360 - Your ultimate tour guide!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>About Us</h1>
      </header>

      <main>
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
        </section>

        <section className="about-section">
          <h2>Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src="/images/team-member1.jpg" alt="Team Member 1" />
              <h3>John Doe</h3>
              <p>CEO</p>
            </div>
            <div className="team-member">
              <img src="/images/team-member2.jpg" alt="Team Member 2" />
              <h3>Jane Smith</h3>
              <p>Marketing Director</p>
            </div>
            {/* Add more team members here */}
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Tour360. All rights reserved.</p>
      </footer>

      <style js>{`
        /* Container */
        .about-container {
          padding: 20px;
          max-width: 800px;
          margin: 0 auto;
          color: #333;
          font-family: Arial, sans-serif;
        }

        /* Header */
        header {
          text-align: center;
          margin-bottom: 30px;
        }

        header h1 {
          color: #0070f3; /* Blue color from dashboard */
          font-size: 2rem;
          margin-bottom: 10px;
        }

        /* Main */
        .about-section {
          margin-bottom: 40px;
        }

        .about-section h2 {
          color: #0070f3; /* Blue color from dashboard */
          font-size: 1.5rem;
          margin-bottom: 20px;
        }

        .team-members {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: center;
        }

        .team-member {
          text-align: center;
          background-color: #f0f0f0;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          width: 200px;
        }

        .team-member h3 {
          margin-bottom: 5px;
        }

        .team-member p {
          color: #666;
        }

        .team-member img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          margin-bottom: 10px;
        }

        footer {
          text-align: center;
          margin-top: 50px;
        }

        footer p {
          color: #666;
          font-size: 0.9rem;
        }
      `}</style>
    </div>
  );
}

export default About;
