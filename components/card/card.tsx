"use client";

import React, { useRef, useState } from "react";

interface CardProps {
  title?: string;
  imageSrc?: string;
  videoSrc?: string;
  alt?: string;
  description?: string;
}

const CARD_HEIGHT = 360; // px, fixed height for desktop
const DESC_MAX_HEIGHT = 76; // px, max height for desc

const Card: React.FC<CardProps> = ({ videoSrc, title, description }) => {
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setHovered(true);
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    setHovered(false);
    videoRef.current?.pause();
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  // Responsive: use 100vw for mobile, fixed for desktop
  const cardWidth = "100%";
  const cardMaxWidth = "360px";
  const cardHeight = CARD_HEIGHT;
  const descHeight = hovered ? DESC_MAX_HEIGHT : 0;
  const videoHeight = cardHeight - descHeight;

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        width: cardWidth,
        maxWidth: cardMaxWidth,
        height: cardHeight,
        position: "relative",
        borderTopLeftRadius: "1rem",
        borderTopRightRadius: "1rem",
        overflow: "hidden",
        background: "#fff",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        boxSizing: "border-box",
      }}
    >
      {/* Responsive video wrapper */}
      <div
        className="video-wrapper"
        style={{
          height: videoHeight,
          width: "100%",
          transition: "height 0.4s cubic-bezier(0.4,0,0.2,1)",
          position: "relative",
          background:
            "url('/background/oil_paint.png') center center / cover no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          filter: hovered ? "none" : "grayscale(1) contrast(1.1)",
          transitionProperty: "height, filter",
          boxSizing: "border-box",
        }}
      >
        <video
          ref={videoRef}
          src={videoSrc}
          className="card-video"
          muted
          loop
          preload="auto"
          style={{
            display: "block",
            width: "90%",
            height: "80%",
            objectFit: "cover",
            borderRadius: "1rem",
          }}
        />
      </div>
      {/* Overlay for title and desc at bottom */}
      <div
        style={{
          position: "relative",
          background: "rgba(255, 255, 255, 0.8)",
          color: "#000",
          borderBottomLeftRadius: "1rem",
          borderBottomRightRadius: "1rem",
          padding: "1rem",
          boxSizing: "border-box",
          transition: "background 0.4s, color 0.4s",
        }}
      >
        <h3 style={{ margin: 0, fontSize: "1.25rem", fontWeight: 600 }}>
          {title}
        </h3>
        <div
          style={{
            maxHeight: descHeight,
            overflow: "hidden",
            transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          <p
            style={{
              margin: 0,
              transform: hovered ? "translateY(0)" : "translateY(100%)",
              opacity: hovered ? 1 : 0,
              transition:
                "transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s",
            }}
          >
            {description}
          </p>
        </div>
      </div>
      {/* Responsive styles */}
      <style>{`
        .video-wrapper {
          max-width: 360px;
          max-height: 296px;
          width: 100%;
          height: ${videoHeight}px;
        }
        .card-video {
          max-width: 336px;
          max-height: 224px;
          width: 100%;
          height: 100%;
        }
        @media (max-width: 1440px) {
          .video-wrapper {
            max-width: 360px;
            max-height: 296px;
          }
          .card-video {
            max-width: 336px;
            max-height: 224px;
          }
        }
        @media (max-width: 600px) {
          div[style*='max-width: 360px'] {
            max-width: 98vw !important;
            height: 54vw !important;
            min-width: 0 !important;
          }
          .video-wrapper {
            max-width: 98vw;
            max-height: 40vw;
          }
          .card-video {
            max-width: 92vw;
            max-height: 24vw;
          }
          h3 {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Card;
