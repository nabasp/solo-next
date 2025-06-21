import * as React from "react";
import { Button } from "@/components/ui/button";

interface SubMenuCapability {
  label: string;
  description: string;
  href: string;
}

interface SubMenuProps {
  title: string;
  description: string;
  learnMoreHref: string;
  capabilities: SubMenuCapability[];
}

export function MobileNavSubMenu({
  title,
  description,
  learnMoreHref,
  capabilities,
}: SubMenuProps) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="w-full">
      <button
        className="flex items-center justify-between w-full py-2 px-2 rounded-xl text-lg font-semibold text-white hover:bg-white/20 transition focus:outline-none"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={`mobile-submenu-${title}`}
      >
        <span>{title}</span>
        <span
          className={`ml-2 transition-transform ${open ? "rotate-90" : ""}`}
        >
          ▶
        </span>
      </button>
      {open && (
        <div
          id={`mobile-submenu-${title}`}
          className="bg-white rounded-2xl p-4 mt-2 mb-4"
        >
          <div className="flex items-center justify-between mb-2">
            <div>
              <div className="font-bold text-lg text-[var(--color-primary)]">
                {title}
              </div>
              <div className="text-[var(--color-desc)] text-base opacity-80">
                {description}
              </div>
            </div>
            <a href={learnMoreHref} className="ml-4">
              <Button className="bg-[var(--color-accent)] text-[var(--color-primary)] font-semibold rounded-xl px-5 py-2 text-base shadow-none hover:bg-[var(--color-accent-tertiary)]">
                Learn more
              </Button>
            </a>
          </div>
          <hr className="my-2 border-t border-[var(--color-bg-light)]" />
          <div className="grid grid-cols-1 gap-4 mt-2">
            {capabilities.map((cap) => (
              <a
                key={cap.label}
                href={cap.href}
                className="group flex flex-col gap-1 p-2 rounded-lg hover:bg-[var(--color-bg-light)] transition"
              >
                <span className="font-semibold text-[var(--color-primary)] flex items-center gap-1">
                  {cap.label}
                  <span className="ml-1 text-xl group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </span>
                <span className="text-[var(--color-desc)] text-sm opacity-80">
                  {cap.description}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
