import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "achievements", label: "Impact" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "timeline", label: "Journey" },
  { id: "projects", label: "Projects" },
  // { id: "testimonials", label: "Testimonials" },
  { id: "certifications", label: "Certifications" },
  { id: "github", label: "Github" },
  { id: "contact", label: "Contact" },
];

const QuickNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show quick nav after scrolling past hero
      setIsVisible(window.scrollY > 400);

      // Detect active section
      const sectionElements = sections.map((section) =>
        document.getElementById(section.id),
      );

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:block"
        >
          <div className="bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-2xl p-2 shadow-xl">
            {sections.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                whileHover={{ x: -4 }}
                className={`group relative flex items-center justify-end w-full px-3 py-2 rounded-xl transition-all ${
                  activeSection === section.id
                    ? "bg-indigo-600 text-white"
                    : "text-gray-400 hover:text-white hover:bg-gray-800"
                }`}
              >
                <span
                  className={`absolute right-full mr-3 px-3 py-1 bg-gray-900 border border-gray-800 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none ${
                    activeSection === section.id ? "text-indigo-400" : ""
                  }`}
                >
                  {section.label}
                </span>
                <div
                  className={`w-2 h-2 rounded-full transition-all ${
                    activeSection === section.id
                      ? "bg-white scale-150"
                      : "bg-gray-600 group-hover:bg-indigo-400"
                  }`}
                />
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuickNav;
