import type { Metadata } from 'next';
import './globals.css';
import './styles/tokens.css';
import './styles/base.css';
import './styles/typography.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/sections/hero.css';
import './styles/sections/problem.css';
import './styles/sections/silent-window.css';
import './styles/sections/how-it-works.css';
import './styles/sections/psychologist.css';
import './styles/sections/compliance.css';
import './styles/sections/dashboard.css';
import './styles/sections/cta.css';
import './styles/sections/footer.css';
import './styles/responsive.css';

export const metadata: Metadata = {
  title: 'Dorah | Saúde mental corporativa com privacidade',
  description:
    'Uma plataforma que aproxima pessoas e psicólogos, enquanto o RH enxerga apenas tendências agregadas.',
  keywords: ['saúde mental', 'empresas', 'NR-1', 'psicologia', 'LGPD'],
  openGraph: {
    title: 'Dorah | Saúde mental corporativa com privacidade',
    description: 'Tecnologia que protege a conversa e revela apenas tendências.',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="pt-BR" className="antialiased">
      <body>{children}</body>
    </html>
  );
}
