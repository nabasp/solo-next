import * as React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
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

export function NavSubMenu({
  title,
  description,
  learnMoreHref,
  capabilities,
}: SubMenuProps) {
  return (
    <HoverCard openDelay={100} closeDelay={100}>
      <HoverCardTrigger asChild>
        <Button
          variant="ghost"
          className="text-lg font-semibold px-3 py-1 bg-transparent hover:bg-white/30 hover:rounded-xl focus:bg-white/40 focus:rounded-xl text-[var(--color-navbar-link)]"
        >
          {title}
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="p-0 border-none shadow-xl rounded-2xl w-[min(95vw,600px)] mt-2">
        <div className="bg-white rounded-2xl p-4 md:p-6 flex flex-col gap-2 w-full">
          <div className="flex items-center justify-between mb-2">
            <div>
              <div className="font-bold text-lg md:text-xl text-[var(--color-primary)]">
                {title}
              </div>
              <div className="text-[var(--color-desc)] text-base md:text-lg opacity-80">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
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
      </HoverCardContent>
    </HoverCard>
  );
}
