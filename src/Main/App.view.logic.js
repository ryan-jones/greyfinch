import * as React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";

import Gallery from "./Gallery/Gallery.view.logic";
import ViewBugs from "./Bugs/Bugs.view.logic";
const AppLogic = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Gallery} />
      <Route path='/bugs' component={ViewBugs} />
    </Switch>
  </BrowserRouter>
);

export default AppLogic;
