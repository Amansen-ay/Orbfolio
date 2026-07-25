import { StepLayout } from "@/features/onboarding/components/StepLayout";
import { UsernameCard } from "@/features/onboarding/ui/UsernameCard";
import {CommonHero} from '@/features/onboarding/components/CommonHero';

export function UsernamePage() {
  return (
    <StepLayout left={<CommonHero/>}>
      <UsernameCard />
    </StepLayout>
  );
}