'use client';

import React, { useState, useEffect } from 'react';
import { Project } from '@/types/portfolio';

interface DeviceViewerProps {
  project: Project;
  locale: 'id' | 'en';
  dict: any;
}

export default function DeviceViewer({ project, locale, dict }: DeviceViewerProps) {
  const isWeb = project.type === 'web';
  const showConfidential = project.isConfidential === true;

  // Toggle state to switch between static screenshot and interactive iframe preview
  const [viewMode, setViewMode] = useState<'screenshot' | 'live'>('screenshot');

  // Reset view mode to screenshot when active project shifts
  useEffect(() => {
    setViewMode('screenshot');
  }, [project.id]);

  // Render Red-Glowing Confidential NDA Warning panel if project is marked confidential
  if (showConfidential) {
    return (
      <div className="lg:col-span-7 space-y-4 w-full">
        <div className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center min-h-[420px] relative overflow-hidden border-2 border-red-500/50 bg-red-950/10">
          {/* Cyber Alert Scan Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 via-transparent to-transparent pointer-events-none animate-pulse"></div>

          {/* Glowing Red Warning Frame */}
          <div className="flex flex-col items-center text-center space-y-4 max-w-md z-10 px-4">
            {/* Warning Shield Icon */}
            <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.4)] animate-[bounce_2s_infinite]">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m0-8v6m0-8a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-mono font-bold tracking-widest text-red-400 uppercase px-3 py-1 rounded bg-red-500/10 border border-red-500/20">
                {dict.restricted}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-cyber-header uppercase tracking-wider text-red-400">
                {dict.confidentialTitle}
              </h3>
              <p className="text-xs text-cyber-textMuted leading-relaxed">
                {dict.confidentialDesc}
              </p>
            </div>

            <div className="pt-4 border-t border-red-500/20 w-full text-center">
              <span className="text-[9px] font-mono text-red-400/80 animate-pulse">
                {dict.securityStatus}
              </span>
            </div>
          </div>
        </div>

        {/* Project Note/Alert */}
        {project.note && (
          <div className="glass-card p-3.5 rounded-xl border border-cyber-yellow/20 bg-cyber-yellow/5 flex gap-2.5 items-start">
            <span className="text-cyber-yellow text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider mt-0.5 flex-shrink-0 px-1.5 py-0.5 rounded bg-cyber-yellow/10">
              NOTE
            </span>
            <p className="text-[10px] sm:text-xs text-cyber-textMuted leading-relaxed">
              {project.note}
            </p>
          </div>
        )}

        {/* Active Technical Badges Box */}
        <div className="glass-card p-4 rounded-xl space-y-2 border-l-2 border-l-cyber-yellow">
          <div className="flex justify-between items-center gap-2">
            <span className="text-[10px] sm:text-[11px] font-mono text-cyber-yellow font-bold uppercase tracking-wider">
              {dict.techHeader}
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono text-cyber-textMuted">
              {project.year}
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.badges.map((badge, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 text-[9px] sm:text-[10px] font-mono rounded bg-cyber-dark text-slate-300 border border-cyber-border"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Render Mockup Display with either screenshot or stylized vector dashboard
  return (
    <div className="lg:col-span-7 space-y-4 w-full">
      {/* Device Stage Container */}
      <div className="glass-card p-4 sm:p-6 rounded-2xl flex flex-col items-center justify-center min-h-[420px] relative overflow-hidden">
        
        {/* Dynamic Device Badge */}
        <div className="w-full flex items-center justify-between border-b border-cyber-border pb-3 mb-4 gap-2 flex-wrap sm:flex-nowrap">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyber-yellow animate-pulse flex-shrink-0"></span>
            <span className="font-mono text-[9px] sm:text-xs font-bold text-cyber-yellow uppercase tracking-wider">
              {isWeb ? dict.laptopView : dict.phoneView}
            </span>
          </div>
          <span className="text-[9px] sm:text-[11px] font-mono text-cyber-textMuted bg-cyber-dark px-2.5 py-1 rounded-md border border-cyber-border/80 truncate">
            {project.client}
          </span>
        </div>

        {/* Dynamic Screen Area with key for transition trigger */}
        <div key={project.id} className="w-full flex flex-col justify-center items-center animate-[fadeIn_0.3s_ease-out]">
          
          {/* LAPTOP FRAME */}
          {isWeb ? (
            <div className="w-full max-w-[540px] rounded-xl bg-cyber-panel border-2 border-cyber-border overflow-hidden device-shadow transition-all duration-300">
              {/* Window Chrome Header */}
              <div className="bg-cyber-dark px-3 py-2 flex items-center justify-between border-b border-cyber-border/80 gap-3 flex-wrap sm:flex-nowrap">
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <span className="w-2 h-2 rounded-full bg-rose-500/80 inline-block"></span>
                  <span className="w-2 h-2 rounded-full bg-cyber-yellow inline-block"></span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500/80 inline-block"></span>
                </div>
                
                {/* View switcher tabs for web apps */}
                {project.webUrl && (
                  <div className="flex bg-cyber-dark border border-cyber-border/80 rounded-lg p-0.5 text-[9px] font-mono font-bold flex-shrink-0 z-10">
                    <button
                      onClick={() => setViewMode('screenshot')}
                      className={`px-2 py-0.5 rounded transition-all cursor-pointer ${
                        viewMode === 'screenshot'
                          ? 'bg-cyber-yellow text-cyber-dark font-bold'
                          : 'text-cyber-textMuted hover:text-cyber-header'
                      }`}
                    >
                      {locale === 'en' ? 'IMAGE' : 'GAMBAR'}
                    </button>
                    <button
                      onClick={() => setViewMode('live')}
                      className={`px-2 py-0.5 rounded transition-all cursor-pointer ${
                        viewMode === 'live'
                          ? 'bg-cyber-yellow text-cyber-dark font-bold'
                          : 'text-cyber-textMuted hover:text-cyber-header'
                      }`}
                    >
                      {locale === 'en' ? 'LIVE SITE' : 'WEB AKTIF'}
                    </button>
                  </div>
                )}

                <div className="bg-cyber-panel px-2.5 py-0.5 rounded-md border border-cyber-border text-[9px] sm:text-[10px] text-cyber-textMuted font-mono flex items-center gap-1.5 truncate flex-1 justify-center sm:justify-start">
                  <span className="text-emerald-400 flex-shrink-0">🔒</span>
                  <span className="truncate">{project.webUrl || 'https://localhost'}</span>
                </div>
              </div>

              {/* Screen Inner Canvas */}
              {viewMode === 'live' && project.webUrl ? (
                /* Live Interactive Website Iframe */
                <div className="bg-white relative min-h-[260px] overflow-hidden border-b border-cyber-border/80">
                  <iframe
                    src={project.webUrl}
                    title={project.title}
                    className="w-full h-full min-h-[260px] border-none bg-white"
                    sandbox="allow-scripts allow-same-origin allow-popups"
                    loading="lazy"
                  />
                </div>
              ) : project.image ? (
                /* Screenshot Display */
                <div className="bg-cyber-dark relative min-h-[260px] overflow-hidden group/screen border-b border-cyber-border/80">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover aspect-[16/10] hover:scale-105 transition-transform duration-500 cursor-pointer"
                    onClick={() => project.webUrl && window.open(project.webUrl, '_blank')}
                  />
                  
                  {/* Visit website overlay on hover */}
                  {project.webUrl && (
                    <div className="absolute inset-0 bg-cyber-dark/80 opacity-0 group-hover/screen:opacity-100 flex flex-col justify-center items-center gap-2 transition-opacity duration-300 pointer-events-none">
                      <button
                        onClick={() => window.open(project.webUrl, '_blank')}
                        className="px-4 py-2 rounded-xl bg-cyber-yellow text-cyber-dark font-bold text-xs shadow-lg shadow-cyber-yellow/30 transform translate-y-2 group-hover/screen:translate-y-0 transition-transform duration-300 cursor-pointer pointer-events-auto"
                      >
                        {dict.visitWeb} →
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                /* Stylized Vector Dashboard Display (Placeholder) */
                <div className="bg-cyber-dark p-4 sm:p-5 min-h-[260px] flex flex-col justify-between border-b border-cyber-border/80">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center border-b border-cyber-border/80 pb-2 gap-2">
                      <div className="flex items-center gap-2 truncate">
                        <span className="w-2 h-2 rounded-full bg-cyber-yellow flex-shrink-0"></span>
                        <span className="text-xs sm:text-sm font-bold text-cyber-header truncate">
                          {project.webTitle || project.title}
                        </span>
                      </div>
                      <span className="text-[8px] sm:text-[10px] text-cyber-yellow font-mono px-2 py-0.5 bg-cyber-yellow/10 rounded border border-cyber-yellow/20 flex-shrink-0">
                        {project.category.toUpperCase()}
                      </span>
                    </div>

                    <p className="text-[11px] sm:text-xs text-cyber-text leading-relaxed text-justify sm:text-left">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                      {project.webMetrics?.map((metric, index) => (
                        <div key={index} className="bg-cyber-panel p-1.5 sm:p-2 rounded-lg border border-cyber-border">
                          <p className="text-[7px] sm:text-[8px] text-cyber-textMuted font-mono truncate">
                            {index === 0 ? dict.stackCore : index === 1 ? dict.styling : dict.integration}
                          </p>
                          <p className="text-[9px] sm:text-xs font-bold text-cyber-yellow mt-0.5 truncate">
                            {metric}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-[9px] sm:text-[10px] text-cyber-textMuted font-mono pt-3 mt-1 gap-2">
                    <span className="truncate">{project.webTag || project.badges.slice(0, 2).join(' + ')}</span>
                    <span className="text-emerald-400 flex items-center gap-1 flex-shrink-0 font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                      {dict.online}
                    </span>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* SMARTPHONE FRAME (IPHONE 13 STYLE) */
            <div className="w-[240px] sm:w-[270px] rounded-[40px] bg-cyber-dark border-[6px] sm:border-[8px] border-cyber-border overflow-hidden device-shadow transition-all duration-300 relative">
              {/* iPhone 13 Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 sm:w-28 h-4 sm:h-4.5 bg-cyber-dark rounded-b-xl sm:rounded-b-2xl z-20 flex items-center justify-center gap-1.5 px-3">
                {/* Speaker line */}
                <div className="w-6 sm:w-8 h-0.5 sm:h-1 bg-cyber-border/40 rounded-full"></div>
                {/* Camera lens */}
                <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#0a1128] border border-cyber-border/20"></div>
              </div>

              {/* Phone Screen Canvas */}
              {project.image ? (
                /* Screenshot Display */
                <div className="bg-cyber-panel relative h-[480px] sm:h-[540px] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
                    onClick={() => {
                      const storeUrl = project.playStoreUrl || project.appStoreUrl;
                      if (storeUrl) window.open(storeUrl, '_blank');
                    }}
                  />
                </div>
              ) : (
                /* Stylized App Info Display (Placeholder) - Scaled for iPhone 13 height */
                <div className="bg-cyber-panel p-4 h-[480px] sm:h-[540px] flex flex-col justify-between pt-6 sm:pt-8">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-cyber-border/80 pb-2 gap-2 mt-2">
                      <span className="text-xs font-bold text-cyber-header truncate max-w-[140px]">
                        {project.appTitle || project.title}
                      </span>
                      <span className="text-[8px] sm:text-[9px] bg-cyber-yellow/20 text-cyber-yellow px-1.5 py-0.5 rounded font-mono font-bold flex-shrink-0">
                        iOS & Android
                      </span>
                    </div>

                    <div className="bg-cyber-dark p-3 rounded-xl border border-cyber-yellow/30 text-center">
                      <p className="text-xs font-bold text-cyber-yellow truncate">
                        {project.appBannerTitle || project.title}
                      </p>
                      <p className="text-[10px] text-cyber-textMuted mt-0.5 truncate">
                        {project.appBannerSub || project.badges.slice(0, 2).join(' + ')}
                      </p>
                    </div>

                    <p className="text-[10px] sm:text-[11px] text-cyber-text leading-relaxed line-clamp-4 text-justify">
                      {project.description}
                    </p>

                    <div className="space-y-2 pt-1">
                      {project.feat1 && (
                        <div className="bg-cyber-dark/80 p-2.5 rounded-lg border border-cyber-border flex items-center justify-between gap-2">
                          <span className="text-[10px] text-cyber-text truncate max-w-[130px] sm:max-w-[170px]">{project.feat1}</span>
                          <span className="text-[8px] text-emerald-400 font-mono font-bold flex-shrink-0">{dict.ready}</span>
                        </div>
                      )}
                      {project.feat2 && (
                        <div className="bg-cyber-dark/80 p-2.5 rounded-lg border border-cyber-border flex items-center justify-between gap-2">
                          <span className="text-[10px] text-cyber-text truncate max-w-[130px] sm:max-w-[170px]">{project.feat2}</span>
                          <span className="text-[8px] text-cyber-yellow font-mono font-bold flex-shrink-0">{dict.synced}</span>
                        </div>
                      )}
                      {project.feat3 && (
                        <div className="bg-cyber-dark/80 p-2.5 rounded-lg border border-cyber-border flex items-center justify-between gap-2">
                          <span className="text-[10px] text-cyber-text truncate max-w-[130px] sm:max-w-[170px]">{project.feat3}</span>
                          <span className="text-[8px] text-cyber-accent font-mono font-bold flex-shrink-0">{dict.active}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="bg-cyber-dark p-1.5 rounded-xl border border-cyber-border flex justify-around items-center mt-2">
                    <span className="w-2 h-2 rounded-full bg-cyber-yellow animate-pulse"></span>
                    <span className="w-2 h-2 rounded-full bg-slate-700"></span>
                    <span className="w-2 h-2 rounded-full bg-slate-700"></span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Action Link Buttons */}
          <div className="w-full flex flex-wrap justify-center gap-3 pt-5">
            {/* Web Visit Button */}
            {isWeb && project.webUrl && (
              <a
                href={project.webUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-cyber-yellow bg-cyber-yellow/10 text-xs font-mono text-cyber-yellow hover:bg-cyber-yellow hover:text-cyber-dark hover:drop-shadow-[0_0_8px_var(--yellow-color)] transition-all duration-300 cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span>{dict.visitWeb}</span>
              </a>
            )}

            {/* Google Play Button */}
            {!isWeb && project.playStoreUrl && (
              <a
                href={project.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-cyber-border bg-cyber-card/60 text-xs font-mono text-cyber-text hover:text-cyber-yellow hover:border-cyber-yellow hover:drop-shadow-[0_0_8px_var(--yellow-color)] transition-all duration-300 cursor-pointer"
              >
                <svg className="w-4 h-4 text-cyber-yellow" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 5.277L14.85 12 3 18.723v-13.446zm12.923 7.234l2.92-1.657a1 1 0 000-1.708l-2.92-1.657L13.882 12l2.041.511z" />
                </svg>
                <span>{dict.playStore}</span>
              </a>
            )}

            {/* Apple App Store Button */}
            {!isWeb && project.appStoreUrl && (
              <a
                href={project.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-cyber-border bg-cyber-card/60 text-xs font-mono text-cyber-text hover:text-cyber-accent hover:border-cyber-accent hover:drop-shadow-[0_0_8px_var(--accent-color)] transition-all duration-300 cursor-pointer"
              >
                <svg className="w-4 h-4 text-cyber-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.2.67-2.92 1.49-.6.69-1.12 1.83-1 2.96 1.09.08 2.21-.57 2.93-1.39" />
                </svg>
                <span>{dict.appStore}</span>
              </a>
            )}
          </div>

          {/* Iframe tip warning */}
          {isWeb && viewMode === 'live' && (
            <p className="text-[9px] font-mono text-cyber-textMuted text-center pt-2 max-w-sm">
              {locale === 'en'
                ? '💡 Note: If the website doesn\'t load, it is blocked by security headers (X-Frame-Options). Click "Visit Website" to open it directly.'
                : '💡 Info: Jika situs tidak termuat, hal ini disebabkan oleh pembatasan keamanan (X-Frame-Options). Klik "Kunjungi Situs" untuk membuka langsung.'}
            </p>
          )}

        </div>

      </div>

      {/* Project Note/Alert */}
      {project.note && (
        <div className="glass-card p-3.5 rounded-xl border border-cyber-yellow/20 bg-cyber-yellow/5 flex gap-2.5 items-start">
          <span className="text-cyber-yellow text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider mt-0.5 flex-shrink-0 px-1.5 py-0.5 rounded bg-cyber-yellow/10">
            NOTE
          </span>
          <p className="text-[10px] sm:text-xs text-cyber-textMuted leading-relaxed">
            {project.note}
          </p>
        </div>
      )}

      {/* Active Technical Badges Box */}
      <div className="glass-card p-4 rounded-xl space-y-2 border-l-2 border-l-cyber-yellow">
        <div className="flex justify-between items-center gap-2">
          <span className="text-[10px] sm:text-[11px] font-mono text-cyber-yellow font-bold uppercase tracking-wider">
            {dict.techHeader}
          </span>
          <span className="text-[9px] sm:text-[10px] font-mono text-cyber-textMuted">
            {project.year}
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.badges.map((badge, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 text-[9px] sm:text-[10px] font-mono rounded bg-cyber-dark text-slate-300 border border-cyber-border"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
