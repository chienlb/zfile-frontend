'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Bell,
  ChevronDown,
  ChevronRight,
  History,
  LayoutDashboard,
  Link2,
  Menu,
  MoreHorizontal,
  Plus,
  RefreshCw,
  Search,
  Settings2,
  ShieldCheck,
  Sparkles,
  Trash2,
  UserRound,
  Users,
  WandSparkles,
  X,
  Zap,
  ArrowUpRight
} from 'lucide-react'

const navGroups = [
  { 
    label: 'Workspace', 
    items: [
      { href: '/', label: 'Dashboard', icon: LayoutDashboard }, 
      { href: '/tools', label: 'Studio Tools', icon: RefreshCw }, 
      { href: '/ai', label: 'ZFile AI', icon: Sparkles }
    ] 
  },
  { 
    label: 'Manage', 
    items: [
      { href: '/security', label: 'Security', icon: ShieldCheck }, 
      { href: '/audit', label: 'Audit Logs', icon: History }
    ] 
  },
]

const productNav = [
  { href: '/workspace/new', label: 'New Workspace', icon: Plus },
  { href: '/team', label: 'Team Members', icon: Users },
  { href: '/settings', label: 'Settings', icon: Settings2 },
  { href: '/pricing', label: 'Upgrade plan', icon: Zap },
  { href: '/login', label: 'Sign in', icon: UserRound },
]

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="logo-mark"><span /></div>
      <span className="text-[19px] font-semibold tracking-[-0.04em] text-white">ZFile</span>
    </div>
  )
}

function Sidebar({ mobileOpen, setMobileOpen, pathname }: { mobileOpen: boolean; setMobileOpen: (open: boolean) => void; pathname: string }) {
  return (
    <aside className={`sidebar ${mobileOpen ? 'sidebar-open' : ''}`}>
      <div className="sidebar-head">
        <Logo />
        <button className="icon-button mobile-close" onClick={() => setMobileOpen(false)} aria-label="Close menu">
          <X size={18} />
        </button>
      </div>
      <div className="workspace-switcher">
        <div className="workspace-avatar">A</div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[14px] font-medium text-white">Acme Workspace</p>
          <p className="truncate text-[13px] text-zinc-500">Personal plan</p>
        </div>
        <ChevronDown size={15} className="text-zinc-500" />
      </div>
      <nav className="sidebar-nav">
        {navGroups.map((group) => (
          <div key={group.label} className="nav-group">
            <p className="nav-label">{group.label}</p>
            {group.items.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link 
                  key={item.href} 
                  href={item.href}
                  className={`nav-item ${isActive ? 'nav-active' : ''}`} 
                  onClick={() => setMobileOpen(false)}
                >
                  <Icon size={17} />
                  <span>{item.label}</span>
                  {item.href === '/security' && <span className="nav-dot" />}
                </Link>
              )
            })}
          </div>
        ))}
        <div className="nav-group">
          <p className="nav-label">Quick access</p>
          <Link href="/share" className={`nav-item ${pathname === '/share' ? 'nav-active' : ''}`} onClick={() => setMobileOpen(false)}>
            <Link2 size={17} /><span>Shared with me</span>
          </Link>
          <Link href="/trash" className={`nav-item ${pathname === '/trash' ? 'nav-active' : ''}`} onClick={() => setMobileOpen(false)}>
            <Trash2 size={17} /><span>Trash</span>
          </Link>
        </div>
        <div className="nav-group">
          <p className="nav-label">More</p>
          {productNav.map(({ href, label, icon: Icon }) => (
            <Link key={href} href={href} className={`nav-item ${pathname === href ? 'nav-active' : ''}`} onClick={() => setMobileOpen(false)}>
              <Icon size={17} />
              <span>{label}</span>
              {href === '/pricing' && <span className="nav-new">PRO</span>}
            </Link>
          ))}
        </div>
      </nav>
      <div className="sidebar-bottom">
        <div className="storage-card">
          <div className="flex items-center justify-between">
            <span className="text-[13px] text-zinc-400">Storage used</span>
            <span className="text-[13px] font-medium text-zinc-300">68%</span>
          </div>
          <div className="storage-track"><span /></div>
          <p className="mt-2 text-[13px] text-zinc-500">
            <b className="font-medium text-zinc-300">6.8 GB</b> of 10 GB used
          </p>
          <Link href="/pricing" className="upgrade-button text-blue-400 hover:text-blue-300 mt-2 flex w-fit">
            Upgrade plan <ArrowUpRight size={13} className="ml-1" />
          </Link>
        </div>
        <button className="user-row">
          <div className="user-avatar">JD</div>
          <div className="min-w-0 flex-1 text-left">
            <p className="truncate text-[14px] font-medium text-zinc-200">Jordan Davis</p>
            <p className="truncate text-[13px] text-zinc-500">jordan@acme.co</p>
          </div>
          <MoreHorizontal size={16} className="text-zinc-500" />
        </button>
      </div>
    </aside>
  )
}

function Topbar({ onMenu, pathname }: { onMenu: () => void; pathname: string }) {
  const getPageTitle = (path: string) => {
    switch (path) {
      case '/': return 'Dashboard'
      case '/studio': return 'ZFile Studio'
      case '/ai': return 'ZFile AI'
      case '/security': return 'Security'
      case '/audit': return 'Audit Logs'
      case '/share': return 'Shared with me'
      case '/trash': return 'Trash'
      case '/settings': return 'Settings'
      case '/team': return 'Team Members'
      case '/tools': return 'Convert & Edit'
      case '/pricing': return 'Upgrade Plan'
      case '/checkout': return 'Checkout'
      case '/workspace/new': return 'New Workspace'
      default: return 'Workspace'
    }
  }

  return (
    <header className="topbar">
      <button className="icon-button menu-button" onClick={onMenu} aria-label="Open menu">
        <Menu size={20} />
      </button>
      <div className="breadcrumbs">
        <span>Workspace</span>
        <ChevronRight size={14} />
        <strong>{getPageTitle(pathname)}</strong>
      </div>
      <div className="topbar-actions">
        <div className="search-box">
          <Search size={16} />
          <input placeholder="Search files..." aria-label="Search files" />
          <kbd>⌘ K</kbd>
        </div>
        <button className="icon-button">
          <Bell size={18} />
          <span className="notification-dot" />
        </button>
        <div className="top-avatar">JD</div>
      </div>
    </header>
  )
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="app-shell">
      <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} pathname={pathname} />
      <div className="main-area flex flex-col h-screen overflow-hidden">
        <Topbar onMenu={() => setMobileOpen(true)} pathname={pathname} />
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
