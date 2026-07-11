'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import ProtectedEmail from './ProtectedEmail';

type FormData = {
  name: string;
  phone: string;
  area: string;
  interest: string;
  message: string;
  consent: boolean;
  honeypot: string;
};

const dict = {
  el: {
    title: 'Ζητήστε Προσφορά',
    name: 'Ονοματεπώνυμο',
    phone: 'Τηλέφωνο',
    area: 'Περιοχή',
    interest: 'Ενδιαφέρομαι για...',
    options: ['Κουφώματα Αλουμινίου', 'Βιοκλιματική Πέργκολα', 'Πόρτα Ασφαλείας', 'Σιδηροκατασκευές', 'Άλλο'],
    message: 'Μήνυμα (Προαιρετικό)',
    consent: 'Συμφωνώ με την',
    privacy: 'Πολιτική Απορρήτου',
    submit: 'Αποστολή Αιτήματος',
    submitting: 'Αποστολή...',
    success: 'Το μήνυμά σας εστάλη επιτυχώς! Θα επικοινωνήσουμε μαζί σας σύντομα.',
    error: 'Προέκυψε σφάλμα. Παρακαλώ δοκιμάστε ξανά ή καλέστε μας.',
    fallbackMsg: 'Η αποστολή δεν ήταν δυνατή αυτή τη στιγμή — καλέστε μας στο 28310 23897 ή στείλτε email',
    orCall: 'ή καλέστε μας άμεσα:'
  },
  en: {
    title: 'Request a Quote',
    name: 'Full Name',
    phone: 'Phone Number',
    area: 'Area',
    interest: 'I am interested in...',
    options: ['Aluminum Windows', 'Bioclimatic Pergola', 'Security Door', 'Ironworks', 'Other'],
    message: 'Message (Optional)',
    consent: 'I agree to the',
    privacy: 'Privacy Policy',
    submit: 'Send Request',
    submitting: 'Sending...',
    success: 'Your message was sent successfully! We will contact you soon.',
    error: 'An error occurred. Please try again or call us.',
    fallbackMsg: 'Sending was not possible at this time — please call us at 28310 23897 or send an email',
    orCall: 'or call us directly:'
  },
  de: {
    title: 'Angebot anfordern',
    name: 'Vollständiger Name',
    phone: 'Telefonnummer',
    area: 'Region',
    interest: 'Ich interessiere mich für...',
    options: ['Aluminiumfenster', 'Bioklimatische Pergola', 'Sicherheitstür', 'Eisenarbeiten', 'Anderes'],
    message: 'Nachricht (Optional)',
    consent: 'Ich stimme der',
    privacy: 'Datenschutzrichtlinie zu',
    submit: 'Anfrage senden',
    submitting: 'Senden...',
    success: 'Ihre Nachricht wurde erfolgreich gesendet! Wir werden uns in Kürze bei Ihnen melden.',
    error: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut oder rufen Sie uns an.',
    fallbackMsg: 'Ein Versand war zurzeit nicht möglich — bitte rufen Sie uns unter 28310 23897 an oder senden Sie eine E-Mail',
    orCall: 'oder rufen Sie uns direkt an:'
  },
  fr: {
    title: 'Demander un devis',
    name: 'Nom complet',
    phone: 'Numéro de téléphone',
    area: 'Région',
    interest: 'Je suis intéressé par...',
    options: ['Fenêtres en aluminium', 'Pergola bioclimatique', 'Porte de sécurité', 'Ferronnerie', 'Autre'],
    message: 'Message (Optionnel)',
    consent: 'J\'accepte la',
    privacy: 'Politique de confidentialité',
    submit: 'Envoyer la demande',
    submitting: 'Envoi...',
    success: 'Votre message a été envoyé avec succès ! Nous vous contacterons bientôt.',
    error: 'Une erreur s\'est produite. Veuillez réessayer ou nous appeler.',
    fallbackMsg: 'L\'envoi n\'a pas été possible pour le moment — veuillez nous appeler au 28310 23897 ou envoyer un e-mail',
    orCall: 'ou appelez-nous directement :'
  },
  nl: {
    title: 'Offerte aanvragen',
    name: 'Volledige naam',
    phone: 'Telefoonnummer',
    area: 'Regio',
    interest: 'Ik ben geïnteresseerd in...',
    options: ['Aluminium ramen', 'Bioklimatische pergola', 'Veiligheidsdeur', 'Smeedwerk', 'Anders'],
    message: 'Bericht (Optioneel)',
    consent: 'Ik ga akkoord met het',
    privacy: 'Privacybeleid',
    submit: 'Aanvraag verzenden',
    submitting: 'Verzenden...',
    success: 'Uw bericht is succesvol verzonden! We nemen spoedig contact met u op.',
    error: 'Er is een fout opgetreden. Probeer het opnieuw of bel ons.',
    fallbackMsg: 'Verzenden was op dit moment niet mogelijk — bel ons op 28310 23897 of stuur een e-mail',
    orCall: 'of bel ons direct:'
  }
};

export default function ContactForm({ lang = 'el' }: { lang?: 'el' | 'en' | 'de' | 'fr' | 'nl' }) {
  const t = dict[lang];
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    area: '',
    interest: '',
    message: '',
    consent: false,
    honeypot: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'fallback'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.status === 503) {
        setStatus('fallback');
        return;
      }

      if (!res.ok) {
        throw new Error('API Error');
      }

      setStatus('success');
      
      // Push to dataLayer for GA4
      if (typeof window !== 'undefined' && (window as any).dataLayer) {
        (window as any).dataLayer.push({ event: 'form_submit', formType: 'contact_us' });
      }

      setFormData({
        name: '',
        phone: '',
        area: '',
        interest: '',
        message: '',
        consent: false,
        honeypot: ''
      });
    } catch (err) {
      setStatus('error');
    }
  };



  return (
    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red to-navy"></div>
      <h3 className="text-3xl font-black text-navy mb-8">{t.title}</h3>
      
      {status === 'success' && (
        <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-2xl flex items-start gap-4">
          <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
          <p className="text-green-800 font-medium">{t.success}</p>
        </div>
      )}

      {status === 'error' && (
        <div className="mb-8 p-6 bg-red/10 border border-red/20 rounded-2xl text-red font-medium">
          {t.error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Honeypot field - hidden from users */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="honeypot">Leave this field blank</label>
          <input type="text" id="honeypot" name="honeypot" value={formData.honeypot} onChange={handleChange} tabIndex={-1} autoComplete="off" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-bold text-navy mb-2">{t.name} *</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-gray-50 border border-gray-200 px-5 py-3.5 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-red focus:bg-white transition-all"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-bold text-navy mb-2">{t.phone} *</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-gray-50 border border-gray-200 px-5 py-3.5 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-red focus:bg-white transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="area" className="block text-sm font-bold text-navy mb-2">{t.area} *</label>
            <input 
              type="text" 
              id="area" 
              name="area"
              required
              value={formData.area}
              onChange={handleChange}
              className="w-full bg-gray-50 border border-gray-200 px-5 py-3.5 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-red focus:bg-white transition-all"
            />
          </div>
          <div>
            <label htmlFor="interest" className="block text-sm font-bold text-navy mb-2">{t.interest} *</label>
            <select 
              id="interest" 
              name="interest"
              required
              value={formData.interest}
              onChange={handleChange}
              className="w-full bg-gray-50 border border-gray-200 px-5 py-3.5 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-red focus:bg-white transition-all appearance-none"
            >
              <option value="" disabled>-- Επιλέξτε --</option>
              {t.options.map((opt, idx) => (
                <option key={idx} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-bold text-navy mb-2">{t.message}</label>
          <textarea 
            id="message" 
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-gray-50 border border-gray-200 px-5 py-3.5 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-red focus:bg-white transition-all resize-y"
          ></textarea>
        </div>

        <div className="flex items-start gap-3">
          <input 
            type="checkbox" 
            id="consent" 
            name="consent" 
            required
            checked={formData.consent}
            onChange={handleChange}
            className="mt-1 w-5 h-5 rounded border-gray-300 text-red focus:ring-red accent-red"
          />
          <label htmlFor="consent" className="text-sm text-gray-600">
            {t.consent} <Link href={lang === 'el' ? '/el/politiki-aporritou' : `/${lang}/privacy-policy`} className="text-navy font-bold hover:text-red transition-colors underline">{t.privacy}</Link> *
          </label>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center gap-6">
          <button 
            type="submit" 
            disabled={status === 'loading'}
            className="w-full sm:w-auto px-10 py-4 bg-red text-white font-bold rounded-xl hover:bg-navy transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-red/20"
          >
            {status === 'loading' && <Loader2 size={18} className="animate-spin" />}
            {status === 'loading' ? t.submitting : t.submit}
          </button>
          
          <div className="text-sm text-gray-500 flex items-center gap-2">
            <span>{t.orCall}</span>
            <a href="tel:+302831023897" className="font-bold text-navy hover:text-red transition-colors">+30 28310 23897</a>
          </div>
        </div>
      </form>
      
      {status === 'fallback' && (
        <div className="mt-8 p-8 md:p-10 rounded-2xl bg-gray-50 border border-red/20 flex flex-col items-center text-center">
          <AlertCircle className="w-12 h-12 text-red mb-4" />
          <h3 className="text-xl font-black text-navy mb-4">{t.fallbackMsg}</h3>
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mt-2">
            <a href="tel:+302831023897" className="flex-1 flex items-center justify-center gap-3 bg-red text-white py-4 px-6 rounded-xl font-bold hover:bg-navy transition-colors">
              <Phone size={20} />
              +30 28310 23897
            </a>
            <div className="flex-1 flex items-center justify-center gap-3 bg-white border border-gray-200 text-navy py-4 px-6 rounded-xl font-bold hover:bg-gray-50 transition-colors">
              <Mail size={20} />
              <ProtectedEmail />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
