import React from 'react';

interface TechStackMarqueeProps {
  locale: 'id' | 'en';
  dict: any;
}

interface TechItem {
  name: string;
  color: string;
  icon: React.ReactNode;
}

export default function TechStackMarquee({ locale, dict }: TechStackMarqueeProps) {
  const isEn = locale === 'en';

  const coreTechItems: TechItem[] = [
    {
      name: 'React Native',
      color: 'text-cyan-400',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 120 120" fill="currentColor">
          <ellipse cx="60" cy="60" rx="15" ry="45" fill="none" stroke="currentColor" strokeWidth="5" transform="rotate(30 60 60)"/>
          <ellipse cx="60" cy="60" rx="15" ry="45" fill="none" stroke="currentColor" strokeWidth="5" transform="rotate(90 60 60)"/>
          <ellipse cx="60" cy="60" rx="15" ry="45" fill="none" stroke="currentColor" strokeWidth="5" transform="rotate(150 60 60)"/>
          <circle cx="60" cy="60" r="8" fill="currentColor"/>
        </svg>
      )
    },
    {
      name: 'Next.js',
      color: 'text-cyber-header dark:text-slate-100',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0a12 12 0 100 24 12 12 0 000-24zm5.55 18.25l-6.3-8.2V18h-1.87V7.5h1.87l6.05 7.88V7.5h1.87v10.75h-1.62zM12.98 12l-.98-1.28v2.56L12.98 12z" />
        </svg>
      )
    },
    {
      name: 'Angular',
      color: 'text-red-500',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 250 250" fill="currentColor">
          <polygon points="125,30 125,30 125,30 31.9,63.2 46.1,186.3 125,230 125,230 125,230 203.9,186.3 218.1,63.2" fill="#DD0031"/>
          <polygon points="125,30 125,230 125,230 203.9,186.3 218.1,63.2" fill="#C3002F"/>
          <polygon points="125,52.1 125,52.1 125,52.1 69.8,175.7 89.2,175.7 101.4,145.4 148.6,145.4 160.8,175.7 180.2,175.7" fill="#F2F2F2"/>
          <polygon points="125,52.1 125,145.4 148.6,145.4 160.8,175.7 180.2,175.7" fill="#FFFFFF"/>
          <polygon points="125,75.4 110,116 140,116" fill="#DD0031"/>
        </svg>
      )
    },
    {
      name: 'Kotlin',
      color: 'text-purple-500',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 24H0V0h24L12 12z"/>
        </svg>
      )
    },
    {
      name: 'Node.js',
      color: 'text-green-500',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L4.27 6.5v9L12 20l7.73-4.5v-9L12 2zm0 2.23l5.96 3.48v6.96L12 18.15l-5.96-3.48V7.71L12 4.23z"/>
        </svg>
      )
    },
    {
      name: 'Firebase',
      color: 'text-amber-500',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.89 15.572L6.012 2.19c.148-.936 1.41-1.218 1.956-.44l3.158 5.753-11.236 8.07zm16.22-8.07L18.01 2.19c-.149-.936-1.41-1.218-1.957-.44l-3.085 5.62 7.142 8.132zm-7.616-2.18l-2.457 4.478 5.702 5.702 2.658 2.658c.844.844 2.22.844 3.064 0l4.316-4.316-13.283-8.522zm-7.79 12.338l9.162 5.882c.683.438 1.564.438 2.247 0l9.162-5.882-9.256-10.54a.75.75 0 00-1.06 0L4.704 17.66z" />
        </svg>
      )
    },
    {
      name: 'Azure',
      color: 'text-sky-400',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 18.96L8.4 2.4h5.64l-4.56 8.76L24 18.96H13.68l-4.44-8.04-5.04 8.04H0z" />
        </svg>
      )
    },
    {
      name: 'Expo',
      color: 'text-slate-100 dark:text-slate-100',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L1 21h22L12 2zm0 4l6.85 12H5.15L12 6z" />
        </svg>
      )
    },
    {
      name: 'Vercel',
      color: 'text-slate-100 dark:text-slate-100',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 22.525H0L12 1.748l12 20.777z" />
        </svg>
      )
    }
  ];

  const handleScrollToContact = () => {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="glass-card rounded-2xl p-6 space-y-4 overflow-hidden relative">
      <div className="flex items-center justify-between border-b border-cyber-border/80 pb-3 gap-4">
        <h2 className="text-sm font-mono font-bold text-cyber-yellow uppercase tracking-wider flex items-center gap-2 flex-shrink-0">
          <svg className="w-4 h-4 text-cyber-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L5.59 15.12a2 2 0 01-1.022-.547l-1.012-1.012a2 2 0 01-.547-1.022l-.477-2.387a6 6 0 01.517-3.86l.158-.318a6 6 0 00.517-3.86L4.12 2.59a2 2 0 01.547-1.022l1.012-1.012a2 2 0 011.022-.547l2.387-.477a6 6 0 003.86-.517l.318-.158a6 6 0 013.86-.517l2.387.477a2 2 0 011.022.547l1.012 1.012a2 2 0 01.547 1.022l.477 2.387a6 6 0 01-.517 3.86l-.158.318a6 6 0 00-.517 3.86l.477 2.387a2 2 0 01-.547 1.022l-1.012 1.012z"
            />
          </svg>
          {dict.title}
        </h2>
        
        {/* Scroll CTA More Detail Button */}
        <button
          onClick={handleScrollToContact}
          className="px-3 py-1 rounded-lg border border-cyber-yellow/40 bg-cyber-yellow/10 text-[9px] sm:text-[10px] font-mono font-bold text-cyber-yellow hover:bg-cyber-yellow hover:text-cyber-dark hover:drop-shadow-[0_0_8px_var(--yellow-color)] transition-all duration-300 cursor-pointer text-right truncate max-w-[150px] sm:max-w-none"
        >
          <span className="inline sm:hidden">{isEn ? 'MORE →' : 'DETAIL →'}</span>
          <span className="hidden sm:inline">{dict.moreDetails}</span>
        </button>
      </div>

      {/* INFINITE SCROLL MARQUEE CONTAINER */}
      <div className="relative w-full overflow-hidden py-3 bg-cyber-dark/50 border border-cyber-border/40 rounded-xl">
        {/* Left & Right Glass Fades */}
        <div className="absolute inset-y-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-cyber-card/70 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-cyber-card/70 to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling Strip */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          
          {/* First Loop */}
          <div className="flex gap-6 pr-6 items-center">
            {coreTechItems.map((item, idx) => (
              <div
                key={`loop-1-${idx}`}
                className="flex items-center gap-2.5 px-4 py-2 bg-cyber-panel/40 border border-cyber-border rounded-xl hover:border-cyber-yellow transition-all duration-300 group cursor-default select-none"
              >
                <div className={`${item.color} transition-transform group-hover:scale-110 duration-300`}>
                  {item.icon}
                </div>
                <span className="text-xs font-mono font-bold text-cyber-text group-hover:text-cyber-yellow transition-colors duration-300">
                  {item.name}
                </span>
              </div>
            ))}
          </div>

          {/* Second Loop (Seamless repeat) */}
          <div className="flex gap-6 pr-6 items-center" aria-hidden="true">
            {coreTechItems.map((item, idx) => (
              <div
                key={`loop-2-${idx}`}
                className="flex items-center gap-2.5 px-4 py-2 bg-cyber-panel/40 border border-cyber-border rounded-xl hover:border-cyber-yellow transition-all duration-300 group cursor-default select-none"
              >
                <div className={`${item.color} transition-transform group-hover:scale-110 duration-300`}>
                  {item.icon}
                </div>
                <span className="text-xs font-mono font-bold text-cyber-text group-hover:text-cyber-yellow transition-colors duration-300">
                  {item.name}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
