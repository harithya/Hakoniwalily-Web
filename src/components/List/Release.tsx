import React, { FC } from 'react'
import { Link } from 'react-router-dom'

interface Props {
    img: string,
    category: string,
    title: string
}

const Release: FC<Props> = ({ img, category, title }) => {
    return (
        <Link to={'/release/223'}>
            <div className='cursor-pointer'>
                <img src={img} className="object-contain transition-all duration-500 shadow-black hover:shadow-2xl" style={{
                    transform: "transform 0.25s ease 0s"
                }} />
                <div className='mt-5'>
                    <div className='text-center text-primary-500/50 font-thin'>{category}</div>
                    <h5 className='text-center text-xl text-primary-500 font-japanese'>{title}</h5>
                </div>
            </div>
        </Link>
    )
}

export default Release