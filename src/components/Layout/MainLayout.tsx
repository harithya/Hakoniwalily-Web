import React, { FC, PropsWithChildren } from 'react'
import Header from '../Header'
import { Outlet } from 'react-router-dom'

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
            <footer className='bg-primary-500 container py-3 flex  justify-between'>
                <div className='flex space-x-10'>
                    <div className='flex items-center space-x-3'>
                        <svg className=" h-6 w-6 fill-primary-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
                            <path className="p-f-link__cap-path text-white" d="M450.638,2276.27a15.343,15.343,0,0,1-4.382,1.21,7.7,7.7,0,0,0,3.355-4.23,15.338,15.338,0,0,1-4.846,1.85,7.645,7.645,0,0,0-13,6.98,21.642,21.642,0,0,1-15.729-7.99,7.667,7.667,0,0,0,2.362,10.21,7.623,7.623,0,0,1-3.457-.95v0.09a7.643,7.643,0,0,0,6.121,7.5,7.411,7.411,0,0,1-2.01.27,7.551,7.551,0,0,1-1.436-.14,7.657,7.657,0,0,0,7.128,5.32,15.294,15.294,0,0,1-9.477,3.27,15.617,15.617,0,0,1-1.82-.11,21.566,21.566,0,0,0,11.7,3.44c14.036,0,21.712-11.66,21.712-21.77,0-.33-0.008-0.66-0.022-0.98A15.492,15.492,0,0,0,450.638,2276.27Z" transform="translate(-412.031 -2267.845)" />
                        </svg>
                        <label className='text-primary-300 text-sm'>HaKoniwalily,Hanon,Kotoha</label>
                    </div>
                </div>
                <label className='text-primary-300'>© HaKoniwalily</label>
            </footer>
        </div>
    )
}

export default MainLayout