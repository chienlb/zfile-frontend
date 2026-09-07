import { Copy, KeyRound, Activity, TrendingDown, ChevronRight, ServerCrash, Zap, Key } from 'lucide-react'

export default function APIDashboard() {
  return (
    <div className="page-content !max-w-[1800px]">
      <div className="page-heading flex items-center justify-between">
        <div>
          <p className="eyebrow mb-2">Developer Hub</p>
          <h1>API Overview <span className="heading-dot text-emerald-500">.</span></h1>
          <p className="subtitle">Monitor your API usage, performance, and manage keys.</p>
        </div>
      </div>

      <div className="mt-8 bg-gradient-to-r from-[#111318] to-[#0c0e12] border border-emerald-500/20 rounded-xl p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none" />
        
        <h3 className="text-[15px] font-medium text-emerald-100 mb-4">Production API Key</h3>
        <div className="flex items-center gap-3 max-w-2xl">
          <div className="flex-1 auth-input h-[42px] bg-[#0d0f13] border-emerald-500/30 text-emerald-200/80 px-4 rounded-lg flex items-center gap-2">
            <Key size={14} className="text-emerald-500/50" />
            <span className="font-mono">pk_live_8f92************************3a2c</span>
          </div>
          <button className="primary-button h-[42px] bg-emerald-600 hover:bg-emerald-500 border-emerald-500 px-6 shrink-0">
            <Copy size={16} /> Copy Key
          </button>
        </div>
        <p className="text-[13px] text-zinc-500 mt-3">Keep this key secret. Do not expose it in client-side code.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="stat-card border-zinc-800">
          <div className="stat-icon text-emerald-400 bg-emerald-500/10">
            <Activity size={16} />
          </div>
          <p className="stat-meta">Total Requests (24h)</p>
          <div className="flex items-end gap-3 mt-2">
            <p className="stat-value !mt-0">45,280</p>
            <span className="text-[13px] font-medium text-emerald-400 flex items-center mb-1">
              <TrendingDown size={14} className="mr-1" /> -2%
            </span>
          </div>
        </div>
        
        <div className="stat-card border-zinc-800">
          <div className="stat-icon text-blue-400 bg-blue-500/10">
            <Zap size={16} />
          </div>
          <p className="stat-meta">Avg. Latency</p>
          <div className="flex items-end gap-3 mt-2">
            <p className="stat-value !mt-0">42ms</p>
            <span className="text-[13px] font-medium text-zinc-500 flex items-center mb-1">
              Normal
            </span>
          </div>
        </div>

        <div className="stat-card border-zinc-800">
          <div className="stat-icon text-red-400 bg-red-500/10">
            <ServerCrash size={16} />
          </div>
          <p className="stat-meta">Error Rate (5xx)</p>
          <div className="flex items-end gap-3 mt-2">
            <p className="stat-value !mt-0 text-zinc-200">0.01%</p>
            <span className="text-[13px] font-medium text-emerald-400 flex items-center mb-1">
              Excellent
            </span>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-[#111318] border border-zinc-800 rounded-xl overflow-hidden">
        <div className="p-5 border-b border-zinc-800 flex justify-between items-center">
          <h3 className="text-[16px] font-medium text-zinc-200">Recent API Logs</h3>
          <button className="text-[13px] font-medium text-emerald-400 hover:text-emerald-300 flex items-center">
            View All Logs <ChevronRight size={14} className="ml-1" />
          </button>
        </div>
        
        <div className="p-0">
          {[
            { method: 'POST', endpoint: '/v1/files/upload', status: 200, duration: '145ms', date: 'Just now' },
            { method: 'GET', endpoint: '/v1/workspaces', status: 200, duration: '42ms', date: '2 mins ago' },
            { method: 'POST', endpoint: '/v1/files/presigned-url', status: 401, duration: '12ms', date: '15 mins ago' },
            { method: 'DELETE', endpoint: '/v1/files/doc_88x2.pdf', status: 204, duration: '89ms', date: '1 hour ago' },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-4 border-b border-zinc-800/50 last:border-0 hover:bg-zinc-800/20 transition-colors">
              <div className="flex items-center gap-4">
                <div className={`w-14 h-7 rounded-md flex items-center justify-center text-[11px] font-bold tracking-wider ${
                  item.method === 'GET' ? 'bg-blue-500/10 text-blue-400' :
                  item.method === 'POST' ? 'bg-emerald-500/10 text-emerald-400' :
                  item.method === 'DELETE' ? 'bg-red-500/10 text-red-400' :
                  'bg-zinc-500/10 text-zinc-400'
                }`}>
                  {item.method}
                </div>
                <div>
                  <p className="text-[14px] font-mono text-zinc-300">{item.endpoint}</p>
                  <p className="text-[12px] text-zinc-500">{item.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <span className={`text-[13px] font-medium ${item.status >= 400 ? 'text-red-400' : 'text-emerald-400'}`}>
                  {item.status}
                </span>
                <span className="text-[13px] text-zinc-500 font-mono w-16 text-right">
                  {item.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
