import VisitListRender from "./VisitListRender";
import BookAVisit from "./BookAVisit";
import Login from "./Login";
import CreateAccount from "./CreateAccount";

const CustomerPortal = ({ userUid }) => {
  return (
    <div>
      Customer Portal
      <div>
        <VisitListRender />
        <CreateAccount />
        <Login />
        <BookAVisit userUid={userUid} />
      </div>
    </div>
  );
};

export default CustomerPortal;
