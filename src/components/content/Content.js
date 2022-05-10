import React, { useEffect } from 'react'
import { Container, Section } from '../../globalStyles'
import { ContentRow, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img, ContentColumn } from './ContentStyles'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import Tilt from 'react-parallax-tilt'

const Content = ({ topLine, headline, description, img, alt, backgroundcolor, inverse, reverse, bigimage }) => {
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
		<Section inverse={inverse} ref={ref}>
			<Container>
				<ContentRow reverse={reverse}>
					<ContentColumn>
						<TextWrapper>
							<TopLine>{topLine.text}</TopLine>
							<Heading>{headline}</Heading>
							<Subtitle inverse={inverse}>{description}</Subtitle>
						</TextWrapper>
					</ContentColumn>
					<ContentColumn transition={transition} animate={animation} bigimage={bigimage}>
						<Tilt className='Tilt' options={{ max: 20, scale: 1.9, speed: 150 }}>
							<ImgWrapper backgroundcolor={backgroundcolor}>
								<Img src={img} alt={alt} whileHover={{ scale: 1.9 }} transition={{ duration: 0.5 }} />
							</ImgWrapper>
						</Tilt>
					</ContentColumn>
				</ContentRow>
			</Container>
		</Section>
	)
}

export default Content
