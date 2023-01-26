import React, { FC, PropsWithChildren, useEffect } from 'react'
import AnimationLayout from './AnimationLayout'
import { FiArrowLeft } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

interface Props {
    title: string,
    subtitle: string,
    isBack?: boolean
}
const Section: FC<PropsWithChildren<Props>> = ({ title, children, subtitle, isBack }) => {
    useEffect(() => {
        document.title = subtitle
    }, [])

    const navigation = useNavigate();

    return (
        <AnimationLayout>
            <div className='container lg:mt-44 mt-36'>
                <div className='flex justify-center items-center'>
                    <div className='flex flex-col justify-center items-center'>
                        <img
                            src='https://hakoniwalily.jp/cms/wp-content/themes/hakoniwalily/assets/img/common/deco_lily.svg' className='h-8 w-8  mb-3'
                        />
                        <div className='flex justify-between items-center space-x-10'>
                            <div className='bg-[url("https://hakoniwalily.jp/cms/wp-content/themes/hakoniwalily/assets/img/common/deco_twinkle.svg")] h-4 w-4 bg-no-repeat' />
                            <h5 className='text-primary-500 text-5xl uppercase text-center'>{title}</h5>
                            <div className='bg-[url("https://hakoniwalily.jp/cms/wp-content/themes/hakoniwalily/assets/img/common/deco_twinkle.svg")] h-4 w-4 bg-no-repeat' />
                        </div>
                        <div className='text-primary-400 text-sm   text-center'>Hanon & Kotoha</div>
                    </div>
                </div>
                <div className='mt-16 mb-16'>
                    {children}
                </div>
                {isBack && <div className='flex justify-center'>
                    <button className='flex items-center space-x-5' onClick={() => navigation(-1)}>
                        <FiArrowLeft size={24} className="text-primary-500" />
                        <span className='uppercase text-xl text-primary-500'>Back</span>
                    </button>
                </div>}
            </div>
        </AnimationLayout>
    )
}

export default Section