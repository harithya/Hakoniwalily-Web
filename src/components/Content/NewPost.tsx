import React from 'react'

const NewPost = () => {
    const data = [
        {
            title: "好き！雪！本気マジック / Mitchie M【Covered by Kotoha】",
            channel: "Kotoha",
            link: "https://www.youtube.com/embed/HH0BZT2Hfmc",
        },
        {
            title: "Subtitle／Official髭男dism【Covered by Hanon】",
            channel: "Hanon",
            link: "https://www.youtube.com/embed/_4wRPVOihBA"
        },
        {
            title: "タイムマシン / 優里【Covered by Kotoha】",
            channel: "Kotoha",
            link: "https://www.youtube.com/embed/_p1gr0d3yU0"
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
                            <div className='lg:h-[450px] relative shadow-2xl  shadow-gray-300 hover:shadow-black transition-all cursor-pointer duration-700'>
                                <label className='bg-primary text-white text text-xl px-6 py-1 -left-5 top-8 absolute'>
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
                                    <label className='text-primary opacity-90'>{val.channel} Channel</label>
                                </div>
                                <div className='border h-16 w-16 flex justify-center items-center rounded-full'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>)}
            </div>
        </div>
    )
}

export default NewPost