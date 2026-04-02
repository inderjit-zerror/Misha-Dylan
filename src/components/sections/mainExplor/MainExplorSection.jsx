"use client";
import SMExplor from "@/components/sections/explore/SMExplor";
import Explore from "@/components/sections/venue/Explore";
import React, { useEffect, useState } from "react";
const MainExplorSection = () => {
  const [isMobile, SetisMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 800) {
      SetisMobile(true);
    } else {
      SetisMobile(false);
    }
  }, []);

  return (
    <>
      {isMobile == false ? (
        <>
          <Explore />
        </>
      ) : (
        <>
          <SMExplor />
        </>
      )}
    </>
  );
};

export default MainExplorSection;
