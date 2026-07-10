import { ChevronDown } from 'lucide-react';
import JsonLd from '@/components/JsonLd';

interface FaqItem {
  question: string;
  answer: React.ReactNode;
  textAnswer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  title?: string;
}

export default function FaqAccordion({ items, title = 'Συχνές Ερωτήσεις' }: FaqAccordionProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.textAnswer
      }
    }))
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4">
      <JsonLd data={schema} />
      {title && (
        <h2 className="text-3xl font-black text-navy mb-8 text-center">{title}</h2>
      )}
      <div className="space-y-4">
        {items.map((item, index) => (
          <details 
            key={index} 
            className="group border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden open:pb-5"
          >
            <summary className="w-full text-left px-6 py-5 flex items-center justify-between cursor-pointer list-none [&::-webkit-details-marker]:hidden">
              <span className="font-bold text-navy text-lg pr-4">{item.question}</span>
              <ChevronDown 
                className="text-red transition-transform duration-300 flex-shrink-0 group-open:rotate-180" 
                size={24} 
              />
            </summary>
            <div className="px-6 text-gray-600 prose prose-a:text-red hover:prose-a:text-red-700 animate-in fade-in duration-300">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
