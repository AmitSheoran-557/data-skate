import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="flex justify-between items-center bg-light-white">
            <div className="max-w-[1172px] px-4 mx-auto lg:py-4 py-3 w-full">
                <div className="flex w-full justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <Link href="/">
                            <Image className='lg:max-w-[144px] md:max-w-32 max-w-28' src="/assets/images/png/header-logo.png" alt="header-logo" width={144} height={33} />
                        </Link>
                        <p className='font-medium lg:text-base text-sm !leading-[100%] border-l-black border-l-[1.5px] xl:px-[10px] lg:px-2 md:px-1.5 px-1 max-sm:me-8'> TMM Accelerator</p>
                    </div>
                    <div className="flex items-center md:gap-2 gap-1">
                        <Image className='xl:max-w-10 xl:min-w-10 lg:max-w-8 lg:min-w-8 min-w-7 max-w-7 w-full' src="/assets/images/png/header-profile-img.png" alt="profile-img" width={40} height={40} />
                        <div className="">
                            <p className="font-medium lg:text-base text-sm !leading-[100%] whitespace-nowrap">Jhon doe</p>
                            <p className="lg:text-sm text-xs !leading-[100%] text-black/70 font-inter">Admin</p>
                        </div>
                        <Image className='xl:max-w-3 xl:min-w-3 cursor-pointer max-w-2.5 min-w-2.5 w-full' src="/assets/images/png/profile-down-arrow.png" alt="profile-down-arrow" width={40} height={40} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;  