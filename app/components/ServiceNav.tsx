"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useApp } from '../context/AppContext';

export default function ServiceNav() {
  const { language, theme, toggleLanguage, toggleTheme, t } = useApp();
  const isAr = language === 'ar';

  return (
    <nav className="p-4 md:px-10 border-b border-gray-100 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 sticky top-0 z-50 shadow-xs backdrop-blur-md flex justify-between items-center transition-colors duration-200">
      {/* Brand */}
      <Link href="/" className="flex items-center gap-2.5 text-2xl font-bold text-primary transition-opacity hover:opacity-80">
        <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0 ring-1 ring-primary/20">
          <Image
            src="/images/Profile/logo.jpg"
            alt={t('brandName')}
            fill
            sizes="32px"
            className="object-cover"
            priority
          />
        </div>
        <span className="font-black">{t('brandName')}</span>
      </Link>

      {/* Nav Links */}
      <div className="hidden md:flex gap-6 text-sm font-semibold text-gray-700 dark:text-gray-200">
        <Link href="/" className="hover:text-primary transition-colors">{t('navHome')}</Link>
        <Link href="/#services" className="hover:text-primary transition-colors">{t('navServices')}</Link>
        <Link href="/#tools" className="hover:text-primary transition-colors">{t('navTools')}</Link>
        <Link href="/#contact" className="hover:text-primary transition-colors">{t('navContact')}</Link>
      </div>

      {/* Action Controls */}
      <div className="flex items-center gap-2.5">
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-gray-200 dark:border-slate-700 text-xs font-bold text-gray-700 dark:text-gray-200 hover:border-primary transition-all cursor-pointer"
          aria-label="Toggle Language"
        >
          <span>{isAr ? 'EN' : 'عربي'}</span>
        </button>

        <button
          onClick={toggleTheme}
          className="p-1.5 rounded-lg border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-200 hover:border-primary transition-all cursor-pointer"
          aria-label="Toggle Theme"
        >
          {theme === 'light' ? (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          ) : (
            <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          )}
        </button>

        <Link
          href="/#contact"
          className="btn-primary text-xs py-2 px-4 shadow-sm"
        >
          {t('navRequestService')}
        </Link>
      </div>
    </nav>
  );
}

