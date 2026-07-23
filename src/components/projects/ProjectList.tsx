import React from 'react';
import { Project } from '@/types/portfolio';
import { FilterType } from '@/hooks/usePortfolioState';

interface ProjectListProps {
  projects: Project[];
  filteredProjects: Project[];
  activeFilter: FilterType;
  currentProjectId: number;
  onFilterChange: (filter: FilterType) => void;
  onProjectSelect: (id: number) => void;
  locale: 'id' | 'en';
  dict: any;
}

export default function ProjectList({
  projects,
  filteredProjects,
  activeFilter,
  currentProjectId,
  onFilterChange,
  onProjectSelect,
  locale,
  dict,
}: ProjectListProps) {
  const totalCount = projects.length;
  const webCount = projects.filter((p) => p.type === 'web').length;
  const mobileCount = projects.filter((p) => p.type === 'mobile').length;

  return (
    <div className="lg:col-span-5 space-y-4">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyber-yellow">
            {dict.title}
          </span>
          <span className="text-[11px] font-mono text-cyber-textMuted">
            {totalCount} {dict.separate}
          </span>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 font-mono text-[10px] sm:text-xs">
          <button
            onClick={() => onFilterChange('all')}
            className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-cyber-yellow text-cyber-dark font-bold'
                : 'bg-cyber-card text-cyber-textMuted border border-cyber-border hover:text-cyber-header'
            }`}
          >
            {dict.all} ({totalCount})
          </button>
          <button
            onClick={() => onFilterChange('web')}
            className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
              activeFilter === 'web'
                ? 'bg-cyber-yellow text-cyber-dark font-bold'
                : 'bg-cyber-card text-cyber-textMuted border border-cyber-border hover:text-cyber-header'
            }`}
          >
            WEB ({webCount})
          </button>
          <button
            onClick={() => onFilterChange('mobile')}
            className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
              activeFilter === 'mobile'
                ? 'bg-cyber-yellow text-cyber-dark font-bold'
                : 'bg-cyber-card text-cyber-textMuted border border-cyber-border hover:text-cyber-header'
            }`}
          >
            MOBILE ({mobileCount})
          </button>
        </div>
      </div>

      {/* Interactive Project List Grid / Mobile Ticker */}
      <div className="flex lg:flex-col overflow-x-auto lg:overflow-y-auto overflow-y-hidden lg:overflow-x-hidden gap-3 max-w-full lg:max-h-[500px] pb-3 lg:pb-0 pr-1 sm:pr-2 no-scrollbar scroll-smooth snap-x snap-mandatory">
        {filteredProjects.map((p) => {
          const isActive = p.id === currentProjectId;
          const isWeb = p.type === 'web';

          return (
            <div
              key={p.id}
              onClick={() => onProjectSelect(p.id)}
              className={`p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between cursor-pointer group flex-shrink-0 lg:flex-shrink w-[280px] sm:w-[320px] lg:w-auto snap-center ${
                isActive
                  ? 'bg-cyber-panel/60 border-cyber-yellow shadow-lg shadow-cyber-yellow/10'
                  : 'bg-cyber-card border-cyber-border hover:border-cyber-borderLight hover:bg-cyber-panel/20'
              }`}
            >
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded ${
                      isWeb
                        ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                        : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                    }`}
                  >
                    {isWeb ? 'WEB APP' : 'MOBILE APP'}
                  </span>
                  <span className="text-[10px] font-mono text-cyber-textMuted">
                    {p.year}
                  </span>
                </div>
                <h3
                  className={`text-sm font-bold tracking-tight transition-colors mt-2 ${
                    isActive ? 'text-cyber-yellow' : 'text-cyber-header group-hover:text-cyber-yellow'
                  }`}
                >
                  {p.title}
                </h3>
                <p className="text-cyber-textMuted text-xs line-clamp-2 mt-1 leading-relaxed">
                  {p.description}
                </p>
              </div>

              {/* Stack items listing */}
              <div className="flex flex-wrap gap-1 mt-3">
                {p.badges.slice(0, 3).map((t, i) => (
                  <span
                    key={i}
                    className="text-[9px] font-mono text-cyber-text/80 bg-cyber-dark/40 px-2 py-0.5 rounded border border-cyber-border/40"
                  >
                    {t}
                  </span>
                ))}
                {p.badges.length > 3 && (
                  <span className="text-[9px] font-mono text-cyber-yellow/80 bg-cyber-yellow/5 px-2 py-0.5 rounded border border-cyber-yellow/10">
                    +{p.badges.length - 3}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
