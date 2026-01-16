import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

const References: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    // Simulate submission
    setIsSubmitted(true);
    setEmail("");
    setError("");
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="references" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 p-12 rounded-3xl border border-indigo-500/20 text-center backdrop-blur-sm"
        >
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Professional References
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Professional references are available upon request. Please provide
            your email to receive detailed references from past clients and
            colleagues.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                placeholder="your.email@example.com"
                className="flex-1 bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors"
              />
              <motion.button
                type="submit"
                disabled={isSubmitted}
                whileHover={!isSubmitted ? { scale: 1.02 } : undefined}
                whileTap={!isSubmitted ? { scale: 0.98 } : undefined}
                className={`${
                  isSubmitted
                    ? "bg-green-600"
                    : "bg-indigo-600 hover:bg-indigo-500"
                } text-white font-bold px-6 py-3 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70`}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle2 size={18} /> Sent!
                  </>
                ) : (
                  <>
                    <Send size={18} /> Request
                  </>
                )}
              </motion.button>
            </div>
            {error && (
              <p className="text-red-400 text-sm flex items-center justify-center gap-1 mt-3">
                <AlertCircle size={14} /> {error}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default References;
