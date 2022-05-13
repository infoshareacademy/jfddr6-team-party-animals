import VisitList from './VisitList'
import BookAVisit from './BookAVisit'
import ReviewList from './ReviewList'
import { Container, ContentRow, NavLink } from './CustomerPortalStyles'

const CustomerPortal = ({ userUid }) => {
	return (
		<>
			<Container>
				<ContentRow>
					<div>
						<VisitList />
						<BookAVisit userUid={userUid} />
						<ReviewList />
						<NavLink to='/makereview'>Add review</NavLink>
					</div>
				</ContentRow>
			</Container>
		</>
	)
}

export default CustomerPortal
