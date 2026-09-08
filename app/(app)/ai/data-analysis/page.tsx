'use client'

import { BarChart3, Database, FileSpreadsheet, Sparkles, UploadCloud, ArrowRight } from 'lucide-react'

export default function DataAnalysisPage() {
  return (
    <div className="page-content">
      <div className="page-heading">
        <div>
          <h1>Data Analysis <span className="heading-dot">.</span></h1>
          <p className="subtitle">
            Extract insights, detect anomalies, and generate charts from your CSV or Excel files automatically.
          </p>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="flex items-center gap-3">
            <div className="stat-icon stat-blue"><FileSpreadsheet size={16} /></div>
            <span className="text-[13px] font-medium text-zinc-400">Total Datasets</span>
          </div>
          <div className="stat-value">124</div>
        </div>
        <div className="stat-card">
          <div className="flex items-center gap-3">
            <div className="stat-icon stat-purple"><BarChart3 size={16} /></div>
            <span className="text-[13px] font-medium text-zinc-400">Reports Generated</span>
          </div>
          <div className="stat-value">85</div>
        </div>
        <div className="stat-card">
          <div className="flex items-center gap-3">
            <div className="stat-icon stat-emerald"><Database size={16} /></div>
            <span className="text-[13px] font-medium text-zinc-400">Rows Processed</span>
          </div>
          <div className="stat-value">1.2M</div>
        </div>
      </div>

      <div className="grid grid-cols-[1fr_300px] gap-6 mt-8">
        <div className="space-y-6">
          <div className="upload-zone group">
            <div className="upload-icon mb-4"><UploadCloud size={20} className="text-blue-400" /></div>
            <p className="text-[14px] font-medium text-zinc-200 mb-1">
              Drag & drop your dataset here
            </p>
            <p className="text-[12px] text-zinc-500 mb-4">Supports CSV, XLSX, JSON (Max 50MB)</p>
            <button className="secondary-button">Browse Files</button>
          </div>

          <div>
            <h3 className="text-[14px] font-semibold text-zinc-200 mb-4">Recent Analyses</h3>
            <div className="table-shell mt-0">
              <div className="table-head" style={{ gridTemplateColumns: 'minmax(200px, 1.8fr) 1fr 1fr' }}>
                <span>Dataset</span>
                <span>Type</span>
                <span>Status</span>
              </div>
              <div className="file-row" style={{ gridTemplateColumns: 'minmax(200px, 1.8fr) 1fr 1fr', paddingLeft: '15px' }}>
                <div className="file-name">
                  <div className="file-icon file-emerald"><FileSpreadsheet size={14} /></div>
                  <span className="text-[14px] font-medium text-zinc-200">Q3_Financials.xlsx</span>
                </div>
                <span className="muted-cell">Trend Prediction</span>
                <span className="text-[12px] font-medium text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full w-fit">Completed</span>
              </div>
              <div className="file-row" style={{ gridTemplateColumns: 'minmax(200px, 1.8fr) 1fr 1fr', paddingLeft: '15px' }}>
                <div className="file-name">
                  <div className="file-icon file-sky"><Database size={14} /></div>
                  <span className="text-[14px] font-medium text-zinc-200">user_behavior_logs.csv</span>
                </div>
                <span className="muted-cell">Anomaly Detection</span>
                <span className="text-[12px] font-medium text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded-full w-fit">Analyzing...</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="insight-card h-fit sticky top-24">
            <div className="insight-glow" />
            <div className="insight-icon mb-4"><Sparkles size={16} /></div>
            <h3 className="text-[16px] font-semibold text-white mb-2">ZFile AI Assistant</h3>
            <p className="text-[13px] text-zinc-400 mb-6 leading-relaxed">
              Upload your dataset and ask our AI to find specific trends, create summaries, or visualize the data for you.
            </p>
            <div className="space-y-3">
              <div className="p-3 bg-white/5 border border-white/10 rounded-lg cursor-pointer hover:bg-white/10 transition">
                <p className="text-[12px] text-zinc-300">"What are the top 3 selling products this quarter?"</p>
              </div>
              <div className="p-3 bg-white/5 border border-white/10 rounded-lg cursor-pointer hover:bg-white/10 transition">
                <p className="text-[12px] text-zinc-300">"Detect any anomalies in the daily active users."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
