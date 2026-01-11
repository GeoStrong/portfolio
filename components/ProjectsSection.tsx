import React from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "../types/constants";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 hover:border-indigo-500/30 transition-all flex flex-col group"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <span className="text-sm text-gray-500 font-medium">
                    {project.date}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-800 text-indigo-400 text-xs font-semibold rounded-full border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2 mb-8 flex-grow">
                  {project.description.map((item, i) => (
                    <li
                      key={i}
                      className="text-gray-400 text-sm flex items-start"
                    >
                      <span className="mr-2 text-indigo-500">•</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex space-x-4 pt-4 border-t border-gray-800">
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center text-sm font-medium text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={18} className="mr-2" /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    className="flex items-center text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    <ExternalLink size={18} className="mr-2" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
