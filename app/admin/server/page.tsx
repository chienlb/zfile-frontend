import { Server, Activity, Database, Cpu, HardDrive } from 'lucide-react'

export default function ServerStatus() {
  return (
    <div className="page-content !max-w-[1800px]">
      <div className="page-heading flex items-center justify-between">
        <div>
          <p className="eyebrow mb-2">System & Operations</p>
          <h1>Server Status <span className="heading-dot text-indigo-500">.</span></h1>
          <p className="subtitle">Real-time metrics and health status of infrastructure components.</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[13px] font-medium">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          System Healthy
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
        {[
          { label: 'CPU Usage', value: '24%', icon: Cpu, color: 'blue' },
          { label: 'Memory', value: '16.4 GB', icon: Activity, color: 'purple' },
          { label: 'Storage', value: '458 GB', icon: HardDrive, color: 'emerald' },
          { label: 'API Latency', value: '42ms', icon: Server, color: 'amber' },
        ].map((stat, i) => (
          <div key={i} className="stat-card">
            <div className={`stat-icon stat-${stat.color}`}>
              <stat.icon size={16} />
            </div>
            <p className="stat-meta">{stat.label}</p>
            <p className="stat-value">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-[#111318] border border-zinc-800 rounded-xl overflow-hidden p-6">
        <h3 className="text-[15px] font-medium text-zinc-200 mb-6">Service Health</h3>
        
        <div className="space-y-4">
          {[
            { name: 'Main API Gateway', status: 'Operational', uptime: '99.99%' },
            { name: 'Database Cluster', status: 'Operational', uptime: '100%' },
            { name: 'File Storage Service (S3)', status: 'Operational', uptime: '99.95%' },
            { name: 'Background Workers', status: 'Operational', uptime: '99.99%' },
            { name: 'AI Processing Nodes', status: 'Degraded', uptime: '98.50%' },
          ].map((service, i) => (
            <div key={i} className="flex items-center justify-between pb-4 border-b border-zinc-800/50 last:border-0 last:pb-0">
              <div className="flex items-center gap-3">
                <Database size={16} className="text-zinc-500" />
                <span className="text-[14px] text-zinc-300">{service.name}</span>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-[13px] text-zinc-500 w-16 text-right">{service.uptime}</span>
                <span className={`text-[13px] font-medium w-24 flex items-center justify-end gap-1.5 ${
                  service.status === 'Operational' ? 'text-emerald-400' : 'text-amber-400'
                }`}>
                  <div className={`w-1.5 h-1.5 rounded-full ${service.status === 'Operational' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                  {service.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
