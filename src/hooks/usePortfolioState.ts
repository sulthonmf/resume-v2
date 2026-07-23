import { useState, useMemo, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Project, PortfolioData } from '@/types/portfolio';

export type TabType = 'home' | 'projects';
export type FilterType = 'all' | 'web' | 'mobile';
export type LocaleType = 'id' | 'en';
export type ThemeType = 'light' | 'dark';

export function usePortfolioState(data: PortfolioData, initialLocale: LocaleType) {
  const router = useRouter();
  const pathname = usePathname();

  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [currentProjectId, setCurrentProjectId] = useState<number>(0);
  const [theme, setTheme] = useState<ThemeType>('dark');

  const locale = initialLocale;

  // Load theme preference on client mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeType | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      setTheme(systemTheme);
    }
  }, []);

  // Synchronize dark class on document root
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Resolve active pack projects
  const projects = useMemo(() => {
    return data[locale].projects;
  }, [data, locale]);

  // Filter projects based on active filter
  const filteredProjects = useMemo(() => {
    return projects.filter(
      (project) => activeFilter === 'all' || project.type === activeFilter
    );
  }, [projects, activeFilter]);

  // Find current active project details
  const activeProject = useMemo(() => {
    return projects.find((p) => p.id === currentProjectId) || projects[0];
  }, [projects, currentProjectId]);

  const switchTab = (tab: TabType) => {
    setActiveTab(tab);
  };

  const filterCategory = (category: FilterType) => {
    setActiveFilter(category);
    
    // Auto-select the first project in the filtered list if current active project doesn't match new filter
    const matches = projects.filter(
      (p) => category === 'all' || p.type === category
    );
    if (matches.length > 0 && !matches.some((p) => p.id === currentProjectId)) {
      setCurrentProjectId(matches[0].id);
    }
  };

  const selectProject = (id: number) => {
    setCurrentProjectId(id);
  };

  const switchLocale = (newLocale: LocaleType) => {
    // E.g., replace "/id/..." with "/en/..."
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    router.push(newPath);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return {
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
  };
}
