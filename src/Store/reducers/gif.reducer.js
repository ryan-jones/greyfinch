import { GIF_FETCH_SUCCESS } from "../actions/gif.actions";

const initialState = {};

const gifReducer = (state = initialState, action) => {
  switch (action.type) {
    case GIF_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default gifReducer;
