import Image from 'next/image'
import React from 'react'

interface LogoProps {
    logo?: string
    logoAlts?: string
}

export default function TechnologiesLogo({ logo, logoAlts }: LogoProps) {
    if (!logo) return null 

    return (
        <div className='relative w-6 sm:w-8 h-6 sm:h-8 overflow-hidden'>
            <Image
                fill
                alt={logoAlts!}
                src={logo!}
                loading='lazy'
                className='object-cover'
                blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lPAAAAA=='
                placeholder='blur'
            />
        </div>
    )
}
