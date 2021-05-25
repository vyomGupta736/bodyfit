import { WORK_ADD, DATE_NAME, TIME, MODE, ADDRESS, CLEAR_WORKOUT, ADD_SESSION, PAYMENT_FOCUS, PAYMENT_BLUR, CLEAR_CART, SENDING_INFO, DEMO_SESSION_BOOKED, DEMO_SESSION_BOOKING_ERROR, PAID_SESSION_BOOKED, SELECT_ANY } from "./types"

import uuid from 'react-native-uuid';
import database from '@react-native-firebase/database';
import RazorpayCheckout from 'react-native-razorpay';
import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://api.razorpay.com/v1/',
    method : 'POST',
    headers : {
        "Authorization" : "Basic cnpwX2xpdmVfNmpOME5XZ0psbWdNR0Y6MjdVNFlkZHBTWGVaNmR5ek1iVUlJYms0",
        "Content-Type" : "application/json"
    }
});

export const addItem = (items,premium) => {
    return {
        type : WORK_ADD, payload : {items,premium}
    }
}

export const dateAndName = (date) => {
    return {
        type : DATE_NAME, payload : { date }
    }
};

export const time = (time) => {
    return {
        type : TIME, payload : time
    }
}

export const mode = (mode,price) => {
    return {
        type : MODE, payload : {mode,price}
    }
};

export const workoutClear = () => {
    return {
        type : CLEAR_WORKOUT
    }
}

export const paymentFocus = () => {
    return {
        type : PAYMENT_FOCUS
    }
};

export const paymentBlur = () => {
    return {
        type : PAYMENT_BLUR
    }
}

export const address = (newRequest) => {
    return (dispatch) => {
        console.log("from actions");
        console.log(newRequest);
        const newSession = {...newRequest, paid : false };
        console.log(newSession);
        dispatch({type : ADD_SESSION, payload : newSession});
    }
}

export const clearCart = () => {
    return {
        type : CLEAR_CART
    }
};

export const bookDemoSession = (phoneNumber,email,name,session) => {
    return async (dispatch) => {
        dispatch({ type : SENDING_INFO})
        try{
            const ID = uuid.v1();
            const bookedSession = {
                ...session, order_id : ID
            }
            const response = await database().ref(`/users/${phoneNumber}`)
            .set({
                name,
                phoneNumber,
                email,
                demoSession : bookedSession,
                demoTaken : true
            });
            dispatch({type : DEMO_SESSION_BOOKED, payload : bookedSession });
        }
        catch(err)
        {
            dispatch({type : DEMO_SESSION_BOOKING_ERROR});
        }
        
    }
};

export const bookPaidSession = (phoneNumber,session,userName) => {
    console.log("inside booking");
    console.log(session);
    return async (dispatch) => {
       dispatch({type : SENDING_INFO});
        try
        {
           var options = {
            "amount": session.price*100 ,
            "currency": "INR",
            "receipt": "healthHighway",
            "payment_capture": 1
            };
           const {data} = await axios({
                method : 'post',
                url : 'https://api.razorpay.com/v1/orders',
                timeout : 6000,
                headers : {
                    "Authorization" : "Basic cnpwX2xpdmVfNmpOME5XZ0psbWdNR0Y6MjdVNFlkZHBTWGVaNmR5ek1iVUlJYms0",
                    "Content-Type" : "application/json"
                },
                data : {
                    ...options
                }
            });

            console.log(data);
            
            var options = {
                description: 'Payment for sessions..',
                currency: 'INR',
                key: 'rzp_live_6jN0NWgJlmgMGF',
                amount: data.amount ,
                name: 'Health highway',
                order_id : data.id,
                prefill: {
                  contact: phoneNumber ,
                  name: userName
                },
                // theme: {color: 'cyan'}
              }
              RazorpayCheckout.open(options).then(async (data) => {
                   console.log(data);
                   const response = await database().ref(`/users/${phoneNumber}/paidSessions/${data.id}`)
                    .set({
                        ...session, paymentMode : "online"
                    });
                    const bookedSession = {
                        ...session,
                        order_id : data.id,
                        paymentMode : "online"
                    }
                    dispatch({type : PAID_SESSION_BOOKED, payload : bookedSession });
                }).catch(err => {
                    console.log(err);
                    dispatch({type : DEMO_SESSION_BOOKING_ERROR});
                })
            
        }catch(err)
        {
            console.log(err);
            dispatch({type : DEMO_SESSION_BOOKING_ERROR});
        }
    }
};

export const bookPaidLater = (phoneNumber,session,userName) => {
    return async (dispatch) => {
       dispatch({type : SENDING_INFO});
       try
       {
        var options = {
            "amount": session.price*100 ,
            "currency": "INR",
            "receipt": "healthHighway",
            "payment_capture": 1
          };
          const {data} = await axios({
            method : 'post',
            url : 'https://api.razorpay.com/v1/orders',
            timeout : 6000,
            headers : {
                "Authorization" : "Basic cnpwX2xpdmVfNmpOME5XZ0psbWdNR0Y6MjdVNFlkZHBTWGVaNmR5ek1iVUlJYms0",
                "Content-Type" : "application/json"
            },
            data : {
                ...options
            }
        });

        console.log(data);
        const response = await database().ref(`/users/${phoneNumber}/paidSessions/${data.id}`)
        .set({
            ...session, paymentMode : "Pay on delivery", order_id : data.id
        });
        const bookedSession = {
            ...session,
            order_id : data.id,
            paymentMode : "Pay on delivery"
        }
        dispatch({type : PAID_SESSION_BOOKED, payload : bookedSession });
       }
       catch(err)
       {
            console.log("this is error");
            console.log(err);
            dispatch({type : DEMO_SESSION_BOOKING_ERROR});
       }
    }
}

export const selectItem = (selectedItem,isDemo) => {
    console.log("selected");
    return {
        type : SELECT_ANY, payload : {selectedItem, isDemo}
    }
}