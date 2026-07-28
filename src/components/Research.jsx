import React from 'react'
import { FileText, Zap, Activity, Award } from 'lucide-react'

const METRICS = [
  { label: 'Precision',      value: '98.7%', color: 'text-cyan-400' },
  { label: 'Recall',         value: '99.1%', color: 'text-cyan-400' },
  { label: 'F1 Score',       value: '98.9%', color: 'text-[#ff6b00]' },
  { label: 'FLOPs Reduction', value: '41%',  color: 'text-emerald-400' },
]

export default function Research() {
  return (
    <section className="section-divider py-24 sm:py-32 relative z-10">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">

        {/* Header */}
        <div className="mb-14">
          <span className="inline-flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-gray-500 mb-5">
            <span className="h-px w-7 bg-white/15" aria-hidden="true" />
            IEEE PUBLISHED RESEARCH
          </span>
          <h2 className="font-display text-[2rem] sm:text-[2.6rem] font-bold text-white leading-tight tracking-tight mt-5 max-w-2xl">
            Hallucination Mitigation<br />in Transformer Decoding
          </h2>
        </div>

        {/* Feature Card */}
        <div
          className="glass-card rounded-2xl border border-amber-500/20 overflow-hidden relative"
          style={{ background: 'linear-gradient(135deg, rgba(18,21,34,0.9) 0%, rgba(11,13,20,0.95) 50%, rgba(18,21,34,0.9) 100%)' }}
        >
          {/* Ambient glow */}
          <div
            className="absolute top-0 right-0 w-80 h-80 pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(255,165,0,0.08) 0%, transparent 70%)' }}
          />

          <div className="p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">

            {/* Left: Paper Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs">
                <Award className="w-4 h-4" />
                <span>Contributor · IEEE Research Paper (April 2026)</span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-snug">
                Hallucination Mitigation in Transformer-Based Decoding via Dual-Stream Fact Verification
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed">
                Contributed to a dual-stream (Knowledge Stream + Generation Stream) transformer
                architecture coupled via{' '}
                <strong className="text-cyan-400">Bidirectional Cross-Stream Attention (BCSA)</strong>{' '}
                and evaluated on a comprehensive 49,951-fact benchmark.
              </p>

              {/* Key Contributions */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Zap className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white mb-0.5">Adaptive Early-Exit Routing</p>
                    <p className="text-xs text-gray-400">
                      Dynamically bypasses heavy layers when epistemic confidence is saturated, yielding a 41% FLOPs reduction.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Activity className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white mb-0.5">Dynamic Veracity Threshold Engine (DVTE)</p>
                    <p className="text-xs text-gray-400">
                      Real-time gating across factual query distributions to ensure zero hallucination output on the benchmark.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Metrics Grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {METRICS.map((m, idx) => (
                <div key={idx} className="glass-card p-5 rounded-2xl border border-white/08 text-center">
                  <div className={`font-mono text-3xl font-bold mb-1.5 ${m.color}`}>{m.value}</div>
                  <div className="font-display text-xs font-semibold text-white">{m.label}</div>
                  <div className="font-mono text-[10px] text-gray-500 mt-1">Benchmark Verified</div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
