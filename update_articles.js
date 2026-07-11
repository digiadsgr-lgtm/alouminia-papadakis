const fs = require('fs');

const articles = [
  {
    slug: 'vioklimatiki-pergola-i-tentopergola',
    titleEL: 'Βιοκλιματική Πέργκολα ή Τεντοπέργκολα; Η Ειλικρινής Σύγκριση για την Κρήτη',
    titleEN: 'Bioclimatic Pergola or Tent Pergola? The Honest Comparison for Crete',
    descriptionEL: 'Αναλυτική σύγκριση ανάμεσα σε βιοκλιματική πέργκολα αλουμινίου και τεντοπέργκολα. Μάθετε τις διαφορές σε τιμή, αντοχή σε ανέμους/αλμύρα, στεγανότητα και συντήρηση.',
    descriptionEN: 'Detailed comparison between aluminum bioclimatic pergolas and tent pergolas. Learn the differences in price, wind/salt resistance, watertightness, and maintenance.',
    date: '2026-07-11',
    dateModified: '2026-07-11',
    image: '/images/blog_pergola.webp',
    relatedSlugs: ['exoikonomo-2026-koufomata-kriti', 'times-koufomata-alouminiou-odigos-kostous'],
    relatedService: '/services/pergoles-rethymno-kriti',
    faqEL: [
      { q: "Χρειάζεται άδεια η βιοκλιματική πέργκολα;", a: "Συνήθως απαιτείται έγκριση εργασιών μικρής κλίμακας, μια σχετικά απλή διαδικασία στην οποία σας καθοδηγούμε πλήρως." },
      { q: "Αντέχει στους ανέμους της Κρήτης;", a: "Ναι, γίνεται ειδική στατική μελέτη και τοποθετούνται αισθητήρες ανέμου που ανοίγουν τις περσίδες για προστασία σε ακραία μποφόρ." },
      { q: "Μπορεί να κλείσει περιμετρικά;", a: "Βεβαίως. Μπορούμε να προσθέσουμε γυάλινες συρόμενες πλευρές (sliding glass doors) ή κάθετα συστήματα σκίασης (zip screens)." },
      { q: "Σε πόσο χρόνο τοποθετείται;", a: "Η κατασκευή στη μονάδα μας διαρκεί 2-4 εβδομάδες, ενώ η τοποθέτηση στον χώρο σας ολοκληρώνεται συνήθως σε 1-2 ημέρες." }
    ],
    faqEN: [
      { q: "Does a bioclimatic pergola require a building permit?", a: "Usually a small-scale works approval is required, a relatively simple process which we can guide you through." },
      { q: "Can it withstand the high winds in Crete?", a: "Yes, it is structurally engineered and equipped with wind sensors that automatically open the louvers for protection during extreme winds." },
      { q: "Can it be enclosed on the sides?", a: "Absolutely. We can add sliding glass doors or vertical shading systems (zip screens) to fully enclose the space." },
      { q: "How long does installation take?", a: "Fabrication at our facility takes 2-4 weeks, and on-site installation is typically completed in 1-2 days." }
    ],
    contentEL: `
      <p>Η επιλογή του κατάλληλου συστήματος σκίασης στην Κρήτη είναι συχνά ένα μεγάλο δίλημμα. Το έντονο ηλιακό φως, οι δυνατοί άνεμοι και η αλμύρα της θάλασσας απαιτούν λύσεις που αντέχουν. Οι περισσότεροι ιδιοκτήτες κατοικιών και ξενοδοχείων στο Ρέθυμνο και σε όλο το νησί αναρωτιούνται: <strong>βιοκλιματική πέργκολα ή τεντοπέργκολα;</strong></p>
      
      <p>Η βασική διαφορά έγκειται στην τεχνολογία και το κόστος. Αναγνωρίζουμε ότι η απόφαση δεν είναι εύκολη. Στο παρόν άρθρο αναλύουμε με απόλυτη ειλικρίνεια τα υπέρ, τα κατά, το κόστος και τη διάρκεια ζωής της κάθε επιλογής, ώστε να κάνετε την καλύτερη επένδυση για το ακίνητό σας.</p>

      <h2>Τι είναι το καθένα;</h2>
      <p>Η <strong><a href="/el/systimata-alumil/smartia-pergoles">βιοκλιματική πέργκολα</a></strong> κατασκευάζεται 100% από αλουμίνιο (πλαίσιο και κινητές περσίδες). Οι περσίδες περιστρέφονται προσφέροντας φυσικό εξαερισμό (βιοκλιματική δράση) και όταν κλείνουν σφραγίζουν στεγανά, με το οποίο απορρέει μέσα από κρυφές υδρορροές στις κολώνες.</p>
      <p>Η <strong>τεντοπέργκολα</strong> αποτελείται συνήθως από μεταλλικό ή αλουμινένιο σκελετό, ενώ η οροφή της καλύπτεται από ανθεκτικό ύφασμα (PVC) που ανοιγοκλείνει μέσω ηλεκτρικού μοτέρ, μαζεύοντας σε «κύματα» (πτυσσόμενη).</p>

      <h2>Πίνακας Σύγκρισης 8 Κρίσιμων Κριτηρίων</h2>
      <div class="overflow-x-auto my-8">
        <table class="w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden">
          <thead>
            <tr class="bg-white/10">
              <th class="p-4 border-b border-white/10 font-bold text-white">Κριτήριο</th>
              <th class="p-4 border-b border-white/10 font-bold text-red-400">Βιοκλιματική Πέργκολα</th>
              <th class="p-4 border-b border-white/10 font-bold text-gray-300">Τεντοπέργκολα</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-white/10">
            <tr><td class="p-4 font-bold text-gray-400">1. Αρχικό Κόστος</td><td class="p-4">Υψηλό (Premium επένδυση)</td><td class="p-4">Μέτριο έως χαμηλό</td></tr>
            <tr><td class="p-4 font-bold text-gray-400">2. Διάρκεια Ζωής</td><td class="p-4">Δεκαετίες (το αλουμίνιο δεν φθείρεται)</td><td class="p-4">10-15 χρόνια (το πανί χρειάζεται αλλαγή)</td></tr>
            <tr><td class="p-4 font-bold text-gray-400">3. Αντοχή σε Ανέμους</td><td class="p-4">Άριστη (αντέχει σε θυελλώδεις ανέμους)</td><td class="p-4">Καλή (το πανί καταπονείται στα μποφόρ)</td></tr>
            <tr><td class="p-4 font-bold text-gray-400">4. Αντοχή στην Αλμύρα</td><td class="p-4">Άριστη (ανοδίωση Seaside Class)</td><td class="p-4">Μέτρια (τα εξαρτήματα και οι οδηγοί φθείρονται)</td></tr>
            <tr><td class="p-4 font-bold text-gray-400">5. Στεγανότητα τον Χειμώνα</td><td class="p-4">Πλήρης στεγάνωση με κλειστές περσίδες</td><td class="p-4">Καλή, αλλά το πανί συγκρατεί υγρασία/ρύπους</td></tr>
            <tr><td class="p-4 font-bold text-gray-400">6. Απαιτήσεις Συντήρησης</td><td class="p-4">Ελάχιστες (απλό πλύσιμο με νερό)</td><td class="p-4">Συχνός καθαρισμός πανιού, λίπανση οδηγών</td></tr>
            <tr><td class="p-4 font-bold text-gray-400">7. Αξία Ακινήτου</td><td class="p-4">Αυξάνει την εμπορική αξία του σπιτιού</td><td class="p-4">Ουδέτερη επίδραση</td></tr>
            <tr><td class="p-4 font-bold text-gray-400">8. Αδειοδότηση</td><td class="p-4">Μικρής Κλίμακας (συχνά)</td><td class="p-4">Συνήθως δεν απαιτεί (υπό προϋποθέσεις)</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Πότε αξίζει να επιλέξετε Τεντοπέργκολα;</h2>
      <p>Αν και στο Αλουμίνια Παπαδάκης ειδικευόμαστε στις <a href="/el/services/pergoles-rethymno-kriti">πέργκολες αλουμινίου στο Ρέθυμνο</a>, η ειλικρίνεια μας επιβάλλει να αναγνωρίσουμε πότε η τεντοπέργκολα έχει νόημα. Είναι ιδανική λύση για:</p>
      <ul>
        <li><strong>Προσωρινές λύσεις:</strong> Αν νοικιάζετε το χώρο και θέλετε μια άμεση, οικονομική λύση σκίασης.</li>
        <li><strong>Μικρός προϋπολογισμός:</strong> Όταν το αρχικό budget είναι περιορισμένο και δεν δικαιολογεί το κόστος μιας πλήρους κατασκευής αλουμινίου.</li>
        <li><strong>Εποχιακά καταστήματα:</strong> Που λειτουργούν μόνο το καλοκαίρι και μπορούν να μαζεύουν το πανί τον χειμώνα για προστασία από τη φθορά.</li>
      </ul>

      <h2>Πότε η Βιοκλιματική Πέργκολα είναι Μονόδρομος;</h2>
      <p>Αν το ακίνητό σας είναι μόνιμη κατοικία, βίλα, ή ξενοδοχείο υψηλών προδιαγραφών στην Κρήτη, η βιοκλιματική πέργκολα δεν είναι απλά μια επιλογή, είναι η <em>μόνη</em> λύση που βγάζει νόημα μακροπρόθεσμα. Ο λόγος; <strong>Οι άνεμοι και η αλμύρα.</strong></p>
      <p>Στη νότια και βόρεια Κρήτη, ένα σύστημα με πανί θα δοκιμαστεί σκληρά από τους αέρηδες. Η βιοκλιματική πέργκολα αλουμινίου, εξοπλισμένη με αισθητήρες αέρα, προσαρμόζει τις περσίδες της ώστε να μην καταπονείται. Επιπλέον, μετατρέπει μια απλή βεράντα σε ένα πραγματικό «δωμάτιο» που μπορείτε να χρησιμοποιείτε 365 μέρες τον χρόνο, προστατευμένο από βροχή και καύσωνα.</p>

      <h2>Το πραγματικό Κόστος Κύκλου Ζωής (15ετία)</h2>
      <p>Πολλοί πελάτες στέκονται στην αρχική <strong>διαφορά βιοκλιματικής - τεντοπέργκολας (τιμή)</strong>, χωρίς να υπολογίζουν τη συντήρηση.</p>
      <p>Μια τεντοπέργκολα σε 15 χρόνια θα χρειαστεί τουλάχιστον 2 (ίσως και 3) αλλαγές πανιού λόγω σκισιμάτων από τον αέρα, φθοράς από τον ήλιο (UV) ή εμφάνισης μούχλας/βρωμιάς που δεν καθαρίζει. Επιπλέον, το μοτέρ της καταπονείται πολύ περισσότερο λόγω της επιφάνειας του πανιού.</p>
      <p>Αντίθετα, η βιοκλιματική πέργκολα Alumil (με επεξεργασία Seaside Class) στα 15 χρόνια δεν θα έχει χρειαστεί απολύτως τίποτα πέρα από πλύσιμο με λάστιχο νερού. Αν υπολογίσετε το κόστος αλλαγής πανιών και τα μεροκάματα των τεχνικών σε βάθος χρόνου, η διαφορά κόστους μικραίνει δραστικά — και συχνά μηδενίζεται, με τη διαφορά ότι στη βιοκλιματική απολαμβάνατε επί 15 χρόνια premium αισθητική και σταθερή, στιβαρή κατασκευή.</p>

      <h2>Ανακεφαλαίωση</h2>
      <p>Αν αναζητάτε κάτι φθηνό και βραχυπρόθεσμο, η τεντοπέργκολα είναι καλή επιλογή. Αν όμως επενδύετε στο σπίτι σας, επιθυμείτε μηδενική συντήρηση και θέλετε το ακίνητό σας να κερδίσει σε εμπορική αξία και λειτουργικότητα τον χειμώνα, επιλέξτε βιοκλιματική πέργκολα αλουμινίου.</p>
    `,
    contentEN: `
      <p>Choosing the right shading system in Crete is often a great dilemma. The intense sunlight, strong winds, and sea salt require durable solutions. Most homeowners and hoteliers in Rethymno and across the island wonder: <strong>bioclimatic pergola or tent pergola?</strong></p>
      
      <p>The main difference lies in technology and cost. We recognize that the decision is not easy. In this article, we honestly analyze the pros, cons, costs, and lifespan of each option, so you can make the best investment for your property.</p>

      <h2>What is each one?</h2>
      <p>The <strong><a href="/en/systimata-alumil/smartia-pergoles">bioclimatic pergola</a></strong> is made 100% of aluminum (frame and movable louvers). The louvers rotate to offer natural ventilation (bioclimatic action) and when closed, they seal watertight, with water draining through hidden gutters in the columns.</p>
      <p>The <strong>tent pergola</strong> usually consists of a metal or aluminum frame, while its roof is covered by durable fabric (PVC) that opens and closes via an electric motor, folding in "waves" (retractable).</p>

      <h2>8 Critical Criteria Comparison Table</h2>
      <div class="overflow-x-auto my-8">
        <table class="w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden">
          <thead>
            <tr class="bg-white/10">
              <th class="p-4 border-b border-white/10 font-bold text-white">Criterion</th>
              <th class="p-4 border-b border-white/10 font-bold text-red-400">Bioclimatic Pergola</th>
              <th class="p-4 border-b border-white/10 font-bold text-gray-300">Tent Pergola</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-white/10">
            <tr><td class="p-4 font-bold text-gray-400">1. Initial Cost</td><td class="p-4">High (Premium investment)</td><td class="p-4">Medium to low</td></tr>
            <tr><td class="p-4 font-bold text-gray-400">2. Lifespan</td><td class="p-4">Decades (aluminum does not degrade)</td><td class="p-4">10-15 years (fabric needs replacement)</td></tr>
            <tr><td class="p-4 font-bold text-gray-400">3. Wind Resistance</td><td class="p-4">Excellent (withstands stormy winds)</td><td class="p-4">Good (fabric strains in high winds)</td></tr>
            <tr><td class="p-4 font-bold text-gray-400">4. Salt Resistance</td><td class="p-4">Excellent (Seaside Class anodizing)</td><td class="p-4">Moderate (components and tracks wear out)</td></tr>
            <tr><td class="p-4 font-bold text-gray-400">5. Winter Watertightness</td><td class="p-4">Full sealing with closed louvers</td><td class="p-4">Good, but fabric retains moisture/dirt</td></tr>
            <tr><td class="p-4 font-bold text-gray-400">6. Maintenance Needs</td><td class="p-4">Minimal (simple washing with water)</td><td class="p-4">Frequent fabric cleaning, track lubrication</td></tr>
            <tr><td class="p-4 font-bold text-gray-400">7. Property Value</td><td class="p-4">Increases the home's commercial value</td><td class="p-4">Neutral impact</td></tr>
            <tr><td class="p-4 font-bold text-gray-400">8. Permits</td><td class="p-4">Small Scale (often)</td><td class="p-4">Usually not required (under conditions)</td></tr>
          </tbody>
        </table>
      </div>

      <h2>When is a Tent Pergola worth it?</h2>
      <p>Although at Papadakis Aluminium we specialize in <a href="/en/services/pergoles-rethymno-kriti">aluminum pergolas in Rethymno</a>, honesty compels us to recognize when a tent pergola makes sense. It is an ideal solution for:</p>
      <ul>
        <li><strong>Temporary solutions:</strong> If you are renting the space and want an immediate, economical shading solution.</li>
        <li><strong>Small budget:</strong> When the initial budget is limited and does not justify the cost of a full aluminum construction.</li>
        <li><strong>Seasonal shops:</strong> That only operate in the summer and can retract the fabric in the winter to protect it from wear.</li>
      </ul>

      <h2>When is a Bioclimatic Pergola the only way?</h2>
      <p>If your property is a permanent residence, a villa, or a high-end hotel in Crete, a bioclimatic pergola is not just an option, it is the <em>only</em> solution that makes sense in the long run. The reason? <strong>The winds and the sea salt.</strong></p>
      <p>In southern and northern Crete, a fabric system will be severely tested by the winds. An aluminum bioclimatic pergola, equipped with wind sensors, adjusts its louvers so it is not strained. Additionally, it turns a simple veranda into a real "room" that you can use 365 days a year, protected from rain and heatwaves.</p>

      <h2>The Real Lifecycle Cost (15 years)</h2>
      <p>Many customers focus on the initial <strong>price difference between bioclimatic and tent pergolas</strong>, without considering maintenance.</p>
      <p>A tent pergola over 15 years will need at least 2 (maybe 3) fabric replacements due to wind tears, UV wear, or mold/dirt that cannot be cleaned. Additionally, its motor is strained much more due to the fabric's surface area.</p>
      <p>In contrast, an Alumil bioclimatic pergola (with Seaside Class treatment) over 15 years will need absolutely nothing beyond washing with a water hose. If you calculate the cost of fabric replacements and technician wages over time, the cost difference shrinks drastically — and often zeroes out, with the difference that with the bioclimatic you enjoyed premium aesthetics and a stable, sturdy construction for 15 years.</p>

      <h2>Summary</h2>
      <p>If you are looking for something cheap and short-term, a tent pergola is a good choice. But if you are investing in your home, desire zero maintenance, and want your property to gain in commercial value and winter functionality, choose an aluminum bioclimatic pergola.</p>
    `
  },
  {
    slug: 'exoikonomo-2026-koufomata-kriti',
    titleEL: 'Εξοικονομώ 2026 & Κουφώματα Αλουμινίου στην Κρήτη: Ο Πλήρης Οδηγός',
    titleEN: 'Exoikonomo 2026 & Aluminium Windows in Crete: The Complete Guide',
    descriptionEL: 'Πότε ανοίγει το Εξοικονομώ 2026, ποια κουφώματα αλουμινίου επιδοτούνται έως 80% και πώς να προετοιμαστείτε σωστά στο Ρέθυμνο & την Κρήτη.',
    descriptionEN: 'When the Exoikonomo 2026 subsidy opens, which aluminium windows qualify for up to 80% funding, and how property owners in Rethymno & Crete should prepare.',
    date: '2026-07-01',
    dateModified: '2026-07-11',
    image: '/images/koufomata_epaggelmatikos_xouros_1776111867162.png',
    relatedSlugs: ['energeiaka-koufomata-alouminiou-ti-na-prosexete', 'times-koufomata-alouminiou-odigos-kostous'],
    relatedService: '/services/koufomata-alouminiou-rethymno',
    faqEL: [
      { q: "Μπορώ να αλλάξω μόνο τα κουφώματα με το Εξοικονομώ 2026;", a: "Η αλλαγή κουφωμάτων μετράει σημαντικά, αλλά το πρόγραμμα απαιτεί συνολική αναβάθμιση του ακινήτου κατά συγκεκριμένες ενεργειακές κατηγορίες. Στις περισσότερες περιπτώσεις συνδυάζεται με μία ακόμη παρέμβαση (π.χ. θερμοσίφωνας ή μόνωση). Ο ενεργειακός επιθεωρητής θα σας καθοδηγήσει." },
      { q: "Επιδοτούνται τα κουφώματα σε εξοχική κατοικία;", a: "Το πρόγραμμα αφορά κατά κανόνα την κύρια κατοικία. Ελέγξτε τον επίσημο οδηγό του κύκλου όταν δημοσιευθεί." },
      { q: "Πόσο κοστίζει η αντικατάσταση κουφωμάτων πριν την επιδότηση;", a: "Πανελλαδικά, μια τυπική κατοικία κινείται ενδεικτικά στα 4.000–7.500 € ανάλογα με τα τετραγωνικά των ανοιγμάτων και τη σειρά. Με επιδότηση 50–80%, η τελική επιβάρυνση μειώνεται δραστικά." },
      { q: "Αναλαμβάνετε όλη τη διαδικασία;", a: "Αναλαμβάνουμε το τεχνικό σκέλος: επιμέτρηση, προσφορά με πλήρεις προδιαγραφές συμβατές με το πρόγραμμα, κατασκευή στη μονάδα μας στο Ρέθυμνο και τοποθέτηση. Συνεργαζόμαστε με τον μηχανικό/σύμβουλό σας για τον φάκελο." }
    ],
    faqEN: [
      { q: "Can I replace only the windows under Exoikonomo 2026?", a: "Window replacement counts significantly, but the programme requires the property to climb a set number of energy classes overall. In most cases it is combined with one more intervention (e.g. a solar water heater or insulation). Your energy inspector will guide you." },
      { q: "Does the programme cover holiday homes?", a: "As a rule it covers primary residences only. Check the official guide of the round once published." },
      { q: "What does window replacement cost before the subsidy?", a: "Nationally, a typical home ranges indicatively between €4,000–7,500 depending on opening sizes, profile series and glazing. With a 50–80% subsidy, the net cost drops dramatically." },
      { q: "Do you handle the whole process?", a: "We handle the technical side: on-site measurement, a specification-complete quotation compatible with the programme, fabrication at our production facility in Rethymno, and installation. We coordinate with your engineer or consultant on the application file." }
    ],
    contentEL: `
      <p>Το Εξοικονομώ 2026 είναι ο νέος κύκλος του μεγαλύτερου προγράμματος ενεργειακής αναβάθμισης κατοικιών στην Ελλάδα — και η αντικατάσταση κουφωμάτων παραμένει η πιο δημοφιλής και αποδοτική παρέμβαση. Αν έχετε σπίτι στο Ρέθυμνο ή οπουδήποτε στην Κρήτη με παλιά κουφώματα, αυτός ο οδηγός σας εξηγεί τι επιδοτείται, ποιες τεχνικές προδιαγραφές απαιτούνται και τι πρέπει να κάνετε από τώρα, ώστε να είστε έτοιμοι όταν ανοίξει η πλατφόρμα.</p>

      <h2>Πότε ανοίγει το Εξοικονομώ 2026</h2>
      <p>Σύμφωνα με τις μέχρι σήμερα ανακοινώσεις, το πρόγραμμα αναμένεται να ανοίξει εντός του 2ου εξαμήνου του 2026, με χρηματοδότηση από το Κοινωνικό Κλιματικό Ταμείο της ΕΕ και προϋπολογισμό της τάξης του 1,2 δισ. ευρώ. Η επίσημη ημερομηνία θα ανακοινωθεί από το ΥΠΕΝ. Σημαντική λεπτομέρεια: η αξιολόγηση των αιτήσεων γίνεται με μοριοδότηση και όχι με σειρά προτεραιότητας — δεν χρειάζεται να «τρέξετε» την πρώτη ώρα, χρειάζεται όμως να έχετε έτοιμο φάκελο.</p>

      <h2>Πόση επιδότηση δίνει</h2>
      <p>Τα ποσοστά επιδότησης στους νέους κύκλους κυμαίνονται ανάλογα με εισοδηματικά κριτήρια και αναμένεται να φτάσουν έως και το 80% για τις χαμηλότερες εισοδηματικές κατηγορίες. Για ένα τυπικό έργο αντικατάστασης κουφωμάτων σε κατοικία στην Κρήτη, αυτό μεταφράζεται σε χιλιάδες ευρώ εξοικονόμησης στην αρχική επένδυση — πέρα από τη μόνιμη μείωση 30–50% στο κόστος θέρμανσης και ψύξης.</p>

      <h2>Ποια κουφώματα επιδοτούνται (και ποια όχι)</h2>
      <p>Εδώ βρίσκεται το πιο κρίσιμο σημείο που πολλοί ιδιοκτήτες αγνοούν:</p>
      <ul>
        <li><strong>Επιδοτούνται αποκλειστικά θερμοδιακοπτόμενα κουφώματα αλουμινίου</strong> — δηλαδή προφίλ με πολυαμίδιο που «κόβει» τη μεταφορά θερμότητας ανάμεσα στο εσωτερικό και το εξωτερικό φύλλο αλουμινίου.</li>
        <li>Απαιτούνται <strong>ενεργειακοί υαλοπίνακες</strong> (τουλάχιστον διπλοί, με επίστρωση χαμηλής εκπομπής low-e).</li>
        <li>Το κούφωμα πρέπει να πιάνει συγκεκριμένο <strong>συντελεστή θερμοπερατότητας</strong> (στους πρόσφατους κύκλους, U ≤ 1,8 W/m²K).</li>
        <li>Επιλέξιμα είναι επίσης <strong>συστήματα σκίασης</strong> (ρολά, παντζούρια) και <strong>σίτες</strong> ως συμπληρωματικές δαπάνες.</li>
      </ul>
      <p>Τα συστήματα Alumil SMARTIA και SUPREME που κατασκευάζουμε και τοποθετούμε υπερκαλύπτουν αυτές τις προδιαγραφές — με πολυαμίδια έως 38mm πετυχαίνουμε Uw έως 0,9 W/m²K, δηλαδή σχεδόν διπλάσια απόδοση από το ελάχιστο όριο του προγράμματος.</p>

      <h2>Ποιοι είναι δικαιούχοι</h2>
      <p>Δικαίωμα συμμετοχής έχουν ιδιοκτήτες κύριας κατοικίας (με πλήρη κυριότητα ή επικαρπία), ενώ στους πρόσφατους κύκλους προβλέπεται συμμετοχή και ενοικιαστών με μακροχρόνια μίσθωση, με τη συναίνεση του ιδιοκτήτη. Βασική απαίτηση: το ακίνητο να αναβαθμιστεί ενεργειακά κατά συγκεκριμένο αριθμό κατηγοριών, κάτι που τεκμηριώνεται με Πιστοποιητικό Ενεργειακής Απόδοσης (ΠΕΑ) πριν και μετά τις εργασίες.</p>

      <h2>Τα 4 βήματα προετοιμασίας — ξεκινήστε τώρα</h2>
      <ol>
        <li><strong>Ενεργειακή επιθεώρηση:</strong> Ένας ενεργειακός επιθεωρητής εκδίδει το πρώτο ΠΕΑ που αποτυπώνει την υφιστάμενη κατάσταση.</li>
        <li><strong>Συλλογή δικαιολογητικών:</strong> Ε9, εκκαθαριστικό, στοιχεία ιδιοκτησίας, συναινέσεις συνιδιοκτητών.</li>
        <li><strong>Τεχνική προσφορά με προδιαγραφές:</strong> Η προσφορά για τα κουφώματα πρέπει να αναφέρει ρητά σειρά προφίλ, τύπο υαλοπίνακα, συντελεστή U, εργασίες αποξήλωσης και τοποθέτησης. Προσφορές «στο περίπου» απορρίπτονται ή δημιουργούν προβλήματα στην εκταμίευση.</li>
        <li><strong>Επιλογή κατασκευαστή με εμπειρία σε επιδοτούμενα έργα:</strong> Η σωστή τεκμηρίωση (πιστοποιητικά συστημάτων, δηλώσεις επίδοσης CE) είναι εξίσου σημαντική με την ίδια την τοποθέτηση.</li>
      </ol>

      <h2>Γιατί η Κρήτη έχει επιπλέον λόγο για ενεργειακά κουφώματα</h2>
      <p>Στο κρητικό κλίμα το πρόβλημα δεν είναι μόνο ο χειμώνας — είναι κυρίως ο καύσωνας. Τα παλιά κουφώματα ψυχρής σειράς λειτουργούν σαν «καλοριφέρ» τον Ιούλιο, μεταφέροντας τη θερμότητα κατευθείαν στο εσωτερικό και εκτοξεύοντας το κόστος κλιματισμού. Επιπλέον, σε παραθαλάσσιες περιοχές όπως το Ρέθυμνο, η αλμύρα διαβρώνει κουφώματα χωρίς κατάλληλη επεξεργασία βαφής — γι' αυτό όλες οι κατασκευές μας φέρουν πιστοποίηση Seaside Class.</p>
    `,
    contentEN: `
      <p>"Exoikonomo" (Εξοικονομώ, meaning "I save") is Greece's largest state subsidy programme for the energy renovation of homes — and replacing old windows and doors is consistently its most popular and cost-effective intervention. If you own a property in Rethymno or anywhere in Crete with ageing frames, this guide explains what the 2026 round is expected to cover, which technical specifications apply, and what you can do now to be ready when the platform opens.</p>

      <h2>When does Exoikonomo 2026 open?</h2>
      <p>Based on official announcements to date, the new round is expected to open in the second half of 2026, funded by the EU Social Climate Fund with a budget in the region of €1.2 billion. The exact date will be announced by the Ministry of Environment and Energy. One important detail: applications are ranked by a points system, not first-come-first-served — you don't need to race the clock, but you do need a complete, well-prepared file.</p>

      <h2>How much is the subsidy?</h2>
      <p>Subsidy rates vary with household income criteria and are expected to reach up to 80% for the lowest income brackets. For a typical window replacement project on a Cretan home, that translates into thousands of euros off the initial investment — on top of a permanent 30–50% reduction in heating and cooling costs.</p>

      <h2>Which windows qualify (and which don't)</h2>
      <p>This is the point most owners miss:</p>
      <ul>
        <li>Only <strong>thermal-break aluminium systems</strong> are eligible — profiles with a polyamide insulator that interrupts heat transfer between the inner and outer aluminium shells.</li>
        <li><strong>Energy glazing</strong> is required: at least double glazing with a low-emissivity (low-e) coating.</li>
        <li>The window must achieve a specified <strong>thermal transmittance value</strong> (in recent rounds, U ≤ 1.8 W/m²K).</li>
        <li><strong>Shading systems</strong> (roller shutters, exterior shutters) and <strong>insect screens</strong> are also eligible as complementary costs.</li>
      </ul>
      <p>The Alumil SMARTIA and SUPREME systems we fabricate and install comfortably exceed these specifications — with polyamides up to 38mm we achieve Uw values as low as 0.9 W/m²K, roughly twice the performance the programme's minimum requires.</p>

      <h2>Who is eligible — a note for foreign owners</h2>
      <p>Eligibility applies to owners of a <strong>primary residence in Greece</strong> (full ownership or usufruct), and recent rounds also allow long-term tenants with the owner's consent. The upgrade must be documented with an Energy Performance Certificate (ΠΕΑ) before and after the works. If your Cretan property is a <strong>holiday home</strong>, it will generally not qualify — but the energy, comfort and property-value arguments for thermal-break aluminium remain just as strong, and we frequently deliver such projects for international owners outside the subsidy framework.</p>

      <h2>Four preparation steps — start now</h2>
      <ol>
        <li><strong>Energy inspection:</strong> A certified energy inspector issues the initial Energy Performance Certificate documenting the current state.</li>
        <li><strong>Paperwork:</strong> Property title data, tax documents (E9, income statement), co-owner consents where applicable.</li>
        <li><strong>A technical quotation with full specifications:</strong> The window quote must explicitly state the profile series, glazing build-up, U-value, and removal/installation works. Vague quotes cause problems at the payout stage.</li>
        <li><strong>A fabricator experienced with subsidised projects:</strong> Correct documentation (system certificates, CE declarations of performance) matters as much as the installation itself.</li>
      </ol>

      <h2>Why Crete has an extra reason for energy windows</h2>
      <p>In the Cretan climate the real enemy isn't winter — it's the summer heatwave. Old cold-series frames act like radiators in July, conducting heat straight indoors and inflating air-conditioning bills. And in coastal areas like Rethymno, salt air corrodes any frame without the proper coating treatment — which is why all our fabrications carry Seaside Class certification.</p>
    `
  },
  {
    slug: 'energeiaka-koufomata-alouminiou-ti-na-prosexete',
    titleEL: 'Ενεργειακά Κουφώματα Αλουμινίου: 7 Πράγματα να Προσέξετε Πριν Αγοράσετε',
    titleEN: 'Energy-Efficient Aluminium Windows: 7 Things to Check Before You Buy',
    descriptionEL: 'Τι σημαίνει Uw, θερμοδιακοπή, low-e τζάμι και κλάση ασφαλείας; Οδηγός αγοράς ενεργειακών κουφωμάτων αλουμινίου για κατοικίες στο Ρέθυμνο & την Κρήτη.',
    descriptionEN: 'What do Uw, thermal break, low-e glazing and security class actually mean? A buyer\'s guide to energy-efficient aluminium windows for homes in Rethymno & Crete.',
    date: '2026-07-01',
    dateModified: '2026-07-11',
    image: '/images/aluminum_windows_1776112108865.png',
    relatedSlugs: ['exoikonomo-2026-koufomata-kriti', 'times-koufomata-alouminiou-odigos-kostous'],
    relatedService: '/services/koufomata-alouminiou-rethymno',
    faqEL: [
      { q: "Αξίζει η αναβάθμιση αν έχω κουφώματα 15ετίας;", a: "Κουφώματα προ του 2010 σπάνια έχουν ουσιαστική θερμοδιακοπή. Η εξοικονόμηση 30–50% σε θέρμανση/ψύξη κάνει την απόσβεση ρεαλιστική σε 5–8 χρόνια — ταχύτερα με επιδότηση." },
      { q: "Ανοιγόμενα ή συρόμενα;", a: "Τα ανοιγόμενα προσφέρουν καλύτερη στεγάνωση και θερμομόνωση· τα συρόμενα κερδίζουν σε χώρο και θέα. Συχνά η βέλτιστη λύση είναι συνδυασμός ανά χώρο." },
      { q: "Πόσο διαρκεί η τοποθέτηση;", a: "Σε τυπική κατοικία, 1–3 ημέρες, με αποξήλωση των παλιών." },
      { q: "Κάνετε έργα εκτός Ρεθύμνου;", a: "Ναι — αναλαμβάνουμε έργα σε όλη την Κρήτη, από τη μονάδα παραγωγής μας στο Ρέθυμνο." }
    ],
    faqEN: [
      { q: "Is upgrading worth it if my frames are 15 years old?", a: "Frames from before 2010 rarely have a meaningful thermal break. A 30–50% saving on heating/cooling makes payback realistic within 5–8 years — faster with a subsidy." },
      { q: "Casement or sliding?", a: "Casement (hinged) systems seal and insulate better; sliding systems win on space and views. The optimal solution is often a room-by-room combination." },
      { q: "How long does installation take?", a: "For a typical home, 1–3 days, including removal of the old frames." },
      { q: "Do you work outside Rethymno?", a: "Yes — we deliver projects across Crete, from our production facility in Rethymno." }
    ],
    contentEL: `
      <p>Η αγορά ενεργειακών κουφωμάτων είναι επένδυση 20+ ετών — και δυστυχώς, οι περισσότερες προσφορές που κυκλοφορούν συγκρίνουν «μήλα με πορτοκάλια». Δύο κουφώματα που μοιάζουν ίδια μπορεί να διαφέρουν 40% σε θερμομόνωση και 100% σε αντοχή στον χρόνο. Ακολουθεί ο έλεγχος 7 σημείων που κάνουμε εμείς οι ίδιοι όταν αξιολογούμε ένα σύστημα.</p>

      <h2>1. Συντελεστής θερμοπερατότητας Uw — ο μόνος αριθμός που μετράει</h2>
      <p>Το Uw (W/m²K) μετρά πόση θερμότητα «χάνει» ολόκληρο το κούφωμα — προφίλ και τζάμι μαζί. Όσο χαμηλότερο, τόσο καλύτερα:</p>
      <table class="w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden my-4">
        <thead>
          <tr class="bg-white/10">
            <th class="p-4 font-bold text-white">Uw</th>
            <th class="p-4 font-bold text-white">Αξιολόγηση</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-white/10">
          <tr><td class="p-4">> 2,8</td><td class="p-4">Παλιά κουφώματα χωρίς θερμοδιακοπή — ενεργειακή «τρύπα»</td></tr>
          <tr><td class="p-4">1,8 – 2,8</td><td class="p-4">Βασική θερμοδιακοπή — οριακά αποδεκτό</td></tr>
          <tr><td class="p-4">1,1 – 1,8</td><td class="p-4">Καλή ενεργειακή απόδοση — όριο επιλεξιμότητας Εξοικονομώ</td></tr>
          <tr><td class="p-4">≤ 1,1</td><td class="p-4">Κορυφαία απόδοση — επίπεδο SMARTIA/SUPREME</td></tr>
        </tbody>
      </table>
      <p>Στα έργα μας επιτυγχάνουμε Uw έως 0,9 W/m²K. Ζητήστε πάντα το Uw γραμμένο στην προσφορά — όχι προφορικές διαβεβαιώσεις.</p>

      <h2>2. Θερμοδιακοπή: ρωτήστε ΠΟΣΑ χιλιοστά</h2>
      <p>«Θερμοδιακοπτόμενο» δεν σημαίνει αυτόματα αποδοτικό. Η ουσία είναι το πλάτος του πολυαμιδίου: ένα προφίλ με πολυαμίδιο 20mm απέχει πολύ από ένα με 38mm. Στα premium συστήματα που τοποθετούμε, τα πολυαμίδια 38mm ουσιαστικά εκμηδενίζουν τη θερμογέφυρα.</p>

      <h2>3. Υαλοπίνακας: το 70% της επιφάνειας</h2>
      <p>Ο ενεργειακός υαλοπίνακας πρέπει να έχει επίστρωση low-e και, ιδανικά, αέριο argon στο διάκενο. Στο κρητικό κλίμα αξίζει να συζητήσετε και ηλιακό έλεγχο (solar control) στις νότιες όψεις, για να μπλοκάρεται η θερμότητα του καλοκαιριού χωρίς να θυσιάζεται το φως.</p>

      <h2>4. Ηχομόνωση — ζήστε τη διαφορά των 45dB</h2>
      <p>Ένα σωστό ενεργειακό κούφωμα με κατάλληλο υαλοπίνακα επιτυγχάνει ηχομείωση Rw έως 45dB. Στην πράξη: ο δρόμος με κίνηση «σβήνει» σε ψίθυρο. Αν το σπίτι σας βλέπει σε κεντρικό δρόμο του Ρεθύμνου ή στην Εθνική, είναι το χαρακτηριστικό που θα εκτιμήσετε περισσότερο απ' όλα.</p>

      <h2>5. Ασφάλεια: μηχανισμοί πολλαπλού κλειδώματος</h2>
      <p>Το κούφωμα είναι το πρώτο σημείο δοκιμής ενός διαρρήκτη. Ζητήστε μηχανισμούς περιμετρικού πολλαπλού κλειδώματος και ρωτήστε για την κλάση αντιδιαρρηκτικής προστασίας (RC2/RC3). Συνδυαστικά με θωρακισμένη πόρτα εισόδου, η κατοικία θωρακίζεται ολοκληρωμένα.</p>

      <h2>6. Βαφή Seaside Class — υποχρεωτική κοντά στη θάλασσα</h2>
      <p>Στην Κρήτη, κούφωμα χωρίς πιστοποιημένη επεξεργασία για παραθαλάσσια χρήση σημαίνει οξείδωση και ξεφλούδισμα βαφής μέσα σε λίγα χρόνια. Η ηλεκτροστατική βαφή Seaside Class με ενισχυμένη προεργασία είναι αδιαπραγμάτευτη για ακίνητα σε απόσταση αναπνοής από τη θάλασσα.</p>

      <h2>7. Ποιος το κατασκευάζει και ποιος το τοποθετεί</h2>
      <p>Το καλύτερο προφίλ της αγοράς αχρηστεύεται από πρόχειρη συναρμολόγηση ή τοποθέτηση χωρίς σωστή στεγάνωση. Προτιμήστε πιστοποιημένο κατασκευαστή (εμείς είμαστε εξουσιοδοτημένοι κατασκευαστές Alumil) με δική του μονάδα παραγωγής — όχι μεταπωλητή που «παίρνει έτοιμα» — και ρωτήστε ποιος αναλαμβάνει το after-sales.</p>
    `,
    contentEN: `
      <p>Buying energy-efficient windows is a 20-year-plus investment — and unfortunately, most quotes on the market compare apples to oranges. Two windows that look identical can differ by 40% in thermal insulation and 100% in longevity. Here is the 7-point checklist we apply ourselves when evaluating a system.</p>

      <h2>1. The Uw value — the only number that matters</h2>
      <p>Uw (W/m²K) measures how much heat the complete window loses — frame and glazing together. The lower, the better:</p>
      <table class="w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden my-4">
        <thead>
          <tr class="bg-white/10">
            <th class="p-4 font-bold text-white">Uw</th>
            <th class="p-4 font-bold text-white">Assessment</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-white/10">
          <tr><td class="p-4">> 2.8</td><td class="p-4">Old frames without thermal break — an energy sinkhole</td></tr>
          <tr><td class="p-4">1.8 – 2.8</td><td class="p-4">Basic thermal break — marginally acceptable</td></tr>
          <tr><td class="p-4">1.1 – 1.8</td><td class="p-4">Good energy performance — the Exoikonomo eligibility threshold</td></tr>
          <tr><td class="p-4">≤ 1.1</td><td class="p-4">Top-tier performance — SMARTIA/SUPREME territory</td></tr>
        </tbody>
      </table>
      <p>Our projects achieve Uw values as low as 0.9 W/m²K. Always ask for the Uw in writing on the quote — not verbal assurances.</p>

      <h2>2. Thermal break: ask HOW MANY millimetres</h2>
      <p>"Thermal break" alone doesn't guarantee performance. What matters is the width of the polyamide insulator: a profile with a 20mm polyamide is a world apart from one with 38mm. In the premium systems we install, 38mm polyamides effectively eliminate the thermal bridge.</p>

      <h2>3. Glazing: 70% of the surface</h2>
      <p>Energy glazing needs a low-e coating and, ideally, argon gas in the cavity. In the Cretan climate it's also worth discussing solar-control glass on south-facing openings, blocking summer heat gain without sacrificing daylight.</p>

      <h2>4. Acoustic insulation — experience the 45dB difference</h2>
      <p>A properly built energy window with the right glazing achieves sound reduction of up to Rw 45dB. In practice: a busy street fades to a whisper. If your home faces a main road in Rethymno or the National Road, this is the feature you'll appreciate most.</p>

      <h2>5. Security: multi-point locking</h2>
      <p>The window is a burglar's first test. Ask for perimeter multi-point locking mechanisms and check the burglar-resistance class (RC2/RC3). Combined with a certified security entrance door, the home is protected end to end.</p>

      <h2>6. Seaside Class coating — non-negotiable near the sea</h2>
      <p>In Crete, a frame without certified seaside-grade treatment means oxidation and peeling paint within a few years. Electrostatic Seaside Class coating with reinforced pre-treatment is mandatory for properties within reach of sea air.</p>

      <h2>7. Who fabricates it — and who installs it</h2>
      <p>The best profile on the market is wasted by careless assembly or installation without proper sealing. Choose a certified fabricator (we are authorised Alumil fabricators) with its own production facility — not a reseller of ready-made units — and ask who handles after-sales support.</p>
    `
  },
  {
    slug: 'times-koufomata-alouminiou-odigos-kostous',
    titleEL: 'Τιμές Κουφωμάτων Αλουμινίου 2026: Τι Καθορίζει το Κόστος (Ειλικρινής Οδηγός)',
    titleEN: 'Aluminium Window Prices in 2026: What Really Drives the Cost (An Honest Guide)',
    descriptionEL: 'Από τι εξαρτάται η τιμή στα κουφώματα αλουμινίου; Σειρά προφίλ, τζάμι, διαστάσεις, τοποθέτηση. Πώς να συγκρίνετε σωστά προσφορές στο Ρέθυμνο & την Κρήτη.',
    descriptionEN: 'What determines aluminium window prices? Profile series, glazing, dimensions, installation. How to compare quotes properly in Rethymno & Crete.',
    date: '2026-07-01',
    dateModified: '2026-07-11',
    image: '/images/pergola_crete_1776112148406.png',
    relatedSlugs: ['exoikonomo-2026-koufomata-kriti', 'energeiaka-koufomata-alouminiou-ti-na-prosexete'],
    relatedService: '/services/koufomata-alouminiou-rethymno',
    faqEL: [
      { q: "Γιατί οι τιμές ανά τετραγωνικό είναι παραπλανητικές;", a: "Γιατί ένα μικρό παράθυρο κοστίζει αναλογικά περισσότερο ανά m² από μια μεγάλη μπαλκονόπορτα (ίδιος μηχανισμός, λιγότερα τετραγωνικά). Μόνο η αναλυτική κοστολόγηση ανά τεμάχιο έχει νόημα." },
      { q: "Η επιμέτρηση χρεώνεται;", a: "Όχι — η επιμέτρηση και η τεχνική μελέτη στο Ρέθυμνο και την ευρύτερη περιοχή γίνονται χωρίς χρέωση." },
      { q: "Πόσο κρατάει μια σοβαρή κατασκευή αλουμινίου;", a: "Με σωστή βαφή και τοποθέτηση, δεκαετίες — το αλουμίνιο δεν σαπίζει, δεν στραβώνει και δεν χρειάζεται συντήρηση πέρα από καθαρισμό." },
      { q: "Παίρνετε τα παλιά κουφώματα;", a: "Ναι, αναλαμβάνουμε αποξήλωση και απομάκρυνση — το αλουμίνιο ανακυκλώνεται 100%." }
    ],
    faqEN: [
      { q: "Why are per-square-metre prices misleading?", a: "Because a small window costs proportionally more per m² than a large balcony door (same mechanism, fewer square metres). Only itemised, per-unit costing is meaningful." },
      { q: "Is the survey charged?", a: "No — on-site measurement and technical assessment in Rethymno and the wider area are free of charge." },
      { q: "How long does a quality aluminium fabrication last?", a: "With proper coating and installation, decades — aluminium doesn't rot, warp, or require maintenance beyond cleaning." },
      { q: "Do you take away the old frames?", a: "Yes, we handle removal and disposal — aluminium is 100% recyclable." }
    ],
    contentEL: `
      <p>«Πόσο πάει το κούφωμα;» είναι η πρώτη ερώτηση κάθε πελάτη — και η πιο παραπλανητική, γιατί δύο προσφορές με την ίδια τελική τιμή μπορεί να κρύβουν τελείως διαφορετικά προϊόντα. Σε αυτόν τον οδηγό εξηγούμε με διαφάνεια τους 6 παράγοντες που καθορίζουν το κόστος και πώς να διαβάζετε μια προσφορά σαν επαγγελματίας.</p>

      <h2>Οι 6 παράγοντες που καθορίζουν την τιμή</h2>
      
      <h3>1. Σειρά προφίλ</h3>
      <p>Η μεγαλύτερη διαφοροποίηση. Μια ψυχρή σειρά (χωρίς θερμοδιακοπή) κοστίζει λιγότερο αλλά δεν είναι επιλέξιμη για επιδοτήσεις και «διαρρέει» ενέργεια. Οι θερμοδιακοπτόμενες σειρές κλιμακώνονται ανάλογα με το πλάτος πολυαμιδίου, τα φύλλα στεγάνωσης και τις πιστοποιήσεις — από τις μεσαίες SMARTIA έως τις κορυφαίες SUPREME.</p>
      
      <h3>2. Υαλοπίνακας</h3>
      <p>Ο ενεργειακός διπλός υαλοπίνακας low-e με argon είναι σήμερα το standard. Τριπλός υαλοπίνακας, ηχομονωτικές μεμβράνες laminated ή τζάμια ασφαλείας ανεβάζουν το κόστος 15–35% ανά τεμάχιο — αλλά σε συγκεκριμένες περιπτώσεις (θόρυβος, ισόγεια) αξίζουν κάθε ευρώ.</p>
      
      <h3>3. Τυπολογία ανοίγματος</h3>
      <p>Το συρόμενο επάλληλο είναι οικονομικότερο· το ανοιγοανακλινόμενο έχει ακριβότερο μηχανισμό· το χωνευτό (pocket) και τα μεγάλα minimal συρόμενα είναι premium κατασκευές. Οι ειδικές διαστάσεις (υπερμεγέθη, τόξα) κοστολογούνται ξεχωριστά.</p>
      
      <h3>4. Χρώμα & βαφή</h3>
      <p>Τα standard RAL έχουν βασική τιμή. Ειδικές αποχρώσεις, απομίμηση ξύλου και —απαραίτητο κοντά στη θάλασσα— η επεξεργασία Seaside Class προσθέτουν ένα μικρό αλλά κρίσιμο ποσοστό.</p>
      
      <h3>5. Μηχανισμοί & εξαρτήματα</h3>
      <p>Μηχανισμοί πολλαπλού κλειδώματος, κρυφοί μεντεσέδες, χειρολαβές με κλειδί: μικρές διαφορές τιμής, μεγάλες διαφορές σε ασφάλεια και διάρκεια ζωής.</p>
      
      <h3>6. Αποξήλωση & τοποθέτηση</h3>
      <p>Η σωστή τοποθέτηση (αλφάδιασμα, αφρός χαμηλής διόγκωσης, στεγανωτικές ταινίες, σιλικόνες) είναι το 50% του τελικού αποτελέσματος. Οι «φθηνές» προσφορές συνήθως κόβουν από εδώ — και το πληρώνετε σε αέρα και υγρασία για 20 χρόνια.</p>
      
      <h2>Ενδεικτικό εύρος κόστους</h2>
      <p>Πανελλαδικά, η πλήρης αντικατάσταση κουφωμάτων σε τυπική κατοικία κινείται ενδεικτικά στα 4.000–7.500 €, ανάλογα με τα τετραγωνικά των ανοιγμάτων, τη σειρά και τον υαλοπίνακα. Με το Εξοικονομώ 2026, που αναμένεται με επιδότηση έως 80%, η καθαρή επιβάρυνση μπορεί να πέσει σε κλάσμα του ποσού.</p>
      
      <h2>Πώς να συγκρίνετε σωστά 2 προσφορές — checklist</h2>
      <p>Μια σοβαρή προσφορά αναγράφει ρητά:</p>
      <ul>
        <li>Σειρά προφίλ και κατασκευαστή συστήματος (π.χ. Alumil SMARTIA M11500)</li>
        <li>Πλάτος πολυαμιδίου θερμοδιακοπής</li>
        <li>Πλήρη περιγραφή υαλοπίνακα (πάχη, low-e, argon)</li>
        <li>Συντελεστή Uw ανά κούφωμα</li>
        <li>Τύπο μηχανισμών και σημεία κλειδώματος</li>
        <li>Κατηγορία βαφής (και Seaside Class αν είστε κοντά στη θάλασσα)</li>
        <li>Εργασίες: αποξήλωση, τοποθέτηση, στεγάνωση, απομάκρυνση μπάζων</li>
        <li>Εγγύηση προϊόντος ΚΑΙ εργασίας</li>
      </ul>
      <p>Αν κάποιο από αυτά λείπει, δεν συγκρίνετε τιμές — συγκρίνετε άγνωστα.</p>
    `,
    contentEN: `
      <p>"How much per window?" is every client's first question — and the most misleading one, because two quotes with the same bottom line can hide completely different products. This guide transparently explains the 6 factors that determine cost, and how to read a quotation like a professional.</p>

      <h2>The 6 factors that determine price</h2>
      
      <h3>1. Profile series</h3>
      <p>The biggest differentiator. A cold series (no thermal break) costs less but is ineligible for subsidies and leaks energy. Thermal-break series scale with polyamide width, sealing levels and certifications — from the mid-range SMARTIA to the flagship SUPREME systems.</p>
      
      <h3>2. Glazing</h3>
      <p>Double low-e glazing with argon is today's standard. Triple glazing, laminated acoustic interlayers or security glass add 15–35% per unit — but for specific cases (noise, ground floors) they're worth every euro.</p>
      
      <h3>3. Opening typology</h3>
      <p>Lift-and-slide overlapping units are the most economical; tilt-and-turn carries a pricier mechanism; pocket (concealed) sliders and oversized minimal-frame units are premium builds. Special shapes and oversizes are costed separately.</p>
      
      <h3>4. Colour & coating</h3>
      <p>Standard RAL colours carry the base price. Special finishes, wood-effect coatings and — essential near the coast — Seaside Class treatment add a small but critical percentage.</p>
      
      <h3>5. Hardware & accessories</h3>
      <p>Multi-point locking, concealed hinges, key-lockable handles: small price differences, large differences in security and lifespan.</p>
      
      <h3>6. Removal & installation</h3>
      <p>Correct installation (levelling, low-expansion foam, sealing tapes, silicone finishing) is 50% of the final result. "Cheap" quotes usually cut corners here — and you pay for it in draughts and damp for 20 years.</p>
      
      <h2>Indicative cost range</h2>
      <p>Nationally, full window replacement on a typical home ranges indicatively between €4,000–7,500, depending on opening area, series and glazing. Under Exoikonomo 2026, expected with subsidies of up to 80%, the net cost can fall to a fraction of that.</p>
      
      <h2>How to compare two quotes properly — checklist</h2>
      <p>A serious quotation explicitly states:</p>
      <ul>
        <li>Profile series and system manufacturer (e.g. Alumil SMARTIA M11500)</li>
        <li>Thermal-break polyamide width</li>
        <li>Full glazing description (panes, low-e, argon)</li>
        <li>Uw value per window</li>
        <li>Hardware type and number of locking points</li>
        <li>Coating category (and Seaside Class if you're near the sea)</li>
        <li>Works included: removal, installation, sealing, debris disposal</li>
        <li>Warranty on both product AND workmanship</li>
      </ul>
      <p>If any of these are missing, you're not comparing prices — you're comparing unknowns.</p>
    `
  },
  {
    slug: 'antikatastasi-koufomaton-rethymno-vimata',
    titleEL: 'Αντικατάσταση Κουφωμάτων στο Ρέθυμνο: Η Διαδικασία Βήμα-Βήμα',
    titleEN: 'Window Replacement in Rethymno: The Step-by-Step Process',
    descriptionEL: 'Πώς γίνεται η αντικατάσταση κουφωμάτων από την επιμέτρηση ως την παράδοση: χρόνοι, στάδια, τι να περιμένετε. Οδηγός για κατοικίες στο Ρέθυμνο & την Κρήτη.',
    descriptionEN: 'How window replacement works, from survey to handover: timelines, stages, what to expect. A guide for homes in Rethymno & Crete.',
    date: '2026-07-01',
    dateModified: '2026-07-11',
    image: '/images/aluminum_doors_patio_1776112180417.png',
    relatedSlugs: ['times-koufomata-alouminiou-odigos-kostous', 'energeiaka-koufomata-alouminiou-ti-na-prosexete'],
    relatedService: '/services/koufomata-alouminiou-rethymno',
    faqEL: [
      { q: "Χρειάζεται οικοδομική άδεια για αντικατάσταση κουφωμάτων;", a: "Για απλή αντικατάσταση στις ίδιες διαστάσεις, κατά κανόνα όχι. Αν αλλάζουν διαστάσεις ανοιγμάτων, απαιτείται έγκριση εργασιών μικρής κλίμακας — σας καθοδηγούμε." },
      { q: "Θα χαλάσουν οι σοβάδες και τα μάρμαρα;", a: "Με προσεκτική αποξήλωση, οι φθορές είναι ελάχιστες έως μηδενικές. Όπου χρειαστεί μερεμέτι, το γνωρίζετε από την προσφορά — όχι εκ των υστέρων." },
      { q: "Μπορώ να μένω στο σπίτι κατά την τοποθέτηση;", a: "Ναι. Δουλεύουμε ανά δωμάτιο και κάθε βράδυ το σπίτι κλείνει κανονικά." },
      { q: "Τι γίνεται με ρολά και σίτες;", a: "Αντικαθίστανται ή προστίθενται στο ίδιο έργο — συνήθως ενσωματωμένα κουτιά ρολών με θερμομόνωση." }
    ],
    faqEN: [
      { q: "Is a building permit required?", a: "For like-for-like replacement in the same dimensions, generally no. If opening dimensions change, a small-scale works approval is required — we guide you through it." },
      { q: "Will plaster and marble be damaged?", a: "With careful removal, damage is minimal to zero. Where patching is needed, you know it from the quotation — not after the fact." },
      { q: "Can I stay in the house during installation?", a: "Yes. We work room by room and the house closes up normally every evening." },
      { q: "What about roller shutters and insect screens?", a: "Replaced or added within the same project — usually with insulated, integrated shutter boxes." }
    ],
    contentEL: `
      <p>Ο μεγαλύτερος δισταγμός για την αλλαγή κουφωμάτων δεν είναι το κόστος — είναι η αναστάτωση. «Θα γίνει το σπίτι εργοτάξιο;» «Πόσες μέρες θα μείνουμε με ανοιχτούς τοίχους;» Η αλήθεια: με σωστή οργάνωση, μια τυπική κατοικία ολοκληρώνεται σε 1–3 ημέρες τοποθέτησης, χωρίς μπάζα και χωρίς εκπλήξεις. Δείτε ακριβώς πώς δουλεύουμε.</p>

      <h2>Βήμα 1 — Επιμέτρηση & τεχνική μελέτη (δωρεάν)</h2>
      <p>Επισκεπτόμαστε τον χώρο σας στο Ρέθυμνο ή οπουδήποτε στην Κρήτη, μετράμε κάθε άνοιγμα με ακρίβεια χιλιοστού και καταγράφουμε ιδιαιτερότητες: κάσες, ρολά, πρεβάζια, μαρμαροποδιές, φορά ανοίγματος, προσανατολισμό. Συζητάμε ανάγκες — θερμομόνωση, ηχομόνωση, ασφάλεια, αισθητική — και προτείνουμε την κατάλληλη σειρά ανά χώρο, όχι «ένα σύστημα για όλα».</p>

      <h2>Βήμα 2 — Αναλυτική προσφορά</h2>
      <p>Λαμβάνετε γραπτή προσφορά ανά τεμάχιο, με σειρά προφίλ, υαλοπίνακα, συντελεστή Uw, μηχανισμούς, βαφή και πλήρη περιγραφή εργασιών. Χωρίς ψιλά γράμματα και χωρίς «έξτρα» που εμφανίζονται στο τέλος.</p>

      <h2>Βήμα 3 — Κατασκευή στη μονάδα μας στο Ρέθυμνο</h2>
      <p>Εδώ είναι η ουσιαστική διαφορά μας: δεν μεταπωλούμε έτοιμα κουφώματα. Κάθε κούφωμα κόβεται, συναρμολογείται και ελέγχεται στη δική μας μονάδα παραγωγής στη Δρουλίσκου, ως εξουσιοδοτημένοι κατασκευαστές Alumil. Χρόνος κατασκευής: συνήθως 2–4 εβδομάδες ανάλογα με το μέγεθος του έργου και τις παραγγελίες προφίλ.</p>

      <h2>Βήμα 4 — Αποξήλωση με προστασία του χώρου</h2>
      <p>Την ημέρα τοποθέτησης, καλύπτουμε δάπεδα και έπιπλα, αφαιρούμε τα παλιά κουφώματα προσεκτικά (χωρίς σπασίματα σε σοβάδες όπου είναι εφικτό) και απομακρύνουμε τα παλιά υλικά για ανακύκλωση. Σε κατοικούμενα σπίτια δουλεύουμε χώρο-χώρο ώστε το σπίτι να μη μένει ποτέ «ανοιχτό».</p>

      <h2>Βήμα 5 — Τοποθέτηση & στεγάνωση</h2>
      <p>Η τοποθέτηση κρίνει τα πάντα. Αλφάδιασμα και ζύγισμα κάθε κάσας, στερέωση με τα προβλεπόμενα βύσματα, πλήρωση με αφρό χαμηλής διόγκωσης, στεγανωτικές ταινίες και τελικές σιλικονώσεις. Ένα κορυφαίο προφίλ με πρόχειρη τοποθέτηση χάνει έως και το μισό της απόδοσής του — γι' αυτό δεν χρησιμοποιούμε εξωτερικά συνεργεία.</p>

      <h2>Βήμα 6 — Ρυθμίσεις, έλεγχος & παράδοση</h2>
      <p>Ρυθμίζουμε μηχανισμούς και πίεση φύλλων, ελέγχουμε λειτουργία και στεγάνωση κάθε κουφώματος μαζί σας, και σας παραδίδουμε οδηγίες συντήρησης και εγγυήσεις. Το after-sales δεν σταματά στην παράδοση — είμαστε ένα τηλέφωνο μακριά για ρυθμίσεις.</p>

      <h2>Πότε είναι η καλύτερη εποχή για αντικατάσταση;</h2>
      <p>Στην Κρήτη, η άνοιξη και το φθινόπωρο προσφέρουν ιδανικές συνθήκες, αλλά η αλήθεια είναι ότι με τη μέθοδο «χώρο-χώρο» η αντικατάσταση γίνεται όλο τον χρόνο. Ο πιο έξυπνος χρόνος απόφασης, πάντως, είναι <strong>πριν</strong> ανοίξει το Εξοικονομώ 2026 — όσοι έχουν έτοιμη επιμέτρηση και προσφορά με πλήρεις προδιαγραφές, κινούνται πρώτοι.</p>
    `,
    contentEN: `
      <p>The biggest hesitation about replacing windows isn't the cost — it's the disruption. "Will my house become a building site?" "How many days with open walls?" The truth: with proper planning, a typical home is completed in 1–3 days of installation, with no rubble left behind and no surprises. Here is exactly how we work.</p>

      <h2>Step 1 — Survey & technical assessment (free)</h2>
      <p>We visit your property in Rethymno or anywhere in Crete, measure every opening to the millimetre and record the specifics: frames, shutter boxes, sills, marble thresholds, opening direction, orientation. We discuss your priorities — thermal insulation, acoustics, security, aesthetics — and propose the right series per room, not "one system for everything."</p>
      
      <h2>Step 2 — Itemised quotation</h2>
      <p>You receive a written, per-unit quotation stating profile series, glazing, Uw value, hardware, coating and a full description of works. No small print, and no "extras" appearing at the end.</p>
      
      <h2>Step 3 — Fabrication at our facility in Rethymno</h2>
      <p>This is our essential difference: we don't resell ready-made windows. Every unit is cut, assembled and quality-checked at our own production facility on Drouliskou Street, as authorised Alumil fabricators. Fabrication time: typically 2–4 weeks depending on project size and profile orders.</p>
      
      <h2>Step 4 — Removal with full protection of your home</h2>
      <p>On installation day we protect floors and furniture, remove the old frames carefully (avoiding plaster damage wherever possible) and take the old materials away for recycling. In occupied homes we work room by room, so the house is never left "open."</p>
      
      <h2>Step 5 — Installation & sealing</h2>
      <p>Installation decides everything. Levelling and squaring of every frame, anchoring with the specified fixings, low-expansion foam filling, sealing tapes and final silicone work. A top-tier profile with careless installation loses up to half its performance — which is why we never use subcontracted crews.</p>
      
      <h2>Step 6 — Adjustment, inspection & handover</h2>
      <p>We fine-tune mechanisms and sash pressure, walk through the operation and sealing of every window with you, and hand over maintenance instructions and warranties. After-sales doesn't end at handover — we're one phone call away for adjustments.</p>
      
      <h2>When is the best season to replace windows?</h2>
      <p>In Crete, spring and autumn offer ideal conditions, but the truth is that with the room-by-room method, replacement happens year-round. The smartest time to decide, though, is before Exoikonomo 2026 opens — owners with a completed survey and a specification-complete quote move first.</p>
    `
  }
];

const output = "export const articles = " + JSON.stringify(articles, null, 2) + ";";
fs.writeFileSync('src/data/articles.ts', output);
