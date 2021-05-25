import React from 'react';
import {View, Text,Image} from 'react-native';
import { w, h, scale, verticalScale } from './Exports';
import styles from './Styles';
import Ionicon from 'react-native-vector-icons/FontAwesome5';

const Car7 = () => {
    return (
        <View style={{width:w,height:h/1.1}} >
             {/* <Image source={require('../StaticImages/fit7.png')} resizeMode="stretch" style={styles.istyles} /> */}
             <View style={styles.astyles} >
               <View style={{flex:1}} >
                   <View style={{flex:1.5}} />
                   <View style={{flex:1}} >
                      <Text allowFontScaling={false} style={{color:'coral',fontFamily:'Gilroy-Medium',fontSize:scale(20),alignSelf:'center',marginTop:verticalScale(20)}} >Attend live video sessions</Text>
                      <Text allowFontScaling={false} style={{color:'coral',fontFamily:'Gilroy-Medium',fontSize:scale(20),alignSelf:'center',marginTop:verticalScale(10)}} >Or call our professional trainers</Text>
                      <Text allowFontScaling={false} style={{color:'coral',fontFamily:'Gilroy-Medium',fontSize:scale(20),alignSelf:'center',marginTop:verticalScale(10)}} >At your place,</Text>
                      <Text allowFontScaling={false} style={{color:'coral',fontFamily:'Gilroy-Medium',fontSize:scale(20),alignSelf:'center',marginTop:verticalScale(10)}} >anywhere & anytime as</Text>
                      <Text allowFontScaling={false} style={{color:'coral',fontFamily:'Gilroy-Medium',fontSize:scale(20),alignSelf:'center',marginTop:verticalScale(10)}} >per your comfort...</Text>
                   </View>
               </View>
             </View>
        </View>
    )
};

export default Car7;