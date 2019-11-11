
import {SORTING_ALGOR_ACTIONS} from "../actions/SortingAlgorActions";
import {GO_TO_ALGORITHMS, GO_TO_GAME} from "../actions/cardMenuActions";

const sortingAlgorithmsArray = [
    "Bubble",
    "Test"
];



export default (state = {
    chosenAlgorithm: sortingAlgorithmsArray[0],
    sortingAlgorithmsArray: sortingAlgorithmsArray,
    numbersToUse: []
}, action) => {
    switch (action.type)
    {
        case SORTING_ALGOR_ACTIONS.SET_NUMBERS:
            return {
                ...state,
                numbersToUse: action.numbersToUse
            };

        default:
            return state;
    }
}

