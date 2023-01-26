import React, { useEffect } from 'react'
import { IconButton, NewNewsContent, NewPostContent } from '../../components'
import { FiArrowUpRight, FiArrowRight } from 'react-icons/fi'

const HomeView = () => {
    return (
        <div>
            <section className='flex items-center relative mb-28'>
                <div className='lg:w-4/12 hidden lg:flex relative'>
                    <img src='/logo.svg' className='h-40 ml-20 -mt-14 ' />
                </div>
                <div className='lg:w-8/12 w-full'>
                    <div className='lg:h-[800px] h-[500px]'>
                        <img
                            src='https://hakoniwalily.jp/cms/wp-content/uploads/2022/08/Hakoniwa_KyorikanJK0303.jpg'
                            className='h-full w-full object-top object-cover'
                        />
                    </div>
                </div>
            </section>
            <section className='lg:mb-60 mb-40'>
                <NewPostContent />
            </section>
            <section className='container flex items-center flex-col space-y-8 lg:space-y-0 lg:flex-row relative lg:mb-60 mb-36'>
                <div className='absolute -z-10 blur-sm opacity-20 right-0'>
                    <img
                        src='https://hakoniwalily.jp/cms/wp-content/uploads/2021/07/img_2nd-album.jpg'
                        className='w-[700px]'
                    />
                </div>
                <img
                    src='https://hakoniwalily.jp/cms/wp-content/themes/hakoniwalily/assets/img/top/sd_kotoha.png'
                    className='absolute lg:block right-0 lg:-bottom-28 lg:h-44 h-36 hidden '
                />
                <div className='lg:w-3/12 order-2 lg:order-first w-full'>
                    <label className='lg:text-xl text-left text-lg  text-gray-600'>同人MINI ALBUM</label>
                    <h3 className='lg:text-4xl text-2xl tracking-widest  font-medium mt-5 text-primary-500'>ずっといっしょ</h3>
                </div>
                <div className='lg:w-6/12 justify-center items-center flex order-first lg:order-2'>
                    <img
                        src='https://hakoniwalily.jp/cms/wp-content/uploads/2021/07/img_2nd-album.jpg'
                        className='w-[500px]'
                    />
                </div>
                <div className='lg:w-3/12 flex lg:justify-end order-last w-full'>
                    <IconButton title='Release All'>
                        <FiArrowUpRight color='#3A2E26' size={24} />
                    </IconButton>
                </div>
            </section>
            <section className='container'>
                <div className='flex justify-between items-center mb-16'>
                    <h4 className='text-4xl '>NEWS</h4>
                    <IconButton title='Release All'>
                        <FiArrowRight color='#3A2E26' size={24} />
                    </IconButton>
                </div>
                <NewNewsContent />
            </section>
        </div>
    )
}

export default HomeView