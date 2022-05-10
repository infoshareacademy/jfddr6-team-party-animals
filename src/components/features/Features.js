import React from 'react'
import { Container } from '../../globalStyles';
import {
	FeatureText,
	FeatureSection,
	FeatureTitle,
	FeatureWrapper,
	FeatureColumn,
	FeatureImageWrapper,
	FeatureName,
	FeatureTextWrapper,
} from './FeaturesStyles'

import { featuresData } from '../../data/FeaturesData'

const Features = () => {
	return (
		<FeatureSection id='about'>
			<Container>
				<FeatureTextWrapper>
					<FeatureTitle>Creative Grooming Cuts And Styles</FeatureTitle>

				</FeatureTextWrapper>
				<FeatureWrapper>
					{featuresData.map((el, index) => (
						<FeatureColumn key={index}>
							<FeatureImageWrapper className={el.imgClass}>{el.icon}</FeatureImageWrapper>
							<FeatureName>{el.name}</FeatureName>
							<FeatureText>{el.description}</FeatureText>
						</FeatureColumn>
					))}
				</FeatureWrapper>
			</Container>
		</FeatureSection>
	)
}

export default Features
