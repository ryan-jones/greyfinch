import axios, { AxiosResponse, AxiosError } from "axios";
import createAction from "./create-action";

export const GIF_FETCH_SUCCESS = "GIF_FETCH_SUCCESS";
export const GIF_FETCH_FAIL = "GIF_FETCH_FAIL";

export const fetchGif = (animal: string, language: string) => {
  const BASE_URL = `https://api.giphy.com/v1/gifs/search?api_key=${
    process.env.REACT_APP_KEY
  }&limit=100`;

  return (dispatch: any) => {
    return axios
      .get(`${BASE_URL}&q=${animal}&lang=${language}`)
      .then(({ data }: AxiosResponse) => {
        const { images } = data.data[
          Math.floor(Math.random() * data.data.length)
        ];
        dispatch(createAction(GIF_FETCH_SUCCESS, images));
      })
      .catch((err: AxiosError) => {
        console.log("There was an error", err);
      });
  };
};
