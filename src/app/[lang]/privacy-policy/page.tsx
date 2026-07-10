import Link from 'next/link';

export const metadata = {
  title: 'Privacy & Cookies Policy | Alouminia Papadakis',
  description: 'Privacy policy and cookies policy for alouminia-papadakis.gr',
  alternates: {
    canonical: 'https://alouminia-papadakis.gr/en/privacy-policy',
    languages: {
      'el': 'https://alouminia-papadakis.gr/el/politiki-aporritou',
      'en': 'https://alouminia-papadakis.gr/en/privacy-policy',
    },
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-[#2B3A4A]">Privacy & Cookies Policy</h1>
      <div className="prose prose-lg text-gray-700">
        <p>Last updated: {new Date().toLocaleDateString('en-GB')}</p>
        
        <h2 className="text-xl font-semibold mt-6 mb-3 text-[#2B3A4A]">1. Data Controller</h2>
        <p>
          The company PAPADAKIS GEORGIOS (VAT: 066536190, GEMI: 022204950000, 
          Address: 8 Drouliskou Str., Rethymno, 74100, Greece) is the Data 
          Controller of your personal data collected through alouminia-papadakis.gr.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3 text-[#2B3A4A]">2. What data we collect</h2>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Contact details:</strong> Name, Email, Phone (when you contact us).</li>
          <li><strong>Browsing Data (Analytics):</strong> Anonymous traffic stats, IP, browser type (via Google Analytics 4, only with your consent).</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-3 text-[#2B3A4A]">3. Purpose of Processing</h2>
        <p>We use your data to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Respond to your quote requests.</li>
          <li>Improve the browsing experience on our Website.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-3 text-[#2B3A4A]">4. Cookies & Google Consent Mode v2</h2>
        <p>
          Our website uses cookies. <strong>Necessary cookies</strong> are enabled 
          by default (for basic site functionality). <strong>Analytics cookies</strong> 
          are activated <strong>only</strong> if you click "Accept All" on the Cookie Banner.
        </p>
        <p>
          We implement Google Consent Mode v2. This means Google Analytics is informed 
          about your consent preference and adjusts data collection accordingly. Without 
          consent, only anonymous pings without cookies are collected.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3 text-[#2B3A4A]">5. Your Rights (GDPR)</h2>
        <p>
          You have the right to access, rectify, erase (right to be forgotten), 
          and restrict processing of your data. To exercise your rights, 
          contact us at: gpapadakisret@gmail.com
        </p>
      </div>
    </div>
  );
}
