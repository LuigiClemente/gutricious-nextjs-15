"use client";

import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

export default function PrivacyPolicy() {
  const router = useRouter();
  const params = useParams();
  const locale = params.locale;
  const [hovered, setHovered] = useState(false);

  // Return to main page in the current language
  const handleReturn = () => {
    router.push(`/${locale}`);
  };

  return (
    <div className="relative min-h-screen bg-white">
      {/* Close Cross Icon */}
      <button
        onClick={handleReturn}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="fixed rounded-full border-none text-white cursor-pointer flex items-center justify-center z-50 transition-all duration-200"
        style={{
          top: '20px',
          right: '20px',
          width: '44px',
          height: '44px',
          fontSize: '24px',
          background: hovered ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.7)',
          transform: hovered ? 'scale(1.1)' : 'scale(1)',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        aria-label="Close and return to home"
      >
        <IoMdClose />
      </button>

      {/* Sticky Get Started Button removed as per request */}

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Privacy Policy
        </h1>

        <div className="prose prose-lg mx-auto text-gray-700">
          <h2 className="text-2xl font-semibold mt-6 mb-4">1. Overview</h2>
          <p className="mb-6">
            This document explains how we handle your personal information when you use our services. "Personal information" means any details that could be used to identify you. This policy doesn't cover the practices of companies we don't control or people outside our organization.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Personal Data Collection and Usage</h2>
          
          <h3 className="text-xl font-medium mt-6 mb-3">Types of Personal Data We Collect (and Why)</h3>
          <p className="mb-4">
            Here's a summary of the personal information we've collected over the past 12 months, along with the reasons why, and how we use it:
          </p>
          
          <h4 className="text-lg font-medium mt-4 mb-2">Customer Information</h4>
          <p className="mb-4">
            We need your name, contact details, and address to manage your account and deliver our services (like shipping products, sending updates, and handling any legally required aspects).
          </p>
          <p className="mb-4">
            We also use this information to improve our services, and for targeted marketing with your permission.
          </p>
          <p className="mb-4">
            We'll use your email to share news about our products, app updates, and relevant webinars.
          </p>
          
          <h4 className="text-lg font-medium mt-4 mb-2">Customer Information Storage</h4>
          <p className="mb-4">
            We keep your customer information for six years after your subscription ends in case you'd like to come back, or if any legal issues arise. Our lab partners may need to keep it longer to comply with local laws.
          </p>
          
          <h4 className="text-lg font-medium mt-4 mb-2">Self-Reported Health Data</h4>
          <p className="mb-4">
            You may choose to share health details like your dietary habits or pre-existing conditions.
          </p>
          <p className="mb-4">
            We use this information to make sure our services are right for you, to help with laboratory sample analysis, and in our research efforts.
          </p>
          
          <h3 className="text-xl font-medium mt-6 mb-3">How We Use Your Data</h3>
          <p className="mb-4">
            Our main goal is to research how diet impacts health.
          </p>
          <p className="mb-4">
            Your information helps us provide support, meet legal requirements, and achieve other purposes as explained above.
          </p>
          <p className="mb-4">
            We're committed to being open and honest about how we use your data, and we always follow the law.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Disclosure of Your Personal Data</h2>
          <p className="mb-4">
            We share your Personal Data in limited situations:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2"><strong>Our Company:</strong> With other parts of our corporate group, including GUTRICIOUS and other international branches.</li>
            <li className="mb-2"><strong>Research Partners:</strong> With academic institutions and pharmaceutical companies for health and dietary studies. We protect your identity by only sharing anonymized data.</li>
            <li className="mb-2"><strong>Testing Labs:</strong> With labs authorized by us to process tests. We share necessary personal and health information, especially if local laws require a doctor's approval for direct-to-consumer tests.</li>
            <li className="mb-2"><strong>Device Suppliers:</strong> With suppliers of devices that monitor your health (like glucose monitors). We share the data needed for the devices to function.</li>
            <li className="mb-2"><strong>Shipping Partners:</strong> With companies that deliver our products and transport samples.</li>
            <li className="mb-2"><strong>Service Providers:</strong> With companies that help us with things like:
              <ul className="list-disc pl-6 mt-2">
                <li>Cloud storage, technology, and communication</li>
                <li>Security and fraud prevention</li>
                <li>Data analysis</li>
                <li>Customer support</li>
                <li>Processing payments</li>
              </ul>
            </li>
            <li className="mb-2"><strong>Professional Advisors:</strong> With our lawyers and other advisors (who are required to keep your information confidential).</li>
            <li className="mb-2"><strong>Business Changes:</strong> If we're involved in a merger, acquisition, bankruptcy, or similar event, your data may be transferred to the new company. We'll let you know before this happens and before your data is subject to a new Privacy Policy.</li>
          </ul>
          <p className="mb-4">
            <strong>Important Note:</strong> We may convert Personal Data into anonymous data that can't identify you. We can use or share this for business purposes without restriction.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Digital Tracking and Advertisements</h2>
          
          <h3 className="text-xl font-medium mt-6 mb-3">How We Track You</h3>
          <p className="mb-4">
            We use cookies and similar technologies to understand how you use our services, recognize you, and improve your experience. We don't currently honor "Do Not Track" settings. Please see our <a href="/${locale}/CookiesPolicy" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200">Cookie Policy</a> for more details.
          </p>
          
          <h3 className="text-xl font-medium mt-6 mb-3">Meta Advertising</h3>
          <p className="mb-4">
            We use Meta's tools (Meta Pixel and Conversions API) to better target our ads. This involves sharing some non-reversible user data with Meta.
          </p>
          
          <h3 className="text-xl font-medium mt-6 mb-3">Your Rights</h3>
          <p className="mb-4">
            Both we and Meta are considered data controllers under the GDPR. You can find more about how Meta uses your data and your rights in their Data Policy. Details are also in our legal agreements with Meta.
          </p>
          
          <h3 className="text-xl font-medium mt-6 mb-3">Mailing Lists</h3>
          <p className="mb-4">
            You can sign up for our mailing lists even without an account. You can always unsubscribe using the link provided in our emails.
          </p>
          
          <h3 className="text-xl font-medium mt-6 mb-3">User Research</h3>
          <p className="mb-4">
            If you're a customer, we may invite you to give feedback on our products to help us improve.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Protecting and Retaining Your Data</h2>
          
          <h3 className="text-xl font-medium mt-6 mb-3">Security</h3>
          <p className="mb-4">
            We implement security measures designed to protect your Personal Data from unauthorized access. We encourage you to also take steps to keep your information safe.
          </p>
          
          <h3 className="text-xl font-medium mt-6 mb-3">Retention</h3>
          <p className="mb-4">
            We keep your data as long as needed for the purposes explained in this policy. Some data may be kept longer to meet legal requirements or for valid business reasons. You'll find specific retention periods within each data category section.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Children's Personal Data</h2>
          
          <h3 className="text-xl font-medium mt-6 mb-3">Age Limit</h3>
          <p className="mb-4">
            We don't knowingly collect Personal Data from children under 18 without parental consent. Our Terms of Service reflect this.
          </p>
          
          <h3 className="text-xl font-medium mt-6 mb-3">Age 13-18</h3>
          <p className="mb-4">
            We may collect Personal Data from children between 13 and 18 if we have parental consent and the collection is done under parental supervision.
          </p>
          
          <h3 className="text-xl font-medium mt-6 mb-3">Unauthorized Collection</h3>
          <p className="mb-4">
            If you believe we have collected a child's Personal Data without proper consent, please contact us immediately at dpo@gutricious.com. We will take steps to delete that information.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Rights for European Union (EU) Data Subjects</h2>
          
          <h3 className="text-xl font-medium mt-6 mb-3">Your Rights Under the GDPR</h3>
          <p className="mb-4">
            GUTRICIOUS stores your data in the EU and complies with the General Data Protection Regulation (GDPR). This gives you specific rights over your Personal Data, even if you live outside the EU.
          </p>
          
          <h3 className="text-xl font-medium mt-6 mb-3">Understanding Your Rights</h3>
          <p className="mb-4">
            We've explained the types of Personal Data we collect, how we use it, the legal basis for processing, and who we share it with.
          </p>
          
          <h3 className="text-xl font-medium mt-6 mb-3">Exercising Your Rights</h3>
          <p className="mb-4">
            To request access, correction, deletion, or other actions regarding your Personal Data, contact us at dpo@gutricious.com. You can also manage some requests through our privacy portal.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Policy Updates</h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time to reflect changes in how we handle your data. Please check back regularly to stay informed.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contacting Us</h2>
          
          <h3 className="text-xl font-medium mt-6 mb-3">Questions or Feedback</h3>
          <p className="mb-4">
            Contact us at dpo@gutricious.com for any questions about this policy or to exercise your data rights.
          </p>
          
          <h3 className="text-xl font-medium mt-6 mb-3">General Inquiries</h3>
          <p className="mb-4">
            For general questions, email hello@gutricious.com.
          </p>
          
          <h3 className="text-xl font-medium mt-6 mb-3">Privacy Portal</h3>
          <p className="mb-4">
            Our dedicated portal is the best way to make data access or deletion requests.
          </p>
          
          <h3 className="text-xl font-medium mt-6 mb-3">Data Protection Officer</h3>
          <p className="mb-4">
            Our DPO is always available at dpo@gutricious.com for assistance.
          </p>
        </div>
      </div>
    </div>
  );
}
