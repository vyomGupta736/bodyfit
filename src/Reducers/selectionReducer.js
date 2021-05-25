import {SELECT_ANY, LOG_OUT } from "../Actions/types";

const INITIAL_STATE = {
    selectedItem : null,
    isDemo : false
};

export default selectionReducer = (state = INITIAL_STATE,actions) => {
    switch(actions.type)
    {
        case SELECT_ANY:
            return {...state, selectedItem : {...actions.payload.selectedItem}, isDemo : actions.payload.isDemo }
        case LOG_OUT:
            return {...INITIAL_STATE}
        default:
            return state;
    }
}