import React from 'react'

const data = [
    {
        title: "Hanon×Kotoha×HoneyWorks「Winter Vox」通販開始のお知らせ",
        date: "2022.12.22"
    },
    {
        title: "Kotoha、3/22(水)発売のMIMiNARIの2nd EP 「厭わない EP」にゲストボーカルとして参加決定！",
        date: "2022.12.18"
    },
    {
        title: "ハコニワリリィ×HoneyWorks CD発売決定！",
        date: "2022.11.26"
    }
]
const NewNews = () => {
    return (
        <div className='flex lg:space-x-16 space-y-10 lg:space-y-0 lg:flex-row flex-col'>
            {data.map((val, key) =>
                <div key={key.toString()} className="lg:w-4/12 w-full hover:text-gray-600 cursor-pointer">
                    <div className='mb-5 flex items-center space-x-5 '>
                        <label className='text-lg'>{val.date}</label>
                        <div className='border w-full h-[0.5px] border-dashed' />
                        <div className='bg-[url("https://hakoniwalily.jp/cms/wp-content/themes/hakoniwalily/assets/img/common/deco_twinkle.svg")] h-4 w-4 bg-no-repeat' />
                    </div>
                    <h6 className='font-japanese text-justify text-primary-500'>{val.title}</h6>
                </div>)}
        </div>
    )
}

export default NewNews