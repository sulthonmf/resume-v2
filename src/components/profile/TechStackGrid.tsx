import React from 'react';
import { TechStackItem } from '@/types/portfolio';

interface TechStackGridProps {
  techStack: TechStackItem[];
  locale: 'id' | 'en';
}

export default function TechStackGrid({ techStack, locale }: TechStackGridProps) {
  const isEn = locale === 'en';

  return (
    <div className="glass-card rounded-2xl p-6 space-y-4">
      <div className="flex items-center justify-between border-b border-cyber-border/80 pb-3">
        <h2 className="text-sm font-mono font-bold text-cyber-yellow uppercase tracking-wider flex items-center gap-2">
          <svg className="w-4 h-4 text-cyber-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L5.59 15.12a2 2 0 01-1.022-.547l-1.012-1.012a2 2 0 01-.547-1.022l-.477-2.387a6 6 0 01.517-3.86l.158-.318a6 6 0 00.517-3.86L4.12 2.59a2 2 0 01.547-1.022l1.012-1.012a2 2 0 011.022-.547l2.387-.477a6 6 0 003.86-.517l.318-.158a6 6 0 013.86-.517l2.387.477a2 2 0 011.022.547l1.012 1.012a2 2 0 01.547 1.022l.477 2.387a6 6 0 01-.517 3.86l-.158.318a6 6 0 00-.517 3.86l.477 2.387a2 2 0 01-.547 1.022l-1.012 1.012z"
            />
          </svg>
          {isEn ? 'TECH STACK & CORE SKILLS' : 'TECH STACK & KEAHLIAN UTAMA'}
        </h2>
        <span className="text-[11px] font-mono text-cyber-textMuted">
          {isEn ? 'Frameworks, Tools & Cloud' : 'Framework, Tools & Cloud'}
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 text-xs font-mono">
        {techStack.map((item, idx) => (
          <div
            key={idx}
            className="bg-cyber-panel/40 p-2.5 rounded-xl border border-cyber-border hover:border-cyber-yellow transition-all duration-300"
          >
            <p className="text-[10px] text-cyber-yellow">{item.category}</p>
            <p className="font-bold text-cyber-header mt-1">{item.name}</p>
            <p className="text-[10px] text-cyber-textMuted mt-0.5">{item.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
