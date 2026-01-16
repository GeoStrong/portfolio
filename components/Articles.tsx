import React from "react";
import { motion } from "framer-motion";
import { ARTICLES } from "../types/constants";
import { ExternalLink, BookOpen, Clock } from "lucide-react";

const Articles: React.FC = () => {
  return (
    <section id="articles" className="py-24 px-6 bg-gray-950/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Blog & Articles
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Sharing knowledge and insights about web development and technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES.map((article, idx) => (
            <motion.a
              key={article.title}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-gray-900/40 p-8 rounded-3xl border border-gray-800 hover:border-indigo-500/50 transition-all backdrop-blur-sm group block"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-500/10 rounded-xl border border-indigo-500/20 text-indigo-400 group-hover:scale-110 transition-transform">
                  <BookOpen size={24} />
                </div>
                <ExternalLink
                  size={20}
                  className="text-gray-600 group-hover:text-indigo-400 transition-colors"
                />
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors line-clamp-2">
                {article.title}
              </h3>

              <div className="flex items-center justify-between text-sm">
                <span className="text-indigo-400 font-medium">
                  {article.platform}
                </span>
                <div className="flex items-center gap-4 text-gray-500">
                  {article.readTime && (
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {article.readTime}
                    </span>
                  )}
                  <span>{article.date}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
