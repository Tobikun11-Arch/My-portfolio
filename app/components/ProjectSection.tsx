import Image from 'next/image'
import React from 'react'
import TechnologiesLogo from './TechnologiesLogo'

interface SectionProps {
    icon: string
    title: string
    imgsrc: string
    alt: string
    imgAlt: string

    //Technologies logo
    logo1?: string
    logo2?: string
    logo3?: string
    logo4?: string
    logo5?: string

    logo1Alt?: string
    logo2Alt?: string
    logo3Alt?: string
    logo4Alt?: string
    logo5Alt?: string
}

export default function ProjectSection({ icon, title, imgsrc, alt, imgAlt, logo1, logo2, logo3, logo4, logo5, logo1Alt, logo2Alt, logo3Alt, logo4Alt, logo5Alt }: SectionProps) {
    const blurData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lPAAAAA=='

    return (
        <div className='w-full h-96 bg-[#EEEEEC] shadow-md rounded-lg'>
           <div className='relative w-full h-3/4 rounded-t-lg overflow-hidden'>
                <Image
                    fill
                    alt={imgAlt}
                    src={`/${imgsrc}`}
                    loading='lazy'
                    objectFit='cover'
                    blurDataURL={`${blurData}`}
                    placeholder='blur'
                />
           </div>
           <div className='pt-2 pb-4 px-4 flex flex-col gap-2'>
                <div className='flex gap-3'>
                    <TechnologiesLogo logo={logo1} logoAlts={logo1Alt}/>
                    <TechnologiesLogo logo={logo2} logoAlts={logo2Alt}/>
                    <TechnologiesLogo logo={logo3} logoAlts={logo3Alt}/>
                    <TechnologiesLogo logo={logo4} logoAlts={logo4Alt}/>
                    <TechnologiesLogo logo={logo5} logoAlts={logo5Alt}/>
                </div>
               <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-1'>
                        <div className='relative w-8 h-8 rounded-full'>
                            <Image
                                fill
                                alt={alt}
                                src={`/${icon}`}
                                loading='lazy'
                                objectFit='cover'
                                blurDataURL={`${blurData}`}
                                placeholder='blur'
                            />
                        </div>
                        <h1 className='text-base text-gray-600 font-semibold'>{title}</h1>
                    </div>
                    <button className='bg-black text-white text-sm font-semibold font-mono flex justify-center items-center py-1.5 px-4 rounded-xl'>View Details</button>
               </div>
           </div>
        </div>
    )
}
