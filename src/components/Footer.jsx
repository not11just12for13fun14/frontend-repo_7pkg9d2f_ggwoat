import React from 'react';
import { Github, Twitter, Shield } from 'lucide-react';

function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-slate-950 py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500 text-slate-900 font-bold">ƒ</div>
          <div>
            <p className="font-semibold">Flux Finance</p>
            <p className="text-xs text-white/60">Automation for modern teams</p>
          </div>
        </div>

        <div className="flex items-center gap-5 text-white/70">
          <a href="#" className="hover:text-white">Pricing</a>
          <a href="#" className="hover:text-white">Docs</a>
          <a href="#" className="hover:text-white inline-flex items-center gap-1"><Shield size={14}/>Security</a>
        </div>

        <div className="flex items-center gap-4 text-white/70">
          <a href="#" aria-label="Github" className="hover:text-white"><Github size={18}/></a>
          <a href="#" aria-label="Twitter" className="hover:text-white"><Twitter size={18}/></a>
        </div>
      </div>
      <div className="mx-auto mt-6 max-w-6xl px-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Flux Finance, Inc. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
