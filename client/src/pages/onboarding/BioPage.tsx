import { StepLayout } from "@/features/onboarding/components/StepLayout";
import { BioCard } from "@/features/onboarding/ui/BioCard";
import {CommonHero} from '@/features/onboarding/components/CommonHero';

export function BioPage() {
  return (
    <StepLayout left={<CommonHero/>}>
      <BioCard />
    </StepLayout>
  );
}