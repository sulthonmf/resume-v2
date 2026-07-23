import React from 'react';

export default function Footer() {
  return (
    <footer className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 border-t border-cyber-border/80 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-500 font-mono mt-auto">
      <p>© 2026 Sulthon Maulana Fathuddin. Senior Software Engineer.</p>
      
      {/* <div className="flex items-center gap-4">
        <a
          href="https://dev-sulthon.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyber-yellow hover:underline flex items-center gap-1 transition-all"
        >
          <span>dev-sulthon.vercel.app</span>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div> */}
    </footer>
  );
}
