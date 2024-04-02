import Link from 'next/link';
import Head from 'next/head';


const Dashboard = () => {


  

  const touristSites = [
    {
      name: 'Aburi',
      image: '/images/Aburi.jpg',
      location: 'Aburi, Ghana',
      ratings: 4.5,
      virtualTour: '/virtual-tour/aburi',
    },
    {
      name: 'Aburi',
      image: '/images/Aburi.jpg',
      location: 'Aburi, Ghana',
      ratings: 4.5,
      virtualTour: '/virtual-tour/aburi',
    },
    {
      name: 'Aburi',
      image: '/images/Aburi.jpg',
      location: 'Aburi, Ghana',
      ratings: 4.5,
      virtualTour: '/virtual-tour/aburi',
    },
    {
      name: 'Aburi',
      image: '/images/Aburi.jpg',
      location: 'Aburi, Ghana',
      ratings: 4.5,
      virtualTour: '/virtual-tour/aburi',
    },
    {
      name: 'Aburi',
      image: '/images/Aburi.jpg',
      location: 'Aburi, Ghana',
      ratings: 4.5,
      virtualTour: '/virtual-tour/aburi',
    },
    {
      name: 'Aburi',
      image: '/images/Aburi.jpg',
      location: 'Aburi, Ghana',
      ratings: 4.5,
      virtualTour: '/virtual-tour/aburi',
    },
    {
      name: 'Aburi',
      image: '/images/Aburi.jpg',
      location: 'Aburi, Ghana',
      ratings: 4.5,
      virtualTour: '/virtual-tour/aburi',
    },
    {
      name: 'Aburi',
      image: '/images/Aburi.jpg',
      location: 'Aburi, Ghana',
      ratings: 4.5,
      virtualTour: '/virtual-tour/aburi',
    },
    {
      name: 'Aburi',
      image: '/images/Aburi.jpg',
      location: 'Aburi, Ghana',
      ratings: 4.5,
      virtualTour: '/virtual-tour/aburi',
    },
    {
      name: 'Aburi',
      image: '/images/Aburi.jpg',
      location: 'Aburi, Ghana',
      ratings: 4.5,
      virtualTour: '/virtual-tour/aburi',
    },
    {
      name: 'Aburi',
      image: '/images/Aburi.jpg',
      location: 'Aburi, Ghana',
      ratings: 4.5,
      virtualTour: '/virtual-tour/aburi',
    },
    {
      name: 'Aburi',
      image: '/images/Aburi.jpg',
      location: 'Aburi, Ghana',
      ratings: 4.5,
      virtualTour: '/virtual-tour/aburi',
    },
    {
      name: 'Aburi',
      image: '/images/Aburi.jpg',
      location: 'Aburi, Ghana',
      ratings: 4.5,
      virtualTour: '/virtual-tour/aburi',
    },
    {
      name: 'Aburi',
      image: '/images/Aburi.jpg',
      location: 'Aburi, Ghana',
      ratings: 4.5,
      virtualTour: '/virtual-tour/aburi',
    },
    {
      name: 'Aburi',
      image: '/images/Aburi.jpg',
      location: 'Aburi, Ghana',
      ratings: 4.5,
      virtualTour: '/virtual-tour/aburi',
    },
    {
      name: 'Aburi',
      image: '/images/Aburi.jpg',
      location: 'Aburi, Ghana',
      ratings: 4.5,
      virtualTour: '/virtual-tour/aburi',
    },
    {
      name: 'Aburi',
      image: '/images/Aburi.jpg',
      location: 'Aburi, Ghana',
      ratings: 4.5,
      virtualTour: '/virtual-tour/aburi',
    },
    {
      name: 'Aburi',
      image: '/images/Aburi.jpg',
      location: 'Aburi, Ghana',
      ratings: 4.5,
      virtualTour: '/virtual-tour/aburi',
    },
    {
      name: 'Aburi',
      image: '/images/Aburi.jpg',
      location: 'Aburi, Ghana',
      ratings: 4.5,
      virtualTour: '/virtual-tour/aburi',
    },
    {
      name: 'Aburi',
      image: '/images/Aburi.jpg',
      location: 'Aburi, Ghana',
      ratings: 4.5,
      virtualTour: '/virtual-tour/aburi',
    },
    {
      name: 'Aburi',
      image: '/images/Aburi.jpg',
      location: 'Aburi, Ghana',
      ratings: 4.5,
      virtualTour: '/virtual-tour/aburi',
    },
    {
      name: 'Aburi',
      image: '/images/Aburi.jpg',
      location: 'Aburi, Ghana',
      ratings: 4.5,
      virtualTour: '/virtual-tour/aburi',
    },
    {
      name: 'Aburi',
      image: '/images/Aburi.jpg',
      location: 'Aburi, Ghana',
      ratings: 4.5,
      virtualTour: '/virtual-tour/aburi',
    },
    {
      name: 'Aburi',
      image: '/images/Aburi.jpg',
      location: 'Aburi, Ghana',
      ratings: 4.5,
      virtualTour: '/virtual-tour/aburi',
    },
    {
      name: 'Aburi',
      image: '/images/Aburi.jpg',
      location: 'Aburi, Ghana',
      ratings: 4.5,
      virtualTour: '/virtual-tour/aburi',
    },
    {
      name: 'Aburi',
      image: '/images/Aburi.jpg',
      location: 'Aburi, Ghana',
      ratings: 4.5,
      virtualTour: '/virtual-tour/aburi',
    },
    {
      name: 'Aburi',
      image: '/images/Aburi.jpg',
      location: 'Aburi, Ghana',
      ratings: 4.5,
      virtualTour: '/virtual-tour/aburi',
    },
    {
      name: 'Aburi',
      image: '/images/Aburi.jpg',
      location: 'Aburi, Ghana',
      ratings: 4.5,
      virtualTour: '/virtual-tour/aburi',
    },
    {
      name: 'Aburi',
      image: '/images/Aburi.jpg',
      location: 'Aburi, Ghana',
      ratings: 4.5,
      virtualTour: '/virtual-tour/aburi',
    },
    {
      name: 'Aburi',
      image: '/images/Aburi.jpg',
      location: 'Aburi, Ghana',
      ratings: 4.5,
      virtualTour: '/virtual-tour/aburi',
    },
    {
      name: 'Aburi',
      image: '/images/Aburi.jpg',
      location: 'Aburi, Ghana',
      ratings: 4.5,
      virtualTour: '/virtual-tour/aburi',
    },
    {
      name: 'Aburi',
      image: '/images/Aburi.jpg',
      location: 'Aburi, Ghana',
      ratings: 4.5,
      virtualTour: '/virtual-tour/aburi',
    },




   
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

        <button className="sign-in-button">
            <Link href="/signin">Sign In</Link>
          </button>

        <Link href="/settings">Settings</Link>n
        <Link href="/cart">Cart</Link>
        <Link href="/profile">Profile</Link>
        </div>
      
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="tourist-sites">
          {touristSites.map((site, index) => (
            <div className="tourist-site" key={index}>
              {/* Image */}
              <div className="image-placeholder">
                <img src={site.image} alt={site.name} />
              </div>
              {/* Name */}
              <h3>{site.name}</h3>
              {/* Ratings */}
              <div className="ratings">{site.ratings} Stars</div>
              {/* Location */}
              <div className="location">{site.location}</div>
              
              
            
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
        .sign-in-button {
          background-color: #0070f3;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 20px;
          cursor: pointer;
          text-decoration: none; /* Remove default underline */
        }

        .sign-in-button:hover {
          background-color: #0053aa;
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
          padding: 2px;
          text-align: center;
        }


        .image-placeholder {
          width: 200px;
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
        
          .footer-links {
            margin-bottom: 20px; /* Add margin between links and copyright */
          }
        

        .footer-links a {
          color: white;
          text-decoration: none;
          margin-right: 40px;
        }
        .copyright {
          margin-top: 10px; /* Add margin above copyright */
        }
      
        .copyright p {
          color: #fff;
          font-size: 0.9rem;
        }
        .profile-icon{
         width: 50px;
        }
      `}</style>
    </div>
  );
}


export default Dashboard;
