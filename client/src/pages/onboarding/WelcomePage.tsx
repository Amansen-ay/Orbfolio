import { StepLayout } from "@/features/onboarding/components/StepLayout";
import { WelcomeCard } from "@/features/onboarding/ui/WelcomeCard";

export function WelcomePage() {
  return (
    <StepLayout>
      <WelcomeCard />
    </StepLayout>
  );
}