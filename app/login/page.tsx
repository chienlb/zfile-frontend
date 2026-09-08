'use client'

import { useState } from 'react'
import { ArrowRight, Check, LockKeyhole, Mail, ShieldCheck, Sparkles, Lock } from 'lucide-react'
import Link from 'next/link'

export default function LoginPage() {
  const [submitted, setSubmitted] = useState(false)
  return <main className="auth-page">
    <div className="auth-brand"><div className="logo-mark"><span /></div><span>ZFile</span></div>
    <section className="auth-card">
      <div className="auth-icon"><LockKeyhole size={18} /></div>
      <p className="eyebrow">Welcome back</p>
      <h1>Sign in to your workspace</h1>
      <p className="subtitle">Securely manage, edit, and share every file.</p>
      {submitted ? <div className="auth-success"><div className="success-check"><Check size={18} /></div><h2>Check your inbox</h2><p>We sent a secure sign-in link to your email.</p><button className="text-button" onClick={() => setSubmitted(false)}>Use another email <ArrowRight size={14} /></button></div> : <>
        <button className="google-button" onClick={() => setSubmitted(true)}><span className="google-mark">G</span> Continue with Google</button>
        <div className="auth-divider"><span>or continue with email</span></div>
        <div className="space-y-4">
          <div>
            <label className="auth-label mb-2 block">Email address</label>
            <div className="auth-input h-[40px]"><Mail size={16} className="text-zinc-500" /><input type="email" placeholder="you@company.com" /></div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="auth-label block">Password</label>
              <Link href="/forgot-password" className="text-[12px] text-blue-400 hover:text-blue-300">Forgot password?</Link>
            </div>
            <div className="auth-input h-[40px]"><Lock size={16} className="text-zinc-500" /><input type="password" placeholder="••••••••" /></div>
          </div>
        </div>
        <button className="primary-button auth-submit h-[42px]" onClick={() => setSubmitted(true)}>Sign In <ArrowRight size={15} /></button>
        <p className="text-center text-[12px] text-zinc-500 mt-5">
          Don't have an account? <Link href="/register" className="text-blue-400 hover:text-blue-300">Sign up</Link>
        </p>
      </>}
      <p className="auth-footnote"><ShieldCheck size={13} /> Your data is encrypted and never sold.</p>
    </section>
    <div className="auth-visual"><Sparkles size={15} /><span>Trusted by teams that care about their files.</span></div>
  </main>
}
