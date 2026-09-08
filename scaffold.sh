#!/bin/bash
mkdir -p app/\(app\)/tools/pdf/merge
mkdir -p app/\(app\)/tools/pdf/split
mkdir -p app/\(app\)/tools/image/compress
mkdir -p app/\(app\)/tools/image/remove-bg
mkdir -p app/\(app\)/tools/video/trim
mkdir -p app/\(app\)/tools/document/watermark
mkdir -p app/\(app\)/tools/archive/create
mkdir -p app/\(app\)/ai/data-analysis
mkdir -p app/\(app\)/ai/ocr
mkdir -p app/\(app\)/ai/translate
mkdir -p app/\(app\)/share/manage
mkdir -p app/admin/queue
mkdir -p app/admin/workers
mkdir -p app/admin/abuse
mkdir -p app/admin/audit

function create_page() {
  local path=$1
  local title=$2
  local icon=$3
  cat << 'PAGE' > "app/$path/page.tsx"
import { $icon, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="page-content !max-w-[1200px]">
      <div className="mb-6">
        <Link href="/tools" className="text-[13px] text-zinc-500 hover:text-zinc-300 flex items-center gap-2 w-fit">
          <ArrowLeft size={14} /> Back
        </Link>
      </div>
      <div className="page-heading">
        <div>
          <p className="eyebrow mb-2">Feature Module</p>
          <h1>$title <span className="heading-dot text-blue-500">.</span></h1>
          <p className="subtitle">Advanced functionality panel.</p>
        </div>
      </div>
      <div className="bg-[#111318] border border-zinc-800 rounded-xl p-16 flex flex-col items-center justify-center text-center mt-8">
        <div className="w-16 h-16 rounded-2xl bg-zinc-800/50 flex items-center justify-center text-zinc-400 mb-6 border border-zinc-700/50">
          <$icon size={28} />
        </div>
        <h2 className="text-[18px] font-bold text-zinc-200 mb-2">$title Interface</h2>
        <p className="text-[14px] text-zinc-500 max-w-md">
          This module is part of the extensive feature suite. The UI components for $title are currently being connected to the processing workers.
        </p>
        <button className="primary-button mt-8 h-[38px]">
          Select File to Process
        </button>
      </div>
    </div>
  )
}
PAGE
}

create_page "(app)/tools/pdf/merge" "Merge PDF" "Files"
create_page "(app)/tools/pdf/split" "Split PDF" "Scissors"
create_page "(app)/tools/image/compress" "Compress Image" "Minimize"
create_page "(app)/tools/image/remove-bg" "Background Removal" "Eraser"
create_page "(app)/tools/video/trim" "Trim Video" "Scissors"
create_page "(app)/tools/document/watermark" "Add Watermark" "Droplet"
create_page "(app)/tools/archive/create" "Create Archive" "FileArchive"
create_page "(app)/ai/data-analysis" "AI Data Analysis" "LineChart"
create_page "(app)/ai/ocr" "AI OCR Extraction" "ScanText"
create_page "(app)/ai/translate" "AI Document Translation" "Languages"
create_page "(app)/share/manage" "Manage Share Links" "Link2"
create_page "admin/queue" "Processing Queue Monitoring" "ListTree"
create_page "admin/workers" "Workers Monitoring" "Cpu"
create_page "admin/abuse" "Abuse Reports" "ShieldAlert"
create_page "admin/audit" "System Audit Logs" "History"

chmod +x scaffold.sh
./scaffold.sh
