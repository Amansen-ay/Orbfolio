import { StepLayout } from "@/features/onboarding/components/StepLayout";
import { AvatarCard } from "@/features/onboarding/ui/AvatarCard";
import {CommonHero} from '@/features/onboarding/components/CommonHero';

export function AvatarPage() {
  return (
    <StepLayout left={<CommonHero/>}>
      <AvatarCard />
    </StepLayout>
  );
}