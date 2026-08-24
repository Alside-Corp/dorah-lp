import { Header } from '@/components/shared/header';
import { Cta } from '@/features/landing/cta';
import { Compliance } from '@/features/landing/compliance';
import { Conversation } from '@/features/landing/conversation';
import { Dashboard } from '@/features/landing/dashboard';
import { Footer } from '@/features/landing/footer';
import { Hero } from '@/features/landing/hero';
import { HowItWorks } from '@/features/landing/how-it-works';
import { Problem } from '@/features/landing/problem';
import { Psychologist } from '@/features/landing/psychologist';
import { SilentWindow } from '@/features/landing/silent-window';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Problem />
      <SilentWindow />
      <HowItWorks />
      <Psychologist />
      <Conversation />
      <Compliance />
      <Dashboard />
      <Cta />
      <Footer />
    </main>
  );
}
