'use client'
import React, { useEffect } from "react";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'


gsap.registerPlugin(ScrollTrigger)

const ItinerarySection = () => {
 
    useGSAP(() => {
        const TLIT = gsap.timeline({
            scrollTrigger: {
                trigger: '.iTCONT',
                start: 'top top',
                end: 'bottom bottom',
                // markers:true,
                scrub: true,
            }
        })
        TLIT.to('.SCDCONT', {
            top: '-50%',
            ease: 'power2.out'
        })
        TLIT.to('.cardDiv1', {
            top: '15%',
            ease: 'none'
        }, 'ap1')
        TLIT.to('.CONIMGCONT1', {
            width: '50%',
            ease: 'none'
        }, 'ap1')
        TLIT.to('.cardDiv2', {
            top: '30%',
            ease: 'none'
        }, 'ap2')
        TLIT.to('.CONIMGCONT2', {
            width: '50%',
            ease: 'none'
        }, 'ap2')
        TLIT.to('.cardDiv3', {
            top: '45%',
            ease: 'none'
        }, 'ap3')
        TLIT.to('.CONIMGCONT3', {
            width: '50%',
            ease: 'none'
        }, 'ap3')
        TLIT.to('.CONIMGCONT4', {
            width: '50%',
            ease: 'none'
        })
    }, [])

    // PRE-PRE-ANIMATION
    useGSAP(() => {
        gsap.from('.ITINERARYMAIM', {
            y: 100,
            duration: 0.3,
            ease: 'none'
        })
    }, [])


    return (
        <>


            <div className='w-full h-[300vh] flex flex-col relative iTCONT mb-[10vh] COLOR_BG_CREAM'>
                <div className='w-full h-fit COLOR_BG_CREAM sticky SCDCONT top-0 left-0 flex flex-col ITINERARYMAIM'>
                    {/* Top */}
                    <div className='w-full h-[50vh] flex flex-col px-8 max-sm:pt-20 max-sm:justify-center justify-end items-center pb-[2.5vh] '>
                        <span className='mb-[2vh] Font_YV COLOR_TEXT_RED font-bold'>Make-Up Services</span>
                        <h1 className='Font_Q text-[8vw] max-sm:text-center max-sm:text-[10vw] max-sm:leading-[10vw] leading-[8vw] uppercase mb-[3vh] COLOR_TEXT_RED'>Wellness Services</h1>
                        <p className='Font_YV COLOR_TEXT_RED max-w-[500px] text-justify'>For guests who would like professional make-up and hairstyling during the wedding celebrations, make-up services will be available at the venue</p>
                    </div>
                    {/* Bottom */}
                    <div className='w-full h-[100vh]  relative px-8 py-8 max-sm:p-0'>
                        {/* 1-DIV */}
                        <div className="w-full h-[90vh] grid grid-cols-1 md:grid-cols-2 justify-between items-center COLOR_BG_RED gap-12  py-10 px-10">

                            {/* Left Content */}
                            <div className="COLOR_TEXT_CREAM h-full flex flex-col justify-start ">
                                <div className=" font-serif Font_Q max-sm:text-[2rem] mx-sm:leading-[2rem] text-[2.5rem] uppercase tracking-widest mb-8">
                                    The Spa Experience
                                </div>

                                <ul className="space-y-4 max-sm:space-y-2 text-lg font-light Font_YV">
                                    <li>• Swedish Massage – ₹5,000</li>
                                    <li>• Deep Tissue Massage – ₹6,500</li>
                                    <li>• Couple Spa – ₹12,000</li>
                                </ul>
                            </div>

                            {/* Right Image */}
                            <div className=" w-full h-full CONIMGCONT1 ml-auto overflow-hidden  ">
                                <img
                                    src={`/imgs/itinerary/Iimg1.webp`}
                                    alt="Spa Experience"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>

                        </div>

                        {/* 2-DIV */}
                        <div className='px-8 py-8 max-sm:p-0 w-full h-[88vh] cardDiv1 absolute top-[100%] left-0'>
                            <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 items-center COLOR_BG_CREAM gap-12  py-10 px-10">

                                {/* Left Content */}
                                <div className="text-[#202020] h-full flex flex-col justify-start">
                                    <div className=" font-serif Font_Q max-sm:text-[2rem] mx-sm:leading-[2rem] text-[2.5rem] uppercase tracking-widest mb-8">
                                        The Spa Experience
                                    </div>

                                    <ul className="space-y-4 max-sm:space-y-2 text-lg font-light Font_YV">
                                        <li>• Swedish Massage – ₹5,000</li>
                                        <li>• Deep Tissue Massage – ₹6,500</li>
                                        <li>• Couple Spa – ₹12,000</li>
                                    </ul>
                                </div>

                                {/* Right Image */}
                                <div className="w-full h-full ml-auto CONIMGCONT2  overflow-hidden ">
                                    <img
                                        src={`/imgs/itinerary/Iimg2.webp`}
                                        alt="Spa Experience"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>

                            </div>
                        </div>

                        {/* 3-DIV */}
                        <div className='px-8 py-8 max-sm:p-0 w-full h-[78vh] cardDiv2 absolute top-[100%] left-0'>
                            <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 items-center COLOR_BG_RED gap-12  py-10 px-10">

                                {/* Left Content */}
                                <div className="COLOR_TEXT_CREAM h-full flex flex-col justify-start">
                                    <div className=" font-serif max-sm:text-[2rem] mx-sm:leading-[2rem] Font_Q text-[2.5rem] uppercase tracking-widest mb-8">
                                        The Spa Experience
                                    </div>

                                    <ul className="space-y-4 max-sm:space-y-2 text-lg font-light Font_YV">
                                        <li>• Swedish Massage – ₹5,000</li>
                                        <li>• Deep Tissue Massage – ₹6,500</li>
                                        <li>• Couple Spa – ₹12,000</li>
                                    </ul>
                                </div>

                                {/* Right Image */}
                                <div className="w-full h-full ml-auto CONIMGCONT3 overflow-hidden ">
                                    <img
                                        src={`/imgs/itinerary/Iimg3.webp`}
                                        alt="Spa Experience"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>

                            </div>
                        </div>

                        {/* 4-DIV */}
                        <div className='px-8 py-8 max-sm:p-0 w-full h-[68vh] cardDiv3 absolute top-[100%] left-0'>
                            <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 items-center COLOR_BG_CREAM gap-12  py-10 px-10">

                                {/* Left Content */}
                                <div className="text-[#202020] h-full flex flex-col justify-start">
                                    <div className=" font-serif max-sm:text-[2rem] mx-sm:leading-[2rem] Font_Q text-[2.5rem] uppercase tracking-widest mb-8">
                                        The Spa Experience
                                    </div>

                                    <ul className="space-y-4 max-sm:space-y-2 text-lg font-light Font_YV">
                                        <li>• Swedish Massage – ₹5,000</li>
                                        <li>• Deep Tissue Massage – ₹6,500</li>
                                        <li>• Couple Spa – ₹12,000</li>
                                    </ul>
                                </div>

                                {/* Right Image */}
                                <div className="w-full h-full ml-auto CONIMGCONT4  overflow-hidden ">
                                    <img
                                        src={`/imgs/itinerary/Iimg1.webp`}
                                        alt="Spa Experience"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <RSVP/> */}

        </>
    )
}

export default ItinerarySection
