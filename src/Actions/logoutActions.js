import { LOG_OUT } from "./types";
import auth from '@react-native-firebase/auth';

export const logOut = () => {
    return async(dispatch) => {
        try
           {
             await auth().signOut();
             const user = auth().currentUser;
             console.log("after log out");
             console.log(user);
             dispatch({type : LOG_OUT});
           }
            catch(err)
            {
              console.log(err);
            }
      }
}