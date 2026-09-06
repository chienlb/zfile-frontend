import { Search, Filter, Database, FileText, Settings2, MoreHorizontal, Link2 } from 'lucide-react'

const workspaces = [
  { id: 1, name: 'Acme Corp', owner: 'Jordan Davis', members: 4, storage: '8.4 GB', files: 120, plan: 'Pro' },
  { id: 2, name: 'Personal Vault', owner: 'Alice Smith', members: 1, storage: '12.1 GB', files: 45, plan: 'Free' },
  { id: 3, name: 'Design Team', owner: 'Bob Johnson', members: 12, storage: '2.3 GB', files: 8, plan: 'Enterprise' },
  { id: 4, name: 'Marketing Assets', owner: 'Charlie Davis', members: 8, storage: '45.8 GB', files: 842, plan: 'Pro' },
]

export default function WorkspacesManagement() {
  return (
    <div className="page-content !max-w-[1800px]">
      <div className="page-heading flex items-center justify-between">
        <div>
          <p className="eyebrow mb-2">Administration</p>
          <h1>Workspaces <span className="heading-dot text-indigo-500">.</span></h1>
          <p className="subtitle">Monitor and manage all workspaces across the platform.</p>
        </div>
        <div className="flex gap-3">
          <button className="secondary-button h-[36px]">
            <Filter size={15} /> Filters
          </button>
        </div>
      </div>

      <div className="bg-[#111318] border border-zinc-800 rounded-xl overflow-hidden mt-8">
        <div className="p-4 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/30">
          <div className="auth-input h-[34px] w-[300px] m-0 bg-[#0d0f13] border-zinc-700">
            <Search size={14} className="text-zinc-500" />
            <input type="text" placeholder="Search workspaces..." className="text-[13px]" />
          </div>
          <span className="text-[13px] font-medium text-zinc-500">Showing 4 of 3,842 workspaces</span>
        </div>

        <div className="table-shell m-0 border-0 rounded-none bg-transparent">
          <div className="table-head !bg-transparent !border-zinc-800" style={{ gridTemplateColumns: 'minmax(220px, 1.8fr) 1.1fr .8fr .8fr 80px' }}>
            <span>Workspace</span>
            <span>Owner</span>
            <span>Storage & Files</span>
            <span>Plan</span>
            <span />
          </div>
          
          {workspaces.map(ws => (
            <div key={ws.id} className="file-row !border-zinc-800 hover:bg-zinc-800/30" style={{ gridTemplateColumns: 'minmax(220px, 1.8fr) 1.1fr .8fr .8fr 80px' }}>
              <div className="file-name">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <Database size={18} />
                </div>
                <div>
                  <p className="text-[14px] font-medium text-zinc-200">{ws.name}</p>
                  <p className="text-[13px] text-zinc-500">{ws.members} members</p>
                </div>
              </div>
              
              <span className="text-[13px] text-zinc-300">
                {ws.owner}
              </span>
              
              <div className="flex flex-col">
                <span className="text-[13px] text-zinc-300">{ws.storage} used</span>
                <span className="text-[12px] text-zinc-500 flex items-center gap-1"><FileText size={12} /> {ws.files} files</span>
              </div>
              
              <span>
                <span className="text-[13px] font-medium text-zinc-300 bg-zinc-800/50 px-2.5 py-1 rounded-md border border-zinc-700">
                  {ws.plan}
                </span>
              </span>
              
              <div className="flex gap-2 justify-end pr-4">
                <button className="p-2 text-zinc-500 hover:text-indigo-400 hover:bg-indigo-500/10 rounded-md transition-colors" title="View Workspace Link">
                  <Link2 size={16} />
                </button>
                <button className="p-2 text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800 rounded-md transition-colors" title="Manage Settings">
                  <Settings2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
