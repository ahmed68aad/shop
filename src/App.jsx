// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import ResendVerification from './components/pages/ResendVerification';
import Home from './components/pages/Home'
import Products from './components/pages/Products';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/products" element={<Products />} />
          <Route path="/resend-verification" element={<ResendVerification />} />
        </Routes>
      </div>
  );
}

export default App;
