import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#002a63] to-[#001a44] text-gray-200 pt-12 pb-6 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1: Logo + Description */}
        <div>
          <img
            src="/images/logo.png"
            alt="Company Logo"
            className="h-16 mb-4 cursor-pointer"
          />
          <p className="text-sm leading-6 text-gray-300">
            We connect travelers with unforgettable experiences.  
            Book hotels, flights, and destinations effortlessly — anywhere, anytime.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white border-b border-blue-400 inline-block pb-1">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-blue-400 transition">Home</a></li>
            <li><a href="/hotels" className="hover:text-blue-400 transition">Hotels</a></li>
            <li><a href="/flights" className="hover:text-blue-400 transition">Flights</a></li>
            <li><a href="/about" className="hover:text-blue-400 transition">About Us</a></li>
            <li><a href="/contact" className="hover:text-blue-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white border-b border-blue-400 inline-block pb-1">
            Support
          </h3>
          <ul className="space-y-2">
            <li><a href="/help" className="hover:text-blue-400 transition">Help Center</a></li>
            <li><a href="/faq" className="hover:text-blue-400 transition">FAQs</a></li>
            <li><a href="/terms" className="hover:text-blue-400 transition">Terms of Service</a></li>
            <li><a href="/privacy" className="hover:text-blue-400 transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Column 4: Contact + Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white border-b border-blue-400 inline-block pb-1">
            Contact
          </h3>
          <p className="text-sm mb-2">📍 Dubai, United Arab Emirates</p>
          <p className="text-sm mb-2">📞 +971 50 688 4725</p>
          <p className="text-sm mb-6">✉️ <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsCSmvtVQfWLjbnxXNxmNqLzDrCDzvFXRgWXTWMRKtsSXfhNwZxCMpgglwWcWVWpqSxhhvPq">alimansoorqadirghumro@gmail.com</a></p>

          <div className="flex gap-4">
            <a href="https://www.facebook.com/ali.mansoor.54772" className="bg-blue-500 hover:bg-blue-600 p-2 rounded-full transition">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/ali_qadir911?igsh=MXZnOHUxaHVpem9nYw==" className="bg-pink-500 hover:bg-pink-600 p-2 rounded-full transition">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/ali-mansoor-qadir-886811264/" className="bg-blue-700 hover:bg-blue-800 p-2 rounded-full transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} TravelPro. All rights reserved.  
        <span className="text-blue-400"> Designed with ❤️ by Ali Mansoor Qadir</span>
      </div>
    </footer>
  );
};

export default Footer;
