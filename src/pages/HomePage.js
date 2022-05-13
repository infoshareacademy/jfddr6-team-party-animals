import React, { useState } from 'react'
import Hero from './../components/Hero/Hero'
import Content from './../components/content/Content'
import Features from '../components/features/Features'
import { partOne, partTwo } from '../data/HeroData'
import { Heading } from '../globalStyles'
import { offerOne, offerTwo } from '../data/OfferData'
import Offer from '../components/Offer'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../db'

const HomePage = () => (
	<>
		<Hero />
		<Features />
		<Heading id='offer'>Our Offer</Heading>
		<Content {...partOne} />
		<Content {...partTwo} />
	</>
)

export default HomePage
