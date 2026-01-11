import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { PERSONAL_INFO } from "../types/constants";
import HeroScene from "./HeroScene";
import { AiOutlineArrowDown } from "react-icons/ai";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center pt-32 px-6 relative overflow-hidden"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-bold mb-6"
          >
            Available for New Opportunities
          </motion.div>

          <motion.h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-none">
            I'm{" "}
            <span className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {PERSONAL_INFO.name.split(" ")[0]}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 font-medium mb-8 max-w-lg"
          >
            {PERSONAL_INFO.role} building{" "}
            <span className="text-white">exceptional</span> digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex space-x-6"
          >
            <a
              href={PERSONAL_INFO.contact.github}
              target="_blank"
              className="p-4 bg-gray-900 rounded-2xl border border-gray-800 text-gray-400 hover:text-white hover:border-indigo-500 transition-all hover:-translate-y-1"
            >
              <Github size={24} />
            </a>
            <a
              href={PERSONAL_INFO.contact.linkedin}
              target="_blank"
              className="p-4 bg-gray-900 rounded-2xl border border-gray-800 text-gray-400 hover:text-white hover:border-indigo-500 transition-all hover:-translate-y-1"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.contact.email}`}
              className="p-4 bg-gray-900 rounded-2xl border border-gray-800 text-gray-400 hover:text-white hover:border-indigo-500 transition-all hover:-translate-y-1"
            >
              <Mail size={24} />
            </a>
            <a
              href="#projects"
              className="px-8 text-center py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl transition-all hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] flex items-center"
            >
              <span className="md:hidden text-xs flex justify-center gap-1 items-center">
                Work
                <AiOutlineArrowDown className="text-base" />
              </span>
              <span className="hidden md:inline-block">View My Work</span>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          {/* <HeroScene /> */}
          {/* Decorative gradients */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-75 h-75 bg-indigo-500/20 blur-[100px] rounded-full" />
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mt-12 text-gray-500"
      >
        <ArrowDown size={28} />
      </motion.div>
    </section>
  );
};

export default Hero;
