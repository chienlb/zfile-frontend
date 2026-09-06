'use client'

import { useState } from 'react'
import { ArrowLeft, Check, FileArchive, FileImage, FileText, Film, LoaderCircle, RefreshCw, UploadCloud, WandSparkles, Settings2, Shield, Info, Download, Trash2, SlidersHorizontal, Image as ImageIcon } from 'lucide-react'
import Link from 'next/link'

const tools = [
  { name: 'Convert files', description: 'Change files between popular formats natively.', icon: RefreshCw, options: ['PDF', 'DOCX', 'JPG', 'PNG', 'WebP'] },
  { name: 'Edit images', description: 'Crop, resize, compress, and enhance images.', icon: FileImage, options: ['Crop', 'Resize', 'Compress', 'Enhance'] },
  { name: 'Edit documents', description: 'Merge, split, and clean up documents.', icon: FileText, options: ['Merge PDF', 'Split PDF', 'Compress', 'Extract pages'] },
  { name: 'Video tools', description: 'Trim clips and export lightweight previews.', icon: Film, options: ['Trim', 'Compress', 'Extract audio', 'GIF'] }
]

export default function ToolsPage() {
  const [active, setActive] = useState(0)
  const [running, setRunning] = useState(false)
  const [done, setDone] = useState(false)
  const [progress, setProgress] = useState(0)
  const [log, setLog] = useState('')
  const [selectedOption, setSelectedOption] = useState(0)
  const [highQuality, setHighQuality] = useState(true)

  const run = () => {
    setRunning(true)
    setDone(false)
    setProgress(0)
    setLog('Initializing secure environment...')

    let p = 0
    const interval = setInterval(() => {
      p += 15
      setProgress(Math.min(p, 100))
      if (p === 30) setLog('Analyzing input file metadata...')
      if (p === 45) setLog('Applying ' + tools[active].options[selectedOption] + ' transformation...')
      if (p === 75) setLog('Optimizing output payload...')
      if (p >= 100) {
        clearInterval(interval)
        setRunning(false)
        setDone(true)
        setLog('Operation completed successfully in 1.4s.')
      }
    }, 400)
  }

  const ToolIcon = tools[active].icon

  return (
    <main className="tools-page">

      <section className="tools-hero">
        <div className="tool-hero-icon"><WandSparkles size={24} /></div>
        <p className="eyebrow text-blue-400">Advanced operations</p>
        <h1 className="text-[34px] font-bold">Studio Tools</h1>
        <p className="subtitle mt-3 max-w-lg mx-auto text-[15px]">Professional grade file processing happening entirely within a secure, sandboxed environment.</p>
      </section>

      <div className="tools-layout" style={{ gridTemplateColumns: '300px 1fr' }}>
        <nav className="tools-list">
          {tools.map((tool, index) => {
            const Icon = tool.icon
            return (
              <button 
                key={tool.name} 
                className={`tool-card ${active === index ? 'tool-card-active' : ''}`} 
                onClick={() => { setActive(index); setDone(false); setProgress(0); setSelectedOption(0); }}
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

        <section className="tool-panel" style={{ padding: '32px' }}>
          <div className="tool-panel-head mb-8">
            <div className="tool-panel-title">
              <ToolIcon size={22} className="text-blue-400" />
              <div>
                <p className="eyebrow text-zinc-500">Selected workflow</p>
                <h2 className="text-[20px]">{tools[active].name}</h2>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="secondary-button h-[32px]"><Info size={16} /> Guide</button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col">
              <div className="tool-drop" style={{ margin: 0, flex: 1, minHeight: '260px', background: 'var(--workspace-bg)', borderColor: 'var(--border)' }}>
                <div className="drop-icon"><ImageIcon size={24} /></div>
                <h3 className="text-[16px] mt-4">source_asset.raw</h3>
                <p className="text-[13px] text-zinc-500 mb-4">42.8 MB • Raw Data</p>
                <button className="secondary-button border-zinc-700 bg-zinc-800"><RefreshCw size={14} /> Replace input</button>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="p-5 border border-zinc-800 rounded-xl bg-zinc-900/50">
                <p className="eyebrow mb-4 flex items-center gap-2"><SlidersHorizontal size={14} /> Operation Options</p>
                <div className="option-chips mb-5">
                  {tools[active].options.map((option, index) => (
                    <button 
                      className={`option-chip ${index === selectedOption ? 'option-selected' : ''}`} 
                      key={option}
                      onClick={() => setSelectedOption(index)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                
                <div className="flex items-center justify-between py-3 border-t border-zinc-800">
                  <div>
                    <p className="text-[13px] text-zinc-200 font-medium">High Quality Processing</p>
                    <p className="text-[11px] text-zinc-500 mt-1">Preserve maximum fidelity</p>
                  </div>
                  <button 
                    className="w-10 h-5 rounded-full relative transition-colors" 
                    style={{ background: highQuality ? 'var(--primary)' : 'var(--border)' }}
                    onClick={() => setHighQuality(!highQuality)}
                  >
                    <span className="block w-4 h-4 rounded-full bg-white absolute top-0.5 transition-all" style={{ left: highQuality ? '22px' : '2px' }} />
                  </button>
                </div>
              </div>

              <div className="flex flex-col flex-1 justify-end">
                {running || done ? (
                  <div className="p-5 border border-zinc-800 rounded-xl bg-[#111622]">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[13px] font-medium text-blue-200">{done ? 'Processing complete' : 'Processing...'}</span>
                      <span className="text-[12px] font-mono text-blue-400">{progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden mb-3">
                      <div className="h-full bg-blue-500 transition-all duration-300" style={{ width: `${progress}%` }} />
                    </div>
                    <p className="text-[11px] text-zinc-500 font-mono tracking-tight">{log}</p>
                    
                    {done && (
                      <div className="mt-5 flex gap-3">
                        <button className="primary-button flex-1 justify-center h-[38px]"><Download size={16} /> Download</button>
                        <button className="secondary-button h-[38px]" onClick={() => { setDone(false); setProgress(0); }}><Trash2 size={16} /></button>
                      </div>
                    )}
                  </div>
                ) : (
                  <button className="primary-button w-full h-[46px] text-[14px]" onClick={run}>
                    <Zap size={16} /> Start Processing
                  </button>
                )}
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex items-center gap-2 justify-center text-[11px] text-zinc-500">
            <Shield size={14} className="text-emerald-500" /> Files are processed in memory and immediately discarded.
          </div>
        </section>
      </div>
    </main>
  )
}

function Zap({ size, className }: { size: number, className?: string }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
}
