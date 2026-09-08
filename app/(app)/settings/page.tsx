'use client'

export default function GeneralSettingsPage() {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[18px] font-semibold text-zinc-200">General Settings</h2>
        <button className="primary-button h-[32px]">Save Changes</button>
      </div>
      
      <div className="settings-panel p-6">
        <h2 className="text-[16px] font-semibold text-zinc-200 mb-6">Workspace Details</h2>
        <div className="space-y-5">
          <div>
            <label className="block text-[13px] font-medium text-zinc-400 mb-2">Workspace Name</label>
            <input 
              type="text" 
              defaultValue="Acme Corporation"
              className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-white text-[14px] focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-[13px] font-medium text-zinc-400 mb-2">Workspace URL</label>
            <div className="flex items-center">
              <span className="bg-black/60 border border-white/10 border-r-0 rounded-l-lg px-3 py-2 text-[14px] text-zinc-500">zfile.app/</span>
              <input 
                type="text" 
                defaultValue="acme-corp"
                className="flex-1 bg-black/40 border border-white/10 rounded-r-lg px-3 py-2 text-white text-[14px] focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-[13px] font-medium text-zinc-400 mb-2">Support Email</label>
            <input 
              type="email" 
              defaultValue="support@acme.co"
              className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-white text-[14px] focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      <div className="settings-panel p-6 border-red-500/20 bg-red-500/5 mt-8">
        <h2 className="text-[16px] font-semibold text-red-400 mb-2">Danger Zone</h2>
        <p className="text-[13px] text-zinc-400 mb-6">Permanently delete this workspace and all of its data. This action cannot be undone.</p>
        <button className="secondary-button !border-red-500/30 !text-red-400 hover:!bg-red-500/10">Delete Workspace</button>
      </div>
    </>
  )
}
