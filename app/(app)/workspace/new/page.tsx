'use client'

import { useState } from 'react'
import { ArrowLeft, Check, FolderOpen, Link2, Plus, Users } from 'lucide-react'
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
      <main className="auth-page">
        <div className="auth-card" style={{ maxWidth: '440px' }}>
          <div className="auth-success">
            <div className="success-check">
              <Check size={22} />
            </div>
            <h2>Workspace Created</h2>
            <p className="mt-2">Your new team workspace is ready.</p>
            <div className="mt-8 flex gap-3">
              <Link href="/" className="secondary-button flex-1 justify-center">Go to Dashboard</Link>
              <button className="primary-button flex-1 justify-center"><Users size={16} /> Invite Team</button>
            </div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="auth-page">
      <Link href="/" className="auth-brand">
        <div className="logo-mark"><span /></div>
        <span>ZFile</span>
      </Link>
      
      <div className="auth-card" style={{ maxWidth: '440px', padding: '38px' }}>
        <div className="tool-hero-icon" style={{ marginBottom: '24px' }}>
          <FolderOpen size={20} />
        </div>
        <h1 style={{ fontSize: '24px' }}>Create Workspace</h1>
        <p className="subtitle mt-2 mb-8">Set up a secure environment for your team's files.</p>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="auth-label">Workspace Name</label>
            <div className="auth-input">
              <input type="text" required placeholder="e.g. Acme Corp" autoFocus />
            </div>
          </div>
          
          <div className="mb-6">
            <label className="auth-label">Workspace URL</label>
            <div className="auth-input">
              <Link2 size={16} className="text-zinc-500" />
              <span className="text-zinc-500 text-[13px] mr-1">zfile.app/</span>
              <input type="text" required placeholder="acme" className="font-mono" />
            </div>
          </div>
          
          <div className="mb-8">
            <label className="auth-label mb-3">Workspace Avatar</label>
            <div className="flex gap-3">
              <button type="button" className="w-[50px] h-[50px] rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-[18px]">
                A
              </button>
              <button type="button" className="w-[50px] h-[50px] rounded-lg border border-zinc-700 bg-zinc-800/50 flex items-center justify-center text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 transition-colors">
                <Plus size={20} />
              </button>
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-zinc-800/50">
            <Link href="/" className="back-link"><ArrowLeft size={16} /> Cancel</Link>
            <button type="submit" className="primary-button px-6" disabled={loading}>
              {loading ? 'Creating...' : 'Create Workspace'}
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}
