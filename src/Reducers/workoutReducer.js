import { WORK_ADD, DATE_NAME, TIME, MODE, ADDRESS, CLEAR_WORKOUT, LOG_OUT, PAYMENT_FOCUS, PAYMENT_BLUR } from "../Actions/types";


const INITIAL_STATE = {
    exercises : [],
    date : '',
    time : [],
    streetName : '',
    houseNo : '',
    landmark : '',
    extraInfo : '',
    mode : 'Video',
    price : 150,
    onPaymentScreen : false,
    premium : false
};

export default workoutReducer = (state=INITIAL_STATE,actions) => {
    switch(actions.type)
    {
        case WORK_ADD:
            return {...state, exercises : [...actions.payload.items], premium : actions.payload.premium }
        case DATE_NAME:
            return {...state, date : actions.payload.date }
        case TIME:
            return {...state, time : [...actions.payload]}
        case MODE:
            return {...state, mode : actions.payload.mode, price : actions.payload.price }
        case ADDRESS:
            return {...state, streetName : actions.payload.streetName, houseNo : actions.payload.houseNo, landmark : actions.payload.landmark, extraInfo : actions.payload.others}
        case CLEAR_WORKOUT:
            return {...INITIAL_STATE}
        // case PAYMENT_FOCUS:
        //     return {...state}
        // case PAYMENT_BLUR:
        //     return {...state, onPaymentScreen : false}
        case LOG_OUT:
            return {...INITIAL_STATE}
        default:
            return state;
    }
}