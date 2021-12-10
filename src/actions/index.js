import axios from 'axios';

export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR'
export const FETCH_ERROR = "FETCH_ERROR"
export const ADD_SMURF = "ADD_SMURF"


export const fetchSmurfs = (searchQuery) => (dispatch) => {
    dispatch({ type: LOADING });

    axios
    .get(`http://localhost:3333/smurfs=${searchQuery}`)
    .then((res) => {
        dispatch({type: SUCCESS, payload: res.data})
    })
    .catch((err) => dispatch({type: FETCH_ERROR, payload: err.message}));
};
export const addNewSmurf = (Name, Position, Nickname, Summary) => {
    return {
      type: ADD_SMURF,
      payload: {
        name: Name, 
        position: Position, 
        nickname: Nickname, 
        summary: Summary
      }
    };
  };
  
  export const errorMessages = error => {
    return {
      type: ERROR,
      payload: {error: "Name, position and nickname fields are required."}
    }
  }


//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.