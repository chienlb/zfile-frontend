'use client'

import { Settings2, Bell, CreditCard, Palette, MonitorSmartphone, Code2 } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const tabs = [
    { href: '/settings', label: 'General', icon: Settings2 },
    { href: '/settings/notifications', label: 'Notifications', icon: Bell },
    { href: '/settings/appearance', label: 'Appearance', icon: Palette },
    { href: '/settings/billing', label: 'Billing', icon: CreditCard },
    { href: '/settings/devices', label: 'Devices', icon: MonitorSmartphone },
    { href: '/settings/api-keys', label: 'API Keys', icon: Code2 },
  ]

  return (
    <div className="page-content">
      <div className="page-heading">
        <div>
          <h1>Workspace Settings <span className="heading-dot">.</span></h1>
          <p className="subtitle">Manage your workspace preferences, appearance, and billing details.</p>
        </div>
      </div>

      <div className="grid grid-cols-[240px_1fr] gap-8 mt-8">
        <div className="space-y-1">
          {tabs.map((tab) => {
            const Icon = tab.icon
            const isActive = pathname === tab.href
            return (
              <Link 
                key={tab.href}
                href={tab.href}
                className={`w-full text-left px-4 py-2 text-[14px] font-medium rounded-lg flex items-center gap-3 transition ${
                  isActive 
                    ? 'text-white bg-white/10' 
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon size={16} /> {tab.label}
              </Link>
            )
          })}
        </div>

        <div className="space-y-8">
          {children}
        </div>
      </div>
    </div>
  )
}
