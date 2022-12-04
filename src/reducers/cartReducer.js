import { object } from "check-more-types";
import { ADD_ITEM, DELETE_ITEM, UPDATE_WORKTIME, UPDATE_BREAKTIME, UPDATE_ITERATIONS, UPDATE_PAGE, UPDATE_TOTALTIME, UPDATE_TIMEREMAIN, UPDATE_TIMEACTIVE, UPDATE_ITERATIONS_REMAIN, UPDATE_JOKE, UPDATE_GIF } from "../actionTypes/actionTypes";

const initialState = {
  numOfItems: 0,
  workTime: 1500,
  breakTime: 300,
  iterations: 4,
  totalTime: 1500,
  timeRemain: 1500,
  iterationsRemain: 1, //to prevent any default case issues
  timeActive: true,
  page: "main",
  jokeSetup: "",
  jokePunchline: "",
  gif: "",

};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        numOfItems: state.numOfItems + 1,
      };

    case DELETE_ITEM:
      return {
        ...state,
        numOfItems: state.numOfItems - 1,
      };
    case UPDATE_WORKTIME:
      return {
        ...state,
        workTime: action.newVal,
      };
    case UPDATE_BREAKTIME:
      return {
        ...state,
        breakTime: action.newVal,
      };
    case UPDATE_ITERATIONS:
      return {
        ...state,
        iterations: action.newVal,
      };
    case UPDATE_PAGE:
      return {
        ...state,
        page: action.newVal,
      };

    case UPDATE_TOTALTIME:
      return {
        ...state,
        totalTime: action.newVal,
      };

    case UPDATE_TIMEREMAIN:
      return {
        ...state,
        timeRemain: action.newVal,
      };

    case UPDATE_TIMEACTIVE:
      return {
        ...state,
        timeActive: action.newVal,
      };

    case UPDATE_ITERATIONS_REMAIN:
      return {
        ...state,
        iterationsRemain: action.newVal
      }
    case UPDATE_JOKE:
      return {
        ...state,
        jokeSetup: action.newVal1,
        jokePunchline: action.newVal2
      }

    case UPDATE_GIF:
      return {
        ...state,
        gif: action.newVal

      }

    default:
      return state;
  }
}

export default cartReducer
