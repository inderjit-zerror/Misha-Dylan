"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import RSVP from "@/components/common/RSVP";
import Shop from "@/components/common/Shop";
gsap.registerPlugin(ScrollTrigger);

const exploreIndia = () => {
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

      {/* PC */}
      <div
        ref={mainContainer}
        className="w-full h-screen overflow-x-hidden max-md:hidden flex relative COLOR_BG_CREAM"
      >
        <div
          ref={scrollContainer}
          className="w-fit h-screen flex fixed overflow-hidden top-0 left-0"
        >

          <div className="w-[50vw] h-screen  flex justify-center items-center  ">
            <div className="w-fit max-w-[665px] contA6 h-fit flex flex-col gap-6 justify-center items-center">

              <h4 className=" text-[80px]  leading-[80px] Font_Q contA6 COLOR_TEXT_RED uppercase ">
                Explore India
              </h4>
              <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
                <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
                  Planning to turn this wedding into a longer India journey? You’re in the right place.

                  India offers an incredible mix of culture, landscapes, food, and heritage — and Udaipur is just the beginning. Whether you’re arriving early or staying on after the celebrations, there’s so much to discover.</div>
              </div>
              <p className=" uppercase Font_YV COLOR_TEXT_RED contA6">
                Before or After Udaipur — Where to Go
              </p>

              <span className=" w-full max-w-[460px] flex flex-col justify-center items-center text-center  Font_YV COLOR_TEXT_RED">
                If you’d like to plan a customized trip before or after the wedding, please contact our trusted travel partners. (Breakaway Travel)
                {/* <span className="mt-2"></span> */}
                <span className="mt-2 font-semibold group">Shilpa Sharma - <a href="tel:+91 93100 69102"><span className="select-none cursor-pointer relative">+91 93100 69102 
                  <div className=" absolute bottom-0 left-0 h-[1px] COLOR_BG_RED transition-all duration-150 ease-out w-0 group-hover:w-full"></div>
                  </span></a></span>
              </span>
            </div>
          </div>

          {/* ======================== */}
          <div className="w-fit  h-screen flex  justify-center items-center ml-[5vw]">
            <div className="w-fit h-fit flex  ">
              <div className="w-[413px] aspect-[4/5]  overflow-hidden img5">
                <Image
                  src={`/india/jaipur1.webp`}
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
              <h4 className=" text-[80px]  leading-[80px] Font_Q contA6 COLOR_TEXT_RED uppercase ">
                Jaipur (Rajasthan)
              </h4>
              <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
                <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
                  The Pink City blends royal heritage with vibrant bazaars and stunning palaces.
                  Highlights: Amber Fort, City Palace, Hawa Mahal, block-print & gemstone shopping.</div>
              </div>
            </div>
          </div>

          <div className=" w-fit h-screen mr-[2vw] flex justify-center items-center">
            <div className="w-[413px] aspect-[4/5] flex overflow-hidden ">
              <Image
                src={`/india/jaipur2.webp`}
                className="w-full h-full object-cover  object-center"
                width={1000}
                height={1000}
                alt="Img"
              />
            </div>
          </div>

          {/* / */}
          <div className=" animate_child w-fit mx-[5vw] h-screen flex  justify-center items-center">
            <div className="w-fit h-fit flex  ">
              <div className="w-[50vw] h-screen  overflow-hidden img5">
                <Image
                  src={`/india/J1.webp`}
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
              <h4 className=" text-[80px] text-center  leading-[80px] Font_Q contA6 COLOR_TEXT_RED uppercase ">
                Jodhpur (Rajasthan)
              </h4>
              <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
                <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
                  Known as the Blue City, with dramatic forts and desert charm.
                  Highlights: Mehrangarh Fort, old city walks, boutique heritage stays.</div>
              </div>
            </div>
          </div>

          <div className=" animate_child w-fit h-screen mr-[2vw] flex justify-center items-center">
            <div className="w-[413px] aspect-[4/5] flex overflow-hidden ">
              <Image
                src={`/india/J2.webp`}
                className="w-full h-full object-cover  object-center"
                width={1000}
                height={1000}
                alt="Img"
              />
            </div>
          </div>

          {/* / */}
          <div className="animate_child w-fit mx-[5vw] h-screen flex  justify-center items-center">
            <div className="w-fit h-fit flex  ">
              <div className="w-[50vw] h-fit  overflow-hidden img5">
                <Image
                  src={`/india/Delhi1.webp`}
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
                Delhi
              </h4>
              <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
                <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
                  A dynamic mix of old-world charm and modern India.
                  Highlights: Old Delhi food trails, Humayun’s Tomb, Qutub Minar, luxury dining & shopping.</div>
              </div>
            </div>
          </div>

          <div className=" animate_child w-fit h-screen mr-[2vw] flex justify-center items-center">
            <div className="w-[70vw] h-screen flex overflow-hidden ">
              <img
                src={`/india/Delhi2.webp`}
                className="w-full h-full object-cover  object-center"
                alt="Img"
              />
            </div>
          </div>

          {/* / */}
          <div className="animate_child w-fit mx-[5vw] h-screen flex  justify-center items-center">
            <div className="w-fit h-fit flex  ">
              <div className="w-[50vw]  aspect-[3/2]  overflow-hidden img5">
                <Image
                  src={`/india/AGRA1.webp`}
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
                Agra
              </h4>
              <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
                <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
                  Home to one of the world’s most iconic monuments.
                  Highlights: The Taj Mahal at sunrise, Agra Fort.</div>
              </div>
            </div>
          </div>

          <div className="animate_child w-fit h-screen mr-[2vw] flex justify-center items-center">
            <div className="w-[413px] aspect-[4/5] flex overflow-hidden ">
              <Image
                src={`/india/AGRA2.webp`}
                className="w-full h-full object-cover  object-center"
                width={1000}
                height={1000}
                alt="Img"
              />
              {/* </div> */}
            </div>
          </div>

          {/*  */}

          <div className="animate_child w-fit mx-[5vw] h-screen flex  justify-center items-center">
            <div className="w-fit h-fit flex  ">
              <div className="w-[50vw] h-fit  overflow-hidden img5">
                <Image
                  src={`/india/Mumbai1.webp`}
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
                Mumbai
              </h4>
              <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
                <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
                  India’s bustling financial capital with a cosmopolitan vibe.
                  Highlights: Gateway of India, art deco architecture, nightlife & restaurants.</div>
              </div>
            </div>
          </div>

          <div className=" animate_child w-fit h-screen mr-[2vw] flex justify-center items-center">
            <div className="w-[70vw] h-screen flex overflow-hidden ">
              <img
                src={`/india/Mumbai2.webp`}
                className="w-full h-full object-cover  object-center"

                alt="Img"
              />
            </div>
          </div>

          {/* --- */}
          <div className="w-fit  h-screen flex  justify-center items-center ml-[5vw]">
            <div className="w-fit h-fit flex  ">
              <div className="w-[413px] aspect-[4/5]  overflow-hidden img5">
                <Image
                  src={`/india/Goa1.webp`}
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
              <h4 className=" text-[80px]  leading-[80px] Font_Q contA6 COLOR_TEXT_RED uppercase ">
                Goa
              </h4>
              <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
                <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
                  For a relaxed beach break after the wedding.
                  Highlights: Beach clubs, Portuguese architecture, sunset views.</div>
              </div>
            </div>
          </div>

          <div className=" w-fit h-screen mr-[2vw] flex justify-center items-center">
            <div className="w-[413px] aspect-[4/5] flex overflow-hidden ">
              <Image
                src={`/india/Goa2.webp`}
                className="w-full h-full object-cover  object-center"
                width={1000}
                height={1000}
                alt="Img"
              />
            </div>
          </div>

          {/* / */}

          <div className=" animate_child w-fit mx-[5vw] h-screen flex  justify-center items-center">
            <div className="w-fit h-fit flex  ">
              <div className="w-[50vw] h-screen  overflow-hidden img5">
                <Image
                  src={`/india/Kerala1.webp`}
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
                Kerala
              </h4>
              <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
                <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
                  Lush, serene, and perfect for unwinding.
                  Highlights: Backwater houseboats, Ayurveda retreats, tea plantations.</div>
              </div>
            </div>
          </div>

          <div className=" animate_child w-fit h-screen mr-[2vw] flex justify-center items-center">
            <div className="w-[413px] aspect-[4/5] flex overflow-hidden ">
              <Image
                src={`/india/Kerala2.webp`}
                className="w-full h-full object-cover  object-center"
                width={1000}
                height={1000}
                alt="Img"
              />
            </div>
          </div>

          {/* / */}
          <div className="animate_child w-fit mx-[5vw] h-screen flex  justify-center items-center">
            <div className="w-fit h-fit flex  ">
              <div className="w-[50vw] h-fit  overflow-hidden img5">
                <Image
                  src={`/india/Jammu1.webp`}
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
                Northern Escapes
              </p>
              <h4 className=" text-[80px] leading-[80px] Font_Q contA6 COLOR_TEXT_RED uppercase ">
                Jammu & Kashmir
              </h4>
              <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
                <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
                  Often called paradise on earth, known for its breathtaking landscapes.
                  Highlights: Srinagar houseboats, Dal Lake, Gulmarg.</div>
              </div>
            </div>
          </div>

          <div className=" animate_child w-fit h-screen mr-[2vw] flex justify-center items-center">
            <div className="w-[70vw] h-screen flex overflow-hidden ">
              <img
                src={`/india/Jammu2.webp`}
                className="w-full h-full object-cover  object-center"
                alt="Img"
              />
            </div>
          </div>

          {/* / */}

          <div className="animate_child w-fit mx-[5vw] h-screen flex  justify-center items-center">
            <div className="w-fit h-fit flex  ">
              <div className="w-[50vw]  aspect-[3/2]  overflow-hidden img5">
                <Image
                  src={`/india/himachal1.webp`}
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
                Himachal Pradesh
              </h4>
              <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
                <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
                  Charming hill towns and mountain retreats.
                  Highlights: Shimla, Manali, Dharamshala.</div>
              </div>
            </div>
          </div>

          <div className="animate_child w-fit h-screen mr-[2vw] flex justify-center items-center">
            <div className="w-[413px] aspect-[4/5] flex overflow-hidden ">
              <Image
                src={`/india/himachal3.webp`}
                className="w-full h-full object-cover  object-center"
                width={1000}
                height={1000}
                alt="Img"
              />
              {/* </div> */}
            </div>
          </div>

          {/*  */}

          <div className="animate_child w-fit mx-[5vw] h-screen flex  justify-center items-center">
            <div className="w-fit h-fit flex  ">
              <div className="w-[50vw] h-fit  overflow-hidden img5">
                <Image
                  src={`/india/Uttarakhand1.webp`}
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
                Uttarakhand
              </h4>
              <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
                <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
                  A mix of spirituality and scenic beauty.
                  Highlights: Rishikesh, Mussoorie, Jim Corbett.</div>
              </div>
            </div>
          </div>

          <div className=" animate_child w-fit h-screen mr-[2vw] flex justify-center items-center">
            <div className="w-[70vw] h-screen flex overflow-hidden ">
              <img
                src={`/india/Uttarakhand1.webp`}
                className="w-full h-full object-cover  object-center"

                alt="Img"
              />
            </div>
          </div>

          {/* --- */}
          <div className="w-fit  h-screen flex  justify-center items-center ml-[5vw]">
            <div className="w-fit h-fit flex  ">
              <div className="w-[413px] aspect-[4/5]  overflow-hidden img5">
                <Image
                  src={`/india/Andaman1.webp`}
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
                Island & Coastal Retreats
              </p>
              <h4 className=" text-[80px]  leading-[80px] Font_Q contA6 COLOR_TEXT_RED uppercase ">
                Andaman Islands
              </h4>
              <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
                <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
                  Crystal-clear waters and pristine beaches.
                  Highlights: Radhanagar Beach, scuba diving, private island stays.</div>
              </div>
            </div>
          </div>

          <div className=" w-fit h-screen mr-[2vw] flex justify-center items-center">
            <div className="w-[413px] aspect-[4/5] flex overflow-hidden ">
              <Image
                src={`/india/Andaman2.webp`}
                className="w-full h-full object-cover  object-center"
                width={1000}
                height={1000}
                alt="Img"
              />
            </div>
          </div>

          {/* / */}
          <div className=" animate_child w-fit mx-[5vw] h-screen flex  justify-center items-center">
            <div className="w-fit h-fit flex  ">
              <div className="w-[50vw] h-screen  overflow-hidden img5">
                <Image
                  src={`/india/Lakshadweep1.webp`}
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
                Lakshadweep
              </h4>
              <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
                <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
                  Remote, untouched, and incredibly serene.
                  Highlights: Turquoise lagoons, coral reefs, barefoot luxury.</div>
              </div>
            </div>
          </div>

          <div className=" animate_child w-fit h-screen mr-[2vw] flex justify-center items-center">
            <div className="w-[413px] aspect-[4/5] flex overflow-hidden ">
              <Image
                src={`/india/Lakshadweep2.webp`}
                className="w-full h-full object-cover  object-center"
                width={1000}
                height={1000}
                alt="Img"
              />
            </div>
          </div>

          {/* / */}
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
                North East India
              </h4>
              <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
                <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
                  A hidden gem of lush landscapes, rich cultures, and offbeat experiences.
                  Highlights: Assam (tea estates, Kaziranga), Meghalaya (living root bridges), Sikkim & Arunachal (Himalayan views, monasteries).</div>
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

          {/* / */}

          <div className="animate_child w-fit mx-[5vw] h-screen flex  justify-center items-center">
            <div className="w-fit h-fit flex  ">
              <div className="w-[50vw]  aspect-[3/2]  overflow-hidden img5">
                <Image
                  src={`/india/Bhutan 3.webp`}
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
                Beyond India
              </p>
              <h4 className=" text-[80px] leading-[80px] Font_Q contA6 COLOR_TEXT_RED uppercase text-center  ">
                Bhutan
              </h4>
              <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
                <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
                  A peaceful Himalayan kingdom rooted in mindfulness and natural beauty.
                  Highlights: Tiger’s Nest Monastery, Paro Valley.</div>
              </div>
            </div>
          </div>

          <div className="animate_child w-fit h-screen mr-[2vw] flex justify-center items-center">
            <div className="w-[413px] aspect-[4/5] flex overflow-hidden ">
              <Image
                src={`/india/bhutan.webp`}
                className="w-full h-full object-cover  object-center"
                width={1000}
                height={1000}
                alt="Img"
              />
              {/* </div> */}
            </div>
          </div>

          {/* / */}
          <div className="animate_child w-fit mx-[5vw] h-screen flex  justify-center items-center">
            <div className="w-fit h-fit flex  ">
              <div className="w-[50vw] h-fit  overflow-hidden img5">
                <Image
                  src={`/india/Nepal1.webp`}
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
                Nepal
              </h4>
              <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
                <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
                  A blend of culture, spirituality, and Himalayan adventure.
                  Highlights: Kathmandu, Pokhara, Everest views.</div>
              </div>
            </div>
          </div>

          <div className=" animate_child w-fit h-screen mr-[2vw] flex justify-center items-center">
            <div className="w-[70vw] h-screen flex overflow-hidden ">
              <img
                src={`/india/Nepal2.webp`}
                className="w-full h-full object-cover  object-center"

                alt="Img"
              />
            </div>
          </div>

          {/* / */}
          <div className="animate_child w-fit mx-[5vw] h-screen flex  justify-center items-center">
            <div className="w-fit h-fit flex  ">
              <div className="w-[50vw] h-fit  overflow-hidden img5">
                <Image
                  src={`/india/SriLanka1.webp`}
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
                Sri Lanka
              </h4>
              <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
                <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
                  Compact, diverse, and ideal for a relaxed extension.
                  Highlights: Tea plantations, beaches, wildlife safaris.</div>
              </div>
            </div>
          </div>

          <div className=" animate_child w-fit h-screen mr-[2vw] flex justify-center items-center">
            <div className="w-[70vw] h-screen flex overflow-hidden ">
              <img
                src={`/india/SriLanka2.webp`}
                className="w-full h-full object-cover  object-center"

                alt="Img"
              />
            </div>
          </div>

          {/* ------------------------------------ */}
          {/* <div className=" animate_child w-[50vw] h-screen  flex justify-center items-center  ">
            <div className="w-fit max-w-[665px] contA6 h-fit flex flex-col gap-6 justify-center items-center">
              <p className=" uppercase Font_YV COLOR_TEXT_RED contA6">

              </p>
              <h4 className=" text-[80px] leading-[80px] Font_Q contA6 COLOR_TEXT_RED uppercase text-center ">
                Experiences to Look Forward To
              </h4>
              <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
                <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
                  Private heritage walks through historic cities
                </div>
                <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
                  Textile & craft experiences (block printing, weaving, ateliers)
                </div>
                <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
                  Curated food trails and local dining
                </div>
                <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
                  Wildlife safaris and nature escapes
                </div>
                <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
                  Palace stays and boutique luxury hotels
                </div>
              </div>
            </div>
          </div> */}

          {/* - */}
          {/* <div className=" animate_child w-[50vw] h-screen  flex justify-center items-center  ">
            <div className="w-fit max-w-[665px] contA6 h-fit flex flex-col gap-6 justify-center items-center">
              <p className=" uppercase Font_YV COLOR_TEXT_RED contA6">

              </p>
              <h4 className=" text-[80px] leading-[80px] Font_Q contA6 COLOR_TEXT_RED uppercase text-center ">
               Travel Tips
              </h4>
              <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
                <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
                 Best Time to Explore: September–March offers the most pleasant weather
                </div>
                <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
                 Getting Around: Domestic flights connect all major cities easily
                </div>
                <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
                  Local Etiquette: Modest dressing is recommended at religious sites
                </div>
                
              </div>
            </div>
          </div> */}
        </div>
      </div>


      {/* MOBILE ===============================================================================*/}

      <div className="w-full h-fit md:hidden flex flex-col overflow-hidden">

        <div className="w-full h-fit p-5 flex flex-col gap-5  ">
          {/* 1 ---------------------------------------------------------------------------------- */}

          {/* text */}
          <div className="w-fit max-w-[665px]  contA6 h-fit flex flex-col gap-6 mt-30 justify-center m-auto items-center">

            <h4 className=" text-[10vw] leading-[10vw] Font_Q contA6 COLOR_TEXT_RED uppercase flex flex-wrap px-20 text-center ">
              Explore India
            </h4>
            <div className="w-fit max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
              <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV flex">
                Planning to turn this wedding into a longer India journey? You’re in the right place. India offers an incredible mix of culture, landscapes, food, and heritage — and Udaipur is just the beginning. Whether you’re arriving early or staying on after the celebrations, there’s so much to discover.</div>
            </div>

            <p className=" uppercase Font_YV COLOR_TEXT_RED contA6">
              Before or After Udaipur — Where to Go
            </p>

            <span className=" w-full max-w-[460px] flex flex-col justify-center items-center text-center  Font_YV COLOR_TEXT_RED">
              If you’d like to plan a customized trip before or after the wedding, please contact our trusted travel partners. (Breakaway Travel)
              {/* <span className="mt-2"></span> */}
              <span className="mt-2  font-semibold group">Shilpa Sharma - <a href="tel:+91 93100 69102"><span className="select-none cursor-pointer relative">+91 93100 69102
                <div className=" absolute bottom-0 left-0 h-[1px] COLOR_BG_RED transition-all duration-150 ease-out w-0 group-hover:w-full"></div>
                </span></a></span>
            </span>
          </div>

          {/* text */}
          <div className="w-fit max-w-[665px]  contA6 h-fit flex flex-col gap-6 mt-30 justify-center m-auto items-center">
            {/* <p className=" uppercase Font_YV COLOR_TEXT_RED contA6">
                  Explore udaipur
                </p> */}
            <h4 className=" text-[10vw] leading-[10vw] Font_Q contA6 COLOR_TEXT_RED uppercase flex flex-wrap px-20 text-center ">
              Jaipur (Rajasthan)
            </h4>
            <div className="w-fit max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
              <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV flex">
                The Pink City blends royal heritage with vibrant bazaars and stunning palaces.
                Highlights: Amber Fort, City Palace, Hawa Mahal, block-print & gemstone shopping.</div>
            </div>
          </div>

          {/* img1 */}
          <div className="w-full aspect-2/1 overflow-hidden ">
            <img src={`/india/jaipur1.webp`} className="w-full h-full object-cover  object-center" alt="img" />
          </div>

          {/* img2 */}
          <div className="w-full aspect-1/1 overflow-hidden ">
            <img src={`/india/jaipur2.webp`} className="w-full h-full object-cover  object-center" alt="img" />
          </div>

          {/* 2 ---------------------------------------------------------------------------------- */}


          {/* text */}
          <div className="w-fit max-w-[665px] contA6 h-fit flex flex-col gap-6 justify-center m-auto mt-20 items-center">
            {/* <p className=" uppercase Font_YV COLOR_TEXT_RED contA6">
                  Explore udaipur
                </p> */}
            <h4 className=" text-[10vw] leading-[10vw] Font_Q contA6 COLOR_TEXT_RED uppercase flex flex-wrap px-20 text-center ">
              Jodhpur (Rajasthan)
            </h4>
            <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
              <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
                Known as the Blue City, with dramatic forts and desert charm.
                Highlights: Mehrangarh Fort, old city walks, boutique heritage stays.</div>
            </div>
          </div>

          {/* img1 */}
          <div className="w-full aspect-2/1 overflow-hidden ">
            <img src={`/india/J1.webp`} className="w-full h-full object-cover  object-center" alt="img" />
          </div>

          {/* img2 */}
          <div className="w-full aspect-1/1 overflow-hidden ">
            <img src={`/india/J2.webp`} className="w-full h-full object-cover  object-center" alt="img" />
          </div>

          {/* 3 ---------------------------------------------------------------------------------- */}


          {/* text */}
          <div className="w-fit max-w-[665px] contA6 h-fit flex flex-col gap-6 justify-center m-auto mt-20 items-center">
            {/* <p className=" uppercase Font_YV COLOR_TEXT_RED contA6">
                  Explore udaipur
                </p> */}
            <h4 className=" text-[10vw] leading-[10vw] Font_Q contA6 COLOR_TEXT_RED uppercase flex flex-wrap px-20 text-center ">
              Delhi
            </h4>
            <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
              <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
                A dynamic mix of old-world charm and modern India.
                Highlights: Old Delhi food trails, Humayun’s Tomb, Qutub Minar, luxury dining & shopping.</div>
            </div>
          </div>

          {/* img1 */}
          <div className="w-full aspect-2/1 overflow-hidden ">
            <img src={`/india/Delhi1.webp`} className="w-full h-full object-cover  object-center" alt="img" />
          </div>

          {/* img2 */}
          <div className="w-full aspect-1/1 overflow-hidden ">
            <img src={`/india/Delhi2.webp`} className="w-full h-full object-cover  object-center" alt="img" />
          </div>

          {/* 4 ---------------------------------------------------------------------------------- */}


          {/* text */}
          <div className="w-fit max-w-[665px] contA6 h-fit flex flex-col gap-6 justify-center m-auto mt-20 items-center">
            {/* <p className=" uppercase Font_YV COLOR_TEXT_RED contA6">
                  Explore udaipur
                </p> */}
            <h4 className=" text-[10vw] leading-[10vw] Font_Q contA6 COLOR_TEXT_RED uppercase flex flex-wrap px-20 text-center ">
              Agra
            </h4>
            <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
              <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
                Home to one of the world’s most iconic monuments.
                Highlights: The Taj Mahal at sunrise, Agra Fort.</div>
            </div>
          </div>

          {/* img1 */}
          <div className="w-full aspect-2/1 overflow-hidden ">
            <img src={`/india/AGRA1.webp`} className="w-full h-full object-cover  object-center" alt="img" />
          </div>

          {/* img2 */}
          <div className="w-full aspect-1/1 overflow-hidden ">
            <img src={`/india/AGRA2.webp`} className="w-full h-full object-cover  object-center" alt="img" />
          </div>

          {/* 5 ---------------------------------------------------------------------------------- */}


          {/* text */}
          <div className="w-fit max-w-[665px] contA6 h-fit flex flex-col gap-6 m-auto justify-center mt-20 items-center">
            {/* <p className=" uppercase Font_YV COLOR_TEXT_RED contA6">
                  Explore udaipur
                </p> */}
            <h4 className=" text-[10vw] leading-[10vw] Font_Q contA6 COLOR_TEXT_RED uppercase flex flex-wrap px-20 text-center ">
              Mumbai
            </h4>
            <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
              <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
                India’s bustling financial capital with a cosmopolitan vibe.
                Highlights: Gateway of India, art deco architecture, nightlife & restaurants.</div>
            </div>
          </div>

          {/* img1 */}
          <div className="w-full aspect-2/1 overflow-hidden ">
            <img src={`/india/Mumbai1.webp`} className="w-full h-full object-cover  object-center" alt="img" />
          </div>

          {/* img2 */}
          <div className="w-full aspect-1/1 overflow-hidden ">
            <img src={`/india/Mumbai2.webp`} className="w-full h-full object-cover  object-center" alt="img" />
          </div>

          {/* 1 ---------------------------------------------------------------------------------- */}


          {/* text */}
          <div className="w-fit max-w-[665px] contA6 h-fit flex flex-col gap-6 mt-30 justify-center m-auto items-center">
            {/* <p className=" uppercase Font_YV COLOR_TEXT_RED contA6">
                  Explore udaipur
                </p> */}
            <h4 className=" text-[10vw] leading-[10vw] Font_Q contA6 COLOR_TEXT_RED uppercase flex flex-wrap px-20 text-center ">
              Goa
            </h4>
            <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
              <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
                For a relaxed beach break after the wedding.
                Highlights: Beach clubs, Portuguese architecture, sunset views.</div>
            </div>
          </div>

          {/* img1 */}
          <div className="w-full aspect-2/1 overflow-hidden ">
            <img src={`/india/Goa1.webp`} className="w-full h-full object-cover  object-center" alt="img" />
          </div>

          {/* img2 */}
          <div className="w-full aspect-1/1 overflow-hidden ">
            <img src={`/india/Goa2.webp`} className="w-full h-full object-cover  object-center" alt="img" />
          </div>

          {/* 2 ---------------------------------------------------------------------------------- */}


          {/* text */}
          <div className="w-fit max-w-[665px] contA6 h-fit flex flex-col gap-6 justify-center m-auto mt-20 items-center">
            {/* <p className=" uppercase Font_YV COLOR_TEXT_RED contA6">
                  Explore udaipur
                </p> */}
            <h4 className=" text-[10vw] leading-[10vw] Font_Q contA6 COLOR_TEXT_RED uppercase flex flex-wrap px-20 text-center ">
              Kerala
            </h4>
            <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
              <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
                Lush, serene, and perfect for unwinding.
                Highlights: Backwater houseboats, Ayurveda retreats, tea plantations.</div>
            </div>
          </div>

          {/* img1 */}
          <div className="w-full aspect-2/1 overflow-hidden ">
            <img src={`/india/Kerala1.webp`} className="w-full h-full object-cover  object-center" alt="img" />
          </div>

          {/* img2 */}
          <div className="w-full aspect-1/1 overflow-hidden ">
            <img src={`/india/Kerala2.webp`} className="w-full h-full object-cover  object-center" alt="img" />
          </div>

          {/* 3 ---------------------------------------------------------------------------------- */}


          {/* text */}
          <div className="w-fit max-w-[665px] contA6 h-fit flex flex-col gap-6 justify-center m-auto mt-20 items-center">
            <p className=" uppercase Font_YV COLOR_TEXT_RED contA6">
              Northern Escapes
            </p>
            <h4 className=" text-[10vw] leading-[10vw] Font_Q contA6 COLOR_TEXT_RED uppercase flex flex-wrap px-20 text-center ">
              Jammu & Kashmir
            </h4>
            <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
              <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
                Often called paradise on earth, known for its breathtaking landscapes.
                Highlights: Srinagar houseboats, Dal Lake, Gulmarg.</div>
            </div>
          </div>

          {/* img1 */}
          <div className="w-full aspect-2/1 overflow-hidden ">
            <img src={`/india/Jammu1.webp`} className="w-full h-full object-cover  object-center" alt="img" />
          </div>

          {/* img2 */}
          <div className="w-full aspect-1/1 overflow-hidden ">
            <img src={`/india/Jammu2.webp`} className="w-full h-full object-cover  object-center" alt="img" />
          </div>

          {/* 4 ---------------------------------------------------------------------------------- */}


          {/* text */}
          <div className="w-fit max-w-[665px] contA6 h-fit flex flex-col gap-6 justify-center m-auto mt-20 items-center">
            {/* <p className=" uppercase Font_YV COLOR_TEXT_RED contA6">
                  Explore udaipur
                </p> */}
            <h4 className=" text-[10vw] leading-[10vw] Font_Q contA6 COLOR_TEXT_RED uppercase flex flex-wrap px-20 text-center ">
              Himachal Pradesh
            </h4>
            <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
              <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
                Charming hill towns and mountain retreats.
                Highlights: Shimla, Manali, Dharamshala.</div>
            </div>
          </div>

          {/* img1 */}
          <div className="w-full aspect-2/1 overflow-hidden ">
            <img src={`/india/himachal1.webp`} className="w-full h-full object-cover  object-center" alt="img" />
          </div>

          {/* img2 */}
          <div className="w-full aspect-1/1 overflow-hidden ">
            <img src={`/india/himachal3.webp`} className="w-full h-full object-cover  object-center" alt="img" />
          </div>

          {/* 5 ---------------------------------------------------------------------------------- */}


          {/* text */}
          <div className="w-fit max-w-[665px] contA6 h-fit flex flex-col gap-6 m-auto justify-center mt-20 items-center">
            {/* <p className=" uppercase Font_YV COLOR_TEXT_RED contA6">
                  Explore udaipur
                </p> */}
            <h4 className=" text-[10vw] leading-[10vw] Font_Q contA6 COLOR_TEXT_RED uppercase flex flex-wrap px-20 text-center ">
              Uttarakhand
            </h4>
            <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
              <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
                A mix of spirituality and scenic beauty.
                Highlights: Rishikesh, Mussoorie, Jim Corbett.</div>
            </div>
          </div>

          {/* img1 */}
          <div className="w-full aspect-2/1 overflow-hidden ">
            <img src={`/india/Uttarakhand1.webp`} className="w-full h-full object-cover  object-center" alt="img" />
          </div>

          {/* img2 */}
          <div className="w-full aspect-1/1 overflow-hidden ">
            <img src={`/india/Uttarakhand1.webp`} className="w-full h-full object-cover  object-center" alt="img" />
          </div>

          {/* 1 ---------------------------------------------------------------------------------- */}


          {/* text */}
          <div className="w-fit max-w-[665px] contA6 h-fit flex flex-col gap-6 mt-30 justify-center m-auto items-center">
            <p className=" uppercase Font_YV COLOR_TEXT_RED contA6">
              Island & Coastal Retreats
            </p>
            <h4 className=" text-[10vw] leading-[10vw] Font_Q contA6 COLOR_TEXT_RED uppercase flex flex-wrap px-20 text-center ">
              Andaman Islands
            </h4>
            <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
              <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
                Crystal-clear waters and pristine beaches.
                Highlights: Radhanagar Beach, scuba diving, private island stays.</div>
            </div>
          </div>

          {/* img1 */}
          <div className="w-full aspect-2/1 overflow-hidden ">
            <img src={`/india/Andaman1.webp`} className="w-full h-full object-cover  object-center" alt="img" />
          </div>

          {/* img2 */}
          <div className="w-full aspect-1/1 overflow-hidden ">
            <img src={`/india/Andaman2.webp`} className="w-full h-full object-cover  object-center" alt="img" />
          </div>

          {/* 2 ---------------------------------------------------------------------------------- */}


          {/* text */}
          <div className="w-fit max-w-[665px] contA6 h-fit flex flex-col gap-6 justify-center m-auto mt-20 items-center">
            {/* <p className=" uppercase Font_YV COLOR_TEXT_RED contA6">
                  Explore udaipur
                </p> */}
            <h4 className=" text-[10vw] leading-[10vw] Font_Q contA6 COLOR_TEXT_RED uppercase flex flex-wrap px-20 text-center ">
              Lakshadweep
            </h4>
            <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
              <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
                Remote, untouched, and incredibly serene.
                Highlights: Turquoise lagoons, coral reefs, barefoot luxury.</div>
            </div>
          </div>

          {/* img1 */}
          <div className="w-full aspect-2/1 overflow-hidden ">
            <img src={`/india/Lakshadweep1.webp`} className="w-full h-full object-cover  object-center" alt="img" />
          </div>

          {/* img2 */}
          <div className="w-full aspect-1/1 overflow-hidden ">
            <img src={`/india/Lakshadweep2.webp`} className="w-full h-full object-cover  object-center" alt="img" />
          </div>

          {/* 3 ---------------------------------------------------------------------------------- */}


          {/* text */}
          <div className="w-fit max-w-[665px] contA6 h-fit flex flex-col gap-6 justify-center m-auto mt-20 items-center">
            {/* <p className=" uppercase Font_YV COLOR_TEXT_RED contA6">
                  Explore udaipur
                </p> */}
            <h4 className=" text-[10vw] leading-[10vw] Font_Q contA6 COLOR_TEXT_RED uppercase flex flex-wrap px-20 text-center ">
              North East India
            </h4>
            <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
              <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
                A hidden gem of lush landscapes, rich cultures, and offbeat experiences.
                Highlights: Assam (tea estates, Kaziranga), Meghalaya (living root bridges), Sikkim & Arunachal (Himalayan views, monasteries).</div>
            </div>
          </div>

          {/* img1 */}
          <div className="w-full aspect-2/1 overflow-hidden ">
            <img src={`/imgs/explorNewImg/Taj_Lake_Palace_1.webp`} className="w-full h-full object-cover  object-center" alt="img" />
          </div>

          {/* img2 */}
          <div className="w-full aspect-1/1 overflow-hidden ">
            <img src={`/imgs/explorNewImg/pales.webp`} className="w-full h-full object-cover  object-center" alt="img" />
          </div>

          {/* 4 ---------------------------------------------------------------------------------- */}


          {/* text */}
          <div className="w-fit max-w-[665px] contA6 h-fit flex flex-col gap-6 justify-center m-auto mt-20 items-center">
            <p className=" uppercase Font_YV COLOR_TEXT_RED contA6">
              Beyond India
            </p>
            <h4 className=" text-[10vw] leading-[10vw] Font_Q contA6 COLOR_TEXT_RED uppercase flex flex-wrap px-20 text-center ">
              Bhutan
            </h4>
            <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
              <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
                A peaceful Himalayan kingdom rooted in mindfulness and natural beauty.
                Highlights: Tiger’s Nest Monastery, Paro Valley.</div>
            </div>
          </div>

          {/* img1 */}
          <div className="w-full aspect-2/1 overflow-hidden ">
            <img src={`/india/Bhutan 3.webp`} className="w-full h-full object-cover  object-center" alt="img" />
          </div>

          {/* img2 */}
          <div className="w-full aspect-1/1 overflow-hidden ">
            <img src={`/india/bhutan.webp`} className="w-full h-full object-cover  object-center" alt="img" />
          </div>

          {/* 5 ---------------------------------------------------------------------------------- */}


          {/* text */}
          <div className="w-fit max-w-[665px] contA6 h-fit flex flex-col gap-6 m-auto justify-center mt-20 items-center">
            {/* <p className=" uppercase Font_YV COLOR_TEXT_RED contA6">
                  Explore udaipur
                </p> */}
            <h4 className=" text-[10vw] leading-[10vw] Font_Q contA6 COLOR_TEXT_RED uppercase flex flex-wrap px-20 text-center ">
              Nepal
            </h4>
            <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
              <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
                A blend of culture, spirituality, and Himalayan adventure.
                Highlights: Kathmandu, Pokhara, Everest views.</div>
            </div>
          </div>

          {/* img1 */}
          <div className="w-full aspect-2/1 overflow-hidden ">
            <img src={`/india/Nepal1.webp`} className="w-full h-full object-cover  object-center" alt="img" />
          </div>

          {/* img2 */}
          <div className="w-full aspect-1/1 overflow-hidden ">
            <img src={`/india/Nepal2.webp`} className="w-full h-full object-cover  object-center" alt="img" />
          </div>
          {/* 5 ---------------------------------------------------------------------------------- */}


          {/* text */}
          <div className="w-fit max-w-[665px] contA6 h-fit flex flex-col gap-6 m-auto justify-center mt-20 items-center">
            {/* <p className=" uppercase Font_YV COLOR_TEXT_RED contA6">
                  Explore udaipur
                </p> */}
            <h4 className=" text-[10vw] leading-[10vw] Font_Q contA6 COLOR_TEXT_RED uppercase flex flex-wrap px-20 text-center ">
              Sri Lanka
            </h4>
            <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
              <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
                Compact, diverse, and ideal for a relaxed extension.
                Highlights: Tea plantations, beaches, wildlife safaris.</div>
            </div>
          </div>

          {/* img1 */}
          <div className="w-full aspect-2/1 overflow-hidden ">
            <img src={`/india/SriLanka1.webp`} className="w-full h-full object-cover  object-center" alt="img" />
          </div>

          {/* img2 */}
          <div className="w-full aspect-1/1 overflow-hidden ">
            <img src={`/india/SriLanka2.webp`} className="w-full h-full object-cover  object-center" alt="img" />
          </div>

        </div>


      </div>


    </>
  );
};

export default exploreIndia;
