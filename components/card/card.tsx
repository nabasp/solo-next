"use client";
import React, { useRef } from "react";
interface CardProps {
  title: string;
  imageSrc?: string;
  videoSrc: string;
  description: string;
}

export default function VideoCard({
  title,
  imageSrc = "/background/sea.png",
  videoSrc,
  description,
}: CardProps) {
  const [mouseOver, setMouseOver] = React.useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  function handleMouseOver() {
    setMouseOver(true);
    videoRef?.current?.play();
  }
  function handleMouseOut() {
    setMouseOver(false);
    videoRef?.current?.pause();
  }
  return (
    <div
      onPointerEnter={handleMouseOver}
      onMouseLeave={handleMouseOut}
      className="rounded-[0.75rem] bg-white"
    >
      <div
        style={{
          backgroundImage: imageSrc ? `url(${imageSrc})` : undefined,
          paddingTop: mouseOver ? ".75rem" : "2.25rem",
          paddingBottom: mouseOver ? ".75rem" : "2.25rem",
          filter: mouseOver ? "none" : " grayscale(1) contrast(1.1)",
          transition:
            "padding 0.5s cubic-bezier(0.4,0,0.2,1), filter 0.5s cubic-bezier(0.4,0,0.2,1)",
        }}
        className="rounded-t-[0.75rem] px-3 py-9"
      >
        <video
          ref={videoRef}
          preload={"auto"}
          muted={true}
          loop={true}
          playsInline
          className="rounded-[0.75rem] w-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" /> Your browser does not
          support the video tag.
        </video>
      </div>
      <div className="p-6">
        <h3 className="font-manrope  text-[1.25rem] leading-[1.75rem] font-bold text-[color:#2D2926]">
          {title}
        </h3>
        <div
          className="font-manrope font-medium text-[color:#7A6E64]"
          style={{
            overflow: "hidden",
            height: mouseOver ? "3rem" : "0",
            transition:
              "height 0.5s cubic-bezier(0.4,0,0.2,1), filter 0.5s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
