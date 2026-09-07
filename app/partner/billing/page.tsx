import { CreditCard, Zap, Check, ArrowRight } from 'lucide-react'

export default function BillingPlans() {
  return (
    <div className="page-content !max-w-[1800px]">
      <div className="page-heading flex items-center justify-between">
        <div>
          <p className="eyebrow mb-2">Developer Hub</p>
          <h1>Billing & Plans <span className="heading-dot text-emerald-500">.</span></h1>
          <p className="subtitle">Manage your API subscription and billing details.</p>
        </div>
      </div>

      <div className="mt-8 bg-gradient-to-br from-[#111318] to-[#0c0e12] border border-emerald-500/30 rounded-xl p-8 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-emerald-900/10">
        <div className="absolute right-0 top-0 w-96 h-96 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-[22px] font-semibold text-emerald-50">Enterprise API Plan</h2>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[11px] font-bold tracking-wider uppercase border border-emerald-500/30">Active</span>
          </div>
          <p className="text-[14px] text-emerald-100/60 max-w-xl">
            You are currently on the Enterprise tier with up to 5,000,000 requests per month, advanced rate limits, and 24/7 dedicated support.
          </p>
        </div>
        
        <div className="relative z-10 flex gap-3 shrink-0">
          <button className="secondary-button h-[40px] px-5 border-zinc-700 bg-zinc-900/50 hover:bg-zinc-800">
            Manage Billing
          </button>
          <button className="primary-button h-[40px] px-5 bg-emerald-600 hover:bg-emerald-500 border-emerald-500">
            Change Plan
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-[#111318] border border-zinc-800 rounded-xl p-6">
          <h3 className="text-[16px] font-medium text-zinc-200 mb-6 flex items-center gap-2">
            <Zap size={18} className="text-emerald-400" /> Current Quotas
          </h3>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-[13px] mb-2">
                <span className="text-zinc-400">API Requests</span>
                <span className="text-emerald-400">1.2M / 5M</span>
              </div>
              <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 w-[24%]" />
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-[13px] mb-2">
                <span className="text-zinc-400">Storage via API</span>
                <span className="text-emerald-400">458 GB / 1 TB</span>
              </div>
              <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 w-[45%]" />
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-[13px] mb-2">
                <span className="text-zinc-400">Webhooks</span>
                <span className="text-emerald-400">2 / Unlimited</span>
              </div>
              <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 w-[10%]" />
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 bg-[#111318] border border-zinc-800 rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-[16px] font-medium text-zinc-200 flex items-center gap-2">
              <CreditCard size={18} className="text-emerald-400" /> Payment Methods
            </h3>
            <button className="text-[13px] font-medium text-emerald-400 hover:text-emerald-300">
              Add New Card
            </button>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-[#0d0f13] border border-emerald-500/30 rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-12 h-8 bg-zinc-800 rounded flex items-center justify-center text-[10px] font-bold tracking-wider text-zinc-400">VISA</div>
              <div>
                <p className="text-[14px] font-medium text-zinc-200">Visa ending in 4242</p>
                <p className="text-[12px] text-zinc-500">Expires 12/28 • Default</p>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[12px] font-medium border border-emerald-500/20">
              Active
            </span>
          </div>

          <h3 className="text-[16px] font-medium text-zinc-200 mb-4 mt-8">Recent Invoices</h3>
          <div className="space-y-0">
            {[
              { date: 'Sep 1, 2026', amount: '$499.00', status: 'Paid', id: 'INV-2026-09' },
              { date: 'Aug 1, 2026', amount: '$499.00', status: 'Paid', id: 'INV-2026-08' },
              { date: 'Jul 1, 2026', amount: '$499.00', status: 'Paid', id: 'INV-2026-07' },
            ].map((inv, i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b border-zinc-800/50 last:border-0 last:pb-0">
                <div className="flex items-center gap-6">
                  <span className="text-[13px] font-mono text-zinc-400 w-24">{inv.id}</span>
                  <span className="text-[14px] text-zinc-300">{inv.date}</span>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-[14px] font-medium text-zinc-200">{inv.amount}</span>
                  <span className="text-[13px] text-emerald-400 flex items-center gap-1 w-16">
                    <Check size={14} /> {inv.status}
                  </span>
                  <button className="text-[13px] text-emerald-400 hover:text-emerald-300 flex items-center">
                    PDF <ArrowRight size={14} className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
