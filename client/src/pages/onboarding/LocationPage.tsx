import { StepLayout } from "@/features/onboarding/components/StepLayout";
import { LocationCard } from "@/features/onboarding/ui/LocationCard";
import {CommonHero} from '@/features/onboarding/components/CommonHero';

export function LocationPage() {
  return (
    <StepLayout left={<CommonHero/>}>
      <LocationCard />
    </StepLayout>
  );
}