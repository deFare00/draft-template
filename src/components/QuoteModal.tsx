'use client';

import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Financial Consulting',
    budget: '$10k - $50k',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(11, 34, 31, 0.75)',
        backdropFilter: 'blur(8px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: '#0F2B27',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: '24px',
          width: '100%',
          maxWidth: '560px',
          padding: '36px',
          color: '#FFFFFF',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5)',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Modal"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)')}
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '40px 10px' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(203, 233, 107, 0.2)',
                color: '#CBE96B',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px auto',
              }}
            >
              <CheckCircle size={36} />
            </div>
            <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '10px' }}>Request Received!</h3>
            <p style={{ fontSize: '14px', color: '#B5CAC3', lineHeight: 1.6 }}>
              Thank you, <strong style={{ color: '#FFFFFF' }}>{formData.name || 'Valued Client'}</strong>. Our senior finance specialist will contact you shortly.
            </p>
          </div>
        ) : (
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(203, 233, 107, 0.15)',
                color: '#CBE96B',
                fontSize: '12px',
                fontWeight: 700,
                padding: '4px 12px',
                borderRadius: '9999px',
                marginBottom: '12px',
              }}
            >
              <ShieldCheck size={14} /> Confidential Consultation
            </div>

            <h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '6px', letterSpacing: '-0.01em' }}>
              Request A Free Strategy Quote
            </h3>
            <p style={{ fontSize: '13.5px', color: '#9BB0AA', marginBottom: '24px' }}>
              Tell us about your organization and financial objectives.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#C6DDD5', marginBottom: '6px' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alexander Wright"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#C6DDD5', marginBottom: '6px' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={inputStyle}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#C6DDD5', marginBottom: '6px' }}>
                    Service Required
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    style={inputStyle}
                  >
                    <option value="Financial Consulting" style={{ background: '#0F2B27', color: '#fff' }}>Financial Consulting</option>
                    <option value="Business Strategies" style={{ background: '#0F2B27', color: '#fff' }}>Business Strategies</option>
                    <option value="Taxes & Accounting" style={{ background: '#0F2B27', color: '#fff' }}>Taxes & Accounting</option>
                    <option value="Operational Consulting" style={{ background: '#0F2B27', color: '#fff' }}>Operational Consulting</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#C6DDD5', marginBottom: '6px' }}>
                    Budget Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    style={inputStyle}
                  >
                    <option value="Under $10k" style={{ background: '#0F2B27', color: '#fff' }}>Under $10,000</option>
                    <option value="$10k - $50k" style={{ background: '#0F2B27', color: '#fff' }}>$10,000 - $50,000</option>
                    <option value="$50k - $200k" style={{ background: '#0F2B27', color: '#fff' }}>$50,000 - $200,000</option>
                    <option value="$200k+" style={{ background: '#0F2B27', color: '#fff' }}>$200,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#C6DDD5', marginBottom: '6px' }}>
                  Project Brief / Requirements
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe your current situation and goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{ ...inputStyle, resize: 'none' }}
                />
              </div>

              <button
                type="submit"
                className="btn-lime"
                style={{ width: '100%', padding: '14px', fontSize: '15px', marginTop: '8px' }}
              >
                Submit Consultation Request <ArrowRight size={17} />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '11px 16px',
  borderRadius: '10px',
  border: '1px solid rgba(255, 255, 255, 0.15)',
  background: 'rgba(255, 255, 255, 0.06)',
  color: '#FFFFFF',
  fontSize: '13.5px',
  outline: 'none',
  fontFamily: 'inherit',
};
