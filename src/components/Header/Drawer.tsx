import React, { FC } from 'react'
import { FiX } from 'react-icons/fi'
import { links, MenuItem } from '.'

interface Props {
    isOpen?: boolean,
    onClose?: () => void,
}
const Drawer: FC<Props> = ({ isOpen, onClose }) => {
    return (
        <div className={`${isOpen ? 'fixed' : 'hidden'} top-0 bottom-0 right-0 left-0 bg-white z-50 p-2`}>
            <div className='w-full h-full border border-primary-500 p-5'>
                <div className="flex justify-end">
                    <button onClick={onClose}>
                        <FiX size={24} className="text-primary-500" />
                    </button>
                </div>

                <img src='/logo.svg' className={`h-24 block mx-auto mt-10`} />
                <div className='flex w-full mt-16'>
                    <ul className='grid grid-cols-2 gap-5 w-full'>
                        {links.map((val, key) =>
                            <MenuItem
                                key={key.toString()}
                                {...val}
                                className="text-2xl hover:border-b-0"
                            />)}
                    </ul>
                </div>
                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis at vitae odio. Officiis dolore neque, minima sunt laboriosam fugit soluta blanditiis impedit, cum aut obcaecati pariatur eius natus perspiciatis! Et. */}
            </div>
        </div>
    )
}

export default Drawer