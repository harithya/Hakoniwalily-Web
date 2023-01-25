import React from 'react'

const Header = () => {

    const links = ['Top', 'News', 'Profile', 'Release'];
    return (
        <div className='container lg:px-16 lg:py-8 py-5'>
            <div className='flex lg:justify-between justify-center items-center'>
                {/* <img src='/logo.svg' className='h-16' /> */}
                <div>

                </div>
                <ul className='lg:flex hidden space-x-8'>
                    {links.map((item, key: number) =>
                        <li key={key.toString()} className="uppercase text-[20px] text-gray-600">
                            <a href='#'>{item}</a>
                        </li>)}
                </ul>
            </div>
            <button className='lg:hidden fixed right-8 top-8'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                </svg>
            </button>
        </div>
    )
}

export default Header