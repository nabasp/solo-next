import * as React from "react";
import Image from "next/image";
import Arrow from "../../public/arrow-right.svg";
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
  link,
}: LinkCardProps) {
  return (
    <div className=" relative flex flex-col justify-between w-[34.5rem] h-[22.5rem] rounded-[1.5rem] border border-[#3D3834] bg-[#3D3834]">
      {/* Content wrapper (top 50%) */}
      <div className="flex flex-col m-8">
        <span
          style={{
            color: "rgba(252, 201, 152, 1)",
          }}
          className="font-manrope text-base font-bold leading-5 tracking-[1.6px] uppercase"
        >
          {title}
        </span>
        <p
          style={{ width: "18.5rem" }}
          className="text-[#FFF7F1] font-manrope text-2xl not-italic font-bold leading-9"
        >
          {description}
        </p>
      </div>
      {/* Image wrapper (bottom 50%) */}
      <div
        className="h-full w-full bg-cover bg-right rounded-[1.5rem]"
        style={{
          backgroundImage: `linear-gradient(108deg, rgba(61, 56, 52, 0) 0%, #3D3834 100%), url('${imageSrc}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "left top",
        }}
      ></div>
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
