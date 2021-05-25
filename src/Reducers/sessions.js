import { ADD_SESSION, CLEAR_CART, SENDING_INFO, DEMO_SESSION_BOOKED, DEMO_SESSION_BOOKING_ERROR, PAID_SESSION_BOOKED, LOG_OUT, USER_BASIC_INFO_ALREADY_PRESENT } from "../Actions/types";


const INITIAL_STATE = {
    unpaidSession : {},
    sending : false,
    booked : false,
    error : false,
    paidSessions : [],
    demoSession : {}
};

export default sessions = (state=INITIAL_STATE,actions) => {
    switch(actions.type)
    {
        case ADD_SESSION:
            return {...state, unpaidSession : {...actions.payload} }
        case SENDING_INFO:
            return {...state, sending : true, booked : false, error : false}
        case DEMO_SESSION_BOOKED:
            return {...state, sending : false, booked : true, error : false, unpaidSession : {}, demoSession : {...actions.payload} }
        case DEMO_SESSION_BOOKING_ERROR:
            return {...state, sending : false, booked : false, error : true, unpaidSession : {} }
        case PAID_SESSION_BOOKED:
            return {...state, sending : false, booked : true, error : false, unpaidSession : {}, paidSessions : [...state.paidSessions, {...actions.payload}] }
        case CLEAR_CART:
            return {...state, unpaidSession : {}, sending : false, booked : false, error : false }
        case LOG_OUT:
            return INITIAL_STATE
        case USER_BASIC_INFO_ALREADY_PRESENT:
            return {...state, demoSession : {...actions.payload.demoSession}, unpaidSession : {}, paidSessions : actions.payload.paidSessions?[...Object.values(actions.payload.paidSessions)]:[] }
        default :
            return state;
    }
}