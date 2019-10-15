/*
 src/actions/simpleAction.js
*/
import {GO_TO_PLAYGROUND} from "./cardMenuActions";

export const goToPlayGroundAction = () => dispatch => {
 return {
  type: GO_TO_PLAYGROUND
 }
}