import React, { FC } from 'react'
import Header from '../Header'
import { Outlet } from 'react-router-dom'
import { FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

interface Props {
    hideLogo?: boolean
}
const MainLayout: FC<Props> = ({ hideLogo }) => {
    return (
        <div>
            <Header hideLogo={hideLogo} />
            <div className='mb-36 mt-24'>
                <Outlet />
            </div>
            <footer className='bg-primary-500 container py-3 flex  justify-between items-end lg:items-center'>
                <div className='flex lg:space-x-8 space-y-3 lg:space-y-0 lg:flex-row flex-col'>
                    <a href='#' className='flex items-center space-x-3'>
                        <FaTwitter size={18} color="#C3B09B" />
                        <div className='text-primary-300 text-sm'>HaKoniwalily,Hanon,Kotoha</div>
                    </a>
                    <a href='#' className='flex items-center space-x-3'>
                        <FaYoutube size={18} color="#C3B09B" />
                        <label className='text-primary-300 text-sm'>HaKoniwalily,Hanon,Kotoha</label>
                    </a>
                    <a href='#' className='flex items-center space-x-3'>
                        <FaInstagram size={18} color="#C3B09B" />
                        <label className='text-primary-300 text-sm'>Hanon,Kotoha</label>
                    </a>

                </div>
                <label className='text-primary-300'>© HaKoniwalily</label>
            </footer>
        </div>
    )
}

export default MainLayout