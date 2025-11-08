import React from 'react';

function CTA() {
  return (
    <section id="pricing" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">Start automating in minutes</h2>
        <p className="mx-auto mt-3 max-w-xl text-white/75">
          Connect a bank, import your ledger, and watch your workflows run. Try it free for 14 days—no credit card required.
        </p>

        <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur">
          <input
            type="email"
            placeholder="you@company.com"
            className="w-56 rounded-xl bg-transparent px-4 py-3 text-sm text-white placeholder-white/50 outline-none"
          />
          <button className="rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-emerald-400">
            Get early access
          </button>
        </div>

        <p className="mt-4 text-xs text-white/50">By continuing you agree to our Terms and Privacy Policy.</p>
      </div>
    </section>
  );
}

export default CTA;
