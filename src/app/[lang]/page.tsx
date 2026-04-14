import HomeEL from '@/components/HomeEL'
import HomeEN from '@/components/HomeEN'

export default async function Page({ params }: { params: Promise<{ lang: 'el' | 'en' }> }) {
  const { lang } = await params;
  
  if (lang === 'en') {
    return <HomeEN />
  }
  
  return <HomeEL />
}
