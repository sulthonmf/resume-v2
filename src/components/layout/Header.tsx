'use client';

import React from 'react';
import { TabType, LocaleType, ThemeType } from '@/hooks/usePortfolioState';

interface HeaderProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  projectCount: number;
  locale: LocaleType;
  theme: ThemeType;
  onLocaleChange: (locale: LocaleType) => void;
  onThemeToggle: () => void;
  dict: any;
}

export default function Header({
  activeTab,
  onTabChange,
  projectCount,
  locale,
  theme,
  onLocaleChange,
  onThemeToggle,
  dict,
}: HeaderProps) {
  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none w-full">
      <nav className="ios-glass-nav pointer-events-auto rounded-full p-1 sm:p-1.5 flex items-center gap-1 sm:gap-2 max-w-full shadow-2xl transition-all duration-300">
        
        {/* Logo Badge - Hidden on small mobile screens to prevent wrapping */}
        <div className="hidden sm:flex items-center gap-2 pl-3 pr-2 py-1 border-r border-cyber-border/80 flex-shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-cyber-yellow animate-ping"></span>
          <span className="font-mono font-bold text-xs text-cyber-yellow tracking-wider">SMF.DEV</span>
        </div>

        {/* Sliding Tabs Container */}
        <div className="flex items-center gap-1 relative flex-shrink-0">
          <button
            onClick={() => onTabChange('home')}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'home'
                ? 'bg-cyber-yellow text-cyber-dark shadow-lg shadow-cyber-yellow/20 font-bold'
                : 'text-cyber-textMuted hover:text-cyber-header hover:bg-cyber-card/60'
            }`}
          >
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 00-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="hidden sm:inline">{dict.home}</span>
            <span className="inline sm:hidden">{dict.homeShort}</span>
          </button>

          <button
            onClick={() => onTabChange('projects')}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'projects'
                ? 'bg-cyber-yellow text-cyber-dark shadow-lg shadow-cyber-yellow/20 font-bold'
                : 'text-cyber-textMuted hover:text-cyber-header hover:bg-cyber-card/60'
            }`}
          >
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
            <span className="hidden sm:inline">{dict.projects}</span>
            <span className="inline sm:hidden">{dict.projectsShort}</span>
            <span className="text-[9px] sm:text-[10px] font-mono px-1.5 py-0.5 rounded-full border bg-cyber-yellow/10 text-cyber-yellow border-cyber-yellow/20 flex-shrink-0">
              {projectCount}
            </span>
          </button>
        </div>

        {/* Quick Action CTA - Hidden on mobile & tablet */}
        {/* <a
          href="https://dev-sulthon.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-1.5 pl-3 pr-4 py-1.5 rounded-full bg-cyber-card hover:bg-cyber-border text-cyber-yellow text-xs font-mono font-medium border border-cyber-yellow/30 transition-all active:scale-95 flex-shrink-0"
        >
          <span>dev-sulthon.vercel.app</span>
          <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a> */}

        {/* Language & Theme Controls */}
        <div className="flex items-center gap-1.5 pl-1.5 sm:pl-3 border-l border-cyber-border/80 flex-shrink-0">
          
          {/* Language Selection Toggle */}
          <div className="flex items-center bg-cyber-card/85 p-0.5 rounded-full border border-cyber-border flex-shrink-0">
            <button
              onClick={() => onLocaleChange('id')}
              className={`px-1.5 sm:px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-mono font-bold transition-all cursor-pointer ${
                locale === 'id'
                  ? 'bg-cyber-yellow text-cyber-dark font-bold'
                  : 'text-cyber-textMuted hover:text-cyber-header'
              }`}
            >
              ID
            </button>
            <button
              onClick={() => onLocaleChange('en')}
              className={`px-1.5 sm:px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-mono font-bold transition-all cursor-pointer ${
                locale === 'en'
                  ? 'bg-cyber-yellow text-cyber-dark font-bold'
                  : 'text-cyber-textMuted hover:text-cyber-header'
              }`}
            >
              EN
            </button>
          </div>

          {/* Theme Mode Toggle Button */}
          <button
            onClick={onThemeToggle}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-cyber-card/85 hover:bg-cyber-border/80 border border-cyber-border flex items-center justify-center text-xs transition-all cursor-pointer text-cyber-yellow flex-shrink-0"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12.3 22h-.1c-5.5 0-10-4.5-10-10 0-4.8 3.5-8.9 8.2-9.8.5-.1 1 .2 1.2.7.2.5 0 1.1-.4 1.4-2.8 2-3.8 5.7-2.3 8.8 1.4 2.9 4.5 4.6 7.7 4.1.5-.1 1 .2 1.2.7.2.5 0 1.1-.4 1.4-1.9 1.7-4.4 2.7-7.1 2.7zm-2-18c-3.7.8-6.3 4.1-6.3 7.9 0 4.4 3.6 8 8 8 1.8 0 3.5-.6 4.9-1.7-2.8-.5-5.2-2.3-6.4-4.8-1.7-3.6-.9-7.8 1.8-10.4-1.3.5-1.9.9-2 .10z" />
              </svg>
            ) : (
              <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            )}
          </button>

        </div>

      </nav>
    </header>
  );
}
