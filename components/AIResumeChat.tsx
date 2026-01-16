import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  X,
  Send,
  Bot,
  User,
  Sparkles,
  Trash2,
  ArrowRight,
} from "lucide-react";
import { GoogleGenAI } from "@google/genai";
import {
  PERSONAL_INFO,
  EXPERIENCES,
  PROJECTS,
  SKILL_CATEGORIES,
} from "../types/constants";

const SUGGESTIONS = [
  "What are your top 3 skills?",
  "Tell me about your last role.",
];

const AIResumeChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<
    { role: "user" | "ai"; text: string }[]
  >([
    {
      role: "ai",
      text: `Hi! I'm Giorgi's AI Assistant. Ask me anything about his experience, skills, or projects!`,
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (customMsg?: string) => {
    const textToSend = customMsg || input.trim();
    if (!textToSend || isTyping) return;

    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: textToSend }]);
    setIsTyping(true);

    try {
      // Rule: Create a new GoogleGenAI instance right before making an API call
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

      console.log(process.env.API_KEY);
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: textToSend,
        config: {
          systemInstruction: `
            You are the personal AI recruiter assistant for Giorgi Jobava. 
            Your goal is to answer questions about Giorgi's professional background based on this strictly provided data:
            
            PROFILE: ${PERSONAL_INFO.name}, ${PERSONAL_INFO.role} based in ${PERSONAL_INFO.contact.location}.
            SUMMARY: ${PERSONAL_INFO.summary}
            EXPERIENCES: ${JSON.stringify(EXPERIENCES)}
            PROJECTS: ${JSON.stringify(PROJECTS)}
            SKILLS: ${JSON.stringify(SKILL_CATEGORIES)}
            
            RULES:
            1. BE CONCISE. Recruiters are busy. Use bullet points for lists.
            2. STAY IN CHARACTER. You represent Giorgi. Be professional and confident.
            3. TRUTH ONLY. Only answer based on the data provided. If info is missing, say: "I don't have that specific detail, but you can ask Giorgi at ${PERSONAL_INFO.contact.email}."
            4. FORMATTING: Use clear spacing.
          `,
          temperature: 0.7,
        },
      });

      // Rule: Access .text property directly, do not call as method.
      const aiResponse =
        response.text ||
        "I'm sorry, I couldn't find that in my records. Please try another question.";
      setMessages((prev) => [...prev, { role: "ai", text: aiResponse }]);
    } catch (error) {
      console.error("Gemini API Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "I encountered an error connecting to my brain. Please try again in a moment.",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const clearChat = () => {
    setMessages([
      {
        role: "ai",
        text: `Chat cleared. How can I help you learn more about Giorgi?`,
      },
    ]);
  };

  return (
    <div className="fixed bottom-14 right-2 z-100">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-screen sm:w-96 h-100 bg-gray-900 border border-gray-800 rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden backdrop-blur-2xl ring-1 ring-white/10"
          >
            {/* Header */}
            <div className="p-6 bg-linear-to-r from-indigo-600 to-purple-600 flex justify-between items-center shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
                  <Bot className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold leading-none mb-1">
                    Giorgi's Assistant
                  </h4>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-indigo-100 text-[10px] uppercase tracking-widest font-bold">
                      Online & Ready
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={clearChat}
                  className="p-2 text-white/50 hover:text-white transition-colors"
                  title="Clear Chat"
                >
                  <Trash2 size={18} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Chat Area */}
            <div
              ref={scrollRef}
              className="grow p-6 overflow-y-auto space-y-6 custom-scrollbar scroll-smooth"
            >
              {messages.map((m, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={i}
                  className={`flex items-start gap-3 ${m.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                >
                  <div
                    className={`shrink-0 w-8 h-8 rounded-xl flex items-center justify-center ${m.role === "user" ? "bg-indigo-500" : "bg-gray-800 border border-gray-700"}`}
                  >
                    {m.role === "user" ? (
                      <User size={14} className="text-white" />
                    ) : (
                      <Bot size={14} className="text-indigo-400" />
                    )}
                  </div>
                  <div
                    className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-indigo-600 text-white rounded-tr-none"
                        : "bg-gray-800/50 text-gray-300 rounded-tl-none border border-gray-800"
                    }`}
                  >
                    {m.text.split("\n").map((line, idx) => (
                      <p key={idx} className={idx > 0 ? "mt-2" : ""}>
                        {line}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <div className="flex justify-start gap-3">
                  <div className="shrink-0 w-8 h-8 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center">
                    <Bot size={14} className="text-indigo-400" />
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-2xl rounded-tl-none border border-gray-800">
                    <div className="flex gap-1.5">
                      <motion.div
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ repeat: Infinity, duration: 0.6 }}
                        className="w-1.5 h-1.5 bg-indigo-500 rounded-full"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{
                          repeat: Infinity,
                          duration: 0.6,
                          delay: 0.2,
                        }}
                        className="w-1.5 h-1.5 bg-indigo-500 rounded-full"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{
                          repeat: Infinity,
                          duration: 0.6,
                          delay: 0.4,
                        }}
                        className="w-1.5 h-1.5 bg-indigo-500 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Recruiter Suggestions */}
            {messages.length < 4 && !isTyping && (
              <div className="px-6 py-2 flex flex-wrap gap-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => handleSend(s)}
                    className="text-[11px] font-bold px-3 py-1.5 bg-gray-800 border border-gray-700 rounded-full text-gray-400 hover:text-indigo-400 hover:border-indigo-500/50 transition-all"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-6 bg-gray-950/50 border-t border-gray-800 flex gap-3 shrink-0">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type a question..."
                className="grow bg-gray-900 border border-gray-800 rounded-2xl px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
              />
              <button
                onClick={() => handleSend()}
                disabled={isTyping || !input.trim()}
                className="w-12 h-12 bg-indigo-600 text-white rounded-2xl hover:bg-indigo-500 disabled:opacity-50 disabled:grayscale transition-all flex items-center justify-center shadow-lg shadow-indigo-500/20"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-indigo-600 text-white rounded-3xl shadow-2xl shadow-indigo-500/40 flex items-center justify-center relative group overflow-hidden"
      >
        <motion.div
          animate={
            isOpen ? { rotate: 90, opacity: 0 } : { rotate: 0, opacity: 1 }
          }
          className="absolute"
        >
          <MessageSquare size={28} />
        </motion.div>
        <motion.div
          animate={
            isOpen ? { rotate: 0, opacity: 1 } : { rotate: -90, opacity: 0 }
          }
          className="absolute"
        >
          <X size={28} />
        </motion.div>

        {/* Glow effect */}
        <div className="absolute inset-0 bg-linear-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="absolute right-full mr-4 px-4 py-2 bg-gray-900 border border-gray-800 text-white text-xs font-bold rounded-2xl shadow-xl pointer-events-none whitespace-nowrap flex items-center gap-2"
            >
              <Sparkles size={14} className="text-yellow-400" />
              Ask Giorgi's AI
              <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-gray-900 border-r border-b border-gray-800 -rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default AIResumeChat;
