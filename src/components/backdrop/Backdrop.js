import React from 'react';


import { motion, MotionConfig } from "framer-motion"

const Backdrop =({childern, onClick}) => {
    return (
        <motion.div>
        className='backdrop'
        onClick={onClick}
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity}}
        </motion.div>

    );
};
export default Backdrop;