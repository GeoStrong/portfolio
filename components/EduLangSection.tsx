import React from "react";
import { motion } from "framer-motion";
import { EDUCATION, LANGUAGES } from "../types/constants";
import { GraduationCap, Languages } from "lucide-react";

const EduLangSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-gray-950/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Education */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center mb-10"
          >
            <div className="p-3 bg-indigo-500/10 rounded-xl mr-4 border border-indigo-500/20">
              <GraduationCap className="text-indigo-500" />
            </div>
            <h2 className="text-3xl font-bold">Education</h2>
          </motion.div>

          <div className="space-y-8">
            {EDUCATION.map((edu, idx) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800"
              >
                <h3 className="text-xl font-bold mb-1">{edu.school}</h3>
                <p className="text-indigo-400 mb-4 font-medium">{edu.degree}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{edu.location}</span>
                  <span>{edu.period}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center mb-10"
          >
            <div className="p-3 bg-indigo-500/10 rounded-xl mr-4 border border-indigo-500/20">
              <Languages className="text-indigo-500" />
            </div>
            <h2 className="text-3xl font-bold">Languages</h2>
          </motion.div>

          <div className="space-y-6">
            {LANGUAGES.map((lang, idx) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-bold">{lang.name}</span>
                  <span className="text-indigo-400 text-sm font-medium">
                    {lang.level}
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{
                      width: lang.level.includes("Native")
                        ? "100%"
                        : lang.level.includes("C2")
                        ? "95%"
                        : lang.level.includes("C1")
                        ? "85%"
                        : "25%",
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-indigo-500 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EduLangSection;
