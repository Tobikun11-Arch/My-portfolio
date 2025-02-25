import Image from 'next/image'
import React from 'react'

export default function CtaSection() {
    return (
        <main className='h-screen flex flex-col justify-center items-center bg-[#FBFBFB] rounded-t-[75px] relative'>
            <div className='relative rounded-full overflow-hidden w-28 h-28'>
                <Image
                    fill
                    loading='lazy'
                    placeholder='blur'
                    blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII='
                    src='/DealLogo.png'
                    alt='Deal Logo'
                />
            </div>
            <div className='text-center text-xl sm:text-[50px] font-bold mt-5 font-mono'>
                <h1>Tell me about your next</h1>
                <h1 className='sm:mt-4'>project</h1>
            </div>
            <div className="buttons mt-16 font-semibold flex gap-4 items-center">
                <a  
                href="https://mail.google.com/mail/?view=cm&fs=1&to=joenelsevellejo831@gmail.com&su=Let's%20Work%20Together&body=Hello,%20I%20want%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer" 
                className="btn email-btn bg-black shadow-lg text-white text-sm px-6 py-3 rounded-3xl">✉️ Email Me
                </a>
                <a href="https://api.whatsapp.com/send?phone=639934300300" target="_blank" className="btn whatsapp-btn shadow-lg text-black text-sm px-6 py-3 rounded-3xl">WhatsApp</a>
            </div>
            <footer className='absolute bottom-4 left-4 text-xs text-gray-500'>
            <p>© {new Date().getFullYear()} All rights reserved.</p>
            </footer>
        </main>
    )
}
