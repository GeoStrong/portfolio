import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Heart, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import lovebirdsLogo from "../../../src/images/lovebirds-icon.png";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a050f]/80 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/lovebirds" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-md overflow-hidden bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-lg shadow-pink-500/20 group-hover:shadow-pink-500/40 transition-all duration-300">
            <img
              src={lovebirdsLogo}
              alt="Lovebirds Logo"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
            Lovebirds
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/lovebirds"
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
          >
            Home
          </Link>
          <a
            href="/lovebirds#features"
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
          >
            Features
          </a>
          <a
            href="/lovebirds#how-it-works"
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
          >
            How it Works
          </a>
          <button className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-all duration-300 border border-white/5">
            Get Early Access
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-white/70 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#0a050f]/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6 md:hidden"
          >
            <Link
              to="/lovebirds"
              className="text-lg font-medium text-white/80 hover:text-white"
            >
              Home
            </Link>
            <a
              href="/lovebirds#features"
              className="text-lg font-medium text-white/80 hover:text-white"
            >
              Features
            </a>
            <a
              href="/lovebirds#how-it-works"
              className="text-lg font-medium text-white/80 hover:text-white"
            >
              How it Works
            </a>
            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium shadow-lg shadow-pink-500/25 mt-4">
              Get Early Access
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
