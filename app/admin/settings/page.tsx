import { Save, Server, ShieldCheck, Mail, Database } from 'lucide-react'

export default function SystemSettings() {
  return (
    <div className="page-content !max-w-[1800px]">
      <div className="page-heading flex items-center justify-between">
        <div>
          <p className="eyebrow mb-2">Administration</p>
          <h1>System Settings <span className="heading-dot text-indigo-500">.</span></h1>
          <p className="subtitle">Configure global ZFile platform settings.</p>
        </div>
        <button className="primary-button bg-indigo-600 hover:bg-indigo-500 shadow-indigo-500/20 shadow-lg h-[36px]">
          <Save size={15} /> Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <section className="space-y-6">
          <div className="bg-[#111318] border border-zinc-800 rounded-xl p-6">
            <h2 className="text-[16px] font-bold text-zinc-100 flex items-center gap-2 mb-6">
              <Server size={18} className="text-indigo-400" /> Platform Configuration
            </h2>
            
            <div className="space-y-5">
              <div>
                <label className="auth-label mb-2">Platform Name</label>
                <div className="auth-input h-[40px] bg-[#0d0f13] border-zinc-700">
                  <input type="text" defaultValue="ZFile Platform" />
                </div>
              </div>
              
              <div>
                <label className="auth-label mb-2">Support Email</label>
                <div className="auth-input h-[40px] bg-[#0d0f13] border-zinc-700">
                  <input type="email" defaultValue="support@zfile.app" />
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border border-zinc-800 rounded-lg bg-zinc-900/30">
                <div>
                  <p className="text-[14px] font-medium text-zinc-200">Maintenance Mode</p>
                  <p className="text-[13px] text-zinc-500">Disable access for non-admin users.</p>
                </div>
                <button className="status-toggle"><span /> Disabled</button>
              </div>
            </div>
          </div>

          <div className="bg-[#111318] border border-zinc-800 rounded-xl p-6">
            <h2 className="text-[16px] font-bold text-zinc-100 flex items-center gap-2 mb-6">
              <Database size={18} className="text-blue-400" /> Storage Limits
            </h2>
            
            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="auth-label mb-2">Free Tier Default (GB)</label>
                  <div className="auth-input h-[40px] bg-[#0d0f13] border-zinc-700">
                    <input type="number" defaultValue="10" />
                  </div>
                </div>
                <div>
                  <label className="auth-label mb-2">Pro Tier Default (GB)</label>
                  <div className="auth-input h-[40px] bg-[#0d0f13] border-zinc-700">
                    <input type="number" defaultValue="1000" />
                  </div>
                </div>
              </div>
              
              <div>
                <label className="auth-label mb-2">Maximum File Size Upload (MB)</label>
                <div className="auth-input h-[40px] bg-[#0d0f13] border-zinc-700">
                  <input type="number" defaultValue="5000" />
                </div>
                <p className="text-[12px] text-zinc-500 mt-2">Applies globally across all tiers unless overridden.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="bg-[#111318] border border-zinc-800 rounded-xl p-6">
            <h2 className="text-[16px] font-bold text-zinc-100 flex items-center gap-2 mb-6">
              <ShieldCheck size={18} className="text-emerald-400" /> Security & Access
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-zinc-800 rounded-lg bg-zinc-900/30">
                <div>
                  <p className="text-[14px] font-medium text-zinc-200">Require 2FA</p>
                  <p className="text-[13px] text-zinc-500">Force 2FA for all new admin accounts.</p>
                </div>
                <button className="status-toggle enabled"><span /> Enabled</button>
              </div>

              <div className="flex items-center justify-between p-4 border border-zinc-800 rounded-lg bg-zinc-900/30">
                <div>
                  <p className="text-[14px] font-medium text-zinc-200">Public Registration</p>
                  <p className="text-[13px] text-zinc-500">Allow users to sign up independently.</p>
                </div>
                <button className="status-toggle enabled"><span /> Enabled</button>
              </div>
            </div>
          </div>

          <div className="bg-[#111318] border border-zinc-800 rounded-xl p-6">
            <h2 className="text-[16px] font-bold text-zinc-100 flex items-center gap-2 mb-6">
              <Mail size={18} className="text-amber-400" /> SMTP Configuration
            </h2>
            
            <div className="space-y-5">
              <div>
                <label className="auth-label mb-2">SMTP Host</label>
                <div className="auth-input h-[40px] bg-[#0d0f13] border-zinc-700">
                  <input type="text" defaultValue="smtp.sendgrid.net" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="auth-label mb-2">SMTP Port</label>
                  <div className="auth-input h-[40px] bg-[#0d0f13] border-zinc-700">
                    <input type="text" defaultValue="587" />
                  </div>
                </div>
                <div>
                  <label className="auth-label mb-2">SMTP User</label>
                  <div className="auth-input h-[40px] bg-[#0d0f13] border-zinc-700">
                    <input type="text" defaultValue="apikey" />
                  </div>
                </div>
              </div>
              
              <div>
                <label className="auth-label mb-2">SMTP Password</label>
                <div className="auth-input h-[40px] bg-[#0d0f13] border-zinc-700">
                  <input type="password" defaultValue="****************" />
                </div>
              </div>
              
              <button className="secondary-button w-full h-[36px] justify-center">Test Connection</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
