import React from 'react'
import { newsDummy } from '../../assets/dummy'
import { News, Section } from '../../components'

const NewsView = () => {
    return (
        <Section title="News" subtitle="NEWS | ハコニワリリィ">
            <div>
                {newsDummy.map((item, index) => <News {...item} key={index.toString()} />)}
            </div>
        </Section>
    )
}

export default NewsView