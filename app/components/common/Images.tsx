import Image from 'next/image'
import React from 'react'

interface ImageProps{
    src: string
    alt: string
}

export default function Images({ src, alt }: ImageProps) {
    return (
        <div className='w-8 h-8 sm:w-16 sm:h-16 relative'>
            <Image
                fill
                src={src}
                alt={alt}
                loading='lazy'
                blurDataURL="data:image/svg+xml;base64,..."
                placeholder='blur'
                className='object-cover'
            />
        </div>
    )
}
