interface SimpleCardProps {
  title?: string;
  description?: string;
}
export default function SimpleCard({ title, description }: SimpleCardProps) {
  return (
    <div className="flex flex-col gap-6">
      <hr style={{ height: "2px", background: "rgba(252, 201, 152, 0.7)" }} />
      <div className="flex flex-col gap-2">
        <h2
          className="font-manrope text-[1.25rem] leading-[1.75rem] font-bold sm:text-[1.375rem] sm:leading-[2rem] md:text-[1.5rem] md:leading-[2.125rem]"
          style={{ color: "rgba(255, 247, 241, 1)" }}
        >
          {title}
        </h2>
        <p
          style={{ color: "rgba(252, 201, 152, 0.7)" }}
          className="font-manrope text-[0.9375rem] leading-[1.25rem] font-medium"
        >
          {description}
        </p>
      </div>
    </div>
  );
}
