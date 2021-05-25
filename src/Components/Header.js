import React from 'react';
import {View,Text,TouchableOpacity,Image} from 'react-native';
import Ionicon from 'react-native-vector-icons/FontAwesome5';
import { verticalScale, scale, w  } from '../Components/Exports';
import styles from '../Components/Styles';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

const Header = ({onPress,title,showNot}) => {
    return (
        <View style={{height:verticalScale(60),backgroundColor:'darkturquoise',flexDirection:'row',justifyContent:'center',alignItems:'center',elevation:10,shadowColor:'gray',shadowOffset:{height:10},marginBottom:verticalScale(10)}} >
            <View style={{width:w/1.05,borderColor:'white',height:verticalScale(50),flexDirection:'row'}} >
                <View style={{flex:1}} >
                  {showNot?null:
                  <TouchableNativeFeedback onPress={() => onPress()}
                    style={{...styles.tstyles, justifyContent:'center',alignItems:'center'}} >
                     <Ionicon name="arrow-left" size={scale(25)} color="white" />
                  </TouchableNativeFeedback>}
                </View>
                <View style={{flex:3,borderWidth:0,justifyContent:'center',alignItems:'center'}} >
                    <Text allowFontScaling={false} style={{color:'white',fontFamily:'Gilroy-SemiBold',fontSize:scale(17)}} >{title?title:`Health highway`}</Text>
                </View>
                <View style={{flex:1,justifyContent:'center',alignItems:'flex-end'}} >
                  <Image source={require('../StaticImages/logo.png')} resizeMode="contain" style={{width:'100%',height:'100%'}} />
                </View>
            </View>
        </View>
    )
};

export default Header;