"use client"
import React, { useState } from 'react'
import NavHover from './NavHover'
import Button from './common/Button'
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [ isOpen, setOpen ] = useState<boolean>(false)

    return (
        <header className="absolute top-0 left-0 w-full pt-4 px-2 sm:px-8 flex justify-between items-center bg-transparent text-sm font-semibold text-gray-600">
            <div className='text-[10px] sm:text-sm flex items-center gap-3 sm:gap-6 bg-white/15 rounded-xl py-1 pl-3 pr-1'>
                <p>joenelsevellejo831@gmail.com</p>
                <Button>Copy</Button>
            </div>
            <X className={`${isOpen ? 'block' : 'hidden'}`} size={20} onClick={()=> setOpen(!isOpen)}/>
            <Menu className={`sm:hidden ${isOpen && 'hidden'}`} size={20} onClick={()=> setOpen(!isOpen)}/>
            <nav className={`sm:flex space-x-2 ${isOpen ? 'flex fixed right-6 top-14' : 'hidden'}`}>
                <ul className="flex space-x-2 text-xs sm:text-sm">
                    <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><NavHover>LinkedIn</NavHover></a> /</li>
                    <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><NavHover>Instagram</NavHover></a> /</li>
                    <li><a href="https://github.com" target="_blank" rel="noopener noreferrer"><NavHover>Github</NavHover></a></li>
                </ul>
            </nav>

        </header>
    )
}
