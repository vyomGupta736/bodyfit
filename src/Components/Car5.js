import React from 'react';
import {View, Text,Image} from 'react-native';
import { w, h, scale,verticalScale } from './Exports';
import styles from './Styles';
import Ionicon from 'react-native-vector-icons/FontAwesome5';

const Car5 = () => {
    return (
        <View style={{width:w,height:h/1.1}} >
             {/* <Image source={require('../StaticImages/fit5.png')} resizeMode="stretch" style={styles.istyles} /> */}
             <View style={styles.astyles} >
               <View style={{flex:1,flexDirection:'row'}} >
                   <View style={{flex:1}} />
                   <View style={{flex:1.1}} >
                        <View style={{flex:1.3}} />
                        <View style={{flex:1}} >
                            <Text allowFontScaling={false} style={{color:'orange',fontFamily:'Gilroy-Light',fontSize:scale(19),alignSelf:'center',marginTop:verticalScale(20)}} >Recieve your work </Text>
                            <Text allowFontScaling={false} style={{color:'orange',fontFamily:'Gilroy-Light',fontSize:scale(19),alignSelf:'center',marginTop:verticalScale(7)}} >out essentials</Text>
                            <Text allowFontScaling={false} style={{color:'orange',fontFamily:'Gilroy-Light',fontSize:scale(19),alignSelf:'center',marginTop:verticalScale(7)}} >delievered at</Text>
                            <Text allowFontScaling={false} style={{color:'orange',fontFamily:'Gilroy-Light',fontSize:scale(19),alignSelf:'center',marginTop:verticalScale(7)}} >your place</Text>
                            <Text allowFontScaling={false} style={{color:'orange',fontFamily:'Gilroy-SemiBold',fontSize:scale(20),alignSelf:'center',marginTop:verticalScale(7)}} >instantly....</Text>
                        </View>
                   </View>
               </View>
             </View>
        </View>
    )
};

export default Car5;