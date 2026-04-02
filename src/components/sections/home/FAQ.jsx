"use client";
import Link from "next/link";
import { useRef, useState } from "react";

const faqs = [
  {
    id: 1,
    question: "Do I need a visa to travel to Italy?",
    answer:
      `Italy is part of the Schengen Area. Guests from many countries (including the UK and U.S.) may enter visa-free for short stays, while others may require a Schengen visa.
If required, visas can be applied for up to 6 months before travel, and we recommend applying at least 6–8 weeks before departure.
`,
  },
  {
    id: 2,
    question: "Which airport should I fly into?",
    answer:
      `The closest airport is Florence Airport (FLR), located about 20 minutes from the city centre.
You may also fly into Pisa International Airport (PSA), which is about 1 hour from Florence by train or car and often has more international flight options.
`,
  },
  {
    id: 3,
    question: "How do I get from the airport to Florence?",
    answer: `Taxi from Florence Airport: -20 minutes (€25 – €35)
Tram from Florence Airport to city centre: - 25 minutes  (€1.70)
Private transfers: widely available and recommended for convenience
Please contact our logistics team at __ for the same.
`,
  },
  {
    id: 4,
    question: " Is Florence walkable?",
    answer:
      `Yes — Florence is one of the most walkable cities in Europe. Most landmarks, restaurants, and shopping streets are located within the historic centre and can easily be explored on foot.`,
  },
  {
    id: 5,
    question: "Will I have cell service in Italy?",
    answer:
      `International roaming is available but can be expensive. Many travellers prefer purchasing a local SIM card or eSIM, which can be easily arranged online or at the airport.
Wi-Fi is widely available in hotels, cafés, and restaurants.
`,
  },
  {
    id: 6,
    question: "Can I use foreign currency in Italy?",
    answer:
      `No — the local currency is the Euro (€).
Credit and debit cards are widely accepted, but it’s helpful to carry small amounts of cash for taxis, cafés, or small shops.
`,
  },
  {
    id: 7,
    question: "What about tipping?",
    answer:
      `Tipping is not mandatory in Italy, but it is appreciated.
Typical guidelines:
Restaurants: small tip or rounding up the bill
Taxi drivers: round up to the nearest euro
Hotel staff: €1–€2 for assistance
`,
  },
  {
    id: 8,
    question: "Do I need vaccinations to travel to Italy?",
    answer:
      `No special vaccinations are required for travel to Italy. Standard travel health precautions are generally sufficient.`
  },
  {
    id: 9,
    question: " Are transportation arrangements provided for wedding venues?",
    answer:
     `Yes. Guest transportation will be arranged to and from the wedding venues from designated hotels.
Detailed transfer schedules and pickup locations will be shared closer to the wedding dates through the wedding website and our hospitality team.
`,
  },
  {
    id: 10,
    question: "What languages are commonly spoken in Florence?",
    answer: `The primary language is Italian, but English is widely spoken in hotels, restaurants, and tourist areas. Learning a few simple Italian phrases like “Grazie” (thank you) is always appreciated.
`,
    // LINK: `https://indianvisaonline.gov.in/evisa/tvoa.html`,
  },
];



export default function FAQ() {
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
          FAQ
          <p className="  Font_YV mt-7 font-bold sm:pt-5 max-sm:w-full max-sm:px-[10vw]">
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
          </div>
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
              <div className="w-0 h-px bg-[#551301] group-hover:w-full absolute bottom-0 left-0 transition-all duration-200"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
