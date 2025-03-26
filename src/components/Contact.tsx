import React, { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Mail,
  Phone,
  Send,
  MessageSquare,
  Clock,
  ArrowRight,
} from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

// Initialize EmailJS with your public key
emailjs.init("S-LYUzK_M_rciCRju");

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
      await emailjs.send("service_nfpchzn", "template_kpmjnfv", {
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
      await emailjs.send("service_nfpchzn", "template_0utuobw", {
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
      className="section-padding relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-200 rounded-full mix-blend-multiply filter blur-[96px] opacity-20 animate-float"></div>
          <div
            className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-purple-200 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-20 scroll-trigger">
          <div className="inline-flex items-center px-4 sm:px-6 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 font-semibold mb-6 sm:mb-8">
            <MessageSquare className="w-5 h-5 mr-2" />
            Get in Touch
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold gradient-text mb-6 sm:mb-8">
            Let's Connect
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Have a question or want to learn more? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Contact Information - Moved to top on mobile */}
          <div className="space-y-6 order-1">
            {/* Quick Response Promise */}
            <div className="glass-card rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 hover-lift scroll-trigger">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-white flex-shrink-0">
                  <Clock className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold gradient-text mb-2">
                    Quick Response Time
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    We typically respond within 2-4 business hours
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  icon: <Mail className="w-6 h-6 sm:w-8 sm:h-8" />,
                  title: "Email Us",
                  description: "For any inquiries or support",
                  link: "sAswin_Sathya@aagicorp.com",
                  href: "mailto:Aswin_Sathya@aagicorp.com",
                  gradient: "from-purple-500 to-pink-500",
                  delay: "100ms",
                },
                {
                  icon: <Phone className="w-6 h-6 sm:w-8 sm:h-8" />,
                  title: "Call Us",
                  description: "Mon-Fri from 9am to 6pm",
                  link: "+1 437-998-4357",
                  href: "+1 437-998-4357",
                  gradient: "from-green-500 to-teal-500",
                  delay: "200ms",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="glass-card rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 hover-lift scroll-trigger"
                  style={{ transitionDelay: item.delay }}
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div
                      className={`bg-gradient-to-br ${item.gradient} rounded-xl sm:rounded-2xl p-3 sm:p-4 text-white flex-shrink-0`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base mb-2 sm:mb-4">
                        {item.description}
                      </p>
                      <a
                        href={item.href}
                        className="group inline-flex items-center text-blue-600 hover:text-blue-700 text-sm sm:text-base"
                      >
                        {item.link}
                        <ArrowRight className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 md:p-12 hover-lift scroll-trigger order-2">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6 sm:space-y-8"
            >
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-base"
                    placeholder="Full Name"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-base"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-base"
                  placeholder="How can we help?"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none resize-none text-base"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="magnetic-button w-full text-white px-6 sm:px-8 py-4 rounded-xl flex items-center justify-center gap-2 group"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 transform transition-transform group-hover:translate-x-1" />
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
