import React from "react";

interface SectionHeaderProps {
  sectionLabel: string;
  heading: React.ReactNode;
  description: React.ReactNode;
  mode?: "LIGHT" | "DARK";
  className?: string;
}

const colorPresets = {
  LIGHT: {
    sectionLabelColor: "rgba(150, 147, 143, 1)",
    headingColor: "rgba(45, 41, 38, 1)",
    descriptionColor: "rgba(80, 73, 63, 1)",
    headingFontFamily: "DegularDisplay",
  },
  DARK: {
    sectionLabelColor: "rgba(252, 201, 152, 0.7)",
    headingColor: "rgba(255, 247, 241, 1)",
    descriptionColor: "rgba(252, 201, 152, 1)",
    headingFontFamily: "DegularDisplay",
  },
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
  sectionLabel,
  heading,
  description,
  mode = "LIGHT",
  className = "",
}) => {
  const colors = colorPresets[mode];
  return (
    <div className={`flex flex-col items-start ${className}`}>
      <p
        className="font-manrope text-[1rem] leading-[1.25rem] font-bold tracking-[0.1em] uppercase sm:text-[1.0625rem] sm:leading-[1.375rem]"
        style={{ color: colors.sectionLabelColor }}
      >
        {sectionLabel}
      </p>
      <h1
        style={{
          fontFamily: colors.headingFontFamily,
          color: colors.headingColor,
        }}
        className="text-[3rem] leading-[3rem] font-bold sm:text-[3.25rem] sm:leading-[3.25rem] md:text-[3.5rem] md:leading-[3.5rem] lg:mt-3"
      >
        {heading}
      </h1>
      <p
        className="leading-7 lg:mt-4"
        style={{ color: colors.descriptionColor }}
      >
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
