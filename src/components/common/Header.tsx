"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [firstName, setFirstName] = useState<string | null>(null);
    const [lastName, setLastName] = useState<string | null>(null);

    useEffect(() => {
        const storedFormData = localStorage.getItem("formData");
        if (storedFormData) {
            const formData = JSON.parse(storedFormData);
            setFirstName(formData.firstName);
            setLastName(formData.secondName);
        }


        const storedImageUrl = localStorage.getItem("selectedImageUrl");
        if (storedImageUrl) {
            setImageUrl(storedImageUrl);
        }
    }, []);

    return (
        <header className="flex justify-between items-center bg-light-white">
            <div className="max-w-[1172px] px-4 mx-auto lg:py-4 py-3 w-full">
                <div className="flex w-full justify-between items-center">
                    <div className="flex max-sm:flex-col sm:gap-2 items-center">
                        <Link href="/">
                            <Image className='lg:max-w-[144px] md:max-w-32 max-w-28' src="/assets/images/png/header-logo.png" alt="header-logo" width={144} height={33} />
                        </Link>
                        <p className='font-medium lg:text-base text-sm !leading-[100%] sm:border-l-black sm:border-l-[1.5px] max-sm:border-t-black max-sm:border-t-[1.5px] xl:px-[10px] lg:px-2 md:px-1.5 sm:px-1 max-sm:py-1'> TMM Accelerator</p>
                    </div>
                    <div className="flex items-center gap-2">
                        {imageUrl ? (
                            <Image className="xl:max-w-10 xl:max-h-10 xl:min-w-10 pointer-events-none lg:max-w-9 lg:max-h-9 lg:min-w-9 min-w-8 max-h-8 max-w-8 w-full rounded-full overflow-hidden" src={imageUrl} alt="profile-img" width={40} height={40} priority />
                        ) : (
                            <Image className="xl:max-w-10 xl:max-h-10 xl:min-w-10 pointer-events-none lg:max-w-9 lg:max-h-9 lg:min-w-9 min-w-8 max-h-8 max-w-8 w-full rounded-full overflow-hidden" src="/assets/images/png/header-profile-img.png" alt="Demo-Profile-Image" width={40} height={40} />
                        )}
                        <div className="flex flex-col">
                            <p className="font-medium lg:text-base text-sm flex items-center !leading-[100%] lg:h-[19px] whitespace-nowrap">{firstName || "John Doe"}</p>
                            <p className="font-medium lg:text-base text-sm flex items-center !leading-[100%] lg:h-[19px] whitespace-nowrap">{lastName || "Admin"}</p>
                        </div>
                        <Image className='xl:max-w-6 lg:max-w-5 max-w-4 w-full' src="/assets/images/png/profile-down-arrow.png" alt="profile-down-arrow" width={40} height={40} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
