/*
 src/actions/simpleAction.js
*/
export const GO_TO_PLAYGROUND = 'GO_TO_PLAYGROUND';
export const GO_TO_BABYLON_PLAYGROUND = 'GO_TO_BABYLON_PLAYGROUND';
export const GO_TO_GAME = 'GO_TO_GAME';
export const GO_TO_ALGORITHMS = 'GO_TO_ALGORITHMS';

export const goToPlayGroundAction = () => dispatch => {
    return {
        type: GO_TO_PLAYGROUND
    };
}


export const goToBabylonPlayGroundAction = () => dispatch => {
    return {
        type: GO_TO_BABYLON_PLAYGROUND
    };
}


export const goToGameAction = () => dispatch => {
    return {
        type: GO_TO_GAME
    };
}

export const goToAlgorithms = () => dispatch => {
    return {
        type: GO_TO_ALGORITHMS
    };
}
