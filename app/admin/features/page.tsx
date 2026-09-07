import { ToggleLeft, ToggleRight, Info } from 'lucide-react'

const features = [
  { id: 1, name: 'AI File Summarization', description: 'Enable AI-powered summarization for text and PDF documents.', enabled: true },
  { id: 2, name: 'Advanced Image Editor', description: 'Enable the new Canvas-based image editor in the studio.', enabled: true },
  { id: 3, name: 'Public File Sharing', description: 'Allow users to generate public links for their files.', enabled: true },
  { id: 4, name: 'Beta: Real-time Collaboration', description: 'Experimental feature for concurrent document editing.', enabled: false },
]

export default function FeaturesManagement() {
  return (
    <div className="page-content !max-w-[1800px]">
      <div className="page-heading flex items-center justify-between">
        <div>
          <p className="eyebrow mb-2">System & Operations</p>
          <h1>Feature Toggles <span className="heading-dot text-indigo-500">.</span></h1>
          <p className="subtitle">Enable or disable system features dynamically without deploying.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {features.map(feature => (
          <div key={feature.id} className="bg-[#111318] border border-zinc-800 rounded-xl p-5 flex items-start gap-4 transition-colors hover:bg-zinc-900/50">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${feature.enabled ? 'bg-indigo-500/10 text-indigo-400' : 'bg-zinc-800 text-zinc-500'}`}>
              {feature.enabled ? <ToggleRight size={20} /> : <ToggleLeft size={20} />}
            </div>
            <div className="flex-1">
              <h3 className="text-[15px] font-medium text-zinc-200">{feature.name}</h3>
              <p className="text-[13px] text-zinc-500 mt-1 line-clamp-2">{feature.description}</p>
            </div>
            <button className={`w-12 h-6 rounded-full relative transition-colors ${feature.enabled ? 'bg-indigo-500' : 'bg-zinc-700'}`}>
              <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${feature.enabled ? 'left-7' : 'left-1'}`} />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 rounded-xl border border-blue-500/20 bg-blue-500/5 flex items-start gap-3">
        <Info size={18} className="text-blue-400 shrink-0 mt-0.5" />
        <p className="text-[13px] text-blue-200/70 leading-relaxed">
          Changes to feature toggles take effect immediately for all active user sessions. 
          Be cautious when disabling core features during peak usage hours.
        </p>
      </div>
    </div>
  )
}
