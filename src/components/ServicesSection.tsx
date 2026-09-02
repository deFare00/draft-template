'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Users, Landmark, BarChart3, ArrowUpRight, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onOpenQuote?: () => void;
}

export default function ServicesSection({ onOpenQuote }: ServicesSectionProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: 'Lorem Ipsum',
      image: '/images/service-business.jpg',
      icon: Users,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.',
    },
    {
      id: 2,
      title: 'Dolor Sit Amet',
      image: '/images/service-tax.jpg',
      icon: Landmark,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.',
    },
    {
      id: 3,
      title: 'Consectetur Elit',
      image: '/images/service-planning.jpg',
      icon: BarChart3,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.',
    },
  ];

  return (
    <section id="services" style={{ padding: '90px 0', background: '#F8FAFC' }}>
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
          className="services-header"
        >
          <div>
            <div className="pill-badge">Services</div>
            <h2 className="section-title" style={{ color: '#191C1E' }}>
              Lorem Ipsum Dolor Sit Amet <br />
              Consectetur Adipiscing
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '20px' }}>
            <p className="section-subtitle" style={{ color: '#737784' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvina.
            </p>
            <button onClick={onOpenQuote} className="btn-lime">
              Lorem Ipsum <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* 3 Service Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}
          className="services-grid"
        >
          {services.map((item, index) => {
            const Icon = item.icon;
            const isHovered = hoveredCard === index;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={onOpenQuote}
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  background: '#0864aa',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  boxShadow: isHovered
                    ? '0 20px 40px rgba(8, 100, 170, 0.3)'
                    : '0 8px 24px rgba(8, 100, 170, 0.1)',
                  transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
                  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Photo Top with Hover Zoom */}
                <div style={{ position: 'relative', height: '200px', width: '100%', overflow: 'hidden' }}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    style={{
                      objectFit: 'cover',
                      transform: isHovered ? 'scale(1.08)' : 'scale(1)',
                      transition: 'transform 0.5s ease',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, transparent 40%, rgba(8, 100, 170, 0.5) 100%)',
                    }}
                  />
                </div>

                {/* Bottom Bar: Icon + Title + Arrow */}
                <div
                  style={{
                    padding: '20px 22px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: '#0864aa',
                    color: '#FFFFFF',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
                        background: isHovered ? '#C1A74F' : 'rgba(255, 255, 255, 0.12)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: isHovered ? '#FFFFFF' : '#C1A74F',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <Icon size={18} />
                    </div>
                    <span style={{ fontSize: '15.5px', fontWeight: 700, letterSpacing: '-0.01em' }}>
                      {item.title}
                    </span>
                  </div>

                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: isHovered ? '#C1A74F' : 'transparent',
                      color: isHovered ? '#FFFFFF' : '#B6CCFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease',
                      transform: isHovered ? 'translate(2px, -2px)' : 'none',
                    }}
                  >
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          .services-header {
            grid-template-columns: 1fr !important;
            gap: 20px;
          }
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
