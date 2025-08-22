"use client";

import { useRouter } from "next/navigation";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

export default function PolicyClient({ locale }: { locale: string }) {
  const router = useRouter();
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

      {/* Content */}
      <div className="container mx-auto px-6 py-16 max-w-5xl">
        <h1 className="text-7xl md:text-8xl font-bold mb-16 text-center text-gray-800">
          Privacy Policy
        </h1>

        <div className="prose prose-3xl max-w-none mx-auto text-gray-700">
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">1. Overview</h2>
          <p className="mb-8 text-2xl">
            This document explains how we handle your personal information when you use our services. "Personal information" means any details that could be used to identify you. This policy doesn't cover the practices of companies we don't control or people outside our organization.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">2. Personal Data Collection and Usage</h2>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Types of Personal Data We Collect (and Why)</h3>
          <p className="mb-8 text-2xl">
            Here's a summary of the personal information we've collected over the past 12 months, along with the reasons why, and how we use it:
          </p>
          
          <h4 className="text-3xl font-medium mt-12 mb-5 text-gray-800">Customer Information</h4>
          <p className="mb-8 text-2xl">
            We need your name, contact details, and address to manage your account and deliver our services (like shipping products, sending updates, and handling any legally required aspects).
          </p>
          <p className="mb-8 text-2xl">
            We also use this information to improve our services, and for targeted marketing with your permission.
          </p>
          <p className="mb-8 text-2xl">
            We'll use your email to share news about our products, app updates, and relevant webinars.
          </p>
          
          <h4 className="text-3xl font-medium mt-12 mb-5 text-gray-800">Customer Information Storage</h4>
          <p className="mb-8 text-2xl">
            We keep your customer information for six years after your subscription ends in case you'd like to come back, or if any legal issues arise. Our lab partners may need to keep it longer to comply with local laws.
          </p>
          
          <h4 className="text-3xl font-medium mt-12 mb-5 text-gray-800">Self-Reported Health Data</h4>
          <p className="mb-8 text-2xl">
            You may choose to share health details like your dietary habits or pre-existing conditions.
          </p>
          <p className="mb-8 text-2xl">
            We use this information to make sure our services are right for you, to help with laboratory sample analysis, and in our research efforts.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">How We Use Your Data</h3>
          <p className="mb-8 text-2xl">
            Our main goal is to research how diet impacts health.
          </p>
          <p className="mb-8 text-2xl">
            Your information helps us provide support, meet legal requirements, and achieve other purposes as explained above.
          </p>
          <p className="mb-8 text-2xl">
            We're committed to being open and honest about how we use your data, and we always follow the law.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">3. Disclosure of Your Personal Data</h2>
          <p className="mb-8 text-2xl">
            We share your Personal Data in limited situations:
          </p>
          <ul className="list-disc pl-12 mb-12 space-y-6">
            <li className="text-2xl"><span className="font-semibold text-gray-800">Our Company:</span> With other parts of our corporate group, including GUTRICIOUS and other international branches.</li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Research Partners:</span> With academic institutions and pharmaceutical companies for health and dietary studies. We protect your identity by only sharing anonymized data.</li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Testing Labs:</span> With labs authorized by us to process tests. We share necessary personal and health information, especially if local laws require a doctor's approval for direct-to-consumer tests.</li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Device Suppliers:</span> With suppliers of devices that monitor your health (like glucose monitors). We share the data needed for the devices to function.</li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Shipping Partners:</span> With companies that deliver our products and transport samples.</li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Service Providers:</span> With companies that help us with things like:
              <ul className="list-disc pl-12 mt-4 space-y-3">
                <li className="text-2xl">Cloud storage, technology, and communication</li>
                <li className="text-2xl">Security and fraud prevention</li>
                <li className="text-2xl">Data analysis</li>
                <li className="text-2xl">Customer support</li>
                <li className="text-2xl">Processing payments</li>
              </ul>
            </li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Professional Advisors:</span> With our lawyers and other advisors (who are required to keep your information confidential).</li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Business Changes:</span> If we're involved in a merger, acquisition, bankruptcy, or similar event, your data may be transferred to the new company. We'll let you know before this happens and before your data is subject to a new Privacy Policy.</li>
          </ul>
          <p className="mb-12 text-2xl font-medium text-amber-700 py-4 px-6 border-l-6 border-amber-500 bg-amber-50">
            <span className="font-semibold">Important Note:</span> We may convert Personal Data into anonymous data that can't identify you. We can use or share this for business purposes without restriction.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">4. Digital Tracking and Advertisements</h2>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">How We Track You</h3>
          <p className="mb-8 text-2xl">
            We use cookies and similar technologies to understand how you use our services, recognize you, and improve your experience. We don't currently honor "Do Not Track" settings. Please see our <a href="/en/CookiePolicy" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200">Cookie Policy</a> for more details.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Meta Advertising</h3>
          <p className="mb-8 text-2xl">
            We use Meta's tools (Meta Pixel and Conversions API) to better target our ads. This involves sharing some non-reversible user data with Meta.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Your Rights</h3>
          <p className="mb-8 text-2xl">
            Both we and Meta are considered data controllers under the GDPR. You can find more about how Meta uses your data and your rights in their Data Policy. Details are also in our legal agreements with Meta.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Mailing Lists</h3>
          <p className="mb-8 text-2xl">
            You can sign up for our mailing lists even without an account. You can always unsubscribe using the link provided in our emails.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">User Research</h3>
          <p className="mb-8 text-2xl">
            If you're a customer, we may invite you to give feedback on our products to help us improve.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">5. Protecting and Retaining Your Data</h2>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Security</h3>
          <p className="mb-8 text-2xl">
            We implement security measures designed to protect your Personal Data from unauthorized access. We encourage you to also take steps to keep your information safe.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Retention</h3>
          <p className="mb-8 text-2xl">
            We keep your data as long as needed for the purposes explained in this policy. Some data may be kept longer to meet legal requirements or for valid business reasons. You'll find specific retention periods within each data category section.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">6. Children's Personal Data</h2>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Age Limit</h3>
          <p className="mb-8 text-2xl">
            We don't knowingly collect Personal Data from children under 18 without parental consent. Our Terms of Service reflect this.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Age 13-18</h3>
          <p className="mb-8 text-2xl">
            We may collect Personal Data from children between 13 and 18 if we have parental consent and the collection is done under parental supervision.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Unauthorized Collection</h3>
          <p className="mb-8 text-2xl">
            If you believe we have collected a child's Personal Data without proper consent, please contact us immediately at <a href="mailto:dpo@gutricious.com" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200 font-medium">dpo@gutricious.com</a>. We will take steps to delete that information.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">7. Rights for European Union (EU) Data Subjects</h2>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Your Rights Under the GDPR</h3>
          <p className="mb-8 text-2xl">
            GUTRICIOUS stores your data in the EU and complies with the General Data Protection Regulation (GDPR). This gives you specific rights over your Personal Data, even if you live outside the EU.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Understanding Your Rights</h3>
          <p className="mb-8 text-2xl">
            We've explained the types of Personal Data we collect, how we use it, the legal basis for processing, and who we share it with.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Exercising Your Rights</h3>
          <p className="mb-8 text-2xl">
            To request access, correction, deletion, or other actions regarding your Personal Data, contact us at <a href="mailto:dpo@gutricious.com" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200 font-medium">dpo@gutricious.com</a>. You can also manage some requests through our privacy portal.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">8. Policy Updates</h2>
          <p className="mb-8 text-2xl">
            We may update this Privacy Policy from time to time to reflect changes in how we handle your data. Please check back regularly to stay informed.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">9. Contacting Us</h2>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Questions or Feedback</h3>
          <p className="mb-8 text-2xl">
            Contact us at <a href="mailto:dpo@gutricious.com" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200 font-medium">dpo@gutricious.com</a> for any questions about this policy or to exercise your data rights.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">General Inquiries</h3>
          <p className="mb-8 text-2xl">
            For general questions, email <a href="mailto:hello@gutricious.com" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200 font-medium">hello@gutricious.com</a>.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Privacy Portal</h3>
          <p className="mb-8 text-2xl">
            Our dedicated portal is the best way to make data access or deletion requests.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Data Protection Officer</h3>
          <p className="mb-8 text-2xl">
            Our DPO is always available at <a href="mailto:dpo@gutricious.com" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200 font-medium">dpo@gutricious.com</a> for assistance.
          </p>
        </div>
      </div>
    </div>
  );
}
