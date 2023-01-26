import React from 'react'
import NewPost from '../List/NewPost'


const NewPostContent = () => {
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

    return (
        <div className='container'>
            <div className='space-y-10'>
                {data.map((val, key: number) =>
                    <NewPost key={key.toString()} {...val} />
                )}
            </div>
        </div>
    )
}

export default NewPostContent