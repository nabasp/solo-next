import AccordionDemo from "@/components/AccordionDemo";
import VideoLayout from "@/components/VideoLayout";
import Section from "@/components/section/section";

interface UnifiedWorkspaceAccordionItem {
  title: string;
  content: string;
}

interface UnifiedWorkspaceSectionProps {
  mode: "LIGHT" | "DARK";
  sectionLabel: string;
  heading: string;
  description: string;
  accordionItems: UnifiedWorkspaceAccordionItem[];
  videoBgImage: string;
}

export default function UnifiedWorkspaceSection({
  mode,
  sectionLabel,
  heading,
  description,
  accordionItems,
  videoBgImage,
}: UnifiedWorkspaceSectionProps) {
  // Color variables based on mode
  const colors = {
    background:
      mode === "LIGHT" ? "var(--color-bg-light)" : "var(--color-bg-dark)",
    heading:
      mode === "LIGHT" ? "var(--color-heading)" : " rgba(255, 247, 241, 1)",
    sectionLabel:
      mode === "LIGHT"
        ? "var(--color-section-label)"
        : "rgba(252, 201, 152, 0.7)",
    desc: mode === "LIGHT" ? "var(--color-desc)" : "rgba(252, 201, 152, 1)",
  };

  return (
    <Section backgroundColor={colors.background}>
      <div className="flex flex-col lg:flex-row gap-[1.625rem] py-5 px-9 xl:py-[7.5rem] xl:px-[9.75rem]">
        <div className="flex flex-col justify-between w-full lg:w-[50%]">
          <div className="flex flex-col items-start">
            <p
              className="font-manrope text-[1rem] leading-[1.25rem] font-bold tracking-[0.1em] uppercase sm:text-[1.0625rem] sm:leading-[1.375rem]"
              style={{ color: colors.sectionLabel }}
            >
              {sectionLabel}
            </p>
            <h1
              style={{ fontFamily: "DegularDisplay", color: colors.heading }}
              className="text-[3rem] leading-[3rem] font-bold sm:text-[3.25rem] sm:leading-[3.25rem] md:text-[3.5rem] md:leading-[3.5rem] lg:mt-3"
            >
              {heading}
            </h1>
            <p className="leading-7 lg:mt-4" style={{ color: colors.desc }}>
              {description}
            </p>
          </div>
          <div className="lg:w-[68.97%]">
            <AccordionDemo items={accordionItems} darkMode={mode === "DARK"} />
          </div>
        </div>
        <div className="w-full lg:w-[50%] flex items-center">
          <VideoLayout bgImage={videoBgImage} />
        </div>
      </div>
    </Section>
  );
}
