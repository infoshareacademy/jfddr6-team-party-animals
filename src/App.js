import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./css/Layout.css";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import PriceList from "./pages/PriceList";
import "./fontello/css/fontello.css";
import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";
import CreateAccount from "./customerportal/CreateAccount";
import CustomerPortal from "./customerportal/CustomerPortal";
import Login from "./customerportal/Login";
import ResetPassword from "./customerportal/ResetPassword";
import SignUp from "./customerportal/SignUp";
import BookAVisit from "./customerportal/BookAVisit";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <div className="container">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/offer" element={<Offer />} />
            <Route path="/priceList" element={<PriceList />} />
            <Route path="/customerPortal" element={<CustomerPortal />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
      <div>
        <CustomerPortal />
        <CreateAccount />
        <hr />
        <Login />
        <hr />
        <ResetPassword />
        <hr />
        <SignUp />
        <hr />
        <BookAVisit />
      </div>
      <Footer />
    </div>
  );
}

export default App;
