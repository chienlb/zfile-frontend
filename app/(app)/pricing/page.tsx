'use client'

import { Zap, Check, ArrowRight } from 'lucide-react'

export default function PricingPage() {
  return (
    <div className="pricing-page">
      <header className="pricing-header">
        <div className="auth-brand">
          <div className="logo-mark"><span /></div><span>ZFile</span>
        </div>
        <a href="/" className="back-link">
          <ArrowRight size={14} className="rotate-180" /> Back to Workspace
        </a>
      </header>

      <div className="pricing-hero">
        <p className="eyebrow text-blue-400 mb-3">Upgrade your workflow</p>
        <h1>Simple, transparent pricing</h1>
        <p className="subtitle mx-auto mt-4">
          Choose the perfect plan for your team. Start for free, upgrade when you need more power.
        </p>
      </div>

      <div className="pricing-grid">
        <div className="plan-card">
          <div className="plan-top">
            <div>
              <div className="plan-icon"><Zap size={18} /></div>
              <h2>$0<span>/month</span></h2>
              <p className="font-semibold text-zinc-200 mt-1">Starter</p>
            </div>
          </div>
          <p className="plan-description mt-3">Perfect for individuals just getting started with ZFile.</p>
          <ul>
            <li><Check size={16} /> Up to 10GB storage</li>
            <li><Check size={16} /> Basic PDF tools</li>
            <li><Check size={16} /> 5 AI prompts per month</li>
          </ul>
          <button className="secondary-button plan-action mt-6">Current Plan</button>
        </div>

        <div className="plan-card plan-featured">
          <div className="popular-badge"><Zap size={12} /> Most Popular</div>
          <div className="plan-top">
            <div>
              <div className="plan-icon plan-icon-blue"><Zap size={18} /></div>
              <h2 className="text-white">$12<span>/user/month</span></h2>
              <p className="font-semibold text-blue-400 mt-1">Pro</p>
            </div>
          </div>
          <p className="plan-description mt-3 text-zinc-300">Advanced features for professionals and growing teams.</p>
          <ul>
            <li><Check size={16} className="text-blue-400" /> 1TB storage per user</li>
            <li><Check size={16} className="text-blue-400" /> Advanced AI Analysis</li>
            <li><Check size={16} className="text-blue-400" /> OCR & Document Extraction</li>
            <li><Check size={16} className="text-blue-400" /> Priority Support</li>
          </ul>
          <button className="primary-button plan-action mt-6 shadow-[0_0_20px_rgba(59,130,246,0.3)]">Upgrade to Pro</button>
        </div>

        <div className="plan-card">
          <div className="plan-top">
            <div>
              <div className="plan-icon bg-zinc-800 text-zinc-300"><Zap size={18} /></div>
              <h2>Custom</h2>
              <p className="font-semibold text-zinc-200 mt-1">Enterprise</p>
            </div>
          </div>
          <p className="plan-description mt-3">Custom solutions for large organizations with complex needs.</p>
          <ul>
            <li><Check size={16} /> Unlimited storage</li>
            <li><Check size={16} /> Custom AI models</li>
            <li><Check size={16} /> Advanced Security & SSO</li>
            <li><Check size={16} /> Dedicated Success Manager</li>
          </ul>
          <button className="secondary-button plan-action mt-6">Contact Sales</button>
        </div>
      </div>
      
      <p className="pricing-note text-center mt-12 text-zinc-500 text-[13px]">
        Prices exclude applicable taxes. You can cancel your subscription at any time.
      </p>
    </div>
  )
}
