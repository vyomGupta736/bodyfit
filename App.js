import React from 'react';
import Routes from './src/Routes';
import { persistor, store } from './src/Store/index';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import messaging from '@react-native-firebase/messaging';
import database from '@react-native-firebase/database';

export default class App extends React.Component{

 async componentDidMount()
  {
     const permission = await messaging().hasPermission(); 
     try
     {
       if(permission)
       {
         const fcmtoken = await messaging().getToken();
         if(fcmtoken)
         {
           console.log(fcmtoken);
          //  messaging()
          //   .subscribeToTopic('healthhighway2020trainer')
          //   .then(() => console.log('Subscribed to topic!'));
          //  const response = await database().ref(`/fcm-tokens/${fcmtoken}`)
          //      .set({
          //        fcmtoken
          //      });
          //   console.log(response);
          //   console.log("from setting token in firebase database");
         }
       }
     }catch(err)
     {
       console.log(err);
     }
   
    messaging().onMessage(message => {
      Alert.alert('A new FCM message arrived !' + JSON.stringify(message));
    });

    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    });

  }

  render()
  {
    return(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} >
            <Routes/>
        </PersistGate>
      </Provider>
    )
  }
}