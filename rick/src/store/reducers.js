import {
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_LOADING,
  FETCH_CHARACTERS_FAILURE,
} from "./actions";

const initialState = {
  isLoading: false,
  characters: [],
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS_LOADING:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        isLoading: false,
        error: "",
      };

    case FETCH_CHARACTERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
