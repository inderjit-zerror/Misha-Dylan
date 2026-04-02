"use client";
import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const WeddingHome = () => {
  // const WcontainerRef = useRef(null)
  // const WimageRef = useRef(null)

  useGSAP(() => {
    // gsap.to(`.NN`, {
    //   height:'100vh',
    //   width:'100%',
    //   ease:'none',
    //   scrollTrigger: {
    //     trigger:'.nk',
    //     start: 'top top',
    //     end: 'top -10%',
    //     scrub: true,
    //     // markers:true
    //   },
    // })
    gsap.to(`.nk`, {
      padding: 0,
      ease: "none",
      scrollTrigger: {
        trigger: ".nk",
        start: "top top",
        end: "top -10%",
        scrub: true,
        // markers:true
      },
    });
  }, []);

  // PRE-PRE-ANIMATION
  useGSAP(() => {
    gsap.to(".WEDMAIM", {
      delay: 0.1,
      y: 0,
      duration: 1,
      //  stagger:{
      //     each:'0.2',
      //     ease:'none'
      //  },
      ease: "power-in",
    });
  }, []);

  return (
    <div className="w-full  h-[100svh] relative   flex justify-center items-end   z-[-1] COLOR_BG_CREAM ">
      <div className="w-full NN h-[100svh] overflow-hidden flex relative  ">
        <img
          src={`/newimg/SonalKush2Img.webp`}
          className="w-full h-full object-cover object-right max-sm:object-[72%_18%]"
          alt="Img"
        />
      </div>

      <div className="w-full h-full absolute top-0 left-0 flex items-end lg:items-center  max-lg:justify-center  z-50 px-20 py-20">
        <div className="w-fit flex flex-col   COLOR_TEXT_CREAM">
          <h1 className="Font_YIV text-[7rem] translate-y-10 leading-[8rem] max-lg:text-[10vw] max-lg:leading-[11vw] max-sm:translate-y-5 max-sm:text-[15vw] max-sm:leading-[16vw] overflow-hidden">
            <span className=" flex translate-y-100 WEDMAIM">The</span>
          </h1>
          <h1 className="Font_Q text-[7rem] leading-[8rem] max-sm:text-[15vw] max-lg:text-[10vw] max-lg:leading-[11vw] max-sm:leading-[16vw] uppercase overflow-hidden">
            <span className=" flex translate-y-100 WEDMAIM">Wedding</span>
          </h1>
          <h1 className="Font_Q text-[7rem] leading-[8rem] max-sm:text-[15vw] max-lg:text-[10vw] max-lg:leading-[11vw] max-sm:leading-[16vw] uppercase overflow-hidden">
            <span className=" flex translate-y-100 WEDMAIM">ITINERARY.</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default WeddingHome;
