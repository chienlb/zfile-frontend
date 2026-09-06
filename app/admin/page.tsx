import { ArrowUpRight, HardDrive, Users, Activity, Database, Check } from 'lucide-react'

function StatCard({ label, value, meta, icon: Icon, tone }: { label: string; value: string; meta: string; icon: typeof Users; tone: string }) {
  return (
    <div className="stat-card bg-[#111318] border border-zinc-800">
      <div className="flex items-start justify-between">
        <div>
          <p className="eyebrow text-zinc-400">{label}</p>
          <p className="stat-value text-zinc-100">{value}</p>
        </div>
        <div className={`stat-icon ${tone}`}>
          <Icon size={17} />
        </div>
      </div>
      <p className="stat-meta">
        <span className="trend-up">{meta.split(' ')[0]}</span> {meta.split(' ').slice(1).join(' ')}
      </p>
    </div>
  )
}

export default function AdminDashboard() {
  return (
    <div className="page-content !max-w-[1800px]">
      <div className="page-heading">
        <div>
          <p className="eyebrow mb-2">System Overview</p>
          <h1>Dashboard <span className="heading-dot">.</span></h1>
          <p className="subtitle">Real-time metrics and system health.</p>
        </div>
        <button className="primary-button bg-indigo-600 hover:bg-indigo-500 shadow-indigo-500/20 shadow-lg">
          <Activity size={16} /> Generate Report
        </button>
      </div>

      <div className="stats-grid">
        <StatCard label="Total Users" value="12,482" meta="+124 this week" icon={Users} tone="stat-blue" />
        <StatCard label="Active Workspaces" value="3,842" meta="+42 this week" icon={Database} tone="stat-purple" />
        <StatCard label="Storage Processed" value="482 TB" meta="+12 TB this month" icon={HardDrive} tone="stat-emerald" />
        <StatCard label="System Health" value="100%" meta="All services operational" icon={Activity} tone="stat-amber" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <section className="bg-[#111318] border border-zinc-800 rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-[18px] font-bold text-zinc-100">Recent Signups</h2>
              <p className="text-[14px] text-zinc-500">Users who joined recently.</p>
            </div>
            <button className="text-button text-indigo-400">View all <ArrowUpRight size={14} /></button>
          </div>
          <div className="space-y-4">
            {[
              { name: 'Alice Smith', email: 'alice@example.com', plan: 'Pro', time: '2m ago' },
              { name: 'Bob Johnson', email: 'bob@example.com', plan: 'Free', time: '14m ago' },
              { name: 'Charlie Davis', email: 'charlie@example.com', plan: 'Pro', time: '1h ago' }
            ].map(user => (
              <div key={user.email} className="flex items-center justify-between p-3 rounded-lg hover:bg-zinc-800/50 transition-colors cursor-pointer border border-transparent hover:border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-zinc-400 text-[13px]">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-[14px] font-medium text-zinc-200">{user.name}</p>
                    <p className="text-[13px] text-zinc-500">{user.email}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[13px] font-medium text-zinc-300">{user.plan}</p>
                  <p className="text-[12px] text-zinc-600">{user.time}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#111318] border border-zinc-800 rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-[18px] font-bold text-zinc-100">System Activity</h2>
              <p className="text-[14px] text-zinc-500">Latest events across ZFile.</p>
            </div>
          </div>
          <div className="space-y-4">
            {[
              { event: 'Storage limit updated for ACME Corp', time: '10m ago' },
              { event: 'Automated backup completed', time: '45m ago' },
              { event: 'New server region online (EU-Central)', time: '2h ago' },
              { event: 'Maintenance window scheduled', time: '5h ago' }
            ].map((log, i) => (
              <div key={i} className="flex items-start gap-4 p-3">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0" />
                <div>
                  <p className="text-[14px] text-zinc-300">{log.event}</p>
                  <p className="text-[13px] text-zinc-600">{log.time}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
