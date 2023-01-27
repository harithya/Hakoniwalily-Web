import React from 'react'
import { Section } from '../../components'
import { FiArrowUpRight } from 'react-icons/fi'

const ReleaseDetailView = () => {
    return (
        <Section title='RELEASE' subtitle='2nd Single キョリ感　～Kotoha盤～ | ハコニワリリィ' isBack>
            <div className='grid lg:grid-cols-2 gap-20 items-center'>
                <div>
                    <img
                        src='https://hakoniwalily.jp/cms/wp-content/uploads/2022/06/HAKOLILY_SMCL770_JKP.jpg'
                    />
                </div>
                <div>
                    <div className='flex flex-col space-y-3'>
                        <span className='font-japanese text-primary-500'>2nd Single</span>
                        <h4 className='lg:text-3xl text-xl text-primary-500 font-japanese'>キョリ感 ~Kotoha盤~</h4>
                        <label className='font-japanese text-xl text-primary-500 tracking-widest'>2022.06.01 RELEASE</label>
                    </div>
                    <div className='text-primary-500/80 mt-5 leading-8 font-japanese text-sm'>
                        <p>「ハコニワリリィ」2ndシングル！アニメ『阿波連さんははかれない』エンディングテーマ
                        </p>
                        <br />
                        <ol className='list-decimal ml-5'>
                            <li>キョリ感<br />
                                作詞作曲：MARUMOCHI BOYS</li>
                            <li>叶わぬ恋じゃ終われない！<br />
                                作詞：Kaoru,あかね　作曲：Kaoru</li>
                            <li>虹とニラ<br />
                                作詞作曲：コミヤマリオ</li>
                            <li>キョリ感【Instrumental】<br />
                                作詞作曲：MARUMOCHI BOYS</li>
                            <li>叶わぬ恋じゃ終われない！【Instrumental】<br />
                                作詞：Kaoru,あかね　作曲：Kaoru</li>
                            <li>虹とニラ【Instrumental】<br />
                                作詞作曲：コミヤマリオ</li>
                        </ol>

                        <div className='mt-5 grid grid-cols-2 gap-5 relative'>
                            <img
                                src='https://hakoniwalily.jp/cms/wp-content/themes/hakoniwalily/assets/img/release/sd_hanon.png'
                                className='absolute lg:block right-0  bottom-12 lg:h-44 h-36 hidden'
                            />
                            <button className='w-full border py-2 border-primary-500 flex justify-between items-center px-5'>
                                <label>配信サイト</label>
                                <FiArrowUpRight size={18} className="text-primary-500" />
                            </button>
                            <button className='w-full border py-2 border-primary-500 flex justify-between items-center px-5'>
                                <label>CDご購入はこちら</label>
                                <FiArrowUpRight size={18} className="text-primary-500" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default ReleaseDetailView