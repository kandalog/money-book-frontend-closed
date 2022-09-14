import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { UserContext } from "./contexts/UserProvider";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Money } from "./pages/Money/Money";
import { Profile } from "./pages/Profile/Profile";
import { SignUp } from "./pages/Signup/SignUp";
import "./stylesheets/base.scss";
import "./components/atoms/Authbox/Authbox.scss";

function App() {
  const { currentUser } = useContext(UserContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Money />} />
        <Route path="/login" element={currentUser ? <Money /> : <Login />} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/profile" element={currentUser ? <Profile /> : <Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
