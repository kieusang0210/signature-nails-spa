import { useState } from 'react';
import { Header } from './components/ui/Header';
import { Footer } from './components/ui/Footer';
import { BookingModal } from './components/ui/BookingModal';
import { MobileBookingBar } from './components/ui/MobileBookingBar';
import { FloatingPetals } from './components/ui/FloatingPetals';
import { BotanicalBranch, BotanicalDivider } from './components/ui/BotanicalDecor';

// Homepage Components
import { HeroDual } from './components/home/HeroDual';
import { ServicePathCards } from './components/home/ServicePathCards';
import { SkinConcernGrid } from './components/home/SkinConcernGrid';
import { FacialExperience } from './components/home/FacialExperience';
import { FeaturedFacials } from './components/home/FeaturedFacials';
import { EstheticianProfile } from './components/home/EstheticianProfile';
import { NailShowcase } from './components/home/NailShowcase';
import { NailsToGlowBridge } from './components/home/NailsToGlowBridge';
import { ReviewTabs } from './components/ui/ReviewTabs';

// Dedicated Sub-Pages
import { NailsPage } from './pages/NailsPage';
import { FacialPage } from './pages/FacialPage';
import { ResultsPage } from './pages/ResultsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

import { Sparkles, Calendar, HeartHandshake, Phone } from 'lucide-react';

export function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);
  const [bookingType, setBookingType] = useState<'nails' | 'facial' | 'consultation' | undefined>(undefined);
  const [selectedConcernId, setSelectedConcernId] = useState<string | undefined>(undefined);

  const handleNavigate = (tab: string, concernId?: string) => {
    setCurrentTab(tab);
    if (concernId) {
      setSelectedConcernId(concernId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (type?: 'nails' | 'facial' | 'consultation') => {
    setBookingType(type);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3EA] text-[#243126] font-sans selection:bg-[#AEB9A5] selection:text-[#243126] relative">
      {/* Floating Flower Petal Effect */}
      <FloatingPetals />

      {/* Header Navigation */}
      <Header
        currentTab={currentTab}
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Content Router */}
      <main className="flex-grow">
        {currentTab === 'home' && (
          <>
            {/* SECTION 1 — HERO */}
            <HeroDual onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />

            {/* SECTION 2 — TWO SERVICE PATHS */}
            <ServicePathCards onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />

            {/* SECTION 3 — FACIAL DISCOVERY FEATURE */}
            <SkinConcernGrid onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />

            {/* SECTION 4 — FEATURED FACIAL EXPERIENCE */}
            <FacialExperience onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />

            {/* SECTION 5 — FEATURED FACIALS */}
            <FeaturedFacials onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />

            {/* SECTION 7 — MEET THE ESTHETICIAN */}
            <EstheticianProfile onOpenBooking={handleOpenBooking} />

            {/* SECTION 8 — NAIL EXPERIENCE */}
            <NailShowcase onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />

            {/* SECTION 9 — NAILS TO GLOW CROSS-SELL */}
            <NailsToGlowBridge onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />

            {/* SECTION 10 — REVIEWS */}
            <ReviewTabs />

            {/* SECTION 14 — EMOTIONAL FINAL CTA */}
            <section className="py-24 bg-[#243126] text-white text-center relative overflow-hidden">
              <BotanicalBranch className="absolute top-0 right-0 w-80 h-96 text-[#AEB9A5]" opacity={0.08} />
              <BotanicalBranch className="absolute bottom-0 left-0 w-80 h-96 text-[#E8DFD1] rotate-180" opacity={0.06} />

              <div className="max-w-4xl mx-auto px-4 space-y-6 relative z-10">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#AEB9A5]">
                  Comstock Park, Michigan
                </span>

                <h2 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight">
                  Your time. Your beauty. <br />
                  <span className="italic font-normal text-[#E8D6D1]">Your Signature.</span>
                </h2>

                <p className="text-xs sm:text-sm text-[#FCFAF5]/80 max-w-xl mx-auto leading-relaxed">
                  Experience meticulous nail care or approachable professional skincare in an elegant, welcoming environment.
                </p>

                <BotanicalDivider />

                <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
                  <button
                    onClick={() => handleOpenBooking('nails')}
                    className="bg-[#FCFAF5] text-[#243126] hover:bg-white px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest transition-colors shadow-md flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4 text-[#7E8B72]" />
                    <span>Book Nail Visit</span>
                  </button>

                  <button
                    onClick={() => handleOpenBooking('facial')}
                    className="bg-[#3E4A2A] text-white hover:bg-[#7E8B72] px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest transition-colors shadow-md flex items-center justify-center gap-2 border border-[#AEB9A5]/40"
                  >
                    <Sparkles className="w-4 h-4 text-[#E8D6D1]" />
                    <span>Book Facial Visit</span>
                  </button>

                  <button
                    onClick={() => handleOpenBooking('consultation')}
                    className="bg-transparent text-[#FCFAF5] hover:bg-[#3E4A2A] border border-[#AEB9A5] px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest transition-colors shadow-sm flex items-center justify-center gap-2"
                  >
                    <HeartHandshake className="w-4 h-4 text-[#AEB9A5]" />
                    <span>Free Consultation</span>
                  </button>
                </div>

                <div className="pt-8 border-t border-[#3E4A2A] flex flex-col sm:flex-row justify-between items-center text-xs text-[#FCFAF5]/70 gap-2">
                  <span>3782 Alpine Ave NW, Comstock Park, MI 49321</span>
                  <a href="tel:616-785-0944" className="hover:text-white flex items-center gap-1 font-semibold text-[#AEB9A5]">
                    <Phone className="w-3.5 h-3.5" />
                    <span>616-785-0944</span>
                  </a>
                </div>
              </div>
            </section>
          </>
        )}

        {currentTab === 'nails' && <NailsPage onOpenBooking={handleOpenBooking} />}
        {currentTab === 'facial' && <FacialPage onOpenBooking={handleOpenBooking} selectedConcernId={selectedConcernId} />}
        {currentTab === 'results' && <ResultsPage onOpenBooking={handleOpenBooking} />}
        {currentTab === 'about' && <AboutPage onOpenBooking={handleOpenBooking} />}
        {currentTab === 'contact' && <ContactPage onOpenBooking={handleOpenBooking} />}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />

      {/* Mobile Bottom Booking Bar */}
      <MobileBookingBar onOpenBooking={handleOpenBooking} />

      {/* Interactive 3-Option Booking Choice Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialService={bookingType}
      />
    </div>
  );
}

export default App;
