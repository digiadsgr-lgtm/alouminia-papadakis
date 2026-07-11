'use client';
import { useEffect, useState } from 'react';

export default function TableOfContents({ toc, label }: { toc: {id: string, text: string}[], label: string }) {
  const [activeId, setActiveId] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -60% 0px' }
    );

    toc.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [toc]);

  if (!toc || toc.length === 0) return null;

  return (
    <>
      {/* Desktop TOC */}
      <div className="hidden lg:block bg-white rounded-2xl shadow-xl p-8 border border-gray-100 sticky top-32">
        <h3 className="text-sm font-black text-navy uppercase tracking-widest mb-6 pb-4 border-b border-gray-100">
          {label}
        </h3>
        <ul className="space-y-4 relative border-l-2 border-gray-100 ml-1 pl-5">
          {toc.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id} className="relative">
                <a 
                  href={`#${item.id}`} 
                  className={`block text-sm font-medium leading-snug transition-all ${
                    isActive ? 'text-red-light font-bold translate-x-1' : 'text-gray-500 hover:text-navy hover:translate-x-1'
                  }`}
                >
                  {isActive && (
                    <span className="absolute -left-[23px] top-1/2 -translate-y-1/2 w-[3px] h-full max-h-6 bg-red-light rounded-r-full" />
                  )}
                  {item.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Mobile TOC */}
      <details className="lg:hidden bg-white rounded-2xl shadow-md border border-gray-100 mb-10 overflow-hidden group">
        <summary className="p-5 font-black text-navy uppercase tracking-widest text-sm cursor-pointer list-none flex justify-between items-center group-open:border-b border-gray-100">
          {label}
          <svg className="w-5 h-5 text-red-light transform transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </summary>
        <div className="p-5 bg-gray-50/50">
          <ul className="space-y-3">
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-sm font-medium text-gray-600 hover:text-red-light block">
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </details>
    </>
  );
}
