import VisitList from './VisitList';
import BookAVisit from './BookAVisit';
import MakeReview from './MakeReview';
import ReviewList from './ReviewList';
import { Link } from 'react-router-dom';
import { Container, ContentRow, NavLink } from './CustomerPortalStyles';

const CustomerPortal = ({ userUid }) => {
  return (
    <Container>
      <ContentRow>
        <div>
          <VisitList />
          <BookAVisit userUid={userUid} />
          <NavLink to="/makereview">Add review</NavLink>
          <ReviewList />
        </div>
      </ContentRow>
    </Container>
  );
};

export default CustomerPortal;
