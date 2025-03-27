import React, { useState, useEffect, useRef } from "react";
import { X, ChevronDown, Check, Send, Loader } from "lucide-react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  source: string;
}

const ContactFormModal: React.FC<ContactFormModalProps> = ({
  isOpen,
  onClose,
  source,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    product: "",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const products = [
    "AAGI-CoachCommand",
    // "Digital Bill Conversion Tool",
    // "Credit Check Portal",
  ];

  // Handle click outside dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize EmailJS with your public key
      emailjs.init("Wg36xgvNvz0x0UZ_z");

      // Send the email using EmailJS
      await emailjs.send("service_06l4q5d", "template_5gahxwu", {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
        subject: formData.product,
        description: formData.description,
        source: source,
      });

      // Send confirmation email to user
      await emailjs.send("service_06l4q5d", "template_0bcwjwx", {
        email: formData.email,
        to_name: formData.name,
        subject: formData.product,
        description: formData.description,
      });

      toast.success(
        "Thank you for your interest! Please check your email for confirmation.",
        {
          duration: 5000,
          icon: "🎉",
        }
      );

      onClose();
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        product: "",
        description: "",
      });
    } catch (error) {
      console.error("Email sending failed:", error);
      toast.error("Something went wrong. Please try again later.", {
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 text-center">
        {/* Background overlay */}
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />

        {/* This element is to trick the browser into centering the modal contents. */}
        <span className="inline-block h-screen align-middle" aria-hidden="true">
          &#8203;
        </span>

        <div className="relative inline-block w-full max-w-2xl p-6 my-8 text-left align-middle transition-all transform bg-white dark:bg-dark-200 shadow-xl rounded-2xl">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-6 top-6 text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold gradient-text">Get in Touch</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Fill out the form below and we'll get back to you shortly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6" ref={formRef}>
            {/* Name and Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-dark-300/50 border border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 transition-all outline-none"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="email@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-dark-300/50 border border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 transition-all outline-none"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Company and Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  required
                  placeholder="Company Ltd."
                  className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-dark-300/50 border border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 transition-all outline-none"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  placeholder="+1 1234567890"
                  className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-dark-300/50 border border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 transition-all outline-none"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Custom Product Interest Dropdown */}
            <div className="space-y-2" ref={dropdownRef}>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Product Interest <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <button
                  type="button"
                  className={`w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-dark-300/50 border ${
                    isDropdownOpen
                      ? "border-blue-500 dark:border-blue-400 ring-2 ring-blue-200 dark:ring-blue-900"
                      : "border-gray-200 dark:border-gray-700"
                  } text-left flex items-center justify-between transition-all`}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <span
                    className={
                      formData.product
                        ? "text-gray-900 dark:text-white"
                        : "text-gray-400 dark:text-gray-500"
                    }
                  >
                    {formData.product || "Select a product"}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform ${
                      isDropdownOpen ? "transform rotate-180" : ""
                    }`}
                  />
                </button>

                {isDropdownOpen && (
                  <div className="absolute z-10 w-full mt-2 bg-white dark:bg-dark-300 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 py-2 max-h-60 overflow-auto">
                    {products.map((product) => (
                      <button
                        key={product}
                        type="button"
                        className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-dark-200 transition-colors"
                        onClick={() => {
                          setFormData({ ...formData, product });
                          setIsDropdownOpen(false);
                        }}
                      >
                        <span className="text-gray-900 dark:text-white">
                          {product}
                        </span>
                        {formData.product === product && (
                          <Check className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                How can we help?
              </label>
              <textarea
                id="description"
                rows={4}
                placeholder="Tell us about your requirements..."
                className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-dark-300/50 border border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 transition-all outline-none resize-none"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`magnetic-button w-full text-white px-6 py-4 rounded-xl text-lg font-semibold group relative overflow-hidden transform hover:scale-105 transition-all duration-300 ${
                isSubmitting
                  ? "opacity-90 cursor-not-allowed"
                  : "hover:shadow-lg"
              }`}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-transform duration-300 group-hover:scale-105"></span>
              <span className="relative flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Request
                    <Send className="w-5 h-5 transform transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactFormModal;
