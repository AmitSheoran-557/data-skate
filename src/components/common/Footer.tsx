import React from 'react'

const Footer = () => {
    return (
        <div className='bg-light-black w-full flex justify-center items-center  '>
            <div className="max-w-[1172px] px-4 mx-auto w-full">
                <div className="flex justify-between  max-md:flex-col items-center w-full lg:py-[23px] md:py-5 py-4">
                    <p className='font-inter text-white/50 lg:text-sm text-xs !leading-[150%]'>Made with 🩶 for the people of the internet.</p>
                    <p className='font-inter text-white/50 lg:text-sm text-xs !leading-[150%] md:pt-0 sm:pt-2 pt-1'>© ${new Date().getFullYear()} Dataskate.io, All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
