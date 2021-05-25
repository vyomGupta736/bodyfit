import React from 'react';
import {View, Text,Image} from 'react-native';
import { w, h, scale, verticalScale } from './Exports';
import styles from './Styles';
import Ionicon from 'react-native-vector-icons/FontAwesome5';

const Car6 = () => {
    return (
        <View style={{width:w,height:h/1.1}} >
             {/* <Image source={require('../StaticImages/fit6.png')} resizeMode="stretch" style={styles.istyles} /> */}
             <View style={styles.astyles} >
               <View style={{flex:1}} >
                   <View style={{flex:1}} />
                   <View style={{flex:1}} >
                       <Text allowFontScaling={false} style={{color:'coral',fontFamily:'Gilroy-Medium',fontSize:scale(23),marginTop:verticalScale(30),alignSelf:'flex-start',marginHorizontal:scale(15)}} >Don't bother about</Text>
                       <Text allowFontScaling={false} style={{color:'coral',fontFamily:'Gilroy-Medium',fontSize:scale(23),marginTop:verticalScale(17),alignSelf:'flex-start',marginHorizontal:scale(15)}} >equipments, we provide</Text>
                       <Text allowFontScaling={false} style={{color:'coral',fontFamily:'Gilroy-Medium',fontSize:scale(23),marginTop:verticalScale(17),alignSelf:'flex-start',marginHorizontal:scale(15)}} >you with everything for</Text>
                       <Text allowFontScaling={false} style={{color:'coral',fontFamily:'Gilroy-Medium',fontSize:scale(23),marginTop:verticalScale(17),alignSelf:'flex-start',marginHorizontal:scale(15)}} >FREE while attending</Text>
                       <Text allowFontScaling={false} style={{color:'coral',fontFamily:'Gilroy-Medium',fontSize:scale(23),marginTop:verticalScale(17),alignSelf:'flex-start',marginHorizontal:scale(15)}} >sessions....</Text>
                   </View>
               </View>
             </View>
        </View>
    )
};

export default Car6;