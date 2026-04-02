'use client'
import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const Hearts = () => {

    useEffect(() => {
        const TLH = gsap.timeline({
            scrollTrigger: {
                trigger: '.heart_cont',
                start: 'top top',
                end: 'bottom bottom',
                scrub: true,
                // markers: true
            }
        })
        TLH.to('.innderHerartCont', {
            gap: 100,
        }, 'b1')
        TLH.to('.innderHerartCont2', {
            gap: 800,
        }, 'b1')

        TLH.to('.tlr', {
            opacity: 0,
            // scale:1,
            ease: 'none'
        }, 'b1')
        TLH.to('.TOPUPTEXT', {
            opacity: 1,
            ease: 'none'
        })
        // TLH.to('.TOPUPTEXT', {
        //     opacity: 0,
        //     ease: 'none'
        // },'obs')
        TLH.to('.cclt', {
            opacity: 0,
            ease: 'none'
        },'obs')

    }, [])

    // SM
    useEffect(() => {
        const TLH = gsap.timeline({
            scrollTrigger: {
                trigger: '.heart_cont',
                start: 'top top',
                end: 'bottom bottom',
                scrub: true,
                // markers: true
            }
        })
        TLH.to('.innderHerartCont2SM', {
            gap: 200,
        }, 'b1')
        TLH.to('.TOPUPTEXTSM', {
            opacity: 1,
            scale: 1,
            ease: 'none'
        }, 'b1')
    }, [])


    return (
        <div className='w-full h-[250vh] relative heart_cont cclt'>
            <div className='w-full h-screen overflow-hidden sticky flex flex-col max-sm:hidden justify-center top-0 left-0 COLOR_BG_RED COLOR_TEXT_CREAM uppercase'>
                {/* 1 */}
                <div className=' w-full innderHerartCont tlr  h-fit text-[5vw] leading-[5vw] Font_Q flex  gap-[2vw]  justify-center'>
                    <h1 className=''>Where love</h1>
                    <h1>meets la</h1>
                    <h1>dolce vita</h1>
                </div>
                {/* 1 */}
                <div className=' w-full innderHerartCont2 tlr   whitespace-nowrap flex-nowrap h-fit text-[5vw] leading-[5vw] Font_Q flex gap-[1vw] justify-center'>
                    <h1>Pour Love like you’</h1>
                    <h1>  re pouring Wine </h1>
                </div>
                {/* 1 */}
                <div className=' w-full innderHerartCont tlr  h-fit text-[5vw] leading-[5vw] Font_Q flex gap-[5vw] justify-center'>
                    <h1>Love under </h1>
                    <h1>the Tuscan Sun </h1>
                    
                </div>



                <div className=' TOPUPTEXT absolute w-full h-screen overflow-hidden opacity-0  top-0 left-0 flex flex-col justify-center items-center'>
                    <img src={`/newimg/SonalKush1Img.webp`} className='w-full h-full object-center object-cover' alt="img" />
                </div>
            </div>



            {/* SM */}
            <div className='w-full h-screen overflow-hidden sticky flex flex-col px-[20px] text-[3rem] leading-[3rem] sm:hidden justify-center top-0 left-0 COLOR_BG_RED COLOR_TEXT_CREAM uppercase'>
                {/* 1 */}
                <div className=' w-full  overflow-hidden h-fit  Font_Q flex flex-col '>
                    <h1>Two</h1>
                    <h1>hearts</h1>
                    <h1> met</h1>
                </div>
                {/* 1 */}
                <div className=' w-full i overflow-hidden innderHerartCont2SM gap-1  whitespace-nowrap flex-nowrap h-fit  Font_Q flex flex-col  justify-between'>
                    <h1>love grew</h1>
                    <h1> quietly,</h1>
                </div>
                {/* 1 */}
                <div className=' w-full  overflow-hidden h-fit  Font_Q flex flex-col  justify-center'>
                    <h1>and </h1>
                    <h1>forever </h1>
                    <h1> began.</h1>
                </div>

                <div className=' TOPUPTEXTSM absolute w-full h-screen overflow-hidden opacity-0  top-0 left-0 flex flex-col justify-center items-center'>
                    <img src={`/newimg/SonalKush1Img.webp`} className='w-full h-full object-center object-cover' alt="img" />
                </div>
            </div>
        </div>
    )
}

export default Hearts
