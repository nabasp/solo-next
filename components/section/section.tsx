"use client";
import React, { ReactNode } from "react";

interface SectionProp {
  backgroundColor?: string;
  height?: string;
  bgImageSrc?: string;
  children?: ReactNode;
}

export default function Section({
  backgroundColor,
  height,
  bgImageSrc,
  children,
}: SectionProp) {
  return (
    <div
      className={"w-full bg-cover bg-center"}
      style={{
        backgroundColor: backgroundColor || "var(--color-bg)",
        height,
        backgroundImage: bgImageSrc ? `url(${bgImageSrc})` : undefined,
      }}
    >
      {children}
    </div>
  );
}
