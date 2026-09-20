import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { MobileMenu } from './components/MobileMenu';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { RepairsPage } from './pages/RepairsPage';
import { GalleryPage } from './pages/GalleryPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';
import { PageView } from './types';
import { businessConfig } from './data/businessData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Sync state with URL hash for accessible bookmarking and browser navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageView;
      const validPages: PageView[] = [
        'home',
        'about',
        'services',
        'repairs',
        'gallery',
        'reviews',
        'faq',
        'contact',
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    // Initialize from hash if present
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageView) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    handleNavigate('services');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0c1219] text-[#f2f4f7] selection:bg-[#c36b44] selection:text-white">
      {/* Sticky Header with Navigation and Primary Call Now CTA */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Accessible Mobile Sliding Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main Page View Switching */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage onNavigate={handleNavigate} onSelectService={handleSelectService} />
        )}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            selectedServiceId={selectedServiceId}
          />
        )}
        {currentPage === 'repairs' && <RepairsPage onNavigate={handleNavigate} />}
        {currentPage === 'gallery' && <GalleryPage onNavigate={handleNavigate} />}
        {currentPage === 'reviews' && <ReviewsPage onNavigate={handleNavigate} />}
        {currentPage === 'faq' && <FAQPage onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Footer with exact required business configuration */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
