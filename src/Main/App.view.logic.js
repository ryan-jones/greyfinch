import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";

import Gallery from "./Gallery/Gallery.view.logic";
import ViewBugs from "./Bugs/Bugs.view.logic";
const AppLogic = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/bugs' component={ViewBugs} />
      <Route exact path='/' component={Gallery} />
    </Switch>
  </BrowserRouter>
);

export default AppLogic;
