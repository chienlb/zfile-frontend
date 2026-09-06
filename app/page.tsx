'use client'

import { useMemo, useRef, useState } from 'react'
import {
  Activity,
  Archive,
  ArrowDownToLine,
  ArrowLeft,
  ArrowUpRight,
  Bell,
  Check,
  ChevronDown,
  ChevronRight,
  Clock3,
  Cloud,
  CloudUpload,
  Copy,
  Crop,
  Download,
  FileArchive,
  FileAudio,
  FileImage,
  FileText,
  FileVideo,
  Files,
  FolderOpen,
  Grid2X2,
  HardDrive,
  History,
  KeyRound,
  LayoutDashboard,
  Link2,
  ListFilter,
  LockKeyhole,
  LogOut,
  Menu,
  MoreHorizontal,
  PanelLeftClose,
  Play,
  Plus,
  RefreshCw,
  Search,
  Settings2,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Trash2,
  UploadCloud,
  UserRound,
  Users,
  WandSparkles,
  X,
  Zap,
} from 'lucide-react'

type PageKey = 'dashboard' | 'studio' | 'security' | 'audit' | 'share'

type FileItem = {
  id: number
  name: string
  type: 'image' | 'video' | 'audio' | 'archive' | 'text'
  size: string
  modified: string
  shared?: boolean
  color: string
}

const files: FileItem[] = [
  { id: 1, name: 'brand-assets-final.zip', type: 'archive', size: '248.4 MB', modified: 'Today, 10:42 AM', shared: true, color: 'violet' },
  { id: 2, name: 'product-demo-2024.mp4', type: 'video', size: '1.2 GB', modified: 'Yesterday, 4:18 PM', shared: true, color: 'rose' },
  { id: 3, name: 'hero-banner@2x.png', type: 'image', size: '8.6 MB', modified: 'Jan 18, 2024', color: 'amber' },
  { id: 4, name: 'launch-notes.md', type: 'text', size: '24 KB', modified: 'Jan 17, 2024', shared: true, color: 'sky' },
  { id: 5, name: 'voiceover-take-03.wav', type: 'audio', size: '36.8 MB', modified: 'Jan 16, 2024', color: 'emerald' },
]

const navGroups = [
  { label: 'Workspace', items: [{ key: 'dashboard', label: 'Dashboard', icon: LayoutDashboard }, { key: 'studio', label: 'ZFile Studio', icon: WandSparkles }] },
  { label: 'Manage', items: [{ key: 'security', label: 'Security', icon: ShieldCheck }, { key: 'audit', label: 'Audit Logs', icon: History }] },
]

const productNav = [
  { href: '/tools', label: 'Convert & Edit', icon: RefreshCw },
  { href: '/pricing', label: 'Upgrade plan', icon: Zap },
  { href: '/login', label: 'Sign in', icon: UserRound },
]

function Logo() {
  return <div className="flex items-center gap-3"><div className="logo-mark"><span /></div><span className="text-[17px] font-semibold tracking-[-0.04em] text-white">ZFile</span></div>
}

function FileIcon({ type, color }: { type: FileItem['type']; color: string }) {
  const Icon = type === 'image' ? FileImage : type === 'video' ? FileVideo : type === 'audio' ? FileAudio : type === 'archive' ? FileArchive : FileText
  return <div className={`file-icon file-${color}`}><Icon size={18} strokeWidth={1.7} /></div>
}

function Sidebar({ page, setPage, mobileOpen, setMobileOpen }: { page: PageKey; setPage: (page: PageKey) => void; mobileOpen: boolean; setMobileOpen: (open: boolean) => void }) {
  return <aside className={`sidebar ${mobileOpen ? 'sidebar-open' : ''}`}>
    <div className="sidebar-head"><Logo /><button className="icon-button mobile-close" onClick={() => setMobileOpen(false)} aria-label="Close menu"><X size={18} /></button></div>
    <div className="workspace-switcher"><div className="workspace-avatar">A</div><div className="min-w-0 flex-1"><p className="truncate text-[12px] font-medium text-white">Acme Workspace</p><p className="truncate text-[11px] text-zinc-500">Personal plan</p></div><ChevronDown size={15} className="text-zinc-500" /></div>
    <nav className="sidebar-nav">
      {navGroups.map((group) => <div key={group.label} className="nav-group"><p className="nav-label">{group.label}</p>{group.items.map((item) => { const Icon = item.icon; return <button key={item.key} className={`nav-item ${page === item.key ? 'nav-active' : ''}`} onClick={() => { setPage(item.key as PageKey); setMobileOpen(false) }}><Icon size={17} /><span>{item.label}</span>{item.key === 'security' && <span className="nav-dot" />}</button> })}</div>)}
      <div className="nav-group"><p className="nav-label">Quick access</p><button className="nav-item" onClick={() => setPage('share')}><Link2 size={17} /><span>Shared with me</span></button><button className="nav-item"><Trash2 size={17} /><span>Trash</span></button></div>
      <div className="nav-group"><p className="nav-label">More</p>{productNav.map(({ href, label, icon: Icon }) => <button key={href} className="nav-item" onClick={() => { window.location.href = href; setMobileOpen(false) }}><Icon size={17} /><span>{label}</span>{href === '/pricing' && <span className="nav-new">PRO</span>}</button>)}</div>
    </nav>
    <div className="sidebar-bottom"><div className="storage-card"><div className="flex items-center justify-between"><span className="text-[11px] text-zinc-400">Storage used</span><span className="text-[11px] font-medium text-zinc-300">68%</span></div><div className="storage-track"><span /></div><p className="mt-2 text-[11px] text-zinc-500"><b className="font-medium text-zinc-300">6.8 GB</b> of 10 GB used</p><button className="upgrade-button" onClick={() => { window.location.href = '/pricing' }}>Upgrade plan <ArrowUpRight size={13} /></button></div><button className="user-row"><div className="user-avatar">JD</div><div className="min-w-0 flex-1 text-left"><p className="truncate text-[12px] font-medium text-zinc-200">Jordan Davis</p><p className="truncate text-[11px] text-zinc-500">jordan@acme.co</p></div><MoreHorizontal size={16} className="text-zinc-500" /></button></div>
  </aside>
}

function Topbar({ page, onMenu }: { page: PageKey; onMenu: () => void }) {
  const labels = { dashboard: 'Dashboard', studio: 'ZFile Studio', security: 'Security', audit: 'Audit Logs', share: 'Shared file' }
  return <header className="topbar"><button className="icon-button menu-button" onClick={onMenu} aria-label="Open menu"><Menu size={20} /></button><div className="breadcrumbs"><span>Workspace</span><ChevronRight size={14} /><strong>{labels[page]}</strong></div><div className="topbar-actions"><div className="search-box"><Search size={16} /><input placeholder="Search files..." aria-label="Search files" /><kbd>⌘ K</kbd></div><button className="icon-button"><Bell size={18} /><span className="notification-dot" /></button><div className="top-avatar">JD</div></div></header>
}

function StatCard({ label, value, meta, icon: Icon, tone }: { label: string; value: string; meta: string; icon: typeof Cloud; tone: string }) {
  return <div className="stat-card"><div className="flex items-start justify-between"><div><p className="eyebrow">{label}</p><p className="stat-value">{value}</p></div><div className={`stat-icon ${tone}`}><Icon size={17} /></div></div><p className="stat-meta"><span className="trend-up">{meta.split(' ')[0]}</span> {meta.split(' ').slice(1).join(' ')}</p></div>
}

function UploadZone({ onUpload }: { onUpload: () => void }) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [dragging, setDragging] = useState(false)
  const [uploading, setUploading] = useState(false)
  const startUpload = () => { setUploading(true); setTimeout(() => setUploading(false), 2600); onUpload() }
  return <div className={`upload-zone ${dragging ? 'upload-dragging' : ''}`} onDragOver={(e) => { e.preventDefault(); setDragging(true) }} onDragLeave={() => setDragging(false)} onDrop={(e) => { e.preventDefault(); setDragging(false); startUpload() }} onClick={() => inputRef.current?.click()} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter') inputRef.current?.click() }}>
    <input ref={inputRef} type="file" multiple className="hidden" onChange={startUpload} />
    <div className="upload-icon"><CloudUpload size={22} /></div><div className="mt-3 flex items-center justify-center gap-1.5"><p className="text-[13px] font-medium text-zinc-200">{uploading ? 'Uploading securely...' : 'Drop files here or'} </p><button className="upload-link" onClick={(e) => { e.stopPropagation(); inputRef.current?.click() }}>{uploading ? 'processing' : 'browse'}</button></div><p className="mt-1 text-[11px] text-zinc-500">Up to 5 GB per file · End-to-end encrypted</p>{uploading && <div className="upload-progress"><span /></div>}
  </div>
}

function Dashboard({ setPage }: { setPage: (page: PageKey) => void }) {
  const [selected, setSelected] = useState<number[]>([])
  const [toast, setToast] = useState('')
  const [uploaded, setUploaded] = useState(false)
  const toggle = (id: number) => setSelected((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id])
  const allSelected = selected.length === files.length
  const notify = (message: string) => { setToast(message); setTimeout(() => setToast(''), 2200) }
  return <div className="page-content dashboard-page">
    <div className="page-heading"><div><p className="eyebrow mb-2">Thursday, January 25, 2024</p><h1>Good morning, Jordan <span className="heading-dot">.</span></h1><p className="subtitle">Here&apos;s what&apos;s happening with your workspace.</p></div><button className="primary-button" onClick={() => document.querySelector<HTMLInputElement>('input[type=file]')?.click()}><Plus size={16} /> Upload files</button></div>
    {uploaded && <div className="upload-notice"><Check size={15} /> Files queued for secure upload <button onClick={() => setUploaded(false)}><X size={14} /></button></div>}
    <UploadZone onUpload={() => setUploaded(true)} />
    <div className="stats-grid"><StatCard label="Storage used" value="6.8 GB" meta="+12.4% this month" icon={HardDrive} tone="stat-blue" /><StatCard label="Shared files" value="24" meta="+8.1% this month" icon={Link2} tone="stat-purple" /><StatCard label="Downloads" value="1,284" meta="+24.8% this week" icon={ArrowDownToLine} tone="stat-amber" /><StatCard label="Security score" value="94%" meta="Excellent standing" icon={ShieldCheck} tone="stat-emerald" /></div>
    <section className="files-section"><div className="section-heading"><div><h2>My files</h2><p className="section-subtitle">Your most recent uploads and shared files.</p></div><div className="section-actions"><button className="secondary-button"><ListFilter size={15} /> Filter <ChevronDown size={14} /></button><button className="icon-button"><SlidersHorizontal size={17} /></button></div></div><div className="table-shell"><div className="table-head"><div className="check-wrap"><input type="checkbox" checked={allSelected} onChange={() => setSelected(allSelected ? [] : files.map((file) => file.id))} /></div><span>Name</span><span>Modified</span><span>Size</span><span>Status</span><span /></div>{files.map((file) => <div className="file-row" key={file.id}><div className="check-wrap"><input type="checkbox" checked={selected.includes(file.id)} onChange={() => toggle(file.id)} /></div><div className="file-name"><FileIcon type={file.type} color={file.color} /><div className="min-w-0"><p className="truncate text-[12px] font-medium text-zinc-200">{file.name}</p><p className="text-[11px] capitalize text-zinc-500">{file.type === 'archive' ? 'Archive' : file.type}</p></div></div><span className="muted-cell">{file.modified}</span><span className="muted-cell">{file.size}</span><span>{file.shared ? <span className="status shared"><Link2 size={12} /> Shared</span> : <span className="status private"><LockKeyhole size={12} /> Private</span>}</span><button className="row-more" onClick={() => notify(`Options for ${file.name}`)}><MoreHorizontal size={17} /></button></div>)}</div><button className="view-all" onClick={() => notify('All files view is coming soon')}>View all files <ArrowUpRight size={14} /></button></section>
    <div className="bottom-grid"><section className="activity-card"><div className="section-heading"><div><h2>Recent activity</h2><p className="section-subtitle">Your latest workspace events.</p></div><Activity size={17} className="text-zinc-500" /></div>{[['product-demo-2024.mp4', 'You shared a file', '2h ago', FileVideo], ['brand-assets-final.zip', 'You uploaded a file', '5h ago', FileArchive], ['hero-banner@2x.png', 'Alex downloaded a file', 'Yesterday', FileImage]].map(([name, action, time, Icon], index) => <div className="activity-row" key={index}><div className="mini-activity-icon"><Icon size={14} /></div><div className="min-w-0 flex-1"><p className="truncate text-[12px] text-zinc-300">{action} <b className="font-medium text-zinc-100">{name}</b></p><p className="mt-1 text-[11px] text-zinc-600">{time}</p></div><ChevronRight size={14} className="text-zinc-600" /></div>)}</section><section className="insight-card"><div className="insight-glow" /><div className="flex items-center gap-2"><div className="insight-icon"><Sparkles size={15} /></div><span className="eyebrow text-blue-300">ZFile insight</span></div><h3>Keep your workspace organized</h3><p>Files you haven&apos;t opened in 30 days could be archived to free up <b>1.4 GB</b> of space.</p><button className="text-button" onClick={() => notify('Archive suggestions opened')}>Review suggestions <ArrowUpRight size={14} /></button></section></div>
    {selected.length > 0 && <div className="floating-toolbar"><div className="toolbar-count"><span>{selected.length}</span> selected</div><div className="toolbar-divider" /><button onClick={() => notify('Preparing ZIP download')}><Archive size={16} /> Download ZIP</button><button onClick={() => notify('Share link copied')}><Link2 size={16} /> Share</button><button className="toolbar-icon" onClick={() => setSelected([])}><X size={17} /></button></div>}
    {toast && <div className="toast"><Check size={15} /> {toast}</div>}
  </div>
}

function Studio() {
  const [tool, setTool] = useState('Crop')
  const [processing, setProcessing] = useState(false)
  const tools = [{ name: 'Crop', icon: Crop, desc: 'Resize & frame images' }, { name: 'Batch Convert', icon: RefreshCw, desc: 'Convert multiple files' }, { name: 'Trim & Merge', icon: Play, desc: 'Edit audio & video' }]
  const run = () => { setProcessing(true); setTimeout(() => setProcessing(false), 2200) }
  return <div className="page-content studio-page"><div className="page-heading"><div><p className="eyebrow mb-2">Workspace / Tools</p><h1>ZFile Studio</h1><p className="subtitle">Powerful tools, right in your workspace.</p></div><button className="secondary-button"><Clock3 size={15} /> Job history</button></div><div className="studio-layout"><div className="tool-rail">{tools.map(({ name, icon: Icon, desc }) => <button key={name} className={`tool-item ${tool === name ? 'tool-active' : ''}`} onClick={() => setTool(name)}><div className="tool-item-icon"><Icon size={18} /></div><div className="text-left"><p>{name}</p><span>{desc}</span></div><ChevronRight size={15} className="ml-auto text-zinc-600" /></button>)}</div><section className="studio-workspace"><div className="workspace-toolbar"><div className="flex items-center gap-2"><div className="workspace-dot" /><span className="text-[12px] font-medium text-zinc-300">{tool}</span></div><span className="text-[11px] text-zinc-600">No file selected</span></div><div className="studio-canvas"><div className="canvas-pattern" /><div className="canvas-center"><div className="canvas-upload-icon"><UploadCloud size={24} /></div><p className="mt-4 text-[13px] font-medium text-zinc-300">Drop a file to get started</p><p className="mt-1 text-[11px] text-zinc-600">or choose a file from your workspace</p><button className="secondary-button mt-4"><FolderOpen size={15} /> Browse files</button></div></div><div className="studio-controls"><div><p className="eyebrow mb-2">Selected tool</p><h3>{tool}</h3></div>{tool === 'Crop' && <div className="control-options"><label>Aspect ratio<select><option>Freeform</option><option>16:9</option><option>1:1</option></select></label><label>Output<select><option>PNG</option><option>JPG</option><option>WebP</option></select></label></div>}{tool === 'Batch Convert' && <div className="control-options"><label>Convert to<select><option>PDF</option><option>WebP</option><option>JPG</option></select></label><label>Quality<select><option>High</option><option>Balanced</option><option>Compact</option></select></label></div>}{tool === 'Trim & Merge' && <div className="control-options"><label>Start<input placeholder="00:00" /></label><label>End<input placeholder="05:00" /></label></div>}<button className="primary-button" onClick={run} disabled={processing}>{processing ? <><RefreshCw size={15} className="spin" /> Processing...</> : <><Zap size={15} /> Run tool</>}</button></div></section></div><section className="jobs-section"><div className="section-heading"><div><h2>Recent jobs</h2><p className="section-subtitle">Files processed with ZFile Studio.</p></div><button className="text-button">View all <ArrowUpRight size={14} /></button></div><div className="jobs-list">{['hero-banner@2x.png', 'product-demo-2024.mp4', 'voiceover-take-03.wav'].map((name, i) => <div className="job-row" key={name}><FileIcon type={i === 0 ? 'image' : i === 1 ? 'video' : 'audio'} color={i === 0 ? 'amber' : i === 1 ? 'rose' : 'emerald'} /><div className="min-w-0 flex-1"><p className="truncate text-[12px] font-medium text-zinc-300">{name}</p><p className="mt-1 text-[11px] text-zinc-600">{i === 0 ? 'Cropped to 16:9' : i === 1 ? 'Trimmed · 00:42' : 'Converted to MP3'}</p></div><span className="job-status"><Check size={13} /> Complete</span><MoreHorizontal size={16} className="text-zinc-600" /></div>)}</div></section></div>
}

function Security() {
  const [revoked, setRevoked] = useState<string[]>([])
  const devices = [['MacBook Pro', 'San Francisco, US · Current device', 'Chrome · macOS', 'Current'], ['iPhone 15 Pro', 'New York, US · 2 hours ago', 'ZFile iOS app', 'Active'], ['Windows PC', 'London, UK · Jan 22, 2024', 'Chrome · Windows 11', 'Active']]
  return <div className="page-content"><div className="page-heading"><div><p className="eyebrow mb-2">Account controls</p><h1>Security</h1><p className="subtitle">Protect your account and workspace access.</p></div><div className="security-score"><ShieldCheck size={18} /><span><b>94%</b> secure</span></div></div><div className="security-grid"><section className="settings-panel"><div className="panel-heading"><div className="panel-icon"><KeyRound size={17} /></div><div><h2>Password & authentication</h2><p>Keep your account credentials up to date.</p></div></div><div className="setting-line"><div><p>Two-factor authentication</p><span>Add an extra layer of protection to your account.</span></div><button className="status-toggle enabled"><span /> Enabled</button></div><div className="setting-line"><div><p>Password</p><span>Last changed 28 days ago.</span></div><button className="secondary-button">Change password</button></div></section><section className="settings-panel"><div className="panel-heading"><div className="panel-icon panel-green"><LockKeyhole size={17} /></div><div><h2>End-to-end encryption</h2><p>Your files are encrypted before they leave your device.</p></div></div><div className="e2ee-box"><div className="e2ee-check"><Check size={16} /></div><div><p>Local security key is active</p><span>Only you can access your encrypted files.</span></div><button className="icon-button"><Settings2 size={16} /></button></div><button className="text-button mt-4">Manage encryption settings <ArrowUpRight size={14} /></button></section></div><section className="settings-panel devices-panel"><div className="panel-heading"><div className="panel-icon panel-blue"><Cloud size={17} /></div><div><h2>Logged-in devices</h2><p>Review and revoke access to devices connected to your account.</p></div></div><div className="device-list">{devices.map(([name, location, browser, status]) => !revoked.includes(name) && <div className="device-row" key={name}><div className="device-icon"><HardDrive size={17} /></div><div className="min-w-0 flex-1"><p className="text-[13px] font-medium text-zinc-200">{name} {status === 'Current' && <span className="current-pill">This device</span>}</p><p className="mt-1 text-[11px] text-zinc-500">{location}</p><p className="mt-1 text-[11px] text-zinc-600">{browser}</p></div>{status === 'Current' ? <span className="status shared">Active now</span> : <button className="revoke-button" onClick={() => setRevoked([...revoked, name])}><LogOut size={14} /> Revoke</button>}</div>)}</div></section></div>
}

function Audit() {
  const events = [{ icon: UploadCloud, title: 'File uploaded', detail: 'brand-assets-final.zip', time: 'Today, 10:42 AM', ip: '192.168.1.42' }, { icon: Link2, title: 'Share link created', detail: 'product-demo-2024.mp4', time: 'Today, 09:18 AM', ip: '192.168.1.42' }, { icon: Download, title: 'File downloaded', detail: 'hero-banner@2x.png · Alex Morgan', time: 'Yesterday, 4:02 PM', ip: '172.16.0.18' }, { icon: LogOut, title: 'Device revoked', detail: 'Chrome on Windows · London, UK', time: 'Jan 22, 2024 · 11:46 AM', ip: '192.168.1.42' }, { icon: ShieldCheck, title: 'Two-factor enabled', detail: 'Security settings updated', time: 'Jan 18, 2024 · 08:21 AM', ip: '192.168.1.42' }]
  return <div className="page-content"><div className="page-heading"><div><p className="eyebrow mb-2">Workspace history</p><h1>Audit Logs</h1><p className="subtitle">A complete record of activity across your workspace.</p></div><button className="secondary-button"><Download size={15} /> Export logs</button></div><div className="audit-toolbar"><div className="search-box audit-search"><Search size={16} /><input placeholder="Search activity..." /></div><button className="secondary-button"><Clock3 size={15} /> Last 30 days <ChevronDown size={14} /></button><button className="secondary-button"><ListFilter size={15} /> All events <ChevronDown size={14} /></button></div><section className="audit-list">{events.map(({ icon: Icon, title, detail, time, ip }) => <div className="audit-row" key={`${title}-${time}`}><div className="audit-icon"><Icon size={16} /></div><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-2"><p className="text-[13px] font-medium text-zinc-200">{title}</p><span className="audit-time">{time}</span></div><p className="mt-1 text-[12px] text-zinc-500">{detail}</p></div><span className="audit-ip">IP {ip}</span><MoreHorizontal size={17} className="text-zinc-600" /></div>)}</section></div>
}

function SharePage() {
  const [downloaded, setDownloaded] = useState(false)
  const [loading, setLoading] = useState(false)
  const download = () => { setLoading(true); setTimeout(() => { setLoading(false); setDownloaded(true) }, 1700) }
  return <div className="share-page"><div className="share-top"><Logo /><span className="share-secure"><LockKeyhole size={13} /> Secure link</span></div><main className="share-card"><div className="share-file-icon"><FileArchive size={30} /></div><p className="eyebrow mt-5">Shared by Jordan Davis</p><h1>brand-assets-final.zip</h1><p className="share-meta">248.4 MB <span /> ZIP archive <span /> 5 files</p><div className="share-preview"><div className="preview-row"><div className="preview-thumb preview-purple"><Files size={16} /></div><span>logos-and-marks.svg</span><small>2.1 MB</small></div><div className="preview-row"><div className="preview-thumb preview-blue"><FileImage size={16} /></div><span>hero-banner@2x.png</span><small>8.6 MB</small></div><div className="preview-row"><div className="preview-thumb preview-amber"><FileText size={16} /></div><span>brand-guidelines.pdf</span><small>6.4 MB</small></div></div><div className="share-downloads"><Download size={14} /> 128 downloads</div>{downloaded ? <div className="download-success"><div><Check size={20} /></div><p>Download started</p><span>Your file is on its way.</span></div> : <><button className="primary-button share-button" onClick={download} disabled={loading}>{loading ? <><RefreshCw size={16} className="spin" /> Preparing download...</> : <><Download size={17} /> Download file</>}</button><p className="share-footer"><LockKeyhole size={13} /> This link is protected with end-to-end encryption</p></>}</main><p className="share-brand">Powered by <b>ZFile</b></p></div>
}

export default function Page() {
  const [page, setPage] = useState<PageKey>('dashboard')
  const [mobileOpen, setMobileOpen] = useState(false)
  const content = useMemo(() => page === 'dashboard' ? <Dashboard setPage={setPage} /> : page === 'studio' ? <Studio /> : page === 'security' ? <Security /> : page === 'audit' ? <Audit /> : <SharePage />, [page])
  if (page === 'share') return content
  return <div className="app-shell"><Sidebar page={page} setPage={setPage} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} /><div className="main-area"><Topbar page={page} onMenu={() => setMobileOpen(true)} />{content}</div></div>
}
