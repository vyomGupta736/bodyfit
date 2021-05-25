import { combineReducers } from 'redux';
import phoneReducer from './phoneReducer';
import workoutReducer from './workoutReducer';
import sessions from './sessions';
import selectionReducer from './selectionReducer';

export default combineReducers({
    phoneReducer : phoneReducer,
    workoutReducer : workoutReducer,
    sessions : sessions,
    selectionReducer : selectionReducer
});