'use client'

import { useState } from 'react'
import { ArrowLeft, Check, FileText, Plus, Settings2, Trash2, Zap } from 'lucide-react'
import Link from 'next/link'

export default function MergePDFPage() {
  const [files, setFiles] = useState([
    { id: 1, name: 'Q1-Financial-Report.pdf', pages: 12, size: '2.4 MB' },
    { id: 2, name: 'Appendix-Data.pdf', pages: 4, size: '1.1 MB' }
  ])
  const [processing, setProcessing] = useState(false)
  const [done, setDone] = useState(false)

  const handleMerge = () => {
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
          <h1>Merge PDF <span className="heading-dot text-rose-500">.</span></h1>
          <p className="subtitle">Combine multiple PDFs into a single document.</p>
        </div>
      </div>

      {!done ? (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-[1fr_320px] gap-8">
          <div className="bg-[#111318] border border-zinc-800 rounded-xl overflow-hidden flex flex-col">
            <div className="p-4 border-b border-zinc-800 flex justify-between items-center bg-zinc-900/30">
              <span className="text-[14px] font-medium text-zinc-200">Files to merge ({files.length})</span>
              <button className="text-[13px] text-blue-400 hover:text-blue-300 flex items-center gap-1">
                <Plus size={14} /> Add more files
              </button>
            </div>
            
            <div className="p-4 flex-1 overflow-y-auto">
              <div className="space-y-3">
                {files.map((f, index) => (
                  <div key={f.id} className="flex items-center gap-4 p-4 rounded-lg border border-zinc-800 bg-[#0d0f13] hover:border-zinc-700 transition-colors group cursor-move">
                    <span className="text-[16px] font-bold text-zinc-700 w-6">{index + 1}</span>
                    <div className="w-10 h-10 rounded-lg bg-rose-500/10 text-rose-400 border border-rose-500/20 flex items-center justify-center shrink-0">
                      <FileText size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[14px] font-medium text-zinc-200 truncate">{f.name}</p>
                      <p className="text-[12px] text-zinc-500">{f.pages} pages • {f.size}</p>
                    </div>
                    <button className="p-2 text-zinc-600 hover:text-red-400 hover:bg-red-500/10 rounded-md transition-colors opacity-0 group-hover:opacity-100">
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 border-2 border-dashed border-zinc-800 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:border-zinc-700 hover:bg-zinc-900/30 transition-colors cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 mb-3">
                  <Plus size={18} />
                </div>
                <p className="text-[14px] font-medium text-zinc-300">Drag more PDFs here</p>
                <p className="text-[12px] text-zinc-600 mt-1">Or click to browse files</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-[#111318] border border-zinc-800 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <Settings2 size={16} className="text-zinc-400" />
                <h3 className="text-[15px] font-bold text-zinc-200">Settings</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="auth-label mb-2 block">Output Filename</label>
                  <div className="auth-input h-[38px]">
                    <input type="text" defaultValue="merged-document.pdf" />
                  </div>
                </div>
                
                <div className="pt-4 border-t border-zinc-800">
                  <p className="text-[13px] text-zinc-400 mb-2">Options</p>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-zinc-700 bg-zinc-800 text-blue-500" defaultChecked />
                    <span className="text-[13px] text-zinc-300">Add blank page between files</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer mt-3">
                    <input type="checkbox" className="w-4 h-4 rounded border-zinc-700 bg-zinc-800 text-blue-500" />
                    <span className="text-[13px] text-zinc-300">Normalize page sizes</span>
                  </label>
                </div>
              </div>
            </div>

            <button 
              className="primary-button w-full h-[42px] bg-rose-600 hover:bg-rose-500 shadow-rose-500/20"
              onClick={handleMerge}
              disabled={processing || files.length < 2}
            >
              {processing ? (
                <>Processing...</>
              ) : (
                <><Zap size={16} /> Merge {files.length} PDFs</>
              )}
            </button>
            
            <p className="text-[12px] text-zinc-500 text-center">
              Uses 1 Convert Unit.
            </p>
          </div>
        </div>
      ) : (
        <div className="mt-12 bg-[#111318] border border-emerald-500/30 rounded-xl p-12 flex flex-col items-center justify-center text-center">
          <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6 border border-emerald-500/30">
            <Check size={32} />
          </div>
          <h2 className="text-[24px] font-bold text-zinc-100 mb-2">PDFs Merged Successfully!</h2>
          <p className="text-[15px] text-zinc-400 mb-8 max-w-md">
            Your files have been combined into <b>merged-document.pdf</b> (16 pages, 3.4 MB).
          </p>
          
          <div className="flex gap-4">
            <button className="primary-button h-[42px] px-8 bg-emerald-600 hover:bg-emerald-500">
              Download File
            </button>
            <button className="secondary-button h-[42px] px-6" onClick={() => setDone(false)}>
              Merge More
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
