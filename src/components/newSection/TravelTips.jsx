"use client";
import Link from "next/link";
import { useRef, useState } from "react";

const faqs = [
  {
    id: 1,
    question: "Tech & Power",
    answer:
      `Italy uses Type C, F, and L power outlets with 230V voltage.
If you are travelling from the U.S., UK, or UAE, you may need a plug adapter to charge your devices.

`,
  },
  {
    id: 2,
    question: "Weather in Florence (September) ",
    answer:
      `September is one of the most beautiful times to visit Florence.
Expect:
Daytime: -24–28°C (75–82°F),
Evenings: -15–18°C (59–64°F),
Days are generally warm and sunny, with pleasant evenings — perfect for outdoor celebrations.

`,
  },
  {
    id: 3,
    question: "What to Pack ",
    answer: `Light, breathable clothing for daytime
A light jacket or shawl for cooler evenings
Comfortable walking shoes (Florence streets are cobblestoned)
Sunglasses and sunscreen

`,
  },
  {
    id: 4,
    question: " Hydration",
    answer:
      `Florence has excellent drinking water, and many public fountains provide safe drinking water. Carrying a refillable water bottle can be very convenient while exploring the city.`,
  },
  {
    id: 5,
    question: "Getting Around Florence",
    answer:
      `Walking: best way to explore the historic centre
Taxi: -€10–€20 for most rides within the city
Uber: limited availability (usually Uber Black)
For short distances, walking is often faster than driving.

`,
  },
  {
    id: 6,
    question: "Dining in Italy",
    answer:
      `Meals in Italy are typically more relaxed and leisurely than in many other countries.
Lunch usually runs 1:00–3:00 PM, while dinner typically begins after 7:30 PM.
Many restaurants may require reservations for dinner.

`,
  },
];



export default function TravelTips() {
  const [openId, setOpenId] = useState(null);
  const contentRefs = useRef({});

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="FAQ"
      className="min-h-screen max-sm:min-h-fit COLOR_BG_CREAM  flex items-center justify-center max-sm:py-[20vw] py-[20vh]"
    >
      <div className="w-[80%] max-sm:w-full px-6 max-sm:px-[20px] flex flex-col gap-20">
        <h2 className="text-center Font_Q flex flex-col justify-center items-center max-sm:justify-start max-sm:mt-10 COLOR_TEXT_RED">
          Travel Tips
          {/* <p className="  Font_YV mt-7 font-bold sm:pt-5 max-sm:w-full max-sm:px-[10vw]">
            For any wedding-related questions, please reach out to Misha & Dylan wedding planning team at:
          </p>
          <div className=" w-fit h-fit flex sm:gap-2 mt-4 justify-center items-center max-sm:flex-col">

             <a href="mailto:sonalskushie@gmail.com" >
              <div className=" relative group flex flex-col max-sm:mt-2">
              <p className="Font_YV ">mishadylan@gmail.com</p>
              <div className="w-0 h-px bg-[#551301]  group-hover:w-full absolute bottom-[-1] left-0 transition-all duration-200"></div>
              </div>
            </a>

            <p className="px-2 max-sm:hidden">|</p>

            <a href="tel:+919358800614">
              <div className=" relative group flex w-fit flex-col max-sm:mt-2">
              <p className="Font_YV ">+91 93588 00614</p>
              <div className="w-0 h-px bg-[#551301]  group-hover:w-full absolute bottom-[-1] left-0 transition-all duration-200"></div>
              </div>
            </a>
            <p className="px-2 max-sm:hidden">|</p>
            <a href="tel:+919310069102">
              <div className=" relative group flex w-fit flex-col">
              <p className="Font_YV max-sm:mt-2">+91 93100 69102</p>
              <div className="w-0 h-px bg-[#551301]  group-hover:w-full absolute bottom-[-1] left-0 transition-all duration-200"></div>
              </div>
            </a>
          </div> */}
        </h2>

        <div className="space-y-6 w-full">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border-b border-[#55130121] pb-6 group relative"
            >
              {/* BUTTON */}
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="group w-full flex items-center justify-between text-left"
              >
                <span className="tracking-wide uppercase COLOR_TEXT_RED Font_YV text-[1.5rem] max-sm:text-[1.1rem] md:text-base">
                  {faq.question}
                </span>

                {/* ICON */}
                <span
                  className={`relative w-5 h-5 transition-transform duration-500 ${
                    openId === faq.id ? "rotate-45" : ""
                  }`}
                >
                  <img
                    src="/svgs/IconPlusnew.svg"
                    alt="icon"
                    className="absolute inset-0 w-full h-full"
                  />
                  <span className="absolute inset-0 m-auto w-[7px] h-[7px] COLOR_BG_CREAM" />
                </span>
              </button>

              {/* CONTENT */}
              <div
                ref={(el) => (contentRefs.current[faq.id] = el)}
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{
                  height:
                    openId === faq.id
                      ? `${contentRefs.current[faq.id]?.scrollHeight}px`
                      : "0px",
                }}
              >
                <div className="mt-4 Font_YV text-[18px] text-[#551301a4]">
                  {faq.answer}

                  {(faq.id === 14 || faq.id === 15) && (
                    <Link
                      href="/explore"
                      className="COLOR_TEXT_RED underline ml-2"
                    >
                      Know More
                    </Link>
                  )}
                  {/* Visa link */}
                  {faq.id === 10 && faq.LINK && (
                    <a
                      href={faq.LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mt-2 COLOR_TEXT_RED underline"
                    >
                      Apply for Indian e-Tourist Visa
                    </a>
                  )}
                </div>
              </div>

              {/* HOVER LINE */}
              <div className="w-0 h-px bg-[#C53D2E] group-hover:w-full absolute bottom-0 left-0 transition-all duration-200"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
