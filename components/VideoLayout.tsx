import BackgroundVideo from "@/components/video/video";

interface VideoLayoutProps {
  bgImage?: string;
  videoSrc?: string;
}

export default function VideoLayout({
  bgImage = "sea",
  videoSrc = "/dashboard/d1.mp4",
}: VideoLayoutProps) {
  return (
    <div
      className="rounded-[0.75rem] flex bg-cover bg-center"
      style={{ backgroundImage: `url('/background/${bgImage}.png')` }}
    >
      <div className="w-full h-full flex justify-end py-8 md:py-10 lg:py-12 xl:py-14">
        <BackgroundVideo source={videoSrc} />
      </div>
    </div>
  );
}
