'use client';

import React from 'react';
import { PortfolioData } from '@/types/portfolio';
import { usePortfolioState, LocaleType } from '@/hooks/usePortfolioState';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BioCard from '@/components/profile/BioCard';
import StatsCard from '@/components/profile/StatsCard';
import TechStackMarquee from '@/components/profile/TechStackMarquee';
import ExperienceTimeline from '@/components/profile/ExperienceTimeline';
import ProjectList from '@/components/projects/ProjectList';
import DeviceViewer from '@/components/projects/DeviceViewer';

interface PortfolioViewProps {
  data: PortfolioData;
  dict: any;
  lang: LocaleType;
}

export default function PortfolioView({ data, dict, lang }: PortfolioViewProps) {
  // Read path parameters for localization routing
  const {
    activeTab,
    activeFilter,
    currentProjectId,
    filteredProjects,
    activeProject,
    locale,
    theme,
    switchTab,
    filterCategory,
    selectProject,
    switchLocale,
    toggleTheme,
  } = usePortfolioState(data, lang);

  // Extract localized profile and project packs
  const activePack = data[locale];
  const profile = activePack.profile;
  const projects = activePack.projects;

  return (
    <div className="min-h-screen bg-cyber-dark text-cyber-text antialiased flex flex-col justify-between relative cyber-grid">
      
      {/* Decorative Glow Elements */}
      <div className="fixed top-0 left-1/4 -translate-x-1/2 w-[500px] h-[500px] bg-cyber-yellow/5 rounded-full blur-[140px] pointer-events-none z-0"></div>
      <div className="fixed bottom-0 right-1/4 translate-x-1/2 w-[600px] h-[600px] bg-cyber-accent/5 rounded-full blur-[160px] pointer-events-none z-0"></div>

      {/* Navigation Header */}
      <Header
        activeTab={activeTab}
        onTabChange={switchTab}
        projectCount={projects.length}
        locale={locale}
        theme={theme}
        onLocaleChange={switchLocale}
        onThemeToggle={toggleTheme}
        dict={dict.header}
      />

      {/* Main Content Area */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-16 my-auto flex-1 flex flex-col justify-center min-h-[calc(100vh-80px)]">
        
        {activeTab === 'home' && (
          <div className="space-y-6 animate-[fadeIn_0.3s_ease-out]">
            
            {/* Top Banner Profile Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              <BioCard profile={profile} locale={locale} dict={dict.bio} />
              <StatsCard stats={profile.stats} education={profile.education} locale={locale} dict={dict.stats} />
            </div>

            {/* Tech Stack section */}
            <TechStackMarquee locale={locale} dict={dict.tech} />

            {/* Work History timeline */}
            <ExperienceTimeline experience={profile.experience} locale={locale} dict={dict.experience} />
            
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="space-y-6 animate-[fadeIn_0.3s_ease-out]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              <ProjectList
                projects={projects}
                filteredProjects={filteredProjects}
                activeFilter={activeFilter}
                currentProjectId={currentProjectId}
                onFilterChange={filterCategory}
                onProjectSelect={selectProject}
                locale={locale}
                dict={dict.projects}
              />

              <DeviceViewer project={activeProject} locale={locale} dict={dict.device} />

            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
