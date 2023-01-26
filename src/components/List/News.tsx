import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import Divider from '../Divider'

interface Props {
    title: string,
    date: string,
    category: string[]
}
const News: FC<Props> = ({ title, date, category }) => {

    const newDate = (key: number): string[] => {
        const item = date.split('.')
        // @ts-ignore
        return item[key];
    }

    return (
        <Link to={'/news/post-example'} className="cursor-pointer hover:opacity-50">
            <Divider />
            <div className='mb-5 lg:px-10 flex items-center space-x-10'>
                <div className='flex flex-col items-center -space-y-1'>
                    <label className='text-[25px] cursor-pointer'>{newDate(1)} . {newDate(2)}</label>
                    <label className='text-xl'>{newDate(0)}</label>
                </div>
                <label className='font-japanese flex-1 text-primary-500 text-lg cursor-pointer'>{title}</label>
                <div className=' justify-between lg:flex hidden space-x-1'>
                    {category.map((val, key) =>
                        <label key={key.toString()} className='flex-1  text-primary-500/70 text-md uppercase'>{`{${val}}`}</label>
                    )}
                </div>
            </div>
        </Link>
    )
}

export default News