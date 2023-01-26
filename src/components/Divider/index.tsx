import React from 'react'
import Twinkle from '../Twinkle'

const Divider = () => {
    return (
        <div className='mb-5 flex items-center space-x-5'>
            <Twinkle />
            <div className='h-1 border-b-2 w-full border-dashed' />
            <Twinkle />
        </div>
    )
}

export default Divider