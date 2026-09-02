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
      title: 'Business Strategies',
      image: '/images/service-business.jpg',
      icon: Users,
      desc: 'Expert strategy formulation to accelerate business scale, market expansion, and operational resilience.',
    },
    {
      id: 2,
      title: 'Taxes & Accounting',
      image: '/images/service-tax.jpg',
      icon: Landmark,
      desc: 'Comprehensive corporate tax planning, compliance audits, and strategic financial accounting.',
    },
    {
      id: 3,
      title: 'Financial Planning',
      image: '/images/service-planning.jpg',
      icon: BarChart3,
      desc: 'Holistic wealth protection, risk management, and long-term portfolio optimization strategies.',
    },
  ];

  return (
    <section id="services" style={{ padding: '90px 0', background: '#F7F6F1' }}>
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
            <div className="pill-badge">Our Services</div>
            <h2 className="section-title">
              Financial Services To Grow And <br />
              Secure Your Wealth
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '20px' }}>
            <p className="section-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvina.
            </p>
            <button onClick={onOpenQuote} className="btn-lime">
              Learn More <ArrowRight size={16} />
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
                  background: '#0F2B27',
                  boxShadow: isHovered
                    ? '0 20px 40px rgba(15, 43, 39, 0.25)'
                    : '0 8px 24px rgba(15, 43, 39, 0.08)',
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
                      background: 'linear-gradient(180deg, transparent 40%, rgba(15, 43, 39, 0.4) 100%)',
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
                    background: '#0F2B27',
                    color: '#FFFFFF',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
                        background: isHovered ? '#CBE96B' : 'rgba(255, 255, 255, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: isHovered ? '#0F2A24' : '#CBE96B',
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
                      background: isHovered ? '#CBE96B' : 'transparent',
                      color: isHovered ? '#0F2A24' : '#8FA39C',
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
