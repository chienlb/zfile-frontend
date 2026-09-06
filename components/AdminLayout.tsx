'use client'

import { useState } from 'react'
import {
  Activity,
  ArrowLeft,
  Bell,
  ChevronDown,
  LayoutDashboard,
  Menu,
  Search,
  Settings,
  ShieldAlert,
  Users,
  X,
  Database,
  Globe
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function AdminLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
        <ShieldAlert size={16} className="text-white" />
      </div>
      <span className="text-[19px] font-semibold tracking-[-0.04em] text-white">ZFile Admin</span>
    </div>
  )
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const navItems = [
    { href: '/admin', label: 'Overview', icon: LayoutDashboard },
    { href: '/admin/users', label: 'Users Management', icon: Users },
    { href: '/admin/workspaces', label: 'Workspaces', icon: Database },
    { href: '/admin/settings', label: 'System Settings', icon: Settings },
  ]

  return (
    <div className="app-layout">
      {mobileOpen && (
        <div className="mobile-backdrop" onClick={() => setMobileOpen(false)} />
      )}

      <aside className={`sidebar ${mobileOpen ? 'sidebar-open' : ''} border-r border-indigo-500/10 bg-[#07090c]`}>
        <div className="sidebar-head">
          <AdminLogo />
          <button className="icon-button mobile-close" onClick={() => setMobileOpen(false)}>
            <X size={18} />
          </button>
        </div>
        
        <div className="workspace-switcher border border-indigo-500/20 bg-indigo-500/5 hover:bg-indigo-500/10">
          <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-[13px]">
            SA
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[14px] font-medium text-indigo-100">Super Admin</p>
            <p className="truncate text-[13px] text-indigo-400/60">System Control</p>
          </div>
          <ChevronDown size={15} className="text-indigo-500" />
        </div>

        <nav className="sidebar-nav">
          <div className="nav-group">
            <p className="nav-label text-indigo-200/50">Administration</p>
            {navItems.map((item) => {
              const Icon = item.icon
              const active = pathname === item.href
              return (
                <Link key={item.href} href={item.href}>
                  <button className={`nav-item w-full ${active ? 'bg-indigo-500/10 text-indigo-300' : 'hover:bg-zinc-800/50'}`}>
                    <Icon size={17} className={active ? 'text-indigo-400' : ''} />
                    <span>{item.label}</span>
                  </button>
                </Link>
              )
            })}
          </div>

          <div className="nav-group mt-6">
            <p className="nav-label text-indigo-200/50">External</p>
            <Link href="/">
              <button className="nav-item w-full hover:bg-zinc-800/50">
                <ArrowLeft size={17} />
                <span>Back to App</span>
              </button>
            </Link>
            <button className="nav-item w-full hover:bg-zinc-800/50">
              <Globe size={17} />
              <span>View Live Site</span>
            </button>
          </div>
        </nav>

        <div className="sidebar-bottom">
          <div className="p-4 rounded-xl border border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 to-purple-500/5 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <Activity size={14} className="text-emerald-400" />
              <span className="text-[13px] font-medium text-zinc-200">System Healthy</span>
            </div>
            <p className="text-[12px] text-zinc-500">All services are running normally. API latency is 42ms.</p>
          </div>
        </div>
      </aside>

      <div className="main-area">
        <header className="topbar border-b border-zinc-800/50 bg-[#0a0c10]/80 backdrop-blur-xl">
          <button className="icon-button menu-button" onClick={() => setMobileOpen(true)}>
            <Menu size={20} />
          </button>
          <div className="breadcrumbs text-indigo-200/50">
            <span>Admin Control</span>
          </div>
          <div className="topbar-actions">
            <div className="search-box bg-[#0d0f14] border border-zinc-800">
              <Search size={16} className="text-zinc-500" />
              <input placeholder="Search users, IDs..." />
              <kbd className="bg-zinc-800 text-zinc-400 border-zinc-700">⌘ K</kbd>
            </div>
            <button className="icon-button text-indigo-200 hover:bg-indigo-500/10">
              <Bell size={18} />
              <span className="w-2 h-2 rounded-full bg-indigo-500 absolute top-2 right-2 border-2 border-[#0a0c10]" />
            </button>
          </div>
        </header>
        {children}
      </div>
    </div>
  )
}
