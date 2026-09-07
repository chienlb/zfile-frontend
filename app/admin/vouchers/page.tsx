import { Search, Filter, Plus, Ticket, MoreHorizontal, Trash2, Edit } from 'lucide-react'

const vouchers = [
  { id: 1, code: 'SUMMER20', discount: '20%', usage: '1,240 / 5,000', expiry: '2026-09-30', status: 'Active' },
  { id: 2, code: 'WELCOME50', discount: '50%', usage: '8,421 / ∞', expiry: 'Never', status: 'Active' },
  { id: 3, code: 'FLASH10', discount: '10%', usage: '500 / 500', expiry: '2026-08-15', status: 'Expired' },
]

export default function VouchersManagement() {
  return (
    <div className="page-content !max-w-[1800px]">
      <div className="page-heading flex items-center justify-between">
        <div>
          <p className="eyebrow mb-2">Administration</p>
          <h1>Vouchers & Promos <span className="heading-dot text-indigo-500">.</span></h1>
          <p className="subtitle">Manage discount codes and promotional campaigns.</p>
        </div>
        <div className="flex gap-3">
          <button className="primary-button h-[36px]">
            <Plus size={15} /> Create Voucher
          </button>
        </div>
      </div>

      <div className="bg-[#111318] border border-zinc-800 rounded-xl overflow-hidden mt-8">
        <div className="p-4 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/30">
          <div className="auth-input h-[34px] w-[300px] m-0 bg-[#0d0f13] border-zinc-700">
            <Search size={14} className="text-zinc-500" />
            <input type="text" placeholder="Search voucher codes..." className="text-[13px]" />
          </div>
          <button className="secondary-button h-[34px]">
            <Filter size={15} /> Filters
          </button>
        </div>

        <div className="table-shell m-0 border-0 rounded-none bg-transparent">
          <div className="table-head !bg-transparent !border-zinc-800" style={{ gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1fr 80px' }}>
            <span>Code</span>
            <span>Discount</span>
            <span>Usage</span>
            <span>Expiry</span>
            <span>Status</span>
            <span />
          </div>
          
          {vouchers.map(voucher => (
            <div key={voucher.id} className="file-row !border-zinc-800 hover:bg-zinc-800/30" style={{ gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1fr 80px' }}>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
                  <Ticket size={16} />
                </div>
                <span className="font-mono font-bold text-[14px] text-zinc-200">{voucher.code}</span>
              </div>
              
              <span className="text-[14px] font-medium text-emerald-400">{voucher.discount}</span>
              <span className="text-[13px] text-zinc-400">{voucher.usage}</span>
              <span className="text-[13px] text-zinc-400">{voucher.expiry}</span>
              
              <span>
                {voucher.status === 'Active' ? (
                  <span className="flex items-center gap-1.5 text-emerald-400 text-[13px]">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Active
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 text-zinc-500 text-[13px]">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-600" /> Expired
                  </span>
                )}
              </span>
              
              <div className="flex gap-2 justify-end pr-4">
                <button className="p-2 text-zinc-500 hover:text-indigo-400 hover:bg-indigo-500/10 rounded-md transition-colors" title="Edit">
                  <Edit size={16} />
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
