import React from "react";
import { motion } from "framer-motion";
import { SKILL_CATEGORIES } from "../types/constants";
import SkillsScene from "./SkillsScene";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-4">Tech Stack</h2>
          <div className="w-20 h-1 bg-linear-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A comprehensive overview of the tools and technologies I use to
            build robust and scalable web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gray-900/40 p-8 rounded-3xl border border-gray-800 hover:border-indigo-500/50 transition-all group backdrop-blur-sm h-full"
            >
              <h3 className="text-xl font-bold mb-6 text-indigo-400 group-hover:text-white transition-colors">
                {category.name}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="group/skill">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-300 group-hover/skill:text-white transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-xs font-bold text-indigo-400">
                        {skill.proficiency}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: idx * 0.1 }}
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full group-hover/skill:shadow-[0_0_10px_rgba(99,102,241,0.5)] transition-shadow"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <SkillsScene />
    </section>
  );
};

export default Skills;
