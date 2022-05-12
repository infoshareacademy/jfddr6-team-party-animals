import React from 'react'
import { motion, MotionConfigContext } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Images from './Images'


const Gallery = () => {
	return (
		<div className='container'>
			<motion.div className='carousel'>
				<motion.div className='inner-carousel'>
					{Images.map(img => {
						return (
							<motion.div className='item'>
								<img src={img} alt='/' />
							</motion.div>
						)
					})}
				</motion.div>
			</motion.div>
		</div>
	)
}

export default Gallery
