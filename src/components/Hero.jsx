import React from 'react';
import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative w-full min-h-[88vh] overflow-hidden bg-slate-950 text-white">
      {/* Spline 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Visual overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 text-center sm:pt-28">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-medium text-white/90 backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Realtime finance automation
        </span>

        <h1 className="font-display mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
          Automate your cashflow with
          <span className="bg-gradient-to-r from-emerald-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent"> AI precision</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base text-white/75 sm:text-lg">
          Connect your banks, classify transactions, reconcile in seconds, and trigger
          payouts automatically. Built for modern finance teams that value speed and accuracy.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300"
          >
            Get Started
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            Watch Demo
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 grid w-full max-w-3xl grid-cols-2 items-center gap-6 sm:grid-cols-4">
          {['Plaid', 'Stripe', 'QuickBooks', 'NetSuite'].map((brand) => (
            <div
              key={brand}
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-center text-xs text-white/70 backdrop-blur-sm"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
