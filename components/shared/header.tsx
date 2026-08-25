import { ArrowUpRight } from 'lucide-react';
export function Header() {
  return (
    <header className="site-header absolute inset-x-0 top-0 z-10">
      <div className="site-header-inner container flex h-22 items-center justify-between">
        <a className="brand-mark" href="#inicio" aria-label="Dorah">
          <span className="brand-mark-do">Do</span>
          <span className="brand-mark-rah">rah</span>
        </a>
        <nav
          className="site-nav hidden gap-12 text-sm text-ardosia md:flex"
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
