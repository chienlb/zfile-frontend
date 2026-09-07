import { Plus, Key, Copy, Eye, EyeOff, MoreHorizontal, AlertTriangle, RefreshCw, Trash2 } from 'lucide-react'

const keys = [
  { id: 1, name: 'Production Main Key', key: 'pk_live_8f92************************3a2c', created: '2025-10-14', lastUsed: '2 minutes ago', status: 'Active' },
  { id: 2, name: 'Staging Environment', key: 'pk_test_41a8************************9b1e', created: '2026-02-28', lastUsed: '5 days ago', status: 'Active' },
  { id: 3, name: 'Old Prod Key (Deprecating)', key: 'pk_live_00c1************************77xd', created: '2024-05-11', lastUsed: '1 month ago', status: 'Revoked' },
]

export default function APIKeys() {
  return (
    <div className="page-content !max-w-[1800px]">
      <div className="page-heading flex items-center justify-between">
        <div>
          <p className="eyebrow mb-2">Developer Hub</p>
          <h1>API Keys <span className="heading-dot text-emerald-500">.</span></h1>
          <p className="subtitle">Manage authentication keys for your application integrations.</p>
        </div>
        <button className="primary-button h-[36px] bg-emerald-600 hover:bg-emerald-500 border-emerald-500">
          <Plus size={15} /> Create New Key
        </button>
      </div>

      <div className="mt-8 p-4 rounded-xl border border-amber-500/20 bg-amber-500/5 flex items-start gap-3">
        <AlertTriangle size={18} className="text-amber-400 shrink-0 mt-0.5" />
        <p className="text-[13px] text-amber-200/70 leading-relaxed">
          Your API keys carry many privileges, so be sure to keep them secure! Do not share your secret API keys in publicly accessible areas such as GitHub, client-side code, and so forth.
        </p>
      </div>

      <div className="bg-[#111318] border border-zinc-800 rounded-xl overflow-hidden mt-6">
        <div className="table-shell m-0 border-0 rounded-none bg-transparent">
          <div className="table-head !bg-transparent !border-zinc-800" style={{ gridTemplateColumns: '1.5fr 2fr 1fr 1fr 1fr 80px' }}>
            <span>Key Name</span>
            <span>Secret Key</span>
            <span>Created</span>
            <span>Last Used</span>
            <span>Status</span>
            <span />
          </div>
          
          {keys.map(item => (
            <div key={item.id} className="file-row !border-zinc-800 hover:bg-zinc-800/30" style={{ gridTemplateColumns: '1.5fr 2fr 1fr 1fr 1fr 80px' }}>
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-md flex items-center justify-center ${item.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-zinc-800 text-zinc-500'}`}>
                  <Key size={14} />
                </div>
                <span className="text-[14px] font-medium text-zinc-200">{item.name}</span>
              </div>
              
              <div className="flex items-center gap-3 pr-4">
                <span className="font-mono text-[13px] text-zinc-400 truncate">{item.key}</span>
                {item.status === 'Active' && (
                  <button className="text-zinc-500 hover:text-emerald-400 shrink-0">
                    <Copy size={14} />
                  </button>
                )}
              </div>
              
              <span className="text-[13px] text-zinc-500">{item.created}</span>
              <span className="text-[13px] text-zinc-500">{item.lastUsed}</span>
              
              <span>
                {item.status === 'Active' ? (
                  <span className="flex items-center gap-1.5 text-emerald-400 text-[13px]">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Active
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 text-zinc-500 text-[13px]">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-600" /> Revoked
                  </span>
                )}
              </span>
              
              <div className="flex gap-2 justify-end pr-4">
                {item.status === 'Active' && (
                  <button className="p-2 text-zinc-500 hover:text-amber-400 hover:bg-amber-500/10 rounded-md transition-colors" title="Roll Key">
                    <RefreshCw size={16} />
                  </button>
                )}
                <button className="p-2 text-zinc-500 hover:text-red-400 hover:bg-red-500/10 rounded-md transition-colors" title="Delete">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
