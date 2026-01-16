import React from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeContext";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 p-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full shadow-lg transition-all hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
    </motion.button>
  );
};

export default ThemeToggle;
