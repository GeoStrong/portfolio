import React from "react";
import { Link } from "react-router-dom";
import { Heart, Twitter, Instagram, Github } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050208] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/lovebirds" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                <Heart className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Lovebirds
              </span>
            </Link>
            <p className="text-white/50 max-w-sm mb-8 leading-relaxed">
              Build stronger, deeper, and more meaningful relationships with
              AI-powered coaching, gamification, and a shared couple space
              designed for love.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="/lovebirds#features"
                  className="text-white/50 hover:text-pink-400 transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="/lovebirds#how-it-works"
                  className="text-white/50 hover:text-pink-400 transition-colors"
                >
                  How it Works
                </a>
              </li>
              <li>
                <a
                  href="/lovebirds#reviews"
                  className="text-white/50 hover:text-pink-400 transition-colors"
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/50 hover:text-pink-400 transition-colors"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  to="/lovebirds/privacy"
                  className="text-white/50 hover:text-pink-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/lovebirds/terms"
                  className="text-white/50 hover:text-pink-400 transition-colors"
                >
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Lovebirds - AI Relationship Navigator.
            All rights reserved.
          </p>
          <p className="text-white/40 text-sm flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-pink-500 fill-pink-500" />{" "}
            for stronger connections
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
