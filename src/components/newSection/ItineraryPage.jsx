"use client";
import { FaLocationDot } from "react-icons/fa6";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const events = [
  {
    date: "17 September",
    title: "White Wedding",
    time: "5:30 PM",
    venue: "Villa Corti | 5:30 PM",
    transfer: "Transfers to Villa Corti will begin at 4:30 PM. ",
    accent: "White",
    index: "01",
    url: `/FinalImage/VillaCorti.webp`,
    //  subEvents: [
    //   { time: "", name: "" },
    // ],
  },
  {
    date: "18 September",
    title: "Sangeet",
    time: "7:00 PM",
    venue: "Villa Palmieri | 5:00 PM",
    transfer: `Transfers to Villa Palmieri will begin at 4:30 PM. Followed by Afterparty at Auberge Hotel `,
    accent: "Evening",
    index: "02",
    url: `/FinalImage/VillaPalmieri.webp`,
    //  subEvents: [
    //   { time: "", name: "" },
    // ],
  },
  {
    date: "19 September",
    title: "Indian Wedding",
    time: "3:00 PM – 5:00 PM",
    venue: "Villa Collazzi",
    transfer: "Transfers to Villa Collazzi will begin at 2:00 PM.",
    accent: "Indian",
    index: "03",
    subEvents: [
      { time: "3:00 PM", name: "Baraat Assembly" },
      { time: "5:00 PM", name: "Wedding Ceremony" },
    ],
    url: `/FinalImage/VillaCollazzi.webp`,
  },
];

export default function FeaturedEvents() {
  const container = useRef();

  useGSAP(() => {
    gsap.from(".event-card", {
      y: "8vw",
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
      },
    });

    gsap.from(".headingAnim", {
      y: "4vw",
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section
      ref={container}
      className="w-full bg-[#f6f1e7] py-[6vw] overflow-hidden max-sm:pt-[12vh]"
    >
      {/* Heading */}
      <div className="w-[92%] mx-auto flex items-end justify-between max-sm:justify-center mb-[4vw]">
        <div>
          <h2 className="headingAnim text-[#016342] uppercase  leading-none Font_Q text-[5vw] sm:text-[4vw]">
            Wedding Itinerary
          </h2>

          {/* <p className="headingAnim text-[#016342] text-[1rem] sm:text-[1.1vw] mt-[0.8vw] uppercase tracking-[0.08vw]">
            places that stay with you
          </p> */}
        </div>

        {/* <div className="hidden sm:flex items-center gap-[1vw] text-[#016342]">
          <span className="text-[2vw] cursor-pointer">←</span>
          <span className="text-[2vw] cursor-pointer">→</span>
        </div> */}
      </div>

      {/* Cards */}
      <div className="w-[92%] mx-auto flex flex-col sm:flex-row gap-[2vw] max-sm:gap-[15vw] max-sm:py-[15vw]">
        {events.map((item, index) => (
          <div
            key={index}
            className={`event-card group ${
              index === 1 ? "sm:w-[40%]" : "sm:w-[26%]"
            } w-full`}
          >
            {/* Image */}
            <div className="relative overflow-hidden max-sm:border-[1vw] sm:border-[0.5vw] border-[#F9DE85]  aspect-[4/5]">
              <Image
                src={item.url}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-[1.08] duration-700"
              />

              <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* Content */}
            <div className="pt-[1.2vw] text-[#016342] max-sm:pt-[5vw]">
              <div className="uppercase text-[0.9rem] Font_Q   w-full flex  justify-between items-center ">
                <span>{item.date} </span>
                <span className="ml-auto flex justify-center items-center "> <FaLocationDot className="mr-2" /> {item.venue} </span>
              </div>

              <h2 className="uppercase leading-[1.2] Font_Q mt-[1vw] font-serif text-[1.5rem] sm:text-[1.7vw]">
                {item.title}
              </h2>

              <div className="mt-[0.5vw] space-y-[0.3vw] flex ">
                <p className="text-[0.85rem ] Font_Q sm:text-[0.8vw] leading-[1.5] flex ">
                  {item.transfer}
                </p>
              </div>

              {/* Sub Events */}
              {item.subEvents && (
                <div className="mt-[1.2vw] border-t border-[#016342]/30 pt-[1vw]">
                  {item.subEvents.map((sub, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between Font_Q text-[0.85rem] sm:text-[0.8vw] uppercase mb-[0.5vw]"
                    >
                      <span>{sub.time}</span>
                      <span>{sub.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
