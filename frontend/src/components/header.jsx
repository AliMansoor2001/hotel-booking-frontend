import React, { useEffect, useState } from "react";
import { useAuth } from "../AuthContext"; 
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const { user, logout } = useAuth();
    const navigate = useNavigate();


  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    return (
        <header className='fixed flex justify-between items-center w-full z-50 bg-gradient-to-b from-white/70 via-white/30 to-transparent backdrop-blur-lg shadow-sm px-8 py-4'>
            <img  src="./images/logo.png" alt="Hotel Logo"  className="h-20 w-auto" onClick={() => navigate("/")}/>
            <nav className="flex items-center gap-6 text-gray-300 font-medium text-xl font-serif">
                <a href="/" className={`transition-colors duration-300 ${
                    scrolled
                    ? "text-gray-800 hover:text-blue-600"
                : "text-white hover:text-blue-400"}`}>Home</a>
                <a href="/" className={`transition-colors duration-300 ${
                    scrolled
                    ? "text-gray-800 hover:text-blue-600"
                : "text-white hover:text-blue-400"}`}>Hotels</a>
                <a href="/" className={`transition-colors duration-300 ${
                    scrolled
                    ? "text-gray-800 hover:text-blue-600"
                : "text-white hover:text-blue-400"}`}>Flights</a>
                <a href="/" className={`transition-colors duration-300 ${
                    scrolled
                    ? "text-gray-800 hover:text-blue-600"
                : "text-white hover:text-blue-400"}`}>About</a>
                <a href="/" className={`transition-colors duration-300 ${
                    scrolled
                    ? "text-gray-800 hover:text-blue-600"
                : "text-white hover:text-blue-400"}`}>Contact</a>

              {!user ? (  <div className="flex gap-6 text-white text-xl font-medium">
                    <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => navigate("/login")}
                          className="relative px-6 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-[#0071C2] to-[#003580] hover:from-[#005fa3] hover:to-[#002e6b] transition-all duration-300 shadow-md hover:shadow-lg">
                            Log In
                            </motion.button>

                    <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => navigate("/signup")}
                          className="relative px-6 py-2 rounded-full font-semibold text-[#003580] border border-[#003580] hover:bg-[#003580] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md">
                            Sign Up
                            </motion.button>
                </div>
              ) : (
                <div className="relative group ml-8">
                    <div className="cursor-pointer bg-[#003580] text-white font-semibold rounded-full w-11 h-11 flex items-center justify-center text-lg shadow-md">
                        {user?.username?.charAt(0).toUpperCase() ||
                user?.name?.charAt(0).toUpperCase() ||
                "U"}
                    </div>

                    <div className="absolute hidden group-hover:block right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg w-44 text-gray-800 z-50">
                        <button 
                        onClick={() => navigate("/account")}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition">
                            Account Settings
                        </button>

                        <button 
                        onClick={() => logout()}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition">
                             Sign Out
                        </button>
                    </div>
                </div>
              )}
            </nav>
        </header>
    )
}

export default Header;