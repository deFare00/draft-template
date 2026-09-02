'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ background: '#0A201D', color: '#D1DDD9', paddingTop: '70px', paddingBottom: '30px' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr',
            gap: '40px',
            paddingBottom: '50px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          }}
          className="footer-grid"
        >
          {/* Col 1: Brand Info */}
          <div>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: '#CBE96B',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="7" stroke="#0F2B27" strokeWidth="2.5" />
                  <path d="M12 5V19" stroke="#0F2B27" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
              <span style={{ fontSize: '22px', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
                ptibiz
              </span>
            </Link>
            <p style={{ fontSize: '13.5px', color: '#8FA39C', lineHeight: 1.65, maxWidth: '280px', marginBottom: '22px' }}>
              Empowering enterprises and individuals with state-of-the-art financial consulting, strategic planning, and sustainable growth advisory.
            </p>
            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <SocialButton href="https://linkedin.com">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45c-.91 0-1.64.73-1.64 1.64s.73 1.64 1.64 1.64 1.64-.73 1.64-1.64-.73-1.64-1.64-1.64Z"/>
                </svg>
              </SocialButton>
              <SocialButton href="https://x.com">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </SocialButton>
              <SocialButton href="https://facebook.com">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/>
                </svg>
              </SocialButton>
              <SocialButton href="https://instagram.com">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z"/>
                </svg>
              </SocialButton>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF', marginBottom: '20px' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <FooterLink href="#home">Home</FooterLink>
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#services">Our Services</FooterLink>
              <FooterLink href="#how-we-work">How We Work</FooterLink>
              <FooterLink href="#testimonials">Client Reviews</FooterLink>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF', marginBottom: '20px' }}>
              Our Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <FooterLink href="#services">Business Strategies</FooterLink>
              <FooterLink href="#services">Taxes & Accounting</FooterLink>
              <FooterLink href="#services">Financial Planning</FooterLink>
              <FooterLink href="#features">Operational Consulting</FooterLink>
              <FooterLink href="#features">Wealth Management</FooterLink>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF', marginBottom: '20px' }}>
              Contact Us
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '13.5px', color: '#8FA39C' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <MapPin size={16} color="#CBE96B" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>124 FinTech Avenue, Suite 800, Financial District, NY 10005</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Phone size={16} color="#CBE96B" style={{ flexShrink: 0 }} />
                <span>+1 (800) 456-7890</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Mail size={16} color="#CBE96B" style={{ flexShrink: 0 }} />
                <span>contact@optibiz-consulting.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '25px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '12.5px',
            color: '#6F847E',
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} Optibiz Consulting. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link href="#" style={{ color: '#8FA39C' }}>Privacy Policy</Link>
            <Link href="#" style={{ color: '#8FA39C' }}>Terms of Service</Link>
            <Link href="#" style={{ color: '#8FA39C' }}>Security</Link>
          </div>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.08)',
              color: '#CBE96B',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#CBE96B';
              e.currentTarget.style.color = '#0F2B27';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.color = '#CBE96B';
            }}
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 540px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        style={{
          fontSize: '13.5px',
          color: '#8FA39C',
          transition: 'color 0.2s ease',
          display: 'inline-block',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = '#CBE96B')}
        onMouseLeave={(e) => (e.currentTarget.style.color = '#8FA39C')}
      >
        {children}
      </Link>
    </li>
  );
}

function SocialButton({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        width: '34px',
        height: '34px',
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.06)',
        color: '#D1DDD9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = '#CBE96B';
        e.currentTarget.style.color = '#0F2B27';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
        e.currentTarget.style.color = '#D1DDD9';
      }}
    >
      {children}
    </a>
  );
}
