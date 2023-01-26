import React from 'react'
import dummy from '../../assets/dummy'
import { News, Section } from '../../components'

const NewsView = () => {
    return (
        <Section title="News">
            <div>
                {dummy.map((item, index) => <News {...item} key={index.toString()} />)}
            </div>
        </Section>
    )
}

export default NewsView