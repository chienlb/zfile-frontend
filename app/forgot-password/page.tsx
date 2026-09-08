'use client'

import { useState } from 'react'
import { ArrowRight, Check, ShieldCheck, Sparkles, KeyRound, Mail, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function ForgotPasswordPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <main className="auth-page">
      <Link href="/" className="auth-brand">
        <div className="logo-mark"><span /></div>
        <span>ZFile</span>
      </Link>
      <section className="auth-card">
        <div className="auth-icon"><KeyRound size={18} /></div>
        <p className="eyebrow">Recovery</p>
        <h1 className="text-[26px] font-bold mt-2">Reset your password</h1>
        <p className="subtitle">Enter your email and we'll send you a reset link.</p>
        
        {submitted ? (
          <div className="auth-success">
            <div className="success-check"><Check size={18} /></div>
            <h2>Check your inbox</h2>
            <p>We sent password reset instructions to your email.</p>
            <button className="text-button" onClick={() => setSubmitted(false)}>Use another email <ArrowRight size={14} /></button>
            <div className="mt-6">
              <Link href="/login" className="text-[13px] text-zinc-400 hover:text-zinc-300 flex items-center justify-center gap-2">
                <ArrowLeft size={14} /> Back to login
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="space-y-4 mt-6">
              <div>
                <label className="auth-label mb-2">Email address</label>
                <div className="auth-input h-[40px]">
                  <Mail size={16} className="text-zinc-500" />
                  <input type="email" placeholder="you@company.com" />
                </div>
              </div>
            </div>

            <button className="primary-button auth-submit h-[42px]" onClick={() => setSubmitted(true)}>
              Send Reset Link <ArrowRight size={15} />
            </button>
            
            <div className="mt-5 text-center">
              <Link href="/login" className="text-[13px] text-zinc-400 hover:text-zinc-300 flex items-center justify-center gap-2">
                <ArrowLeft size={14} /> Back to login
              </Link>
            </div>
          </>
        )}
        <p className="auth-footnote"><ShieldCheck size={13} /> Secure password recovery.</p>
      </section>
      <div className="auth-visual"><Sparkles size={15} /><span>Get back to your secure workspace.</span></div>
    </main>
  )
}
