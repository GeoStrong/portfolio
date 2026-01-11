import React from "react";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "../types/constants";

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-gray-950/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Summary
          </h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 shadow-xl"
        >
          <p className="text-lg text-gray-300 leading-relaxed italic">
            "{PERSONAL_INFO.summary}"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
