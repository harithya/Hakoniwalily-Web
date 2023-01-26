import React, { FC } from 'react'
import { Link } from 'react-router-dom'

interface Props {
    hideLogo?: boolean
}
const Header: FC<Props> = ({ hideLogo }) => {
    const links = [
        {
            title: "Top",
            url: "/"
        },
        {
            title: "News",
            url: "/news"
        },
        {
            title: "Profile",
            url: "/profile",
        },
        {
            title: "Release",
            url: "/release",
        },
    ];
    return (
        <>
            <header className={`container lg:px-16 lg:h-28 ${!hideLogo && 'bg-white/50 backdrop-blur-md'} h-auto py-2 lg:py-0  flex flex-row   lg:fixed absolute top-0 right-0 left-0 z-20`}>
                <div className='flex lg:justify-between justify-center w-full items-center'>
                    <Link to={'/'}>
                        <img src='/logo.svg' className={`h-16 lg:${hideLogo ? 'hidden' : 'block'} block`} />
                    </Link>
                    <ul className='lg:flex hidden space-x-8'>
                        {links.map((item, key: number) =>
                            <li key={key.toString()} className="uppercase hover:border-b border-b-primary-500 transition-all duration-500 text-[20px] text-gray-600">
                                <Link to={item.url}>{item.title}</Link>
                            </li>)}
                    </ul>
                </div>
            </header>
            <button className='lg:hidden fixed right-8 top-8 z-30'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                </svg>
            </button>
        </>
    )
}

export default Header