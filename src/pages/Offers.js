import React from 'react'
import { Heading } from '../globalStyles'
import { offerFour, offerOne, offerThree, offerTwo } from '../data/OfferData'
import Offer from '../components/Offer'

const Offers = () => {
	return (
		<>
			<Heading id='offer'>Our Offer</Heading>
			<Offer {...offerOne} />
			<Offer {...offerTwo} />
			<Offer {...offerThree} />
			<Offer {...offerFour} />
		</>
	)
}

export default Offers
