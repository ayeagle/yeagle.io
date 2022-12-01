import { ADD_ITEM, DELETE_ITEM, UPDATE_WORKTIME, UPDATE_BREAKTIME, UPDATE_ITERATIONS, UPDATE_PAGE, UPDATE_TOTALTIME, UPDATE_TIMEREMAIN, UPDATE_TIMEACTIVE } from "../actionTypes/actionTypes";

const addItem = () => {
    return {
        type: ADD_ITEM,
    };
};

const deleteItem = () => {
    return {
        type: DELETE_ITEM,
    };
};

const updateWorkTime = (val) => {
    return {
        type: UPDATE_WORKTIME,
        newVal: val,
    };
};

const updateBreakTime = (val) => {
    return {
        type: UPDATE_BREAKTIME,
        newVal: val,
    };
};

const updateIterations = (val) => {
    return {
        type: UPDATE_ITERATIONS,
        newVal: val,

    };
};

const updatePage = (val) => {
    return {
        type: UPDATE_PAGE,
        newVal: val,
    };
};

const updateTotalTime = (val) => {
    return {
        type: UPDATE_TOTALTIME,
        newVal: val,
    };
};

const updateTimeRemain = (val) => {
    return {
        type: UPDATE_TIMEREMAIN,
        newVal: val,
    };
};

const updateTimeActive = (val) => {
    return {
        type: UPDATE_TIMEACTIVE,
        newVal: val,
    };
};

export { addItem, deleteItem, updateWorkTime, updateBreakTime, updateIterations, updatePage, updateTotalTime, updateTimeRemain, updateTimeActive };
