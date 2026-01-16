import React from "react";
import { motion } from "framer-motion";
import { TESTIMONIALS } from "../types/constants";
import { Quote } from "lucide-react";

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Client Testimonials
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            What clients and colleagues say about working with me.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-gray-900/40 p-8 rounded-3xl border border-gray-800 hover:border-indigo-500/50 transition-all backdrop-blur-sm relative group"
            >
              <Quote
                className="absolute top-6 right-6 text-indigo-500/20 group-hover:text-indigo-500/40 transition-colors"
                size={48}
              />

              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full border-2 border-indigo-500/30 mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-indigo-400">{testimonial.role}</p>
                  <p className="text-xs text-gray-500">{testimonial.company}</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed italic relative z-10">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
