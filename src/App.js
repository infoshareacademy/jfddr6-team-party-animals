import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/Layout.css';
import Home from './pages/Home';
import Offer from './pages/Offer';
import PriceList from './pages/PriceList';
import './fontello/css/fontello.css';
import Footer from './components/layout/footer/Footer';
import Header from './components/layout/header/Header';
import CreateAccount from './customerportal/CreateAccount';
import CustomerPortal from './customerportal/CustomerPortal';
import Login from './customerportal/Login';
import SignUp from './customerportal/SignUp';

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
            <Route path="/createAccount" element={<CreateAccount />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
