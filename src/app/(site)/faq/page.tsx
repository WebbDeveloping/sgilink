// app/faq/page.jsx

import { HelpCircle } from "lucide-react";
import {
  Eyebrow,
  SectionTitle,
  BodyText,
  SmallMuted,
} from "@/components/atoms";
import { IconEyebrow, FaqItem, InfoCard } from "@/components/molecules";

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <FaqHeroSection />
      <FaqListSection />
      <FaqFooterSection />
    </main>
  );
}

/** HERO – consistent with other pages */
function FaqHeroSection() {
  return (
    <section className="relative border-b border-border bg-surface py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6">
        <IconEyebrow
          icon={HelpCircle}
          label="Frequently Asked Questions"
          className="mb-4 inline-flex items-center justify-center text-text-muted"
          iconClassName="text-brand"
        />

        <SectionTitle
          as="h1"
          className="text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl"
        >
          Answers to key questions about{" "}
          <span className="relative inline-block">
            <span className="absolute inset-x-0 bottom-1 h-2 rounded-full bg-section-blue" />
            <span className="relative">SGI-LINK</span>
          </span>
          .
        </SectionTitle>

        <BodyText className="mx-auto mt-5 max-w-3xl text-sm text-text-muted sm:text-base">
          Below are short answers to common questions investors ask about our
          strategy, structure, and process. These are summaries only — full
          details are always provided in formal documents and direct
          conversations.
        </BodyText>
      </div>
    </section>
  );
}

/** MAIN FAQ LIST */
function FaqListSection() {
  const generalFaqs = [
    {
      question: "What is SGI-LINK and how does it work?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra, ipsum sed aliquet hendrerit, velit sem elementum mauris, et molestie nibh nibh quis ante. Suspendisse potenti. Duis porta tincidunt ligula, id pulvinar lorem feugiat vitae.",
    },
    {
      question: "Who is SGI-LINK intended for?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis malesuada lorem, sit amet interdum velit ultrices non. Curabitur sagittis sed ligula et mollis. Donec id ipsum ipsum. Sed ac justo at arcu porta ullamcorper.",
    },
    {
      question: "What are the minimum investment requirements?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae nisl non mi varius tincidunt. Phasellus suscipit, mauris eget dapibus pulvinar, turpis nibh consequat velit, nec imperdiet tellus elit in lorem.",
    },
    {
      question: "How often are results and reporting updated?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in urna sed libero mattis accumsan. Aenean auctor nibh et arcu blandit, eget iaculis libero eleifend. Nunc in velit at turpis viverra ullamcorper.",
    },
  ];

  const strategyFaqs = [
    {
      question: "What markets do your systems trade?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor nulla sit amet risus efficitur, a pharetra tortor ultrices. Praesent convallis urna nec nunc ultrices, et interdum massa gravida.",
    },
    {
      question: "How do you think about risk and drawdowns?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis nibh sodales, tristique justo nec, dictum nibh. Sed quis odio eget nunc consequat tempor. Sed pretium fringilla libero, a dignissim purus.",
    },
    {
      question: "Are results based on live trading or backtests?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique lectus nec ante mollis, ac tristique libero porta. Donec feugiat augue ac lectus finibus, sit amet vestibulum magna lacinia.",
    },
    {
      question: "Can investors redeem or add capital at any time?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus lacinia aliquet magna, ac hendrerit purus.",
    },
  ];

  return (
    <section className="border-b border-border bg-surface py-24">
      <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6">
        {/* General FAQs */}
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] md:items-start">
          <div className="space-y-3">
            <Eyebrow className="text-text-muted">General</Eyebrow>
            <SectionTitle>High-level questions about SGI-LINK.</SectionTitle>
            <BodyText className="text-sm text-text-muted sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
              ante nec lorem fermentum ultrices. Integer sed urna ut sapien
              consequat vulputate ut sed orci.
            </BodyText>
          </div>

          <div className="space-y-4">
            {generalFaqs.map((item) => (
              <FaqItem
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>

        {/* Strategy & Risk FAQs */}
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] md:items-start">
          <div className="space-y-3">
            <Eyebrow className="text-text-muted">Strategy &amp; Risk</Eyebrow>
            <SectionTitle>How the strategy behaves over time.</SectionTitle>
            <BodyText className="text-sm text-text-muted sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              varius maximus justo, non laoreet sapien condimentum ut. Integer
              at felis in est ultrices euismod.
            </BodyText>
          </div>

          <div className="space-y-4">
            {strategyFaqs.map((item) => (
              <FaqItem
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** FOOTER – small reassurance / contact type block */
function FaqFooterSection() {
  return (
    <section className="bg-section-blue border-t border-border-blue py-24">
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6">
        {/* Intro Block */}
        <div className="max-w-3xl space-y-3">
          <IconEyebrow
            icon={HelpCircle}
            label="Still Have Questions?"
            className="text-brand-body-alt"
            iconClassName="text-brand"
          />

          <SectionTitle className="text-brand-on">
            We expect — and welcome — detailed questions.
          </SectionTitle>

          <BodyText className="text-sm text-brand-on-soft sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            feugiat arcu id tortor dignissim, sed venenatis magna dapibus.
            Suspendisse dapibus eu justo vitae efficitur.
          </BodyText>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          <InfoCard title="For accredited and qualified investors">
            <BodyText className="text-xs text-brand-on-soft sm:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              facilisis lectus vitae velit faucibus, ac pharetra eros
              ullamcorper. Curabitur in lorem sit amet diam dapibus laoreet.
            </BodyText>

            <SmallMuted className="mt-2 text-brand-body-alt">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              urna sit amet ligula aliquet consequat.
            </SmallMuted>
          </InfoCard>

          <InfoCard title="Request full materials">
            <BodyText className="text-xs text-brand-on-soft sm:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              pellentesque, erat in pulvinar feugiat, ipsum arcu porta ante, sed
              cursus arcu tellus non lorem.
            </BodyText>

            <SmallMuted className="mt-2 text-brand-body-alt">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              id erat convallis, pretium arcu sed, cursus massa.
            </SmallMuted>
          </InfoCard>
        </div>
      </div>
    </section>
  );
}
