import { createStore, applyMiddleware } from "redux";
import thunkMiddleWare from "redux-thunk";

const initialState = {
  favArtists: [{ id: "", name: "" }],
  artistData: '',
  artistList: '',
};

//ACTIONS
export const addArtistList = artists => (dispatch) => {
  return dispatch({
    type: "ADD_ARTIST_LIST",
    artistList: artists
  })
}
export const addArtistData = artist => (dispatch) => {
  return dispatch({
    type: "ADD_ARTIST_DATA",
    artistData: artist
  })
}
export const addFavourite = (id, artist) => (dispatch) => {
  return dispatch({
    type: "ADD_FAVOURITE",
    id: id,
    name: artist,
  });
};

export const deleteFavourite = (id, artist) => (dispatch) => {
  return dispatch({
    type: "DELETE_FAVOURITE",
    id: id,
    name: artist,
  });
};

//REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ARTIST_LIST":
      return{
        ...state,
        artistList: action.artistList
      }
    case "ADD_ARTIST_DATA":
      return {
        ...state,
        artistData: action.artistData
      }
    case "ADD_FAVOURITE":
      return {
        ...state,
        favArtists: [
          ...state.favArtists,
          {
            id: action.id,
            name: action.name,
          },
        ],
      };
    case "DELETE_FAVOURITE":
      return {
        ...state,
        favArtists: state.favArtists.filter(
          (artist) => artist.id !== action.id
        ),
      };
    default:
      return state;
  }
};

export function initializeStore() {
  return createStore(reducer, initialState, applyMiddleware(thunkMiddleWare));
}
