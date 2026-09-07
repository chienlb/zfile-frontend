import { HardDrive, Download, RotateCcw, Plus, Clock } from 'lucide-react'

const backups = [
  { id: 1, date: '2026-09-07 02:00', type: 'Automated', size: '12.4 GB', status: 'Completed' },
  { id: 2, date: '2026-09-06 02:00', type: 'Automated', size: '12.2 GB', status: 'Completed' },
  { id: 3, date: '2026-09-05 15:30', type: 'Manual', size: '12.1 GB', status: 'Completed' },
  { id: 4, date: '2026-09-05 02:00', type: 'Automated', size: '11.9 GB', status: 'Failed' },
]

export default function BackupsManagement() {
  return (
    <div className="page-content !max-w-[1800px]">
      <div className="page-heading flex items-center justify-between">
        <div>
          <p className="eyebrow mb-2">System & Operations</p>
          <h1>System Backups <span className="heading-dot text-indigo-500">.</span></h1>
          <p className="subtitle">Manage database snapshots and volume backups.</p>
        </div>
        <div className="flex gap-3">
          <button className="primary-button h-[36px]">
            <Plus size={15} /> Create Backup
          </button>
        </div>
      </div>

      <div className="bg-[#111318] border border-zinc-800 rounded-xl overflow-hidden mt-8">
        <div className="p-4 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/30">
          <span className="text-[13px] font-medium text-zinc-300">Next automated backup in <b className="text-indigo-400">8 hours</b></span>
          <button className="secondary-button h-[34px]">
            <Clock size={15} /> Schedule
          </button>
        </div>

        <div className="table-shell m-0 border-0 rounded-none bg-transparent">
          <div className="table-head !bg-transparent !border-zinc-800" style={{ gridTemplateColumns: '1.5fr 1fr 1fr 1fr 120px' }}>
            <span>Date & Time</span>
            <span>Type</span>
            <span>Size</span>
            <span>Status</span>
            <span />
          </div>
          
          {backups.map(item => (
            <div key={item.id} className="file-row !border-zinc-800 hover:bg-zinc-800/30" style={{ gridTemplateColumns: '1.5fr 1fr 1fr 1fr 120px' }}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                  <HardDrive size={14} />
                </div>
                <span className="text-[14px] font-medium text-zinc-200">{item.date}</span>
              </div>
              
              <span className="text-[13px] text-zinc-400">{item.type}</span>
              <span className="text-[13px] text-zinc-400">{item.size}</span>
              
              <span>
                {item.status === 'Completed' ? (
                  <span className="text-emerald-400 text-[13px]">Completed</span>
                ) : (
                  <span className="text-red-400 text-[13px]">Failed</span>
                )}
              </span>
              
              <div className="flex gap-2 justify-end pr-4">
                <button className="p-2 text-zinc-500 hover:text-indigo-400 hover:bg-indigo-500/10 rounded-md transition-colors" title="Download">
                  <Download size={16} />
                </button>
                <button className="p-2 text-zinc-500 hover:text-amber-400 hover:bg-amber-500/10 rounded-md transition-colors" title="Restore">
                  <RotateCcw size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
