'use client';
import { useEffect, useState } from 'react';
import { siteConfig } from '@/config/site';

export default function ProtectedEmail({ className = '' }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${siteConfig.CONTACT_EMAIL}`;
  };

  if (!mounted) {
    // Return a visually identical string using HTML entities for SSR to prevent harvesting
    const encoded = siteConfig.CONTACT_EMAIL.split('').map(c => `&#${c.charCodeAt(0)};`).join('');
    return <span className={className} dangerouslySetInnerHTML={{ __html: encoded }} />;
  }

  return (
    <a href="#" onClick={handleClick} className={className}>
      {siteConfig.CONTACT_EMAIL}
    </a>
  );
}
