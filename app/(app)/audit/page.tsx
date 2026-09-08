'use client'

import { History, Search, Download, Filter } from 'lucide-react'

export default function AuditLogsPage() {
  return (
    <div className="page-content">
      <div className="page-heading">
        <div>
          <h1>Audit Logs <span className="heading-dot">.</span></h1>
          <p className="subtitle">Track user activity, file access, and administrative changes across your workspace.</p>
        </div>
        <div className="flex gap-3">
          <button className="secondary-button"><Download size={14} /> Export CSV</button>
        </div>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <div className="search-box !w-[300px]">
          <Search size={16} />
          <input placeholder="Search by user, action, or resource..." />
        </div>
        <button className="secondary-button h-[34px]"><Filter size={14} /> Filter</button>
      </div>

      <div className="table-shell mt-0">
        <div className="table-head" style={{ gridTemplateColumns: '2fr 1.5fr 1fr 1fr' }}>
          <span>Action</span>
          <span>User</span>
          <span>IP Address</span>
          <span>Date</span>
        </div>
        
        {/* Sample Logs */}
        <div className="file-row" style={{ gridTemplateColumns: '2fr 1.5fr 1fr 1fr' }}>
          <div className="flex flex-col justify-center">
            <span className="text-[13px] font-medium text-zinc-200">Deleted user account</span>
            <span className="text-[12px] text-zinc-500">Resource: user_id_89123</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-blue-900 flex items-center justify-center text-[10px] text-blue-200">JD</div>
            <span className="text-[13px] text-zinc-300">Jordan Davis</span>
          </div>
          <span className="text-[13px] font-mono text-zinc-400">192.168.1.1</span>
          <span className="text-[13px] text-zinc-400">Just now</span>
        </div>

        <div className="file-row" style={{ gridTemplateColumns: '2fr 1.5fr 1fr 1fr' }}>
          <div className="flex flex-col justify-center">
            <span className="text-[13px] font-medium text-zinc-200">Downloaded file</span>
            <span className="text-[12px] text-zinc-500">Resource: Q3_Financials.xlsx</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-purple-900 flex items-center justify-center text-[10px] text-purple-200">AS</div>
            <span className="text-[13px] text-zinc-300">Alice Smith</span>
          </div>
          <span className="text-[13px] font-mono text-zinc-400">10.0.0.5</span>
          <span className="text-[13px] text-zinc-400">2 hours ago</span>
        </div>

        <div className="file-row" style={{ gridTemplateColumns: '2fr 1.5fr 1fr 1fr' }}>
          <div className="flex flex-col justify-center">
            <span className="text-[13px] font-medium text-zinc-200">Enabled 2FA</span>
            <span className="text-[12px] text-zinc-500">Resource: account_settings</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-blue-900 flex items-center justify-center text-[10px] text-blue-200">JD</div>
            <span className="text-[13px] text-zinc-300">Jordan Davis</span>
          </div>
          <span className="text-[13px] font-mono text-zinc-400">192.168.1.1</span>
          <span className="text-[13px] text-zinc-400">Yesterday, 14:30</span>
        </div>
      </div>
    </div>
  )
}
