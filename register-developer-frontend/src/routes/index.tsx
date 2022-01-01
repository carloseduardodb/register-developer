import React from "react";
import { Routes as Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ManageDevelopers from "../pages/ManageDevelopers";
import ManageLevels from "../pages/ManageLevels/index";

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/desenvolvedores" element={<ManageDevelopers />} />
      <Route path="/niveis" element={<ManageLevels />} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
