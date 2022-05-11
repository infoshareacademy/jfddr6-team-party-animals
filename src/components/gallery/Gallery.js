import React from 'react'
import { motion, MotionConfigContext } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Images from './Images'

import React from 'react'

const Gallery = () => {
	return (
		<motion.div className='carousel'>
			<motion.div className='inner-carousel'></motion.div>
		</motion.div>
	)
}

export default Gallery
