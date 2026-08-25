"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { RiMenu4Fill, RiMenu3Line } from "react-icons/ri";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const NavBar = () => {
  const navRef = useRef(null);
  const pathname = usePathname();

  const [isNavOpen, SetIsNavOpen] = useState(false);

  // NAVBAR HIDE / SHOW
  useEffect(() => {
    if (!navRef.current) return;

    let lastScroll = 0;

    const trigger = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        const currentScroll = self.scroll();

        if (currentScroll > lastScroll && currentScroll > 100) {
          gsap.to(navRef.current, {
            y: "-300%",
            duration: 0.4,
            ease: "power3.out",
          });
        } else {
          gsap.to(navRef.current, {
            y: "0%",
            duration: 0.4,
            ease: "power3.out",
          });
        }

        lastScroll = currentScroll;
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  // MOBILE MENU
  const clickCheck = () => {
    if (!isNavOpen) {
      const tl = gsap.timeline();

      tl.to(".MOBILENAV", {
        right: "0%",
        duration: 0.35,
        ease: "power3.out",
      });

      tl.to(
        ".smNavItem",
        {
          opacity: 1,
          y: 0,
          stagger: 0.06,
          duration: 0.3,
          ease: "power3.out",
        },
        "-=0.2",
      );

      SetIsNavOpen(true);
    } else {
      const tl = gsap.timeline();

      tl.to(".smNavItem", {
        opacity: 0,
        y: 20,
        stagger: 0.04,
        duration: 0.15,
      });

      tl.to(
        ".MOBILENAV",
        {
          right: "-100%",
          duration: 0.3,
          ease: "power3.out",
        },
        "-=0.05",
      );

      SetIsNavOpen(false);
    }
  };

  const closeMenu = () => {
    if (isNavOpen) clickCheck();
  };

  const navLinks = [
    { name: "The Wedding", path: "/" },
    { name: "Itinerary", path: "/itinerary" },
    { name: "Wardrobe Planner", path: "/wardrobe" },
    { name: "Explore Florence", path: "/explore" },
    { name: "Travel", path: "/travel-acmo" },
    { name: "Salon Services", path: "/salon-services" },
    { name: "Travel Tips", path: "/travel-tips" },
    { name: "FAQs", path: "/faq" },
    // { name: "Gift Registry", path: "https://www.weddingshop.com/giftlist/mishaanddylan" },
    
  ];

  return (
    <>
      {/* MAIN NAVBAR */}
      <div
        ref={navRef}
        className="w-full h-[80px] fixed top-0 left-0 z-[999] px-5 lg:px-8 flex items-center justify-between"
      >
        {/* LOGO */}
        <Link href={`/`} className="w-fit h-[40px] z-[1000]">
          <img
            src={`/icon/LOGO.svg`}
            alt="Logo"
            className="h-full object-contain"
          />
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-[2vw]">
          {navLinks.map((item, index) => (
            <Link key={index} href={item.path}>
              <div
                className={`relative text-[16px] Font_YV text-[#016342] uppercase cursor-pointer group ${
                  pathname === item.path ? "border-b border-[#016342]" : ""
                }`}
              >
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#016342] group-hover:w-full duration-300"></div>

                {item.name}
              </div>
            </Link>
          ))}

           <Link target="blank" href={'https://www.weddingshop.com/giftlist/mishaanddylan'}>
              <div
                className={`relative text-[16px] Font_YV text-[#016342] uppercase cursor-pointer group `}
              >
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#016342] group-hover:w-full duration-300"></div>

                Gift Registry
              </div>
            </Link>

          {/* RSVP BUTTON */}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/+919910158374"
          >
            <div className="h-[46px] px-5 text-[16px] text-white Font_YV bg-[#016342] flex items-center justify-center cursor-pointer uppercase tracking-wide hover:scale-[0.98] duration-300">
              RSVP HERE
            </div>
          </Link>
        </div>

        {/* MOBILE MENU BTN */}
        <div onClick={clickCheck} className="lg:hidden z-[1001] cursor-pointer">
          {isNavOpen ? (
            <RiMenu3Line className="text-[2rem] text-[#416160]" />
          ) : (
            <RiMenu4Fill className="text-[2rem] text-[#416160]" />
          )}
        </div>
      </div>

      {/* MOBILE NAVIGATION */}
      <div className="MOBILENAV fixed top-0 right-[-100%] w-full sm:w-[80%] h-screen bg-[#f8f5f1] z-[998] flex flex-col px-8 pt-[120px] pb-10">
        {/* LINKS */}
        <div className="flex flex-col gap-6">
          {navLinks.map((item, index) => (
            <Link key={index} href={item.path} onClick={closeMenu}>
              <div
                className={`smNavItem opacity-0 translate-y-[20px] text-[1.3rem] uppercase tracking-wide ${
                  pathname === item.path ? "text-[#952607]" : "text-[#016342]"
                }`}
              >
                {item.name}
              </div>
            </Link>
          ))}
        </div>

          <Link target="blank" href={'https://www.weddingshop.com/giftlist/mishaanddylan'}>
              <div
                className={`relative text-[22px] mt-5  w-fit text-[#016342] uppercase cursor-pointer group `}
              >
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#016342] group-hover:w-full duration-300"></div>

                Gift Registry
              </div>
            </Link>

        {/* RSVP BTN */}
        <Link
         target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/+919910158374"
          onClick={closeMenu}
          className="mt-10"
        >
          <div className="smNavItem opacity-0 translate-y-[20px] w-full h-[52px] bg-[#016342] text-white flex justify-center items-center uppercase tracking-wide">
            RSVP HERE
          </div>
        </Link>
      </div>
    </>
  );
};

export default NavBar;
