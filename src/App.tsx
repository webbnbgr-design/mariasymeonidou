/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MessageCircle, 
  Clock, 
  Shield, 
  Scale, 
  Star, 
  MapPin, 
  CheckCircle2, 
  Menu, 
  X, 
  ArrowRight,
  Zap,
  Heart,
  Calendar,
  Award
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Αρχική', href: '#home' },
    { name: 'Τομείς Δικαίου', href: '#services' },
    { name: 'Γιατί Εμάς', href: '#why-us' },
    { name: 'Επικοινωνία', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Scale className="w-8 h-8 text-electric-blue" />
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-tight tracking-tight">ΜΑΡΓΑΡΙΤΑ Ε. ΣΥΜΕΩΝΙΔΟΥ</span>
            <span className="text-xs text-slate-500 font-medium uppercase tracking-widest">Δικηγόρος - Law Office</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium hover:text-electric-blue transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:6982058665" 
            className="bg-electric-blue text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            6982058665
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-slate-100 p-6 shadow-xl md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="tel:6982058665" 
                className="bg-electric-blue text-white p-4 rounded-xl text-center font-bold flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                6982058665
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-linear-to-bl from-blue-50 to-transparent opacity-50" />
      <div className="absolute -top-24 -left-24 -z-10 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-electric-blue px-4 py-2 rounded-full text-sm font-bold mb-6">
            <Award className="w-4 h-4" />
            5.0 Google Rating (54+ Κριτικές)
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-[1.1] mb-6">
            Νομική εκπροσώπηση <span className="text-electric-blue">χωρίς αναμονή</span>: 
            <br />
            <span className="text-slate-400">Η λύση που χρειάζεστε, τη στιγμή που τη χρειάζεστε.</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
            Εξειδικευμένο δικηγορικό γραφείο στη Θεσσαλονίκη με έμφαση στην ταχύτητα, την αποτελεσματικότητα και την ανθρώπινη προσέγγιση.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="tel:6982058665" 
              className="bg-electric-blue text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-blue-200 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Άμεση Κλήση
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-slate-100 aspect-square flex items-center justify-center">
            <Scale className="w-32 h-32 text-electric-blue/20" />
          </div>
          
          {/* Floating Badge */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-2xl border-2 border-electric-blue flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-electric-blue rounded-xl flex items-center justify-center text-white ring-4 ring-blue-100">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-electric-blue font-black uppercase tracking-wider">365-Day Support</p>
              <p className="text-lg font-black">Ανοιχτά όλο το χρόνο</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const PracticeAreas = () => {
  const areas = [
    { title: 'Αστικό Δίκαιο', icon: <Heart className="w-6 h-6" />, desc: 'Οικογενειακές διαφορές, κληρονομικά, μισθώσεις και εμπράγματο δίκαιο.' },
    { title: 'Ποινικό Δίκαιο', icon: <Shield className="w-6 h-6" />, desc: 'Υπεράσπιση σε κάθε στάδιο της ποινικής διαδικασίας με απόλυτη εχεμύθεια.' },
    { title: 'Εργατικό Δίκαιο', icon: <Scale className="w-6 h-6" />, desc: 'Προστασία δικαιωμάτων εργαζομένων και εργοδοτών, αποζημιώσεις.' },
    { title: 'Εμπορικό Δίκαιο', icon: <Award className="w-6 h-6" />, desc: 'Σύσταση εταιρειών, εμπορικές συμβάσεις και επίλυση διαφορών.' },
  ];

  return (
    <section id="services" className="py-24 silver-gradient">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4">Τομείς Δικαίου</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Ολοκληρωμένες νομικές υπηρεσίες με εξειδίκευση στην άμεση επίλυση σύνθετων υποθέσεων.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {areas.map((area, idx) => (
            <motion.div
              key={area.title}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-blue-50 text-electric-blue rounded-2xl flex items-center justify-center mb-6">
                {area.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{area.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {area.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FastTrackSection = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-electric-blue/10 rounded-full blur-3xl" />
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 text-electric-blue font-black uppercase tracking-widest text-sm mb-4">
              <Zap className="w-4 h-4 fill-electric-blue" />
              Fast-Track Law
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Ανταπόκριση σε <span className="text-electric-blue">"αδύνατα"</span> χρονικά περιθώρια.
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Κατανοούμε ότι οι νομικές ανάγκες δεν ακολουθούν ωράρια. Το γραφείο μας είναι δομημένο για να ανταποκρίνεται άμεσα, ακόμα και σε περιόδους διακοπών ή σε επείγοντα περιστατικά της τελευταίας στιγμής.
            </p>
            <ul className="space-y-4">
              {[
                'Άμεση διαθεσιμότητα 24/7 για επείγοντα',
                'Διεκπεραίωση υποθέσεων σε χρόνο ρεκόρ',
                'Παρουσία ακόμα και τον Δεκαπενταύγουστο',
                'Express handling γραφειοκρατικών διαδικασιών'
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 font-bold text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-electric-blue" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4 pt-12">
            <div className="bg-slate-100 rounded-3xl h-64 overflow-hidden">
              <img src="https://picsum.photos/seed/justice-office/400/600" alt="Law" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="bg-electric-blue rounded-3xl h-48 flex flex-col items-center justify-center text-white p-6 text-center">
              <span className="text-4xl font-black mb-1">100%</span>
              <span className="text-xs font-bold uppercase tracking-widest">Αφοσίωση</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-silver rounded-3xl h-48 overflow-hidden">
              <img src="https://picsum.photos/seed/legal-docs/400/600" alt="Law" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="bg-slate-900 rounded-3xl h-64 overflow-hidden p-8 text-white flex flex-col justify-end">
              <Clock className="w-10 h-10 text-electric-blue mb-4" />
              <p className="text-xl font-bold">Χρόνος: Το πολυτιμότερο αγαθό σας.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ReviewsWall = () => {
  const reviews = [
    { name: "Γιώργος Π.", rating: 5, text: "Εξαιρετική επαγγελματίας. Ανέλαβε την υπόθεσή μου τελευταία στιγμή και το αποτέλεσμα ήταν άψογο. Την συστήνω ανεπιφύλακτα!" },
    { name: "Μαρία Κ.", rating: 5, text: "Δούλευε μέσα στον Αύγουστο για να προλάβουμε τις προθεσμίες. Τέτοια αφοσίωση δεν έχω ξαναδεί σε δικηγόρο." },
    { name: "Νίκος Σ.", rating: 5, text: "Άμεση ανταπόκριση, ανθρώπινη προσέγγιση και πάνω από όλα αποτελεσματικότητα. 5 αστέρια είναι λίγα." },
    { name: "Ελένη Β.", rating: 5, text: "Με βοήθησε σε μια πολύ δύσκολη στιγμή. Ήταν δίπλα μου 24/7. Ευχαριστώ για όλα!" },
    { name: "Κώστας Μ.", rating: 5, text: "Ταχύτητα και γνώση του αντικειμένου. Η καλύτερη επιλογή στη Θεσσαλονίκη." },
    { name: "Άννα Δ.", rating: 5, text: "Επαγγελματισμός και συνέπεια. Πολύ ευγενική και κατατοπιστική." },
  ];

  return (
    <section id="why-us" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-electric-blue font-black mb-4">
              <Star className="w-5 h-5 fill-electric-blue" />
              The 5-Star Experience
            </div>
            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              Η εμπιστοσύνη σας, <br />
              <span className="text-slate-500">η καλύτερη διαφήμισή μας.</span>
            </h2>
          </div>
          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/10 flex items-center gap-6">
            <div className="text-center">
              <div className="text-5xl font-black text-electric-blue">5.0</div>
              <div className="flex gap-1 justify-center mt-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
              </div>
            </div>
            <div className="h-12 w-px bg-white/20" />
            <div>
              <div className="text-2xl font-black">54+</div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Google Reviews</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-electric-blue text-electric-blue" />)}
              </div>
              <p className="text-slate-300 italic mb-6 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-electric-blue rounded-full flex items-center justify-center font-bold">
                  {review.name[0]}
                </div>
                <span className="font-bold">{review.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://www.google.com/search?q=ΜΑΡΓΑΡΙΤΑ+ΣΥΜΕΩΝΙΔΟΥ+ΔΙΚΗΓΟΡΟΣ+ΘΕΣΣΑΛΟΝΙΚΗ" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-bold"
          >
            Δείτε όλες τις κριτικές στο Google
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-electric-blue rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                Είμαστε εδώ για εσάς. <br />
                <span className="text-blue-200">Κάθε στιγμή.</span>
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-blue-100 font-bold uppercase tracking-widest text-xs mb-1">Διεύθυνση</p>
                    <p className="text-xl font-bold">26ης Οκτωβρίου 26, Θεσσαλονίκη (Κέντρο)</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                    <Phone className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-blue-100 font-bold uppercase tracking-widest text-xs mb-1">Τηλέφωνο</p>
                    <p className="text-xl font-bold">6982058665</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                    <Clock className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-blue-100 font-bold uppercase tracking-widest text-xs mb-1">Ωράριο</p>
                    <p className="text-xl font-bold">Διαθεσιμότητα 365 ημέρες / χρόνο</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[2rem] p-8 md:p-12 text-slate-900 shadow-2xl">
              <h3 className="text-2xl font-black mb-6">Χρειάζεστε άμεση βοήθεια;</h3>
              <p className="text-slate-500 mb-8">
                Μην περιμένετε. Καλέστε μας τώρα για άμεση αξιολόγηση της υπόθεσής σας.
              </p>
              <div className="grid gap-4">
                <a 
                  href="tel:6982058665" 
                  className="bg-electric-blue text-white p-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-blue-700 transition-colors"
                >
                  <Phone className="w-6 h-6" />
                  Καλέστε Τώρα
                </a>
              </div>
              <div className="mt-8 pt-8 border-t border-slate-100 flex items-center justify-center gap-4 text-slate-400">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-medium">Απόλυτη εχεμύθεια & προστασία δεδομένων</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <Scale className="w-6 h-6 text-electric-blue" />
          <span className="font-bold text-sm tracking-tight">ΜΑΡΓΑΡΙΤΑ Ε. ΣΥΜΕΩΝΙΔΟΥ</span>
        </div>
        <p className="text-slate-400 text-sm">
          © {new Date().getFullYear()} Margarita Symeonidou Law Office. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-slate-400 hover:text-electric-blue transition-colors text-sm font-medium">Privacy Policy</a>
          <a href="#" className="text-slate-400 hover:text-electric-blue transition-colors text-sm font-medium">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

const FloatingActions = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="tel:6982058665"
        className="w-16 h-16 bg-electric-blue text-white rounded-full flex items-center justify-center shadow-2xl shadow-blue-200"
      >
        <Phone className="w-8 h-8" />
      </motion.a>
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-electric-blue selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <PracticeAreas />
        <FastTrackSection />
        <ReviewsWall />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
