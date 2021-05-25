import { PHONE_LOGIN_TRIED,
    PHONE_LOGIN_SUCCESS,
    PHONE_LOGIN_MANUAL,
    PHONE_LOGIN_SUCCESS_AFTER,
    PHONE_LOGIN_ENTRY_FAIL,
    PHONE_LOGIN_CODE_FAIL,
    USER_INFO_SENT_TO_SERVERS,
    USER_REGISTERED,
    USER_REGISTERED_FAILED,
    USER_BASIC_INFO_ALREADY_PRESENT,
    USER_BASIC_INFO_NOT_PRESENT,
    PHONE_CLEAR
} from './types';

import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export const phoneLogin = (number) => {
    return (dispatch) => {
        dispatch({type : PHONE_LOGIN_TRIED,payload : number});
        doPhoneLoginAuto(dispatch,number);
    }
};

export const phoneClear = () => {
    return {
        type : PHONE_CLEAR
    }
}

export const manualPhoneLogin = (code,response) => {
    return (dispatch) => {
        dispatch({type : PHONE_LOGIN_TRIED});
        doLoginManual(dispatch,code,response);  
    }
}

export const userAdditionalInfo = (info) => {
    console.log(" inside phone actions ")
    console.log(info);
    return (dispatch) => {
        dispatch({type : USER_INFO_SENT_TO_SERVERS});
        doSendInfoToServers(dispatch,info);
    }
}

export const isUserAlreadyPresent = (phoneNumber) => {
    return (dispatch) => {
        doCheckIsUserPresent(dispatch,phoneNumber);
    }
}


const doPhoneLoginAuto = async (dispatch,number) => {
    auth().onAuthStateChanged(async (user) => {
        if(user !== null)
        {
         const user = auth().currentUser;
         console.log("from phone auto verifi");
         console.log(user);
         dispatch({type : PHONE_LOGIN_SUCCESS, payload : user});
        }
      else
      {
        console.log("user is null");
      }
    });

    try{
        const response = await auth().signInWithPhoneNumber('+91'+number);
        console.log(response);
        setTimeout(() => {dispatch({type : PHONE_LOGIN_MANUAL, payload : response})}, 3000);
     }catch(err)
     {
        console.log(err);
        dispatch({ type : PHONE_LOGIN_ENTRY_FAIL})
     }
    
};

const doLoginManual = async (dispatch,code,response) => {
    try{
        const result =  await response.confirm(code);
        console.log(result);
        dispatch({ type : PHONE_LOGIN_SUCCESS_AFTER, payload : result.user });
     }catch(err)
     {
        console.log(err);
        dispatch({ type : PHONE_LOGIN_CODE_FAIL})
     }
}

const doSendInfoToServers = async (dispatch,info) => {
    try{
        const response = await database().ref(`/users/${info.phoneNumber}`).set({
            name : info.name,
            email : info.email,
            phoneNumber : info.phoneNumber,
            demoTaken : false
        });
        dispatch({type : USER_REGISTERED, payload : {...info, demoTaken : false}})
    }catch(err)
    {
        dispatch({type : USER_REGISTERED_FAILED})
    }
}

const doCheckIsUserPresent = async (dispatch,phoneNumber) => {
    try
    {
        console.log("inside checking");
        const snapshot = await database().ref(`/users/${phoneNumber}`).once('value');
        console.log(snapshot.val());
        if(!snapshot.val())
        {
            dispatch({type : USER_BASIC_INFO_NOT_PRESENT});
        }else
        {
            dispatch({type : USER_BASIC_INFO_ALREADY_PRESENT, payload : snapshot.val() });
        }
    }
    catch(err)
    {
        dispatch({type : USER_REGISTERED_FAILED});
    }
    
}