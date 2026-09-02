'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeatureBanner from '@/components/FeatureBanner';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import HowWeWorkSection from '@/components/HowWeWorkSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';
import VideoModal from '@/components/VideoModal';
import ScrollToTop from '@/components/ScrollToTop';

export default function LandingPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Header & Sticky Navigation */}
      <Navbar onOpenQuote={() => setQuoteModalOpen(true)} />

      {/* Hero Section */}
      <Hero
        onOpenQuote={() => setQuoteModalOpen(true)}
        onOpenVideo={() => setVideoModalOpen(true)}
      />

      {/* Floating 3 Consulting Pillars Banner */}
      <FeatureBanner
        onOpenVideo={() => setVideoModalOpen(true)}
        onOpenQuote={() => setQuoteModalOpen(true)}
      />

      {/* About Us & Metrics Section */}
      <AboutSection onOpenQuote={() => setQuoteModalOpen(true)} />

      {/* Financial Services Section */}
      <ServicesSection onOpenQuote={() => setQuoteModalOpen(true)} />

      {/* How We Work 4 Steps Section */}
      <HowWeWorkSection />

      {/* Client Testimonials Section */}
      <TestimonialsSection onOpenQuote={() => setQuoteModalOpen(true)} />

      {/* Ready to Grow CTA Banner */}
      <CtaSection onOpenQuote={() => setQuoteModalOpen(true)} />

      {/* Full Footer */}
      <Footer />

      {/* Interactive Modals */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />

      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />

      {/* Scroll to Top Utility */}
      <ScrollToTop />
    </main>
  );
}
