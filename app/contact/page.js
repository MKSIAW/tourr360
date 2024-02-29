import Head from 'next/head';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <Head>
        <title>Contact Us - Tour360</title>
        <meta name="description" content="Get in touch with Tour360 - Your ultimate tour guide!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>Contact Us</h1>
      </header>

      <main>
        <section className="contact-section">
          <h2>Send us a Message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4"></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </section>

        <section className="contact-section">
          <h2>Visit Us</h2>
          <p>123 Tour360 Street</p>
          <p>Accra, Ghana</p>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Tour360. All rights reserved.</p>
      </footer>

      <style js>{`
        /* Container */
        .contact-container {
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
          color: #ff5500; /* Orange color */
          font-size: 2rem;
          margin-bottom: 10px;
        }

        /* Main */
        .contact-section {
          margin-bottom: 40px;
        }

        .contact-section h2 {
          color: #ff5500; /* Orange color */
          font-size: 1.5rem;
          margin-bottom: 20px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        label {
          display: block;
          font-weight: bold;
          margin-bottom: 5px;
        }

        input[type="text"],
        input[type="email"],
        textarea {
          width: 100%;
          padding: 10px;
          border-radius: 5px;
          border: 1px solid #ccc;
        }

        textarea {
          resize: vertical;
        }

        button[type="submit"] {
          background-color: #ff5500; /* Orange color */
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
        }

        button[type="submit"]:hover {
          background-color: #cc4400; /* Darker shade of orange */
        }

        /* Footer */
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

export default ContactUs;
