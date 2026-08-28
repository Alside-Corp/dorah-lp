import { CallToAction } from '@/widgets/call-to-action';
import { Compliance } from '@/widgets/compliance';
import { Conversation } from '@/widgets/conversation';
import { Dashboard } from '@/widgets/dashboard';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { Hero } from '@/widgets/hero';
import { HowItWorks } from '@/widgets/how-it-works';
import { Impact } from '@/widgets/impact';
import { Problem } from '@/widgets/problem';
import { Psychologist } from '@/widgets/psychologist';

export function LandingPage() {
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
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
