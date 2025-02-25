import React from 'react'
import Projects from '../components/Projects'

export default function Myproject() {
    return (
        <main className='min-h-screen flex flex-col justify-center items-center bg-[#EEEEEC] w-full py-14 px-24'>
            <h1 className='pb-24 text-center text-4xl font-bold font-mono'>Turning ideas into powerful web apps <br /> Let&#39;s build something great together.</h1>
            <div className="relative w-4/5 flex items-center justify-center">
                <hr className="border border-gray-500 w-full" />
                <span className="absolute bg-white rounded-lg py-2 px-6 text-black text-sm font-semibold">Projects</span>
            </div>
            <Projects />
        </main> 
    )
}
