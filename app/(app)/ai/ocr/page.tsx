'use client'

import { FileImage, ScanText, Sparkles, UploadCloud, Copy, ArrowRight, Check } from 'lucide-react'
import { useState } from 'react'

export default function OcrExtractionPage() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="page-content">
      <div className="page-heading">
        <div>
          <h1>OCR Extraction <span className="heading-dot">.</span></h1>
          <p className="subtitle">
            Instantly extract text, tables, and data from images and scanned PDFs.
          </p>
        </div>
        <button className="primary-button">
          Batch Extraction <ArrowRight size={14} />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-6 mt-8">
        <div className="space-y-6">
          <div className="upload-zone group min-h-[250px]">
            <div className="upload-icon mb-4"><UploadCloud size={20} className="text-blue-400" /></div>
            <p className="text-[14px] font-medium text-zinc-200 mb-1">
              Drop an image or PDF to extract
            </p>
            <p className="text-[12px] text-zinc-500 mb-4">Supports PNG, JPG, WebP, PDF</p>
            <button className="secondary-button">Browse Files</button>
          </div>

          <div className="glass-panel p-5 rounded-xl border border-white/10 bg-black/20">
            <h3 className="text-[14px] font-semibold text-zinc-200 mb-3 flex items-center gap-2">
              <ScanText size={16} className="text-blue-400" /> Output Settings
            </h3>
            <div className="space-y-4">
              <label className="flex items-center justify-between text-[13px] text-zinc-400 cursor-pointer">
                <span>Auto-detect language</span>
                <div className="check-wrap"><input type="checkbox" defaultChecked /></div>
              </label>
              <label className="flex items-center justify-between text-[13px] text-zinc-400 cursor-pointer">
                <span>Preserve formatting & tables</span>
                <div className="check-wrap"><input type="checkbox" defaultChecked /></div>
              </label>
              <label className="flex items-center justify-between text-[13px] text-zinc-400 cursor-pointer">
                <span>Enhance low-quality images</span>
                <div className="check-wrap"><input type="checkbox" /></div>
              </label>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col h-full border border-white/10 rounded-xl bg-zinc-900/40 backdrop-blur-md overflow-hidden relative">
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/40">
              <div className="flex items-center gap-2">
                <div className="file-icon file-violet w-[24px] h-[24px] rounded"><FileImage size={12} /></div>
                <span className="text-[13px] font-medium text-zinc-200">scan_invoice_2023.jpg</span>
              </div>
              <button 
                onClick={handleCopy}
                className="flex items-center gap-2 text-[12px] font-medium text-zinc-400 hover:text-white transition"
              >
                {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                {copied ? 'Copied' : 'Copy Text'}
              </button>
            </div>
            <div className="flex-1 p-5 overflow-y-auto">
              <div className="prose prose-invert prose-sm">
                <p className="text-zinc-300 leading-relaxed font-mono text-[13px]">
                  INVOICE #INV-2023-089<br/><br/>
                  Date: October 24, 2023<br/>
                  Billed To:<br/>
                  Acme Corporation<br/>
                  123 Tech Lane<br/>
                  San Francisco, CA 94105<br/><br/>
                  Description                 Qty     Rate        Amount<br/>
                  ------------------------------------------------------<br/>
                  Cloud Hosting (1 Year)      1       $1,200.00   $1,200.00<br/>
                  Database Storage Expansion  2       $150.00     $300.00<br/>
                  SSL Certificate Renewal     1       $75.00      $75.00<br/>
                  ------------------------------------------------------<br/>
                  Subtotal:                                       $1,575.00<br/>
                  Tax (8.5%):                                     $133.88<br/>
                  Total Due:                                      $1,708.88
                </p>
              </div>
            </div>
            
            <div className="absolute bottom-4 right-4 flex gap-2">
              <button className="secondary-button !h-[30px] !text-[12px] bg-black/50">Export PDF</button>
              <button className="secondary-button !h-[30px] !text-[12px] bg-black/50">Export TXT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
