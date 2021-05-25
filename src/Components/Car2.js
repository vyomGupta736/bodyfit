import React from 'react';
import {View, Text,Image} from 'react-native';
import { w, h, scale, verticalScale } from './Exports';
import styles from './Styles';
import Ionicon from 'react-native-vector-icons/FontAwesome5';

const Car2 = () => {
    return (
        <View style={{width:w,height:h/1.1}} >
             {/* <Image source={require('../StaticImages/fit2.png')} resizeMode="stretch" style={styles.istyles} /> */}
             <View style={styles.astyles} >
               <View style={{flex:1}} >
                   <View style={{flex:1.6}} />
                   <View style={{flex:1,borderWidth:0,justifyContent:'flex-start',alignItems:'flex-start'}} >
                       <Text allowFontScaling={false} style={{color:'coral',fontFamily:'Gilroy-SemiBold',fontSize:scale(17),marginTop:verticalScale(20),marginHorizontal:scale(20)}} >Can't come to gyms ??</Text>
                       <Text allowFontScaling={false} style={{color:'coral',fontFamily:'Gilroy-Light',fontSize:scale(17),marginHorizontal:scale(20)}} >Dont't worry </Text>
                       <Text allowFontScaling={false} style={{color:'coral',fontFamily:'Gilroy-Light',fontSize:scale(18),marginVertical:verticalScale(10),marginHorizontal:scale(20)}} >we bring all gym facilities at your place...</Text>
                   </View>
                   <View style={{flex:1.1}} />
               </View>
             </View>
        </View>
    )
};

export default Car2;