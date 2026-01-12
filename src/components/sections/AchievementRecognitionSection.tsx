// components/sections/AchievementRecognitionSection.tsx
import { Section } from "./";
import { SectionTitle, BodyText } from "@/components/typography";

export function AchievementRecognitionSection() {
  return (
    <Section background="warm" padding="standard">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionTitle className="text-4xl sm:text-5xl text-balance">
            You Built Something That Matters
          </SectionTitle>
          
          <div className="mt-8 space-y-4">
            <BodyText className="text-lg/8 font-medium text-pretty text-text-muted sm:text-xl/8">
              You&apos;ve navigated uncertainty. You&apos;ve generated real wealth. You&apos;ve earned the right to expect more from your investments.
            </BodyText>
          </div>

          <div className="mt-12">
            <BodyText className="text-2xl/8 font-semibold text-pretty text-text sm:text-3xl/8">
              What comes next?
            </BodyText>
          </div>
        </div>
      </div>
    </Section>
  );
}

