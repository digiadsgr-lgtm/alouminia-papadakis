import { siteConfig } from '@/config/site';

export default function ProtectedEmail({ className = '' }: { className?: string }) {
  const email = siteConfig.CONTACT_EMAIL;
  
  // HTML-entity-encode the email and 'mailto:' prefix
  const encodedEmail = email.split('').map(c => `&#${c.charCodeAt(0)};`).join('');
  const encodedMailto = 'mailto:'.split('').map(c => `&#${c.charCodeAt(0)};`).join('');
  
  // Build the complete anchor tag string
  const anchorHtml = `<a href="${encodedMailto}${encodedEmail}" class="${className}">${encodedEmail}</a>`;

  // Render the raw HTML string without React's escaping
  return <span dangerouslySetInnerHTML={{ __html: anchorHtml }} />;
}
