import Image from 'next/image'
import React from 'react'

interface LogoProps {
    logo?: string
    logoAlts?: string
}

export default function TechnologiesLogo({ logo, logoAlts }: LogoProps) {
    if (!logo) return null 

    return (
        <div className='relative w-8 h-8 overflow-hidden'>
            <Image
                fill
                alt={logoAlts!}
                src={logo!}
                loading='lazy'
                objectFit='cover'
                blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lPAAAAA=='
                placeholder='blur'
            />
        </div>
    )
}
