'use client'

import { useState } from 'react'
import { ArrowRight, Check, ShieldCheck, Sparkles, UserPlus, Mail, Lock } from 'lucide-react'
import Link from 'next/link'

export default function RegisterPage() {
  const [submitted, setSubmitted] = useState(false)
  const [password, setPassword] = useState('')

  const getStrength = (pass: string) => {
    if (pass.length === 0) return 0
    if (pass.length < 6) return 1
    if (pass.length < 10) return 2
    return 3
  }

  const strength = getStrength(password)

  return (
    <main className="auth-page">
      <Link href="/" className="auth-brand">
        <div className="logo-mark"><span /></div>
        <span>ZFile</span>
      </Link>
      <section className="auth-card">
        <div className="auth-icon"><UserPlus size={18} /></div>
        <p className="eyebrow">Get Started</p>
        <h1 className="text-[26px] font-bold mt-2">Create your account</h1>
        <p className="subtitle">Start securing and managing your files today.</p>
        
        {submitted ? (
          <div className="auth-success">
            <div className="success-check"><Check size={18} /></div>
            <h2>Verify your email</h2>
            <p>We sent a verification link to your email.</p>
            <button className="text-button" onClick={() => setSubmitted(false)}>Use another email <ArrowRight size={14} /></button>
          </div>
        ) : (
          <>
            <button className="google-button" onClick={() => setSubmitted(true)}>
              <span className="google-mark">G</span> Sign up with Google
            </button>
            <div className="auth-divider"><span>or sign up with email</span></div>
            
            <div className="space-y-4">
              <div>
                <label className="auth-label mb-2">Full Name</label>
                <div className="auth-input h-[40px]">
                  <input type="text" placeholder="Jordan Davis" />
                </div>
              </div>
              
              <div>
                <label className="auth-label mb-2">Email address</label>
                <div className="auth-input h-[40px]">
                  <Mail size={16} className="text-zinc-500" />
                  <input type="email" placeholder="you@company.com" />
                </div>
              </div>
              
              <div>
                <label className="auth-label mb-2">Password</label>
                <div className="auth-input h-[40px]">
                  <Lock size={16} className="text-zinc-500" />
                  <input type="password" placeholder="Create a secure password" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                {password.length > 0 && (
                  <div className="mt-2 flex gap-1">
                    <div className={`h-1 flex-1 rounded-full ${strength >= 1 ? 'bg-rose-500' : 'bg-zinc-800'}`} />
                    <div className={`h-1 flex-1 rounded-full ${strength >= 2 ? 'bg-amber-500' : 'bg-zinc-800'}`} />
                    <div className={`h-1 flex-1 rounded-full ${strength >= 3 ? 'bg-emerald-500' : 'bg-zinc-800'}`} />
                  </div>
                )}
              </div>
            </div>

            <button className="primary-button auth-submit h-[42px]" onClick={() => setSubmitted(true)}>
              Create Account <ArrowRight size={15} />
            </button>
            
            <p className="text-center text-[12px] text-zinc-500 mt-5">
              Already have an account? <Link href="/login" className="text-blue-400 hover:text-blue-300">Sign in</Link>
            </p>
          </>
        )}
        <p className="auth-footnote"><ShieldCheck size={13} /> Your data is encrypted end-to-end.</p>
      </section>
      <div className="auth-visual"><Sparkles size={15} /><span>Trusted by thousands of professional teams.</span></div>
    </main>
  )
}
