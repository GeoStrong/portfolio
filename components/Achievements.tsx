import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ACHIEVEMENTS } from "../types/constants";
import {
  Star,
  Briefcase,
  TrendingDown,
  Users,
  LucideIcon,
  Crown,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  star: Star,
  briefcase: Briefcase,
  "trending-down": TrendingDown,
  crown: Crown,
};

const AnimatedCounter: React.FC<{
  end: number;
  suffix?: string;
  duration?: number;
}> = ({ end, suffix = "", duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-black">
      {count}
      {suffix}
    </div>
  );
};

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 px-6 bg-gray-950/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Impact & Achievements
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Measurable results that demonstrate my commitment to excellence and
            client satisfaction.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ACHIEVEMENTS.map((achievement, idx) => {
            const Icon = iconMap[achievement.icon] || Star;
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-gray-900/40 p-8 rounded-3xl border border-gray-800 hover:border-indigo-500/50 transition-all backdrop-blur-sm text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-500/10 rounded-2xl border border-indigo-500/20 text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={32} />
                </div>
                <AnimatedCounter
                  end={Number(achievement.value)}
                  suffix={achievement.suffix}
                />
                <h3 className="text-xl font-bold text-white mt-4 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {achievement.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
