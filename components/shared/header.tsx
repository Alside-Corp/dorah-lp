import { ArrowUpRight } from 'lucide-react';
export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-10">
      <div className="container flex h-22 items-center justify-between">
        <a className="brand-mark" href="#inicio" aria-label="Dorah">
          <span className="brand-mark-do">Do</span>
          <span className="brand-mark-rah">rah</span>
        </a>
        <nav className="hidden gap-7 text-sm text-ardosia md:flex">
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
