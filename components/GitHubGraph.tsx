import React from "react";
import { motion } from "framer-motion";

interface GitHubGraphProps {
  username?: string;
}

const GitHubGraph: React.FC<GitHubGraphProps> = ({
  username = "GeoStrong",
}) => {
  return (
    <section id="github" className="py-24 px-6 bg-gray-950/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            GitHub Activity
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Consistent contributions and open-source involvement.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-gray-900/40 p-8 rounded-3xl border border-gray-800 backdrop-blur-sm overflow-x-auto"
        >
          <img
            src={`https://ghchart.rshah.org/6366f1/${username}`}
            alt="GitHub Contribution Graph"
            className="w-full rounded-xl"
            loading="lazy"
          />
          <div className="mt-6 w-full flex items-center justify-center md:justify-between flex-wrap gap-4">
            <motion.a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all"
            >
              View Full Profile
            </motion.a>
            <div className="flex items-center gap-6 text-sm">
              <div>
                <p className="text-gray-500">Public Repos</p>
                <p className="text-2xl font-bold text-white">12+</p>
              </div>
              <div>
                <p className="text-gray-500">Contributions</p>
                <p className="text-2xl font-bold text-white">500+</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubGraph;
