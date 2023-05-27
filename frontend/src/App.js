import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
//COMMENT: Pages
import Home from './pages/Home';
import ItemDetails from './pages/ItemsDetailsPage';
import Checkout from './pages/CheckoutPage';
import Confirmation from './pages/ConfirmationPage';
import NavBar from './components/NavBar';
import CartMenu from './pages/CartMenu';
import Footer from './components/Footer';
import AuthenticationPage from './pages/Authentification';
import ProfilePage from './pages/ProfilePage';



//COMMENT: Scroll to correct spot on page
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  }, [pathname])

  return null;
}

//TODO: Clean-Up with createBrowserRouter

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/auth" element={<AuthenticationPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="item/:itemId" element={<ItemDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="checkout/success" element={<Confirmation />} />
        </Routes>
        <CartMenu />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
