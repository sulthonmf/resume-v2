import React from 'react';
import { Stat, Education } from '@/types/portfolio';

interface StatsCardProps {
  stats: Stat[];
  education: Education[];
  locale: 'id' | 'en';
  dict: any;
}

export default function StatsCard({ stats, education, locale, dict }: StatsCardProps) {
  return (
    <div className="lg:col-span-5 flex flex-col gap-6">
      
      {/* Dynamic Grid Counter Stats */}
      <div className="grid grid-cols-2 gap-4 flex-1">
        {stats.map((stat, idx) => {
          const isYellow = stat.theme === 'yellow';
          const themeClass = isYellow
            ? 'border-t-4 border-t-cyber-yellow text-cyber-yellow'
            : 'border-t-4 border-t-cyber-accent text-cyber-accent';
          
          const labelColor = isYellow ? 'text-cyber-yellow/80' : 'text-cyber-accent/80';

          return (
            <div
              key={idx}
              className={`glass-card rounded-2xl p-5 flex flex-col justify-center items-center text-center border-l border-r border-b border-cyber-border/80 ${themeClass} relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300`}
            >
              {/* Decorative Subtle Background Ticker */}
              <div className="absolute inset-0 bg-cyber-dark/10 pointer-events-none"></div>

              <span className="text-3xl sm:text-4xl font-extrabold tracking-tight font-mono drop-shadow-md group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </span>
              <span className={`text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider mt-2 ${labelColor}`}>
                {stat.label}
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono text-cyber-textMuted mt-1">
                {stat.sub}
              </span>
            </div>
          );
        })}
      </div>

      {/* Localized Education History Timeline */}
      <div className="glass-card rounded-2xl p-6 sm:p-7 border-l border-r border-b border-cyber-border/80 border-t-4 border-t-cyber-border">
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-cyber-border/80 pb-3">
            <h2 className="text-xs sm:text-sm font-mono font-bold text-cyber-text uppercase tracking-wider flex items-center gap-2">
              <svg className="w-4 h-4 text-cyber-textMuted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
              </svg>
              {dict.education}
            </h2>
            <span className="text-[10px] font-mono text-cyber-textMuted">
              {dict.formal}
            </span>
          </div>

          <div className="space-y-3">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row justify-between sm:items-start gap-1 sm:gap-4 text-xs border-b border-cyber-border/40 pb-2.5 last:border-b-0 last:pb-0"
              >
                <div className="text-left">
                  <h4 className="font-semibold text-cyber-header text-xs sm:text-sm">{edu.degree}</h4>
                  <p className="text-cyber-textMuted text-[10px] sm:text-xs mt-0.5">{edu.institution}</p>
                </div>
                <span className="text-[9px] sm:text-[10px] font-mono text-cyber-yellow bg-cyber-yellow/10 border border-cyber-yellow/20 px-2 py-0.5 rounded flex-shrink-0 self-start sm:self-auto">
                  {edu.period}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
