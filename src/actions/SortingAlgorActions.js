import {bubbleSort} from "../Algorythims/SortingAlgorithms";

export const SORTING_ALGOR_ACTIONS = {
    SET_NUMBERS: "SET_NUMBERS"
};

export const setNumberArrayToUseAction = (numbersToUse: Array) => (dispatch) => {
    dispatch( {
        type: SORTING_ALGOR_ACTIONS.SET_NUMBERS, numbersToUse: numbersToUse
    });
};



export const bubbleSortAction = () => (dispatch, getState) => {
    let sortedNums = bubbleSort(getState().sortingAlgorReducer.numbersToUse);
    console.log(sortedNums);
};