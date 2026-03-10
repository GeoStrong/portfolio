import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Smartphone,
  MessageSquareHeart,
  CalendarHeart,
  Sparkles,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ScreenPreviewSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const phonesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      phonesRef.current.forEach((phone, index) => {
        if (!phone) return;

        const yOffset = index === 1 ? -60 : 60;

        gsap.fromTo(
          phone,
          { y: yOffset, opacity: 0.5, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 70%",
              end: "bottom 30%",
              scrub: 1,
            },
          },
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-32 relative bg-[#0a050f] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-pink-600/20 to-purple-600/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            A beautiful experience, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              designed for love.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-white/60 max-w-2xl mx-auto"
          >
            Intuitive, calming, and deeply personal. Lovebirds feels like a warm
            hug for your relationship journey.
          </motion.p>
        </div>

        <div
          ref={containerRef}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 perspective-1000"
        >
          {/* Phone 1: Insights */}
          <div
            ref={(el) => (phonesRef.current[0] = el)}
            className="relative w-[280px] h-[580px] rounded-[40px] border-[8px] border-white/10 bg-[#120a1a] shadow-2xl shadow-pink-500/20 overflow-hidden transform rotate-y-12"
          >
            {/* Screen Content Mockup */}
            <div className="absolute inset-0 p-6 flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <div className="w-8 h-8 rounded-full bg-white/10" />
                <div className="w-16 h-3 rounded-full bg-white/10" />
              </div>
              <div className="flex-1 space-y-4">
                <div className="w-full h-32 rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-white/5 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-pink-400" />
                </div>
                <div className="w-3/4 h-4 rounded-full bg-white/20" />
                <div className="w-full h-3 rounded-full bg-white/10" />
                <div className="w-5/6 h-3 rounded-full bg-white/10" />
              </div>
            </div>
          </div>

          {/* Phone 2: Chat/Quizzes (Center) */}
          <div
            ref={(el) => (phonesRef.current[1] = el)}
            className="relative w-[300px] h-[620px] rounded-[44px] border-[10px] border-white/20 bg-[#1a0f24] shadow-2xl shadow-purple-500/30 overflow-hidden z-10"
          >
            {/* Screen Content Mockup */}
            <div className="absolute inset-0 p-6 flex flex-col">
              <div className="flex items-center justify-center mb-8">
                <div className="w-20 h-4 rounded-full bg-white/20" />
              </div>
              <div className="flex-1 flex flex-col gap-4 justify-end pb-8">
                <div className="self-start w-3/4 p-4 rounded-2xl rounded-tl-sm bg-white/10 border border-white/5">
                  <div className="w-full h-3 rounded-full bg-white/20 mb-2" />
                  <div className="w-2/3 h-3 rounded-full bg-white/20" />
                </div>
                <div className="self-end w-3/4 p-4 rounded-2xl rounded-tr-sm bg-gradient-to-r from-pink-500 to-purple-500">
                  <div className="w-full h-3 rounded-full bg-white/90 mb-2" />
                  <div className="w-1/2 h-3 rounded-full bg-white/90" />
                </div>
                <div className="w-full h-12 rounded-full bg-white/5 border border-white/10 mt-4 flex items-center px-4">
                  <MessageSquareHeart className="w-5 h-5 text-white/40" />
                </div>
              </div>
            </div>
          </div>

          {/* Phone 3: Calendar/Quests */}
          <div
            ref={(el) => (phonesRef.current[2] = el)}
            className="relative w-[280px] h-[580px] rounded-[40px] border-[8px] border-white/10 bg-[#120a1a] shadow-2xl shadow-indigo-500/20 overflow-hidden transform -rotate-y-12"
          >
            {/* Screen Content Mockup */}
            <div className="absolute inset-0 p-6 flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <div className="w-16 h-4 rounded-full bg-white/20" />
                <CalendarHeart className="w-6 h-6 text-indigo-400" />
              </div>
              <div className="flex-1 space-y-4">
                <div className="w-full h-20 rounded-2xl bg-white/5 border border-white/5 flex items-center px-4 gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/20" />
                  <div className="flex-1 space-y-2">
                    <div className="w-2/3 h-3 rounded-full bg-white/20" />
                    <div className="w-1/3 h-2 rounded-full bg-white/10" />
                  </div>
                </div>
                <div className="w-full h-20 rounded-2xl bg-white/5 border border-white/5 flex items-center px-4 gap-4">
                  <div className="w-10 h-10 rounded-full bg-pink-500/20" />
                  <div className="flex-1 space-y-2">
                    <div className="w-3/4 h-3 rounded-full bg-white/20" />
                    <div className="w-1/2 h-2 rounded-full bg-white/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScreenPreviewSection;
