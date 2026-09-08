'use client'

import { Code2, Key, Copy, Plus, Trash2, Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'

export default function ApiKeysSettingsPage() {
  const [showKey, setShowKey] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[18px] font-semibold text-zinc-200">Developer API Keys</h2>
        <button className="primary-button h-[32px]"><Plus size={14} /> Generate New Key</button>
      </div>

      <div className="settings-panel p-6">
        <h2 className="text-[16px] font-semibold text-zinc-200 mb-2">Active Secret Keys</h2>
        <p className="text-[13px] text-zinc-400 mb-6">
          These keys allow other apps to access your workspace. Do not share them in public repositories.
        </p>

        <div className="space-y-4">
          <div className="border border-white/10 rounded-xl bg-black/20 overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-white/5 bg-white/5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <Key size={14} />
                </div>
                <div>
                  <h3 className="text-[14px] font-medium text-zinc-200">Production App Key</h3>
                  <p className="text-[12px] text-zinc-500">Created Sep 1, 2026</p>
                </div>
              </div>
              <button className="icon-button !text-red-400 hover:!bg-red-400/10"><Trash2 size={14} /></button>
            </div>
            <div className="p-4 flex gap-3 items-center">
              <div className="flex-1 flex items-center gap-2 bg-black/40 border border-white/10 rounded-lg px-3 py-2">
                <span className="text-[13px] font-mono text-zinc-300 select-all">
                  {showKey ? 'zf_live_9f8d7c6b5a41234567890abcdef' : 'zf_live_*************************'}
                </span>
              </div>
              <button 
                onClick={() => setShowKey(!showKey)}
                className="secondary-button !px-3"
                title={showKey ? "Hide key" : "Show key"}
              >
                {showKey ? <EyeOff size={14} /> : <Eye size={14} />}
              </button>
              <button 
                onClick={handleCopy}
                className="secondary-button !px-3"
              >
                {copied ? <span className="text-emerald-400">Copied!</span> : <><Copy size={14} /> Copy</>}
              </button>
            </div>
          </div>

          <div className="border border-white/10 rounded-xl bg-black/20 overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-white/5 bg-white/5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400">
                  <Code2 size={14} />
                </div>
                <div>
                  <h3 className="text-[14px] font-medium text-zinc-200">Local Development</h3>
                  <p className="text-[12px] text-zinc-500">Created Aug 15, 2026 • Never used</p>
                </div>
              </div>
              <button className="icon-button !text-red-400 hover:!bg-red-400/10"><Trash2 size={14} /></button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="settings-panel p-6 mt-8">
        <h2 className="text-[16px] font-semibold text-zinc-200 mb-2">API Documentation</h2>
        <p className="text-[13px] text-zinc-400 mb-6">
          Learn how to integrate ZFile's powerful capabilities into your own applications using our REST API.
        </p>
        <button className="secondary-button">View Documentation</button>
      </div>
    </>
  )
}
