'use client'

export default function NotificationsSettingsPage() {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[18px] font-semibold text-zinc-200">Notifications</h2>
        <button className="primary-button h-[32px]">Save Changes</button>
      </div>

      <div className="settings-panel p-6">
        <h2 className="text-[16px] font-semibold text-zinc-200 mb-6">Email Notifications</h2>
        <div className="space-y-4">
          <label className="flex items-center justify-between text-[14px] text-zinc-300 cursor-pointer">
            <div>
              <p className="font-medium">File Shared</p>
              <p className="text-[12px] text-zinc-500 mt-0.5">When someone shares a file with you.</p>
            </div>
            <div className="check-wrap"><input type="checkbox" defaultChecked /></div>
          </label>
          <div className="h-[1px] bg-white/5" />
          <label className="flex items-center justify-between text-[14px] text-zinc-300 cursor-pointer">
            <div>
              <p className="font-medium">Comments & Mentions</p>
              <p className="text-[12px] text-zinc-500 mt-0.5">When someone mentions you in a file.</p>
            </div>
            <div className="check-wrap"><input type="checkbox" defaultChecked /></div>
          </label>
          <div className="h-[1px] bg-white/5" />
          <label className="flex items-center justify-between text-[14px] text-zinc-300 cursor-pointer">
            <div>
              <p className="font-medium">Security Alerts</p>
              <p className="text-[12px] text-zinc-500 mt-0.5">Unusual logins or security events.</p>
            </div>
            <div className="check-wrap"><input type="checkbox" defaultChecked /></div>
          </label>
          <div className="h-[1px] bg-white/5" />
          <label className="flex items-center justify-between text-[14px] text-zinc-300 cursor-pointer">
            <div>
              <p className="font-medium">Product Updates</p>
              <p className="text-[12px] text-zinc-500 mt-0.5">News about product and feature updates.</p>
            </div>
            <div className="check-wrap"><input type="checkbox" /></div>
          </label>
        </div>
      </div>
    </>
  )
}
