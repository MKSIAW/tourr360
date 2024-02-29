import Link from 'next/link';
import Head from 'next/head';
import HamburgerMenu from '../hamburgerMenu/page';

const Dashboard = () => {

  const touristSites = [
    { name: 'Site 1',
     image: '/images/Aburi.jpg',
     },

    { name: 'Site 2', image: '/site2.jpg' },
    { name: 'Site 3', image: '/site3.jpg' },
    { name: 'Site 3', image: '/site3.jpg' },
    { name: 'Site 3', image: '/site3.jpg' },
    { name: 'Site 3', image: '/site3.jpg' },
    { name: 'Site 3', image: '/site3.jpg' },
    { name: 'Site 3', image: '/site3.jpg' },
    { name: 'Site 3', image: '/site3.jpg' },
    { name: 'Site 3', image: '/site3.jpg' },
    { name: 'Site 3', image: '/site3.jpg' },
    { name: 'Site 3', image: '/site3.jpg' },
    { name: 'Site 3', image: '/site3.jpg' },
    { name: 'Site 3', image: '/site3.jpg' },
    { name: 'Site 3', image: '/site3.jpg' },
    { name: 'Site 3', image: '/site3.jpg' },
    { name: 'Site 3', image: '/site3.jpg' },
    { name: 'Site 3', image: '/site3.jpg' },
    { name: 'Site 3', image: '/site3.jpg' },
    { name: 'Site 3', image: '/site3.jpg' },
    { name: 'Site 3', image: '/site3.jpg' },
    { name: 'Site 3', image: '/site3.jpg' },
    { name: 'Site 3', image: '/site3.jpg' },
    { name: 'Site 3', image: '/site3.jpg' },
    { name: 'Site 3', image: '/site3.jpg' },
    { name: 'Site 3', image: '/site3.jpg' },
    { name: 'Site 3', image: '/site3.jpg' },
    { name: 'Site 3', image: '/site3.jpg' },
    { name: 'Site 3', image: '/site3.jpg' },
    { name: 'Site 3', image: '/site3.jpg' },
    { name: 'Site 3', image: '/site3.jpg' },
    { name: 'Site 3', image: '/site3.jpg' },
    
  ];




  return (
    <div className="dashboard-container">
      <Head>
        <title>Dashboard - Tour360</title>
        <meta name="description" content="Dashboard for Tour360 - Your ultimate tour guide!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      

      {/* Navbar */}
      <header className="navbar">
        <div className="navbar-brand">
          <span className="app-name">Tour360</span>
          <img src="/images/dobiison-virtual-tour-logo.webp" alt="Profile Icon" className="profile-icon" />
        </div>
        <div className="navbar-links">
        <input type="text" placeholder="Search..." className="search-input" />
        <a href="#">Sign In</a>
        <a href="#">Settings</a>
        <a href="#">Cart</a>
        <a href="#">Notification</a>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="tourist-sites">
          {touristSites.map((site, index) => (
            <div className="tourist-site" key={index}>
              {/* Use site.image for the actual image */}
              {/* Placeholder with background color */}
              <div className="image-placeholder"></div>
              <p>{site.name}</p>
            </div>
          ))}
        </div>
        
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
        <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
          <a href="#">Social Media</a>
        </div>

        <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Tour360. All rights reserved.</p>
      </div>

      </footer>

      <style js>{`
        .dashboard-container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        .navbar {
          background-color: #0070f3;
          color: white;
          padding: 10px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .navbar-brand {
          display: flex;
          align-items: center;
        }
        .search-input {
          padding: 5px;
          border: none;
          border-radius: 5px;
          margin-right: 10px;
          width: 200px; /* Adjust width as needed */
        }


        .app-name {
          font-size: 1.5rem;
          margin-right: 10px;
        }

        .navbar-links {
          display: flex;
          align-items: center;
        }

        .navbar-links a {
          color: white;
          text-decoration: none;
          margin-right: 10px;
        }

        .main-content {
          flex-grow: 1;
          padding: 20px;
        }
        .tourist-sites {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 20px;
        }
        .tourist-site {
          border: 1px solid #ccc;
          padding: 10px;
          text-align: center;
        }


        .image-placeholder {
          width: 100%;
          height: 150px;
          background-color: #f0f0f0; 
        }

        .virtual-tour-button {
          background-color: #0070f3;
          color: white;
          border: none;
          padding: 10px 20px;
          font-size: 1rem;
          border-radius: 5px;
          cursor: pointer;
          margin-top: 20px;
        }

        .virtual-tour-button:hover {
          background-color: #0053aa;
        }

        .footer {
          background-color: #0070f3;
          padding: 20px;
          text-align: center;
        }

        .footer-links a {
          color: white;
          text-decoration: none;
          margin-right: 10px;
        }
        .profile-icon{
         width: 50px;
        }
      `}</style>
    </div>
  );
}


export default Dashboard;
