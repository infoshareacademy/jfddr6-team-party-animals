import VisitListRender from "./VisitListRender";
import BookAVisit from "./BookAVisit";
import Login from "./Login";
import CreateAccount from "./CreateAccount";
import MakeReview from "./MakeReview";
import ReviewListRender from "./ReviewListRender";

const CustomerPortal = ({ userUid }) => {
  return (
    <div>
      Customer Portal
      <div>
        <CreateAccount />
        <Login />
        <BookAVisit userUid={userUid} />
        <VisitListRender />
        <MakeReview userUid={userUid} />
        <ReviewListRender />
      </div>
    </div>
  );
};

export default CustomerPortal;
