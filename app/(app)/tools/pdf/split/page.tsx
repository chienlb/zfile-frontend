'use client'

import { useState } from 'react'
import { ArrowLeft, Check, FileText, Scissors, Settings2, Zap } from 'lucide-react'
import Link from 'next/link'

export default function SplitPDFPage() {
  const [file, setFile] = useState<{name: string, pages: number, size: string} | null>({
    name: 'Annual-Report-2024.pdf', pages: 45, size: '8.4 MB'
  })
  const [processing, setProcessing] = useState(false)
  const [done, setDone] = useState(false)
  const [mode, setMode] = useState<'ranges' | 'extract'>('ranges')

  const handleSplit = () => {
    setProcessing(true)
    setTimeout(() => {
      setProcessing(false)
      setDone(true)
    }, 2500)
  }

  return (
    <div className="page-content !max-w-[1000px]">
      <div className="mb-6">
        <Link href="/tools" className="text-[13px] text-zinc-500 hover:text-zinc-300 flex items-center gap-2 w-fit">
          <ArrowLeft size={14} /> Back to Tools
        </Link>
      </div>

      <div className="page-heading">
        <div>
          <p className="eyebrow mb-2">PDF Tools</p>
          <h1>Split PDF <span className="heading-dot text-rose-500">.</span></h1>
          <p className="subtitle">Extract pages or split a PDF into multiple files.</p>
        </div>
      </div>

      {!done ? (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-[1fr_320px] gap-8">
          <div className="bg-[#111318] border border-zinc-800 rounded-xl overflow-hidden flex flex-col">
            <div className="p-4 border-b border-zinc-800 flex justify-between items-center bg-zinc-900/30">
              <span className="text-[14px] font-medium text-zinc-200">Selected File</span>
              <button className="text-[13px] text-blue-400 hover:text-blue-300">
                Change file
              </button>
            </div>
            
            <div className="p-8 flex-1 flex flex-col items-center justify-center bg-[#0a0b0e]">
              <div className="w-24 h-24 rounded-2xl bg-rose-500/10 text-rose-400 border border-rose-500/20 flex flex-col items-center justify-center mb-6 shadow-[0_0_40px_-10px_rgba(244,63,94,0.3)]">
                <FileText size={40} />
                <span className="text-[11px] font-bold mt-2 uppercase tracking-widest">PDF</span>
              </div>
              <h3 className="text-[18px] font-bold text-zinc-100">{file?.name}</h3>
              <p className="text-[14px] text-zinc-500 mt-1">{file?.pages} pages • {file?.size}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-[#111318] border border-zinc-800 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <Settings2 size={16} className="text-zinc-400" />
                <h3 className="text-[15px] font-bold text-zinc-200">Split Mode</h3>
              </div>
              
              <div className="flex bg-[#0d0f13] border border-zinc-800 rounded-lg p-1 mb-6">
                <button 
                  className={`flex-1 py-1.5 text-[13px] font-medium rounded-md transition-colors ${mode === 'ranges' ? 'bg-zinc-800 text-zinc-100 shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}
                  onClick={() => setMode('ranges')}
                >
                  Custom Ranges
                </button>
                <button 
                  className={`flex-1 py-1.5 text-[13px] font-medium rounded-md transition-colors ${mode === 'extract' ? 'bg-zinc-800 text-zinc-100 shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}
                  onClick={() => setMode('extract')}
                >
                  Extract Pages
                </button>
              </div>

              {mode === 'ranges' ? (
                <div className="space-y-4 animate-in fade-in zoom-in-95 duration-200">
                  <div>
                    <label className="auth-label mb-2 block">Ranges (e.g., 1-5, 8, 11-13)</label>
                    <div className="auth-input h-[38px]">
                      <input type="text" placeholder="1-5" />
                    </div>
                  </div>
                  <label className="flex items-center gap-3 cursor-pointer pt-2">
                    <input type="checkbox" className="w-4 h-4 rounded border-zinc-700 bg-zinc-800 text-blue-500" />
                    <span className="text-[13px] text-zinc-300">Merge ranges into one file</span>
                  </label>
                </div>
              ) : (
                <div className="space-y-4 animate-in fade-in zoom-in-95 duration-200">
                  <div>
                    <label className="auth-label mb-2 block">Extract every page into a PDF</label>
                    <p className="text-[13px] text-zinc-500 mb-3">This will create {file?.pages} separate PDF files.</p>
                  </div>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-zinc-700 bg-zinc-800 text-blue-500" defaultChecked />
                    <span className="text-[13px] text-zinc-300">Package inside a ZIP</span>
                  </label>
                </div>
              )}
            </div>

            <button 
              className="primary-button w-full h-[42px] bg-rose-600 hover:bg-rose-500 shadow-rose-500/20"
              onClick={handleSplit}
              disabled={processing}
            >
              {processing ? (
                <>Processing...</>
              ) : (
                <><Scissors size={16} /> Split PDF</>
              )}
            </button>
            <p className="text-[12px] text-zinc-500 text-center">Uses 1 Convert Unit.</p>
          </div>
        </div>
      ) : (
        <div className="mt-12 bg-[#111318] border border-emerald-500/30 rounded-xl p-12 flex flex-col items-center justify-center text-center">
          <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6 border border-emerald-500/30">
            <Check size={32} />
          </div>
          <h2 className="text-[24px] font-bold text-zinc-100 mb-2">PDF Split Successfully!</h2>
          <p className="text-[15px] text-zinc-400 mb-8 max-w-md">
            Your file has been split. {mode === 'extract' ? 'A ZIP archive with 45 files' : '2 files'} are ready for download.
          </p>
          <div className="flex gap-4">
            <button className="primary-button h-[42px] px-8 bg-emerald-600 hover:bg-emerald-500">
              Download ZIP
            </button>
            <button className="secondary-button h-[42px] px-6" onClick={() => setDone(false)}>
              Split Another
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
