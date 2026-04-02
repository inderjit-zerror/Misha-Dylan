import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="w-full COLOR_BG_CREAM  border-t border-[#5513013b] max-md:px-5  flex flex-col max-md:justify-center max-sm:items-center  overflow-hidden">



        <div className="flex max-md:flex-col max-md:justify-center max-sm:items-center py-8 px-10">


          <div className="w-fit h-fit flex justify-center items-center   md:my-auto">
            <Link href={`/`} ><img src={`/svgs/CustomLogo.svg`} alt="Logo" className='h-[50px] object-cover object-center' /></Link>
          </div>

          <div className="w-[1px] h-[50px] COLOR_BG_RED mx-10 COLOR_TEXT_RED md:my-auto max-md:w-[50px] max-md:h-[1px] max-md:hidden ">
          </div>

          <div className="w-1/2 flex flex-col COLOR_TEXT_RED max-sm:w-full max-md:mt-5  max-md:text-center   justify-center">
            <span className=" Font_YV">⁠For any wedding-related questions, please reach out to Sonal & Kush’s wedding planning team at:</span>

            <span className=" Font_YV flex gap-2 max-md:gap-0 max-md:mt-2  max-md:flex-col max-md:text-[14px] max-md:mx-auto max-md:text-center">

              <a href="mailto:sonalskushie@gmail.com"><span className=" relative flex flex-col w-fit  group  cursor-pointer select-none max-md:mx-auto font-semibold">  sonalskushie@gmail.com
                <div className="h-[1px] w-[0px] COLOR_BG_RED transition-all duration-150 ease-in-out group-hover:w-full select-none  ">
                </div>
              </span></a>


              <span className="max-md:hidden">|</span>

              <a href="tel:+919358800614"><span className=" relative flex flex-col w-fit  group  cursor-pointer select-none max-md:mx-auto font-semibold">  +91 93588 00614
                <div className="h-[1px] w-[0px] COLOR_BG_RED transition-all duration-150 ease-in-out group-hover:w-full select-none  ">
                </div>
              </span></a>

              <span className="max-md:hidden">|</span>

              <a href="tel:+919310069102"><span className=" relative flex flex-col w-fit  group  cursor-pointer select-none max-md:mx-auto font-semibold">  +91 93100 69102
                <div className="h-[1px] w-[0px] COLOR_BG_RED transition-all duration-150 ease-in-out group-hover:w-full select-none  ">
                </div>
              </span></a>
            </span>

          </div>



          <div className="w-fit ml-auto  flex  flex-col COLOR_TEXT_RED max-md:text-[14px] max-md:mx-auto max-md:text-center max-md:mt-5 my-auto ">

            <span className=" Font_YV flex md:justify-end max-md:mx-auto font-semibold ">Payments are securely processed by EDD United Pvt. Ltd.</span>

            {/* <span className=" Font_YV flex gap-2 md:ml-auto max-md:mx-auto">
              <a href="https://www.bombaylettering.com/" target="blank"><span className=" relative flex flex-col w-fit  group  cursor-pointer select-none font-semibold ">  The Bombay Lettering Company
                <div className="h-[1px] w-[0px] COLOR_BG_RED transition-all duration-150 ease-in-out group-hover:w-full select-none  ">
                </div>
              </span></a>

              &
              <a href="https://www.zerrorstudios.com/" target="blank"><span className=" relative flex flex-col w-fit  group  cursor-pointer select-none font-semibold">  Zerror Studios
                <div className="h-[1px] w-[0px] COLOR_BG_RED transition-all duration-150 ease-in-out group-hover:w-full select-none  ">
                </div>
              </span></a>
            </span> */}

          </div>

        </div>

        
        {/* <span className=" Font_YV flex ml-auto COLOR_BG_CREAM  border-t border-[#5513013b] w-full justify-end px-10 py-2 COLOR_TEXT_RED font-semibold">Payments are securely processed by EDD United Pvt. Ltd.</span> */}


      </footer>


    </>
  );
};

export default Footer;
