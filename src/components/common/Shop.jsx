"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    id: 1,
    question: "The Charms of Bapu Bazaar",
    answer: `One of Udaipur's oldest and most popular markets, Bapu Bazaar, is a treasure trove for those seeking traditional Rajasthani textiles and handicrafts. Named after the revered Mahatma Gandhi, this bustling market is lined with shops selling colourful fabrics, embroidered textiles, and handicrafts that reflect the city's rich cultural heritage. The market is near Taj Lake Palace a grand palace hotel in Udaipur, famous for its intricately designed Bandhani sarees and embroidered wall hangings. Bapu Bazaar is a haven for those looking to immerse themselves in Udaipur's traditional craftsmanship.`,
    leftImage: "/imgs/shop/1.jpg",
    rightImage: "/imgs/explorNewImg/The_Oberoi_Udaivilas_1.webp",
  },
  {
    id: 2,
    question: "Jagdish Chowk",
    answer: ` Where Heritage Meets Shopping
Jagdish Chowk, located near the famous Jagdish Temple, is a picturesque square surrounded by vibrant shops and stalls. Here, you can find a mix of traditional and contemporary items, ranging from antique jewellery and hand-carved wooden items to modern clothing and accessories. The market's unique blend of heritage and modernity makes it a must-visit destination for shoppers seeking a diverse range of products.
 `,
 leftImage: "/imgs/shop/2.jpg",
    rightImage: "/imgs/explorNewImg/Bagore_Ki_Haveli_2.webp",
  },
  {
    id: 3,
    question: "Exploring Hathi Pol Bazaar ",
    answer: `The Elephant Gate Market
Stepping into Hathi Pol Bazaar is like entering a bygone era. This market, situated near the City Palace, is named after the Hathi Pol, or Elephant Gate, that once served as the royal entrance. Hathi Pol Bazaar is renowned for its antique shops, offering a captivating array of vintage jewellery, sculptures, and traditional Rajput weaponry. For those with a penchant for history and nostalgia, this market is a haven of unique and timeless treasures.
`,
leftImage: "/imgs/shop/3.jpg",
    rightImage: "/imgs/explorNewImg/The_Oberoi_Udaivilas_1.webp",
  },
  {
    id: 4,
    question: "Shilpgram ",
    answer: `A Rural Arts and Crafts Complex
For a more immersive shopping experience, head to Shilpgram, situated on the outskirts of Udaipur. This rural arts and crafts complex is designed to showcase the diverse arts and crafts of Rajasthan's rural communities.Shilpgram hosts numerous craft fairs and festivals throughout the year, providing an opportunity for visitors to witness traditional art forms like pottery, weaving, and tie-and-dye. The complex's shops offer an extensive range of handmade products, providing an authentic glimpse into the artistic traditions of rural Rajasthan.`,
leftImage: "/imgs/shop/4.jpg",
    rightImage: "/imgs/explorNewImg/The_Oberoi_Udaivilas_1.webp",
  },
  {
    id: 5,
    question: "Boutique Bliss ",
    answer: `Udaipur's Upscale Shopping Destinations
Udaipur is not just about traditional markets; it also boasts upscale boutiques catering to those with a taste for luxury and contemporary fashion. The city's high-end shopping districts are home to renowned designers and brands, highlighting a fusion of traditional and modern styles. From designer clothing and jewellery to chic home décor items, these boutiques are a haven for those looking to indulge in a more refined shopping experience.`,
leftImage: "/imgs/shop/5.jpg",
    rightImage: "/imgs/explorNewImg/The_Oberoi_Udaivilas_1.webp",
  },
  {
    id: 6,
    question: "City Palace Complex",
    answer: ` Where Royalty Meets Retail Therapy
Within the majestic City Palace complex, you will find a curated selection of shops that redefine the concept of royal retail therapy. These exclusive boutiques offer a collection of high-quality handicrafts, textiles, and jewellery inspired by the rich heritage of the Mewar region. Shopping here is not just a transaction; it is an experience that allows you to immerse yourself in the regal charm of Udaipur's history.`,
leftImage: "/imgs/shop/6.jpg",
    rightImage: "/imgs/explorNewImg/The_Oberoi_Udaivilas_1.webp",
  },
  {
    id: 7,
    question: "Gangaur Ghat ",
    answer: `Souvenirs with a View
Gangaur Ghat, overlooking Lake Pichola, provides a stunning backdrop for a unique shopping experience. The shops along the ghat offer an eclectic mix of souvenirs, trinkets, and local artefacts. As you stroll along the serene lakeside, you can browse through a variety of items, from miniature paintings and marble sculptures to vibrant Rajasthani puppets. This picturesque setting elevates the joy of shopping, making it an unforgettable experience for visitors.
`,
leftImage: "/imgs/shop/7.jpg",
    rightImage: "/imgs/explorNewImg/The_Oberoi_Udaivilas_1.webp",
  },
  {
    id: 8,
    question: "Unveiling Udaipur's Hidden Gems ",
    answer: ` A Deeper Dive into Shopping Delights
Beyond the well-trodden paths of Udaipur's famous markets, lie some hidden gems that cater to a more niche and discerning shopper. These lesser-known shopping destinations offer a distinct experience, highlighting the city's rich cultural tapestry in unique ways.`,
leftImage: "/imgs/shop/8.jpg",
    rightImage: "/imgs/explorNewImg/The_Oberoi_Udaivilas_1.webp",
  },
  {
    id: 9,
    question: " Meera Kala Mandir",
    answer: `Where Artistry Takes Center Stage
For art connoisseurs and those with a penchant for intricate craftsmanship, Meera Kala Mandir is a hidden gem waiting to be discovered. Tucked away in the narrow lanes of Udaipur, this art gallery and boutique celebrate the legacy of Meera Bai, a revered saint-poetess. The gallery highlights a mesmerizing collection of traditional Rajasthani paintings, depicting scenes from Meera Bai's life and other mythological tales. The attached boutique offers a curated selection of handcrafted items inspired by Meera Bai's devotion, including beautifully adorned textiles and accessories.`,
leftImage: "/imgs/shop/9.jpg",
    rightImage: "/imgs/explorNewImg/The_Oberoi_Udaivilas_1.webp",
  },
  {
    id: 10,
    question: "Bada Bazaar",
    answer: `The Unexplored Haven
While Bapu Bazaar is well-known, its counterpart, Bada Bazaar, often escapes the mainstream spotlight. Located near the Clock Tower, Bada Bazaar is a haven for those seeking a more relaxed and authentic shopping experience. The market is dotted with shops offering a variety of local handicrafts, textiles, and jewellery. The laid-back atmosphere allows visitors to explore at their own pace, discovering hidden treasures and engaging with local artisans who often share stories behind their creations.
`,
leftImage: "/imgs/shop/10.jpg",
    rightImage: "/imgs/explorNewImg/The_Oberoi_Udaivilas_1.webp",
  },
  {
    id: 11,
    question: "Vintage Finds at Maldas Street",
    answer: `Maldas Street, located in the heart of Udaipur, is a hidden paradise for vintage enthusiasts and collectors. This narrow lane is lined with shops that specialize in unique, antique pieces, ranging from old coins and vintage jewellery to rare artifacts. Exploring Maldas Street is like embarking on a treasure hunt through time, where each store unveils a piece of history waiting to be admired and acquired.
`,
leftImage: "/imgs/shop/11.jpg",
    rightImage: "/imgs/explorNewImg/The_Oberoi_Udaivilas_1.webp",
  },
  {
    id: 12,
    question: "The Bohemian Vibe of Chand Pole",
    answer: `For those seeking a bohemian touch to their shopping experience, Chand Pole is the place to be. This vibrant area, nestled within the old city, is known for its eclectic mix of shops offering quirky and artistic products. From hand-painted clothing to funky accessories and contemporary artwork, Chand Pole is a refreshing departure from the traditional markets, attracting a younger crowd with its unique and offbeat offerings.
`,
leftImage: "/imgs/shop/12.jpg",
    rightImage: "/imgs/explorNewImg/The_Oberoi_Udaivilas_1.webp",
  },

  {
    id: 13,
    question: "Udaipur Haat",
    answer: `A Cultural Mosaic of Crafts
Udaipur Haat is a government-supported initiative that provides a platform for local artisans to highlight their crafts. This market, situated near the City Palace, features stalls representing various regions of Rajasthan. Visitors can explore a diverse array of handicrafts, textiles, and traditional items from different parts of the state. Udaipur Haat not only supports local artisans but also offers shoppers a chance to experience the cultural diversity that defines Rajasthan.`,
leftImage: "/imgs/shop/13.jpg",
    rightImage: "/imgs/explorNewImg/The_Oberoi_Udaivilas_1.webp",
  },
  {
    id: 14,
    question: "Contemporary Art Galleries",
    answer: ` Beyond Traditional Crafts
While Udaipur is steeped in tradition, it also embraces contemporary art. The city is home to several art galleries highlighting the work of local and national artists. These galleries provide a different shopping experience, where visitors can explore and purchase contemporary paintings, sculptures, and other modern art forms that reflect the evolving cultural landscape of Udaipur.`,
leftImage: "/imgs/shop/14.jpg",
    rightImage: "/imgs/explorNewImg/The_Oberoi_Udaivilas_1.webp",
  },
  {
    id: 15,
    question: "Empowering Women at Shilpigram's Women's Bazaar",
    answer: `Saheliyon Ki Bari, known for its beautiful gardens, is also home to a unique shopping experience. The area surrounding the gardens features stalls offering Rajasthani culinary delights. Visitors can purchase authentic spices, traditional sweets, and handmade utensils that highlight the richness of Rajasthani cuisine. This unconventional shopping spot allows food enthusiasts to take a piece of Rajasthan's gastronomic heritage home with them`,
    leftImage: "/imgs/shop/15.jpg",
    rightImage: "/imgs/explorNewImg/The_Oberoi_Udaivilas_1.webp",
  },
];

export default function Shop() {

   const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );
    });
  }, []);


  return (
   <>
   <div className="w-full h-full flex justify-center items-center COLOR_BG_RED mt-20 py-20">
    <div className="w-[80%] max-sm:w-full px-6 max-sm:px-[20px] flex flex-col gap-20 text-white">
       <h2 className="text-center Font_Q flex justify-center items-center">
        Shop In Udaipur
      </h2>
      </div>
   </div>
    <section className="w-full px-6 md:px-16 md:py-20 max-md:pb-20 COLOR_BG_RED ">
      <div className="grid md:grid-cols-2 gap-10">

        {faqs.map((item, i) => (
          <div
            key={item.id}
            ref={(el) => (cardsRef.current[i] = el)}
            className="group"
          >
            {/* Image */}
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src={item.leftImage}
                alt={item.question}
                width={800}
                height={600}
                className="w-full h-[500px] max-lg:h-[300px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="mt-5">
              <h3 className="text-[1rem] leading-[1.1rem] text-white Font_Q uppercase tracking-wide">
                {item.question}
              </h3>

              {/* Tags */}
              

              {/* Description */}
              <p className="text-white/40 mt-4 text-[14px] Font_YV  ">
                {item.answer}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
   </>
  );
}
