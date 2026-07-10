import Link from 'next/link';

export const metadata = {
  title: 'Πολιτική Απορρήτου & Cookies | Αλουμίνια Παπαδάκης',
  description: 'Πολιτική προστασίας προσωπικών δεδομένων και χρήσης cookies.',
  alternates: {
    canonical: 'https://alouminia-papadakis.gr/el/politiki-aporritou',
    languages: {
      'el': 'https://alouminia-papadakis.gr/el/politiki-aporritou',
      'en': 'https://alouminia-papadakis.gr/en/privacy-policy',
    },
  },
};

export default function PolitikiAporritou() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-[#2B3A4A]">Πολιτική Απορρήτου & Cookies</h1>
      <div className="prose prose-lg text-gray-700">
        <p>Τελευταία ενημέρωση: {new Date().toLocaleDateString('el-GR')}</p>
        
        <h2 className="text-xl font-semibold mt-6 mb-3 text-[#2B3A4A]">1. Υπεύθυνος Επεξεργασίας</h2>
        <p>
          Η επιχείρηση ΠΑΠΑΔΑΚΗΣ ΓΕΩΡΓΙΟΣ του ΙΩΣΗΦ (ΑΦΜ: 066536190, ΓΕΜΗ: 022204950000, 
          Διεύθυνση: Δρουλίσκου 8, Ρέθυμνο, 74100) είναι ο Υπεύθυνος Επεξεργασίας 
          των δεδομένων σας μέσω του ιστοτόπου alouminia-papadakis.gr.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3 text-[#2B3A4A]">2. Ποια δεδομένα συλλέγουμε</h2>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Στοιχεία Επικοινωνίας:</strong> Όνομα, Email, Τηλέφωνο (όταν επικοινωνείτε μαζί μας).</li>
          <li><strong>Δεδομένα Περιήγησης (Analytics):</strong> Ανώνυμα στατιστικά επισκεψιμότητας, IP, τύπος browser (μέσω Google Analytics 4, μόνο με τη συγκατάθεσή σας).</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-3 text-[#2B3A4A]">3. Σκοπός Επεξεργασίας</h2>
        <p>Χρησιμοποιούμε τα δεδομένα σας για:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Να απαντάμε στα αιτήματά σας για προσφορές.</li>
          <li>Να βελτιώνουμε την εμπειρία πλοήγησης στον Ιστότοπο.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-3 text-[#2B3A4A]">4. Πολιτική Cookies & Google Consent Mode v2</h2>
        <p>
          Ο ιστότοπός μας χρησιμοποιεί cookies. Τα <strong>απαραίτητα cookies</strong> 
          ενεργοποιούνται by default (για τη βασική λειτουργία του site). Τα 
          <strong> cookies ανάλυσης (Analytics)</strong> ενεργοποιούνται <strong>μόνο</strong> 
          εφόσον πατήσετε «Αποδοχή Όλων» στο Cookie Banner.
        </p>
        <p>
          Εφαρμόζουμε το Google Consent Mode v2. Αυτό σημαίνει ότι τα Google Analytics 
          πληροφορούνται για την προτίμησή σας (consent) και προσαρμόζουν τη συλλογή 
          δεδομένων. Χωρίς συγκατάθεση, συλλέγονται μόνο ανώνυμα pings χωρίς cookies.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3 text-[#2B3A4A]">5. Τα Δικαιώματά σας (GDPR)</h2>
        <p>
          Έχετε το δικαίωμα πρόσβασης, διόρθωσης, διαγραφής (δικαίωμα στη λήθη) 
          και περιορισμού της επεξεργασίας. Για την άσκηση των δικαιωμάτων σας, 
          επικοινωνήστε στο: gpapadakisret@gmail.com
        </p>
      </div>
    </div>
  );
}
