'use client'
import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import AccordGallery from './AccordGallery '

gsap.registerPlugin(ScrollTrigger)

const Destiny = () => {

    useEffect(() => {
        const TLD = gsap.timeline({
            scrollTrigger: {
                trigger: '.Destiny_cont',
                start: 'top top',
                end: 'top -20%',
                scrub: true,
                // markers: true
            }
        })
      
        gsap.to('.SecondInnerContDestiny', {
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: '.SecondInnerContDestiny',
                start: 'top 70%',
                end: 'top 40%',
                scrub: true,
                // markers: true
            }
        })

    }, [])

    useGSAP(() => {

      
        gsap.from('.T2T2T', {
            yPercent: 20,
            opacity: 0,
            stagger: {
                each: 1,
                ease: 'none'
            },
            ease: 'none',
            scrollTrigger: {
                trigger: '.innderDestinyCont',
                start: 'top 80%',
                end: 'top 50%',
                scrub: true,
                // markers: true
            }
        })
        gsap.from('.TT2T', {
            yPercent: 20,
            opacity: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: '.TT2T',
                start: 'top 90%',
                end: 'top 60%',
                scrub: true,
                // markers: true
            }
        })
        gsap.from('.TT3T', {
            yPercent: 5,
            opacity: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: '.TT3T',
                start: 'top 90%',
                end: 'top 60%',
                scrub: true,
                // markers: true
            }
        })

    }, [])

    return (
        <div className='w-full h-fit Destiny_cont relative p-10 max-sm:px-[10px] '>

            {/* Bg */}
            <img src={`/newimg/SonalKush1Img.webp`} className='w-full h-full object-cover object-center fixed top-0 left-0  z-[-1]' alt="BG-IMG" />

            <div className='w-full h-fit COLOR_BG_CREAM flex flex-col px-[5vw] innderDestinyCont opacity-100 mt-[0vh] max-sm:pt-[3vh] max-sm:pt-0 '>
                <div className='w-full h-full px-[10vw] max-sm:px-3 pt-[10vw] max-sm:pb-[10vw] flex flex-col gap-[0.2rem]  '>
                    <div className='w-full h-fit flex justify-center T2T2T items-center'> <span className='Font_YV uppercase text-[1rem] COLOR_TEXT_RED font-semibold '>Misha and Dylan Story:</span></div>
                    {/* <img src={`/svgs/Title1Destiny.svg`} className='w-full T2T2T object-cover' alt="SVG" /> */}

                    <div className='w-full h-fit flex justify-center gap-[2vw] items-center COLOR_TEXT_RED'>
                        <h1 className='Font_Q uppercase text-[8vw] leading-[8vw] max-sm:text-[10vw]'>United</h1>
                        <h1 className='Font_YIV  text-[8vw] leading-[8vw]'>by</h1>
                        <h1 className='Font_Q uppercase text-[8vw] leading-[8vw] max-sm:text-[10vw]'>Destiny</h1>
                    </div>
                </div>

                <div className='w-full h-fit flex mt-[5vw] TT2T COLOR_TEXT_RED gap-[2rem] max-sm:gap-[20px] max-sm:flex-col'>
                    <div className='w-1/2  max-sm:w-full   text-justify max-sm:text-justify max-sm:pr-0'>
                        <p className='Font_YV'> It all began at a graduation party, where Misha was busy charming the room when Dylan walked in, caught one glimpse of her, and instantly knew he had to meet her. What followed was an unforgettable night filled with poker, laughter, and undeniable chemistry. They played their cards right (literally), won a little money, and unknowingly placed the biggest bet of all - on each other.
                            <br></br>
                            <br></br>
                            For a year, they stayed in touch, their connection never fading. Then fate stepped in. Misha moved to New York City, and when Dylan reached out, he discovered she was living just a ten minute walk from his apartment. Some call it destiny, some call it great real estate planning, but either way, their first date was pure magic. 
                        </p>
                    </div>
                    <div className='w-1/2  max-sm:w-full max-sm:text-justify '>
                        <p className='Font_YV'> With no furniture in Misha’s apartment yet, they sat on the floor, shared a bottle of wine, and talked for hours. It was simple, it was effortless, and it felt like home. Three amazing years later, Dylan planned the ultimate surprise - a trip to Jamaica. Surrounded by turquoise waters and golden sunsets, he got down on one knee and asked Misha to spend forever with him. 
                             <br></br>
                            <br></br>
                            And now, here we are, ready to celebrate our greatest adventure yet - our wedding. We can’t wait to share this special moment with all of you!
                        </p>
                    </div>
                </div>



                <div className='w-full h-fit flex max-sm:flex-col mt-[5vw] mb-[4vh] max-sm:mb-[8vh] gap-[5vw] relative  will-change-transform '>

                    
                    <div className='w-full relative z-20 DCD2 mb-[10vh] max-sm:mb-0 '>
                        <div className='w-full h-auto'>
                            {/* aspect-[2/2] */}
                            <img src={`/newimg/SonalKush4Img.webp`} className='w-full  max-sm:aspect-auto object-center object-cover  z-20 ' alt="IMG" />
                        </div>
                    </div>


                 
                </div>
              
            </div>



        </div>
    )
}

export default Destiny
