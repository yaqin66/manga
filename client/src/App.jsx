// eslint-disable-next-line no-unused-vars
import React from "react";
import NavBar from "./component/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./component/Layout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Help from "./pages/Help";

const App = () => {
  return (
    <BrowserRouter>
        <NavBar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="help" element={<Help/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
