import HomeEL from '@/components/HomeEL'
import HomeEN from '@/components/HomeEN'

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  
  if (lang === 'en') {
    return <HomeEN />
  }
  
  return <HomeEL />
}
