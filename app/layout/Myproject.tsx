'use client'
import React from 'react'
import Projects from '../components/Projects'
import { motion } from "framer-motion";

export default function Myproject() {
    return (
        <main className='min-h-screen flex flex-col justify-center items-center bg-[#EEEEEC] w-full py-14 md:px-10 xl:px-24'>
            <motion.div 
            className='w-full'
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false }} >
                <h1 className='pb-24 text-center text-4xl font-bold font-mono'>Turning ideas into powerful web apps <br /> Let&#39;s build something great together.</h1>
                <div className="relative w-full flex items-center justify-center">
                    <hr className="border border-gray-500 w-full" />
                    <span className="absolute bg-white rounded-lg py-2 px-6 text-black text-sm font-semibold">Projects</span>
                </div>
                <Projects />
            </motion.div>
        </main> 
    )
}
