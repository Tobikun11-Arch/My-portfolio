import React from 'react'

interface ButtonProps{
    children: React.ReactNode
}

export default function Button({ children }: ButtonProps) {
    return (
        <button className='bg-white w-20 py-1 rounded-xl flex justify-center items-center'>
            {children}
        </button>
    )
}
