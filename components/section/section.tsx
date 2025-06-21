"use client";
import React, { ReactNode } from "react";

interface SectionProp {
  backgroundColor?: string;
  height?: string;
  classNames?: string;
  children?: ReactNode;
}

export default function Section({
  backgroundColor,
  height,
  classNames,
  children,
}: SectionProp) {
  return (
    <div
      className={`${classNames} flex flex-wrap justify-evenly gap-6 mx-auto px-4 w-full bg-cover bg-center`}
      style={{ backgroundColor, height }}
    >
      {children}
    </div>
  );
}
