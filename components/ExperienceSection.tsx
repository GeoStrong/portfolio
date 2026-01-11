import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCES } from "../types/constants";
import { Briefcase } from "lucide-react";

const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-24 px-6 bg-gray-950/50 backdrop-blur-sm"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={`${exp.company}-${idx}`}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-8 border-l-2 border-indigo-500/30 ml-4"
            >
              <div className="absolute -left-[11px] top-0 w-5 h-5 bg-gray-950 rounded-full border-2 border-indigo-500 flex items-center justify-center">
                <Briefcase size={10} className="text-indigo-500" />
              </div>

              <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-indigo-500/30 transition-all group">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-indigo-500 font-medium">{exp.company}</p>
                  </div>
                  <span className="mt-2 md:mt-0 px-4 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full text-sm font-semibold whitespace-nowrap self-start">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-3">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start text-gray-400">
                      <span className="mr-3 text-indigo-500 font-bold">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
