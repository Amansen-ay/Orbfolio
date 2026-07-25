import { StepLayout } from "@/features/onboarding/components/StepLayout";
import { BirthdayCard } from "@/features/onboarding/ui/BirthdayCard";
import {CommonHero} from '@/features/onboarding/components/CommonHero';

export function BirthdayPage() {
  return (
    <StepLayout left={<CommonHero/>}>
      <BirthdayCard />
    </StepLayout>
  );
}