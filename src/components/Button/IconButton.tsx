import React, { FC, PropsWithChildren } from 'react'

interface Props {
    title?: string,
    onClick?: () => void
}
const IconButton: FC<PropsWithChildren<Props>> = ({ title, children, onClick }) => {
    return (
        <button className='flex items-center space-x-2' onClick={onClick}>
            {title && <label className='text-xl text-gray-500'>{title}</label>}
            <div className='border border-gray-500 lg:h-16 lg:w-16 h-10 w-10 flex justify-center items-center rounded-full'>
                {children}
            </div>
        </button>
    )
}

export default IconButton