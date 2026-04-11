'use client'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { RiMenu4Fill } from "react-icons/ri";
import { RiMenu3Line } from "react-icons/ri";
import { usePathname } from 'next/navigation'
import { navigate } from 'next/dist/client/components/segment-cache/navigation'

gsap.registerPlugin(ScrollTrigger)

const NavBar = () => {
  const navRef = useRef(null)

  useEffect(() => {
    if (!navRef.current) return

    let lastScroll = 0

    const trigger = ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: (self) => {
        const currentScroll = self.scroll()

        if (currentScroll > lastScroll && currentScroll > 100) {
          // Scroll DOWN → hide navbar
          gsap.to(navRef.current, {
            y: '-300%',
            duration: 0.4,
            ease: 'power3.out',
          })
        } else {
          // Scroll UP → show navbar
          gsap.to(navRef.current, {
            y: '0%',
            duration: 0.4,
            ease: 'power3.out',
          })
        }

        lastScroll = currentScroll
      },
    })

    return () => {
      trigger.kill()
    }
  }, [])

  const [isNavOpen, SetIsNavOpen] = useState(false)

  const clickCheck = () => {
    if (isNavOpen == false) {

      const NT = gsap.timeline()
      NT.to('.MOBILENAV', {
        left: '0%',
        duration: 0.2,
        ease: 'none',
        // onComplete: () => SetIsNavOpen(true)
      }, 'a11')
      NT.to('.smNavItem', {
        opacity: 1,
        stagger: {
          each: 0.09,
          ease: 'none'
        },
        duration: 0.2,
        ease: 'none',
        // onComplete: () => SetIsNavOpen(true)
      }, 'a11')
      SetIsNavOpen(true)
    }
    else {

      const NTB = gsap.timeline()
      NTB.to('.MOBILENAV', {
        left: '100%',
        duration: 0.2,
        ease: 'none',
        // onComplete: () => SetIsNavOpen(false)
      }, 'a1a')
      NTB.to('.smNavItem', {
        opacity: 0,
        stagger: {
          each: 0.09,
          ease: 'none'
        },
        duration: 0.2,
        ease: 'none',
        // onComplete: () => 
      }, 'a1a')
      SetIsNavOpen(false)
    }
  }

  const pathname = usePathname()
  console.log(pathname)

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <div ref={navRef} className='w-full h-[46px] mt-10 flex justify-between fixed top-0 pt-15 left-0 gap-10 items-center z-100 px-20'>
      {/* Left */}
      <div className='w-3/5 h-full RVSPBTN items-center max-lg:hidden flex justify-between uppercase text-[12px] COLOR_TEXT_RED '>
        <Link href={`/`} ><div className={`w-fit ${pathname === '/' && (' border-b border-[#551301]')} h-fit flex flex-col group relative COLOR_TEXT_RED  select-none cursor-pointer`}> <div className=' absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full duration-200 ease-out COLOR_BG_RED'></div> The wedding</div></Link>
        <Link href={`/itinerary`} ><div className={`w-fit h-fit ${pathname === '/itinerary' && (' border-b border-[#551301]')}  flex flex-col group relative COLOR_TEXT_RED  select-none cursor-pointer`}> <div className=' absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full duration-200 ease-out COLOR_BG_RED'></div>Itinerary </div></Link>
        <Link href={``} ><div className={`w-fit h-fit ${pathname === '/wedding' && (' border-b border-[#551301]')}  flex flex-col group COLOR_TEXT_RED relative  select-none cursor-pointer`}> <div className=' absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full duration-200 ease-out COLOR_BG_RED'></div> Wardrobe Planner</div></Link>
        <Link href={``} ><div className={`w-fit h-fit ${pathname === '/venue' && (' border-b border-[#551301]')}  flex flex-col group relative COLOR_TEXT_RED  select-none cursor-pointer`}> <div className=' absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full duration-200 ease-out COLOR_BG_RED'></div>Explore Florence </div></Link>
      </div>

      {/* Logo */}
      <div className='w-fit h-[50px] RVSPBTN absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
        <Link href={`/`} ><img src={`/svgs/CustomLogo.svg`} alt="Logo" className='h-full object-cover object-center' /></Link>
      </div>

      {/* Right */}
      <div className='w-3/5  h-full RVSPBTN items-center max-lg:hidden flex justify-between uppercase text-[12px]   COLOR_TEXT_RED'>
        <Link href={`/travel-acmo`} ><div className={`w-fit h-fit ${pathname === '/travel-acmo' && (' border-b border-[#551301]')}  flex flex-col group relative COLOR_TEXT_RED  select-none cursor-pointer`}> <div className=' absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full duration-200 ease-out COLOR_BG_RED'></div>Travel </div></Link>

        <Link href={`/salon-services`} ><div className={`w-fit h-fit ${pathname === '/salon-services' && (' border-b border-[#551301]')}  flex flex-col group relative COLOR_TEXT_RED  select-none cursor-pointer`}> <div className=' absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full duration-200 ease-out COLOR_BG_RED'></div>Salon Services</div></Link>
        <Link href={``} ><div className={`w-fit h-fit ${pathname === '/venue' && (' border-b border-[#551301]')}  flex flex-col group relative COLOR_TEXT_RED  select-none cursor-pointer`}> <div className=' absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full duration-200 ease-out COLOR_BG_RED'></div>Registry / Charity </div></Link>
        <Link href={``} ><div className={`w-fit h-fit ${pathname === '/venue' && (' border-b border-[#551301]')}  flex flex-col group relative COLOR_TEXT_RED  select-none cursor-pointer`}> <div className=' absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full duration-200 ease-out COLOR_BG_RED'></div>Travel Tips & FAQs  </div></Link>
       
        {/* BTN */}

        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={`https://sonalandkush.rsvpify.com`}>
          <div className='w-fit h-[46px] RVSPBTN max-md:hidden select-none cursor-pointer flex flex-col justify-center items-center px-[17px] py-[6px] text-[12px] text-white COLOR_BG_RED opacity-80 group '>
            <div className='w-fit '>
              RSVP HERE
              <div className='w-[0px] group-hover:w-full transition-all duration-150 ease-in h-[1px] bg-[white]'></div>
            </div>
          </div>
        </Link>


      </div>

      <div onClick={clickCheck} htmlFor="check" className=' absolute top-1 right-8 lg:hidden  '>
        {isNavOpen == false ? (<><RiMenu4Fill className='text-[2rem]  text-[#952607]' /></>) : (<><RiMenu3Line className='text-[2rem] text-[#952607] ' /></>)}
      </div>

      {/* MOBILENAV */}
      <div className='w-full flex flex-col lg:hidden justify-center text-[1.5rem] leading-[1.5rem] uppercase gap-4 items-center MOBILENAV h-screen COLOR_BG_CREAM absolute -top-10 left-[150%] z-[-1]'>
        <Link href={`/`}><div onClick={clickCheck} className='w-fit h-fit flex flex-col smNavItem opacity-0 group relative COLOR_TEXT_RED  select-none cursor-pointer'> <div className=' absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full duration-200 ease-out bg-[white]'></div>wedding</div></Link>
        <Link href={`/wedding`}><div onClick={clickCheck} className='w-fit h-fit flex smNavItem opacity-0 flex-col group COLOR_TEXT_RED relative  select-none cursor-pointer'> <div className=' absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full duration-200 ease-out bg-[white]'></div> Itinerary</div></Link>
        <Link href={`/venue`}><div onClick={clickCheck} className='w-fit h-fit flex smNavItem opacity-0 flex-col group relative COLOR_TEXT_RED  select-none cursor-pointer'> <div className=' absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full duration-200 ease-out bg-[white]'></div> Hotel & Reservations</div></Link>
        {/* <Link href={`/itinerary`}><div onClick={clickCheck} className='w-fit h-fit smNavItem opacity-0 flex flex-col group relative COLOR_TEXT_RED select-none cursor-pointer'> <div className=' absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full duration-200 ease-out bg-[white]'></div> Services</div></Link> */}
        <Link href={`/explore`}><div onClick={clickCheck} className='w-fit h-fit smNavItem opacity-0 flex flex-col group relative  COLOR_TEXT_RED select-none cursor-pointer'> <div className=' absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full duration-200 ease-out bg-[white]'></div>Explore Udaipur</div></Link>
       <Link href={`/faq`} ><div onClick={clickCheck} className={`w-fit h-fit  flex flex-col group relative  COLOR_TEXT_RED select-none cursor-pointer`}> <div className=' absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full duration-200 ease-out '></div>FAQ</div></Link>

        {/* <div className='w-fit h-fit flex flex-col group relative  select-none COLOR_TEXT_REDcursor-pointer'> <div className=' absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full duration-200 ease-out COLOR_TEXT_RED'></div> FAQ</div> */}
        {/* BTN */}
        <Link target="_blank" rel="noopener noreferrer" href={`https://sonalandkush.rsvpify.com`}>
          <div className='w-fit h-[46px] lg:hidden select-none cursor-pointer flex flex-col justify-center items-center px-[17px] py-[6px] text-[16px] mt-20 text-[white] COLOR_BG_RED'>
            RSVP HERE

          </div>
        </Link>
      </div>
    </div>
  )
}

export default NavBar
