export default function AccordGallery() {
    return (
        <div className=" w-full flex flex-col gap-12 px-4 max-sm:px-0 my-16 sm:grid sm:grid-cols-2 sm:gap-12 lg:flex lg:flex-row lg:gap-20 lg:px-0 lg:mt-[20vh] ">
            {/* Day-1 */}
            <div className="flex flex-col justify-between gap-20 lg:w-1/4">
                <div className="w-full aspect-square overflow-hidden">
                    <img
                        src="/imgs/SonalKush2.webp"
                        alt="img"
                        className="w-full h-full object-cover hover:scale-[1.05] transition-all duration-200 ease-in cursor-pointer"
                    />
                    <p className="mt-1 text-red-950 Font_YV">Timmy</p>
                </div>

                <div className="w-full aspect-2/3 overflow-hidden">
                    <img
                        src="/imgs/SonalKush1.webp"
                        alt="img"
                        className="w-full h-full object-cover hover:scale-[1.05] transition-all duration-200 ease-in cursor-pointer"
                    />
                    <p className="mt-4 text-red-950 Font_YV">Timmy</p>
                </div>
            </div>

            {/* Day-2 */}
            <div className="flex flex-col-reverse justify-between gap-20 lg:w-1/4">
                <div className="w-full aspect-square overflow-hidden">
                    <img
                        src="/imgs/SonalKush3.webp"
                        alt="img"
                        className="w-full h-full object-cover hover:scale-[1.05] transition-all duration-200 ease-in cursor-pointer"
                    />
                    <p className="mt-4 text-red-950 Font_YV">Timmy</p>
                </div>

                <div className="w-full aspect-2/3 overflow-hidden">
                    <img
                        src="/imgs/SonalKush1.webp"
                        alt="img"
                        className="w-full h-full object-cover hover:scale-[1.05] transition-all duration-200 ease-in cursor-pointer"
                    />
                    <p className="mt-4 text-red-950 Font_YV">Timmy</p>
                </div>
            </div>

            {/* Day-3 */}
            <div className="flex flex-col justify-between gap-20 lg:w-1/4">
                <div className="w-full aspect-square overflow-hidden">
                    <img
                        src="/imgs/SonalKush3.webp"
                        alt="img"
                        className="w-full h-full object-cover hover:scale-[1.05] transition-all duration-200 ease-in cursor-pointer"
                    />
                    <p className="mt-4 text-red-950 Font_YV">Timmy</p>
                </div>

                <div className="w-full aspect-2/3 overflow-hidden">
                    <img
                        src="/imgs/SonalKush2.webp"
                        alt="img"
                        className="w-full h-full object-cover object-[70%] hover:scale-[1.05] transition-all duration-200 ease-in cursor-pointer"
                    />
                    <p className="mt-4 text-red-950 Font_YV">Timmy</p>
                </div>
            </div>

            {/* Day-4 */}
            <div className="flex flex-col-reverse justify-between gap-20 lg:w-1/4">
                <div className="w-full aspect-square overflow-hidden">
                    <img
                        src="/imgs/SonalKush2.webp"
                        alt="img"
                        className="w-full h-full object-cover hover:scale-[1.05] transition-all duration-200 ease-in cursor-pointer"
                    />
                    <p className="mt-4 text-red-950 Font_YV">Timmy</p>
                </div>

                <div className="w-full aspect-2/3 overflow-hidden">
                    <img
                        src="/imgs/SonalKush3.webp"
                        alt="img"
                        className="w-full h-full object-cover hover:scale-[1.05] transition-all duration-200 ease-in cursor-pointer"
                    />
                    <p className="mt-4 text-red-950 Font_YV">Timmy</p>
                </div>
            </div>
        </div>
    );
}
