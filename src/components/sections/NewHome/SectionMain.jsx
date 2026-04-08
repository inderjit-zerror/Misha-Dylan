
import React from 'react'

const SectionMain = () => {
  return (
    <div className='w-full min-h-screen COLOR_BG_CREAM relative'>
        <div className='w-full h-fit flex justify-center items-center pt-[4vh]'>
            <h1 className='Font_Q text-[17vw] COLOR_TEXT_RED'>MISHA & DYLAN</h1>
        </div>


        <div className='w-[18%] aspect-5/7 overflow-hidden absolute top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2'>
        <img src={`/imgs/newHomeImg/NHHIMG.jpg`} className='w-full h-full object-cover object-center' alt="IMG" />
        </div>

        <div className='w-full h-fit flex justify-end items-center mt-[40vh]'>
            <h1 className='Font_Q text-[17vw] leading-[17vw] text-[#C53D2E]/5'>Wedding</h1>
        </div>

        <div className=' absolute left-0 bottom-[10%] w-[25%]  px-[20px] flex flex-col gap-10'>
            <div className='w-[50%] aspect-square overflow-hidden'>
                <img src={`/imgs/newHomeImg/NHHIMG2.jpg`} className='w-full h-full object-cover object-center' alt="IMG" />
            </div>

            <span className='text-justify Font_YV text-[1.1rem] COLOR_TEXT_RED leading-[1.2rem]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero enim delectus magni aliquid eos, qui suscipit eum, est dolorum repellat ratione sapiente commodi dolores facilis officiis asperiores? Harum, tempore dolores!</span>
        </div>
      
    </div>
  )
}

export default SectionMain
