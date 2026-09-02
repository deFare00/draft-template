'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Lightbulb, Compass, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenQuote?: () => void;
}

export default function AboutSection({ onOpenQuote }: AboutSectionProps) {
  const [counterActive, setCounterActive] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('about');
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setCounterActive(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" style={{ padding: '80px 0 100px 0', background: '#FFFFFF' }}>
      <div className="container">
        {/* Main Grid: Left Photo + Right Details */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'center',
            marginBottom: '70px',
          }}
          className="about-grid"
        >
          {/* Left Column: Meeting Photo + Company Vision */}
          <div>
            <div
              style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 12px 35px rgba(15, 43, 39, 0.08)',
                marginBottom: '28px',
              }}
            >
              <Image
                src="/images/about-meeting.png"
                alt="Optibiz Financial Consultant Meeting"
                width={540}
                height={320}
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
              />
            </div>

            {/* Company Vision */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: '#C1A74F',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  color: '#FFFFFF',
                  boxShadow: '0 4px 12px rgba(193, 167, 79, 0.35)',
                }}
              >
                <Compass size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#191C1E', marginBottom: '6px' }}>
                  Lorem Ipsum
                </h4>
                <p style={{ fontSize: '13.5px', color: '#737784', lineHeight: 1.6 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Heading + Mission + CTA Bar */}
          <div>
            <div className="pill-badge">About Us</div>
            <h2 className="section-title" style={{ marginBottom: '28px', color: '#191C1E' }}>
              Lorem Ipsum Dolor <br />
              Sit Amet Consectetur
            </h2>

            {/* Company Mission */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '32px' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: '#C1A74F',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  color: '#FFFFFF',
                  boxShadow: '0 4px 12px rgba(193, 167, 79, 0.35)',
                }}
              >
                <Lightbulb size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#191C1E', marginBottom: '6px' }}>
                  Dolor Sit Amet
                </h4>
                <p style={{ fontSize: '13.5px', color: '#737784', lineHeight: 1.6 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
              </div>
            </div>

            {/* Dark CTA Banner Bar */}
            <div
              style={{
                background: '#0864aa',
                borderRadius: '9999px',
                padding: '12px 14px 12px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px',
                boxShadow: '0 10px 30px rgba(8, 100, 170, 0.25)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
              }}
              className="about-cta-bar"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <CheckCircle2 size={20} color="#C1A74F" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '13px', color: '#FFFFFF', fontWeight: 500, lineHeight: 1.4 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.
                </span>
              </div>
              <button
                onClick={onOpenQuote}
                className="btn-lime"
                style={{
                  padding: '10px 20px',
                  fontSize: '13px',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
              >
                Lorem Ipsum <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>

        {/* 4 Metrics Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '30px',
            paddingTop: '40px',
            borderTop: '1px solid #E2E8F0',
          }}
          className="metrics-grid"
        >
          {/* Stat 1 */}
          <div style={{ position: 'relative', paddingLeft: '16px', borderLeft: '3px solid #003396' }}>
            <div style={{ fontSize: '38px', fontWeight: 800, color: '#0864aa', lineHeight: 1.1, marginBottom: '6px' }}>
              {counterActive ? '25' : '0'}<span style={{ color: '#C1A74F' }}> +</span>
            </div>
            <p style={{ fontSize: '13px', color: '#737784', lineHeight: 1.4 }}>
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>

          {/* Stat 2 */}
          <div style={{ position: 'relative', paddingLeft: '16px', borderLeft: '3px solid #003396' }}>
            <div style={{ fontSize: '38px', fontWeight: 800, color: '#0864aa', lineHeight: 1.1, marginBottom: '6px' }}>
              {counterActive ? '150K' : '0'}<span style={{ color: '#C1A74F' }}> +</span>
            </div>
            <p style={{ fontSize: '13px', color: '#737784', lineHeight: 1.4 }}>
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>

          {/* Stat 3 */}
          <div style={{ position: 'relative', paddingLeft: '16px', borderLeft: '3px solid #003396' }}>
            <div style={{ fontSize: '38px', fontWeight: 800, color: '#0864aa', lineHeight: 1.1, marginBottom: '6px' }}>
              {counterActive ? '98%' : '0%'}
            </div>
            <p style={{ fontSize: '13px', color: '#737784', lineHeight: 1.4 }}>
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>

          {/* Stat 4 */}
          <div style={{ position: 'relative', paddingLeft: '16px', borderLeft: '3px solid #003396' }}>
            <div style={{ fontSize: '38px', fontWeight: 800, color: '#0864aa', lineHeight: 1.1, marginBottom: '6px' }}>
              {counterActive ? '$40M' : '$0'}<span style={{ color: '#C1A74F' }}> +</span>
            </div>
            <p style={{ fontSize: '13px', color: '#737784', lineHeight: 1.4 }}>
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px;
          }
          .about-cta-bar {
            border-radius: 16px !important;
            flex-direction: column;
            align-items: flex-start;
          }
          .about-cta-bar button {
            width: 100%;
          }
          .metrics-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 24px;
          }
        }
        @media (max-width: 520px) {
          .metrics-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
