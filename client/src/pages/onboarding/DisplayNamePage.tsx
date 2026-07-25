import { StepLayout } from "@/features/onboarding/components/StepLayout";
import { DisplayNameCard } from "@/features/onboarding/ui/DisplayNameCard";

export function WelcomePage() {
  return (
    <StepLayout>
      <DisplayNameCard />
    </StepLayout>
  );
}