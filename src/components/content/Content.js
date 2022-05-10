import React, { useEffect } from 'react'
import { Container } from '../../globalStyles'
import {
	ContentSec,
	ContentRow,
	TextWrapper,
	TopLine,
	Heading,
	Subtitle,
	ImgWrapper,
	Img,
	ContentColumn,
} from './ContentStyles'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import Tilt from 'react-parallax-tilt'

const Content = ({ topLine, headline, description, img, alt, backgroundColor, inverse, reverse, bigImage }) => {
	const initial = { opacity: 0, y: 30 }
	const transition = { delay: 0.3, duration: 0.6 }
	const animation = useAnimation()

	const { ref, inView } = useInView({
		threshold: 0.2,
	})

	useEffect(() => {
		if (inView) {
			animation.start({
				opacity: 1,
				y: 0,
			})
		}
	}, [inView, animation])

	return (
		<ContentSec ref={ref}>
			<Container>
				<ContentRow reverse={reverse}>
					<ContentColumn>
						<TextWrapper>
							<TopLine initial={initial}>{topLine.text}</TopLine>
							<Heading initial={initial}>{headline}</Heading>
							<Subtitle initial={initial} inverse={inverse}>
								{description}
							</Subtitle>
						</TextWrapper>
					</ContentColumn>
					<ContentColumn initial={initial} transition={transition} animate={animation} bigImage={bigImage}>
						<Tilt className='Tilt' options={{ max: 20, scale: 1.9, speed: 150 }}>
							<ImgWrapper backgroundColor={backgroundColor}>
								<Img src={img} alt={alt} whileHover={{ scale: 1.9 }} transition={{ duration: 0.5 }} />
							</ImgWrapper>
						</Tilt>
					</ContentColumn>
				</ContentRow>
			</Container>
		</ContentSec>
	)
}

export default Content
