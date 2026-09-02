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
            background: 'linear-gradient(135deg, #001f4d 0%, #002D72 50%, #003396 100%)',
            borderRadius: '24px',
            padding: '60px 48px',
            color: '#FFFFFF',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 25px 60px rgba(0, 31, 77, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
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
              background: 'radial-gradient(circle, rgba(193, 167, 79, 0.25) 0%, transparent 70%)',
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
                  background: 'rgba(193, 167, 79, 0.2)',
                  color: '#C1A74F',
                  fontSize: '13px',
                  fontWeight: 700,
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  marginBottom: '18px',
                }}
              >
                <Sparkles size={14} /> Lorem Ipsum Dolor Sit Amet
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
                Lorem Ipsum Dolor Sit Amet <br />
                Consectetur Adipiscing Elit
              </h2>
              <p style={{ fontSize: '15px', color: '#B6CCFF', maxWidth: '480px', lineHeight: 1.6 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore.
              </p>
            </div>

            {/* Right Action / Newsletter */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <input
                  type="email"
                  placeholder="Lorem ipsum dolor sit amet..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    flex: '1 1 200px',
                    padding: '14px 20px',
                    borderRadius: '9999px',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    background: 'rgba(255, 255, 255, 0.12)',
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
                  Lorem Ipsum <ArrowRight size={16} />
                </button>
              </form>

              {subscribed && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#C1A74F',
                    fontSize: '13px',
                    fontWeight: 600,
                  }}
                >
                  <CheckCircle size={16} /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              )}

              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', fontSize: '12px', color: '#B6CCFF' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <CheckCircle size={14} color="#C1A74F" /> Lorem Ipsum
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <CheckCircle size={14} color="#C1A74F" /> Dolor Sit Amet
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <CheckCircle size={14} color="#C1A74F" /> Consectetur
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
