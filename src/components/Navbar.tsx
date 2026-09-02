'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, ArrowRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenQuote: () => void;
}

export default function Navbar({ onOpenQuote }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pagesDropdown, setPagesDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: scrolled ? '10px 0' : '18px 0',
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(0, 96, 169, 0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.2)' : 'none',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(255, 255, 255, 0.96)',
              padding: '5px 14px',
              borderRadius: '12px',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.12)',
              border: '1px solid rgba(255, 255, 255, 0.8)',
            }}
          >
            <Image
              src="/images/abvc-logo.webp"
              alt="ASEAN Biological Threats Surveillance Centre"
              width={160}
              height={38}
              priority
              style={{
                height: '34px',
                width: 'auto',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </div>
        </Link>

        {/* Center Navigation Capsule (Desktop) */}
        <nav
          className="desktop-nav"
          style={{
            background: '#0060a9',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            borderRadius: '9999px',
            padding: '6px 14px',
            alignItems: 'center',
            gap: '6px',
            boxShadow: '0 6px 20px rgba(0, 96, 169, 0.35)',
          }}
        >
          <NavLink href="#home" active>Home</NavLink>
          <NavLink href="#about">About Us</NavLink>
          <NavLink href="#services">Services</NavLink>
          
          {/* Dropdown Menu */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setPagesDropdown(true)}
            onMouseLeave={() => setPagesDropdown(false)}
          >
            <button
              style={{
                color: '#FFFFFF',
                fontSize: '13.5px',
                fontWeight: 500,
                padding: '6px 14px',
                borderRadius: '9999px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                transition: 'all 0.2s ease',
              }}
            >
              Pages <ChevronDown size={14} />
            </button>
            {pagesDropdown && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  marginTop: '8px',
                  background: '#0060a9',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '12px',
                  padding: '8px 0',
                  minWidth: '160px',
                  boxShadow: '0 10px 30px rgba(0, 96, 169, 0.4)',
                  zIndex: 60,
                }}
              >
                <DropdownItem href="#how-we-work">How We Work</DropdownItem>
                <DropdownItem href="#testimonials">Testimonials</DropdownItem>
                <DropdownItem href="#features">Consulting Pillars</DropdownItem>
              </div>
            )}
          </div>

          <NavLink href="#contact">Contact Us</NavLink>
        </nav>

        {/* Action Button (Desktop) */}
        <div className="desktop-nav">
          <button
            onClick={onOpenQuote}
            className="btn-white"
            style={{ fontSize: '13.5px', padding: '9px 20px' }}
          >
            Get A Quote <ArrowRight size={15} />
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          style={{
            color: '#FFFFFF',
            padding: '8px',
            borderRadius: '8px',
            background: '#0060a9',
            border: '1px solid rgba(255, 255, 255, 0.2)',
          }}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '70px',
            left: '16px',
            right: '16px',
            background: '#0060a9',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '20px',
            padding: '24px',
            boxShadow: '0 20px 40px rgba(0, 96, 169, 0.5)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            zIndex: 100,
          }}
        >
          <MobileNavLink href="#home" onClick={() => setMobileMenuOpen(false)}>Home</MobileNavLink>
          <MobileNavLink href="#about" onClick={() => setMobileMenuOpen(false)}>About Us</MobileNavLink>
          <MobileNavLink href="#services" onClick={() => setMobileMenuOpen(false)}>Services</MobileNavLink>
          <MobileNavLink href="#how-we-work" onClick={() => setMobileMenuOpen(false)}>How We Work</MobileNavLink>
          <MobileNavLink href="#testimonials" onClick={() => setMobileMenuOpen(false)}>Testimonials</MobileNavLink>
          <MobileNavLink href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</MobileNavLink>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenQuote();
            }}
            className="btn-lime"
            style={{ width: '100%', marginTop: '8px' }}
          >
            Get A Quote <ArrowRight size={16} />
          </button>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, children, active }: { href: string; children: React.ReactNode; active?: boolean }) {
  return (
    <Link
      href={href}
      style={{
        color: active ? '#FFFFFF' : '#D1DDD9',
        fontSize: '13.5px',
        fontWeight: active ? 600 : 500,
        padding: '6px 14px',
        borderRadius: '9999px',
        background: active ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
        transition: 'all 0.2s ease',
        display: 'inline-block',
      }}
    >
      {children}
    </Link>
  );
}

function DropdownItem({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      style={{
        display: 'block',
        padding: '8px 18px',
        color: '#D1DDD9',
        fontSize: '13px',
        fontWeight: 500,
        transition: 'background 0.2s ease',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
      onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      style={{
        color: '#FFFFFF',
        fontSize: '16px',
        fontWeight: 600,
        padding: '8px 0',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      {children}
    </Link>
  );
}
