import React from 'react';
import {View, Text,Image} from 'react-native';
import { w, h, scale, verticalScale } from './Exports';
import styles from './Styles';
import Ionicon from 'react-native-vector-icons/FontAwesome5';

const Car3 = () => {
    return (
        <View style={{width:w,height:h/1.1}} >
             {/* <Image source={require('../StaticImages/fit3.png')} resizeMode="stretch" style={styles.istyles} /> */}
             <View style={styles.astyles} >
               <View style={{flex:1}} >
                   <View style={{flex:2}} />
                   <View style={{flex:1,borderWidth:0}} >
                        <Text allowFontScaling={false} style={{color:'orange',fontFamily:'Gilroy-Light',fontSize:scale(19),alignSelf:'center',marginTop:verticalScale(20),marginBottom:verticalScale(5)}} >Get <Text allowFontScaling={false} style={{color:'orange',fontFamily:'Gilroy-SemiBold',fontSize:scale(19),alignSelf:'center',marginTop:verticalScale(20),marginBottom:verticalScale(5)}} >full body training</Text> by</Text>
                        <Text allowFontScaling={false} style={{color:'orange',fontFamily:'Gilroy-Light',fontSize:scale(19),alignSelf:'center',marginTop:verticalScale(5)}}  >professional trainers at your own</Text>
                        <Text allowFontScaling={false} style={{color:'orange',fontFamily:'Gilroy-Light',fontSize:scale(19),alignSelf:'center',marginTop:verticalScale(5)}}  >place & comfort </Text>
                        <Text allowFontScaling={false} style={{color:'orange',fontFamily:'Gilroy-Light',fontSize:scale(19),alignSelf:'center',marginTop:verticalScale(5)}}  >thorugh video sessions</Text>
                        <Text allowFontScaling={false} style={{color:'orange',fontFamily:'Gilroy-Light',fontSize:scale(19),alignSelf:'center',marginTop:verticalScale(5)}}  >Or with <Text allowFontScaling={false} style={{color:'orange',fontFamily:'Gilroy-SemiBold',fontSize:scale(19),marginHorizontal:scale(20),alignSelf:'center',marginTop:verticalScale(20),marginBottom:verticalScale(5)}} >live trainers</Text>......</Text>
                   </View>
               </View>
             </View>
        </View>
    )
};

export default Car3;