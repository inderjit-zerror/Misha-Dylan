"use client";
import Shop from "@/components/common/Shop";
import { useEffect, useState } from "react";

const places = [
  {
    id: 1,
    title: "JEMAA EL-FNAA",
    image: "/imgs/venue/horizontal_section/img1.webp",
  },
  {
    id: 2,
    title: "BAHIA PALACE",
    image: "/imgs/venue/horizontal_section/img2.webp",
  },
  {
    id: 3,
    title: "KOUTOUBIA MOSQUE",
    image: "/imgs/venue/horizontal_section/img3.webp",
  },
  {
    id: 4,
    title: "MAJORELLE GARDEN",
    image: "/imgs/venue/horizontal_section/img4.webp",
  },
  {
    id: 5,
    title: "SAADIAN TOMBS",
    image: "/imgs/venue/horizontal_section/img5.webp",
  },
  {
    id: 6,
    title: "MEDINA SOUKS",
    image: "/imgs/venue/horizontal_section/img6.webp",
  },
  {
    id: 7,
    title: "PALMERAIE",
    image: "/imgs/venue/horizontal_section/img1.webp",
  },
  {
    id: 8,
    title: "MENARA GARDENS",
    image: "/imgs/venue/horizontal_section/img2.webp",
  },
];

const SMExplor = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeId, setActiveId] = useState(null);

  const handleClick = (id) => {
    setActiveId(activeId === id ? null : id);
  };


  return (
    <div className="w-full h-fit flex flex-col">

      <div className="w-full h-fit p-5 flex flex-col gap-5">
        {/* 1 ---------------------------------------------------------------------------------- */}
        

        {/* text */}
        <div className="w-fit max-w-[665px] contA6 h-fit flex flex-col gap-6 mt-30 justify-center m-auto items-center">
          {/* <p className=" uppercase Font_YV COLOR_TEXT_RED contA6">
            Explore udaipur
          </p> */}
          <h4 className=" text-[10vw] leading-[10vw] Font_Q contA6 COLOR_TEXT_RED uppercase flex flex-wrap px-20 text-center ">
            City Palace
          </h4>
          <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
            <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
              A magnificent lakeside palace complex showcasing centuries of royal heritage. Private guided tours and sunset visits offer breathtaking views over Lake Pichola.
            </div>
          </div>
        </div>

        {/* img1 */}
        <div className="w-full aspect-2/1 overflow-hidden ">
           <img src={`/imgs/explorNewImg/City_Palace_1.webp`} className="w-full h-full object-cover  object-center" alt="img" />
        </div>

        {/* img2 */}
        <div className="w-full aspect-1/1 overflow-hidden ">
           <img src={`/imgs/explorNewImg/City_Palace_2.webp`} className="w-full h-full object-cover  object-center" alt="img" />
        </div>

        {/* 2 ---------------------------------------------------------------------------------- */}
        

        {/* text */}
        <div className="w-fit max-w-[665px] contA6 h-fit flex flex-col gap-6 justify-center m-auto mt-20 items-center">
           {/* <p className=" uppercase Font_YV COLOR_TEXT_RED contA6">
            Explore udaipur
          </p> */}
          <h4 className=" text-[10vw] leading-[10vw] Font_Q contA6 COLOR_TEXT_RED uppercase flex flex-wrap px-20 text-center ">
            Lake Pichola
          </h4>
          <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
            <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
              Experience Udaipur from the water with a private sunset boat ride. Golden skies, marble palaces, and serene lake views create an unforgettable setting.
                </div>
          </div>
        </div>

        {/* img1 */}
        <div className="w-full aspect-2/1 overflow-hidden ">
           <img src={`/imgs/explorNewImg/Lake_Pichola_1.webp`} className="w-full h-full object-cover  object-center" alt="img" />
        </div>

        {/* img2 */}
        <div className="w-full aspect-1/1 overflow-hidden ">
           <img src={`/imgs/explorNewImg/Lake_Pichola_2.webp`} className="w-full h-full object-cover  object-center" alt="img" />
        </div>

        {/* 3 ---------------------------------------------------------------------------------- */}
       

        {/* text */}
        <div className="w-fit max-w-[665px] contA6 h-fit flex flex-col gap-6 justify-center m-auto mt-20 items-center">
          {/* <p className=" uppercase Font_YV COLOR_TEXT_RED contA6">
            Explore udaipur
          </p> */}
          <h4 className=" text-[10vw] leading-[10vw] Font_Q contA6 COLOR_TEXT_RED uppercase flex flex-wrap px-20 text-center ">
            Taj Lake Palace
          </h4>
          <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
            <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
               An iconic white-marble palace floating gracefully on the lake. Ideal for an elegant dinner, afternoon tea, or champagne at sunset.
                </div>
          </div>
        </div>

         {/* img1 */}
        <div className="w-full aspect-2/1 overflow-hidden ">
           <img src={`/imgs/explorNewImg/Taj_Lake_Palace_1.webp`} className="w-full h-full object-cover  object-center" alt="img" />
        </div>

        {/* img2 */}
        <div className="w-full aspect-1/1 overflow-hidden ">
           <img src={`/imgs/explorNewImg/pales.jpg`} className="w-full h-full object-cover  object-center" alt="img" />
        </div>

        {/* 4 ---------------------------------------------------------------------------------- */}
        

        {/* text */}
        <div className="w-fit max-w-[665px] contA6 h-fit flex flex-col gap-6 justify-center m-auto mt-20 items-center">
          {/* <p className=" uppercase Font_YV COLOR_TEXT_RED contA6">
            Explore udaipur
          </p> */}
          <h4 className=" text-[10vw] leading-[10vw] Font_Q contA6 COLOR_TEXT_RED uppercase flex flex-wrap px-20 text-center ">
           The Oberoi Udaivilas
          </h4>
          <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
            <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
              A benchmark of Indian luxury. Indulge in a world-class spa, lakeside dining, or sunset cocktails in a setting of timeless grandeur.
                </div>
          </div>
        </div>

        {/* img1 */}
        <div className="w-full aspect-2/1 overflow-hidden ">
           <img src={`/imgs/explorNewImg/The_Oberoi_Udaivilas_1.webp`} className="w-full h-full object-cover  object-center" alt="img" />
        </div>

        {/* img2 */}
        <div className="w-full aspect-1/1 overflow-hidden ">
           <img src={`/imgs/explorNewImg/The_Oberoi_Udaivilas_2.webp`} className="w-full h-full object-cover  object-center" alt="img" />
        </div>

        {/* 5 ---------------------------------------------------------------------------------- */}
       

        {/* text */}
        <div className="w-fit max-w-[665px] contA6 h-fit flex flex-col gap-6 m-auto justify-center mt-20 items-center">
          {/* <p className=" uppercase Font_YV COLOR_TEXT_RED contA6">
            Explore udaipur
          </p> */}
          <h4 className=" text-[10vw] leading-[10vw] Font_Q contA6 COLOR_TEXT_RED uppercase flex flex-wrap px-20 text-center ">
            Bagore Ki Haveli
          </h4>
          <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
            <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
               An 18th-century haveli offering a glimpse into Rajasthan’s cultural richness. The evening folk performance is particularly enchanting.
                </div>
          </div>
        </div>

         {/* img1 */}
        <div className="w-full aspect-2/1 overflow-hidden ">
           <img src={`/imgs/explorNewImg/Bagore_Ki_Haveli_1.webp`} className="w-full h-full object-cover  object-center" alt="img" />
        </div>

        {/* img2 */}
        <div className="w-full aspect-1/1 overflow-hidden ">
          <img src={`/imgs/explorNewImg/bkh.jpg`} className="w-full h-full object-cover  object-center" alt="img" />
        </div>

      </div>

      <Shop />

    </div>
  );
};

export default SMExplor;



// {/* 1 */}
//     <div className="w-full h-fit px-[2vw]  px-[20px] flex justify-center items-center mt-[15vh] ">
//       <img
//         src={`/imgs/smExplor/img1SME.svg`}
//         className="w-full object-cover justify-center  object-center"
//         alt="IMG"
//       />
//     </div>

//     {/* 2 */}
//     <div className="w-full h-fit flex flex-col justify-center items-center mt-[4vh] bg-[#395238]">
//       <img
//         className="w-full aspect-2/3 object-cover object-center"
//         src={`/imgs/venue/horizontal_section/img5.webp`}
//         alt="IMG"
//       />
//       <div className="px-[20px] flex  w-full justify-between items-center py-[4vw] text-[#E4BD95]">
//         <h2 className="Font_Q">01</h2>
//         <p className="FontYV">Outdoor Ceremony Area</p>
//       </div>
//     </div>

//     {/* 3 */}
//     <div className="w-full h-fit flex px-[20px] flex-col justify-center items-center pt-[4vh] bg-[#395238]">
//       <img
//         className="w-full aspect-2/2 object-cover object-center"
//         src={`/imgs/venue/horizontal_section/img2.webp`}
//         alt="IMG"
//       />
//       <div className="px-[20px] flex  w-full justify-between items-center py-[4vw] text-[#E4BD95]">
//         <h2 className="Font_Q">02</h2>
//         <p className="FontYV">Outdoor Ceremony Area</p>
//       </div>
//     </div>

//     {/* 3 */}
//     <div className="w-full h-fit flex flex-col justify-center items-center pt-[4vh] bg-[#395238]">
//       <img
//         className="w-full aspect-2/3 object-cover object-center"
//         src={`/imgs/venue/horizontal_section/img3.webp`}
//         alt="IMG"
//       />
//       <div className="px-[20px] flex  w-full justify-between items-center py-[4vw] text-[#E4BD95]">
//         <h2 className="Font_Q">03</h2>
//         <p className="FontYV">Outdoor Ceremony Area</p>
//       </div>
//     </div>

//     {/* 4 */}
//     <div className="w-full h-fit flex px-[20px] flex-col justify-center items-center py-[4vh] bg-[#395238]">
//       <img
//         className="w-full aspect-2/2 object-cover object-center"
//         src={`/imgs/venue/horizontal_section/img6.webp`}
//         alt="IMG"
//       />
//       <div className="px-[20px] flex  w-full justify-between items-center py-[4vw] text-[#E4BD95]">
//         <h2 className="Font_Q">04</h2>
//         <p className="FontYV">Outdoor Ceremony Area</p>
//       </div>
//     </div>

//     {/* 5 */}
//     <div className="w-full h-fit px-[2vw] flex justify-center items-center mt-[8vh] ">
//       <img
//         src={`/imgs/smExplor/img1SME.svg`}
//         className="w-full object-cover justify-center  object-center"
//         alt="IMG"
//       />
//     </div>

//     {/* 6 */}
//     <div className="max-w-xl mx-auto bg-white mt-[4vh]">
//       {places.map((item, index) => (
//         <div key={item.id} className="border-b border-gray-200">
//           <button
//             onClick={() => handleClick(item.id)}
//             className="w-full flex items-center justify-between py-4 text-left"
//           >
//             <div className="flex items-center gap-4">
//               <span className="text-gray-400 Font_Q">
//                 {String(index + 1).padStart(2, "0")}
//               </span>
//               <span className={`text-lg Font_Q `}>{item.title}</span>
//             </div>
//             <span className="text-xl">
//               {activeId === item.id ? "−" : "+"}
//             </span>
//           </button>

//           {/* Expand Section */}
//           <div
//             className={`overflow-hidden transition-all duration-500 ${
//               activeId === item.id
//                 ? "max-h-[400px] opacity-100"
//                 : "max-h-0 opacity-0"
//             }`}
//           >
//             <img
//               src={item.image}
//               alt={item.title}
//               className="w-full h-56 object-cover mb-4"
//             />
//           </div>
//         </div>
//       ))}
//     </div>

//     {/* 7 */}
//     <div className="w-full h-fit flex justify-center items-center mt-[10vh] mb-[5vh]">
//       <img src={`/svgs/TravelService.svg`} alt="IMG" className="w-full object-cover object-center" />
//     </div>

//     {/* 8 */}
//     <div className="w-full h-fit flex justify-center items-center px-[20px]">
//       <img src={`/imgs/itinerary/Iimg2.webp`} alt="img" className="w-full object-cover object-center" />
//     </div>

//     {/* 9 */}
//     <div className="w-full h-fit flex justify-center items-center px-[20px] mt-[5vh] mb-[10vh]">
//       <img src={`/imgs/r1.webp`} alt="img" className="w-full object-cover object-center" />
//     </div>
