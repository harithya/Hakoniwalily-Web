import React from 'react'
import { NewPost } from '../../components'
import { MainLayout } from '../../components'

const HomeView = () => {
    return (
        <MainLayout>
            <section className='flex items-center relative mb-28'>
                <div className='lg:w-4/12 hidden lg:flex relative'>
                    <img src='/logo.svg' className='h-40 ml-20 -mt-14 ' />
                </div>
                <div className='lg:w-8/12 w-full'>
                    <div className='lg:h-[700px] h-[500px] bg-red-400'>
                        <img
                            src='https://hakoniwalily.jp/cms/wp-content/uploads/2022/08/Hakoniwa_KyorikanJK0303.jpg'
                            className='h-full w-full object-top object-cover  '
                        />
                    </div>
                </div>
            </section>
            <section className='mb-60'>
                <NewPost />
            </section>
            <section className='container flex items-center flex-col space-y-8 lg:space-y-0 lg:flex-row relative'>
                <div className='absolute -z-10 blur-sm opacity-20 right-0 kotoha'>
                    <img
                        src='https://hakoniwalily.jp/cms/wp-content/uploads/2023/01/b9155f633d539d8d62a45bef29b75f59.jpg'
                        className='w-[700px]'
                    />
                </div>
                <img
                    src='https://hakoniwalily.jp/cms/wp-content/themes/hakoniwalily/assets/img/top/sd_kotoha.png'
                    className='absolute lg:block right-0 lg:-bottom-28 lg:h-44 h-36 hidden'
                />
                <div className='lg:w-3/12'>
                    <label className='text-xl text-gray-600'>同人MINI ALBUM</label>
                    <h3 className='text-4xl tracking-widest font-medium mt-2 text-primary'>Winter Vox</h3>
                </div>
                <div className='lg:w-6/12 justify-center items-center flex'>
                    <img
                        src='https://hakoniwalily.jp/cms/wp-content/uploads/2023/01/b9155f633d539d8d62a45bef29b75f59.jpg'
                        className='w-[500px]'
                    />
                </div>
                <div className='lg:w-3/12 flex justify-end'>
                    <div className='flex items-center space-x-2'>
                        <label className='text-xl text-gray-500'>Release All</label>
                        <div className='border h-16 w-16 flex justify-center items-center rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </MainLayout>
    )
}

export default HomeView