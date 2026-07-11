export type ProjectType = 'real' | 'render';

export interface Project {
  slug: string;
  type: ProjectType;
  category: string; // for filtering
  systemSlug?: string; // e.g., 'smartia-s67'
  
  // Multilingual content
  titleEL: string;
  titleEN: string;
  titleDE: string;
  titleFR: string;
  titleNL: string;
  
  descEL: string;
  descEN: string;
  descDE: string;
  descFR: string;
  descNL: string;

  // Render specific content (what the construction includes, technical capabilities)
  featuresEL: string[];
  featuresEN: string[];
  featuresDE: string[];
  featuresFR: string[];
  featuresNL: string[];

  // Real project specific content (optional)
  location?: string;
  date?: string;
  challengeEL?: string;
  solutionEL?: string;
  challengeEN?: string;
  solutionEN?: string;
  // ... and other languages as needed
}

export const projects: Project[] = [
  {
    slug: 'energeiaka-koufomata',
    type: 'render',
    category: 'Κουφώματα',
    systemSlug: 'smartia-s67',
    titleEL: 'Ενεργειακά Κουφώματα Υψηλών Προδιαγραφών',
    titleEN: 'High-Specification Energy Efficient Windows',
    titleDE: 'Hochwertige energieeffiziente Fenster',
    titleFR: 'Fenêtres Écoénergétiques Haute Spécification',
    titleNL: 'Hoogwaardige Energiezuinige Ramen',
    
    descEL: 'Εγκατάσταση θερμομονωτικών κουφωμάτων αλουμινίου σε σύγχρονη κρητική κατοικία. Πλήρης ενεργειακή αναβάθμιση με ενεργειακούς υαλοπίνακες για μέγιστη απόδοση.',
    descEN: 'Installation of thermal insulating aluminum frames in a modern Cretan residence. Full energy upgrade with energy-efficient glazing for maximum performance.',
    descDE: 'Installation von wärmedämmenden Aluminiumrahmen in einer modernen kretischen Residenz. Vollständiges Energie-Upgrade mit energieeffizienter Verglasung.',
    descFR: 'Installation de cadres en aluminium à isolation thermique dans une résidence crétoise moderne. Mise à niveau énergétique avec double vitrage.',
    descNL: 'Installatie van thermisch isolerende aluminium kozijnen in een moderne Kretenzische residentie. Volledige energie-upgrade met energiezuinige beglazing.',
    
    featuresEL: ['Θερμοδιακοπή', 'Διπλοί Ενεργειακοί Υαλοπίνακες', 'Περιμετρικός Μηχανισμός Ασφαλείας'],
    featuresEN: ['Thermal Break', 'Double Energy Glazing', 'Perimeter Security Mechanism'],
    featuresDE: ['Thermische Trennung', 'Doppel-Isolierverglasung', 'Umlaufender Sicherheitsmechanismus'],
    featuresFR: ['Rupture de Pont Thermique', 'Double Vitrage Énergétique', 'Mécanisme de Sécurité Périmétrique'],
    featuresNL: ['Thermische Onderbreking', 'Dubbele Energiebeglazing', 'Perimeter Veiligheidsmechanisme']
  },
  {
    slug: 'minimal-syromena',
    type: 'render',
    category: 'Κουφώματα',
    systemSlug: 'supreme-s650',
    titleEL: 'Minimal Συρόμενα Συστήματα',
    titleEN: 'Minimal Sliding Systems',
    titleDE: 'Minimalistische Schiebesysteme',
    titleFR: 'Systèmes Coulissants Minimalistes',
    titleNL: 'Minimalistische Schuifsystemen',
    
    descEL: 'Υπερμεγέθη minimal συρόμενα συστήματα αλουμινίου που προσφέρουν απρόσκοπτη θέα και ενοποιούν απόλυτα τον εσωτερικό με τον εξωτερικό χώρο, ιδανικά για βίλες.',
    descEN: 'Oversized minimal aluminum sliding systems offering unobstructed views and perfectly unifying the interior with the exterior space, ideal for villas.',
    descDE: 'Übergroße minimalistische Aluminium-Schiebesysteme, die einen ungehinderten Blick bieten und den Innen- mit dem Außenbereich perfekt verbinden.',
    descFR: 'Systèmes coulissants minimalistes surdimensionnés offrant des vues imprenables et unifiant parfaitement l\'intérieur et l\'extérieur.',
    descNL: 'Grote minimalistische aluminium schuifsystemen die een vrij uitzicht bieden en binnen naadloos met buiten verbinden.',
    
    featuresEL: ['Κρυφοί Οδηγοί στο Δάπεδο', 'Ελάχιστο Εμφανές Αλουμίνιο 25mm', 'Υψηλή Αντοχή σε Ανεμοπίεση'],
    featuresEN: ['Concealed Floor Tracks', 'Minimal Visible Aluminum 25mm', 'High Wind Load Resistance'],
    featuresDE: ['Verdeckte Bodenschienen', 'Minimal sichtbares Aluminium 25mm', 'Hohe Windlastbeständigkeit'],
    featuresFR: ['Rails Disimulés au Sol', 'Aluminium Visible Minimal 25mm', 'Haute Résistance au Vent'],
    featuresNL: ['Verborgen Vloerrails', 'Minimaal Zichtbaar Aluminium 25mm', 'Hoge Windbelastingsweerstand']
  },
  {
    slug: 'vioklimatiki-pergola',
    type: 'render',
    category: 'Πέργκολες',
    systemSlug: 'smartia-pergoles',
    titleEL: 'Βιοκλιματική Πέργκολα με Περιστρεφόμενες Περσίδες',
    titleEN: 'Bioclimatic Pergola with Rotating Louvers',
    titleDE: 'Bioklimatische Pergola mit drehbaren Lamellen',
    titleFR: 'Pergola Bioclimatique à Lames Orientables',
    titleNL: 'Bioklimatische Pergola met Draaibare Lamellen',
    
    descEL: 'Σύγχρονη βιοκλιματική πέργκολα κατασκευασμένη εξολοκλήρου από αλουμίνιο. Προσφέρει πλήρη προστασία από τον ήλιο και τη βροχή με ρυθμιζόμενες περσίδες.',
    descEN: 'Modern bioclimatic pergola made entirely of aluminum. Offers complete sun and rain protection with adjustable rotating louvers.',
    descDE: 'Moderne bioklimatische Pergola komplett aus Aluminium. Bietet vollständigen Sonnen- und Regenschutz durch verstellbare Lamellen.',
    descFR: 'Pergola bioclimatique moderne entièrement en aluminium. Offre une protection totale contre le soleil et la pluie avec des lames orientables.',
    descNL: 'Moderne bioklimatische pergola volledig uit aluminium. Biedt volledige bescherming tegen zon en regen met verstelbare lamellen.',
    
    featuresEL: ['Κινητές Περσίδες 0-135 Μοίρες', 'Κρυφό Σύστημα Απορροής Υδάτων', 'Αυτοματισμοί και Αισθητήρες Καιρού'],
    featuresEN: ['Motorized Louvers 0-135 Degrees', 'Hidden Water Drainage System', 'Automation and Weather Sensors'],
    featuresDE: ['Motorisierte Lamellen 0-135 Grad', 'Verdecktes Entwässerungssystem', 'Automatisierung und Wettersensoren'],
    featuresFR: ['Lames Motorisées 0-135 Degrés', 'Système de Drainage d\'Eau Invisible', 'Automatisation et Capteurs Météo'],
    featuresNL: ['Gemotoriseerde Lamellen 0-135 Graden', 'Verborgen Waterafvoersysteem', 'Automatisering en Weersensoren']
  },
  {
    slug: 'thorakismeni-porta',
    type: 'render',
    category: 'Πόρτες',
    titleEL: 'Θωρακισμένη Πόρτα Ασφαλείας',
    titleEN: 'Armored Security Door',
    titleDE: 'Gepanzerte Sicherheitstür',
    titleFR: 'Porte de Sécurité Blindée',
    titleNL: 'Gepantserde Veiligheidsdeur',
    
    descEL: 'Επιβλητική είσοδος με θωρακισμένη πόρτα ασφαλείας μοντέρνου σχεδιασμού. Διαθέτει κλειδαριές νέας γενιάς και κορυφαία θερμομόνωση.',
    descEN: 'Imposing entrance with a modern armored security door. Features next-generation locks and premium thermal insulation.',
    descDE: 'Imposanter Eingang mit moderner gepanzerter Sicherheitstür. Verfügt über Schlösser der nächsten Generation und erstklassige Wärmedämmung.',
    descFR: 'Entrée imposante avec une porte blindée moderne. Équipée de serrures de nouvelle génération et d\'une isolation thermique premium.',
    descNL: 'Imposante entree met een moderne gepantserde veiligheidsdeur. Voorzien van de nieuwste generatie sloten en premium thermische isolatie.',
    
    featuresEL: ['Θωράκιση Κλάσης 3/4', 'Κλειδαριά Defender', 'Εξωτερική Επένδυση Αλουμινίου'],
    featuresEN: ['Class 3/4 Armor', 'Defender Lock System', 'Exterior Aluminum Panel'],
    featuresDE: ['Klasse 3/4 Panzerung', 'Defender Schließsystem', 'Aluminium-Außenverkleidung'],
    featuresFR: ['Blindage Classe 3/4', 'Serrure Defender', 'Revêtement Extérieur en Aluminium'],
    featuresNL: ['Klasse 3/4 Bepantsering', 'Defender Slotsysteem', 'Aluminium Buitenpaneel']
  },
  {
    slug: 'sidirokataskevi-kagkela',
    type: 'render',
    category: 'Σιδηροκατασκευές',
    titleEL: 'Σιδηροκατασκευή & Κάγκελα',
    titleEN: 'Ironworks & Railings',
    titleDE: 'Eisenarbeiten & Geländer',
    titleFR: 'Ferronnerie & Garde-corps',
    titleNL: 'IJzerwerk & Balustrades',
    
    descEL: 'Minimal κατασκευή σταθαρού κιγκλιδώματος συνδυάζοντας αλουμίνιο και γυαλί για μέγιστη ασφάλεια χωρίς συμβιβασμούς στη θέα.',
    descEN: 'Minimal construction of fixed railings combining aluminum and glass for maximum safety without compromising the view.',
    descDE: 'Minimalistische Konstruktion von festen Geländern aus einer Kombination von Aluminium und Glas für maximale Sicherheit ohne Einschränkung der Sicht.',
    descFR: 'Construction minimaliste de garde-corps fixes combinant aluminium et verre pour une sécurité maximale sans compromettre la vue.',
    descNL: 'Minimalistische constructie van vaste balustrades die aluminium en glas combineren voor maximale veiligheid zonder in te leveren op het uitzicht.',
    
    featuresEL: ['Ηλεκτροστατική Βαφή Seaside Class', 'Κρύσταλλα Triplex Securit', 'Αντοχή σε Ανεμοπίεση'],
    featuresEN: ['Seaside Class Powder Coating', 'Triplex Securit Glass', 'Wind Load Resistance'],
    featuresDE: ['Pulverbeschichtung Seaside Class', 'Triplex Securit Glas', 'Windlastbeständigkeit'],
    featuresFR: ['Peinture Poudre Seaside Class', 'Verre Triplex Securit', 'Résistance au Vent'],
    featuresNL: ['Poedercoating Seaside Class', 'Triplex Securit Glas', 'Windbelastingsweerstand']
  },
  {
    slug: 'rola-sites',
    type: 'render',
    category: 'Ρολά',
    titleEL: 'Ρολά και Σίτες Σκίασης',
    titleEN: 'Roller Shutters and Insect Screens',
    titleDE: 'Rollläden und Insektenschutzgitter',
    titleFR: 'Volets Roulants et Moustiquaires',
    titleNL: 'Rolluiken en Horren',
    
    descEL: 'Ολοκληρωμένη λύση σκίασης και προστασίας με ηλεκτροκίνητα ρολά αλουμινίου και ενσωματωμένες σίτες, ιδανικό για μεσογειακό κλίμα.',
    descEN: 'Complete shading and protection solution with motorized aluminum roller shutters and integrated insect screens, ideal for the Mediterranean climate.',
    descDE: 'Komplette Beschattungs- und Schutzlösung mit motorisierten Aluminium-Rollläden und integrierten Insektenschutzgittern.',
    descFR: 'Solution complète d\'ombrage et de protection avec volets roulants en aluminium motorisés et moustiquaires intégrées.',
    descNL: 'Complete oplossing voor schaduw en bescherming met gemotoriseerde aluminium rolluiken en geïntegreerde horren.',
    
    featuresEL: ['Αθόρυβα Ηλεκτρικά Μοτέρ', 'Φυλλαράκια Αλουμινίου Πολυουρεθάνης', 'Σίτες Plisse'],
    featuresEN: ['Silent Electric Motors', 'Polyurethane Aluminum Slats', 'Plisse Insect Screens'],
    featuresDE: ['Leise Elektromotoren', 'Aluminium-Lamellen mit Polyurethan', 'Plisse Insektenschutzgitter'],
    featuresFR: ['Moteurs Électriques Silencieux', 'Lames en Aluminium Polyuréthane', 'Moustiquaires Plissées'],
    featuresNL: ['Stille Elektrische Motoren', 'Aluminium Lamellen met Polyurethaan', 'Plisse Horren']
  }
];
