export interface SystemSpec {
  slug: string;
  name: string; // Keep SMARTIA / SUPREME as is
  
  categoryEL: string;
  categoryEN: string;
  categoryDE: string;
  categoryFR: string;
  categoryNL: string;

  shortDescEL: string;
  shortDescEN: string;
  shortDescDE: string;
  shortDescFR: string;
  shortDescNL: string;

  uw: string; // the "from X" part
  priceLevel: string; // €, €€, €€€

  featuresEL: { label: string; value: string }[];
  featuresEN: { label: string; value: string }[];
  featuresDE: { label: string; value: string }[];
  featuresFR: { label: string; value: string }[];
  featuresNL: { label: string; value: string }[];

  idealForEL: string;
  idealForEN: string;
  idealForDE: string;
  idealForFR: string;
  idealForNL: string;

  whyUsEL: string;
  whyUsEN: string;
  whyUsDE: string;
  whyUsFR: string;
  whyUsNL: string;

  imageUrl: string;
}

export const alumilSystems: SystemSpec[] = [
  {
    slug: 'smartia-s67',
    name: 'SMARTIA S67',
    
    categoryEL: 'Ανοιγόμενα Θερμομονωτικά',
    categoryEN: 'Hinged Thermal Insulating',
    categoryDE: 'Wärmedämmende Dreh-Kipp-Fenster',
    categoryFR: 'Ouvrants à Isolation Thermique',
    categoryNL: 'Draai-kiep Thermisch Isolerend',

    shortDescEL: 'Εξαιρετική θερμομόνωση και υψηλή ασφάλεια με μοντέρνο σχεδιασμό.',
    shortDescEN: 'Excellent thermal insulation and high security with a modern design.',
    shortDescDE: 'Hervorragende Wärmedämmung und hohe Sicherheit mit modernem Design.',
    shortDescFR: 'Excellente isolation thermique et haute sécurité avec un design moderne.',
    shortDescNL: 'Uitstekende thermische isolatie en hoge veiligheid met een modern design.',

    uw: '1.45',
    priceLevel: '€€',

    featuresEL: [
      { label: 'Θερμοδιακοπή', value: 'Πολυαμίδια 30mm' },
      { label: 'Αεροπερατότητα', value: 'Κλάση 4' },
      { label: 'Υδατοστεγανότητα', value: 'E1200' },
      { label: 'Ηχομείωση', value: 'Έως 45 dB' },
      { label: 'Βάρος φύλλου', value: 'Έως 180 Kg' },
    ],
    featuresEN: [
      { label: 'Thermal Break', value: 'Polyamides 30mm' },
      { label: 'Air Permeability', value: 'Class 4' },
      { label: 'Watertightness', value: 'E1200' },
      { label: 'Sound Reduction', value: 'Up to 45 dB' },
      { label: 'Sash Weight', value: 'Up to 180 Kg' },
    ],
    featuresDE: [
      { label: 'Thermische Trennung', value: 'Polyamid 30mm' },
      { label: 'Luftdurchlässigkeit', value: 'Klasse 4' },
      { label: 'Schlagregendichtheit', value: 'E1200' },
      { label: 'Schalldämmung', value: 'Bis 45 dB' },
      { label: 'Flügelgewicht', value: 'Bis 180 Kg' },
    ],
    featuresFR: [
      { label: 'Rupture Thermique', value: 'Polyamides 30mm' },
      { label: 'Perméabilité à l\'air', value: 'Classe 4' },
      { label: 'Étanchéité à l\'eau', value: 'E1200' },
      { label: 'Réduction Acoustique', value: 'Jusqu\'à 45 dB' },
      { label: 'Poids du Vantail', value: 'Jusqu\'à 180 Kg' },
    ],
    featuresNL: [
      { label: 'Thermische Onderbreking', value: 'Polyamiden 30mm' },
      { label: 'Luchtdoorlatendheid', value: 'Klasse 4' },
      { label: 'Waterdichtheid', value: 'E1200' },
      { label: 'Geluidsreductie', value: 'Tot 45 dB' },
      { label: 'Vleugelgewicht', value: 'Tot 180 Kg' },
    ],

    idealForEL: 'Ιδανικό για νέες κατοικίες και ενεργειακές αναβαθμίσεις (π.χ. Εξοικονομώ) όπου απαιτείται υψηλή απόδοση, χωρίς το premium κόστος της σειράς Supreme. Καλύπτει απόλυτα τις απαιτήσεις της Κρήτης σε αιολικά φορτία και ζέστη.',
    idealForEN: 'Ideal for new residences and energy upgrades where high performance is required, without the premium cost of the Supreme series. Perfectly covers the requirements of Crete in wind loads and heat.',
    idealForDE: 'Ideal für neue Wohnsitze und Energieaufrüstungen, bei denen hohe Leistung ohne die Premiumkosten der Supreme-Serie erforderlich ist. Erfüllt die Anforderungen Kretas bei Wind- und Hitzelasten.',
    idealForFR: 'Idéal pour les nouvelles résidences et les mises à niveau énergétiques où de hautes performances sont requises, sans le coût premium de la série Supreme. Couvre les exigences de la Crète en charges de vent.',
    idealForNL: 'Ideaal voor nieuwe woningen en energie-upgrades waar hoge prestaties vereist zijn, zonder de premiumkosten van de Supreme-serie. Voldoet aan de eisen van Kreta voor wind- en hittebelasting.',

    whyUsEL: 'Ως πιστοποιημένοι κατασκευαστές Alumil στο Ρέθυμνο, διαθέτουμε γραμμή παραγωγής υψηλής ακρίβειας. Η τοποθέτηση γίνεται με πιστοποιημένα μονωτικά υλικά (αφρούς, ταινίες) ώστε να επιτευχθεί το εργαστηριακό Uw στην πράξη.',
    whyUsEN: 'As certified Alumil manufacturers in Rethymno, we have a high-precision production line. Installation is done with certified insulating materials to achieve the laboratory Uw in practice.',
    whyUsDE: 'Als zertifizierte Alumil-Hersteller in Rethymno verfügen wir über eine hochpräzise Produktionslinie. Die Installation erfolgt mit zertifizierten Isoliermaterialien, um den Labor-Uw in der Praxis zu erreichen.',
    whyUsFR: 'En tant que fabricants certifiés Alumil à Réthymnon, nous disposons d\'une ligne de production de haute précision. L\'installation est réalisée avec des matériaux isolants pour atteindre le Uw laboratoire en pratique.',
    whyUsNL: 'Als gecertificeerde Alumil-fabrikanten in Rethymnon hebben we een uiterst precieze productielijn. De installatie gebeurt met gecertificeerde isolatiematerialen om de laboratorium-Uw in de praktijk te bereiken.',

    imageUrl: '/images/modern_aluminum_windows_1776183397754.png'
  },
  {
    slug: 'smartia-m9660',
    name: 'SMARTIA M9660',
    
    categoryEL: 'Ανοιγόμενα Θερμομονωτικά',
    categoryEN: 'Hinged Thermal Insulating',
    categoryDE: 'Wärmedämmende Dreh-Kipp-Fenster',
    categoryFR: 'Ouvrants à Isolation Thermique',
    categoryNL: 'Draai-kiep Thermisch Isolerend',

    shortDescEL: 'Η αξιόπιστη και προσιτή λύση για αντικατάσταση παλαιών κουφωμάτων.',
    shortDescEN: 'The reliable and affordable solution for replacing old windows.',
    shortDescDE: 'Die zuverlässige und erschwingliche Lösung für den Austausch alter Fenster.',
    shortDescFR: 'La solution fiable et abordable pour le remplacement des anciennes fenêtres.',
    shortDescNL: 'De betrouwbare en betaalbare oplossing voor het vervangen van oude ramen.',

    uw: '1.8',
    priceLevel: '€',

    featuresEL: [
      { label: 'Θερμοδιακοπή', value: 'Πολυαμίδια 24mm' },
      { label: 'Αεροπερατότητα', value: 'Κλάση 4' },
      { label: 'Υδατοστεγανότητα', value: 'E900' },
      { label: 'Αντοχή σε ανεμοπίεση', value: 'Κλάση C4' },
      { label: 'Βάρος φύλλου', value: 'Έως 130 Kg' },
    ],
    featuresEN: [
      { label: 'Thermal Break', value: 'Polyamides 24mm' },
      { label: 'Air Permeability', value: 'Class 4' },
      { label: 'Watertightness', value: 'E900' },
      { label: 'Wind Load Resistance', value: 'Class C4' },
      { label: 'Sash Weight', value: 'Up to 130 Kg' },
    ],
    featuresDE: [
      { label: 'Thermische Trennung', value: 'Polyamid 24mm' },
      { label: 'Luftdurchlässigkeit', value: 'Klasse 4' },
      { label: 'Schlagregendichtheit', value: 'E900' },
      { label: 'Windlastbeständigkeit', value: 'Klasse C4' },
      { label: 'Flügelgewicht', value: 'Bis 130 Kg' },
    ],
    featuresFR: [
      { label: 'Rupture Thermique', value: 'Polyamides 24mm' },
      { label: 'Perméabilité à l\'air', value: 'Classe 4' },
      { label: 'Étanchéité à l\'eau', value: 'E900' },
      { label: 'Résistance au Vent', value: 'Classe C4' },
      { label: 'Poids du Vantail', value: 'Jusqu\'à 130 Kg' },
    ],
    featuresNL: [
      { label: 'Thermische Onderbreking', value: 'Polyamiden 24mm' },
      { label: 'Luchtdoorlatendheid', value: 'Klasse 4' },
      { label: 'Waterdichtheid', value: 'E900' },
      { label: 'Windbelastingsweerstand', value: 'Klasse C4' },
      { label: 'Vleugelgewicht', value: 'Tot 130 Kg' },
    ],

    idealForEL: 'Εξαιρετική επιλογή για ανακαινίσεις διαμερισμάτων και ενοικιαζόμενα καταλύματα. Προσφέρει βασική θερμομόνωση και ηχομόνωση με πολύ ανταγωνιστικό κόστος.',
    idealForEN: 'Excellent choice for apartment renovations and rental properties. Offers basic thermal and sound insulation at a very competitive cost.',
    idealForDE: 'Hervorragende Wahl für Wohnungsrenovierungen und Mietobjekte. Bietet grundlegende Wärme- und Schalldämmung zu sehr wettbewerbsfähigen Kosten.',
    idealForFR: 'Excellent choix pour la rénovation d\'appartements et de propriétés locatives. Offre une isolation basique à un coût très compétitif.',
    idealForNL: 'Uitstekende keuze voor appartementrenovaties en huurwoningen. Biedt basale thermische en geluidsisolatie tegen zeer concurrerende kosten.',

    whyUsEL: 'Παρέχουμε γρήγορη και καθαρή αποξήλωση των παλαιών κουφωμάτων σας και αυθημερόν τοποθέτηση του νέου συστήματος, ελαχιστοποιώντας την ταλαιπωρία του χώρου σας.',
    whyUsEN: 'We provide fast and clean removal of your old frames and same-day installation of the new system, minimizing disruption to your space.',
    whyUsDE: 'Wir bieten eine schnelle und saubere Demontage Ihrer alten Rahmen und eine taggleiche Installation des neuen Systems.',
    whyUsFR: 'Nous assurons le retrait rapide de vos anciens cadres et l\'installation le jour même du nouveau système.',
    whyUsNL: 'Wij bieden snelle en schone verwijdering van uw oude kozijnen en installatie van het nieuwe systeem op dezelfde dag.',

    imageUrl: '/images/modern_aluminum_windows_1776183397754.png'
  },
  {
    slug: 'smartia-s560',
    name: 'SMARTIA S560',
    
    categoryEL: 'Ανασυρόμενα / Συρόμενα',
    categoryEN: 'Lift & Slide',
    categoryDE: 'Hebe-Schiebe-Türen',
    categoryFR: 'Levant-Coulissant',
    categoryNL: 'Hefschuifdeuren',

    shortDescEL: 'Στιβαρό ανασυρόμενο σύστημα για μεγάλα ανοίγματα με άριστη στεγάνωση.',
    shortDescEN: 'Robust lift & slide system for large openings with excellent sealing.',
    shortDescDE: 'Robustes Hebe-Schiebe-System für große Öffnungen mit hervorragender Abdichtung.',
    shortDescFR: 'Système levant-coulissant robuste pour grandes ouvertures avec une excellente étanchéité.',
    shortDescNL: 'Robuust hefschuifsysteem voor grote openingen met uitstekende afdichting.',

    uw: '1.5',
    priceLevel: '€€',

    featuresEL: [
      { label: 'Θερμοδιακοπή', value: 'Πολυαμίδια 24mm' },
      { label: 'Αεροπερατότητα', value: 'Κλάση 4' },
      { label: 'Αντοχή σε ανεμοπίεση', value: 'Κλάση C4/B4' },
      { label: 'Βάρος φύλλου', value: 'Έως 300 Kg' },
      { label: 'Τυπολογίες', value: 'Διαδοχικά, Χωνευτά, Γωνιακά' },
    ],
    featuresEN: [
      { label: 'Thermal Break', value: 'Polyamides 24mm' },
      { label: 'Air Permeability', value: 'Class 4' },
      { label: 'Wind Load Resistance', value: 'Class C4/B4' },
      { label: 'Sash Weight', value: 'Up to 300 Kg' },
      { label: 'Typologies', value: 'Successive, Pocket, Corner' },
    ],
    featuresDE: [
      { label: 'Thermische Trennung', value: 'Polyamid 24mm' },
      { label: 'Luftdurchlässigkeit', value: 'Klasse 4' },
      { label: 'Windlastbeständigkeit', value: 'Klasse C4/B4' },
      { label: 'Flügelgewicht', value: 'Bis 300 Kg' },
      { label: 'Typologien', value: 'Fortlaufend, Tasche, Ecke' },
    ],
    featuresFR: [
      { label: 'Rupture Thermique', value: 'Polyamides 24mm' },
      { label: 'Perméabilité à l\'air', value: 'Classe 4' },
      { label: 'Résistance au Vent', value: 'Classe C4/B4' },
      { label: 'Poids du Vantail', value: 'Jusqu\'à 300 Kg' },
      { label: 'Typologies', value: 'Successif, Galandage, Angle' },
    ],
    featuresNL: [
      { label: 'Thermische Onderbreking', value: 'Polyamiden 24mm' },
      { label: 'Luchtdoorlatendheid', value: 'Klasse 4' },
      { label: 'Windbelastingsweerstand', value: 'Klasse C4/B4' },
      { label: 'Vleugelgewicht', value: 'Tot 300 Kg' },
      { label: 'Typologieën', value: 'Opeenvolgend, Inbouw, Hoek' },
    ],

    idealForEL: 'Η ιδανική λύση για σαλόνια και χώρους υποδοχής που βλέπουν σε βεράντες, καθώς ο ανασυρόμενος μηχανισμός επιτρέπει εύκολη κύλιση βαρέων φύλλων με τέλεια στεγάνωση περιμετρικά.',
    idealForEN: 'The ideal solution for living rooms and reception areas facing verandas, as the lift-slide mechanism allows easy rolling of heavy sashes with perfect perimeter sealing.',
    idealForDE: 'Die ideale Lösung für Wohnzimmer mit Blick auf die Terrasse, da der Hebemechanismus ein leichtes Rollen schwerer Flügel mit perfekter Randabdichtung ermöglicht.',
    idealForFR: 'La solution idéale pour les salons face aux vérandas, car le mécanisme levant permet de rouler facilement des vantaux lourds avec une étanchéité parfaite.',
    idealForNL: 'De ideale oplossing voor woonkamers gericht op veranda\'s, aangezien het hefmechanisme zware vleugels gemakkelijk laat rollen met perfecte afdichting.',

    whyUsEL: 'Η σωστή λειτουργία ενός ανασυρόμενου 300 κιλών απαιτεί απόλυτη αλφαδιά και τεχνογνωσία στην τοποθέτηση των οδηγών. Εγγυόμαστε μηδενική τριβή και αντοχή στο χρόνο.',
    whyUsEN: 'Proper operation of a 300kg lift-slide requires absolute leveling and expertise in installing the tracks. We guarantee zero friction and long-lasting durability.',
    whyUsDE: 'Der korrekte Betrieb einer 300-kg-Hebeschiebetür erfordert absolute Nivellierung und Fachkenntnis. Wir garantieren null Reibung und lange Lebensdauer.',
    whyUsFR: 'Le fonctionnement correct nécessite un nivellement absolu. Nous garantissons zéro frottement et une durabilité à long terme.',
    whyUsNL: 'De juiste werking van een hefschuifpui van 300 kg vereist absolute waterpasstelling. Wij garanderen wrijvingsloze werking en duurzaamheid.',

    imageUrl: '/images/hero_aluminum_villa_1776110912532.png'
  },
  {
    slug: 'supreme-s700',
    name: 'SUPREME S700',
    
    categoryEL: 'Ανασυρόμενα Θερμομονωτικά',
    categoryEN: 'Premium Lift & Slide',
    categoryDE: 'Premium Hebe-Schiebe',
    categoryFR: 'Levant-Coulissant Premium',
    categoryNL: 'Premium Hefschuifdeuren',

    shortDescEL: 'Η ναυαρχίδα των ανασυρόμενων για αδιαπραγμάτευτη ποιότητα και design.',
    shortDescEN: 'The flagship lift-slide system for uncompromising quality and design.',
    shortDescDE: 'Das Flaggschiff der Hebe-Schiebe-Systeme für kompromisslose Qualität.',
    shortDescFR: 'Le système phare levant-coulissant pour une qualité sans compromis.',
    shortDescNL: 'Het vlaggenschip hefschuifsysteem voor compromisloze kwaliteit.',

    uw: '1.3',
    priceLevel: '€€€',

    featuresEL: [
      { label: 'Μηχανισμός', value: 'Ανασυρόμενος (Lift & Slide)' },
      { label: 'Αεροπερατότητα', value: 'Κλάση 4' },
      { label: 'Υδατοστεγανότητα', value: 'E900' },
      { label: 'Βάρος φύλλου', value: 'Έως 400 Kg' },
      { label: 'Κατωκάσι', value: 'Επίπεδο (Flat)' },
    ],
    featuresEN: [
      { label: 'Mechanism', value: 'Lift & Slide' },
      { label: 'Air Permeability', value: 'Class 4' },
      { label: 'Watertightness', value: 'E900' },
      { label: 'Sash Weight', value: 'Up to 400 Kg' },
      { label: 'Bottom Track', value: 'Flat' },
    ],
    featuresDE: [
      { label: 'Mechanismus', value: 'Hebe-Schiebe' },
      { label: 'Luftdurchlässigkeit', value: 'Klasse 4' },
      { label: 'Schlagregendichtheit', value: 'E900' },
      { label: 'Flügelgewicht', value: 'Bis 400 Kg' },
      { label: 'Bodenschiene', value: 'Flach' },
    ],
    featuresFR: [
      { label: 'Mécanisme', value: 'Levant-Coulissant' },
      { label: 'Perméabilité à l\'air', value: 'Classe 4' },
      { label: 'Étanchéité à l\'eau', value: 'E900' },
      { label: 'Poids du Vantail', value: 'Jusqu\'à 400 Kg' },
      { label: 'Rail Inférieur', value: 'Plat' },
    ],
    featuresNL: [
      { label: 'Mechanisme', value: 'Hefschuif' },
      { label: 'Luchtdoorlatendheid', value: 'Klasse 4' },
      { label: 'Waterdichtheid', value: 'E900' },
      { label: 'Vleugelgewicht', value: 'Tot 400 Kg' },
      { label: 'Onderrail', value: 'Vlak' },
    ],

    idealForEL: 'Βίλες, πολυτελείς κατοικίες και ξενοδοχεία υψηλών προδιαγραφών. Δημιουργεί την απόλυτη ενοποίηση εσωτερικού και εξωτερικού χώρου με επίπεδο κατωκάσι και ασύγκριτη λειτουργικότητα.',
    idealForEN: 'Villas, luxury residences, and high-end hotels. Creates the ultimate integration of indoor and outdoor space with a flat threshold and incomparable functionality.',
    idealForDE: 'Villen, Luxusresidenzen und High-End-Hotels. Schafft die ultimative Integration von Innen- und Außenbereich mit einer flachen Schwelle.',
    idealForFR: 'Villas, résidences de luxe et hôtels haut de gamme. Crée l\'intégration ultime de l\'espace intérieur et extérieur avec un seuil plat.',
    idealForNL: 'Villa\'s, luxe residenties en high-end hotels. Creëert de ultieme integratie van binnen- en buitenruimte met een vlakke drempel.',

    whyUsEL: 'Αναλαμβάνουμε την πλήρη μελέτη κατασκευής για συστήματα μεγάλων διαστάσεων, διασφαλίζοντας την ενσωμάτωση του κατωκασίου στο δάπεδο για άψογο, minimal αποτέλεσμα.',
    whyUsEN: 'We undertake the complete construction study for large dimension systems, ensuring the integration of the threshold into the floor for a flawless, minimal result.',
    whyUsDE: 'Wir übernehmen die komplette Konstruktionsstudie für groß dimensionierte Systeme und sorgen für die Integration der Schwelle in den Boden.',
    whyUsFR: 'Nous entreprenons l\'étude complète de construction pour les systèmes de grandes dimensions, assurant l\'intégration du seuil dans le sol.',
    whyUsNL: 'Wij verzorgen de complete bouwstudie voor grote systemen en zorgen voor de integratie van de drempel in de vloer.',

    imageUrl: '/images/hero_aluminum_villa_1776110912532.png'
  },
  {
    slug: 'supreme-s650',
    name: 'SUPREME S650',
    
    categoryEL: 'Minimal Συρόμενα',
    categoryEN: 'Minimal Sliding',
    categoryDE: 'Minimalistische Schiebetüren',
    categoryFR: 'Coulissant Minimaliste',
    categoryNL: 'Minimalistische Schuifdeuren',

    shortDescEL: 'Αόρατο αλουμίνιο, μέγιστη θέα. Το απόλυτο minimal σύστημα.',
    shortDescEN: 'Invisible aluminum, maximum view. The ultimate minimal system.',
    shortDescDE: 'Unsichtbares Aluminium, maximale Sicht. Das ultimative Minimal-System.',
    shortDescFR: 'Aluminium invisible, vue maximale. Le système minimal ultime.',
    shortDescNL: 'Onzichtbaar aluminium, maximaal uitzicht. Het ultieme minimal systeem.',

    uw: '1.1',
    priceLevel: '€€€',

    featuresEL: [
      { label: 'Εμφανές Αλουμίνιο', value: 'Μόλις 25mm (στο κέντρο)' },
      { label: 'Οδηγοί', value: 'Πλήρως χωνευτοί σε τοίχο & δάπεδο' },
      { label: 'Υδατοστεγανότητα', value: 'Κλάση 9A' },
      { label: 'Αεροπερατότητα', value: 'Κλάση 4' },
      { label: 'Βάρος φύλλου', value: 'Έως 1000 Kg (ηλεκτροκίνητο)' },
    ],
    featuresEN: [
      { label: 'Visible Aluminum', value: 'Only 25mm (center)' },
      { label: 'Tracks', value: 'Fully concealed in wall & floor' },
      { label: 'Watertightness', value: 'Class 9A' },
      { label: 'Air Permeability', value: 'Class 4' },
      { label: 'Sash Weight', value: 'Up to 1000 Kg (motorized)' },
    ],
    featuresDE: [
      { label: 'Sichtbares Aluminium', value: 'Nur 25mm (Mitte)' },
      { label: 'Schienen', value: 'Vollständig in Wand und Boden verdeckt' },
      { label: 'Schlagregendichtheit', value: 'Klasse 9A' },
      { label: 'Luftdurchlässigkeit', value: 'Klasse 4' },
      { label: 'Flügelgewicht', value: 'Bis 1000 Kg (motorisiert)' },
    ],
    featuresFR: [
      { label: 'Aluminium Visible', value: 'Seulement 25mm (centre)' },
      { label: 'Rails', value: 'Entièrement dissimulés dans le mur et sol' },
      { label: 'Étanchéité à l\'eau', value: 'Classe 9A' },
      { label: 'Perméabilité à l\'air', value: 'Classe 4' },
      { label: 'Poids du Vantail', value: 'Jusqu\'à 1000 Kg (motorisé)' },
    ],
    featuresNL: [
      { label: 'Zichtbaar Aluminium', value: 'Slechts 25mm (midden)' },
      { label: 'Rails', value: 'Volledig verborgen in muur en vloer' },
      { label: 'Waterdichtheid', value: 'Klasse 9A' },
      { label: 'Luchtdoorlatendheid', value: 'Klasse 4' },
      { label: 'Vleugelgewicht', value: 'Tot 1000 Kg (gemotoriseerd)' },
    ],

    idealForEL: 'Αρχιτεκτονικά έργα αιχμής όπου το ζητούμενο είναι η απρόσκοπτη θέα χωρίς ορατά πλαίσια. Μονόδρομος για βίλες με "infinity" αισθητική.',
    idealForEN: 'Cutting-edge architectural projects where the goal is an unobstructed view without visible frames. Essential for villas with an "infinity" aesthetic.',
    idealForDE: 'Modernste Architekturprojekte, bei denen eine ungehinderte Sicht ohne sichtbare Rahmen das Ziel ist.',
    idealForFR: 'Projets architecturaux de pointe où le but est une vue imprenable sans cadres visibles.',
    idealForNL: 'Grensverleggende architectuurprojecten waarbij het doel een vrij uitzicht zonder zichtbare kozijnen is.',

    whyUsEL: 'Η εγκατάσταση minimal συστημάτων (phos) απαιτεί συνεργασία με τον εργολάβο του έργου από το στάδιο των μπετών. Η ομάδα μας παρέχει πλήρη τεχνική καθοδήγηση από την αρχή του έργου.',
    whyUsEN: 'The installation of minimal (phos) systems requires collaboration with the project contractor from the concrete stage. We provide full technical guidance.',
    whyUsDE: 'Die Installation erfordert die Zusammenarbeit mit dem Bauunternehmer ab der Betonphase. Wir bieten vollständige technische Anleitung.',
    whyUsFR: 'L\'installation nécessite une collaboration avec l\'entrepreneur dès l\'étape du béton. Nous fournissons des conseils techniques complets.',
    whyUsNL: 'De installatie vereist samenwerking met de aannemer vanaf de betonfase. Wij bieden volledige technische begeleiding.',

    imageUrl: '/images/hero_aluminum_villa_1776110912532.png'
  },
  {
    slug: 'smartia-pergoles',
    name: 'SMARTIA Βιοκλιματικές Πέργκολες',
    
    categoryEL: 'Συστήματα Σκίασης',
    categoryEN: 'Shading Systems',
    categoryDE: 'Beschattungssysteme',
    categoryFR: 'Systèmes d\'Ombrage',
    categoryNL: 'Schaduwsystemen',

    shortDescEL: 'Ρυθμιζόμενη σκίαση, στεγανότητα και ενσωματωμένος φωτισμός LED.',
    shortDescEN: 'Adjustable shading, watertightness, and integrated LED lighting.',
    shortDescDE: 'Verstellbare Beschattung, Wasserdichtigkeit und integrierte LED-Beleuchtung.',
    shortDescFR: 'Ombrage réglable, étanchéité et éclairage LED intégré.',
    shortDescNL: 'Verstelbare schaduw, waterdichtheid en geïntegreerde LED-verlichting.',

    uw: '-',
    priceLevel: '€€€',

    featuresEL: [
      { label: 'Περσίδες', value: 'Κινητές αλουμινίου' },
      { label: 'Στεγανότητα', value: 'Κρυφό σύστημα απορροής υδάτων' },
      { label: 'Αυτοματισμοί', value: 'Μοτέρ, αισθητήρες βροχής/αέρα' },
      { label: 'Αντοχή σε αέρα', value: 'Βαρέως τύπου' },
      { label: 'Πρόσθετα', value: 'Κάθετα ZIP screens, Φωτισμός' },
    ],
    featuresEN: [
      { label: 'Louvers', value: 'Mobile aluminum' },
      { label: 'Watertightness', value: 'Hidden water drainage system' },
      { label: 'Automations', value: 'Motors, rain/wind sensors' },
      { label: 'Wind Resistance', value: 'Heavy duty' },
      { label: 'Add-ons', value: 'Vertical ZIP screens, Lighting' },
    ],
    featuresDE: [
      { label: 'Lamellen', value: 'Bewegliches Aluminium' },
      { label: 'Wasserdichtigkeit', value: 'Verdecktes Entwässerungssystem' },
      { label: 'Automatisierung', value: 'Motoren, Regen-/Windsensoren' },
      { label: 'Windbeständigkeit', value: 'Schwerlast' },
      { label: 'Zubehör', value: 'Vertikale ZIP-Screens, Beleuchtung' },
    ],
    featuresFR: [
      { label: 'Lames', value: 'Aluminium mobiles' },
      { label: 'Étanchéité', value: 'Système de drainage caché' },
      { label: 'Automatisations', value: 'Moteurs, capteurs de pluie/vent' },
      { label: 'Résistance au vent', value: 'Usage intensif' },
      { label: 'Options', value: 'Écrans ZIP verticaux, Éclairage' },
    ],
    featuresNL: [
      { label: 'Lamellen', value: 'Beweegbaar aluminium' },
      { label: 'Waterdichtheid', value: 'Verborgen waterafvoersysteem' },
      { label: 'Automatisering', value: 'Motoren, regen-/windsensoren' },
      { label: 'Windweerstand', value: 'Heavy duty' },
      { label: 'Extra\'s', value: 'Verticale ZIP-schermen, Verlichting' },
    ],

    idealForEL: 'Ημι-υπαίθριους χώρους εστίασης, ξενοδοχεία και βεράντες κατοικιών που επιθυμούν πλήρη εκμετάλλευση του χώρου 365 μέρες το χρόνο.',
    idealForEN: 'Semi-outdoor dining areas, hotels, and residential verandas desiring full use of the space 365 days a year.',
    idealForDE: 'Halb im Freien liegende Essbereiche, Hotels und Veranden für die ganzjährige Nutzung.',
    idealForFR: 'Espaces de restauration semi-extérieurs, hôtels et vérandas pour une utilisation toute l\'année.',
    idealForNL: 'Semi-outdoor eetruimtes, hotels en veranda\'s voor het hele jaar door gebruik.',

    whyUsEL: 'Μελετάμε τις ανεμοπιέσεις της περιοχής σας στην Κρήτη και προτείνουμε το κατάλληλο μοντέλο (π.χ. PG120P ή PG160P). Ενσωματώνουμε τον φωτισμό και τους αυτοματισμούς με δικούς μας έμπειρους τεχνικούς.',
    whyUsEN: 'We study the wind pressures of your area in Crete and propose the appropriate model. We integrate lighting and automations with our own experienced technicians.',
    whyUsDE: 'Wir studieren die Winddrücke in Ihrer Region und schlagen das passende Modell vor. Wir integrieren Beleuchtung und Automatisierung.',
    whyUsFR: 'Nous étudions les pressions du vent dans votre région et proposons le modèle approprié. Nous intégrons l\'éclairage et les automatisations.',
    whyUsNL: 'Wij bestuderen de winddruk in uw regio en stellen het juiste model voor. Wij integreren verlichting en automatisering.',

    imageUrl: '/images/hero_aluminum_villa_1776110912532.png'
  }
];
