import React from 'react'

interface HoverProps {
    children: React.ReactNode
}

export default function NavHover({ children }: HoverProps) {
    return (
        <span className='hover:underline'>{children}</span>
    )
}
