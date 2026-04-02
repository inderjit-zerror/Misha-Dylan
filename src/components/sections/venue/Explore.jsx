"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import RSVP from "@/components/common/RSVP";
import Shop from "@/components/common/Shop";
gsap.registerPlugin(ScrollTrigger);

const Explore = () => {
  const mainContainer = useRef();
  const scrollContainer = useRef();


  useGSAP(() => {
    if (!mainContainer.current || !scrollContainer.current) return;
    const totalScrollWidth =
      scrollContainer.current.scrollWidth - window.innerWidth;

    var sliderTween = gsap.timeline({
      scrollTrigger: {
        trigger: mainContainer.current,
        start: "top top",
        end: () => `+=${totalScrollWidth}`,
        pin: true,
        scrub: true,
        // markers: true,
      }
    })

    sliderTween.to(scrollContainer.current, {
      x: -totalScrollWidth,
      ease: "none",
    })

    const animate_child = document.querySelectorAll(".animate_child");

    animate_child.forEach((child) => {
      gsap.fromTo(
        child,
        { xPercent: 20 },
        {
          xPercent: 0,
          ease: "power2.out",
          duration: 1,
          scrollTrigger: {
            trigger: child,
            containerAnimation: sliderTween,
            start: "left right",
            toggleActions: "play none none reverse",
          },
        });
    });
  })

  return (
    <>
      <div
        ref={mainContainer}
        className="w-full h-screen overflow-x-hidden flex relative COLOR_BG_CREAM"
      >
        <div
          ref={scrollContainer}
          className="w-fit h-screen flex fixed overflow-hidden top-0 left-0"
        >
          <div className="w-fit  h-screen flex  justify-center items-center ml-[5vw]">
            <div className="w-fit h-fit flex  ">
              <div className="w-[413px] aspect-[4/5]  overflow-hidden img5">
                <Image
                  src={`/imgs/explorNewImg/City_Palace_1.webp`}
                  className="w-full h-full  object-cover object-center scale-[1.2]"
                  width={1000}
                  height={1000}
                  alt="Img"
                />
              </div>
            </div>
          </div>

          <div className="w-[50vw] h-screen  flex justify-center items-center  ">
            <div className="w-fit max-w-[665px] contA6 h-fit flex flex-col gap-6 justify-center items-center">
              <p className=" uppercase Font_YV COLOR_TEXT_RED contA6">

              </p>
              <h4 className=" text-[80px]  leading-[80px] Font_Q contA6 COLOR_TEXT_RED text-center uppercase ">
                EXPLORE FLORENCE
              </h4>
              <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
                <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
                 Florence is a city of Renaissance art, beautiful architecture, charming streets, and unforgettable food. If you have some time between wedding celebrations, here are a few of our favourite recommendations across sightseeing, tours, dining, and shopping. <br />

                 All travel times listed below are approximate and measured from Florence’s historic centre (Duomo area), where most guest accommodations are located.

                </div>
              </div>
            </div>
          </div>

          <div className=" w-fit h-screen mr-[2vw] flex justify-center items-center">
            <div className="w-[413px] aspect-[4/5] flex overflow-hidden ">
              <Image
                src={`/imgs/explorNewImg/City_Palace_2.webp`}
                className="w-full h-full object-cover  object-center"
                width={1000}
                height={1000}
                alt="Img"
              />
            </div>
          </div>

          <div className=" animate_child w-fit mx-[5vw] h-screen flex  justify-center items-center">
            <div className="w-fit h-fit flex  ">
              <div className="w-[50vw] h-screen  overflow-hidden img5">
                <Image
                  src={`/imgs/explorNewImg/Lake_Pichola_1.webp`}
                  className="w-full h-full  object-cover object-center scale-[1.2]"
                  width={2000}
                  height={2000}
                  alt="Img"
                />
              </div>
            </div>
          </div>

          <div className=" animate_child w-[50vw] h-screen  flex justify-center items-center  ">
            <div className="w-fit max-w-[665px] contA6 h-fit flex flex-col gap-6 justify-center items-center">
              <p className=" uppercase Font_YV COLOR_TEXT_RED contA6">
              </p>
              <h4 className=" text-[80px]  leading-[80px] Font_Q contA6 COLOR_TEXT_RED uppercase ">
                Lake Pichola
              </h4>
              <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
                <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
                  Experience Udaipur from the water with a private sunset boat ride. Golden skies, marble palaces, and serene lake views create an unforgettable setting.
                </div>
              </div>
            </div>
          </div>

          <div className=" animate_child w-fit h-screen mr-[2vw] flex justify-center items-center">
            <div className="w-[413px] aspect-[4/5] flex overflow-hidden ">
              <Image
                src={`/imgs/explorNewImg/Lake_Pichola_2.webp`}
                className="w-full h-full object-cover  object-center"
                width={1000}
                height={1000}
                alt="Img"
              />
            </div>
          </div>

          <div className="animate_child w-fit mx-[5vw] h-screen flex  justify-center items-center">
            <div className="w-fit h-fit flex  ">
              <div className="w-[50vw] h-fit  overflow-hidden img5">
                <Image
                  src={`/imgs/explorNewImg/Taj_Lake_Palace_1.webp`}
                  className="w-full h-full  object-cover object-center scale-[1.2]"
                  width={2000}
                  height={2000}
                  alt="Img"
                />
              </div>
            </div>
          </div>

          <div className=" animate_child w-[50vw] h-screen  flex justify-center items-center  ">
            <div className="w-fit max-w-[665px] contA6 h-fit flex flex-col gap-6 justify-center items-center">
              <p className=" uppercase Font_YV COLOR_TEXT_RED contA6">

              </p>
              <h4 className=" text-[80px] leading-[80px] Font_Q contA6 COLOR_TEXT_RED uppercase ">
                Taj Lake Palace
              </h4>
              <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
                <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
                  An iconic white-marble palace floating gracefully on the lake. Ideal for an elegant dinner, afternoon tea, or champagne at sunset.
                </div>
              </div>
            </div>
          </div>

          <div className=" animate_child w-fit h-screen mr-[2vw] flex justify-center items-center">
            <div className="w-[70vw] h-screen flex overflow-hidden ">
              <img
                src={`/imgs/explorNewImg/pales.jpg`}
                className="w-full h-full object-cover  object-center"
                alt="Img"
              />
            </div>
          </div>


          <div className="animate_child w-fit mx-[5vw] h-screen flex  justify-center items-center">
            <div className="w-fit h-fit flex  ">
              <div className="w-[50vw]  aspect-[3/2]  overflow-hidden img5">
                <Image
                  src={`/imgs/explorNewImg/The_Oberoi_Udaivilas_1.webp`}
                  className="w-full h-full  object-cover object-center scale-[1.2]"
                  width={2000}
                  height={2000}
                  alt="Img"
                />
              </div>
            </div>
          </div>

          <div className="animate_child w-[50vw] h-screen  flex justify-center items-center  ">
            <div className="w-fit max-w-[665px] contA6 h-fit flex flex-col gap-6 justify-center items-center">
              <p className=" uppercase Font_YV COLOR_TEXT_RED contA6">

              </p>
              <h4 className=" text-[80px] leading-[80px] Font_Q contA6 COLOR_TEXT_RED uppercase text-center  ">
                The Oberoi Udaivilas
              </h4>
              <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
                <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
                  A benchmark of Indian luxury. Indulge in a world-class spa, lakeside dining, or sunset cocktails in a setting of timeless grandeur.
                </div>
              </div>
            </div>
          </div>

          <div className="animate_child w-fit h-screen mr-[2vw] flex justify-center items-center">
            <div className="w-[413px] aspect-[4/5] flex overflow-hidden ">
              <Image
                src={`/imgs/explorNewImg/The_Oberoi_Udaivilas_2.webp`}
                className="w-full h-full object-cover  object-center"
                width={1000}
                height={1000}
                alt="Img"
              />
              {/* </div> */}
            </div>
          </div>


          <div className="animate_child w-fit mx-[5vw] h-screen flex  justify-center items-center">
            <div className="w-fit h-fit flex  ">
              <div className="w-[50vw] h-fit  overflow-hidden img5">
                <Image
                  src={`/imgs/explorNewImg/Bagore_Ki_Haveli_1.webp`}
                  className="w-full h-full  object-cover object-center scale-[1.2]"
                  width={2000}
                  height={2000}
                  alt="Img"
                />
              </div>
            </div>
          </div>

          <div className=" animate_child w-[50vw] h-screen  flex justify-center items-center  ">
            <div className="w-fit max-w-[665px] contA6 h-fit flex flex-col gap-6 justify-center items-center">
              <p className=" uppercase Font_YV COLOR_TEXT_RED contA6">

              </p>
              <h4 className=" text-[80px] leading-[80px] Font_Q contA6 COLOR_TEXT_RED uppercase text-center ">
                Bagore Ki Haveli
              </h4>
              <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
                <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
                  An 18th-century haveli offering a glimpse into Rajasthan’s cultural richness. The evening folk performance is particularly enchanting.
                </div>
              </div>
            </div>
          </div>

          <div className=" animate_child w-fit h-screen mr-[2vw] flex justify-center items-center">
            <div className="w-[70vw] h-screen flex overflow-hidden ">
              <img
                src={`/imgs/explorNewImg/bkh.jpg`}
                className="w-full h-full object-cover  object-center"

                alt="Img"
              />
            </div>
          </div>
        </div>
      </div>

      <Shop />

    </>
  );
};

export default Explore;