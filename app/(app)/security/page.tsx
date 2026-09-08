'use client'

import { ShieldAlert, ShieldCheck, Key, Lock, AlertTriangle, ArrowRight } from 'lucide-react'

export default function SecurityPage() {
  return (
    <div className="page-content">
      <div className="page-heading">
        <div>
          <h1>Security & Access <span className="heading-dot">.</span></h1>
          <p className="subtitle">Manage authentication methods, sessions, and workspace security policies.</p>
        </div>
      </div>

      <div className="grid grid-cols-[1fr_350px] gap-8 mt-8">
        <div className="space-y-8">
          <div className="settings-panel p-6">
            <h2 className="flex items-center gap-2 text-[16px] font-semibold text-zinc-200 mb-6">
              <ShieldCheck size={18} className="text-emerald-400" /> Authentication
            </h2>
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-5 border-b border-white/5">
                <div>
                  <p className="text-[14px] font-medium text-zinc-200">Two-Factor Authentication (2FA)</p>
                  <p className="text-[13px] text-zinc-500 mt-1">Add an extra layer of security to your account.</p>
                </div>
                <button className="primary-button">Enable 2FA</button>
              </div>
              <div className="flex items-center justify-between pb-5 border-b border-white/5">
                <div>
                  <p className="text-[14px] font-medium text-zinc-200">Password</p>
                  <p className="text-[13px] text-zinc-500 mt-1">Last changed 3 months ago.</p>
                </div>
                <button className="secondary-button">Update</button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[14px] font-medium text-zinc-200">Identity Providers</p>
                  <p className="text-[13px] text-zinc-500 mt-1">Sign in with Google, GitHub, or Microsoft.</p>
                </div>
                <button className="secondary-button">Manage</button>
              </div>
            </div>
          </div>

          <div className="settings-panel p-6">
            <h2 className="flex items-center gap-2 text-[16px] font-semibold text-zinc-200 mb-6">
              <Lock size={18} className="text-blue-400" /> Active Sessions
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center bg-black/20 p-4 rounded-lg border border-white/5">
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                    <span className="font-semibold text-xs">Mac</span>
                  </div>
                  <div>
                    <p className="text-[14px] font-medium text-zinc-200">Mac OS • Safari</p>
                    <p className="text-[12px] text-zinc-500">Ho Chi Minh City, VN (Current session)</p>
                  </div>
                </div>
                <span className="text-[12px] text-emerald-400 font-medium">Active now</span>
              </div>
              <div className="flex justify-between items-center bg-black/20 p-4 rounded-lg border border-white/5">
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400">
                    <span className="font-semibold text-xs">Win</span>
                  </div>
                  <div>
                    <p className="text-[14px] font-medium text-zinc-200">Windows 11 • Chrome</p>
                    <p className="text-[12px] text-zinc-500">Hanoi, VN • 2 days ago</p>
                  </div>
                </div>
                <button className="text-[12px] text-red-400 font-medium hover:text-red-300 transition">Revoke</button>
              </div>
            </div>
            <button className="text-button mt-5 !text-red-400 hover:!text-red-300">
              Revoke all other sessions <ArrowRight size={14} />
            </button>
          </div>
        </div>

        <div>
          <div className="insight-card h-fit sticky top-24 border-red-500/20 bg-red-500/5">
            <div className="insight-glow !bg-red-500/20" />
            <div className="insight-icon mb-4 !bg-red-500/20 !text-red-400"><ShieldAlert size={16} /></div>
            <h3 className="text-[16px] font-semibold text-white mb-2">Security Alert</h3>
            <p className="text-[13px] text-zinc-400 mb-4 leading-relaxed">
              Your workspace is missing some recommended security configurations.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-2 text-[13px] text-zinc-300 items-start">
                <AlertTriangle size={14} className="text-amber-400 shrink-0 mt-0.5" />
                2FA is not enforced for admin users.
              </li>
              <li className="flex gap-2 text-[13px] text-zinc-300 items-start">
                <AlertTriangle size={14} className="text-amber-400 shrink-0 mt-0.5" />
                3 unused API keys found.
              </li>
            </ul>
            <button className="primary-button w-full !bg-white !text-black !shadow-none hover:!bg-zinc-200">
              Review Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
