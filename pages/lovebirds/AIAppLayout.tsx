import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const AIAppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a050f] text-white font-sans overflow-x-hidden selection:bg-pink-500 selection:text-white">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AIAppLayout;
