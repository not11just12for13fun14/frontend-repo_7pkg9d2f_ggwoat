import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 z-30 bg-slate-950/70 backdrop-blur border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500 text-slate-900 font-bold">ƒ</div>
            <span className="text-sm font-semibold text-white">Flux Finance</span>
          </div>
          <nav className="hidden gap-6 text-sm text-white/70 sm:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#" className="hover:text-white">Docs</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#" className="hidden rounded-xl border border-white/15 px-3 py-1.5 text-sm text-white/80 hover:bg-white/10 sm:inline-flex">Sign in</a>
            <a href="#pricing" className="rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-emerald-400">Get Started</a>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
