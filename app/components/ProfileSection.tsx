import React from 'react'
import Image from 'next/image'

export default function ProfileSection() {
    return (
        <div className='w-24 h-24 rounded-full overflow-hidden relative'>
            <Image
                fill
                src={'/my_profile.jpg'}
                alt='My profile'
                loading='lazy'
                blurDataURL="data:image/svg+xml;base64,..."
                placeholder='blur'
                objectFit='cover'
            />
        </div>
    )
}
