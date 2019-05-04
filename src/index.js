import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Main/App.view.logic.js";
import registerServiceWorker from "./registerServiceWorker";
import configureStore from "./Store";
import { Provider } from "react-redux";

const root = document.getElementById("root");
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
registerServiceWorker();
