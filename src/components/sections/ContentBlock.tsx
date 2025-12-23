import type { ReactNode } from "react";
import { Eyebrow, SectionTitle, BodyText } from "@/components/typography";

type Align = "left" | "center";
type MaxWidth = "sm" | "md" | "lg" | "xl";

export function ContentBlock({
  eyebrow,
  title,
  description,
  align = "left",
  maxWidth = "md",
  className = "",
  children,
}: {
  eyebrow?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  align?: Align;
  maxWidth?: MaxWidth;
  className?: string;
  children?: ReactNode;
}) {
  const alignClasses: Record<Align, string> = {
    left: "text-left",
    center: "text-center",
  };

  const maxWidthClasses: Record<MaxWidth, string> = {
    sm: "max-w-2xl",
    md: "max-w-3xl",
    lg: "max-w-4xl",
    xl: "max-w-5xl",
  };

  const hasContent = eyebrow || title || description || children;

  if (!hasContent) {
    return null;
  }

  return (
    <div
      className={`mx-auto ${maxWidthClasses[maxWidth]} ${alignClasses[align]} ${className}`}
    >
      {eyebrow && (
        <div className={align === "center" ? "flex justify-center" : ""}>
          {typeof eyebrow === "string" ? (
            <Eyebrow className="text-text-muted">{eyebrow}</Eyebrow>
          ) : (
            eyebrow
          )}
        </div>
      )}
      {title && (
        <SectionTitle
          className={`mt-4 text-pretty ${align === "center" ? "text-balance" : ""} sm:text-balance`}
        >
          {title}
        </SectionTitle>
      )}
      {description && (
        <BodyText className="mt-6 text-text-muted">{description}</BodyText>
      )}
      {children && <div className={title || description ? "mt-6" : ""}>{children}</div>}
    </div>
  );
}

