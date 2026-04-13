// "use client";
// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Image from "next/image";
// import { useGSAP } from "@gsap/react";
// import RSVP from "@/components/common/RSVP";
// import Shop from "@/components/common/Shop";
// gsap.registerPlugin(ScrollTrigger);

// const Explore = () => {
//   const mainContainer = useRef();
//   const scrollContainer = useRef();


//   useGSAP(() => {
//     if (!mainContainer.current || !scrollContainer.current) return;
//     const totalScrollWidth =
//       scrollContainer.current.scrollWidth - window.innerWidth;

//     var sliderTween = gsap.timeline({
//       scrollTrigger: {
//         trigger: mainContainer.current,
//         start: "top top",
//         end: () => `+=${totalScrollWidth}`,
//         pin: true,
//         scrub: true,
//         // markers: true,
//       }
//     })

//     sliderTween.to(scrollContainer.current, {
//       x: -totalScrollWidth,
//       ease: "none",
//     })

//     const animate_child = document.querySelectorAll(".animate_child");

//     animate_child.forEach((child) => {
//       gsap.fromTo(
//         child,
//         { xPercent: 20 },
//         {
//           xPercent: 0,
//           ease: "power2.out",
//           duration: 1,
//           scrollTrigger: {
//             trigger: child,
//             containerAnimation: sliderTween,
//             start: "left right",
//             toggleActions: "play none none reverse",
//           },
//         });
//     });
//   })

//   return (
//     <>
//       <div
//         ref={mainContainer}
//         className="w-full h-screen overflow-x-hidden flex relative COLOR_BG_CREAM"
//       >
//         <div
//           ref={scrollContainer}
//           className="w-fit h-screen flex fixed overflow-hidden top-0 left-0"
//         >
//           <div className="w-fit  h-screen flex  justify-center items-center ml-[5vw]">
//             <div className="w-fit h-fit flex  ">
//               <div className="w-[413px] aspect-[4/5]  overflow-hidden img5">
//                 <Image
//                   src={`/imgs/explorNewImg/City_Palace_1.webp`}
//                   className="w-full h-full  object-cover object-center scale-[1.2]"
//                   width={1000}
//                   height={1000}
//                   alt="Img"
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="w-[50vw] h-screen  flex justify-center items-center  ">
//             <div className="w-fit max-w-[665px] contA6 h-fit flex flex-col gap-6 justify-center items-center">
//               <p className=" uppercase Font_YV COLOR_TEXT_RED contA6">

//               </p>
//               <h4 className=" text-[80px]  leading-[80px] Font_Q contA6 COLOR_TEXT_RED text-center uppercase ">
//                 EXPLORE FLORENCE
//               </h4>
//               <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
//                 <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
//                  Florence is a city of Renaissance art, beautiful architecture, charming streets, and unforgettable food. If you have some time between wedding celebrations, here are a few of our favourite recommendations across sightseeing, tours, dining, and shopping. <br />

//                  All travel times listed below are approximate and measured from Florence’s historic centre (Duomo area), where most guest accommodations are located.

//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className=" w-fit h-screen mr-[2vw] flex justify-center items-center">
//             <div className="w-[413px] aspect-[4/5] flex overflow-hidden ">
//               <Image
//                 src={`/imgs/explorNewImg/City_Palace_2.webp`}
//                 className="w-full h-full object-cover  object-center"
//                 width={1000}
//                 height={1000}
//                 alt="Img"
//               />
//             </div>
//           </div>

//           <div className=" animate_child w-fit mx-[5vw] h-screen flex  justify-center items-center">
//             <div className="w-fit h-fit flex  ">
//               <div className="w-[50vw] h-screen  overflow-hidden img5">
//                 <Image
//                   src={`/imgs/explorNewImg/Lake_Pichola_1.webp`}
//                   className="w-full h-full  object-cover object-center scale-[1.2]"
//                   width={2000}
//                   height={2000}
//                   alt="Img"
//                 />
//               </div>
//             </div>
//           </div>

//           <div className=" animate_child w-[50vw] h-screen  flex justify-center items-center  ">
//             <div className="w-fit max-w-[665px] contA6 h-fit flex flex-col gap-6 justify-center items-center">
//               <p className=" uppercase Font_YV COLOR_TEXT_RED contA6">
//               </p>
//               <h4 className=" text-[80px]  leading-[80px] Font_Q contA6 COLOR_TEXT_RED uppercase ">
//                 Lake Pichola
//               </h4>
//               <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
//                 <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
//                   Experience Udaipur from the water with a private sunset boat ride. Golden skies, marble palaces, and serene lake views create an unforgettable setting.
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className=" animate_child w-fit h-screen mr-[2vw] flex justify-center items-center">
//             <div className="w-[413px] aspect-[4/5] flex overflow-hidden ">
//               <Image
//                 src={`/imgs/explorNewImg/Lake_Pichola_2.webp`}
//                 className="w-full h-full object-cover  object-center"
//                 width={1000}
//                 height={1000}
//                 alt="Img"
//               />
//             </div>
//           </div>

//           <div className="animate_child w-fit mx-[5vw] h-screen flex  justify-center items-center">
//             <div className="w-fit h-fit flex  ">
//               <div className="w-[50vw] h-fit  overflow-hidden img5">
//                 <Image
//                   src={`/imgs/explorNewImg/Taj_Lake_Palace_1.webp`}
//                   className="w-full h-full  object-cover object-center scale-[1.2]"
//                   width={2000}
//                   height={2000}
//                   alt="Img"
//                 />
//               </div>
//             </div>
//           </div>

//           <div className=" animate_child w-[50vw] h-screen  flex justify-center items-center  ">
//             <div className="w-fit max-w-[665px] contA6 h-fit flex flex-col gap-6 justify-center items-center">
//               <p className=" uppercase Font_YV COLOR_TEXT_RED contA6">

//               </p>
//               <h4 className=" text-[80px] leading-[80px] Font_Q contA6 COLOR_TEXT_RED uppercase ">
//                 Taj Lake Palace
//               </h4>
//               <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
//                 <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
//                   An iconic white-marble palace floating gracefully on the lake. Ideal for an elegant dinner, afternoon tea, or champagne at sunset.
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className=" animate_child w-fit h-screen mr-[2vw] flex justify-center items-center">
//             <div className="w-[70vw] h-screen flex overflow-hidden ">
//               <img
//                 src={`/imgs/explorNewImg/pales.jpg`}
//                 className="w-full h-full object-cover  object-center"
//                 alt="Img"
//               />
//             </div>
//           </div>


//           <div className="animate_child w-fit mx-[5vw] h-screen flex  justify-center items-center">
//             <div className="w-fit h-fit flex  ">
//               <div className="w-[50vw]  aspect-[3/2]  overflow-hidden img5">
//                 <Image
//                   src={`/imgs/explorNewImg/The_Oberoi_Udaivilas_1.webp`}
//                   className="w-full h-full  object-cover object-center scale-[1.2]"
//                   width={2000}
//                   height={2000}
//                   alt="Img"
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="animate_child w-[50vw] h-screen  flex justify-center items-center  ">
//             <div className="w-fit max-w-[665px] contA6 h-fit flex flex-col gap-6 justify-center items-center">
//               <p className=" uppercase Font_YV COLOR_TEXT_RED contA6">

//               </p>
//               <h4 className=" text-[80px] leading-[80px] Font_Q contA6 COLOR_TEXT_RED uppercase text-center  ">
//                 The Oberoi Udaivilas
//               </h4>
//               <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
//                 <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
//                   A benchmark of Indian luxury. Indulge in a world-class spa, lakeside dining, or sunset cocktails in a setting of timeless grandeur.
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="animate_child w-fit h-screen mr-[2vw] flex justify-center items-center">
//             <div className="w-[413px] aspect-[4/5] flex overflow-hidden ">
//               <Image
//                 src={`/imgs/explorNewImg/The_Oberoi_Udaivilas_2.webp`}
//                 className="w-full h-full object-cover  object-center"
//                 width={1000}
//                 height={1000}
//                 alt="Img"
//               />
//               {/* </div> */}
//             </div>
//           </div>


//           <div className="animate_child w-fit mx-[5vw] h-screen flex  justify-center items-center">
//             <div className="w-fit h-fit flex  ">
//               <div className="w-[50vw] h-fit  overflow-hidden img5">
//                 <Image
//                   src={`/imgs/explorNewImg/Bagore_Ki_Haveli_1.webp`}
//                   className="w-full h-full  object-cover object-center scale-[1.2]"
//                   width={2000}
//                   height={2000}
//                   alt="Img"
//                 />
//               </div>
//             </div>
//           </div>

//           <div className=" animate_child w-[50vw] h-screen  flex justify-center items-center  ">
//             <div className="w-fit max-w-[665px] contA6 h-fit flex flex-col gap-6 justify-center items-center">
//               <p className=" uppercase Font_YV COLOR_TEXT_RED contA6">

//               </p>
//               <h4 className=" text-[80px] leading-[80px] Font_Q contA6 COLOR_TEXT_RED uppercase text-center ">
//                 Bagore Ki Haveli
//               </h4>
//               <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
//                 <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
//                   An 18th-century haveli offering a glimpse into Rajasthan’s cultural richness. The evening folk performance is particularly enchanting.
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className=" animate_child w-fit h-screen mr-[2vw] flex justify-center items-center">
//             <div className="w-[70vw] h-screen flex overflow-hidden ">
//               <img
//                 src={`/imgs/explorNewImg/bkh.jpg`}
//                 className="w-full h-full object-cover  object-center"

//                 alt="Img"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       <Shop />

//     </>
//   );
// };

// export default Explore;


"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import Shop from "@/components/common/Shop";

gsap.registerPlugin(ScrollTrigger);

// ─── DATA ─────────────────────────────────────────────────────────────────────

const SECTIONS = [
  // ── PLACES TO VISIT ──
  {
    type: "image-wide",
    src: "/all_new_images/expF/a1.jpg",
    alt: "Florence Cathedral",
  },
  {
    type: "text",
    tag: "Places to Visit",
    title: "Florence\nCathedral",
    body: "Florence's most iconic landmark — Brunelleschi's famous red dome dominates the city skyline.",
    meta: ["Central Florence", "Cathedral free · Dome €30"],
  },
  {
    type: "image-portrait",
    src: "/all_new_images/expF/a2.jpg",
    alt: "Duomo detail",
  },
  {
    type: "image-wide",
    src: "/all_new_images/expF/b1.jpg",
    alt: "Uffizi Gallery",
    animate: true,
  },
  {
    type: "text",
    tag: "Places to Visit",
    title: "Uffizi\nGallery",
    body: "One of the world's greatest museums — home to masterpieces by Botticelli, Leonardo da Vinci and Michelangelo.",
    meta: ["Historic Center", "€20–€25"],
    animate: true,
  },
  {
    type: "image-portrait",
    src: "/all_new_images/expF/b2.jpg",
    alt: "Ponte Vecchio",
    animate: true,
  },
  {
    type: "image-wide",
    src: "/all_new_images/expF/c1.jpg",
    alt: "Piazzale Michelangelo",
    animate: true,
  },
  {
    type: "text",
    tag: "Places to Visit",
    title: "Piazzale\nMichelangelo",
    body: "The best panoramic viewpoint in Florence with spectacular sunset views over the city rooftops.",
    meta: ["Taxi 10 min · Walk 25 min", "Free"],
    animate: true,
  },
  {
    type: "image-full",
    src: "/all_new_images/expF/c2.jpg",
    alt: "Boboli Gardens",
    animate: true,
  },
  {
    type: "image-wide",
    src: "/all_new_images/expF/d1.jpg",
    alt: "Pitti Palace",
    animate: true,
  },
  {
    type: "text",
    tag: "Places to Visit",
    title: "Pitti\nPalace",
    body: "Former residence of the Medici family — home to several museums, art collections, and the beautiful Boboli Gardens behind.",
    meta: ["15 min walk from city centre", "€16"],
    animate: true,
  },
  {
    type: "image-portrait",
    src: "/all_new_images/expF/d2.jpg",
    alt: "Basilica of Santa Croce",
    animate: true,
  },
  // ── TOURS & EXPERIENCES ──
  {
    type: "image-wide",
    src: "/all_new_images/expF/e1.jpg",
    alt: "Chianti Wine Region",
    animate: true,
  },
  {
    type: "text",
    tag: "Tours & Experiences",
    title: "Chianti\nWine Tours",
    body: "Rolling vineyards, charming villages and exceptional wine tastings — the perfect Tuscan afternoon.",
    meta: ["45–60 min from Florence", "€120–€200 per person"],
    animate: true,
  },
  {
    type: "image-portrait",
    src: "/all_new_images/expF/e2.jpg",
    alt: "Pisa",
    animate: true,
  },
  {
    type: "image-wide",
    src: "/all_new_images/expF/f1.jpg",
    alt: "Siena",
    animate: true,
  },
  {
    type: "text",
    tag: "Tours & Experiences",
    title: "Siena\nDay Trip",
    body: "The medieval town of Siena is known for its breathtaking Piazza del Campo and stunning Gothic cathedral.",
    meta: ["1 hour by train", "€10–€15"],
    animate: true,
  },
  {
    type: "image-full",
    src: "/all_new_images/expF/f2.jpg",
    alt: "Tuscan Cooking Class",
    animate: true,
  },
  // ── DINING ──
  {
    type: "image-wide",
    src: ``,
    alt: "All'Antico Vinaio",
    animate: true,
  },
  {
    type: "text",
    tag: "Culinary Guide",
    title: "All'Antico\nVinaio",
    body: "Florence's most famous sandwich shop — focaccia packed with Tuscan meats and cheeses. Expect a queue, worth every minute.",
    meta: ["Historic Centre", "€10–€15"],
    animate: true,
  },
  {
    type: "image-portrait",
    src: ``,
    alt: "La Giostra",
    animate: true,
  },
  {
    type: "image-wide",
    src: ``,
    alt: "Buca Lapi",
    animate: true,
  },
  {
    type: "text",
    tag: "Culinary Guide",
    title: "Buca\nLapi",
    body: "Florence's oldest restaurant — celebrated for the legendary Bistecca alla Fiorentina. A true Florentine institution.",
    meta: ["Via del Trebbio", "€50–€80 per person"],
    animate: true,
  },
  {
    type: "image-portrait",
    src: ``,
    alt: "Gelateria dei Neri",
    animate: true,
  },
  // ── SHOPPING ──
  {
    type: "image-wide",
    src: ``,
    alt: "Via de' Tornabuoni",
    animate: true,
  },
  {
    type: "text",
    tag: "Shopping",
    title: "Via de'\nTornabuoni",
    body: "Florence's luxury shopping street — home to Gucci, Ferragamo, Prada and other iconic Italian fashion houses.",
    meta: ["10 min walk from Duomo", ""],
    animate: true,
  },
  {
    type: "image-portrait",
    src: ``,
    alt: "San Lorenzo Market",
    animate: true,
  },
  {
    type: "image-full",
    src: ``,
    alt: "The Mall Firenze Outlet",
    animate: true,
  },
  {
    type: "text",
    tag: "Shopping",
    title: "The Mall\nFirenze",
    body: "A luxury outlet offering Gucci, Valentino and Ferragamo at reduced prices. Shuttle buses run daily from the city centre.",
    meta: ["40 min by car", "Shuttle from city centre"],
    animate: true,
  },
  {
    type: "image-portrait",
    src: ``,
    alt: "Officina Profumo-Farmaceutica di Santa Maria Novella",
    animate: true,
  },
];

// ─── COMPONENT ────────────────────────────────────────────────────────────────

const Explore = () => {
  const mainContainer = useRef();
  const scrollContainer = useRef();

  useGSAP(() => {
    if (!mainContainer.current || !scrollContainer.current) return;

    const totalScrollWidth =
      scrollContainer.current.scrollWidth - window.innerWidth;

    const sliderTween = gsap.timeline({
      scrollTrigger: {
        trigger: mainContainer.current,
        start: "top top",
        end: () => `+=${totalScrollWidth}`,
        pin: true,
        scrub: true,
      },
    });

    sliderTween.to(scrollContainer.current, {
      x: -totalScrollWidth,
      ease: "none",
    });

    // Animate children
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
        }
      );
    });
  });

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
          {/* ── INTRO PANEL ── */}
          <IntroPanel />

          {/* ── DYNAMIC SECTIONS ── */}
          {SECTIONS.map((section, i) => (
            <SectionBlock key={i} section={section} />
          ))}

          {/* ── TIP PANEL ── */}
          <TipPanel />
        </div>
      </div>

     
    </>
  );
};

// ─── INTRO PANEL ─────────────────────────────────────────────────────────────

const IntroPanel = () => (
  <>
    {/* Opening portrait image */}
    <div className="w-fit h-screen flex justify-center items-center ml-[5vw]">
      <div className="w-[413px] aspect-[4/5] overflow-hidden">
        {/* <Image
          src=""
          
          width={1000}
          height={1000}
          alt="Florence"
        /> */}
        <img src={`/all_new_images/expF/EXP1.webp`} className="w-full h-full object-cover object-center scale-[1.2]" alt="IMG" />
      </div>
    </div>

    {/* Intro text */}
    <div className="w-[55vw] h-screen flex justify-center items-center px-[4vw]">
      <div className="w-fit max-w-[660px] h-fit flex flex-col gap-6 justify-center items-center">
       

        <h4 className="text-[72px] leading-[70px] Font_Q COLOR_TEXT_RED text-center uppercase">
          Explore<br />
          <em className="font-light italic">Florence</em>
        </h4>

        <div className="w-full max-w-[460px] flex flex-col justify-center items-center gap-4">
          <p className="text-[16px] COLOR_TEXT_RED text-center Font_YV leading-relaxed ">
            Florence is a city of Renaissance art, beautiful architecture,
            charming streets, and unforgettable food. If you have some time
            between celebrations, here are a few of our favourite
            recommendations.
          </p>
          <p className="text-[13px] COLOR_TEXT_RED text-center Font_YV  italic">
            All travel times are approximate from Florence's historic centre (Duomo area).
          </p>
        </div>

        {/* Category pills */}
        <div className="flex gap-3 flex-wrap justify-center mt-2">
          {["Sightseeing", "Tours", "Dining", "Shopping"].map((cat) => (
            <span
              key={cat}
              className="text-[10px] tracking-[0.3em] uppercase Font_YV COLOR_TEXT_RED border border-[#C53D2E] border-opacity-25 px-4 py-2 "
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* Second portrait */}
    <div className="w-fit h-screen mr-[2vw] flex justify-center items-center">
      <div className="w-[413px] aspect-[4/5] overflow-hidden">
        {/* <Image
          src="/imgs/explorNewImg/City_Palace_2.webp"
          className="w-full h-full object-cover object-center"
          width={1000}
          height={1000}
          alt="Florence"
        /> */}

         <img src={`/all_new_images/expF/EXP2.webp`} className="w-full h-full object-cover object-center" alt="IMG" />

      </div>
    </div>
  </>
);

// ─── SECTION BLOCK ────────────────────────────────────────────────────────────

const SectionBlock = ({ section }) => {
  const animClass = section.animate ? "animate_child" : "";

   // 🚨 Skip image sections if no src
  if (
    (section.type.includes("image")) &&
    (!section.src || section.src.trim() === "")
  ) {
    return null;
  }

  if (section.type === "image-wide") {
    return (
      <div className={`${animClass} w-fit mx-[5vw] h-screen flex justify-center items-center`}>
        <div className="w-[50vw] h-screen overflow-hidden img5">
          <Image
            src={section.src}
            className="w-full h-full object-cover object-center scale-[1.2]"
            width={2000}
            height={2000}
            alt={section.alt}
          />
        </div>
      </div>
    );
  }

  if (section.type === "image-portrait") {
    return (
      <div className={`${animClass} w-fit h-screen mr-[2vw] flex justify-center items-center`}>
        <div className="w-[413px] aspect-[4/5] flex overflow-hidden">
          <Image
            src={section.src}
            className="w-full h-full object-cover object-center"
            width={1000}
            height={1000}
            alt={section.alt}
          />
        </div>
      </div>
    );
  }

  if (section.type === "image-full") {
    return (
      <div className={`${animClass} w-fit h-screen mr-[2vw] flex justify-center items-center`}>
        <div className="w-[70vw] h-screen flex overflow-hidden">
          <img
            src={section.src}
            className="w-full h-full object-cover object-center"
            alt={section.alt}
          />
        </div>
      </div>
    );
  }

  if (section.type === "text") {
    return (
      <div className={`${animClass} w-[50vw] h-screen flex justify-center items-center`}>
        <div className="w-fit max-w-[620px] h-fit flex flex-col gap-5 justify-center items-center px-8">

          {/* Category tag */}
          {section.tag && (
            <div className="flex items-center gap-3 self-start">
              <div className="w-5 h-px bg-[#C53D2E] opacity-30" />
              <p className="text-[10px] tracking-[0.35em] uppercase Font_YV COLOR_TEXT_RED ">
                {section.tag}
              </p>
            </div>
          )}

          {/* Title */}
          <h4 className="text-[72px] leading-[70px] Font_Q COLOR_TEXT_RED uppercase self-start">
            {section.title.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < section.title.split("\n").length - 1 && <br />}
              </React.Fragment>
            ))}
          </h4>

          {/* Body */}
          <p className="text-[16px] COLOR_TEXT_RED text-left Font_YV leading-relaxed  self-start max-w-[420px]">
            {section.body}
          </p>

          {/* Meta info */}
          {section.meta?.filter(Boolean).length > 0 && (
            <div className="flex flex-col gap-2 self-start mt-1">
              {section.meta.filter(Boolean).map((m, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-3 h-px bg-[#C53D2E] " />
                  <span className="text-[11px] tracking-[0.15em] Font_YV COLOR_TEXT_RED ">
                    {m}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  return null;
};

// ─── TIP PANEL ───────────────────────────────────────────────────────────────

const TipPanel = () => (
  <div className="animate_child w-[60vw] h-screen flex justify-center items-center px-[6vw]">
    <div className="w-fit max-w-[560px] flex flex-col gap-6 items-center text-center">
      {/* Ornament */}
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="13" y="0" width="6" height="6" fill="#C53D2E" fillOpacity="0.3" transform="rotate(45 16 3)" />
        <rect x="13" y="13" width="6" height="6" fill="#C53D2E" fillOpacity="0.15" transform="rotate(45 16 16)" />
        <rect x="13" y="26" width="6" height="6" fill="#C53D2E" fillOpacity="0.3" transform="rotate(45 16 29)" />
      </svg>

      <p className="text-[11px] tracking-[0.4em] uppercase Font_YV COLOR_TEXT_RED ">
        Tip for Guests
      </p>

      <h4 className="text-[52px] leading-[52px] Font_Q COLOR_TEXT_RED italic font-light">
        Florence on<br />foot
      </h4>

      <p className="text-[16px] COLOR_TEXT_RED Font_YV leading-relaxed max-w-[420px]">
        Florence is a compact and wonderfully walkable city. Many of its most
        famous landmarks, restaurants, and shops are within the historic centre
        and can easily be explored on foot.
      </p>

      <div className="w-px h-16 bg-[#C53D2E] opacity-20 mt-2" />
    </div>
  </div>
);

export default Explore;