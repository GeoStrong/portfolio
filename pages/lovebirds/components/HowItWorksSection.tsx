import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  HeartHandshake,
  TrendingUp,
  Compass,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Create Your Profile",
    description:
      "Choose your mode: Single, Couple, or Long-Distance. Set up your profile and invite your partner to join your private couple space.",
    icon: Compass,
    color: "text-pink-400",
    bg: "bg-pink-500/10",
  },
  {
    title: "Get AI-Powered Guidance",
    description:
      "Receive personalized advice from our AI coach based on your relationship dynamics, communication style, and goals.",
    icon: CheckCircle2,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    title: "Complete Daily Quests",
    description:
      "Engage in fun, meaningful daily challenges and quizzes designed to spark conversations and deepen your connection.",
    icon: HeartHandshake,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
  },
  {
    title: "Watch Your Love Grow",
    description:
      "Track your progress, earn hearts and XP, celebrate milestones, and watch your relationship plant evolve over time.",
    icon: TrendingUp,
    color: "text-rose-400",
    bg: "bg-rose-500/10",
  },
];

const HowItWorksSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { height: "0%" },
          {
            height: "100%",
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top center",
              end: "bottom center",
              scrub: true,
            },
          },
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="how-it-works"
      className="py-32 relative bg-[#050208] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            How{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              Lovebirds
            </span>{" "}
            Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-white/60 max-w-2xl mx-auto"
          >
            A simple, fun, gamified journey to a deeper, more meaningful
            connection.
          </motion.p>
        </div>

        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-white/5 -translate-x-1/2 rounded-full hidden md:block" />
          <div
            ref={lineRef}
            className="absolute left-8 md:left-1/2 top-0 w-1 bg-gradient-to-b from-pink-500 via-purple-500 to-indigo-500 -translate-x-1/2 rounded-full hidden md:block"
          />

          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div
                  className={`flex-1 w-full md:w-1/2 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}
                >
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${step.bg} mb-6 shadow-lg shadow-black/50`}
                  >
                    <step.icon className={`w-8 h-8 ${step.color}`} />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-white/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Center Node */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#050208] border-4 border-white/10 items-center justify-center z-10 transition-colors duration-500">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500" />
                </div>

                {/* Image Placeholder */}
                <div className="flex-1 w-full md:w-1/2">
                  <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 overflow-hidden relative group">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050208] to-transparent opacity-50 z-10" />
                    <div className="absolute inset-0 flex items-center justify-center text-white/20 font-medium text-xl group-hover:scale-105 transition-transform duration-700">
                      App Interface Preview
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
