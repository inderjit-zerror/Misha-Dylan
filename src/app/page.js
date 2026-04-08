
import HeroSectionHome from "@/components/sections/NewHome/HeroSectionHome";
import MarqueeGallery from "@/components/sections/NewHome/MarqueeGallery";
import SectionMain from "@/components/sections/NewHome/SectionMain";
import TravelInfo from "@/components/sections/venue/TravelInfo";
import WebPageSchema from "@/components/seo/WebPageSchema";
import { Const } from "@/components/utils/Constants";

export const metadata = {
  title: "MISHA & Dylan | Official Wedding Website",
  description:
    "Join us in celebrating the wedding of Dylan & Misha. Explore the event details, itinerary, venue information, and RSVP for our special day.",

  keywords: [
    "dylan and Misha wedding",
    "Dylan Misha marriage",
    "Indian wedding website",
    "Wedding itinerary",
    "Wedding RSVP",
    "Wedding venue details",
    "Wedding celebration India",
  ],

  robots: "index, follow",

  openGraph: {
    title: "Misha & DylanWedding | Official Website",
    description:
      "Celebrate the wedding of Dylan & Misha. Find itinerary, venue details, hotel information & RSVP.",
    url: "https://www.DylansMishaie.com",
    siteName: "Misha & Dylan Wedding",
    type: "website",
    images: [
      {
        url: "https://www.DylansMishaie.com/imgs/logo/og.png",
        width: 1200,
        height: 630,
        alt: "Dylan & Misha Wedding",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Misha & Dylan Wedding",
    description:
      "Official wedding website of Dylan & Misha. RSVP and explore event details.",
    images: ["https://www.DylansMishaie.com/imgs/logo/og.png"],
  },
};

export default function Home() {
  return (
    <>
      <WebPageSchema
        name=" Misha & Dylan  Wedding | Official Wedding Website"
        description="Welcome to the official wedding website of Misha & Dylan. Join us in celebrating our special day and explore event details, itinerary, venue information, and RSVP updates."
        url={`${Const.ClientLink}/`}
      />
      <SectionMain />
     <HeroSectionHome />
     <MarqueeGallery />
    </>
  );
}
