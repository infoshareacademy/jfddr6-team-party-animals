import React from 'react'
import { FaBone } from 'react-icons/fa'
import { RiScissors2Fill } from 'react-icons/ri'
import { FaBath } from 'react-icons/fa'

const iconStyle = Icon => <Icon size='3rem' color='#fefefe' />

export const featuresData = [
	{
		name: 'Full Gromming Services',
		description: 'Full body haircut, length taken off all over body',
		icon: iconStyle(RiScissors2Fill),
		imgClass: 'gromming',
	},
	{
		name: 'Shampoo and Conditioner',
		description: 'Aromatherapy mist, Bow or bandana',
		icon: iconStyle(FaBath),
		imgClass: 'shampoo',
	},
	{
		name: 'Teeth Brushed',
		description: 'Washing paste with a wild strawberry flavor',
		icon: iconStyle(FaBone),
		imgClass: 'teeth',
	},
]
