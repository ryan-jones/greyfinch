import axios from "axios";
import createAction from "./create-action";

const BASE_URL = `https://api.giphy.com/v1/gifs/search?api_key=xvYI3qAX3Ua3OLndKqdUL2Tvdq6UFVfw&limit=10`;

export const GIF_FETCH_SUCCESS = "GIF_FETCH_SUCCESS";
export const GIF_FETCH_FAIL = "GIF_FETCH_FAIL";

export const fetchGif = (animal, language) => {
  return dispatch => {
    return axios
      .get(`${BASE_URL}&q=${animal}&lang=${language}`)
      .then(({ data }) => {
        const { images } = data.data[
          Math.floor(Math.random() * data.data.length)
        ];
        dispatch(createAction(GIF_FETCH_SUCCESS, images));
      })
      .catch(err => {
        console.log("There was an error", err);
      });
  };
};
