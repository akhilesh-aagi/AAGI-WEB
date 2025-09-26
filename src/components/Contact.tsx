import React, { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Mail,
  Phone,
  Send,
  MessageSquare,
  Clock,
  ArrowRight,
  MapPin,
} from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

// Initialize EmailJS with your public key
emailjs.init("Wg36xgvNvz0x0UZ_z");

const Contact = () => {
  const sectionRef = useScrollAnimation();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.search.includes("scrollTo=contact")) {
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location, sectionRef]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    try {
      // Send email to admin
      await emailjs.send("service_06l4q5d", "template_5gahxwu", {
        name: (formRef.current.querySelector("#name") as HTMLInputElement)
          .value,
        email: (formRef.current.querySelector("#email") as HTMLInputElement)
          .value,
        subject: (formRef.current.querySelector("#subject") as HTMLInputElement)
          .value,
        description: (
          formRef.current.querySelector("#message") as HTMLTextAreaElement
        ).value,
        source: "Contact Page Form",
      });

      // Send confirmation email to user
      await emailjs.send("service_06l4q5d", "template_0bcwjwx", {
        email: formRef.current.email.value,
        to_name: (formRef.current.querySelector("#name") as HTMLInputElement)
          .value,
        subject: formRef.current.subject.value,
        description: formRef.current.message.value,
      });

      toast.success(
        "Message sent successfully! Please check your email for confirmation.",
        {
          duration: 5000,
          icon: "🎉",
        }
      );

      // Reset form
      formRef.current.reset();
    } catch (error) {
      console.error("Failed to send email:", error);
      toast.error("Failed to send message. Please try again later.", {
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-12 bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 scroll-trigger">
          <div className="inline-flex items-center px-3 py-1.5 bg-blue-900/10 dark:bg-blue-900/20 text-blue-900 dark:text-blue-300 font-semibold mb-6 shadow-lg border border-blue-200 dark:border-blue-800 text-sm">
            <MessageSquare className="w-4 h-4 mr-2" />
            Get in Touch
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-6">
            Let's Connect
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a question or want to learn more? We'd love to hear from you
            and discuss how we can help transform your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Contact Information */}
          <div className="space-y-6 order-1">
            {/* Quick Response Promise */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 border border-blue-200 dark:border-blue-800 hover-lift scroll-trigger shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-blue-600 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Quick Response Time
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    We typically respond within the same day to ensure your
                    inquiries are addressed promptly.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  title: "Email Us",
                  description: "For any inquiries or support",
                  link: "support@aagicorp.com",
                  href: "mailto:support@aagicorp.com",
                  color: "text-blue-600 dark:text-blue-400",
                },
                {
                  icon: Phone,
                  title: "Call Us",
                  description: "Speak directly with our team",
                  link: "+91 98765 43210",
                  href: "tel:+919876543210",
                  color: "text-green-600 dark:text-green-400",
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-white dark:bg-black p-6 border border-gray-200 dark:border-gray-700 hover-lift scroll-trigger shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex-shrink-0 w-10 h-10 flex items-center justify-center border ${item.color} border-current group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <Icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                          {item.description}
                        </p>
                        <a
                          href={item.href}
                          className="group inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm transition-colors"
                        >
                          {item.link}
                          <ArrowRight className="w-3 h-3 ml-2 transform transition-transform group-hover:translate-x-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-black p-5 md:p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover-lift scroll-trigger order-2">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold text-gray-700 dark:text-gray-300"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3 py-2 bg-gray-50 dark:bg-dark-300 border border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all outline-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 shadow-sm text-sm"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold text-gray-700 dark:text-gray-300"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 bg-gray-50 dark:bg-dark-300 border border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all outline-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 shadow-sm text-sm"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="block text-xs font-semibold text-gray-700 dark:text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-3 py-2 bg-gray-50 dark:bg-dark-300 border border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all outline-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 shadow-sm text-sm"
                  placeholder="How can we help you?"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  required
                  className="w-full px-3 py-2 bg-gray-50 dark:bg-dark-300 border border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all outline-none resize-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 shadow-sm text-sm"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="magnetic-button w-full text-white px-6 py-2.5 flex items-center justify-center gap-2 group text-sm font-semibold shadow-lg"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
