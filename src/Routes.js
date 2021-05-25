import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screens/Home';
import Entry from './Screens/Entry';
import PhoneEntry from './Screens/PhoneEntry';
import PhoneCode from './Screens/PhoneCode';
import Date from './Screens/Date';
import Time from './Screens/Time';
import ChooseType from './Screens/ChooseType';
import Profile from './Screens/Profile';
import Address from './Screens/Address';
import TabBarIcon from './Components/TabBarIcon';
import { scale, verticalScale } from './Components/Exports';
import UserInfo from './Screens/UserInfo';
import HomeEntry from './Screens/HomeEntry';
import Yoga from './Screens/Yoga';
import Medical from './Screens/Medical';
import Payment from './Screens/Payment';
import { connect } from 'react-redux';
import Trial from './Screens/Trial';
import OrderExpand from './Screens/OrderExpand';
import Exclusive from './Screens/Exclusive';
import Zumba from './Screens/Zumba';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const LoginFlow = () => {
    return (
        <Stack.Navigator
          >
            <Stack.Screen name="Entry" component={Entry} options={{headerShown : false}}  />
            <Stack.Screen name="PhoneEntry" component={PhoneEntry} options={{headerShown : false}} />
            <Stack.Screen name="PhoneCode" component={PhoneCode} options={{headerShown : false}} />
            <Stack.Screen name="UserInfo" component={UserInfo} options={{headerShown : false}} />
        </Stack.Navigator>
    )
}

const Main = () => {
    return (
        <Stack.Navigator initialRouteName="HomeEntry" >
            {/* <Stack.Screen name="Trial" component={Trial} options={{headerShown:false}} /> */}
            <Stack.Screen name="Exclusive" component={Exclusive} options={{headerShown:false}} />
            <Stack.Screen name="HomeEntry" component={HomeEntry} options={{headerShown : false}} />
            <Stack.Screen name="Yoga" component={Yoga} options={{headerShown:false}} />
            <Stack.Screen name="Zumba" component={Zumba} options={{headerShown:false}} />
            <Stack.Screen name="Medical" component={Medical} options={{headerShown:false}} />
            <Stack.Screen name="Home" component={Home} options={{headerShown : false}} />
            <Stack.Screen name="Date" component={Date} options={{headerShown : false}} />
            <Stack.Screen name="Time" component={Time} options={{headerShown : false}} />
            <Stack.Screen name="Address" component={Address} options={{headerShown : false}} />
            <Stack.Screen name="ChooseType" component={ChooseType} options={{headerShown : false}} />
            <Stack.Screen name="Payment" component={Payment} options={{headerShown : false}} />
        </Stack.Navigator>
    )
};

const ProfileSection = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}} />
            <Stack.Screen name="OrderExpand" component={OrderExpand} options={{headerShown:false}} />
        </Stack.Navigator>
    )
}

class Routes extends React.Component{
    render(){
        const Other = () => {
            return (
                <Tab.Navigator 
                screenOptions={({route}) => ({
                    tabBarIcon : ({focused,size}) => {
                        return (
                        <TabBarIcon focused={focused} routeName = {route.name} focusedBackgroundColor='turquoise' bluredBackgroundColor='rgb(212,212,212)' size={size} />
                        )
                    }
                })
              }
                tabBarOptions={{
                    activeTintColor : 'rgb(255,255,255)',
                    inactiveTintColor : 'rgb(190,190,190)',
                    style : {height : verticalScale(60),justifyContent:'center'},
                    allowFontScaling : false,
                    keyboardHidesTabBar : true,
                    showLabel : false,
                }}
                 backBehavior="none"
                  >
                    <Tab.Screen name="Main" component={Main} />
                    <Tab.Screen name="ProfileSection" component={ProfileSection} />
                </Tab.Navigator>
            )
        }
        return (
            <NavigationContainer>
                <Tab.Navigator backBehavior="none"
                initialRouteName="Other"
                screenOptions={{
                    tabBarVisible : false
                }} >
                    <Tab.Screen name="LoginFlow" component={LoginFlow} />
                    <Tab.Screen name="Other" component={Other} />
                </Tab.Navigator>
            </NavigationContainer>
        )
    }  
};

const mapStateToProps = state => {
    return {
        onPaymentScreen : state.workoutReducer.onPaymentScreen
    }
}

export default connect(mapStateToProps,null)(Routes);