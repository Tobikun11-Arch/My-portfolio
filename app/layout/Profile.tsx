import React from 'react'
import ProfileSection from '../components/ProfileSection'
import Header from '../components/Header'
import { Download } from 'lucide-react';
import Motion from '../components/Motion';

export default function Profile() {
    return (
        <main className='h-screen bg-[#EEEEEC] rounded-b-[75px] flex flex-col justify-center items-center'>
            <Header />
            <Motion>
                <div className='p-1 bg-white rounded-full relative'>
                    <ProfileSection />
                    <h5 className='absolute top-10 -right-24 bg-white rounded-xl py-1 px-2 text-xs'>Joenel Sevellejo👋</h5>
                </div>
                <div className='text-center text-xl sm:text-[50px] font-bold mt-2 font-mono'>
                    <h1>Building scalable</h1>
                    <h1 className='sm:mt-3'>web app and secure</h1>
                    <h1 className='sm:mt-3'>authentication.</h1>
                </div>
                <button className="relative overflow-hidden bg-black text-white font-semibold py-3 w-36 mt-5 rounded-2xl group">
                    <a href="/Joenel_F._Sevellejo_Resume.pdf" download="Joenel Sevellejo Resume">
                        <span className='relative z-10 flex justify-center items-center gap-1'>Resume <Download size={20}/></span>
                    </a>

                    <span className="absolute inset-0 bg-blue-600 transition-all duration-500 ease-out transform -translate-x-full group-hover:translate-x-0"></span>
                </button>
            </Motion>
        </main>
    )
}   