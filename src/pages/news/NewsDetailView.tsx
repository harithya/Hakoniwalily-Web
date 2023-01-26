import React from 'react'
import { Divider, Section } from '../../components'

const NewsDetailView = () => {
    return (
        <Section title='News' subtitle='Hanon×Kotoha×HoneyWorks「Winter Vox」通販開始のお知らせ' isBack={true}>
            <div className='mb-14'>
                <div className='text-md mb-3 text-primary-500/80 space-x-3'>
                    <span>2022.12.22</span>
                    <span>{`{NEWS}`}</span>
                    <span>{`{RELEASE}`}</span>
                </div>
                <h4 className='lg:text-3xl text-xl text-primary-500 font-japanese'>Hanon×Kotoha×HoneyWorks「Winter Vox」通販開始のお知らせ</h4>
            </div>
            <Divider />
            <div className="text-primary-500/80 mt-14 leading-8 font-japanese text-md">
                <p>MIMiNARIの2nd EPから「足りない feat.Kotoha」が収録予定です。<br />是非チェックしてください。<br /><br /></p>
                <p>【MIMiNARI 「厭わない EP」 リリース情報】</p>
                <p>CDのご予約はコチラ：
                    <strong>
                        <a href="https://miminari.lnk.to/itowanaiep_pkg" className='bg-primary-500 text-white'>https://miminari.lnk.to/itowanaiep_pkg</a>
                    </strong><br /></p>
                <p><br />▼商品タイトル：MIMiNARI 「厭わない EP」（ヨミ：イトワナイイーピー）<br /><br />▼発売日：2023年3月22日（水）</p>
                <p><br />▼仕様・品番・価格<br />初回生産限定盤[CD+DVD]　VVCL-2197~8　￥1,870(税込)<br />☆初回生産限定盤DVD内容：ミュージックビデオ収録<br />☆スリーブケース仕様・イラストブックレット封入</p>
                <p><br />初回仕様限定盤[CD]　VVCL-2199　￥1,375(税込)</p>
                <p><br />期間生産限定盤[CD+DVD]　VVCV-2200~1　￥1,870(税込)<br />　☆期間生産限定盤DVD内容：<br />■TV アニメ「あやかしトライアングル」ノンクレジットエンディング映像収録<br />　　 ★ミニポスター封入・デジパック仕様</p>
                <p><br />▼収録楽曲：<br />M1：「厭わない feat. 富田美憂,市ノ瀬加那」<br />※TVアニメ 『あやかしトライアングル』エンディングテーマ<br />M2：「とけない feat.EMA」<br />M3：「褪せない feat.りりあ。」<br />M4：「足りない feat.Kotoha」<br />M5：「厭わない feat. 富田美憂,市ノ瀬加那 -TV version-」<br />※期間生産限定盤のみに収録</p>
            </div>
        </Section>
    )
}

export default NewsDetailView