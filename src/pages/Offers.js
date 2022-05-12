import React from 'react'
import Hero from './../components/Hero/Hero'
import Content from './../components/content/Content'
import Features from '../components/features/Features'
import { partOne, partTwo } from '../data/HeroData'
import { Heading } from '../globalStyles'
import { offerOne, offerTwo } from '../data/OfferData'
import Offer from '../components/Offer'

const Offers = () => {
	return (
		<>
			<Heading id='offer'>Our Offer</Heading>
			<Offer {...offerOne} />
			<Offer {...offerTwo} />
		</>
	)
}

export default Offers
