import Image from "next/image";

interface ResponsiveImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}
export default function ResponsiveImage({
  src,
  alt,
  width,
  height,
  className,
}: ResponsiveImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      layout="responsive"
      width={width}
      height={height}
      className={className}
    />
  );
}
