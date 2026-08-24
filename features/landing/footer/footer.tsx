import { footerContent } from '../content';

export function Footer() {
  return (
    <footer className="section-dark py-8 text-gelo">
      <div className="container footer-shell text-sm">
        <p className="brand-word" aria-label="Dorah">
          <span className="brand-mark-do">Do</span>
          <span className="brand-mark-rah">rah</span>
        </p>
        <p>
          © {new Date().getFullYear()} Dorah. {footerContent.text}
        </p>
      </div>
    </footer>
  );
}
