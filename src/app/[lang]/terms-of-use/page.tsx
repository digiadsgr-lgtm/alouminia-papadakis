import Link from 'next/link';

export const metadata = {
  title: 'Terms of Use | Alouminia Papadakis',
  description: 'Terms of use for alouminia-papadakis.gr',
  alternates: {
    canonical: 'https://alouminia-papadakis.gr/en/terms-of-use',
    languages: {
      'el': 'https://alouminia-papadakis.gr/el/oroi-xrisis',
      'en': 'https://alouminia-papadakis.gr/en/terms-of-use',
    },
  },
};

export default function TermsOfUse() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-[#2B3A4A]">Terms of Use</h1>
      <div className="prose prose-lg text-gray-700">
        <p>
          The use of the website alouminia-papadakis.gr (hereinafter "Website") is subject
          to these terms of use. By browsing the Website, it is presumed that you fully
          accept these terms.
        </p>
        
        <h2 className="text-xl font-semibold mt-6 mb-3 text-[#2B3A4A]">1. Company Information</h2>
        <p>The Website belongs to the company:</p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Business Name:</strong> PAPADAKIS GEORGIOS (Alouminia Papadakis)</li>
          <li><strong>VAT:</strong> 066536190</li>
          <li><strong>GEMI (Commercial Reg.):</strong> 022204950000</li>
          <li><strong>Address:</strong> 8 Drouliskou Str., Rethymno, 74100, Crete, Greece</li>
          <li><strong>Phone:</strong> +30 28310 23897</li>
          <li><strong>Email:</strong> gpapadakisret@gmail.com</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-3 text-[#2B3A4A]">2. Intellectual Property</h2>
        <p>
          All content on the Website (texts, graphics, images, logos) is the
          intellectual property of the company and is protected by Greek and
          international law.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3 text-[#2B3A4A]">3. Limitation of Liability</h2>
        <p>
          The company makes every effort to ensure the accuracy of the information
          provided, however, it is not responsible for any typographical errors or
          omissions.
        </p>
      </div>
    </div>
  );
}
