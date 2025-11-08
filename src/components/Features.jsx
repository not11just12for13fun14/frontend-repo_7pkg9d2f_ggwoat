import React from 'react';
import { Shield, Zap, LineChart, Workflow } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Auto-categorization',
    desc: 'AI-powered rules classify every transaction with 99% accuracy and learn from corrections.'
  },
  {
    icon: LineChart,
    title: 'Cashflow forecasts',
    desc: 'Projected inflows and outflows with scenario planning to eliminate surprises.'
  },
  {
    icon: Workflow,
    title: 'No-code workflows',
    desc: 'Trigger payouts, approvals, and notifications based on conditions you define.'
  },
  {
    icon: Shield,
    title: 'Bank-grade security',
    desc: 'SOC 2, SSO, role-based access, and field-level encryption out of the box.'
  }
];

function Features() {
  return (
    <section id="features" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">Built for modern finance</h2>
          <p className="mt-3 text-white/70">
            Everything you need to automate reconciliation, approvals, and payouts while keeping full control.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-0.5 hover:bg-white/[0.07]"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/30">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
