import React, { FC, useRef } from 'react'
import IconButton from '../Button/IconButton'
import { FiArrowUpRight } from 'react-icons/fi'
import useGetBoundingClientRect from '../../hooks/useGetBoundingClientRect'

interface Props {
    title: string,
    channel: string,
    link: string
}
const NewPost: FC<Props> = ({ title, channel, link }) => {
    const contentRef = useRef(null);
    const isVisible = useGetBoundingClientRect(contentRef);

    const getThumbnail = (link: string) => {
        const id = link.split('/')[4]
        return `https://img.youtube.com/vi/${id}/sddefault.jpg`
    }

    return (
        <div ref={contentRef} className="flex items-center flex-col lg:flex-row space-x-10">
            <div className='lg:w-8/12 w-full mb-5 lg:mb-0'>
                <div className={`lg:h-[460px] relative  ${isVisible && 'shadow-black lg:shadow-2xl'}  hover:shadow-2xl hover:shadow-black transition-all cursor-pointer duration-500`}>
                    <label className='bg-primary-500 text-white text text-xl px-6 py-1 -left-5 top-8 absolute'>
                        {channel}
                    </label>
                    <img src={getThumbnail(link)} className="lg:object-cover object-contain h-full w-full" />
                </div>
            </div>
            <div className={`lg:w-4/12 w-full  ${isVisible ? 'lg:opacity-100' : 'lg:opacity-0'} transition-all duration-500`}>
                <h6 className='lg:text-4xl text-2xl line font-light font-japanese mb-5'>{title}</h6>
                <a href='#' className=' font-medium text-xl flex items-center space-x-2'>
                    <div className='flex items-center space-x-2'>
                        <img src='https://hakoniwalily.jp/cms/wp-content/themes/hakoniwalily/assets/img/common/icon_youtube.svg' className='h-5 w-5' />
                        <label className='text-primary-500 opacity-90'>{channel} Channel</label>
                    </div>
                    <IconButton>
                        <FiArrowUpRight color='#3A2E26' size={24} />
                    </IconButton>
                </a>
            </div>
        </div>
    )
}

export default NewPost