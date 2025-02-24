import React from 'react'

interface ButtonProps{
    children: React.ReactNode
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function Button({ children, onClick }: ButtonProps) {
    return (
        <button className='bg-white w-20 py-1 rounded-xl flex justify-center items-center' onClick={onClick}>
            {children}
        </button>
    )
}
