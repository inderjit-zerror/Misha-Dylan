"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const CardX = () => {
  useEffect(() => {
     if (window.innerWidth < 750) return;
    const images = document.querySelectorAll(".imgQ1");

    images.forEach((img) => {
      const strength = 20; // magnetic move
      const rotateStrength = 10; // 3D tilt

      const moveImage = (e) => {
        const rect = img.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const percentX = (x - centerX) / centerX;
        const percentY = (y - centerY) / centerY;

        const moveX = percentX * strength;
        const moveY = percentY * strength;

        const rotateY = percentX * rotateStrength;
        const rotateX = -percentY * rotateStrength;

        gsap.to(img, {
          x: moveX,
          y: moveY,
          rotateX: rotateX,
          rotateY: rotateY,
          duration: 0.3,
          ease: "power3.out",
          transformPerspective: 800,
          transformOrigin: "center",
        });
      };

      const resetImage = () => {
        gsap.to(img, {
          x: 0,
          y: 0,
          rotateX: 0,
          rotateY: 0,
          duration: 0.5,
          ease: "power3.out",
        });
      };

      img.addEventListener("mousemove", moveImage);
      img.addEventListener("mouseleave", resetImage);
    });
  }, []);

  useGSAP(() => {
    gsap.from(".imgQ1", {
      y: 20,
      ease: "none",
      scrollTrigger: {
        trigger: ".imgQ1",
        start: "top 80%",
        end: "top 60%",
        scrub: true,
        // markers:true
      },
    });
    gsap.from(".imgQ2", {
      y: 20,
      ease: "none",
      scrollTrigger: {
        trigger: ".imgQ2",
        start: "top 80%",
        end: "top 60%",
        scrub: true,
        // markers:true
      },
    });
    gsap.from(".imgQ3", {
      y: 20,
      ease: "none",
      scrollTrigger: {
        trigger: ".imgQ3",
        start: "top 80%",
        end: "top 60%",
        scrub: true,
        // markers:true
      },
    });
  }, []);

  return (
    <>

      {/* For Mobile */}
      <div className="w-full h-fit flex flex-col z-20 pt-20 sm:hidden COLOR_BG_CREAM space-y-10 lg:space-y-20 lg:pt-20 ">
        {/* div-1 */}
        <div className="w-full h-fit  max-sm:min-h-fit  items-center flex max-sm:flex-col  ">
          {/* Left */}
          <div className="w-1/2 max-sm:w-full h-fit max-sm:h-fit max-sm:py-[2vh] max-sm:px-[20px] max-lg:px-[4vw] flex relative COLOR_BG_CREAM flex-col COLOR_TEXT_RED justify-center items-center">
            <p className="Font_YV font-semibold uppercase ">Day 1</p>

            <div className=" text-[16px] mt-1 flex flex-col Font_YV gap-1 max-sm:text-center justify-center items-center">
              <span>
                <span className="font-semibold"></span> 21/09/17
              </span>
              <span>
                <span className="font-semibold mt-1 "></span> 5:30 PM
                <span className="font-semibold mt-1 "></span> Villa Corti
              </span>

            </div>


            <h5 className="Font_Q text-[40px] leading-[45px] max-sm:text-center flex-wrap  my-6 uppercase px-[10%] text-center flex justify-center items-center">
             White Wedding
            </h5>

            <p className=" Font_YV mt-2 leading-relaxed max-w-md text-center mx-auto">
             Transfers to Villa Corti will begin at 4:30 PM.

            </p>

            <span className=" px-[20px] Font_YV mt-2 text-[16px] leading-[16px] max-w-md text-center mx-auto">
              {/* (Join us in celebrating in joyful colors. We kindly request that guests do not wear white, red, or gold.) */}
            </span>

          </div>

          {/* right */}
          <div className="w-1/2 max-sm:w-full h-fit max-sm:h-fit  max-sm:px-[20px] COLOR_TEXT_RED flex flex-col px-12 justify-center items-center">
            <div className="w-1/2 h-fit  flex flex-col justify-center img3d-wrapper items-center">
              <img
                src={`/imgs/icon3.png`}
                alt="Img"
                className="w-full imgQ1 object-cover object-center mt-4"
              />
            </div>
          </div>

          <div className="w-full h-[1px] bg-[#5513013b] md:hidden mt-15"></div>
        </div>

        {/* div-2  */}
        <div className="w-full h-fit  max-sm:min-h-fit  flex max-sm:flex-col items-center flex-row-reverse  ">
          {/* Left */}
          <div className="w-1/2 max-sm:w-full h-fit max-sm:h-fit max-sm:py-[2vh] max-sm:px-[20px] max-lg:px-[4vw] flex relative COLOR_BG_CREAM flex-col COLOR_TEXT_RED justify-center items-center">
            <p className="Font_YV font-semibold uppercase ">Day 2</p>

            <div className=" text-[16px] mt-1 flex flex-col Font_YV gap-1 max-sm:text-center justify-center items-center">
              <span className=" uppercase flex flex-col">
                <span className="font-semibold"></span> 22/09/18
                <span className="font-semibold mt-1"></span> 7:00 PM
                <span className="font-semibold mt-1"></span> Villa Palmieri
              </span>
            </div>


            <h5 className="Font_Q text-[40px] leading-[45px] max-sm:text-center flex flex-wrap justify-center items-center  my-6 uppercase px-[10%] text-center ">
              Cocktails & Canapés
            </h5>

            <p className=" Font_YV mt-2 leading-relaxed max-w-md text-center mx-auto">
             Transfers to Villa Palmieri will begin at 6:00 PM. 
</p>

            <p className=" px-[20px] Font_YV mt-2  max-w-md text-center mx-auto">
              {/* (Join us for our vibrant, color-themed celebration — please wear yellow!) */}
            </p>


          </div>


          <div className="w-1/2 max-sm:w-full h-fit max-sm:h-fit max-sm:pb-[2vh] max-sm:px-[20px] COLOR_TEXT_RED flex flex-col px-12 justify-center items-center">
            <div className="w-1/2 h-fit  flex flex-col justify-center img3d-wrapper items-center">
              <img
                src={`/imgs/icon4.png`}
                alt="Img"
                className="w-full imgQ1 object-cover object-center mt-4"
              />
            </div>
          </div>

          <div className="w-full h-[1px] bg-[#5513013b] md:hidden mt-15"></div>
        </div>

        {/* div-3 */}
        <div className="w-full h-fit  max-sm:min-h-fit   flex items-center max-sm:flex-col ">
          {/* Left */}
          <div className="w-1/2 max-sm:w-full h-fit max-sm:h-fit  max-sm:py-[2vh] max-sm:px-[20px] max-lg:px-[4vw] flex relative COLOR_BG_CREAM flex-col COLOR_TEXT_RED justify-center items-center">
            <p className="Font_YV font-semibold uppercase ">Day 3</p>

            <div className=" text-[16px] mt-1 flex flex-col Font_YV gap-1 max-sm:text-center justify-center items-center">
              <span className=" flex flex-col uppercase">
                <span className="font-semibold"></span> 23/09/19
                <span className="font-semibold"></span> 3:00 PM
              </span>
              <span className=" flex flex-col uppercase mt-2">
                <span className="font-semibold"></span> Villa Collazzi
              </span>
            </div>

            <h5 className="Font_Q text-[40px] leading-[45px] flex flex-wrap justify-center items-center max-sm:text-center  my-6 uppercase  px-[10%] text-center">
              Indian Wedding <br /> (Baraat Assembly)
            </h5>

            <p className=" Font_YV mt-2 leading-relaxed max-w-md text-center mx-auto">
             Transfers to Villa Collazzi will begin at 2:00 PM. 
            </p>



          </div>

          {/* Left 2 */}
          <div className="w-1/2 max-sm:w-full h-fit max-sm:h-fit  max-sm:py-[2vh] max-sm:px-[20px] max-lg:px-[4vw] flex relative COLOR_BG_CREAM flex-col COLOR_TEXT_RED justify-center items-center">
            <p className="Font_YV font-semibold uppercase ">Day 3</p>

            <div className=" text-[16px] mt-1 flex flex-col Font_YV gap-1 max-sm:text-center justify-center items-center">
              <span className=" flex flex-col uppercase">
                <span className="font-semibold"></span> 23/09/19
                <span className="font-semibold"></span> 3:00 PM
              </span>
              <span className=" flex flex-col uppercase mt-2">
                <span className="font-semibold"></span> Wedding Ceremony

              </span>
            </div>

            <h5 className="Font_Q text-[40px] leading-[45px] flex flex-wrap justify-center items-center max-sm:text-center  my-6 uppercase  px-[10%] text-center">
              Indian Wedding <br /> (Baraat Assembly)
            </h5>

            <p className=" Font_YV mt-2 leading-relaxed max-w-md text-center mx-auto">
             Transfers to Villa Collazzi will begin at 2:00 PM. 
            </p>



          </div>


          
          <div className="w-1/2 max-sm:w-full h-fit max-sm:h-fit  max-sm:py-[0vh] max-sm:px-[20px] COLOR_TEXT_RED flex flex-col px-12 justify-center items-center">
            <div className="w-2/3 max-sm:w-1/2 h-fit  flex flex-col justify-center items-center img3d-wrapper pb-10">
              <img
                src={`/imgs/icon1.png`}
                alt="Img"
                className="w-full imgQ1 object-cover object-center mt-4"
              />
            </div>
          </div>
        </div>
      </div>

      {/* /////////////////////////////////////////////////////////////////////////</> */}

      {/* For PC */}
      <div className="w-full h-fit flex flex-col z-20 max-md:overflow-hidden max-sm:hidden ">
        {/* div-1 Sangeet */}
        <div className="w-full md:min-h-screen relative flex max-sm:flex-col-reverse ">
          {/* left */}
          <div className="w-1/2 md:min-h-screen  max-sm:w-full  COLOR_BG_CREAM relative z-50 top-0 mt-20 md:mt-0 mr-auto max-sm:px-[0px] max-lg:px-[4vw]">
            {/* Day md:sticky */}
            <div className="w-full h-fit md:sticky top-0 left-0 flex justify-center items-center md:mt-[5vh] md:pt-[5vw] pb-[2.5vw] COLOR_BG_CREAM z-60 ">
              <h2 className="Font_Q COLOR_TEXT_RED uppercase">Day 1</h2>
            </div>

            {/* 1 */}
            <div className="w-full max-sm:w-full h-fit py-[10vh] max-sm:h-fit max-sm:py-[5vh] max-sm:px-[20px] z-50  flex relative flex-col COLOR_TEXT_RED justify-center items-center">
              <h5 className="Font_Q text-[40px] max-sm:leading-[45px] uppercase mt-6 max-sm:px-[1vw] max-sm:text-center ">
                White Wedding
              </h5>
              <div className=" text-[16px] mt-6 flex flex-col justify-center max-sm:text-center items-center Font_YV gap-1">
                <span className=" uppercase">
                  <span className="font-semibold"></span> 21/09/17
                </span>
                <span className=" uppercase">
                  <span className="font-semibold"></span> 5:30 PM 
                </span>
                <span className=" uppercase">
                  <span className="font-semibold"></span>Villa Corti
                </span>
              </div>

              <p className=" Font_YV mt-6 leading-relaxed max-w-md text-center mx-auto">
               Transfers to Villa Corti will begin at 4:30 PM.
              </p>
              <p className=" px-[20px] Font_YV mt-2  max-w-md text-center mx-auto">
                {/* (Join us in celebrating in joyful colors. We kindly request that guests do not wear white, red, or gold.) */}
              </p>
              {/* <span className="Text_YV font-semibold py-4 text-[14px] capitalize">
              ( no white red & gold )
            </span> */}
            </div>
          </div>

          {/* right */}
          <div className="w-1/2 md:h-screen   max-sm:w-full max-md:mt-15  md:sticky md:top-0 md:right-0 flex justify-center items-center md:bg-[#551301]">
            <div className="w-1/2 md:h-fit  justify-center img3d-wrapper  ">
              {/* <h3 className="Font_Q COLOR_TEXT_CREAM uppercase">OutFit</h3>

            <p className="Font_YV COLOR_TEXT_CREAM mt-4">
              Light-coloured Indian or fusion wear
            </p>

            <p className="Font_YV COLOR_TEXT_CREAM">
              (Comfortable, breezy fabrics recommended)
            </p> */}

              <img
                src={`/imgs/icon3.png`}
                alt="Img"
                className="w-full h-full object-cover imgQ1 imgQ2 object-center md:mt-4"
              />
            </div>
          </div>
        </div>

        {/* Div - 2*/}
        <div className="w-full md:min-h-screen  relative flex max-sm:flex-col ">
          {/* Left */}
          <div className="w-1/2 max-sm:w-full max-sm:h-fit max-sm:py-[0vh]  max-md:m-10 h-screen md:sticky top-0 left-0 flex justify-center items-center md:bg-[#551301]">
            <div className="w-1/2 h-fit  flex flex-col justify-center img3d-wrapper  items-center">
              {/* <h3 className="Font_Q COLOR_TEXT_CREAM uppercase">OutFit</h3>
            <p className="Font_YV COLOR_TEXT_CREAM mt-5">
              Light-coloured Indian or fusion wear
            </p>
            <p className="Font_YV COLOR_TEXT_CREAM">
              (Comfortable, breezy fabrics recommended)
            </p> */}

              <img
                src={`/imgs/icon4.png`}
                alt="Img"
                className="w-full object-cover imgQ1 imgQ2 object-center mt-4"
              />
            </div>
          </div>

          {/* Right */}
          <div className="w-1/2 max-sm:w-full max-sm:h-fit min-h-screen  COLOR_BG_CREAM relative top-0 md:ml-auto max-sm:px-[0px] max-lg:px-[4vw]">
            {/* Day md:sticky */}
            <div className="w-full h-fit md:sticky top-0 left-0 flex justify-center items-center mt-[5vh] pt-[5vw] pb-[2.5vw] COLOR_BG_CREAM z-60 ">
              <h2 className="Font_Q COLOR_TEXT_RED uppercase">Day 2</h2>
            </div>

            {/* 1 Detail Haldi */}
            {/* <div className="w-full max-sm:w-full h-fit py-[10vh] max-sm:h-fit max-sm:py-[10vh] max-sm:px-[20px] z-50  flex relative flex-col COLOR_TEXT_RED justify-center items-center">
            <h5 className="Font_Q text-[40px] max-sm:leading-[45px] uppercase mt-6 max-sm:px-[1vw] max-sm:text-center ">
              Chooda
            </h5>
            <div className=" text-[16px] mt-6 flex flex-col justify-center max-sm:text-center items-center Font_YV gap-1">
              <span className=" uppercase">
                <span className="font-semibold"></span> 22/09/26
              </span>
              <span className=" uppercase">
                <span className="font-semibold"></span> 8:30 AM
              </span>
              <span className=" uppercase">
                <span className="font-semibold"></span> Raffles Udaipur
              </span>
            </div>

            <p className=" Font_YV mt-6 leading-relaxed max-w-md text-center mx-auto">
              An intimate ceremony woven with emotion and tradition. The bride
              is adorned with her chooda, symbolising love, prosperity, and the
              start of a beautiful new chapter.
            </p>

          </div> */}

            {/* 2 Detail */}
            <div className="w-full max-sm:w-full h-fit md:py-[10vh] max-sm:h-fit max-sm:py-[5vh] max-sm:px-[20px] z-50  flex relative flex-col COLOR_TEXT_RED justify-center items-center">
              <h5 className="Font_Q text-[40px] max-sm:leading-[45px] uppercase mt-6 max-sm:px-[1vw] max-sm:text-center ">
                Cocktails & Canapés
              </h5>
              <div className=" text-[16px] mt-6 flex flex-col justify-center max-sm:text-center items-center Font_YV gap-1">
                <span>
                  <span className="font-semibold"></span> 22/09/18
                </span>
                <span>
                  <span className="font-semibold"></span> 7:00 PM
                </span>
                <span>
                  <span className="font-semibold"></span> Villa Palmieri
                </span>
              </div>

              <p className=" Font_YV mt-6 leading-relaxed max-w-md text-center mx-auto">
                Transfers to Villa Palmieri will begin at 6:00 PM. 
              </p>

              <p className=" px-[20px] Font_YV mt-2  max-w-md text-center mx-auto">
                {/* (Join us for our vibrant, color-themed celebration — please wear yellow!) */}
              </p>


              {/* <span className="Text_YV font-semibold py-4 text-[14px] capitalize ">
              ( No White Red )
            </span> */}
            </div>

            {/* 3 Detail Standing Barat (girls side) */}
            {/* <div className="w-full max-sm:w-full h-fit py-[10vh] max-sm:h-fit max-sm:py-[10vh] max-sm:px-[20px] z-50  flex relative flex-col COLOR_TEXT_RED justify-center items-center">
            <h5 className="Font_Q text-[40px] max-sm:leading-[45px] uppercase mt-6 max-sm:px-[1vw] max-sm:text-center ">
              Standing Barat (girls side)
            </h5>
            <div className=" text-[16px] mt-6 flex flex-col justify-center max-sm:text-center items-center Font_YV gap-1">
              <span>
                <span className="font-semibold"></span> 22/09/26
              </span>
              <span>
                <span className="font-semibold"></span> 4:00 PM
              </span>
              <span>
                <span className="font-semibold"></span> Raffles Udaipur
              </span>
            </div>

            <p className=" Font_YV mt-6 leading-relaxed max-w-md text-center mx-auto">
              A royal ritual filled with pride and festivity. Safas are tied and
              spirits rise, setting the tone for a grand and joyous procession.
            </p>
          </div> */}

            {/* 4 Wedding */}
            {/* <div className="w-full max-sm:w-full h-fit py-[10vh] pb-[30vh] max-sm:h-fit max-sm:py-[5vh] max-sm:px-[20px] z-50  flex relative flex-col COLOR_TEXT_RED justify-center items-center">
              <h5 className="Font_Q text-[40px] max-sm:leading-[45px] uppercase mt-6 max-sm:px-[1vw] max-sm:text-center ">
                Wedding
              </h5>
              <div className=" text-[16px] mt-6 flex flex-col justify-center max-sm:text-center items-center Font_YV gap-1">
                <span>
                  <span className="font-semibold"></span> 22/09/26
                </span>
                <span>
                  <span className="font-semibold"></span> Evening
                </span>
                <span>
                  <span className="font-semibold"></span> Raffles Udaipur
                </span>
              </div>

              <p className=" Font_YV mt-6 leading-relaxed max-w-md text-center mx-auto">
                An electrifying procession of music, rhythm, and celebration.
                Dancing through the celebrations in high-spirited joy as the groom
                makes his grand arrival.
              </p>

              <p className=" px-[20px] Font_YV mt-2  max-w-md text-center mx-auto">
                (Join us in celebrating in beautiful pastel colors. We kindly request that guests do not wear white, red, or gold.)
              </p>
            </div> */}

            {/* 5 Wedding Dinner*/}
            {/* <div className="w-full max-sm:w-full h-fit py-[10vh] max-sm:h-fit max-sm:py-[10vh] max-sm:px-[20px] z-50  flex relative flex-col COLOR_TEXT_RED justify-center items-center">
            <h5 className="Font_Q text-[40px] max-sm:leading-[45px] uppercase mt-6 max-sm:px-[1vw] max-sm:text-center ">
              Baraat Swagat
            </h5>
            <div className=" text-[16px] mt-6 flex flex-col justify-center max-sm:text-center items-center Font_YV gap-1">
              <span>
                <span className="font-semibold"></span> 22/09/26
              </span>
              <span>
                <span className="font-semibold"></span> 5:30 PM
              </span>
              <span>
                <span className="font-semibold"></span> Raffles Udaipur
              </span>
            </div>

            <p className=" Font_YV mt-6 leading-relaxed max-w-md text-center mx-auto">
              A heartfelt welcome and a joyful union of two families. Traditions
              unfold as love and warmth bring e
            </p>
          </div> */}

            {/* 6 */}
            {/* <div className="w-full max-sm:w-full h-fit py-[10vh] max-sm:h-fit max-sm:py-[10vh] max-sm:px-[20px] z-50  flex relative flex-col COLOR_TEXT_RED justify-center items-center">
            <h5 className="Font_Q text-[40px] max-sm:leading-[45px] uppercase mt-6 max-sm:px-[1vw] max-sm:text-center ">
              Varmala
            </h5>
            <div className=" text-[16px] mt-6 flex flex-col justify-center max-sm:text-center items-center Font_YV gap-1">
              <span>
                <span className="font-semibold"></span> 22/09/26
              </span>
              <span>
                <span className="font-semibold"></span> 6:30 PM
              </span>
              <span>
                <span className="font-semibold"></span> Raffles Udaipur
              </span>
            </div>

            <p className=" Font_YV mt-6 leading-relaxed max-w-md text-center mx-auto">
              The Varmala is the beautiful moment when the couple exchanges
              floral garlands, symbolising acceptance, respect, and the
              beginning of their union. This joyful ritual marks their first
              step toward marriage, as they choose one another in the presence
              of family and friends
            </p>
          </div> */}
            {/* 7 */}
            {/* <div className="w-full max-sm:w-full h-fit py-[10vh] max-sm:h-fit max-sm:py-[10vh] max-sm:px-[20px] z-50  flex relative flex-col COLOR_TEXT_RED justify-center items-center">
            <h5 className="Font_Q text-[40px] max-sm:leading-[45px] uppercase mt-6 max-sm:px-[1vw] max-sm:text-center ">
              Phere
            </h5>
            <div className=" text-[16px] mt-6 flex flex-col justify-center max-sm:text-center items-center Font_YV gap-1">
              <span>
                <span className="font-semibold"></span> 22/09/26
              </span>
              <span>
                <span className="font-semibold"></span> 7:00 PM
              </span>
              <span>
                <span className="font-semibold"></span> Raffles Udaipur
              </span>
            </div>

            <p className=" Font_YV mt-6 leading-relaxed max-w-md text-center mx-auto">
              The Phere are the sacred vows exchanged during a traditional Hindu
              wedding ceremony. The couple walks seven circles around a holy
              fire, each round symbolising a promise of love, partnership,
              strength, prosperity, and lifelong commitment. With these seven
              steps, their bond is sealed — not just for this lifetime, but for
              all that follow.
            </p>
          </div> */}
            {/* 8 */}
            {/* <div className="w-full max-sm:w-full h-fit py-[10vh] max-sm:h-fit max-sm:py-[10vh] max-sm:px-[20px] z-50  flex relative flex-col COLOR_TEXT_RED justify-center items-center">
            <h5 className="Font_Q text-[40px] max-sm:leading-[45px] uppercase mt-6 max-sm:px-[1vw] max-sm:text-center ">
              After Party
            </h5>
            <div className=" text-[16px] mt-6 flex flex-col justify-center max-sm:text-center items-center Font_YV gap-1">
              <span>
                <span className="font-semibold"></span> 22/09/26
              </span>
              <span>
                <span className="font-semibold"></span> 11:30 PM
              </span>
              <span>
                <span className="font-semibold"></span> Raffles Udaipur
              </span>
            </div>

            <p className=" Font_YV mt-6 leading-relaxed max-w-md text-center mx-auto">
              Because the night is still young. Music turns up, spirits rise,
              and the celebration continues into the early hours.
            </p>
          </div> */}
          </div>
        </div>

        {/* Div - 3*/}
        <div className="w-full md:min-h-screen relative flex max-sm:flex-col-reverse">
          {/* left */}
          <div className="w-1/2 md:min-h-screen max-sm:w-full  COLOR_BG_CREAM relative z-50 max-md:mt-7 top-0 mr-auto max-sm:px-[0px] max-lg:px-[4vw]">
            {/* Day md:sticky */}
            <div className="w-full h-fit md:sticky top-0 left-0 flex justify-center items-center max-sm:mt-[2vh] md:mt-[5vh] pt-[5vw] pb-[2.5vw] COLOR_BG_CREAM z-60 ">
              <h2 className="Font_Q COLOR_TEXT_RED uppercase">Day 3</h2>
            </div>

            {/* 1 Detail Pool Party & Lunch */}
            <div className="w-full max-sm:w-full h-fit py-[10vh] max-sm:h-fit max-sm:py-[5vh] max-sm:px-[20px] z-50  flex relative flex-col COLOR_TEXT_RED justify-center items-center">
              <h5 className="Font_Q text-[40px] max-sm:leading-[45px] uppercase mt-6 max-sm:px-[1vw] max-sm:text-center  text-center">
                Indian Wedding <br /> (Baraat Assembly)
              </h5>
              <div className=" text-[16px] mt-6 flex flex-col justify-center max-sm:text-center items-center Font_YV gap-1">
                <span className=" uppercase">
                  <span className="font-semibold"></span> 23/09/19
                </span>
                <span className=" uppercase">
                  <span className="font-semibold"></span> 3:00 PM
                </span>
                <span className=" uppercase">
                  <span className="font-semibold"></span> Villa Collazzi
                </span>
              </div>

              <p className=" Font_YV mt-6 leading-relaxed max-w-md text-center mx-auto">
                Transfers to Villa Collazzi will begin at 2:00 PM. 
              </p>
            </div>

            {/* 2 Detail Cocktail Hour */}
            {/* <div className="w-full max-sm:w-full h-fit py-[10vh] max-sm:h-fit max-sm:py-[10vh] max-sm:px-[20px] z-50  flex relative flex-col COLOR_TEXT_RED justify-center items-center">
            <h5 className="Font_Q text-[40px] max-sm:leading-[45px] uppercase mt-6 max-sm:px-[1vw] max-sm:text-center ">
              Cocktail Hour
            </h5>
            <div className=" text-[16px] mt-6 flex flex-col justify-center max-sm:text-center items-center Font_YV gap-1">
              <span className=" uppercase">
                <span className="font-semibold"></span> 23/09/26
              </span>
              <span className=" uppercase">
                <span className="font-semibold"></span> 6:30 PM
              </span>
              <span className=" uppercase">
                <span className="font-semibold"></span> Raffles Udaipur
              </span>
            </div>

            <p className=" Font_YV mt-6 leading-relaxed max-w-md text-center mx-auto">
              An elegant hour of conversations and curated indulgence. Raise a
              toast to love and new beginnings before the evening celebrations
              unfold.
            </p>
          </div> */}

            {/* 3 Reception */}
            <div className="w-full max-sm:w-full h-fit py-[10vh] max-sm:h-fit max-sm:py-[5vh] max-sm:px-[20px] z-50  flex relative flex-col COLOR_TEXT_RED justify-center items-center">
              <h5 className="Font_Q text-[40px] max-sm:leading-[45px] uppercase mt-6 max-sm:px-[1vw] max-sm:text-center ">
                Wedding Ceremony
              </h5>
              <div className=" text-[16px] mt-6 flex flex-col justify-center max-sm:text-center items-center Font_YV gap-1">
                <span>
                  <span className="font-semibold"></span> 23/09/19
                </span>
                <span>
                  <span className="font-semibold"></span> 5:00 PM
                </span>
                <span>
                  <span className="font-semibold"></span> Villa Collazzi
                </span>
              </div>

              <p className=" Font_YV mt-6 leading-relaxed max-w-md text-center mx-auto">
                Transfers to Villa Collazzi will begin at 2:00 PM. 
              </p>

              <p className=" px-[20px] Font_YV mt-2  max-w-md text-center mx-auto">
                {/* (Join us as we celebrate our reception together. We kindly request that guests do not wear white, red, or gold.) */}
              </p>


              {/* <p className=" Font_YV mt-2 leading-relaxed max-w-md text-center mx-auto">
              Steeped in tradition and splashed with sunshine. Come celebrate our haldi with lively music, dancing, and happy moments.
            </p> */}

              {/* <span className='Text_YV font-semibold py-4 text-[14px] capitalize'>( no white red & gold )</span> */}
            </div>

            {/* 4 After Party */}
            {/* <div className="w-full max-sm:w-full h-fit md:py-[10vh]  max-sm:h-fit max-sm:py-[5vh] max-sm:px-[20px] z-50  flex relative flex-col COLOR_TEXT_RED justify-center items-center">
              <h5 className="Font_Q text-[40px] max-sm:leading-[45px] uppercase mt-6 max-sm:px-[1vw] max-sm:text-center ">
                After Party
              </h5>
              <div className=" text-[16px] mt-6 flex flex-col justify-center max-sm:text-center items-center Font_YV gap-1">
                <span className=" uppercase">
                  <span className="font-semibold"></span> 23/09/26
                </span>
                <span className=" uppercase">
                  <span className="font-semibold"></span> Evening
                </span>
                <span className=" uppercase">
                  <span className="font-semibold"></span> Raffles Udaipur
                </span>
              </div>

              <p className=" Font_YV mt-6 leading-relaxed max-w-md text-center mx-auto">
                Where the formalities fade and the real fun begins. An electric
                night of music, signature cocktails, and uninhibited celebration
                as we dance, laugh, and make memories long past midnight.
              </p>

              <p className=" px-[20px] Font_YV mt-2  max-w-md text-center mx-auto pb-[20vh]">
                (We can’t wait to celebrate with you! We kindly request that guests do not wear white or gold.)
              </p>

            </div> */}
            {/* CHECK OUT */}
            {/* <div className="w-full max-sm:w-full h-fit py-[10vh] max-sm:h-fit max-sm:py-[10vh] max-sm:px-[20px] z-50  flex relative flex-col COLOR_TEXT_RED justify-center items-center">
            <h5 className="Font_Q text-[40px] max-sm:leading-[45px] uppercase mt-6 max-sm:px-[1vw] max-sm:text-center ">
              Checkouts
            </h5>
            <div className=" text-[16px] mt-6 flex flex-col justify-center max-sm:text-center items-center Font_YV gap-1">
              <span className=" uppercase">
                <span className="font-semibold"></span> 24/09/26
              </span>
              <span className=" uppercase">
                <span className="font-semibold"></span>
                10:00 AM
              </span>
              <span className=" uppercase">
                <span className="font-semibold"></span> Raffles Udaipur
              </span>
            </div>

            <p className=" Font_YV mt-6 leading-relaxed max-w-md text-center mx-auto">
              As our celebrations come to a close, we thank you for being part
              of these beautiful memories. Safe travels, and we hope you leave
              with full hearts and wonderful stories.
            </p>
          </div> */}
          </div>

          {/* right */}
          <div className="w-1/2 md:h-screen max-sm:w-full max-sm:h-fit md:sticky top-0 right-0  flex justify-center items-center md:bg-[#551301]">
            <div className="w-1/2 h-fit  flex flex-col justify-center img3d-wrapper  items-center">
              {/* <h3 className="Font_Q COLOR_TEXT_CREAM uppercase">OutFit</h3>

            <p className="Font_YV COLOR_TEXT_CREAM mt-4">
              Light-coloured Indian or fusion wear
            </p>

            <p className="Font_YV COLOR_TEXT_CREAM">
              (Comfortable, breezy fabrics recommended)
            </p> */}

              <img
                src={`/imgs/icon1.png`}
                alt="Img"
                className="w-full object-cover imgQ1 imgQ2 object-center md:mt-4"
              />
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default CardX;
