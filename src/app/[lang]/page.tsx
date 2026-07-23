import React from 'react';
import portfolioData from '@/data/portfolio.json';
import { PortfolioData } from '@/types/portfolio';
import PortfolioView from '@/components/PortfolioView';
import idDict from '@/translations/id.json';
import enDict from '@/translations/en.json';
import { LocaleType } from '@/hooks/usePortfolioState';

interface PageProps {
  params: Promise<{
    lang: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;
  const data = portfolioData as unknown as PortfolioData;
  const dict = lang === 'en' ? enDict : idDict;

  return <PortfolioView data={data} dict={dict} lang={lang as LocaleType} />;
}
