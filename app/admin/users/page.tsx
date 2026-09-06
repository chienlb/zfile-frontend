import { Search, Filter, MoreHorizontal, ShieldCheck, Mail, Database, Trash2, Ban } from 'lucide-react'

const users = [
  { id: 1, name: 'Jordan Davis', email: 'jordan@acme.co', role: 'Admin', storage: '8.4 GB', status: 'Active', color: 'blue' },
  { id: 2, name: 'Alice Smith', email: 'alice@example.com', role: 'User', storage: '12.1 GB', status: 'Active', color: 'emerald' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', storage: '2.3 GB', status: 'Suspended', color: 'red' },
  { id: 4, name: 'Charlie Davis', email: 'charlie@example.com', role: 'User', storage: '45.8 GB', status: 'Active', color: 'emerald' },
  { id: 5, name: 'Diana Prince', email: 'diana@themyscira.gov', role: 'Admin', storage: '1.2 GB', status: 'Active', color: 'blue' },
]

export default function UsersManagement() {
  return (
    <div className="page-content !max-w-[1800px]">
      <div className="page-heading flex items-center justify-between">
        <div>
          <p className="eyebrow mb-2">Administration</p>
          <h1>Users Management <span className="heading-dot text-indigo-500">.</span></h1>
          <p className="subtitle">Manage all registered users on the ZFile platform.</p>
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
            <input type="text" placeholder="Search by name, email..." className="text-[13px]" />
          </div>
          <span className="text-[13px] font-medium text-zinc-500">Showing 5 of 12,482 users</span>
        </div>

        <div className="table-shell m-0 border-0 rounded-none bg-transparent">
          <div className="table-head !bg-transparent !border-zinc-800" style={{ gridTemplateColumns: 'minmax(220px, 1.8fr) 1.1fr .8fr .8fr 80px' }}>
            <span>User Details</span>
            <span>Role</span>
            <span>Storage Used</span>
            <span>Status</span>
            <span />
          </div>
          
          {users.map(user => {
            const colorClasses = {
              blue: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
              emerald: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
              red: 'bg-red-500/10 text-red-400 border border-red-500/20'
            }[user.color] || 'bg-zinc-500/10 text-zinc-400 border border-zinc-500/20'
            
            return (
            <div key={user.id} className="file-row !border-zinc-800 hover:bg-zinc-800/30" style={{ gridTemplateColumns: 'minmax(220px, 1.8fr) 1.1fr .8fr .8fr 80px' }}>
              <div className="file-name">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-[14px] ${colorClasses}`}>
                  {user.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="text-[14px] font-medium text-zinc-200">{user.name}</p>
                  <p className="text-[13px] text-zinc-500">{user.email}</p>
                </div>
              </div>
              
              <span className="text-[13px] font-medium text-zinc-300">
                {user.role === 'Admin' ? (
                  <span className="flex items-center gap-1.5 text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-md w-fit border border-indigo-500/20">
                    <ShieldCheck size={14} /> Admin
                  </span>
                ) : 'User'}
              </span>
              
              <span className="text-[13px] text-zinc-400 flex items-center gap-1.5">
                <Database size={14} className="text-zinc-600" /> {user.storage}
              </span>
              
              <span>
                {user.status === 'Active' ? (
                  <span className="flex items-center gap-1.5 text-emerald-400 text-[13px]">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Active
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 text-red-400 text-[13px]">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500" /> Suspended
                  </span>
                )}
              </span>
              
              <div className="flex gap-2 justify-end pr-4">
                <button className="p-2 text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800 rounded-md transition-colors" title="Email User">
                  <Mail size={16} />
                </button>
                {user.status === 'Active' ? (
                  <button className="p-2 text-zinc-500 hover:text-amber-400 hover:bg-amber-500/10 rounded-md transition-colors" title="Suspend User">
                    <Ban size={16} />
                  </button>
                ) : (
                  <button className="p-2 text-zinc-500 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-md transition-colors" title="Restore User">
                    <ShieldCheck size={16} />
                  </button>
                )}
                <button className="p-2 text-zinc-500 hover:text-red-400 hover:bg-red-500/10 rounded-md transition-colors" title="Delete User">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
