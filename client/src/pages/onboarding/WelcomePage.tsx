import { StepLayout } from "@/features/onboarding/components/StepLayout";
import { WelcomeCard } from "@/features/onboarding/ui/WelcomeCard";
import {WelcomeHero} from '@/features/onboarding/components/WelcomeHero';

export function WelcomePage() {
  return (
    <StepLayout left={<WelcomeHero/>}>
      <WelcomeCard />
    </StepLayout>
  );
}