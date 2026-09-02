'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Quote, ArrowRight, Star } from 'lucide-react';

interface TestimonialsSectionProps {
  onOpenQuote?: () => void;
}

export default function TestimonialsSection({ onOpenQuote }: TestimonialsSectionProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const testimonials = [
    {
      id: 1,
      name: 'Juliana Silva',
      role: 'Financial Director',
      avatar: '/images/avatar-juliana.png',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 2,
      name: 'Emilia Rose',
      role: 'Operations Lead',
      avatar: '/images/avatar-emilia.png',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 3,
      name: 'Listy Nay',
      role: 'Chief Strategist',
      avatar: '/images/avatar-listy.png',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  return (
    <section id="testimonials" style={{ padding: '90px 0 110px 0', background: '#F8FAFC' }}>
      <div className="container">
        {/* Split Header */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '40px',
            alignItems: 'flex-end',
            marginBottom: '50px',
          }}
          className="testimonials-header"
        >
          <div>
            <div className="pill-badge">Lorem Ipsum</div>
            <h2 className="section-title" style={{ color: '#191C1E' }}>
              Lorem Ipsum Dolor <br />
              Sit Amet Consectetur
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '20px' }}>
            <p className="section-subtitle" style={{ color: '#737784' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.
            </p>
            <button onClick={onOpenQuote} className="btn-lime">
              Lorem Ipsum <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* 3 Dark Blue Testimonial Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}
          className="testimonials-grid"
        >
          {testimonials.map((item, index) => {
            const isHovered = hoveredIdx === index;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredIdx(index)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  background: '#0864aa',
                  borderRadius: '16px',
                  padding: '30px 26px 24px 26px',
                  color: '#FFFFFF',
                  boxShadow: isHovered
                    ? '0 20px 45px rgba(8, 100, 170, 0.4)'
                    : '0 8px 24px rgba(8, 100, 170, 0.15)',
                  transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
                  border: isHovered ? '1px solid #C1A74F' : '1px solid rgba(255, 255, 255, 0.12)',
                  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                {/* Rating Stars */}
                <div style={{ display: 'flex', gap: '3px', marginBottom: '14px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#C1A74F" color="#C1A74F" />
                  ))}
                </div>

                {/* Review Text */}
                <p
                  style={{
                    fontSize: '13.5px',
                    lineHeight: 1.65,
                    color: '#D8E2FF',
                    marginBottom: '28px',
                  }}
                >
                  &ldquo;{item.content}&rdquo;
                </p>

                {/* Bottom Row: Avatar + Name + Designation + Quote Icon */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '16px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.12)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        position: 'relative',
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '2px solid #C1A74F',
                        flexShrink: 0,
                      }}
                    >
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: '#FFFFFF' }}>{item.name}</div>
                      <div style={{ fontSize: '11.5px', color: '#B6CCFF' }}>Designation</div>
                    </div>
                  </div>

                  {/* Quote Icon */}
                  <div style={{ color: '#C1A74F', opacity: 0.9 }}>
                    <Quote size={20} fill="#C1A74F" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          .testimonials-header {
            grid-template-columns: 1fr !important;
            gap: 20px;
          }
          .testimonials-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
