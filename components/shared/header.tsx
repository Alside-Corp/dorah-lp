import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
export function Header() {
  return (
    <header className="site-header absolute inset-x-0 top-0 z-10">
      <div className="site-header-inner container flex h-22 items-center justify-between">
        <div className="brand-mark">
          <Image src="/brand/lockup-grafite-48-transparente.png" alt="Dorah" width={102} height={32} priority />
        </div>
        <nav
          className="site-nav hidden md:flex"
          aria-label="Navegação principal"
        >
          <a href="#como-funciona">Como funciona</a>
          <a href="#privacidade">Privacidade</a>
          <a href="#rh">Para empresas</a>
        </nav>
        <a className="button button-primary header-button" href="#contato">
          Falar com a Dorah <ArrowUpRight size={15} />
        </a>
      </div>
    </header>
  );
}
