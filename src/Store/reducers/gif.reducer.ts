import { GIF_FETCH_SUCCESS } from "../actions/gif.actions";

export interface Gif {
  images: object;
}
const initialState: Gif = {
  images: {}
};

const gifReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GIF_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default gifReducer;
