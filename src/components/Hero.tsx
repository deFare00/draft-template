'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Play, CheckCircle2, Star } from 'lucide-react';

interface HeroProps {
  onOpenQuote: () => void;
  onOpenVideo: () => void;
}

export default function Hero({ onOpenQuote, onOpenVideo }: HeroProps) {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        background: 'linear-gradient(155deg, #184F5B 0%, #2A6C7B 25%, #468E9E 50%, #76BAC7 75%, #BBE3E8 92%, #E9F7F8 100%)',
        paddingTop: '130px',
        paddingBottom: '120px',
        overflow: 'hidden',
        color: '#FFFFFF',
      }}
    >
      {/* Ambient background glows */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(181, 154, 88, 0.25) 0%, rgba(181, 154, 88, 0) 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '10%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(42, 108, 123, 0.6) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.05fr 0.95fr',
            gap: '40px',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Content Column */}
          <div>
            {/* Top Badges Row */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px',
                marginBottom: '20px',
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  padding: '6px 16px',
                  borderRadius: '9999px',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#E3ECE8',
                }}
              >
                Lorem Ipsum Dolor
              </div>

              {/* Floating feature label */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '12px',
                  fontWeight: 500,
                  color: '#C6DDD5',
                  maxWidth: '240px',
                  lineHeight: 1.3,
                }}
              >
                <CheckCircle2 size={16} color="#C1A74F" style={{ flexShrink: 0 }} />
                <span>Lorem ipsum dolor sit amet consectetur adipiscing elit</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(36px, 4.5vw, 56px)',
                fontWeight: 800,
                lineHeight: 1.12,
                color: '#FFFFFF',
                letterSpacing: '-0.025em',
                marginBottom: '24px',
              }}
            >
              Lorem Ipsum <br />
              Dolor Sit Amet <br />
              Consectetur
            </h1>

            {/* Description */}
            <p
              style={{
                fontSize: '15.5px',
                lineHeight: 1.7,
                color: '#D8E2FF',
                maxWidth: '480px',
                marginBottom: '36px',
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            {/* CTA Buttons Row */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '18px',
                marginBottom: '48px',
                flexWrap: 'wrap',
              }}
            >
              <button
                onClick={onOpenQuote}
                className="btn-lime"
                style={{
                  fontSize: '15px',
                  padding: '13px 28px',
                }}
              >
                Lorem Ipsum <ArrowRight size={17} />
              </button>

              {/* Video Play Button */}
              <button
                onClick={onOpenVideo}
                aria-label="Play Introduction Video"
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  background: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.08)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(193, 167, 79, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.15)';
                }}
              >
                <Play size={18} fill="#0864aa" color="#0864aa" style={{ marginLeft: '2px' }} />
              </button>
            </div>

            {/* Social Proof & Rating Bottom Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '32px',
                flexWrap: 'wrap',
                paddingTop: '20px',
                borderTop: '1px solid rgba(255, 255, 255, 0.12)',
              }}
            >
              {/* Star Rating & Score */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '2px', marginBottom: '2px' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="#C1A74F" color="#C1A74F" />
                    ))}
                    <span style={{ fontSize: '11.5px', color: '#D8E2FF', marginLeft: '4px', fontWeight: 600 }}>
                      (4,5/5)
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                    <span style={{ fontSize: '24px', fontWeight: 800, color: '#FFFFFF' }}>4.5</span>
                    <span style={{ fontSize: '11px', color: '#B6CCFF', lineHeight: 1.2, maxWidth: '100px' }}>
                      Lorem ipsum dolor sit amet consectetur
                    </span>
                  </div>
                </div>
              </div>

              {/* Team Avatar Stack */}
              <div>
                <div style={{ fontSize: '12px', fontWeight: 600, color: '#D8E2FF', marginBottom: '6px' }}>
                  Lorem Ipsum:
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Image
                    src="/images/team-avatar-stack.png"
                    alt="Team members"
                    width={95}
                    height={32}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Hero Graphics (Dual 3D Smartphone Mockups + Floating Experience Badge) */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '560px',
            }}
          >
            <div
              className="animate-float hero-mockup-container"
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '520px',
                height: '560px',
              }}
            >
              {/* Secondary Phone (Back - Map Screen) */}
              <div
                style={{
                  position: 'absolute',
                  right: '25px',
                  top: '15px',
                  width: '260px',
                  height: '515px',
                  transform: 'rotate(9deg)',
                  background: 'linear-gradient(145deg, #2A3644, #0F151E)',
                  borderRadius: '38px',
                  padding: '8px',
                  boxShadow: '-15px 25px 50px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.25)',
                  zIndex: 2,
                  transition: 'transform 0.4s ease',
                }}
                className="hero-phone-back"
              >
                {/* Dynamic Island */}
                <div
                  style={{
                    position: 'absolute',
                    top: '14px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '65px',
                    height: '16px',
                    background: '#000000',
                    borderRadius: '10px',
                    zIndex: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    paddingRight: '6px',
                  }}
                >
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#1A2433' }} />
                </div>

                {/* Inner Screen */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    borderRadius: '30px',
                    overflow: 'hidden',
                    background: '#FFFFFF',
                  }}
                >
                  <Image
                    src="/images/app-screen-map.png"
                    alt="ABVC Surveillance Map"
                    fill
                    sizes="260px"
                    priority
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'top center',
                    }}
                  />
                  {/* Subtle Gloss Reflection */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '45%',
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0) 60%)',
                      pointerEvents: 'none',
                    }}
                  />
                </div>
              </div>

              {/* Primary Phone (Front - Dashboard Screen) */}
              <div
                style={{
                  position: 'absolute',
                  left: '20px',
                  top: '40px',
                  width: '275px',
                  height: '540px',
                  transform: 'rotate(-5deg)',
                  background: 'linear-gradient(145deg, #334456, #121A24)',
                  borderRadius: '42px',
                  padding: '9px',
                  boxShadow: '0 30px 70px rgba(0, 0, 0, 0.6), 0 10px 25px rgba(8, 100, 170, 0.3), 0 0 0 1.5px rgba(255, 255, 255, 0.35)',
                  zIndex: 8,
                  transition: 'transform 0.4s ease',
                }}
                className="hero-phone-front"
              >
                {/* Dynamic Island */}
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '72px',
                    height: '18px',
                    background: '#000000',
                    borderRadius: '12px',
                    zIndex: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    paddingRight: '8px',
                  }}
                >
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#1A2433' }} />
                </div>

                {/* Inner Screen */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    borderRadius: '34px',
                    overflow: 'hidden',
                    background: '#FFFFFF',
                  }}
                >
                  <Image
                    src="/images/app-screen-dashboard.png"
                    alt="ABVC Super Administrator Dashboard"
                    fill
                    sizes="275px"
                    priority
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'top center',
                    }}
                  />
                  {/* Subtle Gloss Reflection */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '45%',
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 60%)',
                      pointerEvents: 'none',
                    }}
                  />
                </div>
              </div>

              {/* Floating Experience Badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '25px',
                  right: '10px',
                  background: '#C1A74F',
                  color: '#FFFFFF',
                  padding: '13px 22px',
                  borderRadius: '16px',
                  boxShadow: '0 14px 35px rgba(0, 0, 0, 0.35)',
                  textAlign: 'center',
                  minWidth: '130px',
                  transform: 'rotate(-2deg)',
                  border: '2px solid rgba(255, 255, 255, 0.6)',
                  zIndex: 20,
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'rotate(0deg) scale(1.05)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'rotate(-2deg) scale(1)')}
              >
                <div style={{ fontSize: '26px', fontWeight: 800, lineHeight: 1 }}>25+</div>
                <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '2px' }}>
                  Lorem Ipsum Dolor
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-grid p {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-grid > div:first-child {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-mockup-container {
            transform: scale(0.88);
            margin: 0 auto;
          }
        }
        @media (max-width: 520px) {
          .hero-mockup-container {
            transform: scale(0.72);
            transform-origin: center top;
            height: 420px !important;
          }
        }
      `}</style>
    </section>
  );
}
