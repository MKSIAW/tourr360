import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white text-blue-600 p-4 text-center">
      <div className="space-x-4">
        <Link href="/about" className="text-blue-600">About Us</Link>
        <Link href="/contact" className="text-blue-600">Contact Us</Link>
        <a href="#" className="text-blue-600">Social Media</a>
      </div>

      <p className="text-sm mt-2">&copy; {new Date().getFullYear()} Tour360. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
