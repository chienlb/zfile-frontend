import { MessageSquare, Search, Filter, CheckCircle, Clock } from 'lucide-react'

const feedbacks = [
  { id: 1, user: 'jordan@acme.co', message: 'The new upload feature is incredibly fast!', type: 'Praise', date: '2 hours ago', status: 'New' },
  { id: 2, user: 'alice@example.com', message: 'I cannot access my older files from 2024.', type: 'Bug', date: '5 hours ago', status: 'In Progress' },
  { id: 3, user: 'bob@example.com', message: 'It would be great to have dark mode in the editor.', type: 'Feature Request', date: '1 day ago', status: 'Resolved' },
]

export default function FeedbackManagement() {
  return (
    <div className="page-content !max-w-[1800px]">
      <div className="page-heading flex items-center justify-between">
        <div>
          <p className="eyebrow mb-2">Administration</p>
          <h1>User Feedback <span className="heading-dot text-indigo-500">.</span></h1>
          <p className="subtitle">Review and manage user feedback, bug reports, and feature requests.</p>
        </div>
      </div>

      <div className="bg-[#111318] border border-zinc-800 rounded-xl overflow-hidden mt-8">
        <div className="p-4 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/30">
          <div className="auth-input h-[34px] w-[300px] m-0 bg-[#0d0f13] border-zinc-700">
            <Search size={14} className="text-zinc-500" />
            <input type="text" placeholder="Search feedback..." className="text-[13px]" />
          </div>
          <button className="secondary-button h-[34px]">
            <Filter size={15} /> Filters
          </button>
        </div>

        <div className="table-shell m-0 border-0 rounded-none bg-transparent">
          <div className="table-head !bg-transparent !border-zinc-800" style={{ gridTemplateColumns: '1.5fr 2fr 1fr 1fr 1fr 80px' }}>
            <span>User</span>
            <span>Message</span>
            <span>Type</span>
            <span>Date</span>
            <span>Status</span>
            <span />
          </div>
          
          {feedbacks.map(item => (
            <div key={item.id} className="file-row !border-zinc-800 hover:bg-zinc-800/30" style={{ gridTemplateColumns: '1.5fr 2fr 1fr 1fr 1fr 80px' }}>
              <span className="text-[13px] font-medium text-zinc-300">{item.user}</span>
              <span className="text-[13px] text-zinc-400 truncate pr-4">{item.message}</span>
              
              <span className="text-[12px]">
                <span className={`px-2 py-1 rounded-md border ${
                  item.type === 'Bug' ? 'bg-red-500/10 text-red-400 border-red-500/20' :
                  item.type === 'Praise' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                  'bg-blue-500/10 text-blue-400 border-blue-500/20'
                }`}>
                  {item.type}
                </span>
              </span>
              
              <span className="text-[13px] text-zinc-500">{item.date}</span>
              
              <span className="text-[13px]">
                {item.status === 'New' && <span className="text-blue-400 flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> New</span>}
                {item.status === 'In Progress' && <span className="text-amber-400 flex items-center gap-1.5"><Clock size={13} /> In Progress</span>}
                {item.status === 'Resolved' && <span className="text-emerald-400 flex items-center gap-1.5"><CheckCircle size={13} /> Resolved</span>}
              </span>
              
              <div className="flex gap-2 justify-end pr-4">
                <button className="text-[12px] text-indigo-400 hover:text-indigo-300 font-medium">View</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
