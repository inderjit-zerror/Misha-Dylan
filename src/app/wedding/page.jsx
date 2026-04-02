import RSVP from "@/components/common/RSVP";
import CardX from "@/components/sections/wedding/CardX";
import WeddingHome from "@/components/sections/wedding/WeddingHome";
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
      <div className="w-full h-fit flex flex-col">
        <WeddingHome />
        <CardX />
      </div> 
    </>
  );
};

export default page;
