"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Line = () => {
  useGSAP(() => {
    gsap.to(".LHD1", {
      height: "30vh",
      ease: "none",
      scrollTrigger: {
        trigger: ".LHD1",
        start: "top 60%",
        end: "top 45%",
        scrub: true,
        // markers:true
      },
    });
  }, []);

  return (
    <div className="w-full h-[30vh] flex justify-center  COLOR_BG_CREAM items-start">
      <div className="w-[2px] rounded-full h-0 COLOR_BG_RED LHD1"></div>
    </div>
  );
};

export default Line;
