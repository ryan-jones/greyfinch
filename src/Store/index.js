import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import gifReducer from "./reducers/gif.reducer";

export default function configureStore(preloadedState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const reducers = {
    gif: gifReducer
  };
  const rootReducer = combineReducers(reducers);
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  console.log("STORE", store.getState());
  return store;
}
