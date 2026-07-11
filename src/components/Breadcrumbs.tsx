import Link from 'next/link';

type BreadcrumbItem = {
  label: string;
  href: string;
};

export default function Breadcrumbs({ items, lang = 'el' }: { items: BreadcrumbItem[], lang?: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": lang === 'el' ? 'Αρχική' : 'Home',
        "item": `https://alouminia-papadakis.gr/${lang}`
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        "item": `https://alouminia-papadakis.gr${item.href}`
      }))
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 mb-8 overflow-x-auto whitespace-nowrap">
        <Link href={`/${lang}`} className="hover:text-navy transition-colors">
          {lang === 'el' ? 'Αρχικη' : 'Home'}
        </Link>
        {items.map((item, index) => (
          <div key={item.href} className="flex items-center gap-2">
            <span className="text-gray-300">/</span>
            {index === items.length - 1 ? (
              <span className="text-navy">{item.label}</span>
            ) : (
              <Link href={item.href} className="hover:text-navy transition-colors">
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </nav>
    </>
  );
}
