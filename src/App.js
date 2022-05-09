import Home from "./components/Home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import CreateAccount from "./customerportal/CreateAccount";
import CustomerPortal from "./customerportal/CustomerPortal";
import Login from "./customerportal/Login";
import ResetPassword from "./customerportal/ResetPassword";
import SignUp from "./customerportal/SignUp";

function App() {
  return (
    <div className="App">
      <div className="user-container">
        <CreateAccount />
        <hr />
        <Login />
        <hr />
        <ResetPassword />
        <hr />
        <SignUp />
      </div>
    </div>
  );
}

export default App;
