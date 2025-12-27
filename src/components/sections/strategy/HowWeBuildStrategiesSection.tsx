// components/sections/strategy/HowWeBuildStrategiesSection.tsx
import { BarChart3, TrendingUp, Activity } from "lucide-react";

const features = [
  {
    name: "Backtesting",
    description:
      "Each strategy undergoes rigorous historical testing across multiple market regimes to validate its core logic and risk parameters.",
    icon: BarChart3,
  },
  {
    name: "Forward Testing",
    description:
      "Strategies are tested in live market conditions with paper trading before deployment, ensuring they perform as expected in real environments.",
    icon: TrendingUp,
  },
  {
    name: "Real-Time Results",
    description:
      "Continuous monitoring and validation ensure strategies adapt to changing market conditions while maintaining their core risk discipline.",
    icon: Activity,
  },
];

export function HowWeBuildStrategiesSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-text sm:text-5xl">
            How We Build Our Strategies
          </h2>
          <p className="mt-6 text-lg/8 text-text-muted">
            Every strategy is built on a rules-based system, refined through
            years of backtesting, forward testing, and real-time results.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base/7 font-semibold text-text">
                  <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-brand">
                    <feature.icon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base/7 text-text-muted">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
