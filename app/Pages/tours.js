
import Head from 'next/head';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Head>
        <title>Dashboard - Tour360</title>
        <meta name="description" content="Dashboard for Tour360 - Your ultimate tour guide!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="navbar">
        <div className="navbar-brand">
          <span className="app-name">Tour360</span>
          <img src="/profile-icon.png" alt="Profile Icon" className="profile-icon" />
        </div>
        <div className="navbar-links">
          <a href="#">Sign In</a>
          <a href="#">Search</a>
          <a href="#">Settings</a>
          <a href="#">Cart</a>
          <a href="#">Notification</a>
        </div>
      </header>

      <main className="main-content">
        {/* Placeholder for images */}
        <div className="image-placeholder">
          {/* Add your images here */}
        </div>
        <button className="virtual-tour-button">Take Virtual Tour</button>
      </main>

      <footer className="footer">
        <div className="footer-links">
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
          <a href="#">Social Media</a>
        </div>
      </footer>

     
    </div>
  );
}

export default Dashboard;
