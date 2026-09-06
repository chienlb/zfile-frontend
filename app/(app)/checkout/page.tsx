'use client'

import { useState } from 'react'
import { ArrowLeft, Check, CreditCard, Lock, ShieldCheck, Zap, Tag, RefreshCw } from 'lucide-react'
import Link from 'next/link'

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [voucher, setVoucher] = useState('')
  const [voucherApplied, setVoucherApplied] = useState(false)

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
    }, 2000)
  }

  if (success) {
    return (
      <main className="auth-page">
        <div className="auth-card text-center" style={{ maxWidth: '440px', padding: '40px' }}>
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto mb-6">
            <Check size={32} />
          </div>
          <h1 className="text-[24px] font-bold">Payment Successful!</h1>
          <p className="text-[14px] text-zinc-500 mt-3 mb-8">Welcome to ZFile Pro. Your account has been upgraded and your receipt has been emailed.</p>
          <Link href="/" className="primary-button w-full h-[44px] flex items-center justify-center text-[14px]">
            Return to Dashboard
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="pricing-page">
      
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_400px] gap-10 mt-16 px-6 items-start">
        <div className="bg-[#111318] border border-zinc-800 p-8 rounded-xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
              <CreditCard size={20} />
            </div>
            <h1 className="text-[22px] font-bold m-0">Payment Details</h1>
          </div>
          
          <form onSubmit={handlePayment}>
            <div className="mb-6">
              <label className="auth-label mb-2">Email Address</label>
              <div className="auth-input h-[44px]">
                <input type="email" required placeholder="you@company.com" defaultValue="jordan@acme.co" />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="auth-label mb-2">Card Information</label>
              <div className="border border-zinc-700 rounded-md bg-[#0d0f13] overflow-hidden">
                <div className="px-4 py-3 border-b border-zinc-700 flex items-center gap-3">
                  <CreditCard size={18} className="text-zinc-500" />
                  <input type="text" required placeholder="Card number" className="bg-transparent border-0 outline-none w-full text-[14px]" />
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-3 border-r border-zinc-700">
                    <input type="text" required placeholder="MM / YY" className="bg-transparent border-0 outline-none w-full text-[14px]" />
                  </div>
                  <div className="px-4 py-3 flex items-center gap-2">
                    <input type="text" required placeholder="CVC" className="bg-transparent border-0 outline-none w-full text-[14px]" />
                    <Lock size={14} className="text-zinc-600" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <label className="auth-label mb-2">Name on card</label>
              <div className="auth-input h-[44px]">
                <input type="text" required placeholder="Name on card" />
              </div>
            </div>
            
            <button type="submit" className="primary-button w-full h-[48px] text-[15px]" disabled={loading}>
              {loading ? <><RefreshCw size={18} className="spin" /> Processing Payment...</> : <>Pay ${voucherApplied ? '120.00' : '144.00'}</>}
            </button>
            
            <p className="text-center text-[12px] text-zinc-500 mt-6 flex items-center justify-center gap-2">
              <ShieldCheck size={14} /> Payments are secure and encrypted.
            </p>
          </form>
        </div>
        
        <div className="space-y-6">
          <div className="bg-[#111318] border border-zinc-800 p-6 rounded-xl">
            <h3 className="text-[16px] font-bold mb-6 flex items-center gap-2">
              <Zap size={18} className="text-blue-400" /> Order Summary
            </h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center text-[14px]">
                <span className="text-zinc-300">Pro Plan (Annual)</span>
                <span className="font-medium">$144.00</span>
              </div>
              <div className="flex justify-between items-center text-[14px]">
                <span className="text-zinc-500">Billed yearly</span>
                <span className="text-emerald-400 text-[12px]">Save $48</span>
              </div>
              {voucherApplied && (
                <div className="flex justify-between items-center text-[14px]">
                  <span className="text-zinc-300 flex items-center gap-2"><Tag size={14} className="text-blue-400" /> Voucher ({voucher})</span>
                  <span className="text-emerald-400 font-medium">-$24.00</span>
                </div>
              )}
            </div>
            
            {!voucherApplied ? (
              <div className="mb-6 flex gap-2">
                <input 
                  type="text" 
                  placeholder="Promo code" 
                  value={voucher}
                  onChange={e => setVoucher(e.target.value)}
                  className="bg-[#0d0f13] border border-zinc-800 rounded-md px-3 h-[36px] text-[13px] text-zinc-200 outline-none focus:border-blue-500 flex-1 transition-colors" 
                />
                <button 
                  type="button"
                  onClick={() => { if(voucher) setVoucherApplied(true) }}
                  className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 px-4 h-[36px] rounded-md text-[13px] font-medium transition-colors"
                >
                  Apply
                </button>
              </div>
            ) : null}
            
            <div className="pt-4 border-t border-zinc-800 flex justify-between items-center">
              <span className="text-[15px] font-medium text-zinc-200">Total</span>
              <span className="text-[20px] font-bold text-white">${voucherApplied ? '120.00' : '144.00'}</span>
            </div>
          </div>
          
          <div className="bg-[#111318] border border-zinc-800 p-6 rounded-xl text-[13px] text-zinc-400 space-y-3">
            <p className="flex items-start gap-2">
              <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
              <span>1 TB Encrypted Storage</span>
            </p>
            <p className="flex items-start gap-2">
              <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
              <span>Advanced Studio Tools</span>
            </p>
            <p className="flex items-start gap-2">
              <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
              <span>Custom branding & domains</span>
            </p>
            <p className="flex items-start gap-2">
              <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
              <span>Priority 24/7 support</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
