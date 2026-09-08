'use client'

import { Moon, Sun, Monitor } from 'lucide-react'

export default function AppearanceSettingsPage() {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[18px] font-semibold text-zinc-200">Appearance</h2>
        <button className="primary-button h-[32px]">Save Changes</button>
      </div>

      <div className="settings-panel p-6">
        <h2 className="text-[16px] font-semibold text-zinc-200 mb-6">Theme Preference</h2>
        <div className="grid grid-cols-3 gap-4">
          <button className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl border border-blue-500 bg-blue-500/10 text-blue-400">
            <Moon size={24} />
            <span className="text-[13px] font-medium">Dark Mode</span>
          </button>
          <button className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl border border-white/10 bg-black/40 text-zinc-400 hover:text-white hover:bg-white/5 transition">
            <Sun size={24} />
            <span className="text-[13px] font-medium">Light Mode</span>
          </button>
          <button className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl border border-white/10 bg-black/40 text-zinc-400 hover:text-white hover:bg-white/5 transition">
            <Monitor size={24} />
            <span className="text-[13px] font-medium">System Default</span>
          </button>
        </div>

        <h2 className="text-[16px] font-semibold text-zinc-200 mt-10 mb-6">Accent Color</h2>
        <div className="flex gap-4">
          <button className="w-10 h-10 rounded-full bg-blue-500 ring-2 ring-blue-500 ring-offset-2 ring-offset-[#111318]" />
          <button className="w-10 h-10 rounded-full bg-violet-500 hover:scale-110 transition" />
          <button className="w-10 h-10 rounded-full bg-emerald-500 hover:scale-110 transition" />
          <button className="w-10 h-10 rounded-full bg-rose-500 hover:scale-110 transition" />
          <button className="w-10 h-10 rounded-full bg-amber-500 hover:scale-110 transition" />
        </div>
      </div>
    </>
  )
}
