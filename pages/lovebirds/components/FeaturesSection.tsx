import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  Sparkles,
  Target,
  MessageCircleHeart,
  ShieldCheck,
  UserPlus,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "AI Message Translator",
    description:
      "De-escalate conflicts with AI that rewrites messages calmly and clearly to improve communication.",
    icon: Sparkles,
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Daily Quests",
    description:
      "Complete fun, meaningful daily challenges designed to bring you and your partner closer together.",
    icon: Target,
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "Couple Space",
    description:
      "Build a private shared world with custom avatars, memory walls, and a relationship plant that evolves with your connection.",
    icon: MessageCircleHeart,
    color: "from-fuchsia-500 to-pink-500",
  },
  {
    title: "Conflict Helper",
    description:
      "Get clear explanations of relationship dynamics and actionable next steps to navigate disagreements.",
    icon: ShieldCheck,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Gamified Growth",
    description:
      "Earn hearts and XP, track streaks, and unlock achievements—making relationship growth feel rewarding and fun.",
    icon: UserPlus,
    color: "from-emerald-500 to-teal-500",
  },
];

const FeaturesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-32 relative bg-[#0a050f] overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-pink-900/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Everything you need for a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              stronger connection
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-white/60 max-w-2xl mx-auto"
          >
            Lovebirds combines emotional intelligence and AI to provide
            personalized coaching, gamified growth, and a fun, safe space for
            relationship development.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:bg-white/[0.04] transition-colors group ${
                index === 3 ? "md:col-span-2 lg:col-span-1" : ""
              } ${index === 4 ? "md:col-span-2 lg:col-span-2" : ""}`}
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg opacity-80 group-hover:opacity-100 transition-opacity`}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
