import React from 'react'
import IconButton from '../Button/IconButton'
import { FiArrowUpRight } from 'react-icons/fi'

const NewPost = () => {
    const data = [
        {
            title: "世界一の友人だったあなたへ／ハコニワリリィ【Music Video】",
            channel: "Hakoniwalily",
            link: "https://www.youtube.com/embed/_Zp_cnl8ubc",
        },
        {
            title: "ツバメ／YOASOBI with ミドリーズ【Covered by Hanon】",
            channel: "Hanon",
            link: "https://www.youtube.com/embed/gtbbk-C35o0"
        },
        {
            title: "初めての恋が終わる時 / ryo(supercell)【Covered by Kotoha】",
            channel: "Kotoha",
            link: "https://www.youtube.com/embed/qQEbHEjne9M"
        }

    ]

    const getThumbnail = (link: string) => {
        const id = link.split('/')[4]
        return `https://img.youtube.com/vi/${id}/sddefault.jpg`
    }
    return (
        <div className='container'>
            <div className='space-y-10'>
                {data.map((val, key: number) =>
                    <div key={key.toString()} className="flex items-center flex-col lg:flex-row space-x-10">
                        <div className='lg:w-8/12 w-full mb-5 lg:mb-0'>
                            <div className='lg:h-[460px] relative shadow-2xl  shadow-gray-300 hover:shadow-black transition-all cursor-pointer duration-700'>
                                <label className='bg-primary-500 text-white text text-xl px-6 py-1 -left-5 top-8 absolute'>
                                    {val.channel}
                                </label>
                                <img src={getThumbnail(val.link)} className="lg:object-cover object-contain h-full w-full" />
                            </div>
                        </div>
                        <div className='lg:w-4/12 w-full'>
                            <h6 className='lg:text-4xl text-2xl line font-light font-japanese mb-5'>{val.title}</h6>
                            <a href='#' className=' font-medium text-xl flex items-center space-x-2'>
                                <div className='flex items-center space-x-2'>
                                    <img src='https://hakoniwalily.jp/cms/wp-content/themes/hakoniwalily/assets/img/common/icon_youtube.svg' className='h-5 w-5' />
                                    <label className='text-primary-500 opacity-90'>{val.channel} Channel</label>
                                </div>
                                <IconButton>
                                    <FiArrowUpRight color='#3A2E26' size={24} />
                                </IconButton>
                            </a>
                        </div>
                    </div>)}
            </div>
        </div>
    )
}

export default NewPost