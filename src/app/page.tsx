import { Features } from '@/components/features';
import { FeatureSecondary } from '@/components/features-secondary';
import { Hero } from '@/components/hero';
import { LogoCloud } from '@/components/logo-cloud';
import { ModeToggle } from '@/components/mode-toggle';
import { Speed } from '@/components/speed';

export default function Home() {
  return (
    <div className="font-display min-h-screen">
      <Hero />
      <LogoCloud />
      <Features />
      <Speed />
      <FeatureSecondary />
    </div>
  );
}
