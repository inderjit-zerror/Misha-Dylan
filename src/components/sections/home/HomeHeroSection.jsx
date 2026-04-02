'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const HomeHeroSection = () => {

    const containerRefHome = useRef(null)
    const imageRefHome = useRef(null)

    // PRE-PRE-ANIMATION
    useGSAP(() => {
        const hYL = gsap.timeline();
         hYL.set('.RVSPBTN', {
            opacity: 0,
        },'sss')
        hYL.to('.HOMEMAIM', {
            opacity: 1,
            duration: 1,
            stagger: {
                each: '0.2',
                ease: 'none'
            },
            ease: 'none'
        },'sss')
        hYL.to('.RVSPBTN', {
            opacity: 1,
            duration: 1,
            ease: 'none'
        },'ss1')
        hYL.to(imageRefHome.current, {
            opacity:1,
            duration:2,
            ease: 'power1.Out'
        },'ss1')
    }, [])

    useGSAP(() => {
        gsap.to(imageRefHome.current, {
            yPercent: 20, // parallax strength
            ease: 'none',
            scrollTrigger: {
                trigger: containerRefHome.current,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
                // markers:true
            },
        })
    }, [])


    return (
        <div className='w-full h-[100svh] overflow-hidden relative COLOR_BG_RED '>
            <div ref={containerRefHome} className='w-full h-full flex overflow-hidden'>
                <Image
                    ref={imageRefHome}
                    src={`/newimg/SonalKush6Img.webp`}
                    className='w-full h-full scale-[1] opacity-0 object-cover object-center max-sm:object-[35%_50%] '
                    width={1000}
                    height={1000}
                    alt='IMG'
                />

                {/* <video ref={imageRefHome} muted autoPlay loop src={`/file.mp4`} className='w-full h-screen scale-[1.4] opacity-0 object-cover object-center'></video> */}
            </div>
            
            <div className='w-full h-full absolute top-0 left-0 z-20 flex max-sm:pb-8 justify-center items-end HOMEMAIM px-[20px]'>
                <h1 className=' uppercase  text-[9vw] max-sm:text-[14vw] max-sm:leading-[14vw] max-sm:text-center Font_Q opacity-0 COLOR_TEXT_CREAM HOMEMAIM'>Misha & Dylan</h1>
            </div>
        </div>
    )
}

export default HomeHeroSection
