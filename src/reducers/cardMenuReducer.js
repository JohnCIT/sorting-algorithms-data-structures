
import {GO_TO_PLAYGROUND, GO_TO_BABYLON_PLAYGROUND, GO_TO_GAME, GO_TO_ALGORITHMS} from '../actions/cardMenuActions';

export default (state = {
    goToPlayGround: false,
    goToBabylonPlayGround: false,
    showAlgorithms: false
}, action) => {
    switch (action.type) 
    {
        case GO_TO_ALGORITHMS:
            return {
                ...state,
                showAlgorithms: true
            };

        case GO_TO_GAME:
            console.log("!!!!! in red");
            return {
                    ...state,
                    goToGame: true
            };
            default:
            return state;
        }
}