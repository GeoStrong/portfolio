import React, { useState } from "react";
import { motion, easeInOut } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import { PERSONAL_INFO } from "../types/constants";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [sendError, setSendError] = useState<string>("");

  const errorShake = {
    idle: { x: 0 },
    error: {
      x: [0, -6, 6, -6, 4, -4, 0],
      transition: { duration: 0.35, ease: easeInOut },
    },
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSendError("");

    console.log(formData);

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        title: formData.subject,
        message: formData.message,
      };

      const result = await emailjs.send(
        "service_0rotska",
        "template_qwuo5cd",
        templateParams,
        "gEl_Z-yR5vomeBHbg"
      );

      if (result.status === 200) {
        setIsSent(true);
        setFormData({ name: "", email: "", subject: "", message: "" });

        // Reset success message after 5 seconds
        setTimeout(() => setIsSent(false), 5000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSendError(
        "Failed to send message. Please try again or contact me directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    // Clear send error when user starts typing again
    if (sendError) {
      setSendError("");
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-linear-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8">
              Let's talk about everything!
            </h3>
            <p className="text-gray-400 mb-12 max-w-md">
              Feel free to reach out for collaborations or just a friendly
              hello. 👋
            </p>

            <div className="space-y-8">
              <div className="flex items-center group">
                <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center border border-gray-800 mr-4 text-indigo-500 group-hover:border-indigo-500 transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email me at</p>
                  <a
                    href={`mailto:${PERSONAL_INFO.contact.email}`}
                    className="text-lg font-bold hover:text-indigo-400 transition-colors"
                  >
                    {PERSONAL_INFO.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center border border-gray-800 mr-4 text-indigo-500 group-hover:border-indigo-500 transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Call me at</p>
                  <p className="text-lg font-bold">
                    {PERSONAL_INFO.contact.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center border border-gray-800 mr-4 text-indigo-500 group-hover:border-indigo-500 transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Find me at</p>
                  <p className="text-lg font-bold">
                    {PERSONAL_INFO.contact.location}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">
                  Your Name
                </label>
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                  className={`w-full bg-gray-900 border ${
                    errors.name
                      ? "border-red-500 shadow-[0_0_0_3px_rgba(239,68,68,0.25)]"
                      : "border-gray-800"
                  } rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors`}
                  variants={errorShake}
                  animate={errors.name ? "error" : "idle"}
                  initial={false}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs flex items-center mt-1">
                    <AlertCircle size={12} className="mr-1" /> {errors.name}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">
                  Email Address
                </label>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                  className={`w-full bg-gray-900 border ${
                    errors.email
                      ? "border-red-500 shadow-[0_0_0_3px_rgba(239,68,68,0.25)]"
                      : "border-gray-800"
                  } rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors`}
                  variants={errorShake}
                  animate={errors.email ? "error" : "idle"}
                  initial={false}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs flex items-center mt-1">
                    <AlertCircle size={12} className="mr-1" /> {errors.email}
                  </p>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">
                Subject
              </label>
              <motion.input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                aria-invalid={Boolean(errors.subject)}
                className={`w-full bg-gray-900 border ${
                  errors.subject
                    ? "border-red-500 shadow-[0_0_0_3px_rgba(239,68,68,0.25)]"
                    : "border-gray-800"
                } rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors`}
                variants={errorShake}
                animate={errors.subject ? "error" : "idle"}
                initial={false}
                placeholder="Collaboration opportunity"
              />
              {errors.subject && (
                <p className="text-red-500 text-xs flex items-center mt-1">
                  <AlertCircle size={12} className="mr-1" /> {errors.subject}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">
                Message
              </label>
              <motion.textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                aria-invalid={Boolean(errors.message)}
                className={`w-full bg-gray-900 border ${
                  errors.message
                    ? "border-red-500 shadow-[0_0_0_3px_rgba(239,68,68,0.25)]"
                    : "border-gray-800"
                } rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors resize-none`}
                variants={errorShake}
                animate={errors.message ? "error" : "idle"}
                initial={false}
                placeholder="Hi, I'd like to talk about..."
              />
              {errors.message && (
                <p className="text-red-500 text-xs flex items-center mt-1">
                  <AlertCircle size={12} className="mr-1" /> {errors.message}
                </p>
              )}
            </div>

            {sendError && (
              <div className="bg-red-900/20 border border-red-500/50 rounded-xl p-4">
                <p className="text-red-400 text-sm flex items-center">
                  <AlertCircle size={16} className="mr-2" /> {sendError}
                </p>
              </div>
            )}

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={!isSubmitting ? { y: -2, scale: 1.01 } : undefined}
              whileTap={!isSubmitting ? { scale: 0.98 } : undefined}
              className={`w-full ${
                isSent ? "bg-green-600" : "bg-indigo-600 hover:bg-indigo-500"
              } text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </span>
              ) : isSent ? (
                <span className="flex items-center">
                  <CheckCircle2 size={20} className="mr-2" /> Message Sent
                  Successfully!
                </span>
              ) : (
                <span className="flex items-center">
                  Send Message <Send size={18} className="ml-2" />
                </span>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
