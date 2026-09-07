import { Webhook, Plus, Settings2, Trash2, CheckCircle, XCircle } from 'lucide-react'

const webhooks = [
  { id: 1, url: 'https://api.acme.co/webhooks/zfile', events: ['file.uploaded', 'file.deleted'], status: 'Active', lastTriggered: '10 mins ago' },
  { id: 2, url: 'https://hooks.slack.com/services/T000/B000', events: ['workspace.created'], status: 'Failing', lastTriggered: '2 days ago' },
]

export default function WebhooksManagement() {
  return (
    <div className="page-content !max-w-[1800px]">
      <div className="page-heading flex items-center justify-between">
        <div>
          <p className="eyebrow mb-2">Developer Hub</p>
          <h1>Webhooks <span className="heading-dot text-emerald-500">.</span></h1>
          <p className="subtitle">Subscribe to events and receive real-time HTTP notifications.</p>
        </div>
        <button className="primary-button h-[36px] bg-emerald-600 hover:bg-emerald-500 border-emerald-500">
          <Plus size={15} /> Add Endpoint
        </button>
      </div>

      <div className="bg-[#111318] border border-zinc-800 rounded-xl overflow-hidden mt-8">
        <div className="table-shell m-0 border-0 rounded-none bg-transparent">
          <div className="table-head !bg-transparent !border-zinc-800" style={{ gridTemplateColumns: '2fr 1.5fr 1fr 1fr 80px' }}>
            <span>Endpoint URL</span>
            <span>Subscribed Events</span>
            <span>Status</span>
            <span>Last Triggered</span>
            <span />
          </div>
          
          {webhooks.map(hook => (
            <div key={hook.id} className="file-row !border-zinc-800 hover:bg-zinc-800/30" style={{ gridTemplateColumns: '2fr 1.5fr 1fr 1fr 80px' }}>
              <div className="flex items-center gap-3 pr-4">
                <div className={`w-8 h-8 rounded-md flex items-center justify-center shrink-0 ${hook.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'}`}>
                  <Webhook size={14} />
                </div>
                <span className="text-[13px] font-mono text-zinc-300 truncate">{hook.url}</span>
              </div>
              
              <div className="flex flex-wrap gap-2 pr-4">
                {hook.events.map(event => (
                  <span key={event} className="px-2 py-0.5 rounded-md bg-zinc-800 border border-zinc-700 text-[11px] text-zinc-400 font-mono">
                    {event}
                  </span>
                ))}
              </div>
              
              <span>
                {hook.status === 'Active' ? (
                  <span className="flex items-center gap-1.5 text-emerald-400 text-[13px]">
                    <CheckCircle size={14} /> Active
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 text-red-400 text-[13px]">
                    <XCircle size={14} /> Failing
                  </span>
                )}
              </span>
              
              <span className="text-[13px] text-zinc-500">{hook.lastTriggered}</span>
              
              <div className="flex gap-2 justify-end pr-4">
                <button className="p-2 text-zinc-500 hover:text-indigo-400 hover:bg-indigo-500/10 rounded-md transition-colors" title="Settings">
                  <Settings2 size={16} />
                </button>
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
