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
  </main>
}
