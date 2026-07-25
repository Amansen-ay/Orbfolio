import { StepLayout } from "@/features/onboarding/components/StepLayout";
import { DisplayNameCard } from "@/features/onboarding/ui/DisplayNameCard";
import {CommonHero} from '@/features/onboarding/components/CommonHero';

export function DisplayNamePage() {
  return (
    <StepLayout left={<CommonHero/>}>
      <DisplayNameCard />
    </StepLayout>
  );
}