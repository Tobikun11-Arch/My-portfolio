"use client"
import React from 'react'
import Images from '../components/common/Images'
import { motion } from "framer-motion";

export default function Technologies() {
    return (
        <section className='px-4 sm:px-10 pt-10 pb-14 sm:py-10 bg-[#FBFBFB] rounded-b-[70px]'>
            <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false }} >
            <div className='grid grid-cols-6 sm:grid-cols-7 xl:grid-cols-10 gap-y-16 justify-items-center'>
                <Images
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg'
                    alt='Java logo'
                />
                <Images
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg'
                    alt='Html logo'
                />
                <Images
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg'
                    alt='Css logo'
                />
                <Images
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'
                    alt='Javascript logo'
                />
                <Images
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
                    alt='React logo'
                />
                <Images
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain-wordmark.svg'
                    alt='Axios logo'
                />
                <Images
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg'
                    alt='Typescript logo'
                />
                <Images
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg'
                    alt='Vitejs logo'
                />
                <Images
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg'
                    alt='Nextjs logo'
                />
                <Images
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'
                    alt='Tailwind css logo'
                />
                 <Images
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg'
                    alt='Go language logo'
                />
                <Images
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg'
                    alt='Nodejs logo'
                />
                <Images
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg'
                    alt='Expressjs logo'
                />
                 <Images
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg'
                    alt='Postman logo'
                />
                <Images
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg'
                    alt='Mysql logo'
                />
                <Images
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain-wordmark.svg'
                    alt='Firebase logo'
                />
                <Images
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg'
                    alt='MongoDB logo'
                />
                <Images
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg'
                    alt='Jest logo'
                />
                <Images
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg'
                    alt='Vercel logo'
                />
                <Images
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original-wordmark.svg'
                    alt='Jira logo'
                />
            </div>
            </motion.div>
        </section>
    )
}