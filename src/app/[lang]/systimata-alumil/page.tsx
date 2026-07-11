import { alumilSystems } from '@/data/systems'
import Link from 'next/link'
import { Metadata } from 'next'
import { ChevronRight, Check } from 'lucide-react'

// Translation helper
const getUi = (lang: string) => {
  switch (lang) {
    case 'el': return {
      title: 'Συστήματα',
      subtitle: 'Ως πιστοποιημένοι κατασκευαστές Alumil στο Ρέθυμνο, προσφέρουμε όλη τη γκάμα των προηγμένων συστημάτων Smartia και Supreme.',
      thSeries: 'Σειρά',
      thCategory: 'Κατηγορία',
      thUw: 'Θερμομόνωση (Uw)',
      thPrice: 'Επίπεδο Τιμής',
      thDetails: 'Λεπτομέρειες',
      from: 'από',
      view: 'Προβολή',
      disclaimer: '* Το τελικό Uw εξαρτάται από την επιλογή του υαλοπίνακα (τζάμι) και τις ακριβείς διαστάσεις του κουφώματος. Οι αναγραφόμενες τιμές είναι οι βέλτιστες επιτεύξιμες βάσει των επίσημων τεχνικών φυλλαδίων της Alumil.',
      selectTitle: 'Ποια σειρά είναι ιδανική για το έργο σας;',
      renovationTitle: 'Ανακαινίσεις & Ενοικιαζόμενα',
      renovationDesc: 'Επιλέξτε τη σειρά SMARTIA M9660 για εξαιρετική σχέση κόστους/απόδοσης με σύγχρονη αισθητική.',
      newTitle: 'Νέες Κατοικίες & Εξοικονομώ',
      newDesc: 'Η SMARTIA S67 και η S560 υπερκαλύπτουν τις απαιτήσεις του ΚΕΝΑΚ προσφέροντας υψηλή ασφάλεια.',
      luxuryTitle: 'Πολυτελείς Βίλες & Ξενοδοχεία',
      luxuryDesc: 'Η σειρά SUPREME προσφέρει αόρατα πλαίσια και την απόλυτη ενοποίηση του χώρου.'
    }
    case 'de': return {
      title: 'Systeme',
      subtitle: 'Als zertifizierte Alumil-Hersteller in Rethymno bieten wir die gesamte Palette an fortschrittlichen Smartia- und Supreme-Systemen an.',
      thSeries: 'Serie',
      thCategory: 'Kategorie',
      thUw: 'Wärmedämmung (Uw)',
      thPrice: 'Preisniveau',
      thDetails: 'Details',
      from: 'ab',
      view: 'Ansehen',
      disclaimer: '* Der endgültige Uw-Wert hängt von der Wahl der Verglasung und den genauen Abmessungen des Rahmens ab. Die angegebenen Werte sind die besten erreichbaren Werte basierend auf offiziellen Alumil-Datenblättern.',
      selectTitle: 'Welche Serie ist ideal für Ihr Projekt?',
      renovationTitle: 'Renovierungen & Vermietungen',
      renovationDesc: 'Wählen Sie SMARTIA M9660 für ein hervorragendes Preis-Leistungs-Verhältnis.',
      newTitle: 'Neubauten & Energieeffizienz',
      newDesc: 'SMARTIA S67 und S560 übertreffen die Anforderungen und bieten hohe Sicherheit.',
      luxuryTitle: 'Luxusvillen & Hotels',
      luxuryDesc: 'Die SUPREME-Serie bietet unsichtbare Rahmen und die ultimative Raumintegration.'
    }
    case 'fr': return {
      title: 'Systèmes',
      subtitle: 'En tant que fabricants Alumil certifiés à Réthymnon, nous proposons toute la gamme de systèmes avancés Smartia et Supreme.',
      thSeries: 'Série',
      thCategory: 'Catégorie',
      thUw: 'Isolation Thermique (Uw)',
      thPrice: 'Niveau de Prix',
      thDetails: 'Détails',
      from: 'à partir de',
      view: 'Voir',
      disclaimer: '* Le Uw final dépend du choix du vitrage et des dimensions exactes du cadre. Les valeurs indiquées sont les meilleures réalisables basées sur les fiches techniques officielles d\'Alumil.',
      selectTitle: 'Quelle série est idéale pour votre projet ?',
      renovationTitle: 'Rénovations & Locations',
      renovationDesc: 'Choisissez SMARTIA M9660 pour un excellent rapport qualité/prix.',
      newTitle: 'Nouvelles Résidences & Écoénergétique',
      newDesc: 'SMARTIA S67 et S560 dépassent les exigences et offrent une haute sécurité.',
      luxuryTitle: 'Villas de Luxe & Hôtels',
      luxuryDesc: 'La série SUPREME offre des cadres invisibles et l\'intégration ultime de l\'espace.'
    }
    case 'nl': return {
      title: 'Systemen',
      subtitle: 'Als gecertificeerde Alumil-fabrikanten in Rethymnon bieden wij het volledige assortiment geavanceerde Smartia- en Supreme-systemen.',
      thSeries: 'Serie',
      thCategory: 'Categorie',
      thUw: 'Thermische Isolatie (Uw)',
      thPrice: 'Prijsniveau',
      thDetails: 'Details',
      from: 'vanaf',
      view: 'Bekijken',
      disclaimer: '* De uiteindelijke Uw hangt af van de keuze van de beglazing en de exacte afmetingen van het kozijn. De vermelde waarden zijn de best haalbare op basis van officiële Alumil-datasheets.',
      selectTitle: 'Welke serie is ideaal voor uw project?',
      renovationTitle: 'Renovaties & Verhuur',
      renovationDesc: 'Kies SMARTIA M9660 voor een uitstekende prijs-kwaliteitverhouding.',
      newTitle: 'Nieuwbouw & Energiezuinig',
      newDesc: 'SMARTIA S67 en S560 overtreffen de eisen en bieden hoge veiligheid.',
      luxuryTitle: 'Luxe Villa\'s & Hotels',
      luxuryDesc: 'De SUPREME-serie biedt onzichtbare kaders en de ultieme ruimte-integratie.'
    }
    case 'en':
    default: return {
      title: 'Systems',
      subtitle: 'As certified Alumil manufacturers in Rethymno, we offer the full range of advanced Smartia and Supreme systems.',
      thSeries: 'Series',
      thCategory: 'Category',
      thUw: 'Thermal Insulation (Uw)',
      thPrice: 'Price Level',
      thDetails: 'Details',
      from: 'from',
      view: 'View',
      disclaimer: '* The final Uw depends on the choice of glazing and the exact dimensions of the frame. The stated values are the best achievable based on official Alumil technical datasheets.',
      selectTitle: 'Which series is ideal for your project?',
      renovationTitle: 'Renovations & Rentals',
      renovationDesc: 'Choose SMARTIA M9660 for excellent cost/performance ratio with modern aesthetics.',
      newTitle: 'New Residences & Energy Upgrades',
      newDesc: 'SMARTIA S67 and S560 exceed requirements offering high security.',
      luxuryTitle: 'Luxury Villas & Hotels',
      luxuryDesc: 'The SUPREME series offers invisible frames and the ultimate integration of space.'
    }
  }
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  
  const m = {
    el: { title: 'Συστήματα Alumil Ρέθυμνο | Όλες οι Σειρές | Αλουμίνια Παπαδάκης' },
    en: { title: 'Alumil Systems Rethymno | All Series | Papadakis Aluminium' },
    de: { title: 'Alumil Systeme Rethymno | Alle Serien | Papadakis Aluminium' },
    fr: { title: 'Systèmes Alumil Réthymnon | Toutes les Séries | Papadakis Aluminium' },
    nl: { title: 'Alumil Systemen Rethymnon | Alle Series | Papadakis Aluminium' },
  }
  const meta = m[lang as keyof typeof m] || m.en;

  return {
    title: meta.title,
    alternates: {
      canonical: `https://alouminia-papadakis.gr/${lang}/systimata-alumil`,
      languages: {
        'el': 'https://alouminia-papadakis.gr/el/systimata-alumil',
        'en': 'https://alouminia-papadakis.gr/en/systimata-alumil',
        'de': 'https://alouminia-papadakis.gr/de/systimata-alumil',
        'fr': 'https://alouminia-papadakis.gr/fr/systimata-alumil',
        'nl': 'https://alouminia-papadakis.gr/nl/systimata-alumil',
        'x-default': 'https://alouminia-papadakis.gr/el/systimata-alumil',
      }
    }
  }
}

export default async function SystimataAlumilHub({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const ui = getUi(lang);

  return (
    <main className="min-h-screen bg-[#0a0f1a] text-gray-200 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Alumil <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">{ui.title}</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {ui.subtitle}
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden mb-24 shadow-2xl backdrop-blur-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5">
                  <th className="p-6 text-white font-bold border-b border-white/10">{ui.thSeries}</th>
                  <th className="p-6 text-white font-bold border-b border-white/10">{ui.thCategory}</th>
                  <th className="p-6 text-white font-bold border-b border-white/10">{ui.thUw}</th>
                  <th className="p-6 text-white font-bold border-b border-white/10">{ui.thPrice}</th>
                  <th className="p-6 text-white font-bold border-b border-white/10">{ui.thDetails}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {alumilSystems.map((sys) => {
                  const category = sys[`category${lang.toUpperCase() as 'EL'|'EN'|'DE'|'FR'|'NL'}` as keyof typeof sys] as string || sys.categoryEN;
                  return (
                    <tr key={sys.slug} className="hover:bg-white/5 transition-colors">
                      <td className="p-6 font-bold text-white whitespace-nowrap">{sys.name}</td>
                      <td className="p-6 text-gray-300">{category}</td>
                      <td className="p-6 text-gray-300">
                        {sys.uw !== '-' ? (
                          <span>{ui.from} {sys.uw} W/m²K*</span>
                        ) : (
                          '-'
                        )}
                      </td>
                      <td className="p-6 text-red-400 tracking-widest">{sys.priceLevel}</td>
                      <td className="p-6">
                        <Link 
                          href={`/${lang}/systimata-alumil/${sys.slug}`}
                          className="text-white bg-red-600/20 hover:bg-red-600/40 px-4 py-2 rounded-lg text-sm font-medium transition-colors inline-flex items-center gap-1"
                        >
                          {ui.view} <ChevronRight className="w-4 h-4" />
                        </Link>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-black/20 text-sm text-gray-400 border-t border-white/10">
            {ui.disclaimer}
          </div>
        </div>

        {/* Selection Logic */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">{ui.selectTitle}</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                  <Check className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{ui.renovationTitle}</h3>
                  <p className="text-gray-400">{ui.renovationDesc}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                  <Check className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{ui.newTitle}</h3>
                  <p className="text-gray-400">{ui.newDesc}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                  <Check className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{ui.luxuryTitle}</h3>
                  <p className="text-gray-400">{ui.luxuryDesc}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <img 
              src="/images/hero_aluminum_villa_1776110912532.png" 
              alt="Alumil Systems"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] to-transparent"></div>
          </div>
        </div>

      </div>
    </main>
  )
}
