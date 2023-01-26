import React, { FC, PropsWithChildren } from 'react'
import { motion } from "framer-motion"

const AnimationLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, }}
            animate={{
                opacity: 1,
            }}
            transition={{ duration: 0.75, }}>

            {children}
        </motion.div>
    )
}

export default AnimationLayout