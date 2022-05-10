<<<<<<< HEAD
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
=======
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import GlobalStyle from './globalStyles'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar/Navbar'
import CustomerPortal from './components/customerportal/CustomerPortal'
import Offer from './pages/Offer'
import PriceList from './pages/PriceList'
import './fontello/css/fontello.css'
>>>>>>> 38dd90cee3f3c355fd5fd7445bcee15a7f305430

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Navbar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/' element={<Offer/>}/>
				<Route path='/' element={<PriceList/>}/>
				<Route path='/' element={<CustomerPortal/>}/>
			</Routes>

<<<<<<< HEAD
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
=======
			<Footer />
		</Router>
	)
>>>>>>> 38dd90cee3f3c355fd5fd7445bcee15a7f305430
}

export default App;
