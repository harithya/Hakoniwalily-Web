import React from 'react'
import { singleDummy } from '../../assets/dummy'
import { Section } from '../../components'
import Release from '../../components/List/Release'

const ReleaseView = () => {
    return (
        <Section title='Release'>
            <div className='grid lg:grid-cols-3 grid-cols-2 lg:gap-20 gap-10'>
                {singleDummy.map((val, key) => <Release key={key.toString()} {...val} />)}
            </div>
        </Section>
    )
}

export default ReleaseView