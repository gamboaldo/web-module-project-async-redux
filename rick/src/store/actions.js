import axios from "axios";

export const FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS";
export const FETCH_CHARACTERS_LOADING = "FETCH_CHARACTERS_LOADING";
export const FETCH_CHARACTERS_FAILURE = "FETCH_CHARACTERS_FAILURE";

export const fetchData = () => {
  return (dispatch) => {
    //loading state
    dispatch({ type: FETCH_CHARACTERS_LOADING });
    //start fetch
    axios
      .get("https://rickandmortyapi.com/api/character")
      //res.data.results
      .then((res) =>
        dispatch({ type: FETCH_CHARACTERS_SUCCESS, payload: res.data.results })
      )
      .catch(
        (err) => console.log(err)
        // dispatch({ type: FETCH_CHARACTERS_FAILURE, payload: err })
      );
  };
};
