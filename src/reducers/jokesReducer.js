
import {
  GET_JOKES_FULFILLED,
  GET_JOKES_REJECTED,
  GET_JOKES_PENDING,
  GET_PREVIOUS_JOKES,
  REACT_ON_JOKES,
  GO_TO_NEXT_JOKE,
  GET_SUMMARY,
} from './../constants';

const initialState = {
    jokes : [],
    currentJoke: null,
    loading: false,
    disablePrev: false,
    summary: [],
}

const jokesReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_JOKES_PENDING:
        return {
          ...state,
        }

      case GET_JOKES_FULFILLED:
        let { jokes } = state;
        let currentJoke = action.payload;
        currentJoke.funny = null;
        currentJoke.index = state.jokes.length;
        jokes.push(currentJoke);
        return {
          ...state,
          jokes,
          currentJoke,
          disablePrev: false
        }

        case GET_JOKES_REJECTED:
          return {
            ...state
          }

      case GET_PREVIOUS_JOKES:
            let prevJoke = null;
            state.jokes.map( (joke)=>{
              if(joke.id === action.payload.id){
                  currentJoke = prevJoke;
              };
              prevJoke = joke;
              return joke;
            });

            return  {
              ...state,
              currentJoke: currentJoke ? currentJoke : state.currentJoke,
              disablePrev: currentJoke ? false : true
            }

      case REACT_ON_JOKES:
            jokes = [];
            prevJoke = null;
            state.jokes.map( (joke)=>{
              if(joke.id === action.payload.joke.id){
                  currentJoke = joke;
                  currentJoke.funny = action.payload.reaction;
                   jokes.push(currentJoke);
              }else{
                   jokes.push(joke);
              }
              return joke;
             
            })
            state = {
              ...state,
              currentJoke,
              jokes
            }
          return {
            ...state
          }

      case GO_TO_NEXT_JOKE:
          let index = 0;
            state.jokes.map( (joke, i)=>{
              if(joke.id === state.currentJoke.id){
                  index = i+1;
              };
              return joke;
            });
          currentJoke = state.jokes[index];
          return {
            ...state,
            currentJoke
          }

          case GET_SUMMARY:
            let summary = state.jokes;
            return {
              ...state,
              summary
            }

      default:
          return state
    }
}

export default jokesReducer;