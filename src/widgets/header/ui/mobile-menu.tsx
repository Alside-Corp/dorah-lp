'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const links = [
  ['Como funciona', '#como-funciona'],
  ['Privacidade', '#privacidade'],
  ['Para empresas', '#rh'],
] as const;

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mobile-menu">
      <button
        type="button"
        className="mobile-menu-trigger"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      {isOpen && (
        <nav id="mobile-navigation" className="mobile-navigation" aria-label="Navegação mobile">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setIsOpen(false)}>
              {label}
            </a>
          ))}
          <a className="button button-primary" href="#contato" onClick={() => setIsOpen(false)}>
            Entre em contato
          </a>
        </nav>
      )}
    </div>
  );
}
