"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { DATA_SKATE_URL_FEATURES_LIST } from "@/utils/helper";

interface ImageFile {
    url: string;
}

const ProcessFiles: React.FC = () => {
    const [image, setImage] = useState<ImageFile | null>(null);
    const [isUploading, setIsUploading] = useState(false);
    const router = useRouter();
 
    const handleFiles = (e: React.ChangeEvent<HTMLInputElement> | React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const files = (e.target as HTMLInputElement).files || (e as React.DragEvent<HTMLDivElement>).dataTransfer?.files;
        const file = files?.[0];

        if (file && file.type.startsWith("image/")) {
            const fileArr: ImageFile = { url: URL.createObjectURL(file) };
            setImage(fileArr);
            localStorage.setItem("selectedImage", fileArr.url);
        }

        if ((e.target as HTMLInputElement).value) {
            (e.target as HTMLInputElement).value = "";
        }
    };

    const handleUpload = () => {
        if (image) {
            setIsUploading(true);
            setTimeout(() => {
                setIsUploading(false);
                router.push("/file-details");
            }, 3000);
        }
    };

    return (
        <div className="flex justify-between items-center relative">
            <Image className="xl:max-w-[169px] lg:max-w-36 md:max-w-28 sm:max-w-24 max-w-20 w-full absolute lg:top-20 top-0 left-0" src="/assets/images/png/left-side-vector.png" alt="left-side-vector" width={169} height={211} />
            <Image className="xl:max-w-[169px] lg:max-w-36 md:max-w-28 sm:max-w-24 max-w-20 w-full absolute lg:bottom-10 bottom-4 right-0" src="/assets/images/png/right-side-vector.png" alt="left-side-vector" width={169} height={211} />
            <div className="max-w-[1172px] px-4 mx-auto w-full xl:pb-[69px] lg:pb-14 md:pb-12 sm:pb-10 pb-8">
                <h2 className="font-semibold xl:text-[32px] lg:text-3xl md:text-2xl text-xl lg:pt-9 pt-8 lg:pb-[34px] md:pb-7 sm:pb-6 pb-3 !leading-[100%] text-black text-center"> Read & process your files online</h2>
                <div className="bg-white shadow-[0px_16px_42.7px_0px_#00000014] lg:max-w-[786px] md:max-w-2xl max-w-xl w-full mx-auto rounded-xl lg:p-4 p-3 lg:mb-12 md:mb-10 sm:mb-8 mb-7" onDrop={handleFiles} onDragOver={(e) => e.preventDefault()}>
                    <div className="border-red xl:py-[94px] lg:py-20 md:py-16 py-14 lg:px-6 px-4 rounded-lg">
                        <Image className="mx-auto lg:mb-4 mb-3" src="/assets/images/png/upload-icon.png" alt="upload-file-icon" width={24} height={24} />
                        <h4 className="mb-1 font-inter lg:text-base text-sm !leading-[150%] text-center">Paste or drag and drop files here</h4>
                        <p className="lg:mb-4 mb-3 text-black/40 font-inter lg:text-sm text-xs !leading-[150%] text-center"> WAR, ZIP or EAR, file size no more than 10MB</p>
                      
                        <label htmlFor="image" className="mx-auto p-[9.33px] cursor-pointer bg-red rounded-sm max-w-max flex justify-center items-center">
                            <Image src="/assets/images/png/plus-icon.png" alt="plus-icon" width={13} height={13} />
                        </label>
                        <input type="file" onChange={handleFiles} id="image" hidden />
                        <div className="flex-wrap flex gap-5 items-center justify-center mx-auto">
                            {image && (
                                <Image className="xl:max-w-28 max-w-24 mx-auto w-full lg:pt-5 pt-4" src={image.url} alt="selected-img" width={80} height={80} />
                            )}
                        </div>
                        
                        {image && (
                            <div className="flex justify-center items-center">
                                {isUploading ? (<div className="w-32 h-2 mt-3 bg-gray-300 rounded-xl overflow-hidden relative">
                                    <div className="h-full bg-blue-500 absolute animate-progress"></div>
                                </div>
                                ) : (
                                    <button onClick={handleUpload} className="mt-3 p-2 bg-red text-white rounded-lg"> Upload Image</button>
                                )}  
                            </div>  
                        )}  
                    </div>  
                </div>  

                <div className="flex flex-wrap md:justify-between max-md:justify-center items-center lg:max-w-[786px] md:max-w-2xl max-w-xl w-full mx-auto">
                    <p className="md:max-w-[355px] max-sm:max-w-2xl max-md:text-center lg:text-sm text-xs !leading-[150%] text-black font-inter">
                        Our accelerator allows you to upload, read, and process multiple file types (e.g., Python, JAR, ZIP),
                        extracting key data like classes, methods, and structure for easy review.
                    </p>
                    <div className="max-w-max w-full md:mt-0 sm:mt-6 mt-4">
                        {DATA_SKATE_URL_FEATURES_LIST.map((item, index) => (
                            <div className="flex lg:gap-1.5 gap-1 items-center lg:mb-2 mb-1" key={index}>
                                <Image className="lg:max-w-6 max-w-5" src="/assets/images/png/tick-icon.png" alt="tick-icon" width={24} height={24} />
                                <p className="lg:text-sm text-xs">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProcessFiles;
