import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";

import Gallery from "./Gallery/Gallery.view.logic.tsx";
import ViewBugs from "./Bugs/Bugs.view.logic.tsx";
const AppLogic = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Gallery} />
      <Route path='/bugs' component={ViewBugs} />
    </Switch>
  </BrowserRouter>
);

export default AppLogic;
