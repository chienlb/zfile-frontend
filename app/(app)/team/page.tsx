'use client'

import { useState } from 'react'
import { ArrowLeft, Check, Copy, Link as LinkIcon, MoreHorizontal, Plus, Search, ShieldAlert, User, UserMinus } from 'lucide-react'
import Link from 'next/link'

const members = [
  { id: 1, name: 'Jordan Davis', email: 'jordan@acme.co', role: 'Owner', avatar: 'JD', color: 'bg-blue-900/50 text-blue-300 border-blue-500/20' },
  { id: 2, name: 'Alex Chen', email: 'alex@acme.co', role: 'Admin', avatar: 'AC', color: 'bg-purple-900/50 text-purple-300 border-purple-500/20' },
  { id: 3, name: 'Taylor Smith', email: 'taylor@acme.co', role: 'Member', avatar: 'TS', color: 'bg-emerald-900/50 text-emerald-300 border-emerald-500/20' },
  { id: 4, name: 'Sam Taylor', email: 'sam@external.com', role: 'Viewer', avatar: 'ST', color: 'bg-zinc-800 text-zinc-300 border-zinc-600' },
]

export default function TeamPage() {
  const [copied, setCopied] = useState(false)
  const [inviteEmail, setInviteEmail] = useState('')
  const [sent, setSent] = useState(false)

  const copyLink = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleInvite = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inviteEmail) return
    setSent(true)
    setTimeout(() => {
      setSent(false)
      setInviteEmail('')
    }, 2000)
  }

  return (
    <main className="tools-page">

      <div className="max-w-[1240px] mx-auto mt-12 px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-[24px] font-bold text-zinc-100">Team Members</h1>
            <p className="text-[14px] text-zinc-500 mt-1">Manage who has access to the Acme Corp workspace.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
          <div className="bg-[#111318] border border-zinc-800 rounded-xl overflow-hidden">
            <div className="p-4 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/30">
              <div className="auth-input h-[34px] w-[240px] m-0 bg-[#0d0f13]">
                <Search size={14} className="text-zinc-500" />
                <input type="text" placeholder="Search members..." className="text-[12px]" />
              </div>
              <span className="text-[12px] font-medium text-zinc-500">4 members</span>
            </div>

            <div className="divide-y divide-zinc-800">
              {members.map(member => (
                <div key={member.id} className="p-4 flex items-center justify-between hover:bg-zinc-900/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-[14px] border ${member.color}`}>
                      {member.avatar}
                    </div>
                    <div>
                      <p className="text-[14px] font-medium text-zinc-200 flex items-center gap-2">
                        {member.name}
                        {member.role === 'Owner' && <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">Owner</span>}
                      </p>
                      <p className="text-[13px] text-zinc-500">{member.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    {member.role !== 'Owner' ? (
                      <select className="bg-transparent border border-zinc-700 rounded-md text-[12px] text-zinc-300 py-1.5 px-2 outline-none hover:border-zinc-600 focus:border-blue-500">
                        <option value="Admin">Admin</option>
                        <option value="Member" selected={member.role === 'Member'}>Member</option>
                        <option value="Viewer" selected={member.role === 'Viewer'}>Viewer</option>
                      </select>
                    ) : (
                      <span className="text-[12px] text-zinc-500 pr-2">Cannot change</span>
                    )}
                    
                    <button className="text-zinc-500 hover:text-zinc-300 transition-colors p-1" disabled={member.role === 'Owner'}>
                      {member.role === 'Owner' ? <ShieldAlert size={16} className="opacity-30" /> : <MoreHorizontal size={16} />}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-[#111318] border border-zinc-800 p-5 rounded-xl">
              <h3 className="text-[15px] font-bold text-zinc-200 mb-4">Invite new member</h3>
              <form onSubmit={handleInvite} className="space-y-3">
                <div className="auth-input h-[38px]">
                  <input type="email" placeholder="Email address" required value={inviteEmail} onChange={e => setInviteEmail(e.target.value)} />
                </div>
                <select className="w-full bg-[#0d0f13] border border-zinc-700 rounded-md text-[13px] text-zinc-300 h-[38px] px-3 outline-none">
                  <option value="Member">Role: Member</option>
                  <option value="Admin">Role: Admin</option>
                  <option value="Viewer">Role: Viewer</option>
                </select>
                <button type="submit" className="primary-button w-full h-[38px]" disabled={sent}>
                  {sent ? <><Check size={16} /> Invite sent!</> : 'Send Invitation'}
                </button>
              </form>
            </div>

            <div className="bg-[#111318] border border-zinc-800 p-5 rounded-xl">
              <h3 className="text-[15px] font-bold text-zinc-200 mb-2">Invite Link</h3>
              <p className="text-[12px] text-zinc-500 mb-4">Anyone with this link can join as a Member.</p>
              
              <div className="flex border border-zinc-700 rounded-md overflow-hidden bg-[#0d0f13]">
                <div className="px-3 py-2 text-[12px] text-zinc-400 font-mono truncate flex-1 border-r border-zinc-700">
                  zfile.app/join/x8k2j9s
                </div>
                <button 
                  className="px-3 py-2 text-zinc-300 hover:bg-zinc-800 transition-colors flex items-center justify-center w-10"
                  onClick={copyLink}
                  title="Copy link"
                >
                  {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
