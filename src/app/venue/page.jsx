import RSVP from "@/components/common/RSVP";
import FAQ from "@/components/newSection/FAQ";
import Explore from "@/components/sections/venue/Explore";
import HeroSectionVenue from "@/components/sections/venue/HeroSectionVenue";
import TravelInfo from "@/components/sections/venue/TravelInfo";
import VenueGallery from "@/components/sections/venue/VenueGallery";
import WeddingVenue from "@/components/sections/venue/WeddingVenue";
import WebPageSchema from "@/components/seo/WebPageSchema";
import { Const } from "@/components/utils/Constants";

export const metadata = {
  title: "Wedding Accommodation | Sonal & Kush",
  description:
    "Find recommended hotel accommodations for guests attending Sonal & Kush's wedding celebration. Location, booking details, and directions included.",

  openGraph: {
    title: "Wedding Hotel & Accommodation | Sonal & Kush",
    description: "Hotel and stay information for wedding guests.",
    url: "https://www.sonalskushie.com/venue",
    type: "website",
  },
};

const venue = () => {
  return (
    <>
      <WebPageSchema
        name="Wedding Accommodation & Hotel Details | Sonal & Kush"
        description="Find hotel and accommodation details for guests attending Sonal & Kush’s wedding. Get location information, directions, and stay recommendations for a comfortable visit."
        url={`${Const.ClientLink}/venue`}
      />
      <HeroSectionVenue />
      <WeddingVenue />
      <VenueGallery />
      <TravelInfo />
      {/* <FAQ /> */}
    </>
  );
};

export default venue;
