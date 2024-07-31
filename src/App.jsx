// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import ResendVerification from './components/pages/ResendVerification';
import Home from './components/pages/Home'
import Products from './components/pages/Products';
import Cart from './components/pages/Cart';
import Details from './components/pages/Details';
import Navbar from './components/pages/Navbar';




function App() {


  return (
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/resend-verification" element={<ResendVerification />} />
        </Routes>
      </div>
      
  );
}

export default App;
