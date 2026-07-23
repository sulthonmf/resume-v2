'use client';

import React from 'react';
import { Profile } from '@/types/portfolio';
import { useCopyEmail } from '@/hooks/useCopyEmail';

interface BioCardProps {
  profile: Profile;
  locale: 'id' | 'en';
  dict: any;
}

export default function BioCard({ profile, locale, dict }: BioCardProps) {
  const { copied, copyEmail } = useCopyEmail(profile.contact.email);

  return (
    <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between border-l-4 border-l-cyber-yellow relative overflow-hidden group">
      {/* Background glow overlay */}
      <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-cyber-yellow/10 rounded-full blur-2xl group-hover:bg-cyber-yellow/20 transition-all duration-500 pointer-events-none"></div>

      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start relative z-10">
        
        {/* Glowing Cyber Avatar */}
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-cyber-yellow relative device-shadow flex-shrink-0 bg-cyber-dark animate-[fadeIn_0.5s_ease-out]">
          <img
            src="/avatar.png"
            alt="Sulthon Maulana Fathuddin"
            className="w-full h-full object-cover"
          />
          {/* Scan line effect overlay */}
          <div className="absolute inset-0 pointer-events-none animate-[pulse_2s_infinite]"></div>
        </div>

        <div className="space-y-4 flex-1 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-3">
            <span className="text-xs font-mono tracking-widest text-cyber-yellow uppercase px-3 py-1 rounded-md bg-cyber-yellow/10 border border-cyber-yellow/30">
              {profile.title}
            </span>
            <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              {dict.available}
            </span>
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-cyber-header tracking-tight">
              Sulthon Maulana <span className="text-cyber-yellow yellow-glow">Fathuddin</span>
            </h1>
            <p className="text-cyber-textMuted text-sm mt-2 leading-relaxed text-justify md:text-left">
              {profile.bio}
            </p>
          </div>
        </div>
      </div>

      {/* Contact Quick Info Bar */}
      <div id="contact-section" className="pt-6 mt-6 border-t border-cyber-border/80 flex flex-col gap-3 relative z-10 scroll-mt-24">
        <p className="text-[10px] font-mono font-bold text-cyber-yellow uppercase tracking-wider text-center md:text-left">
          {dict.connect}
        </p>

        <div className="flex flex-wrap gap-2.5 justify-center md:justify-start items-center">
          
          {/* Email Link */}
          <a
            href={`mailto:${profile.contact.email}`}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-cyber-border bg-cyber-card/60 text-xs font-mono text-cyber-text hover:text-cyber-yellow hover:border-cyber-yellow hover:drop-shadow-[0_0_8px_var(--yellow-color)] transition-all duration-300 cursor-pointer"
          >
            <svg className="w-4 h-4 text-cyber-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 002 2v10a2 2 0 002 2z" />
            </svg>
            <span>Email</span>
          </a>

          {/* Phone Link */}
          <a
            href={`tel:${profile.contact.phone.replace(/[\s-]/g, '')}`}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-cyber-border bg-cyber-card/60 text-xs font-mono text-cyber-text hover:text-cyber-yellow hover:border-cyber-yellow hover:drop-shadow-[0_0_8px_var(--yellow-color)] transition-all duration-300 cursor-pointer"
          >
            <svg className="w-4 h-4 text-cyber-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>{dict.call}</span>
          </a>

          {/* WhatsApp Link */}
          <a
            href={`https://wa.me/${profile.contact.phone.replace(/[+\s-]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-cyber-border bg-cyber-card/60 text-xs font-mono text-cyber-text hover:text-emerald-400 hover:border-emerald-400 hover:drop-shadow-[0_0_8px_#34d399] transition-all duration-300 cursor-pointer"
          >
            <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.394 9.805-9.805.001-2.621-1.013-5.085-2.86-6.937C16.36 1.997 13.9 1.984 12.01 1.984c-5.41 0-9.81 4.4-9.812 9.812-.001 1.502.437 2.961 1.264 4.218l-.98 3.578 3.665-.961zm10.702-7.112c-.299-.149-1.762-.868-2.035-.967-.272-.099-.47-.149-.667.149-.198.299-.767.967-.94 1.164-.173.199-.347.223-.646.074-.299-.149-1.262-.465-2.403-1.485-.888-.79-1.487-1.77-1.661-2.068-.173-.299-.018-.46.131-.609.135-.134.299-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.667-1.611-.913-2.203-.239-.577-.48-.5-.667-.51-.173-.008-.371-.01-.568-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.762-.719 2.01-.1.413 2.22-.05 1.138-.074 1.187-.025.048-.619.098-.792.296z" />
            </svg>
            <span>WhatsApp</span>
          </a>

          {/* LinkedIn Link */}
          <a
            href="https://linkedin.com/in/sulthonmf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-cyber-border bg-cyber-card/60 text-xs font-mono text-cyber-text hover:text-cyber-accent hover:border-cyber-accent hover:drop-shadow-[0_0_8px_var(--accent-color)] transition-all duration-300 cursor-pointer"
          >
            <svg className="w-4 h-4 text-cyber-accent" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            <span>LinkedIn</span>
          </a>

          {/* GitHub Link */}
          <a
            href="https://github.com/sulthonmf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-cyber-border bg-cyber-card/60 text-xs font-mono text-cyber-text hover:text-cyber-pink hover:border-cyber-pink hover:drop-shadow-[0_0_8px_#ff0055] transition-all duration-300 cursor-pointer"
          >
            <svg className="w-4 h-4 text-cyber-pink" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span>GitHub</span>
          </a>

          {/* Download CV Link */}
          {profile.contact.cvUrl && (
            <a
              href={profile.contact.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-cyber-yellow bg-cyber-yellow/10 text-xs font-mono text-cyber-yellow hover:bg-cyber-yellow hover:text-cyber-dark hover:drop-shadow-[0_0_8px_var(--yellow-color)] transition-all duration-300 cursor-pointer"
            >
              <svg className="w-4 h-4 text-cyber-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>{dict.downloadCv}</span>
            </a>
          )}

          {/* Quick Copy Action Pill */}
          <button
            onClick={copyEmail}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-cyber-yellow bg-cyber-yellow/10 text-xs font-mono text-cyber-yellow hover:bg-cyber-yellow hover:text-cyber-dark hover:drop-shadow-[0_0_8px_var(--yellow-color)] transition-all duration-300 cursor-pointer w-full sm:w-auto justify-center sm:ml-auto"
          >
            <span>{copied ? dict.copied : dict.copy}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
