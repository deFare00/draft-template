'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

interface CtaSectionProps {
  onOpenQuote: () => void;
}

export default function CtaSection({ onOpenQuote }: CtaSectionProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <section id="contact" style={{ padding: '40px 0 80px 0', background: '#F7F6F1' }}>
      <div className="container">
        <div
          style={{
            background: 'linear-gradient(135deg, #0F2B27 0%, #17423B 60%, #10332D 100%)',
            borderRadius: '24px',
            padding: '60px 48px',
            color: '#FFFFFF',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 25px 60px rgba(15, 43, 39, 0.25)',
          }}
          className="cta-banner"
        >
          {/* Background Ambient Glow */}
          <div
            style={{
              position: 'absolute',
              top: '-20%',
              right: '-10%',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(203, 233, 107, 0.2) 0%, transparent 70%)',
              filter: 'blur(50px)',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 0.8fr',
              gap: '40px',
              alignItems: 'center',
              position: 'relative',
              zIndex: 10,
            }}
            className="cta-grid"
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'rgba(203, 233, 107, 0.15)',
                  color: '#CBE96B',
                  fontSize: '13px',
                  fontWeight: 700,
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  marginBottom: '18px',
                }}
              >
                <Sparkles size={14} /> Ready to Grow Your Business?
              </div>
              <h2
                style={{
                  fontSize: 'clamp(30px, 3.5vw, 42px)',
                  fontWeight: 800,
                  lineHeight: 1.2,
                  marginBottom: '16px',
                  letterSpacing: '-0.02em',
                }}
              >
                Let&apos;s Build Your Financial <br />
                Success Story Together
              </h2>
              <p style={{ fontSize: '15px', color: '#B5CAC3', maxWidth: '480px', lineHeight: 1.6 }}>
                Schedule a complimentary 30-minute strategic consultation with our lead financial advisors today.
              </p>
            </div>

            {/* Right Action / Newsletter */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <input
                  type="email"
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    flex: '1 1 200px',
                    padding: '14px 20px',
                    borderRadius: '9999px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: '#FFFFFF',
                    fontSize: '14px',
                    outline: 'none',
                    backdropFilter: 'blur(8px)',
                  }}
                />
                <button
                  type="submit"
                  className="btn-lime"
                  style={{ padding: '14px 24px', fontSize: '14px', whiteSpace: 'nowrap' }}
                >
                  Get Started <ArrowRight size={16} />
                </button>
              </form>

              {subscribed && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#CBE96B',
                    fontSize: '13px',
                    fontWeight: 600,
                  }}
                >
                  <CheckCircle size={16} /> Thank you! Our advisor will contact you within 24 hours.
                </div>
              )}

              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', fontSize: '12px', color: '#8FA39C' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <CheckCircle size={14} color="#CBE96B" /> Free Consultation
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <CheckCircle size={14} color="#CBE96B" /> No Commitment
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <CheckCircle size={14} color="#CBE96B" /> Confidential
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 860px) {
          .cta-banner {
            padding: 40px 24px !important;
          }
          .cta-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
