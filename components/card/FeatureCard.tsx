import * as React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  label: string;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({
  icon,
  label,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-sm p-6 md:p-8 flex flex-col gap-4 min-h-[240px] w-full ${
        className || ""
      }`.trim()}
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[var(--color-feature-icon-bg)]">
        {icon}
      </div>
      <span className="font-manrope font-bold text-[1rem] leading-[1.25rem] tracking-[0.1em] uppercase text-[var(--color-label)] ">
        {label}
      </span>
      <h3 className=" font-bold text-[3rem] leading-[3rem] tracking-normal align-bottom text-[var(--color-title)]">
        {title}
      </h3>
      <p className="font-manrope font-medium text-[1.25rem] leading-[1.75rem] tracking-normal align-middle text-[var(--color-desc)]">
        {description}
      </p>
    </div>
  );
}
