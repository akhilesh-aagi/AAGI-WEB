import React, { useState } from "react";
import { ClipboardList, ShieldCheck } from "lucide-react";

const LegalPage = () => {
  const [activeTab, setActiveTab] = useState<"privacy" | "terms">("privacy");

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold gradient-text mb-4">
            Legal Documents
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Last updated: March 2025
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white dark:bg-dark-200 rounded-lg shadow p-1">
            <button
              onClick={() => setActiveTab("privacy")}
              className={`flex items-center px-6 py-3 rounded-md transition-all ${
                activeTab === "privacy"
                  ? "bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-300"
              }`}
            >
              <ShieldCheck className="w-5 h-5 mr-2" />
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveTab("terms")}
              className={`flex items-center px-6 py-3 rounded-md transition-all ${
                activeTab === "terms"
                  ? "bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-300"
              }`}
            >
              <ClipboardList className="w-5 h-5 mr-2" />
              Terms of Service
            </button>
          </div>
        </div>

        {/* Content Container */}
        <div className="bg-white dark:bg-dark-200 rounded-2xl shadow-xl overflow-hidden">
          {/* Content */}
          <div className="p-6 sm:p-8">
            {activeTab === "privacy" ? (
              <PrivacyPolicyContent />
            ) : (
              <TermsOfServiceContent />
            )}
          </div>

          {/* Footer */}
          <div className="bg-gray-50 dark:bg-dark-300 px-6 py-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
              © 2025 AATVAAS GRANGER INTERNATIONALS. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const PrivacyPolicyContent = () => (
  <div className="prose dark:prose-invert max-w-none">
    <div className="text-center mb-8">
      <h2 className="text-2xl font-bold mb-2">
        AATVAAS GRANGER INTERNATIONALS
      </h2>
      <p className="text-gray-600 dark:text-gray-400">
        Privacy Policy - March 23, 2025
      </p>
    </div>

    <p className="mb-6 text-gray-600 dark:text-gray-300">
      At AATVAAS GRANGER INTERNATIONALS we are committed to protecting your
      privacy. By using our web and mobile applications ("Services"), you agree to
      the practices outlined in this Privacy Policy.
    </p>

    <div className="space-y-8">
      <Section
        title="1. Information We Collect"
        content={
          <>
            <p className="mb-4">
              We collect information that is necessary to provide and improve our
              Services, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Personal Data:</strong> Your name, email, contact
                details, company information, and other information you provide.
              </li>
              <li>
                <strong>Usage Data:</strong> Data about how you interact with our
                Services, including IP address, device type, and browser
                information.
              </li>
              <li>
                <strong>Transaction Data:</strong> Information related to your
                use of paid features within our Services.
              </li>
            </ul>
          </>
        }
      />

      <Section
        title="2. Use of Data"
        content={
          <>
            <p className="mb-4">
              We use the collected data for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To operate, maintain, and enhance our Services.</li>
              <li>
                To improve user experience through data analysis and feature
                development.
              </li>
              <li>For support, analytics, and reporting.</li>
            </ul>
          </>
        }
      />

      <Section
        title="3. Performance Improvement"
        content="By using our Services, you consent to the use of your data, in an anonymized form, to enhance the performance and functionality of the platform. This helps us continually improve the service we provide."
      />

      <Section
        title="4. Data Security"
        content="We implement industry-standard security measures to protect your data, but we cannot guarantee absolute security. We are not liable for any unauthorized access or loss of data."
      />

      <Section
        title="5. Data Retention"
        content="Your personal data will be retained as long as necessary for the purposes outlined in this policy, after which it will be securely deleted or anonymized, unless otherwise required for legal or business purposes."
      />

      <Section
        title="6. Third-Party Services"
        content="Our Services may include links to third-party sites. We are not responsible for the privacy practices or content of these external sites."
      />

      <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at <strong>support@aagicorp.com</strong>
        </p>
      </div>
    </div>
  </div>
);

const TermsOfServiceContent = () => (
  <div className="prose dark:prose-invert max-w-none">
    <div className="text-center mb-8">
      <h2 className="text-2xl font-bold mb-2">
        AATVAAS GRANGER INTERNATIONALS
      </h2>
      <p className="text-gray-600 dark:text-gray-400">
        Terms of Service - March 22, 2025
      </p>
    </div>

    <p className="mb-6 text-gray-600 dark:text-gray-300">
      These Terms and Conditions govern your access to and use of AATVAAS GRANGER
      INTERNATIONALS's Services. By using our Services, you agree to comply with
      these Terms.
    </p>

    <div className="space-y-8">
      <Section
        title="1. Use of Services"
        content="You are granted a limited, non-exclusive license to use our Services in accordance with these Terms for business-related purposes."
      />

      <Section
        title="2. Account Registration"
        content="To access the Services, you must provide accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials."
      />

      <Section
        title="3. Subscription and Cancellation"
        content="You may cancel your subscription at any time. We reserve the right to suspend or terminate your access to the Services at our discretion."
      />

      <Section
        title="4. Limitation of Liability"
        content="To the extent permitted by law, AATVAAS GRANGER INTERNATIONALS is not liable for any indirect, incidental, or consequential damages arising from your use of the Services, including data loss or business disruption."
      />

      <Section
        title="5. Data Usage"
        content="By using our Services, you consent to the collection and use of your data as described in our Privacy Policy. We will not share personal information without your consent, except as required by law."
      />

      <Section
        title="6. Indemnification"
        content="You agree to indemnify and hold AATVAAS GRANGER INTERNATIONALS harmless from any claims or damages arising from your use of the Services or breach of these Terms."
      />

      <Section
        title="7. Governing Law"
        content="These Terms will be governed by the laws of the United States and Canada, and any disputes will be resolved in the appropriate courts in the jurisdiction where AATVAAS GRANGER INTERNATIONALS operates."
      />

      <Section
        title="8. Changes to Terms"
        content="We may modify these Terms from time to time. Any changes will be communicated through the Services, and continued use of the Services constitutes your acceptance of the updated Terms."
      />

      <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
        <p>
          If you have any questions about these Terms of Service, please contact
          us at <strong>support@aagicorp.com</strong>
        </p>
      </div>
    </div>
  </div>
);

const Section = ({
  title,
  content,
}: {
  title: string;
  content: React.ReactNode | string;
}) => (
  <div>
    <h2 className="text-xl font-semibold mb-4">{title}</h2>
    {typeof content === "string" ? (
      <p className="text-gray-600 dark:text-gray-300">{content}</p>
    ) : (
      <div className="text-gray-600 dark:text-gray-300">{content}</div>
    )}
  </div>
);

export default LegalPage;