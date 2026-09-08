'use client'

import { CreditCard, Download, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export default function BillingSettingsPage() {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[18px] font-semibold text-zinc-200">Billing & Plan</h2>
      </div>

      <div className="settings-panel p-6 mb-8">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-[16px] font-semibold text-zinc-200 mb-1">Current Plan: Pro</h2>
            <p className="text-[13px] text-zinc-400">Your next billing date is October 15, 2026.</p>
          </div>
          <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-full text-[12px] font-medium">
            Active
          </span>
        </div>
        
        <div className="mt-8 flex gap-4">
          <Link href="/pricing" className="primary-button !px-6">Change Plan</Link>
          <button className="secondary-button !px-6 text-red-400 hover:text-red-300">Cancel Subscription</button>
        </div>
      </div>

      <div className="settings-panel p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[16px] font-semibold text-zinc-200">Payment Method</h2>
          <button className="text-button !text-blue-400">Update <ArrowUpRight size={14} /></button>
        </div>
        <div className="flex items-center gap-4 p-4 rounded-lg border border-white/10 bg-black/40">
          <div className="w-12 h-8 rounded bg-zinc-800 flex items-center justify-center">
            <CreditCard size={18} className="text-zinc-400" />
          </div>
          <div>
            <p className="text-[14px] font-medium text-zinc-200">Visa ending in 4242</p>
            <p className="text-[12px] text-zinc-500">Expires 12/2028</p>
          </div>
        </div>
      </div>

      <div className="settings-panel p-6 mt-8">
        <h2 className="text-[16px] font-semibold text-zinc-200 mb-6">Billing History</h2>
        <div className="space-y-0">
          <div className="flex items-center justify-between py-4 border-b border-white/5">
            <div>
              <p className="text-[14px] font-medium text-zinc-200">Sept 15, 2026</p>
              <p className="text-[12px] text-zinc-500">Pro Plan - Annual</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[14px] font-medium text-zinc-300">$144.00</span>
              <button className="text-zinc-500 hover:text-zinc-300 transition"><Download size={16} /></button>
            </div>
          </div>
          <div className="flex items-center justify-between py-4 border-b border-white/5">
            <div>
              <p className="text-[14px] font-medium text-zinc-200">Aug 15, 2026</p>
              <p className="text-[12px] text-zinc-500">Starter Plan</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[14px] font-medium text-zinc-300">$0.00</span>
              <button className="text-zinc-500 hover:text-zinc-300 transition"><Download size={16} /></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
