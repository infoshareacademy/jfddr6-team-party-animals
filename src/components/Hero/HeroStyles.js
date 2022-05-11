import styled from 'styled-components'
import { Section } from '../../globalStyles'
import { motion } from 'framer-motion'

export const HeroSection = styled(Section)`
	background-image: linear-gradient(to bottom right, #e0e4e5, #dfb06e, #020024);
	background-size: cover;
	background-attachment: fixed;
	z-index: 11;
	align-items: center;
	height: 640px;
	position: relative;
	display: flex;

	@media screen and (min-width: 768px) {
		height: 592px;
	}

	@media screen and (min-width: 992px) {
		height: 710px;
	}

	@media screen and (min-width: 1200px) {
		height: 1200px;
	}
`

export const HeroImage = styled.img`
	z-index: 10;
	position: absolute;
	left: 0;
	object-fit: cover;

	&.pattern {
		height: 100%;
		max-height: 100%;
		top: 0;
		max-width: 100%;
	}

	&.cat {
		bottom: 0;
		width: 800px;
		left: 0px;
	}
`

export const ImageCharacter = styled.img`
	z-index: 11;
	position: absolute;
	width: clamp(90px, 15vw, 200px);
	left: auto;
	}

	&.picTwo {
		bottom: 2.5rem;
		right: 100px;
		width: 350px;
		z-index: 100;
		@media screen and (max-width: 768px) {
			right: 50px;
		}
	}

	&.picThree {
		top: 180px;
		left: 450px;
		width:600px;
		

		@media screen and (max-width: 768px) {
			display: none;
		}
	}
`

export const CharacterContainer = styled.div`
	width: 100%;
	max-width: 1300px;
	height: 100%;
	left: 50%;
	transform: translateX(-50%);
	position: absolute;
`
export const HeroContent = styled.div`
	width: 100%;
	padding: 0 15px;
	z-index: 10;
	position: relative;
`

export const Heading = styled.h1`
	margin-bottom: 90px;
	font-size: clamp(3rem, 6vw, 6.7rem);
	line-height: 1.1;
	font-weight: 700;
	text-align: center;
	color: white;
`

export const HeroText = styled.div`
	margin-bottom: 100px;
	text-align: center;
	font-size: clamp(0.9rem, 1.5vw, 1.3rem);
`
export const ButtonContainer = styled.div`
	position: relative;
	display: flex;
	height: 170px;
`
export const ButtonWrapper = styled.div`
	position: absolute;
	height: 100vh;
	width: 100%;
	left: 0;
	top: 0;
`

export const HeroButton = styled(motion.button)`
	position: absolute;
	width: 250px;
	margin: 0 auto;
	padding: 15px 20px;
	bottom: calc(100vh-100px);
	right: 50%;
	transform: translate(50%);
	font-weight: 700;
	font-size: 0.688rem;
	line-height: 18px;
	letter-spacing: 1.54px;
	text-transform: uppercase;
	border-radius: 25px;
	border: none;
	background-color: white;
	color: #dfb06e;
	cursor: pointer;
	transition: all 0.4s ease-in;

	&::before {
		pointer-events: none;
		content: '';
		position: absolute;
		background: white;
		top: 60%;
		left: 0;
		width: 100%;
		height: 100%;
		transform: perspective(8px) rotateX(20deg) scale(1, 0.35);
		filter: blur(1em);
		opacity: 0.9;
	}

	&.corner {
		position: fixed;
		bottom: 3rem;
		right: 3rem;
		width: 64px;
		height: 64px;
		padding: 10px;
		background-color: #dfb06e;
		border-radius: 50%;
	}

	&:hover {
		box-shadow: 0 0 9px 9px #dfb06e;
		transition: box-shadow 03s ease-in;
	}
`
