'use client';

import { Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';
import { navigation, profile } from '@/data/portfolio';

type SectionId = (typeof navigation)[number]['id'];

export function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const menuButton = useRef<HTMLButtonElement>(null);
  const firstNavLink = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const sections = [...navigation].reverse().map(({ id }) => ({ id, element: document.getElementById(id) }));

    function updateActiveSection() {
      const readingLine = Math.max(120, window.innerHeight * 0.28);
      const current = sections.find(({ element }) => element && element.getBoundingClientRect().top <= readingLine);
      console.log(current);

      const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;

      setActiveSection(atBottom ? 'contact' : (current?.id ?? 'home'));
    }

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) firstNavLink.current?.focus();
  }, [menuOpen]);

  return (
    <header
      className="site-header"
      onKeyDown={event => {
        if (event.key === 'Escape' && menuOpen) {
          setMenuOpen(false);
          menuButton.current?.focus();
        }
      }}
    >
      <div className="site-container header-inner">
        <a href="#home" className="brand" aria-label={`${profile.name}, home`} onClick={() => setMenuOpen(false)}>
          <span className="brand-mark" aria-hidden="true" />
          <span>
            {profile.brandName}
            <span className="text-accent">.</span>
          </span>
        </a>

        <nav id="primary-navigation" aria-label="Primary" className="site-nav" data-open={menuOpen}>
          <ul className="flex flex-col gap-1 md:flex-row md:items-center md:gap-5 lg:gap-7">
            {navigation.map(({ id, label }) => (
              <li key={id}>
                <a
                  ref={id === 'home' ? firstNavLink : undefined}
                  href={`#${id}`}
                  aria-current={activeSection === id ? 'location' : undefined}
                  className={id === 'contact' ? 'nav-link nav-contact' : 'nav-link'}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <button
            className="icon-button theme-switch"
            type="button"
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
          >
            <span className="theme-switch-light">
              <Moon size={17} aria-hidden="true" />
              <span className="sr-only">Use dark theme</span>
            </span>
            <span className="theme-switch-dark">
              <Sun size={18} aria-hidden="true" />
              <span className="sr-only">Use light theme</span>
            </span>
          </button>
          <button
            ref={menuButton}
            className="icon-button menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  );
}
