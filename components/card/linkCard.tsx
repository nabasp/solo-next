import * as React from "react";
import Image from "next/image";
import Arrow from "../../public/arrow-right.svg";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface LinkCardProps {
  title: string;
  description: string;
  imageSrc: string;
  alt?: string;
  className?: string;
  link?: string;
}

export function LinkCard({
  title,
  description,
  imageSrc,
  alt,
  className,
  link,
}: LinkCardProps) {
  return (
    <div
      className={cn(
        "bg-[var(--color-primary)] border border-solid border-[var(--color-secondary)] rounded-3xl overflow-hidden flex flex-col relative w-full max-w-xl min-w-[160px] h-[clamp(260px,40vw,360px)] sm:h-[320px] md:h-[340px] lg:h-[360px]",
        className
      )}
      style={{ position: "relative" }}
    >
      {/* Content wrapper (top 50%) */}
      <div className="flex flex-col justify-center px-3 sm:px-4 md:px-6 py-3 sm:py-5 h-1/2 min-h-[80px]">
        <span
          className="uppercase font-manrope font-bold text-xs sm:text-sm md:text-base leading-5 tracking-[0.1em] align-middle"
          style={{ color: "var(--color-accent)" }}
        >
          {title}
        </span>
        <span className="font-manrope font-bold text-base sm:text-lg md:text-xl lg:text-2xl leading-6 sm:leading-7 md:leading-8 align-middle mt-2 text-[var(--color-bg-light)]">
          {description}
        </span>
      </div>
      {/* Image wrapper (bottom 50%) */}
      <div className="flex items-start justify-end overflow-hidden h-1/2 relative bg-black/5">
        <div className="w-full h-[200%] relative -top-1/4 flex justify-end">
          <Image
            src={imageSrc}
            alt={alt || title}
            fill
            className="object-contain object-top md:object-right w-full h-full"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 552px"
          />
        </div>
      </div>
      {/* Icon button bottom right */}
      <Button
        asChild
        size="icon"
        variant="outline"
        className="absolute bottom-3 right-3 border-2 border-[var(--color-linkcard-icon)] bg-black/10 hover:bg-black/20 text-[var(--color-linkcard-icon)] rounded-full w-11 h-11 flex items-center justify-center p-0"
      >
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={title}
        >
          <Image src={Arrow} alt="arrow right" width={28} height={28} />
        </a>
      </Button>
    </div>
  );
}
