import React, { FC, PropsWithChildren } from 'react'
import Header from '../Header'

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}

export default MainLayout