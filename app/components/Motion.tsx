"use client"
import React from 'react'
import { motion } from 'framer-motion'

interface MotionProps {
    children: React.ReactNode
}

export default function Motion({ children }: MotionProps) {
    return (
        <motion.div 
        className='flex flex-col items-center justify-center'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: false }}>
            {children}
        </motion.div>
    )
}
