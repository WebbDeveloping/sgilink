"use client";

interface QualityFeatureCardProps {
  title: string;
  description: string;
  icon: string;
  bgImage: string;
}

export function QualityFeatureCard({
  title,
  description,
  icon,
  bgImage,
}: QualityFeatureCardProps) {
  return (
    <article className="group relative h-full overflow-hidden rounded-[35px] border border-white/8 bg-card transition-all hover:border-white/20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />

      {/* Content Wrapper */}
      <div className="relative z-10 flex h-full flex-col p-6 sm:p-8">
        {/* Icon Wrapper */}
        <div className="mb-6 flex items-center gap-3">
          <div className="relative shrink-0">
            {/* Outer Circle */}
            <div className="relative h-16 w-16 overflow-hidden rounded-full border border-white/8 bg-transparent">
              <img
                src="https://framerusercontent.com/images/Hun67z2gqUXTnugsKl7wDz54Uk.svg"
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                decoding="async"
                loading="lazy"
              />
            </div>
            {/* Inner Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={icon}
                alt=""
                className="h-8 w-8 object-cover"
                decoding="async"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mt-auto">
          <h3 className="mb-2 text-xl font-semibold leading-tight text-white sm:text-2xl">
            {title}
          </h3>
          <p className="text-sm leading-[150%] text-[rgb(156,157,159)] sm:text-base">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}
