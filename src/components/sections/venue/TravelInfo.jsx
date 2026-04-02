'use client'
import React, { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger)

const TravelInfo = () => {

  const row1 = useRef(null)
  const row2 = useRef(null)
  const row3 = useRef(null)

  useGSAP(() => {
    const createMarquee = (el, direction = 1) => {
      const tl = gsap.timeline({
        repeat: -1,
        defaults: { ease: "none" }
      })

      tl.fromTo(
        el,
        { xPercent: 0 },
        {
          xPercent: direction === 1 ? -50 : 50,
          duration: 20,
        }
      )

      return tl
    }


    const tl1 = createMarquee(row1.current, 1)   // right
    const tl2 = createMarquee(row2.current, -1)  // left
    const tl3 = createMarquee(row3.current, 1)   // right

    ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        const velocity = self.getVelocity()
        const speed = gsap.utils.clamp(0.5, 4, Math.abs(velocity) / 300)

        tl1.timeScale(speed)
        tl2.timeScale(speed)
        tl3.timeScale(speed)
      },
      onStop: () => {
        gsap.to([tl1, tl2, tl3], {
          timeScale: 1,
          duration: 0.6,
          ease: "power3.out",
        })
      },
    })
  }, [])

  return (
    <section className="relative COLOR_BG_RED py-32 px-6 overflow-hidden ">

      {/* Background oversized text */}
      <div className="absolute inset-0 flex flex-col justify-center gap-10 COLOR_TEXT_CREAM opacity-5 pointer-events-none">

        {/* ROW 1 */}
        <div className="flex whitespace-nowrap uppercase Font_Q " ref={row1}>
          {[...Array(16)].map((_, i) => (
            <h5 key={i} className="text-[7vw] leading-[7vw] max-sm:text-[20vw] max-sm:leading-[20vw]">
              Travel Information
            </h5>
          ))}
        </div>

        {/* ROW 2 */}
        <div className="flex whitespace-nowrap uppercase Font_Q -ml-[90vw] " ref={row2}>
          {[...Array(16)].map((_, i) => (
            <h5 key={i} className="text-[7vw] leading-[7vw] max-sm:text-[20vw] max-sm:leading-[20vw]">
              Travel Information
            </h5>
          ))}
        </div>

        {/* ROW 3 */}
        <div className="flex whitespace-nowrap uppercase Font_Q  mb-7" ref={row3}>
          {[...Array(16)].map((_, i) => (
            <h5 key={i} className="text-[7vw] leading-[7vw] max-sm:text-[20vw] max-sm:leading-[20vw]">
              Travel Information
            </h5>
          ))}
        </div>

      </div>

      {/* Content */}
      <div className="relative max-w-3xl mx-auto text-center flex flex-col justify-center items-center max-md:px-10">

        {/* <span className=" uppercase mb-6 COLOR_TEXT_CREAM">
          Travel Information
        </span> */}

        <div className="Font_Q  mb-10 flex flex-col gap-4 max-sm:gap-1 uppercase COLOR_TEXT_CREAM max-sm:text-white max-sm:uppercase">
          <h2>Hotel & Reservations</h2>
        </div>

        <p className="Font_YV text-white">
          Please book your rooms at the earliest. Rooms will be allocated on a first-come, first-served basis, based on confirmed reservations.
        </p>
       

       <Link href={`/reserve-your-stay`} ><button className="w-fit h-fit group  py-2.5 px-5 COLOR_BG_CREAM mt-5 transition-all duration-200 ease-linear Font_YV hover:rounded-[8px] hover:scale-[0.98] select-none cursor-pointer">
          <span className="w-fit h-fit flex flex-col">
           Reserve Your Stay
           <div className="h-[1px] COLOR_BG_RED w-[0px] transition-all duration-200 ease-linear group-hover:w-full ">

           </div>
          </span>
        </button></Link>

        <span className="Font_YV text-[16px] mt-5 text-white">Payments are securely processed by EDD United Pvt. Ltd.</span>

        {/* <div className="space-y-3 max-sm:space-y-4 ">
          <p className="uppercase Font_YV COLOR_TEXT_CREAM">
            Nearest Airport is
          </p>

          <p className="  Font_YV  text-white">
            Udaipur Airport
            <span className=" opacity-80 Font_YV"> (20 Mins)</span>
          </p> 

          <span className=" opacity-90 mt-4 Font_YV text-white">
            Note: Airport transfers will be arranged <br />
            for all guests. Coordinator details to <br />
            follow.
          </span>
        </div> */}

      </div>
    </section>
  );
};

export default TravelInfo;
