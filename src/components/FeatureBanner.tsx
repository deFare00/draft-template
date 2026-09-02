'use client';

import React from 'react';
import Image from 'next/image';
import { Briefcase, Target, DollarSign, ArrowRight } from 'lucide-react';

interface FeatureBannerProps {
  onOpenVideo?: () => void;
  onOpenQuote?: () => void;
}

export default function FeatureBanner({ onOpenVideo }: FeatureBannerProps) {
  return (
    <section id="features" style={{ position: 'relative', marginTop: '-60px', zIndex: 30, paddingBottom: '40px' }}>
      <div className="container">
        <div
          style={{
            background: '#0864aa',
            borderRadius: '20px',
            padding: '24px',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 20px 50px rgba(8, 100, 170, 0.35)',
            display: 'grid',
            gridTemplateColumns: '260px 1fr 1fr 1fr',
            gap: '24px',
            alignItems: 'center',
          }}
          className="feature-banner-grid"
        >
          {/* Left Thumbnail Card */}
          <div
            onClick={onOpenVideo}
            style={{
              position: 'relative',
              borderRadius: '14px',
              overflow: 'hidden',
              cursor: 'pointer',
              height: '140px',
              boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <Image
              src="/images/video-thumb.jpg"
              alt="How Does It Work?"
              fill
              style={{ objectFit: 'cover' }}
            />
            {/* Dark gradient overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(8, 100, 170, 0.2) 0%, rgba(8, 100, 170, 0.92) 100%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '16px',
                color: '#FFFFFF',
              }}
            >
              <div style={{ fontSize: '15px', fontWeight: 700, marginBottom: '4px' }}>Lorem Ipsum Dolor?</div>
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#C1A74F',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                Lorem Ipsum <ArrowRight size={13} />
              </div>
            </div>
          </div>

          {/* Pillar 1 */}
          <div style={{ padding: '0 12px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: 'rgba(193, 167, 79, 0.18)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '14px',
                color: '#C1A74F',
              }}
            >
              <Briefcase size={18} />
            </div>
            <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF', marginBottom: '6px' }}>
              Lorem Ipsum Dolor
            </h3>
            <p style={{ fontSize: '12.5px', color: '#B6CCFF', lineHeight: 1.5 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut.
            </p>
          </div>

          {/* Pillar 2 */}
          <div style={{ padding: '0 12px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: 'rgba(193, 167, 79, 0.18)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '14px',
                color: '#C1A74F',
              }}
            >
              <Target size={18} />
            </div>
            <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF', marginBottom: '6px' }}>
              Dolor Sit Amet
            </h3>
            <p style={{ fontSize: '12.5px', color: '#B6CCFF', lineHeight: 1.5 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut.
            </p>
          </div>

          {/* Pillar 3 */}
          <div style={{ padding: '0 12px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: 'rgba(193, 167, 79, 0.18)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '14px',
                color: '#C1A74F',
              }}
            >
              <DollarSign size={18} />
            </div>
            <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF', marginBottom: '6px' }}>
              Consectetur Elit
            </h3>
            <p style={{ fontSize: '12.5px', color: '#B6CCFF', lineHeight: 1.5 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .feature-banner-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 20px;
          }
        }
        @media (max-width: 640px) {
          .feature-banner-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
