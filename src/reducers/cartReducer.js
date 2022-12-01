import { ADD_ITEM, DELETE_ITEM, UPDATE_WORKTIME, UPDATE_BREAKTIME, UPDATE_ITERATIONS, UPDATE_PAGE, UPDATE_TOTALTIME, UPDATE_TIMEREMAIN, UPDATE_TIMEACTIVE } from "../actionTypes/actionTypes";

const initialState = {
  numOfItems: 0,
  workTime: 0,
  breakTime: 0,
  iterations: 0,
  totalTime: 0,
  timeRemain: 0,
  timeActive: true,
  page: "main",
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

    default:
      return state;
  }
}

export default cartReducer
