import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import GlobalStyle from "./globalStyles";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar/Navbar";
import CustomerPortal from "./components/customerportal/CustomerPortal";
import Offer from "./pages/Offer";
import PriceList from "./pages/PriceList";
import "./fontello/css/fontello.css";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./db";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [userUid, setUserUid] = useState(false);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserUid(user.uid);
      setIsAuth(user.email);
    } else {
      setIsAuth(false);
    }
  });

  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<Offer />} />
        <Route path="/" element={<PriceList />} />
        <Route path="/" element={<CustomerPortal userUid={userUid} />} />
      </Routes>
      <CustomerPortal userUid={userUid} />
      <Footer />
    </Router>
  );
}

export default App;
