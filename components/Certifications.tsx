import React from "react";
import { motion } from "framer-motion";
import { CERTIFICATIONS } from "../types/constants";
import { Award, ExternalLink } from "lucide-react";

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 px-6 bg-gray-950/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Certifications & Training
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Professional certifications and continuous learning achievements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-gray-900/40 p-8 rounded-3xl border border-gray-800 hover:border-indigo-500/50 transition-all backdrop-blur-sm group"
            >
              <div className="flex w-full justify-center md:justify-start">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-500/10 rounded-2xl border border-indigo-500/20 text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                  <Award size={32} />
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
              <p className="text-indigo-400 font-medium mb-1">{cert.issuer}</p>
              <p className="text-gray-500 text-sm mb-4">{cert.date}</p>

              {cert.credentialId && (
                <p className="text-xs text-gray-600 font-mono mb-4">
                  ID: {cert.credentialId}
                </p>
              )}

              {cert.credentialUrl && (
                <motion.a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 2 }}
                  className="inline-flex items-center text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  View Credential <ExternalLink size={14} className="ml-1" />
                </motion.a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
