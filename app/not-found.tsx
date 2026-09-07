'use client'

import Link from 'next/link'
import { Search, Home, FolderX } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0b0e] flex flex-col items-center justify-center p-6 overflow-hidden relative">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)]" />

      {/* Glow Effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-2xl text-center">
        {/* Giant Number */}
        <div className="relative flex items-center justify-center mb-8">
          <h1 className="text-[180px] md:text-[240px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-zinc-800 to-zinc-900/50 select-none">
            404
          </h1>
          {/* Floating Element overlapping the 404 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#111318] border border-zinc-800 p-6 rounded-3xl shadow-2xl shadow-indigo-500/10 rotate-[-10deg] backdrop-blur-xl">
            <div className="w-16 h-16 rounded-xl bg-red-500/10 flex items-center justify-center border border-red-500/20">
              <FolderX size={32} className="text-red-400" />
            </div>
          </div>
        </div>

        <h2 className="text-[28px] font-semibold text-zinc-100 mb-4 tracking-tight">
          File or page not found
        </h2>
        
        <p className="text-[15px] text-zinc-400 max-w-md mx-auto mb-10 leading-relaxed">
          The link might be corrupted, the file could have been deleted, or you simply took a wrong turn in the cloud.
        </p>

        {/* Search & Actions Box */}
        <div className="max-w-md mx-auto bg-[#111318] border border-zinc-800 rounded-xl p-3 flex items-center justify-between shadow-xl">
          <div className="flex-1 flex items-center gap-3 px-3">
            <Search size={18} className="text-zinc-500" />
            <input 
              type="text" 
              placeholder="Try searching for it..." 
              className="bg-transparent border-none outline-none text-[14px] text-zinc-200 w-full placeholder:text-zinc-600"
              disabled
            />
          </div>
          <Link href="/">
            <button className="primary-button h-[38px] px-6 bg-indigo-600 hover:bg-indigo-500 border-indigo-500">
              <Home size={15} /> Go Home
            </button>
          </Link>
        </div>
        
        <div className="mt-12 text-[13px] text-zinc-600 font-mono">
          ERROR_CODE: FILE_NOT_FOUND
        </div>
      </div>
    </div>
  )
}
