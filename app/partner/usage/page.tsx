import { Activity, Download, Calendar } from 'lucide-react'

export default function UsageMetrics() {
  return (
    <div className="page-content !max-w-[1800px]">
      <div className="page-heading flex items-center justify-between">
        <div>
          <p className="eyebrow mb-2">Developer Hub</p>
          <h1>Usage Metrics <span className="heading-dot text-emerald-500">.</span></h1>
          <p className="subtitle">Detailed breakdown of API requests, bandwidth, and storage.</p>
        </div>
        <div className="flex gap-3">
          <button className="secondary-button h-[36px]">
            <Calendar size={15} /> Last 30 Days
          </button>
          <button className="primary-button h-[36px] bg-emerald-600 hover:bg-emerald-500 border-emerald-500">
            <Download size={15} /> Export CSV
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="col-span-2 bg-[#111318] border border-zinc-800 rounded-xl p-6 h-[400px] flex flex-col">
          <h3 className="text-[15px] font-medium text-zinc-200 mb-6">API Requests Overview</h3>
          <div className="flex-1 border border-dashed border-zinc-800 rounded-lg flex items-center justify-center bg-[#0d0f13]">
            <p className="text-[14px] text-zinc-500 flex items-center gap-2">
              <Activity size={18} /> Interactive Chart Placeholder
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-[#111318] border border-zinc-800 rounded-xl p-6">
            <h3 className="text-[15px] font-medium text-zinc-200 mb-4">Request Quota</h3>
            <div className="mb-2 flex justify-between text-[13px]">
              <span className="text-zinc-400">Used: 1.2M</span>
              <span className="text-emerald-400 font-medium">Limit: 5M</span>
            </div>
            <div className="w-full h-2.5 bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 w-[24%]" />
            </div>
            <p className="text-[12px] text-zinc-500 mt-3 text-right">Resets in 12 days</p>
          </div>

          <div className="bg-[#111318] border border-zinc-800 rounded-xl p-6">
            <h3 className="text-[15px] font-medium text-zinc-200 mb-4">Top Endpoints</h3>
            <div className="space-y-4">
              {[
                { path: '/v1/files/upload', count: '840k', percent: '70%' },
                { path: '/v1/workspaces', count: '240k', percent: '20%' },
                { path: '/v1/users', count: '120k', percent: '10%' },
              ].map((ep, i) => (
                <div key={i}>
                  <div className="flex justify-between text-[13px] mb-1">
                    <span className="font-mono text-zinc-300">{ep.path}</span>
                    <span className="text-zinc-500">{ep.count}</span>
                  </div>
                  <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500/50" style={{ width: ep.percent }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
