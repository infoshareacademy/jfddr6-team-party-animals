import React, { useEffect, useState } from 'react'
import { FiMail } from 'react-icons/fi'
import {
	HeroSection,
	Heading,
	HeroText,
	ButtonContainer,
	HeroButton,
	ImageCharacter,
	HeroImage,
	HeroContent,
	ButtonWrapper,
	CharacterContainer,
} from './HeroStyles'
import { useInView } from 'react-intersection-observer'
import Modal from '../Modal/Modal'

const Hero = () => {
	const [showModal, setShowModal] = useState(false)

	const toggleModal = () => {
		if (!showModal) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'visible'
		}
		setShowModal(!showModal)
	}

	const { ref, inView } = useInView({
		rootMargin: '-100px',
	})
	useEffect(() => {
		console.log(inView)
	}, [inView])

	return (
		<>
			<HeroSection id='hero'>
				<HeroImage className='pattern' src={`${process.env.PUBLIC_URL}/images/hero-pattern-bg-lg.png`} />
				<HeroImage className='cat' src={`${process.env.PUBLIC_URL}/images/hero-cat-1.png`} />
				<CharacterContainer>
					<ImageCharacter className='picTwo' src={`${process.env.PUBLIC_URL}/images/image 2.png`} />
					<ImageCharacter className='picThree' src={`${process.env.PUBLIC_URL}/images/image 3.png`} />
				</CharacterContainer>
				<HeroContent>
					<Heading>Grooming Stars</Heading>
					<HeroText>We Are Always At Your Pet's Service!</HeroText>
					<ButtonContainer ref={ref}>
						<ButtonWrapper>
							<HeroButton onClick={toggleModal} className={inView ? '' : 'corner'}>
								{inView ? <>Just TRY</> : <FiMail color='white' size='2.3rem' />}
							</HeroButton>
						</ButtonWrapper>
					</ButtonContainer>
				</HeroContent>
			</HeroSection>
			<Modal showModal={showModal} toggleModal={toggleModal} />
		</>
	)
}

export default Hero
