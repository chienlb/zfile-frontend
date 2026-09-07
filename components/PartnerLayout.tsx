'use client'

import { useState } from 'react'
import {
  ArrowLeft,
  Bell,
  ChevronDown,
  LayoutDashboard,
  Menu,
  Search,
  Settings,
  ShieldCheck,
  X,
  CreditCard,
  KeyRound,
  Activity,
  Webhook,
  Code2
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function PartnerLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
        <Code2 size={16} className="text-white" />
      </div>
      <span className="text-[19px] font-semibold tracking-[-0.04em] text-white">Developer API</span>
    </div>
  )
}

export default function PartnerLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const partnerNavItems = [
    { href: '/partner', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/partner/keys', label: 'API Keys', icon: KeyRound },
    { href: '/partner/usage', label: 'Usage Metrics', icon: Activity },
    { href: '/partner/webhooks', label: 'Webhooks', icon: Webhook },
    { href: '/partner/billing', label: 'Billing & Plans', icon: CreditCard },
  ]

  return (
    <div className="app-shell">
      {mobileOpen && (
        <div className="mobile-backdrop fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setMobileOpen(false)} />
      )}

      <aside className={`sidebar ${mobileOpen ? 'sidebar-open' : ''} border-r border-emerald-500/10 bg-[#07090c]`}>
        <div className="sidebar-head">
          <PartnerLogo />
          <button className="icon-button mobile-close" onClick={() => setMobileOpen(false)}>
            <X size={18} />
          </button>
        </div>
        
        <div className="workspace-switcher border border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500/10">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[13px]">
            AC
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[14px] font-medium text-emerald-100">Acme Corp</p>
            <p className="truncate text-[13px] text-emerald-400/60">Plan: Enterprise API</p>
          </div>
          <ChevronDown size={15} className="text-emerald-500" />
        </div>

        <nav className="sidebar-nav">
          <div className="nav-group">
            <p className="nav-label text-emerald-200/50">Developer Portal</p>
            {partnerNavItems.map((item) => {
              const Icon = item.icon
              const active = pathname === item.href
              return (
                <Link key={item.href} href={item.href}>
                  <button className={`nav-item w-full ${active ? 'bg-emerald-500/10 text-emerald-300' : 'hover:bg-zinc-800/50'}`}>
                    <Icon size={17} className={active ? 'text-emerald-400' : ''} />
                    <span>{item.label}</span>
                  </button>
                </Link>
              )
            })}
          </div>

          <div className="nav-group mt-6">
            <p className="nav-label text-emerald-200/50">External</p>
            <Link href="/">
              <button className="nav-item w-full hover:bg-zinc-800/50">
                <ArrowLeft size={17} />
                <span>Back to App</span>
              </button>
            </Link>
          </div>
        </nav>

        <div className="sidebar-bottom">
          <div className="p-4 rounded-xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-teal-500/5 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck size={14} className="text-emerald-400" />
              <span className="text-[13px] font-medium text-zinc-200">System Healthy</span>
            </div>
            <p className="text-[12px] text-zinc-500">All API endpoints are operating normally.</p>
          </div>
        </div>
      </aside>

      <div className="main-area flex flex-col h-screen overflow-hidden">
        <header className="topbar border-b border-zinc-800/50 bg-[#0a0c10]/80 backdrop-blur-xl shrink-0">
          <button className="icon-button menu-button" onClick={() => setMobileOpen(true)}>
            <Menu size={20} />
          </button>
          <div className="breadcrumbs text-emerald-200/50">
            <span>Developer Hub</span>
          </div>
          <div className="topbar-actions">
            <div className="flex items-center gap-4 mr-4">
              <div className="text-right">
                <p className="text-[11px] text-zinc-500 uppercase font-semibold tracking-wider">Monthly Requests</p>
                <p className="text-[14px] font-bold text-emerald-400">1.2M <span className="text-zinc-500 font-normal">/ 5M</span></p>
              </div>
              <button className="h-[32px] px-4 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[13px] font-medium hover:bg-emerald-500/20 transition-colors">
                Upgrade
              </button>
            </div>
            <button className="icon-button text-emerald-200 hover:bg-emerald-500/10">
              <Bell size={18} />
              <span className="w-2 h-2 rounded-full bg-emerald-500 absolute top-2 right-2 border-2 border-[#0a0c10]" />
            </button>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
