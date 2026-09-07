import { Wrench, AlertTriangle, Play } from 'lucide-react'

export default function MaintenanceMode() {
  return (
    <div className="page-content !max-w-[1800px]">
      <div className="page-heading flex items-center justify-between">
        <div>
          <p className="eyebrow mb-2">System & Operations</p>
          <h1>Maintenance Mode <span className="heading-dot text-indigo-500">.</span></h1>
          <p className="subtitle">Temporarily disable access to the application for upgrades or repairs.</p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-[#111318] border border-zinc-800 rounded-xl p-6">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
                <AlertTriangle size={24} />
              </div>
              <div>
                <h2 className="text-[18px] font-semibold text-zinc-100">System Maintenance</h2>
                <p className="text-[14px] text-zinc-400 mt-1">
                  When enabled, all non-admin users will see a maintenance page and API requests will return 503 Service Unavailable. Active sessions will be terminated.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-[13px] font-medium text-zinc-300 mb-2">Status</label>
                <div className="flex items-center gap-3">
                  <button className="w-12 h-6 rounded-full relative bg-zinc-700 transition-colors">
                    <div className="absolute top-1 w-4 h-4 rounded-full bg-white transition-all left-1" />
                  </button>
                  <span className="text-[14px] text-zinc-400">Currently Disabled</span>
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-medium text-zinc-300 mb-2">Public Message</label>
                <textarea 
                  className="w-full min-h-[100px] bg-[#0d0f13] border border-zinc-700 rounded-lg p-3 text-[14px] text-zinc-200 outline-none focus:border-indigo-500 transition-colors resize-none"
                  placeholder="We are currently undergoing scheduled maintenance. We will be back shortly."
                  defaultValue="We are currently undergoing scheduled maintenance. We will be back shortly."
                />
                <p className="text-[12px] text-zinc-500 mt-1">This message will be displayed on the maintenance screen.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] font-medium text-zinc-300 mb-2">Start Time</label>
                  <input 
                    type="datetime-local" 
                    className="auth-input w-full h-[36px] bg-[#0d0f13] border-zinc-700 text-[14px] text-zinc-200 [color-scheme:dark]"
                    defaultValue="2026-09-08T02:00"
                  />
                  <p className="text-[12px] text-zinc-500 mt-1">Leave empty to start immediately.</p>
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-zinc-300 mb-2">End Time</label>
                  <input 
                    type="datetime-local" 
                    className="auth-input w-full h-[36px] bg-[#0d0f13] border-zinc-700 text-[14px] text-zinc-200 [color-scheme:dark]"
                    defaultValue="2026-09-08T04:00"
                  />
                  <p className="text-[12px] text-zinc-500 mt-1">Maintenance ends automatically.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-800 flex justify-end">
              <button className="primary-button h-[36px] bg-amber-600 hover:bg-amber-500 border-amber-500">
                <Play size={15} /> Enable Maintenance Mode
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-[#111318] border border-zinc-800 rounded-xl p-5">
            <h3 className="text-[15px] font-medium text-zinc-200 mb-4">Active Sessions</h3>
            <div className="flex items-center justify-between p-4 bg-[#15181e] border border-zinc-800/50 rounded-lg">
              <div className="text-center w-full">
                <p className="text-[28px] font-semibold text-emerald-400">1,428</p>
                <p className="text-[13px] text-zinc-500 mt-1">Users online right now</p>
              </div>
            </div>
            <p className="text-[12px] text-zinc-500 mt-4 leading-relaxed">
              Enabling maintenance mode will forcefully disconnect all of these users. It is recommended to schedule maintenance during off-peak hours.
            </p>
          </div>

          <div className="bg-[#111318] border border-zinc-800 rounded-xl p-5">
            <h3 className="text-[15px] font-medium text-zinc-200 mb-4">Maintenance History</h3>
            <div className="space-y-4">
              {[
                { date: 'Aug 12, 2026', duration: '45 mins', reason: 'Database Upgrade' },
                { date: 'Jul 04, 2026', duration: '1.5 hrs', reason: 'Server Migration' },
                { date: 'Jun 22, 2026', duration: '20 mins', reason: 'Hotfix Deployment' },
              ].map((log, i) => (
                <div key={i} className="flex flex-col gap-1 pb-3 border-b border-zinc-800/50 last:border-0 last:pb-0">
                  <span className="text-[13px] font-medium text-zinc-300">{log.reason}</span>
                  <div className="flex justify-between text-[12px] text-zinc-500">
                    <span>{log.date}</span>
                    <span>{log.duration}</span>
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
