'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function HowWeWorkSection() {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <section id="how-we-work" style={{ padding: '90px 0', background: '#FFFFFF' }}>
      <div className="container">
        {/* Section Title & Subtitle */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 60px auto' }}>
          <div className="pill-badge">Lorem Ipsum</div>
          <h2 className="section-title" style={{ marginBottom: '14px' }}>
            Lorem Ipsum Dolor Sit Amet Consectetur
          </h2>
          <p className="section-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        {/* 3-Column Layout: Left Steps - Center Image - Right Steps */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.15fr 1fr',
            gap: '28px',
            alignItems: 'center',
          }}
          className="how-we-work-grid"
        >
          {/* Left Column (Steps 01 & 02) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Step 01 */}
            <StepCard
              number="01"
              title="Lorem Ipsum Dolor"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus."
              isActive={activeStep === 1}
              onMouseEnter={() => setActiveStep(1)}
            />

            {/* Step 02 */}
            <StepCard
              number="02"
              title="Sit Amet Consectetur"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus."
              isActive={activeStep === 2}
              onMouseEnter={() => setActiveStep(2)}
            />
          </div>

          {/* Center Column: Photography + Floating Partners Badge */}
          <div
            style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 16px 40px rgba(15, 43, 39, 0.1)',
            }}
          >
            <Image
              src="/images/work-collaboration.jpg"
              alt="Collaboration"
              width={420}
              height={420}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                display: 'block',
              }}
            />

            {/* Floating Gold Badge with Logos */}
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                right: '16px',
                background: '#C1A74F',
                borderRadius: '9999px',
                padding: '10px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)',
              }}
            >
              <PartnerLogo text="logoipsum" />
              <div style={{ width: '1px', height: '14px', background: 'rgba(255, 255, 255, 0.4)' }} />
              <PartnerLogo text="logoipsum" />
              <div style={{ width: '1px', height: '14px', background: 'rgba(255, 255, 255, 0.4)' }} />
              <PartnerLogo text="logoipsum" />
            </div>
          </div>

          {/* Right Column (Steps 03 & 04) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Step 03 */}
            <StepCard
              number="03"
              title="Adipiscing Elit Sed"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus."
              isActive={activeStep === 3}
              onMouseEnter={() => setActiveStep(3)}
            />

            {/* Step 04 */}
            <StepCard
              number="04"
              title="Tempor Incididunt"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus."
              isActive={activeStep === 4}
              onMouseEnter={() => setActiveStep(4)}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          .how-we-work-grid {
            grid-template-columns: 1fr !important;
            gap: 30px;
          }
        }
      `}</style>
    </section>
  );
}

function StepCard({
  number,
  title,
  desc,
  isActive,
  onMouseEnter,
}: {
  number: string;
  title: string;
  desc: string;
  isActive: boolean;
  onMouseEnter: () => void;
}) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      style={{
        background: isActive ? '#FFFFFF' : '#F8FAFC',
        border: isActive ? '2px solid #003396' : '1px solid #E2E8F0',
        borderRadius: '16px',
        padding: '24px 22px',
        boxShadow: isActive ? '0 12px 30px rgba(0, 51, 150, 0.12)' : '0 2px 8px rgba(0,0,0,0.02)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        transform: isActive ? 'translateY(-3px)' : 'none',
      }}
    >
      <div
        style={{
          fontSize: '28px',
          fontWeight: 800,
          color: isActive ? '#0864aa' : '#C2C6D5',
          lineHeight: 1,
          marginBottom: '10px',
          transition: 'color 0.3s ease',
        }}
      >
        {number}
      </div>
      <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#191C1E', marginBottom: '6px' }}>
        {title}
      </h4>
      <p style={{ fontSize: '13px', color: '#737784', lineHeight: 1.55 }}>
        {desc}
      </p>
    </div>
  );
}

function PartnerLogo({ text }: { text: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#0F2A24', fontWeight: 800, fontSize: '13px' }}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" />
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
      <span>{text}</span>
    </div>
  );
}
