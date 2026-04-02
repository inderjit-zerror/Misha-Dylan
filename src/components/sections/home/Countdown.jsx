// 'use client'
// import { useEffect, useState } from 'react'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import { useGSAP } from '@gsap/react'

// gsap.registerPlugin(ScrollTrigger)

// const Countdown = () => {

//      useGSAP(() => {
//         gsap.from('.CDD1', {
//             yPercent: 20,
//             opacity: 0,
//             ease: 'none',
//             scrollTrigger: {
//                 trigger: '.CDD1',
//                 start: 'top 50%',
//                 end: 'top 35%',
//                 scrub: true,
//                 // markers:true
//             }
//         })
//     }, [])



//     // 👉 SET YOUR FINAL DATE HERE
//     const targetDate = new Date('2026-03-25T00:00:00')

//     const calculateTimeLeft = () => {
//         const now = new Date()
//         const difference = targetDate - now

//         if (difference <= 0) {
//             return {
//                 days: '00',
//                 hours: '00',
//                 minutes: '00',
//                 seconds: '00',
//             }
//         }

//         return {
//             days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
//             hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
//             minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, '0'),
//             seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
//         }
//     }

//     const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

//     useEffect(() => {
//         const timer = setInterval(() => {
//             setTimeLeft(calculateTimeLeft())
//         }, 1000)

//         return () => clearInterval(timer)
//     }, [])

//     return (
//         <section className="pb-30 pt-10 w-full h-fit select-none bg-white flex flex-col justify-center items-center text-center">
//             <h3 className=" Font_Q tracking-widest uppercase COLOR_TEXT_RED mb-20 CDD1">
//                 Until the wedding
//             </h3>

//             <div className="w-full h-fit flex justify-center gap-10 COLOR_TEXT_RED CDD1">
//                 {[
//                     { label: 'Days', value: timeLeft.days },
//                     { label: 'Hours', value: timeLeft.hours },
//                     { label: 'Minutes', value: timeLeft.minutes },
//                     { label: 'Seconds', value: timeLeft.seconds },
//                 ].map((item, index) => (
//                     <div key={index} className="text-center items-center justify-center flex ">

//                         <div>

//                             <div className="text-[6vw] leading-[6vw] Font_Q tracking-wide">
//                                 {item.value}
//                             </div>
//                             <div className="mt-2 text-[1rem] Font_YV font-semibold tracking-widest uppercase">
//                                 {item.label}
//                             </div>
//                         </div>

//                         {/* Colon Separator */}
//                         {index !== 3 && (
//                             <div className=" flex justify-center items-center text-[5vw] font-serif ml-8">
//                                 :
//                             </div>
//                         )}
//                     </div>
//                 ))}
//             </div>
//         </section>
//     )
// }

// export default Countdown






'use client'

import { useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const Countdown = () => {


    const targetDate = new Date('2026-09-17T00:00:00')

    const calculateTimeLeft = () => {
        const now = new Date()
        const difference = targetDate - now

        if (difference <= 0) {
            return { days: '00', hours: '00', minutes: '00', seconds: '00' }
        }

        return {
            days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
            hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
            minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, '0'),
            seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
        }
    }

    // 👇 IMPORTANT: stable initial state
    const [timeLeft, setTimeLeft] = useState({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
    })

    useEffect(() => {
        // run only on client
        setTimeLeft(calculateTimeLeft())

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    return (
        <section className="pb-[30vh] max-sm:pb-25 pt-42 max-sm:pt-20 w-full h-[40vh] select-none COLOR_BG_CREAM flex flex-col justify-center items-center text-center">
            <h2 className="Font_Q tracking-widest uppercase COLOR_TEXT_RED mb-20 max-sm:mb-10 CDD1">
                Until the wedding
            </h2>

            <div className="w-full h-fit flex justify-center gap-10 max-sm:gap-1 COLOR_TEXT_RED CDD1">
                {[
                    { label: 'Days', value: timeLeft.days },
                    { label: 'Hours', value: timeLeft.hours },
                    { label: 'Minutes', value: timeLeft.minutes },
                    { label: 'Seconds', value: timeLeft.seconds },
                ].map((item, index) => (
                    <div key={index} className="flex items-center">
                        <div className="text-center">
                            <div className="text-[6vw] leading-[6vw] max-sm:text-[2.5rem] max-sm:leading-[2.5rem] Font_Q font-light tracking-wide">
                                {item.value}
                            </div>
                            <div className="mt-2 text-[1rem] max-sm:text-[0.7rem] max-sm:leading-[0.7rem] Font_YV font-semibold tracking-widest uppercase">
                                {item.label}
                            </div>
                        </div>

                        {index !== 3 && (
                            <div className="text-[5vw] max-sm:text-[2rem] font-serif ml-8 max-sm:mx-3">:</div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Countdown
