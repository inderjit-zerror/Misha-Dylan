'use client'
import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)
import Line from "@/components/sections/home/Line";

const  WeddingHero = () => {

   useGSAP(() => {
        gsap.from('.WHD1', {
            yPercent: 50,
            opacity: 0,
            stagger:{
              each:0.5,
              ease:'none'
            },
            ease: 'none',
            scrollTrigger: {
                trigger: '.WHD1',
                start: 'top 80%',
                end: 'top 30%',
                scrub: true,
                // markers:true
            }
        })
    }, [])


  return (
    <section className="h-fit flex items-center justify-center COLOR_BG_CREAM px-4 pt-[20vh] max-sm:px-[20px] pb-[4vh]">
      <div className="text-center max-w-3xl  ">
        {/* Bride Name */}
        <h1 className="Font_Q COLOR_TEXT_RED text-5xl md:text-6xl tracking-wide uppercase WHD1">
          Misha
        </h1>

        {/* And */}
        <span className="italic Font_YIV COLOR_TEXT_RED text-[50px] my-4 WHD1">
          and
        </span>

        {/* Groom Name */}
        <h1 className="Font_Q COLOR_TEXT_RED text-5xl md:text-6xl tracking-wide uppercase WHD1">
          Dylan 
        </h1>

        {/* Description */}
        {/* <p className="mt-10 Font_YV  tracking-widest uppercase COLOR_TEXT_RED leading-relaxed WHD1">
          Request the pleasure of your company <br />
          to celebrate their wedding on
        </p> */}

        {/* Date */}
        <div className="mt-6 flex items-center justify-center gap-4 mt-10 COLOR_TEXT_RED WHD1">
          <span className="text-[18px] font-medium Font_YV  tracking-widest uppercase">
            September
          </span>

          <span className="text-2xl md:text-[40px] Font_Q">
            17<sup className="text-sm Font_YV ">th</sup> – 20<sup className="text-sm"> th</sup>
          </span>

          <span className="text-[18px] font-medium Font_YV  tracking-widest uppercase">
            2026
          </span>
        </div>
      </div>

    </section>
  );
};

export default WeddingHero;
