import React, { FC, useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Drawer from './Drawer';

interface Props {
    hideLogo?: boolean
}
export const links = [
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

interface PropsMenu {
    title: string,
    url: string,
    className?: string
}
export const MenuItem: FC<PropsMenu> = ({ title, url, className }) => {
    return (
        <li className={`uppercase hover:border-b border-b-primary-500 transition-all duration-500 text-[20px] text-gray-600 ${className}`}>
            <Link to={url}>{title}</Link>
        </li>
    )
}

const Header: FC<Props> = ({ hideLogo }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleDrawer = () => {
        setIsOpen(!isOpen)
    }

    const location = useLocation();
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname])


    return (
        <>
            <header className={`container lg:px-16 lg:h-28  h-auto py-2 lg:py-0  flex flex-row   lg:fixed absolute top-0 right-0 left-0 z-20`}>
                <div className='flex lg:justify-between justify-center w-full items-center'>
                    <Link to={'/'}>
                        <img src='/logo.svg' className={`h-16 lg:${hideLogo ? 'hidden' : 'block'} block`} />
                    </Link>
                    <ul className='lg:flex hidden space-x-8'>
                        {links.map((val, key: number) => <MenuItem title={val.title} url={val.url} key={key.toString()} />)}
                    </ul>
                </div>
            </header>
            <button className='lg:hidden fixed right-8 top-8 z-30' onClick={toggleDrawer}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                </svg>
            </button>
            <Drawer isOpen={isOpen} onClose={toggleDrawer} />
        </>
    )
}

export default Header