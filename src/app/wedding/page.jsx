import WebPageSchema from "@/components/seo/WebPageSchema";
import { Const } from "@/components/utils/Constants";
import React from "react";

export const metadata = {
  title: "Wedding Itinerary | Misha & Dylan",
  description:
    "Explore the complete wedding itinerary of Misha & Dylan including Mehendi, Haldi, Sangeet, Wedding Ceremony, and Reception details.",

  openGraph: {
    title: "Wedding Itinerary | Misha & Dylan",
    description: "Complete schedule of Misha & Dylan's wedding celebrations.",
    url: "https://www.sonalskushie.com/wedding",
    type: "website",
  },
};

const page = () => {
  return (
    <>
      <WebPageSchema
        name="Wedding Itinerary | Misha & Dylan"
        description="Explore the complete wedding itinerary of Misha & Dylan including Mehendi, Haldi, Sangeet, Wedding Ceremony, and Reception schedule with dates and timings."
        url={`${Const.ClientLink}/wedding`}
      />
      <div className="w-full h-svh flex flex-col justify-center items-center">
       <h2 className="Font_Q COLOR_TEXT_RED">Under Development</h2>
      </div> 
    </>
  );
};

export default page;
