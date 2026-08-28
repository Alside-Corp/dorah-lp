import { footerContent } from '@/shared/config/landing-content';
import Image from 'next/image';
import lightLogo from '@/shared/assets/brand/lockup-nevoa-48-transparente.png';

export function Footer() {
  return (
    <footer className="section-dark py-8 text-gelo">
      <div className="container footer-shell text-sm">
        <Image src={lightLogo} alt="Dorah" width={102} height={32} />
        <p>
          © {new Date().getFullYear()} Dorah. {footerContent.text}
        </p>
      </div>
    </footer>
  );
}
