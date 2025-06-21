const content_neutral_primary = "#FFF7F1";
const content_neutral_tertiary = "#FCC998B2";

interface SimpleCardProps {
  title?: string;
  description?: string;
}
export default function SimpleCard({ title, description }: SimpleCardProps) {
  return (
    <div className="flex flex-col gap-10">
      <hr style={{ height: ".2rem", background: content_neutral_tertiary }} />
      <div className="flex flex-col gap-1">
        <h2
          className="font-manrope font-bold text-[1.25rem] leading-[1.75rem] tracking-normal align-middle"
          style={{ color: content_neutral_primary }}
        >
          {title}
        </h2>
        <p
          style={{ color: content_neutral_tertiary }}
          className="font-manrope font-medium text-[0.9375rem] leading-[1.25rem] tracking-normal align-middle"
        >
          {description}
        </p>
      </div>
    </div>
  );
}
