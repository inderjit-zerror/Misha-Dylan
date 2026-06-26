import WebPageSchema from "@/components/seo/WebPageSchema";
import { Const } from "@/components/utils/Constants";
import React from "react";

export const metadata = {
  title: "Wedding Itinerary | Dylan & Misha ",
  description:
    "Explore the complete wedding itinerary of Dylan & Misha  including Mehendi, Haldi, Sangeet, Wedding Ceremony, and Reception details.",

  openGraph: {
    title: "Wedding Itinerary | Dylan & Misha ",
    description: "Complete schedule of Dylan & Misha 's wedding celebrations.",
    url: "/wedding",
    type: "website",
  },
};

const page = () => {
  return (
    <>
      <WebPageSchema
        name="Wedding Itinerary | Dylan & Misha "
        description="Explore the complete wedding itinerary of Dylan & Misha  including Mehendi, Haldi, Sangeet, Wedding Ceremony, and Reception schedule with dates and timings."
        url={`${Const.ClientLink}/wedding`}
      />
      <div className="w-full h-svh flex flex-col justify-center items-center">
       <h2 className="Font_Q COLOR_TEXT_RED">Under Development</h2>
      </div> 
    </>
  );
};

export default page;
