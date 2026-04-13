"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      },
    );
  }, []);

  return (
    <footer className="pt-10 pb-6 px-4">
      <div
        ref={footerRef}
        className="max-w-5xl mx-auto text-center COLOR_TEXT_RED"
      >
        {/* Contact Info */}
        <div className="text-left md:text-center space-y-1 text-xs md:text-sm COLOR_TEXT_RED">
          <p className="font-medium Font_Q text-xs md:text-sm">
            Please reach out to us if you have any questions or need assistance:
          </p>

          <p className="text-xs md:text-sm">
            <span className="font-medium Font_Q">RSVP Team :</span>{" "}
            <a href="tel:+919910158374" className="hover:underline Font_YV">
              +91 99101 58374
            </a>
          </p>

          <p className="Font_YV text-xs md:text-sm">
            <span className="font-medium Font_Q">Logistics Team :</span> +91
            XXXXXXXX
          </p>

          <p className="text-xs md:text-sm">
            <span className="font-medium Font_Q">Email ID :</span>{" "}
            <a
              href="mailto:dylanwedsmisha@gmail.com"
              className="hover:underline Font_YV"
            >
              dylanwedsmisha@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
