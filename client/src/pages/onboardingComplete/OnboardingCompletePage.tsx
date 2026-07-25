import { StepLayout } from "@/features/onboarding/components/StepLayout";
import { CompletionHero } from "./ui/CompletionHero";
import { CompletionCard } from "./ui/CompletionCard";

export function OnboardingCompletePage() {
  return (
    <StepLayout
      left={<CompletionHero />}
    >
      <CompletionCard />
    </StepLayout>
  );
}