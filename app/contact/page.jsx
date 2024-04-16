'use client'
import { useEffect, useState } from 'react';
import Head from 'next/head';

const ContactUs = () => {
  const [formHtml, setFormHtml] = useState('');

  useEffect(() => {
    const fetchContactForm = async () => {
      try {
        // Fetch form data from custom WordPress API endpoint
        const response = await fetch('http://localhost/wordpress/wp-json/contact-form-7/v1/contact-forms/70/feeback');
        const formData = await response.text();
        setFormHtml(formData);
      } catch (error) {
        console.error('Error fetching contact form:', error);
      }
    };

    fetchContactForm();
  }, []);

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

          {/* Render the Contact Form 7 HTML */}
          <div dangerouslySetInnerHTML={{ __html: formHtml }} />
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
