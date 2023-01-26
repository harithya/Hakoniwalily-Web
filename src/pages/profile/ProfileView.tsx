import React from 'react'
import { Section } from '../../components'
import { FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa'

const ProfileView = () => {
    return (
        <Section title='Profile'>
            <div className='lg:px-32 px-0'>
                <img
                    className='mb-16'
                    src='https://hakoniwalily.jp/cms/wp-content/themes/hakoniwalily/assets/img/profile/img_profile.jpg'
                />
                <div>
                    <h6 className='text-center text-primary-500 text-3xl mb-5'>ハコニワリリィ</h6>
                    <p className='font-japanese leading-8 tracking-widest text-primary-500'>圧倒的な歌唱力で幅広いジャンルを歌い上げる『Hanon』と、透き通る歌声で聴くもの全てを魅了する『Kotoha』からなるYouTubeや配信をメインに活動している女性ユニット。
                        関連動画総再生回数8億回を超えるクリエイターユニットHoneyWorksのゲストボーカルも務めている。
                        YouTubeチャンネルの登録者数、Twitterのフォロワー数は共に急上昇中。今まで二人が歌唱した動画の総再生回数は1億回を突破している。
                        これまでインディーズとしてHoneyWorksプロデュースのもと、2枚のフルアルバムをリリース。そして2021年夏、TVアニメ『SDガンダムワールド ヒーローズ』EDテーマに抜擢されメジャーデビュー！！さらに、2ndシングル『キョリ感』はアニメ『阿波連さんははかれない』のエンディングテーマに大抜擢された。 メジャーデビュー前に東京・品川インターシティーホールにて開催したワンマンライブのチケットは昼夜公演ともに即完。 2022年6月25日に同所にて開催されたハコニワリリィとして初となる1stワンマンライブ『Lily’s Garden Party』もチケットは 両部ともソールドアウト。 2022年11月には初のツアー『ハコニワリリィLive Tour 〜Lily‘s Plage〜』を開催。
                    </p>
                </div>
                <div className='flex lg:justify-evenly items-center flex-col lg:flex-row lg:space-y-0 space-y-10 mt-10'>
                    <div className='lg:w-96 w-80'>
                        <img src='https://hakoniwalily.jp/cms/wp-content/themes/hakoniwalily/assets/img/profile/img_hanon.jpg' />
                        <div className='mt-5 flex justify-between'>
                            <h6 className='text-xl text-primary-500'>Hanon</h6>
                            <div className='flex space-x-3'>
                                <FaTwitter size={20} className="text-primary-500" />
                                <FaYoutube size={20} className="text-primary-500" />
                                <FaInstagram size={20} className="text-primary-500" />
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-96 w-80'>
                        <img src='https://hakoniwalily.jp/cms/wp-content/themes/hakoniwalily/assets/img/profile/img_kotoha.jpg' />
                        <div className='mt-5 flex justify-between'>
                            <h6 className='text-xl text-primary-500'>Kotoha</h6>
                            <div className='flex space-x-3'>
                                <FaTwitter size={20} className="text-primary-500" />
                                <FaYoutube size={20} className="text-primary-500" />
                                <FaInstagram size={20} className="text-primary-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default ProfileView