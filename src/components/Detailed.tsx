"use client";
import { useEffect, useState } from "react";
import Image from 'next/image';
import { MACHINES_DATA_LIST } from "@/utils/helper";

const Detailed: React.FC = () => {
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    useEffect(() => {
        const storedImageUrl = localStorage.getItem("selectedImage");
        if (storedImageUrl) {
            setImageUrl(storedImageUrl);
        }
    }, []);

    return (
        <div className="flex justify-center items-center bg-light-white">
            <div className="max-w-[1172px] px-4 mx-auto w-full">
                <div className="flex flex-wrap max-lg:flex-col lg:justify-between items-center w-full lg:pyp-6 md:py-5 py-4">
                    <div className="max-w-2xl w-full overflow-x-auto whitespace-nowrap scrollbar-none">
                        {imageUrl ? (
                            <p className="text-black xl:text-2xl lg:text-xl md:text-lg !leading-[100%] font-semibold">{imageUrl}</p>
                        ) : (
                            <p>No image selected.</p>
                        )}
                    </div>
                    <button className="font-medium lg:text-sm lg:mt-0 md:mt-4 mt-3 text-xs !leading-[100%] cursor-pointer hover:bg-red-500 hover:border-transparent hover:text-white transition-all ease-linear duration-300 uppercase xl:py-[17px] lg:py-3.5 py-3 xl:px-[22.5px] lg:px-5 px-4 border-black/50 border-1 rounded-md whitespace-nowrap">Upload more files</button>
                </div>
                <div className="flex flex-wrap justify-center items-center w-full xl:gap-6 lg:gap-5 gap-4 xl:mb-[31px] lg:mb-7 md:mb-6 mb-5">
                    <div className="bg-white rounded-lg max-w-[558px] px-4 xl:py-[19px] lg:py-4 py-3 w-full flex items-center justify-between">
                        <div className="flex lg:gap-4 gap-3 items-center">
                            <Image className="xl:max-w-[60px] lg:max-w-12 max-w-11" src="/assets/images/png/complexity-high.png" alt="Complexity-img" width={60} height={60} />
                            <p className="xl:text-xl lg:text-base md:text-sm text-xs !leading-[100%] font-medium ">Complexity of the code</p>
                        </div>
                        <button className="text-red bg-light-red lg:px-4 px-3 lg:py-2 py-1.5 lg:text-sm text-xs !leading-[100%] font-medium rounded-[49px] border-red-2">HIGH</button>
                    </div>
                    <div className="flex flex-wrap sm:flex-nowrap justify-center w-full max-w-[558px] xl:gap-6 lg:gap-5 gap-4">
                        {MACHINES_DATA_LIST.map((item, index) => (
                            <div key={index} className="bg-white rounded-lg lg:max-w-[267px] px-4 xl:py-[19px] lg:py-4 py-3 w-full flex items-center">
                                <div className="flex lg:gap-4 gap-3 items-center">
                                    <Image className="xl:max-w-[60px] lg:max-w-12 max-w-11" src={item.logo} alt={`${item.description} logo`} width={60} height={60} />
                                    <div>
                                        <p className="xl:text-[28px] lg:text-xl text-lg !leading-[100%] font-medium lg:mb-[2px]">{item.count}</p>
                                        <p className="font-inter lg:text-sm text-xs !leading-[100%]">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <h3 className="text-black xl:text-2xl lg:text-xl xl:text-start text-center md:text-lg !leading-[100%] font-semibold xl:mb-6 lg:mb-5 mb-4">Detailed metrices</h3>
                <div className="flex flex-wrap justify-center items-center w-full xl:mb-[46px] lg:mb-10 md:mb-9 mb-7">
                    <div className="max-w-[558px] w-full justify-center items-center flex">
                        make a accordion with 6 data in next js tailwind typescript which open snothly and durantion and transictions with a acrrow when open it rotate downword
                    </div>
                    <div className="max-w-[558px] w-full justify-center items-center flex">
                        <Image className="xl:max-w-[558px] lg:max-w-lg md:max-w-md max-w-sm w-full" src="/assets/images/png/chart-img.png" alt="chart-img" width={558} height={464} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detailed;
