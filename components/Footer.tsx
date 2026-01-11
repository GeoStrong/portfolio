import React from "react";
import { PERSONAL_INFO } from "../types/constants";

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent mb-6 md:mb-0">
          {PERSONAL_INFO.name}
        </div>

        <div className="text-gray-500 text-sm mb-6 md:mb-0">
          © {new Date().getFullYear()} All rights reserved. Built with Next.js &
          Three.js
        </div>

        <div className="flex space-x-6">
          <a
            href={PERSONAL_INFO.contact.github}
            className="text-gray-400 hover:text-white transition-colors"
          >
            Github
          </a>
          <a
            href={PERSONAL_INFO.contact.linkedin}
            className="text-gray-400 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
