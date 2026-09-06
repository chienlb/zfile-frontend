'use client'

import { useState, useEffect, useRef } from 'react'
import { 
  Check, 
  FileImage, 
  FileText, 
  Film, 
  LoaderCircle, 
  RefreshCw, 
  WandSparkles, 
  Info, 
  Image as ImageIcon,
  Crop,
  Sun,
  Contrast,
  Palette,
  Droplet,
  RotateCw,
  RotateCcw,
  FlipHorizontal,
  FlipVertical,
  Eraser,
  Scissors,
  Play,
  Volume2,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Highlighter,
  Type,
  Settings2,
  Download,
  TerminalSquare,
  Clock,
  Sparkles
} from 'lucide-react'

const tools = [
  { id: 'convert', name: 'Convert files', description: 'Change files between popular formats.', icon: RefreshCw },
  { id: 'image', name: 'Edit images', description: 'Crop, resize, compress, and enhance.', icon: FileImage },
  { id: 'document', name: 'Edit documents', description: 'Merge, split, and edit text inside documents.', icon: FileText },
  { id: 'video', name: 'Video tools', description: 'Trim clips and export lightweight previews.', icon: Film }
]

function ProgressBar({ percent, step, logs }: { percent: number; step: string; logs: string[] }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight
  }, [logs])

  return (
    <div className="processing-overlay">
      <div className="processing-card">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center animate-pulse">
            {percent === 100 ? <Check size={24} className="text-emerald-400" /> : <LoaderCircle size={24} className="spin" />}
          </div>
          <div>
            <h3 className="text-[18px] font-bold text-zinc-100">{percent === 100 ? 'Process Complete' : 'Processing Task...'}</h3>
            <p className="text-[14px] text-zinc-400">{step}</p>
          </div>
          <div className="ml-auto text-[32px] font-light text-blue-400 tabular-nums">{percent}%</div>
        </div>
        
        <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden mb-6">
          <div className="h-full bg-blue-500 transition-all duration-300 ease-out" style={{ width: `${percent}%` }} />
        </div>

        <div className="bg-[#0c0e12] border border-zinc-800 rounded-lg p-4 h-[120px] overflow-y-auto font-mono text-[12px] text-zinc-500 leading-relaxed" ref={scrollRef}>
          {logs.map((log, i) => (
            <div key={i} className="flex gap-2">
              <span className="text-zinc-700">[{new Date().toISOString().split('T')[1].slice(0,8)}]</span>
              <span className={log.includes('Success') ? 'text-emerald-400' : 'text-zinc-400'}>{log}</span>
            </div>
          ))}
        </div>
        
        {percent === 100 && (
          <div className="mt-6 flex gap-3">
            <button className="primary-button w-full flex-1" onClick={() => window.location.reload()}>View Result</button>
            <button className="secondary-button" onClick={() => window.location.reload()}>Close</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default function ToolsPage() {
  const [active, setActive] = useState(0)
  const [running, setRunning] = useState(false)
  const [progress, setProgress] = useState({ percent: 0, step: '', logs: [] as string[] })

  // Image Editor State
  const [brightness, setBrightness] = useState(50)
  const [contrast, setContrast] = useState(50)
  const [saturation, setSaturation] = useState(50)
  const [blur, setBlur] = useState(0)

  // Document Editor State
  const [docContent, setDocContent] = useState('## Q3 Launch Strategy\n\n1. Analyze market trends\n2. Prepare marketing assets\n3. Coordinate with sales team\n\nThis document outlines the core objectives for the upcoming quarter.')

  const runTask = () => {
    setRunning(true)
    setProgress({ percent: 0, step: 'Initializing secure environment...', logs: ['Starting isolated container...'] })

    let p = 0
    const addLog = (msg: string) => {
      setProgress(prev => ({ ...prev, logs: [...prev.logs, msg] }))
    }

    const interval = setInterval(() => {
      p += Math.floor(Math.random() * 15) + 5
      if (p > 100) p = 100

      if (p > 10 && p < 30) {
        setProgress(prev => ({ ...prev, percent: p, step: 'Analyzing input file metadata...' }))
        if (p % 2 === 0) addLog('Reading file stream chunks...')
      } else if (p >= 30 && p < 70) {
        setProgress(prev => ({ ...prev, percent: p, step: `Applying ${tools[active].name} transformations...` }))
        if (p % 3 === 0) addLog('Executing hardware-accelerated pipeline...')
      } else if (p >= 70 && p < 100) {
        setProgress(prev => ({ ...prev, percent: p, step: 'Optimizing output payload...' }))
        if (p % 4 === 0) addLog('Compressing output stream...')
      } else if (p === 100) {
        setProgress(prev => ({ ...prev, percent: p, step: 'Operation completed.' }))
        addLog('Success! Output generated in 1.4s.')
        clearInterval(interval)
      }
    }, 400)
  }

  const renderWorkspace = () => {
    switch (tools[active].id) {
      case 'convert':
        return (
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-center border-2 border-dashed border-zinc-800 rounded-xl bg-[#111318] h-[300px] flex-col gap-4 text-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center"><RefreshCw size={32} /></div>
              <div>
                <h3 className="text-[18px] font-medium text-zinc-200">Select file to convert</h3>
                <p className="text-[14px] text-zinc-500 mt-1 max-w-sm">Support for over 200+ formats including RAW, HEIC, PDF, and DOCX.</p>
              </div>
              <button className="secondary-button mt-2">Browse Files</button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 border border-zinc-800 rounded-xl bg-[#111318]">
                <p className="eyebrow mb-3">Convert To</p>
                <select className="w-full bg-[#1a1d24] border border-zinc-700 rounded-lg p-3 text-zinc-200 outline-none">
                  <option>PDF Document (.pdf)</option>
                  <option>JPEG Image (.jpg)</option>
                  <option>PNG Image (.png)</option>
                  <option>Word Document (.docx)</option>
                </select>
              </div>
              <div className="p-5 border border-zinc-800 rounded-xl bg-[#111318]">
                <p className="eyebrow mb-3">Quality</p>
                <select className="w-full bg-[#1a1d24] border border-zinc-700 rounded-lg p-3 text-zinc-200 outline-none">
                  <option>High (Lossless)</option>
                  <option>Medium (Balanced)</option>
                  <option>Low (Smallest size)</option>
                </select>
              </div>
            </div>
          </div>
        )
      
      case 'image':
        return (
          <div className="flex flex-col h-full gap-5">
            {/* Action Toolbar */}
            <div className="flex items-center gap-1.5 p-2 bg-[#111318] border border-zinc-800 rounded-xl overflow-x-auto whitespace-nowrap scrollbar-hide">
               <button className="p-2 rounded hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors" title="Crop"><Crop size={16} /></button>
               <div className="w-px h-5 bg-zinc-800 mx-1 flex-shrink-0" />
               <button className="p-2 rounded hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors" title="Rotate Left"><RotateCcw size={16} /></button>
               <button className="p-2 rounded hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors" title="Rotate Right"><RotateCw size={16} /></button>
               <div className="w-px h-5 bg-zinc-800 mx-1 flex-shrink-0" />
               <button className="p-2 rounded hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors" title="Flip Horizontal"><FlipHorizontal size={16} /></button>
               <button className="p-2 rounded hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors" title="Flip Vertical"><FlipVertical size={16} /></button>
               <div className="w-px h-5 bg-zinc-800 mx-1 flex-shrink-0" />
               <button className="p-2 rounded hover:bg-blue-500/10 text-blue-400 transition-colors flex items-center gap-1.5 px-3" title="Magic Eraser (Remove Watermark)">
                 <Eraser size={15} /> <span className="text-[13px] font-medium">Magic Eraser</span>
               </button>
               <button className="p-2 rounded hover:bg-purple-500/10 text-purple-400 transition-colors flex items-center gap-1.5 px-3" title="Remove Background">
                 <Scissors size={15} /> <span className="text-[13px] font-medium">Remove BG</span>
               </button>
               <div className="w-px h-5 bg-zinc-800 mx-1 flex-shrink-0" />
               <select className="bg-transparent text-[13px] text-zinc-300 outline-none border-none cursor-pointer hover:bg-zinc-800 p-1.5 rounded">
                 <option>Filter: None</option>
                 <option>Grayscale</option>
                 <option>Sepia</option>
                 <option>Vintage</option>
                 <option>Cinematic</option>
               </select>
            </div>

            <div className="flex-1 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center rounded-xl border border-zinc-800 relative overflow-hidden min-h-[360px]" style={{ filter: `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%) blur(${blur}px)` }}>
              {/* Fake crop grid overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity">
                <div className="absolute inset-[20%] border border-white/50 grid grid-cols-3 grid-rows-3">
                  <div className="border-r border-b border-white/30" />
                  <div className="border-r border-b border-white/30" />
                  <div className="border-b border-white/30" />
                  <div className="border-r border-b border-white/30" />
                  <div className="border-r border-b border-white/30" />
                  <div className="border-b border-white/30" />
                  <div className="border-r border-white/30" />
                  <div className="border-r border-white/30" />
                  <div />
                  {/* Crop handles */}
                  <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white shadow-sm cursor-nw-resize" />
                  <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white shadow-sm cursor-ne-resize" />
                  <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white shadow-sm cursor-sw-resize" />
                  <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white shadow-sm cursor-se-resize" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 border border-zinc-800 rounded-xl bg-[#111318]">
                <div className="flex items-center justify-between mb-2">
                  <p className="eyebrow flex items-center gap-2 m-0"><Sun size={13} /> Brightness</p>
                  <span className="text-[11px] text-zinc-500 tabular-nums">{brightness}%</span>
                </div>
                <input type="range" min="0" max="200" value={brightness} onChange={(e) => setBrightness(Number(e.target.value))} className="w-full editor-slider" />
              </div>
              <div className="p-4 border border-zinc-800 rounded-xl bg-[#111318]">
                <div className="flex items-center justify-between mb-2">
                  <p className="eyebrow flex items-center gap-2 m-0"><Contrast size={13} /> Contrast</p>
                  <span className="text-[11px] text-zinc-500 tabular-nums">{contrast}%</span>
                </div>
                <input type="range" min="0" max="200" value={contrast} onChange={(e) => setContrast(Number(e.target.value))} className="w-full editor-slider" />
              </div>
              <div className="p-4 border border-zinc-800 rounded-xl bg-[#111318]">
                <div className="flex items-center justify-between mb-2">
                  <p className="eyebrow flex items-center gap-2 m-0"><Palette size={13} /> Saturation</p>
                  <span className="text-[11px] text-zinc-500 tabular-nums">{saturation}%</span>
                </div>
                <input type="range" min="0" max="200" value={saturation} onChange={(e) => setSaturation(Number(e.target.value))} className="w-full editor-slider" />
              </div>
              <div className="p-4 border border-zinc-800 rounded-xl bg-[#111318]">
                <div className="flex items-center justify-between mb-2">
                  <p className="eyebrow flex items-center gap-2 m-0"><Droplet size={13} /> Blur</p>
                  <span className="text-[11px] text-zinc-500 tabular-nums">{blur}px</span>
                </div>
                <input type="range" min="0" max="10" value={blur} onChange={(e) => setBlur(Number(e.target.value))} className="w-full editor-slider" />
              </div>
            </div>
          </div>
        )
      
      case 'document':
        return (
          <div className="flex flex-col h-full gap-4">
            <div className="flex items-center gap-1.5 p-2 bg-[#111318] border border-zinc-800 rounded-xl overflow-x-auto whitespace-nowrap scrollbar-hide">
              
              {/* Font Family & Size */}
              <select className="bg-transparent text-[13px] text-zinc-300 outline-none border-none cursor-pointer hover:bg-zinc-800 p-1.5 rounded mr-1">
                <option>Inter</option>
                <option>Roboto</option>
                <option>System Default</option>
              </select>
              <select className="bg-transparent text-[13px] text-zinc-300 outline-none border-none cursor-pointer hover:bg-zinc-800 p-1.5 rounded">
                <option>14px</option>
                <option>16px</option>
                <option>18px</option>
                <option>24px</option>
              </select>
              
              <div className="w-px h-5 bg-zinc-800 mx-2 flex-shrink-0" />
              
              {/* Text Style */}
              <button className="p-2 rounded hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors" title="Bold"><Bold size={16} /></button>
              <button className="p-2 rounded hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors" title="Italic"><Italic size={16} /></button>
              <button className="p-2 rounded hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors" title="Underline"><Underline size={16} /></button>
              
              <div className="w-px h-5 bg-zinc-800 mx-2 flex-shrink-0" />
              
              {/* Alignment */}
              <button className="p-2 rounded bg-zinc-800 text-white transition-colors" title="Align Left"><AlignLeft size={16} /></button>
              <button className="p-2 rounded hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors" title="Align Center"><AlignCenter size={16} /></button>
              <button className="p-2 rounded hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors" title="Align Right"><AlignRight size={16} /></button>
              <button className="p-2 rounded hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors" title="Justify"><AlignJustify size={16} /></button>

              <div className="w-px h-5 bg-zinc-800 mx-2 flex-shrink-0" />
              
              {/* Lists */}
              <button className="p-2 rounded hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors" title="Bullet List"><List size={16} /></button>
              <button className="p-2 rounded hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors" title="Numbered List"><ListOrdered size={16} /></button>

              <div className="w-px h-5 bg-zinc-800 mx-2 flex-shrink-0" />
              
              {/* Colors */}
              <button className="p-2 rounded hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors flex items-center gap-1" title="Text Color">
                <Type size={16} /> <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
              </button>
              <button className="p-2 rounded hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors flex items-center gap-1" title="Highlight">
                <Highlighter size={16} /> <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
              </button>
              
            </div>
            <div className="flex-1 bg-[#1e1e1e] border border-zinc-800 rounded-xl p-6 font-mono text-[14px] leading-relaxed text-[#d4d4d4] overflow-y-auto relative min-h-[400px]">
              {/* Line numbers mock */}
              <div className="absolute left-0 top-0 bottom-0 w-12 border-r border-[#333] bg-[#1e1e1e] flex flex-col items-center py-6 text-[12px] text-[#858585] select-none">
                {docContent.split('\n').map((_, i) => <span key={i} className="mb-[6px]">{i + 1}</span>)}
              </div>
              <textarea 
                className="w-full h-full bg-transparent outline-none resize-none ml-8 pl-4"
                value={docContent}
                onChange={(e) => setDocContent(e.target.value)}
                spellCheck={false}
              />
            </div>
          </div>
        )

      case 'video':
        return (
          <div className="flex flex-col h-full gap-6">
            <div className="flex-1 bg-black rounded-xl border border-zinc-800 flex items-center justify-center relative overflow-hidden min-h-[350px]">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2525&auto=format&fit=crop')] bg-cover bg-center opacity-40" />
              <button className="w-16 h-16 rounded-full bg-blue-600/80 backdrop-blur text-white flex items-center justify-center shadow-lg hover:bg-blue-500 transition-colors z-10">
                <Play size={24} className="ml-1" />
              </button>
            </div>
            
            <div className="p-6 border border-zinc-800 rounded-xl bg-[#111318]">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4 text-[13px] text-zinc-400">
                  <Play size={16} />
                  <Volume2 size={16} />
                  <span className="tabular-nums">00:00:00 / 00:05:23</span>
                </div>
                <div className="flex gap-2">
                  <button className="p-1.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300"><Scissors size={14} /></button>
                </div>
              </div>
              
              <div className="relative h-16 bg-[#1a1d24] border border-zinc-800 rounded-lg overflow-hidden flex">
                {/* Fake video frames */}
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="flex-1 border-r border-zinc-800/50 bg-[url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=100&auto=format&fit=crop')] bg-cover" />
                ))}
                
                {/* Trimmer UI */}
                <div className="absolute top-0 bottom-0 left-[20%] right-[30%] border-[3px] border-blue-500 bg-blue-500/10 rounded-md">
                  <div className="absolute top-0 bottom-0 -left-2 w-4 bg-white rounded-sm cursor-ew-resize flex flex-col items-center justify-center gap-0.5">
                    <span className="w-0.5 h-1 bg-zinc-400 rounded-full" />
                    <span className="w-0.5 h-1 bg-zinc-400 rounded-full" />
                    <span className="w-0.5 h-1 bg-zinc-400 rounded-full" />
                  </div>
                  <div className="absolute top-0 bottom-0 -right-2 w-4 bg-white rounded-sm cursor-ew-resize flex flex-col items-center justify-center gap-0.5">
                    <span className="w-0.5 h-1 bg-zinc-400 rounded-full" />
                    <span className="w-0.5 h-1 bg-zinc-400 rounded-full" />
                    <span className="w-0.5 h-1 bg-zinc-400 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
  }

  const ToolIcon = tools[active].icon

  return (
    <main className="tools-page">
      {running && <ProgressBar percent={progress.percent} step={progress.step} logs={progress.logs} />}
      
      <section className="tools-hero">
        <div className="tool-hero-icon"><WandSparkles size={24} /></div>
        <p className="eyebrow text-blue-400">Advanced operations</p>
        <h1 className="text-[34px] font-bold">Studio Tools</h1>
        <p className="subtitle mt-3 max-w-lg mx-auto text-[15px]">Professional grade file processing happening entirely within a secure, sandboxed environment.</p>
      </section>

      <div className="tools-layout" style={{ gridTemplateColumns: '300px 1fr 320px' }}>
        <nav className="tools-list">
          {tools.map((tool, index) => {
            const Icon = tool.icon
            return (
              <button 
                key={tool.id} 
                className={`tool-card ${active === index ? 'tool-card-active' : ''}`} 
                onClick={() => { setActive(index); setRunning(false); }}
              >
                <Icon size={20} className="mt-1" />
                <span>
                  <b className="text-[14px]">{tool.name}</b>
                  <small className="text-[12px]">{tool.description}</small>
                </span>
              </button>
            )
          })}
        </nav>

        <section className="tool-panel flex flex-col" style={{ padding: '32px', minHeight: '700px' }}>
          <div className="tool-panel-head mb-8 flex justify-between items-center">
            <div className="tool-panel-title">
              <ToolIcon size={22} className="text-blue-400" />
              <div>
                <p className="eyebrow text-zinc-500">Selected workflow</p>
                <h2 className="text-[20px] font-semibold">{tools[active].name}</h2>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="secondary-button h-[36px]"><Info size={16} /> Guide</button>
              <button className="primary-button h-[36px] px-6 shadow-blue-500/20 shadow-lg" onClick={runTask}>
                <TerminalSquare size={16} /> Execute
              </button>
            </div>
          </div>

          <div className="flex-1">
            {renderWorkspace()}
          </div>
        </section>

        {/* Right Sidebar - Recent & Tips */}
        <aside className="hidden xl:flex flex-col gap-5">
          <div className="bg-[#111318] border border-zinc-800 rounded-xl p-6">
            <h3 className="text-[15px] font-semibold text-white mb-4 flex items-center gap-2"><Clock size={16} className="text-blue-400" /> Recent Exports</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0"><FileImage size={18} /></div>
                <div>
                  <p className="text-[13px] font-medium text-zinc-200">hero-banner-v2.webp</p>
                  <p className="text-[12px] text-zinc-500 mt-1">Compressed by 42% • 2m ago</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0"><Film size={18} /></div>
                <div>
                  <p className="text-[13px] font-medium text-zinc-200">demo-reel-720p.mp4</p>
                  <p className="text-[12px] text-zinc-500 mt-1">Converted from MOV • 1h ago</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0"><FileText size={18} /></div>
                <div>
                  <p className="text-[13px] font-medium text-zinc-200">Q3_Report_Final.pdf</p>
                  <p className="text-[12px] text-zinc-500 mt-1">Merged 3 files • 3h ago</p>
                </div>
              </div>
            </div>
            <button className="w-full text-center text-[13px] text-blue-400 mt-5 hover:text-blue-300">View all history</button>
          </div>

          <div className="bg-gradient-to-br from-[#111318] to-blue-900/10 border border-blue-500/20 rounded-xl p-6 relative overflow-hidden">
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-blue-500/20 rounded-full blur-[20px]" />
            <h3 className="text-[15px] font-semibold text-white mb-2 flex items-center gap-2"><Sparkles size={16} className="text-amber-400" /> Pro Tip</h3>
            <p className="text-[13px] text-zinc-400 leading-relaxed mb-4">You can drag and drop entire folders into the Studio to batch process multiple files at once. All processing happens locally in your browser.</p>
            <div className="px-3 py-2 bg-black/40 rounded-lg border border-white/5 text-[12px] font-mono text-zinc-300 flex justify-between items-center">
              <span>Batch processing</span>
              <span className="text-emerald-400">Enabled</span>
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}
