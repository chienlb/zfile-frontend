'use client'

import { Laptop, Smartphone, Globe, ArrowRight } from 'lucide-react'

export default function DevicesSettingsPage() {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[18px] font-semibold text-zinc-200">Devices & Sessions</h2>
      </div>

      <div className="settings-panel p-6">
        <h2 className="text-[16px] font-semibold text-zinc-200 mb-2">Active Sessions</h2>
        <p className="text-[13px] text-zinc-400 mb-6">These devices are currently logged into your account. Revoke any sessions that you do not recognize.</p>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center bg-blue-500/5 p-4 rounded-lg border border-blue-500/20">
            <div className="flex gap-4 items-center">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                <Laptop size={18} />
              </div>
              <div>
                <p className="text-[14px] font-medium text-zinc-200">MacBook Pro 14" • Safari</p>
                <p className="text-[12px] text-blue-400/80">Current Session • Ho Chi Minh City, VN</p>
              </div>
            </div>
            <span className="text-[12px] text-emerald-400 font-medium bg-emerald-400/10 px-2 py-1 rounded-full">Active</span>
          </div>

          <div className="flex justify-between items-center bg-black/20 p-4 rounded-lg border border-white/5">
            <div className="flex gap-4 items-center">
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400">
                <Smartphone size={18} />
              </div>
              <div>
                <p className="text-[14px] font-medium text-zinc-200">iPhone 15 Pro • ZFile iOS App</p>
                <p className="text-[12px] text-zinc-500">Last active 2 hours ago • Hanoi, VN</p>
              </div>
            </div>
            <button className="text-[12px] text-red-400 font-medium hover:text-red-300 transition bg-red-400/10 px-3 py-1 rounded-lg">Revoke</button>
          </div>

          <div className="flex justify-between items-center bg-black/20 p-4 rounded-lg border border-white/5">
            <div className="flex gap-4 items-center">
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400">
                <Globe size={18} />
              </div>
              <div>
                <p className="text-[14px] font-medium text-zinc-200">Windows PC • Chrome</p>
                <p className="text-[12px] text-zinc-500">Last active 5 days ago • Da Nang, VN</p>
              </div>
            </div>
            <button className="text-[12px] text-red-400 font-medium hover:text-red-300 transition bg-red-400/10 px-3 py-1 rounded-lg">Revoke</button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5">
          <button className="text-button !text-red-400 hover:!text-red-300">
            Sign out of all other devices <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </>
  )
}
