import { Header } from '@/components/shared/header';
import { Cta } from '@/features/landing/cta';
import { Compliance } from '@/features/landing/compliance';
import { Conversation } from '@/features/landing/conversation';
import { Dashboard } from '@/features/landing/dashboard';
import { Footer } from '@/features/landing/footer';
import { Hero } from '@/features/landing/hero';
import { HowItWorks } from '@/features/landing/how-it-works';
import { Impact } from '@/features/landing/impact';
import { Problem } from '@/features/landing/problem';
import { Psychologist } from '@/features/landing/psychologist';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Impact />
        <Conversation />
        <HowItWorks />
        <Psychologist />
        <Compliance />
        <Dashboard />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
