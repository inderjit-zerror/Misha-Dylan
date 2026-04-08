"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const categories = [
  { label: "HIGHLIGHTS", count: "23" },
  { label: "FASHION EDITORIALS", count: "47" },
  { label: "CELEBRITY & ARTISTS", count: "31" },
  { label: "COMMERCIAL", count: "19" },
  { label: "AGENCY WORK", count: "12" },
];

// const images = [
//   {
//     src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80",
//     category: "HIGHLIGHTS",
//     label: "01",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80",
//     category: "FASHION EDITORIALS",
//     label: "02",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80",
//     category: "CELEBRITY & ARTISTS",
//     label: "03",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80",
//     category: "COMMERCIAL",
//     label: "04",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
//     category: "AGENCY WORK",
//     label: "05",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1488716820095-cbe80883c496?w=400&q=80",
//     category: "HIGHLIGHTS",
//     label: "06",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80",
//     category: "FASHION EDITORIALS",
//     label: "07",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=400&q=80",
//     category: "COMMERCIAL",
//     label: "08",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
//     category: "CELEBRITY & ARTISTS",
//     label: "09",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80",
//     category: "AGENCY WORK",
//     label: "10",
//   },
// ];


const images = [
  {
    src: "/imgs/newHomeImg/c1.jpg",
    category: "BRIDAL PORTRAIT",
    label: "01",
  },
  {
    src: "/imgs/newHomeImg/c2.jpg",
    category: "CEREMONY",
    label: "02",
  },
  {
    src: "/imgs/newHomeImg/c3.jpg",
    category: "COUPLE SESSION",
    label: "03",
  },
  {
    src: "/imgs/newHomeImg/c4.jpg",
    category: "DETAILS",
    label: "04",
  },
  {
    src: "/imgs/newHomeImg/c5.jpg",
    category: "RECEPTION",
    label: "05",
  },
  {
    src: "/imgs/newHomeImg/c6.jpg",
    category: "BRIDAL PORTRAIT",
    label: "06",
  },
  {
    src: "/imgs/newHomeImg/c7.jpg",
    category: "CEREMONY",
    label: "07",
  },
  {
    src: "/imgs/newHomeImg/c8.jpg",
    category: "COUPLE SESSION",
    label: "08",
  },
  {
    src: "/imgs/newHomeImg/NHHIMG.jpg",
    category: "DETAILS",
    label: "09",
  },
  {
    src: "/imgs/newHomeImg/NHHIMG2.jpg",
    category: "RECEPTION",
    label: "10",
  },
];

function ImageCard({ img, index }) {
  const imgRef = useRef(null);
  const overlayRef = useRef(null);

  const handleEnter = () => {
    gsap.to(imgRef.current, { scale: 1.06, duration: 0.6, ease: "power2.out" });
    gsap.to(overlayRef.current, { opacity: 1, duration: 0.4, ease: "power2.out" });
  };

  const handleLeave = () => {
    gsap.to(imgRef.current, { scale: 1, duration: 0.7, ease: "power2.inOut" });
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.4, ease: "power2.out" });
  };

  const heights = ["h-[520px]", "h-[460px]", "h-[540px]", "h-[490px]", "h-[510px]"];
  const cardHeight = heights[index % heights.length];

  return (
    <div
      className={`relative flex-shrink-0 w-[20%] mx-[3px] mt-auto ${cardHeight} overflow-hidden group`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* Image */}
      <img
        ref={imgRef}
        src={img.src}
        alt={img.category}
        className="w-full h-full object-cover object-top will-change-transform"
        draggable={false}
      />

      {/* Hover overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 opacity-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)",
        }}
      />

      {/* Label on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
        <p className="text-white/40 text-[8px] tracking-[0.35em] uppercase mb-1">
          {img.label}
        </p>
        <p className="text-white text-[10px] tracking-[0.2em] uppercase font-light">
          {img.category}
        </p>
      </div>

      {/* Corner accent */}
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="w-4 h-4 border-t border-r border-white/60" />
      </div>
    </div>
  );
}

export default function MarqueeGallery() {
  const trackRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const totalWidth = track.scrollWidth / 2;

    tweenRef.current = gsap.to(track, {
      x: `-=${totalWidth}`,
      duration: 30,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
      },
    });

    return () => {
      tweenRef.current?.kill();
    };
  }, []);

  const handleMouseEnter = () => tweenRef.current?.pause();
  const handleMouseLeave = () => tweenRef.current?.resume();

  return (
    <div className="h-fit  overflow-hidden">
      
      {/* Marquee */}
      <div
        className="relative w-full overflow-hidden cursor-none"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Edge fades */}
        <div className="absolute left-0 top-0 w-24 h-full z-10 pointer-events-none bg-gradient-to-r from-[#F6F5F1] to-transparent" />
        <div className="absolute right-0 top-0 w-24 h-full z-10 pointer-events-none bg-gradient-to-l from-[#F6F5F1] to-transparent" />

        {/* Track — duplicated for seamless loop */}
        <div ref={trackRef} className="flex will-change-transform">
          {[...images, ...images].map((img, i) => (
            <ImageCard key={i} img={img} index={i} />
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex items-center justify-between px-8 py-4 border-t border-white/10">
        <span className="text-white/20 text-[9px] tracking-[0.4em] uppercase">
          Hover to pause
        </span>
        <div className="flex items-center gap-2">
          <div className="w-1 h-1 rounded-full bg-white/40 animate-pulse" />
          <span className="text-white/20 text-[9px] tracking-[0.4em] uppercase">
            Scroll continues
          </span>
        </div>
      </div>
    </div>
  );
}