import Head from 'next/head';

const ContactUs = () => {
  return (
    <div className="contact-container flex flex-col justify-center items-center min-h-screen">
      <Head>
        <title>Contact Us - Tour360</title>
        <meta name="description" content="Get in touch with Tour360 - Your ultimate tour guide!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="text-center mb-8">
        <h1 className="text-orange-500 text-3xl font-bold mb-4">Contact Us</h1>
      </header>

      <main className="w-full md:w-2/3 lg:w-1/2">
        <section className="contact-section mb-8">
          <h2 className="text-orange-500 text-2xl font-semibold mb-4">Send us a Message</h2>

          <form action="./sendEmail" method="post">
            <div className="mb-4">
              <label htmlFor="name" className="block font-semibold mb-1">Name</label>
              <input type="text" id="name" name="name" className="w-full p-2 rounded border border-gray-300" />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block font-semibold mb-1">Email</label>
              <input type="email" id="email" name="email" className="w-full p-2 rounded border border-gray-300" />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block font-semibold mb-1">Message</label>
              <textarea id="message" name="message" rows="2" className="w-full p-2 rounded border border-gray-300 resize-none"></textarea>
            </div>
            
            <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded cursor-pointer">Send Message</button>
          </form>
        </section>

        <section className="contact-section mb-8">
          <h2 className="text-orange-500 text-2xl font-semibold mb-4">Visit Us</h2>
          <p>123 Tour360 Street</p>
          <p>Accra, Ghana</p>
        </section>
      </main>

      <footer className="text-center mt-8">
        <p className="text-gray-600 text-sm">&copy; {new Date().getFullYear()} Tour360. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default ContactUs;
