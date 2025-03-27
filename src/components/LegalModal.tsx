import React, { useEffect } from "react";
import { X } from "lucide-react";

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  type: "privacy" | "terms";
}

const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  onClose,
  title,
  type,
}) => {
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

  if (!isOpen) return null;

  const content =
    type === "privacy" ? (
      <>
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">
            AATVAAS GRANGER INTERNATIONALS
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            23rd March 24, 2025
          </p>
        </div>

        <p className="mb-6 text-gray-600 dark:text-gray-300">
          At AATVAAS GRANGER INTERNATIONALS we are committed to protecting your
          privacy. By using our web and mobile applications ("Services"), you
          agree to the practices outlined in this Privacy Policy.
        </p>

        <h3 className="text-xl font-semibold mb-4">
          1. Information We Collect
        </h3>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          We collect information that is necessary to provide and improve our
          Services, including:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-600 dark:text-gray-300">
          <li>
            Personal Data: Your name, email, contact details, company
            information, and other information you provide.
          </li>
          <li>
            Usage Data: Data about how you interact with our Services, including
            IP address, device type, and browser information.
          </li>
          <li>
            Transaction Data: Information related to your use of paid features
            within our Services.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">2. Use of Data</h3>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          We use the collected data for the following purposes:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-600 dark:text-gray-300">
          <li>To operate, maintain, and enhance our Services.</li>
          <li>
            To improve user experience through data analysis and feature
            development.
          </li>
          <li>For support, analytics, and reporting.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">
          3. Performance Improvement
        </h3>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          By using our Services, you consent to the use of your data, in an
          anonymized form, to enhance the performance and functionality of the
          platform. This helps us continually improve the service we provide.
        </p>

        <h3 className="text-xl font-semibold mb-4">4. Data Security</h3>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          We implement industry-standard security measures to protect your data,
          but we cannot guarantee absolute security. We are not liable for any
          unauthorized access or loss of data.
        </p>

        <h3 className="text-xl font-semibold mb-4">5. Data Retention</h3>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          Your personal data will be retained as long as necessary for the
          purposes outlined in this policy, after which it will be securely
          deleted or anonymized, unless otherwise required for legal or business
          purposes.
        </p>

        <h3 className="text-xl font-semibold mb-4">6. Third-Party Services</h3>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          Our Services may include links to third-party sites. We are not
          responsible for the privacy practices or content of these external
          sites.
        </p>

        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Effective Date: March 23, 2025
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            © 2025 AATVAAS GRANGER INTERNATIONALS. All Rights Reserved.
          </p>
        </div>
      </>
    ) : (
      <>
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">
            AATVAAS GRANGER INTERNATIONALS
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            22nd March 24, 2025
          </p>
        </div>

        <p className="mb-6 text-gray-600 dark:text-gray-300">
          These Terms and Conditions govern your access to and use of AATVAAS
          GRANGER INTERNATIONALS's Services. By using our Services, you agree to
          comply with these Terms.
        </p>

        <h3 className="text-xl font-semibold mb-4">1. Use of Services</h3>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          You are granted a limited, non-exclusive license to use our Services
          in accordance with these Terms for business-related purposes.
        </p>

        <h3 className="text-xl font-semibold mb-4">2. Account Registration</h3>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          To access the Services, you must provide accurate and complete
          information. You are responsible for maintaining the confidentiality
          of your account credentials.
        </p>

        <h3 className="text-xl font-semibold mb-4">
          3. Subscription and Cancellation
        </h3>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          You may cancel your subscription at any time. We reserve the right to
          suspend or terminate your access to the Services at our discretion.
        </p>

        <h3 className="text-xl font-semibold mb-4">
          4. Limitation of Liability
        </h3>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          To the extent permitted by law, AATVAAS GRANGER INTERNATIONALS is not
          liable for any indirect, incidental, or consequential damages arising
          from your use of the Services, including data loss or business
          disruption.
        </p>

        <h3 className="text-xl font-semibold mb-4">5. Data Usage</h3>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          By using our Services, you consent to the collection and use of your
          data as described in our Privacy Policy. We will not share personal
          information without your consent, except as required by law.
        </p>

        <h3 className="text-xl font-semibold mb-4">6. Indemnification</h3>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          You agree to indemnify and hold AATVAAS GRANGER INTERNATIONALS
          harmless from any claims or damages arising from your use of the
          Services or breach of these Terms.
        </p>

        <h3 className="text-xl font-semibold mb-4">7. Governing Law</h3>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          These Terms will be governed by the laws of the United States and
          Canada, and any disputes will be resolved in the appropriate courts in
          the jurisdiction where AATVAAS GRANGER INTERNATIONALS operates.
        </p>

        <h3 className="text-xl font-semibold mb-4">8. Changes to Terms</h3>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          We may modify these Terms from time to time. Any changes will be
          communicated through the Services, and continued use of the Services
          constitutes your acceptance of the updated Terms.
        </p>

        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Effective Date: March 22, 2025
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            © 2025 AATVAAS GRANGER INTERNATIONALS. All Rights Reserved.
          </p>
        </div>
      </>
    );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="fixed inset-0 flex items-center justify-center p-4 sm:p-6">
        <div className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-dark-200 rounded-2xl shadow-xl flex flex-col">
          {/* Header - Fixed */}
          <div className="flex-none p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="pr-8">
              <h2 className="text-3xl font-bold gradient-text">{title}</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Last updated: {type === "privacy" ? "March 23" : "March 22"},
                2025
              </p>
            </div>
            <button
              onClick={onClose}
              className="absolute right-6 top-6 text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Content - Scrollable */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="prose dark:prose-invert max-w-none">{content}</div>
          </div>

          {/* Footer - Fixed */}
          <div className="flex-none p-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              If you have any questions about these{" "}
              {type === "privacy" ? "Privacy Policy" : "Terms of Service"},
              please contact us at support@aagicorp.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
