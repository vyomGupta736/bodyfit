import React from 'react';
import {View,Text} from 'react-native';
import { verticalScale, scale } from '../Components/Exports';
import { TouchableOpacity } from 'react-native-gesture-handler';
import RazorpayCheckout from 'react-native-razorpay';
import SplashScreen from 'react-native-splash-screen';

class Trial extends React.Component{
    
    componentDidMount()
    {
        SplashScreen.hide();
    }

    render()
    {
        return(
            <View style={{flex:1,backgroundColor:'white',justifyContent:'center',alignItems:'center'}} >
                 <TouchableOpacity style={{flex:1,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}
                  onPress={() => {
                    var options = {
                        description: 'Credits towards consultation',
                        currency: 'INR',
                        key: 'rzp_live_jqS5sfibGgNE34',
                        amount: '100',
                        name: 'Health highway',
                        prefill: {
                          contact: '6395563830',
                          name: 'vyom gupta'
                        },
                        theme: {color: 'cyan'}
                      }
                      RazorpayCheckout.open(options).then((data) => {
                           console.log(data);
                      }).catch(err => {
                         console.log(err);
                      })
                 }}
                 style={{height:verticalScale(50),width:scale(200),backgroundColor:'orange'}} >
                       <Text>Pay Rs 50</Text>
                 </TouchableOpacity>
            </View>
        )
    }
};

export default Trial;