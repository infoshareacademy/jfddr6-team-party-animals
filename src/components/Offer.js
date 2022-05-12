import { Container, Section } from '../globalStyles'
import {
	ContentRow,
	TextWrapper,
	offerText,
	Heading,
	Subtitle,
	ImgWrapper,
	Img,
	ContentColumn,
} from '../pages/offerpage/OfferStyles'
import { useInView } from 'react-intersection-observer'

const Offer = ({ offerText, headline, description, img,backgroundcolor, inverse, reverse, bigimage }) => {
	const { ref } = useInView({
		threshold: 0.2,
	})

	return (
		<Section inverse={reverse} ref={ref}>
			<Container>
				<ContentRow reverse={inverse}>
					<ContentColumn>
						<TextWrapper>
							<>{offerText ? offerText.text : ''}</>

							<Heading>{headline}</Heading>
							<Subtitle inverse={inverse}>{description}</Subtitle>
						</TextWrapper>
					</ContentColumn>
					<ContentColumn bigimage={bigimage}>
						<ImgWrapper backgroundcolor={backgroundcolor}>
							<Img src={img} />
						</ImgWrapper>
					</ContentColumn>
				</ContentRow>
			</Container>
		</Section>
	)
}

export default Offer
