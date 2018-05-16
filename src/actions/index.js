import utils from './../utils';
import {
  GET_JOKES,
  GET_PREVIOUS_JOKES,
  REACT_ON_JOKES,
  GO_TO_NEXT_JOKE,
  GET_SUMMARY,
} from './../constants';

export const getJoke = () => ({
  type: GET_JOKES,
  payload: utils.getJoke().then(res=>res.data)
})

export const goToPreviousJoke = (currentJoke) =>{
	return {
		type: GET_PREVIOUS_JOKES,
  		payload: currentJoke
  	}
}

export const reactOnJoke = (reaction, joke) =>{
	return {
		type: REACT_ON_JOKES,
  		payload: {reaction, joke}
  	}
}

export const goToNextJoke = () =>{
  return {
    type: GO_TO_NEXT_JOKE
  }
}

export const getSummary = () =>{
  return {
    type: GET_SUMMARY
  }
}


