import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import darkLogo from '@/shared/assets/brand/lockup-grafite-48-transparente.png';
import { MobileMenu } from './mobile-menu';

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header-inner container">
        <div className="brand-mark">
          <Image src={darkLogo} alt="Dorah" width={102} height={32} priority />
        </div>
        <nav className="site-nav" aria-label="Navegação principal">
          <a href="#como-funciona">Como funciona</a>
          <a href="#privacidade">Privacidade</a>
          <a href="#rh">Para empresas</a>
        </nav>
        <a className="button button-primary header-button" href="#contato">
          Entre em contato <ArrowUpRight size={15} />
        </a>
        <MobileMenu />
      </div>
    </header>
  );
}
