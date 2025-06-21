interface BackgroundVideoProps {
  source?: string;
  width?: string;
  height?: string;
  preload?: "auto" | "metadata" | "none";
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
}
export default function BackgroundVideo({
  source,
  width,
  height,
  preload,
  autoPlay,
  muted,
  loop,
}: BackgroundVideoProps) {
  return (
    <video
      className="border-[6px] rounded-[0.75rem] rem,6vh,5rem)]"
      width={width || "80%"}
      height={height || "100%"}
      preload={preload || "auto"}
      autoPlay={autoPlay !== undefined ? autoPlay : true}
      muted={muted !== undefined ? muted : true}
      loop={loop !== undefined ? loop : true}
    >
      <source src={source} type="video/mp4" />
    </video>
  );
}
