import React from "react";
import { motion } from "framer-motion";
import { Star, Users, TrendingUp } from "lucide-react";
import { PERSONAL_INFO } from "../types/constants";

const SocialProof: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="flex flex-wrap gap-4 mt-8"
    >
      <div className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-xl backdrop-blur-sm">
        <Star size={18} className="text-yellow-500" />
        <span className="text-sm font-bold text-white">100% Upwork Rating</span>
      </div>
      <div className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-xl backdrop-blur-sm">
        <Users size={18} className="text-indigo-400" />
        <span className="text-sm font-bold text-white">15+ Projects</span>
      </div>
      <div className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-xl backdrop-blur-sm">
        <TrendingUp size={18} className="text-green-400" />
        <span className="text-sm font-bold text-white">
          3+ Years Experience
        </span>
      </div>
    </motion.div>
  );
};

export default SocialProof;
