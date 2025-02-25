"use client"
import React, { useState } from 'react'
import NavHover from './NavHover'
import Button from './common/Button'
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [ isOpen, setOpen ] = useState<boolean>(false)
    const [copied, setCopied] = useState(false);

    const email = 'joenelsevellejo831@gmail.com'

    const handleCopy = async () => {
        if (typeof window !== "undefined" && navigator.clipboard) {
          await navigator.clipboard.writeText(email);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <header className="absolute top-0 left-0 w-full pt-4 px-4 sm:px-8 flex justify-between items-center bg-transparent text-sm font-semibold text-gray-600">
            <div className='text-[10px] sm:text-sm flex items-center gap-3 sm:gap-6 bg-white/15 rounded-xl py-1 pl-3 pr-1'>
                <p>{email}</p>
                <Button onClick={handleCopy}>{copied ? 'Copied!' : 'Copy'}</Button>
            </div>
            <X className={`${isOpen ? 'block' : 'hidden'}`} size={20} onClick={()=> setOpen(!isOpen)}/>
            <Menu className={`sm:hidden ${isOpen && 'hidden'}`} size={20} onClick={()=> setOpen(!isOpen)}/>
            <nav className={`sm:flex space-x-2 ${isOpen ? 'flex fixed right-6 top-14' : 'hidden'}`}>
                <ul className="flex space-x-2 text-xs sm:text-sm">
                    <li><a href="https://www.linkedin.com/in/joenel-sevellejo-2919a7259/" target="_blank" rel="noopener noreferrer"><NavHover>LinkedIn</NavHover></a> /</li>
                    <li><a href="https://www.instagram.com/joen.el11?igsh=M3Q4MzNob3RmdjR6" target="_blank" rel="noopener noreferrer"><NavHover>Instagram</NavHover></a> /</li>
                    <li><a href="https://github.com/Tobikun11-Arch" target="_blank" rel="noopener noreferrer"><NavHover>Github</NavHover></a></li>
                </ul>
            </nav>

        </header>
    )
}
