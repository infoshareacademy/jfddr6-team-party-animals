import VisitListRender from "./VisitListRender";
import BookAVisit from "./BookAVisit";
import MakeReview from "./MakeReview";
import ReviewListRender from "./ReviewListRender";

const CustomerPortal = ({ userUid }) => {
  return (
    <div>
      Customer Portal
      <div>
        <BookAVisit userUid={userUid} />
        <VisitListRender />
        <MakeReview userUid={userUid} />
        <ReviewListRender />
      </div>
    </div>
  );
};

export default CustomerPortal;
