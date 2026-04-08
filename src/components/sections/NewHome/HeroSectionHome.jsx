"use client";
import gsap from "gsap";
import { useEffect } from "react";

const HeroSectionHome = () => {
  useEffect(() => {
    const HTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".HeroSectionHome",
        start: "top top",
        end: "top -100%",
        scrub: true,
        // markers: true,
      },
    });
    HTL.to(
      ".thatText",
      {
        paddingLeft: "20vw",
        ease: "power2.out",
      },
      "a1",
    );
    HTL.to(
      ".neverText",
      {
        paddingRight: "20vw",
        ease: "power2.out",
      },
      "a1",
    );
    HTL.to(
      ".HomeTextRap1",
      {
        paddingTop: "0vh",
        ease: "power2.out",
      },
      "a1",
    );
    HTL.to(".heroImg", {
      y: "-25%",
      scale: 1.1,
      ease: "none",
    },"a1");

    const HTL2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".HeroSectionHome",
        start: "top bottom",
        end: "top 30%",
        scrub: true,
        // markers: true,
      },
    });
    HTL2.fromTo(
      ".HeroSectionHome",
      {
        clipPath: "inset(25% 25% 0 25%)", // center visible (50%)
      },
      {
        clipPath: "inset(0% 0% 0 0%)", // full reveal (100%)
        ease: "power2.out",
      },
      "a1",
    );
  }, []);

  return (
    <div className="HeroSectionHome w-full h-[200vh] overflow-hidden mx-auto flex flex-col justify-between relative">
      <img
        src={`/imgs/newHomeImg/NHHIMG.jpg`}
        className="w-full h-full object-center object-cover  z-[-1] heroImg"
        alt="IMG"
      />

      <div className="w-full h-full absolute top-0 left-0 flex flex-col justify-between">
        <div className="w-full h-fit flex flex-col justify-center HomeTextRap1 text-[12vw] leading-[12vw] items-center pt-[50vh] px-[20px]">
          <h1 className=" leading-[11vw] text-white Font_Q">Weddings</h1>
          <h1 className=" text-white Font_Q mr-auto flex mt-5 thatText">
            that
          </h1>
          <h1 className=" text-white Font_Q ml-auto flex mt-5 neverText">
            never
          </h1>
          <h1 className=" text-white Font_Q m-auto flex mt-5">fade</h1>
        </div>

        <div className="w-full h-fit flex justify-center items-center pb-[10vh] overflow-hidden">
          <div className="w-[18%] aspect-4/5 overflow-hidden ">
            <img
              src={`/imgs/newHomeImg/NHHIMG2.jpg`}
              className="w-full h-full object-center object-cover"
              alt="IMG"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionHome;
