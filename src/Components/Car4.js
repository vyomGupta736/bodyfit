import React from 'react';
import {View, Text,Image} from 'react-native';
import { w, h, scale, verticalScale } from './Exports';
import styles from './Styles';
import Ionicon from 'react-native-vector-icons/FontAwesome5';

const Car4 = () => {
    return (
        <View style={{width:w,height:h/1.1}} >
             {/* <Image source={require('../StaticImages/fit4.png')} resizeMode="stretch" style={styles.istyles} /> */}
             <View style={styles.astyles} >
               <View style={{flex:1}} >
                   <View style={{flex:2}} />
                   <View style={{flex:1,borderWidth:0}} >
                      <Text allowFontScaling={false} style={{color:'coral',fontFamily:'Gilroy-SemiBold',fontSize:scale(18),marginTop:verticalScale(30),alignSelf:'center'}} >We care for you & so in times of</Text>
                      <Text allowFontScaling={false} style={{color:'coral',fontFamily:'Gilroy-SemiBold',fontSize:scale(18),marginTop:verticalScale(5),alignSelf:'center'}} >COVID-pandemic, we request u to</Text>
                      <Text allowFontScaling={false} style={{color:'coral',fontFamily:'Gilroy-SemiBold',fontSize:scale(18),marginTop:verticalScale(5),alignSelf:'center'}} >stay at home and bring out the best </Text>
                      <Text allowFontScaling={false} style={{color:'coral',fontFamily:'Gilroy-SemiBold',fontSize:scale(18),marginTop:verticalScale(5),alignSelf:'center'}} >in you with us.....</Text>
                   </View>
               </View>
             </View>
        </View>
    )
};

export default Car4;