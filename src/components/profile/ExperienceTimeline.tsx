import React from 'react';
import { ExperienceItem } from '@/types/portfolio';

interface ExperienceTimelineProps {
  experience: ExperienceItem[];
  locale: 'id' | 'en';
  dict: any;
}

export default function ExperienceTimeline({ experience, locale, dict }: ExperienceTimelineProps) {
  return (
    <div className="glass-card rounded-2xl p-6 space-y-4">
      <div className="flex items-center justify-between border-b border-cyber-border/80 pb-3">
        <h2 className="text-sm font-mono font-bold text-cyber-yellow uppercase tracking-wider flex items-center gap-2">
          <svg className="w-4 h-4 text-cyber-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2 2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          {dict.title}
        </h2>
        <span className="text-[11px] font-mono text-cyber-textMuted">
          {dict.sub}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {experience.map((job, idx) => (
          <div
            key={idx}
            className="bg-cyber-dark/60 p-4 rounded-xl border border-cyber-border/80 hover:border-cyber-yellow/60 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-1">
              <span
                className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                  job.isCurrent
                    ? 'bg-cyber-yellow/10 text-cyber-yellow'
                    : 'text-cyber-textMuted bg-cyber-panel/50 border border-cyber-border'
                }`}
              >
                {job.period}
              </span>
              <p className="text-xs font-bold text-cyber-header mt-2">{job.role}</p>
              <p className="text-[11px] text-cyber-text">{job.company}</p>
            </div>
            <p className="text-[10px] text-cyber-textMuted mt-2 leading-relaxed border-t border-cyber-border/40 pt-2">
              {job.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
