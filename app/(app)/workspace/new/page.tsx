'use client'

import { useState } from 'react'
import { ArrowLeft, Check, FolderOpen, Link2, Plus, Users, ShieldCheck, Zap, Globe } from 'lucide-react'
import Link from 'next/link'

export default function NewWorkspacePage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
    }, 1500)
  }

  if (success) {
    return (
      <main className="min-h-screen bg-[#0a0b0e] flex items-center justify-center p-6">
        <div className="w-full max-w-lg bg-[#111318] border border-zinc-800 rounded-2xl p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
          <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check size={40} />
          </div>
          <h2 className="text-[28px] font-bold text-white mb-3">Workspace Created!</h2>
          <p className="text-zinc-400 text-[15px] mb-10">Your secure team environment is now live and ready for collaboration.</p>
          <div className="flex gap-4">
            <Link href="/" className="secondary-button flex-1 justify-center h-[44px] text-[15px]">Go to Dashboard</Link>
            <button className="primary-button flex-1 justify-center h-[44px] text-[15px] shadow-blue-500/20 shadow-lg"><Users size={18} /> Invite Team</button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#0a0b0e] flex">
      {/* Left Form Area */}
      <div className="w-full lg:w-1/2 p-8 lg:p-20 flex flex-col justify-center relative z-10 bg-[#0a0b0e]">
        <Link href="/" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-16 w-fit font-medium text-[14px]">
          <ArrowLeft size={16} /> Back to Dashboard
        </Link>
        
        <div className="max-w-[480px]">
          <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
            <FolderOpen size={28} />
          </div>
          <h1 className="text-[36px] font-bold text-white mb-3 tracking-tight">Create Workspace</h1>
          <p className="text-zinc-400 text-[16px] mb-12 leading-relaxed">Set up a dedicated, end-to-end encrypted environment for your team's files and workflows.</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[13px] font-bold text-zinc-300 uppercase tracking-wider mb-2">Workspace Name</label>
              <input type="text" required placeholder="e.g. Acme Corp" autoFocus className="w-full h-[48px] bg-[#111318] border border-zinc-800 rounded-lg px-4 text-white focus:outline-none focus:border-blue-500 transition-colors" />
            </div>
            
            <div>
              <label className="block text-[13px] font-bold text-zinc-300 uppercase tracking-wider mb-2">Workspace URL</label>
              <div className="flex items-center h-[48px] bg-[#111318] border border-zinc-800 rounded-lg px-4 focus-within:border-blue-500 transition-colors">
                <Globe size={18} className="text-zinc-500 mr-2" />
                <span className="text-zinc-500 text-[15px] select-none">zfile.app/</span>
                <input type="text" required placeholder="acme" className="flex-1 bg-transparent border-0 outline-none text-white text-[15px] ml-1" />
              </div>
            </div>
            
            <div>
              <label className="block text-[13px] font-bold text-zinc-300 uppercase tracking-wider mb-3 mt-4">Workspace Avatar</label>
              <div className="flex gap-4">
                <button type="button" className="w-[60px] h-[60px] rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-[24px] shadow-lg shadow-blue-500/20">
                  A
                </button>
                <button type="button" className="w-[60px] h-[60px] rounded-xl border border-dashed border-zinc-700 hover:border-zinc-500 bg-zinc-900/50 flex items-center justify-center text-zinc-500 hover:text-zinc-300 transition-colors">
                  <Plus size={24} />
                </button>
              </div>
            </div>
            
            <button type="submit" className="w-full h-[48px] bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold text-[15px] flex items-center justify-center gap-2 mt-8 transition-colors shadow-lg shadow-blue-500/20" disabled={loading}>
              {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : 'Create Workspace'}
            </button>
          </form>
        </div>
      </div>

      {/* Right Graphic Area */}
      <div className="hidden lg:flex w-1/2 relative bg-[#111318] items-center justify-center border-l border-zinc-800/50 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
        
        {/* Feature Cards Grid */}
        <div className="relative z-10 max-w-md w-full space-y-6">
          <div className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 backdrop-blur-md">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-4"><ShieldCheck size={24} /></div>
            <h3 className="text-[18px] font-bold text-white mb-2">End-to-End Encrypted</h3>
            <p className="text-zinc-400 text-[14px] leading-relaxed">Your team's files are encrypted on your device before they ever hit our servers. Ultimate privacy guaranteed.</p>
          </div>
          
          <div className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 backdrop-blur-md transform translate-x-12">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400 mb-4"><Zap size={24} /></div>
            <h3 className="text-[18px] font-bold text-white mb-2">Lightning Fast Workflows</h3>
            <p className="text-zinc-400 text-[14px] leading-relaxed">Edit, convert, and process heavy media files directly in the browser with ZFile Studio capabilities.</p>
          </div>
          
          <div className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 backdrop-blur-md">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400 mb-4"><Users size={24} /></div>
            <h3 className="text-[18px] font-bold text-white mb-2">Granular Access Control</h3>
            <p className="text-zinc-400 text-[14px] leading-relaxed">Manage team permissions with precision. See exactly who viewed, edited, or downloaded every file.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
