'use client'
import React, { useState } from "react";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)


const WeddingVenue = () => {


  useGSAP(() => {
    const isMobile = window.innerWidth < 700

    gsap.from('.WeddingText', {
      opacity: 0,
      yPercent: 20,
      stagger: { each: 0.5 },
      ease: 'none',
      scrollTrigger: {
        trigger: '.WeddingTextCont',
        start: isMobile ? 'top 90%' : 'top 50%',
        end: isMobile ? 'top 50%' : 'top top',
        scrub: true,
        // markers: true
      }
    })
  }, [])


  return (
    <section className="h-fit max-sm:h-fit  WeddingTextCont py-[10vh] flex items-center justify-center COLOR_BG_CREAM px-6">
      <div className=" text-center COLOR_TEXT_RED  ">

        {/* Top label */}
        <p className="tracking-tight uppercase mb-6 Font_YV WeddingText max-sm:font-semibold">
          Official Wedding Hotel
        </p>

        {/* Main heading */}
        <h5 className="Font_Q  leading-none text-[7vw] max-sm:text-[10vw] tracking-wide mb-10 WeddingText uppercase">
          raffles udaipur
        </h5>

        {/* Dates */}
        <div className="flex items-center justify-center gap-6 max-sm:gap-2 text-sm max-sm:text-[12px] tracking-wide mb-10 WeddingText">
          <span className="uppercase max-sm:text-[10px]  ">Check in</span>
          <span className="font-serif text-4xl max-sm:text-[20px]">21<sup className="text-xs">st</sup></span>
          <span className="uppercase max-sm:text-[10px] ">September</span>

          <span className="opacity-50 max-sm:text-[10px] ">–</span>

          <span className="uppercase max-sm:text-[10px] ">Check out</span>
          <span className="font-serif text-4xl max-sm:text-[20px]">24<sup className="text-xs">th</sup></span>
          <span className="uppercase max-sm:text-[10px] ">September</span>
        </div>

        {/* Description */}
        <p className="max-w-xl mx-auto Font_YV leading-[20px] COLOR_TEXT_RED WeddingText">
         Nestled amidst the serene beauty of Udaipur, Raffles Udaipur sets the perfect stage for our wedding celebrations. With its timeless elegance, lakeside charm, and warm hospitality, this is where our most cherished memories will unfold.
        </p>
      </div>
    </section>
  );
};

export default WeddingVenue;
