'use client'

import { useState } from 'react'
import { ArrowLeft, Bell, Key, Moon, Palette, Shield, Smartphone, User, Check, Code2, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile')
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <main className="tools-page">

      <div className="max-w-[1240px] mx-auto mt-12 px-6 grid grid-cols-[240px_1fr] gap-10">
        <aside>
          <h2 className="text-[13px] font-bold text-zinc-500 uppercase tracking-wider mb-4 px-3">Personal Settings</h2>
          <nav className="space-y-1">
            <button 
              className={`w-full text-left px-3 py-2.5 rounded-lg text-[14px] flex items-center gap-3 transition-colors ${activeTab === 'profile' ? 'bg-blue-500/10 text-blue-400 font-medium' : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'}`}
              onClick={() => setActiveTab('profile')}
            >
              <User size={16} /> Profile Information
            </button>
            <button 
              className={`w-full text-left px-3 py-2.5 rounded-lg text-[14px] flex items-center gap-3 transition-colors ${activeTab === 'security' ? 'bg-blue-500/10 text-blue-400 font-medium' : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'}`}
              onClick={() => setActiveTab('security')}
            >
              <Shield size={16} /> Security
            </button>
            <button 
              className={`w-full text-left px-3 py-2.5 rounded-lg text-[14px] flex items-center gap-3 transition-colors ${activeTab === 'notifications' ? 'bg-blue-500/10 text-blue-400 font-medium' : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'}`}
              onClick={() => setActiveTab('notifications')}
            >
              <Bell size={16} /> Notifications
            </button>
            <button 
              className={`w-full text-left px-3 py-2.5 rounded-lg text-[14px] flex items-center gap-3 transition-colors ${activeTab === 'appearance' ? 'bg-blue-500/10 text-blue-400 font-medium' : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'}`}
              onClick={() => setActiveTab('appearance')}
            >
              <Palette size={16} /> Appearance
            </button>
            <div className="pt-4 pb-2">
              <div className="h-px bg-zinc-800/60 w-full" />
            </div>
            <button 
              className={`w-full text-left px-3 py-2.5 rounded-lg text-[14px] flex items-center gap-3 transition-colors ${activeTab === 'developer' ? 'bg-emerald-500/10 text-emerald-400 font-medium' : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'}`}
              onClick={() => setActiveTab('developer')}
            >
              <Code2 size={16} className={activeTab === 'developer' ? 'text-emerald-400' : ''} /> Developer API
            </button>
          </nav>
        </aside>

        <section className="bg-[#111318] border border-zinc-800 rounded-xl p-8">
          {activeTab === 'profile' && (
            <div>
              <h1 className="text-[22px] font-bold mb-1">Profile Information</h1>
              <p className="text-[14px] text-zinc-500 mb-8">Update your personal details and public profile.</p>

              <div className="flex items-center gap-6 mb-8 pb-8 border-b border-zinc-800/60">
                <div className="w-20 h-20 rounded-full bg-blue-900/50 border border-blue-500/20 text-blue-300 font-bold text-[24px] flex items-center justify-center">
                  JD
                </div>
                <div>
                  <div className="flex gap-3">
                    <button className="primary-button h-[32px] px-4">Upload new picture</button>
                    <button className="secondary-button h-[32px] px-4">Remove</button>
                  </div>
                  <p className="text-[12px] text-zinc-500 mt-3">JPG, GIF or PNG. 5MB max.</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="auth-label mb-2 block">First Name</label>
                  <div className="auth-input h-[42px]"><input type="text" defaultValue="Jordan" /></div>
                </div>
                <div>
                  <label className="auth-label mb-2 block">Last Name</label>
                  <div className="auth-input h-[42px]"><input type="text" defaultValue="Davis" /></div>
                </div>
              </div>

              <div className="mb-6">
                <label className="auth-label mb-2 block">Email Address</label>
                <div className="auth-input h-[42px]"><input type="email" defaultValue="jordan@acme.co" /></div>
              </div>

              <div className="mb-8">
                <label className="auth-label mb-2 block">Bio</label>
                <textarea className="w-full bg-[#0d0f13] border border-zinc-700 rounded-md p-3 text-[14px] text-zinc-200 outline-none h-24 resize-none" defaultValue="Product designer at Acme Corp." />
              </div>

              <div className="flex items-center justify-end gap-3 pt-6 border-t border-zinc-800/60">
                {saved && <span className="text-[13px] text-emerald-400 flex items-center gap-1"><Check size={14} /> Saved</span>}
                <button className="primary-button px-6 h-[38px]" onClick={handleSave}>Save Changes</button>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div>
              <h1 className="text-[22px] font-bold mb-1">Security</h1>
              <p className="text-[14px] text-zinc-500 mb-8">Manage your password and security settings.</p>

              <div className="space-y-6">
                <div className="flex items-center justify-between p-5 border border-zinc-800 rounded-lg bg-zinc-900/30">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 text-zinc-400"><Key size={20} /></div>
                    <div>
                      <h3 className="text-[15px] font-medium text-zinc-200 mb-1">Password</h3>
                      <p className="text-[13px] text-zinc-500">Last changed 3 months ago</p>
                    </div>
                  </div>
                  <button className="secondary-button h-[32px] px-4">Update</button>
                </div>

                <div className="flex items-center justify-between p-5 border border-zinc-800 rounded-lg bg-zinc-900/30">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 text-emerald-400"><Smartphone size={20} /></div>
                    <div>
                      <h3 className="text-[15px] font-medium text-zinc-200 mb-1">Two-factor Authentication (2FA)</h3>
                      <p className="text-[13px] text-zinc-500 max-w-sm">Adds an extra layer of security to your account. Currently enabled via Authenticator App.</p>
                    </div>
                  </div>
                  <button className="secondary-button h-[32px] px-4 border-emerald-500/20 text-emerald-400 bg-emerald-500/10">Manage 2FA</button>
                </div>
              </div>
            </div>
          )}
          
          {(activeTab === 'notifications' || activeTab === 'appearance') && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <Moon size={48} className="text-zinc-700 mb-4" />
              <h2 className="text-[18px] font-medium text-zinc-300 mb-2">Coming Soon</h2>
              <p className="text-[14px] text-zinc-500">This section is currently under development.</p>
            </div>
          )}

          {activeTab === 'developer' && (
            <div>
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h1 className="text-[22px] font-bold mb-1 flex items-center gap-2">
                    Developer API
                  </h1>
                  <p className="text-[14px] text-zinc-500">Access your API keys and integrate ZFile with your applications.</p>
                </div>
                <Link href="/partner">
                  <button className="secondary-button h-[36px] bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20 px-4 flex items-center gap-2 transition-colors">
                    Open Developer Portal <ExternalLink size={14} />
                  </button>
                </Link>
              </div>

              <div className="space-y-6">
                <div className="p-6 border border-zinc-800 rounded-xl bg-zinc-900/30">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-[15px] font-medium text-zinc-200 mb-1">API Credentials</h3>
                      <p className="text-[13px] text-zinc-500 max-w-md">Generate secret keys to authenticate your API requests. For advanced usage metrics and webhook setup, visit the Developer Portal.</p>
                    </div>
                    <button className="primary-button h-[32px] px-4 text-[13px]">Generate New Key</button>
                  </div>
                  
                  <div className="mt-6 flex flex-col gap-3">
                    {/* Dummy API Key Row */}
                    <div className="flex items-center justify-between p-3 bg-[#0d0f13] border border-zinc-800 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Key size={14} className="text-emerald-500" />
                        <div>
                          <p className="text-[13px] font-medium text-zinc-200">Default Production Key</p>
                          <p className="text-[12px] font-mono text-zinc-500 mt-0.5">pk_live_8f92************************3a2c</p>
                        </div>
                      </div>
                      <span className="text-[12px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  )
}
