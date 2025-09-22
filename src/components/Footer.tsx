import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import LegalModal from "./LegalModal";

const Footer = () => {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  return (
    <footer className="bg-blue-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Information */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              AATVAAS GRANGER INTERNATIONALS
            </h3>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {["Home", "About", "Products", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Products</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#products"
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  CoachCommand
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  OhrTrueTrack
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-blue-100">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+1 98765 43210</span>
              </li>
              <li className="text-blue-100">
                <a
                  href="mailto:support@aagicorp.com"
                  className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span>support@aagicorp.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-700 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-blue-100 text-sm text-center sm:text-left">
              © 2025 AATVAAS GRANGER INTERNATIONALS. All Rights Reserved.
            </p>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowPrivacyPolicy(true)}
                className="text-sm text-blue-100 hover:text-white transition-colors"
              >
                Privacy Policy
              </button>
              <span className="text-blue-300">|</span>
              <button
                onClick={() => setShowTerms(true)}
                className="text-sm text-blue-100 hover:text-white transition-colors"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Modals */}
      <LegalModal
        isOpen={showPrivacyPolicy}
        onClose={() => setShowPrivacyPolicy(false)}
        title="Privacy Policy"
        type="privacy"
      />
      <LegalModal
        isOpen={showTerms}
        onClose={() => setShowTerms(false)}
        title="Terms of Service"
        type="terms"
      />
    </footer>
  );
};

export default Footer;
