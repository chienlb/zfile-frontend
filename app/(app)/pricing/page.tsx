'use client'

import { useState } from 'react'
import { ArrowLeft, ArrowRight, Check, Crown, LoaderCircle, ShieldCheck, Zap } from 'lucide-react'
import Link from 'next/link'
import { PRODUCTS, formatPrice } from '@/lib/products'

const features = ['100 GB encrypted storage', 'Unlimited file conversions', 'Advanced editing tools', 'Custom share links', 'Priority support']

export default function PricingPage() {
  const [loading, setLoading] = useState('')
  const [message, setMessage] = useState('')
  const checkout = async (productId: string) => {
    setLoading(productId); setMessage('')
    const response = await fetch('/api/checkout', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ productId }) })
    const data = await response.json()
    if (data.url) window.location.href = data.url
    else setMessage(data.error ?? 'Checkout is unavailable in preview mode.')
    setLoading('')
  }
  return <main className="pricing-page">

    <section className="pricing-hero"><p className="eyebrow">Upgrade your workspace</p><h1>More space. More control.</h1><p className="subtitle">Everything you need to move files from raw assets to finished work.</p></section>
    {message && <div className="checkout-message">{message}</div>}
    <section className="pricing-grid">
      <article className="plan-card"><div className="plan-top"><div><p className="eyebrow">Free</p><h2>$0 <span>/ month</span></h2></div><div className="plan-icon"><ShieldCheck size={18} /></div></div><p className="plan-description">A secure home for your essential files.</p><ul>{features.slice(0, 2).map((feature) => <li key={feature}><Check size={14} /> {feature}</li>)}</ul><button className="secondary-button plan-action" disabled>Current plan</button></article>
      {PRODUCTS.map((product, index) => <article className={`plan-card ${index === 0 ? 'plan-featured' : ''}`} key={product.id}>{index === 0 && <div className="popular-badge"><Zap size={12} /> Most popular</div>}<div className="plan-top"><div><p className="eyebrow">{product.name}</p><h2>{formatPrice(product.priceInCents)} <span>/ month</span></h2></div><div className="plan-icon plan-icon-blue">{index === 0 ? <Crown size={18} /> : <Zap size={18} />}</div></div><p className="plan-description">{product.description} with a complete toolkit.</p><ul>{features.map((feature) => <li key={feature}><Check size={14} /> {feature}</li>)}</ul><button className="primary-button plan-action" onClick={() => checkout(product.id)} disabled={Boolean(loading)}>{loading === product.id ? <LoaderCircle className="spin" size={15} /> : <>Upgrade to {product.name} <ArrowRight size={14} /></>}</button></article>)}
    </section>
    <p className="pricing-note"><ShieldCheck size={14} /> Secure checkout powered by Stripe. Cancel anytime.</p>

    <section className="mt-32 mb-20 max-w-5xl mx-auto w-full px-6">
      <h2 className="text-center text-[24px] font-bold mb-12">Compare plans in detail</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="p-5 border-b border-zinc-800 text-zinc-400 font-medium w-1/3 text-[13px] uppercase tracking-wider">Features</th>
              <th className="p-5 border-b border-zinc-800 font-medium text-center text-[15px]">Free</th>
              <th className="p-5 border-b border-zinc-800 font-medium text-center text-[15px] text-blue-400">Pro</th>
              <th className="p-5 border-b border-zinc-800 font-medium text-center text-[15px]">Team</th>
            </tr>
          </thead>
          <tbody className="text-[14px]">
            {[
              { name: 'Storage capacity', free: '10 GB', pro: '100 GB', team: '1 TB' },
              { name: 'Max file size', free: '2 GB', pro: '10 GB', team: 'Unlimited' },
              { name: 'End-to-end encryption', free: true, pro: true, team: true },
              { name: 'Custom share links', free: false, pro: true, team: true },
              { name: 'Password protection', free: false, pro: true, team: true },
              { name: 'Advanced image editing', free: false, pro: true, team: true },
              { name: 'Video processing', free: false, pro: true, team: true },
              { name: 'Audit logs', free: false, pro: false, team: true },
              { name: 'Team administration', free: false, pro: false, team: true },
              { name: 'Priority support', free: false, pro: '24/7', team: 'Dedicated rep' }
            ].map((row, i) => (
              <tr key={i} className="border-b border-zinc-800/50 hover:bg-[#111318] transition-colors">
                <td className="p-5 text-zinc-300">{row.name}</td>
                <td className="p-5 text-center text-zinc-500">
                  {typeof row.free === 'boolean' ? (row.free ? <Check size={16} className="mx-auto text-zinc-400" /> : '—') : row.free}
                </td>
                <td className="p-5 text-center text-zinc-200">
                  {typeof row.pro === 'boolean' ? (row.pro ? <Check size={16} className="mx-auto text-blue-400" /> : '—') : <span className="text-blue-400 font-medium">{row.pro}</span>}
                </td>
                <td className="p-5 text-center text-zinc-200">
                  {typeof row.team === 'boolean' ? (row.team ? <Check size={16} className="mx-auto text-zinc-300" /> : '—') : row.team}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

  </main>
}

