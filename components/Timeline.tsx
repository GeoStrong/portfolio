import React from "react";
import { motion } from "framer-motion";
import { TIMELINE } from "../types/constants";
import {
  GraduationCap,
  Briefcase,
  Rocket,
  Award,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  education: GraduationCap,
  work: Briefcase,
  project: Rocket,
  achievement: Award,
};

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Career Journey
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            My professional and educational milestones over the years.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500" />

          <div className="space-y-12">
            {TIMELINE.map((event, idx) => {
              const Icon = iconMap[event.type] || Briefcase;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={`${event.date}-${idx}`}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`relative flex items-center ${
                    isEven
                      ? "md:flex-row flex-row"
                      : "md:flex-row-reverse flex-row"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 -ml-3 md:-ml-4 w-6 h-6 md:w-8 md:h-8 bg-gray-950 rounded-full border-2 border-indigo-500 flex items-center justify-center z-10">
                    <Icon size={12} className="text-indigo-400" />
                  </div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    className={`ml-20 md:ml-0 md:w-5/12 ${
                      isEven ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                    }`}
                  >
                    <div className="bg-gray-900/40 p-6 rounded-2xl border border-gray-800 hover:border-indigo-500/50 transition-all backdrop-blur-sm">
                      <span className="inline-block px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full text-xs font-bold mb-3">
                        {event.date}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {event.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {event.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
