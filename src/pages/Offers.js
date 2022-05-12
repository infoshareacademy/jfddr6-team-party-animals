import React from 'react'
import { Heading } from '../globalStyles'
import { offerFour, offerOne, offerThree, offerTwo } from '../data/OfferData'
import Offer from '../components/Offer'
import NavbarWrapp from '../components/NavbarWrapp'

const Offers = () => {
	return (
		<>
			<NavbarWrapp />
			<Heading id='offer'>Our Offer</Heading>
			<Offer {...offerOne} />
			<Offer {...offerTwo} />
            <Offer {...offerThree}/>
            <Offer {...offerFour}/>
		</>
	)
}

export default Offers
