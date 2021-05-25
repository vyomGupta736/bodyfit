import React from 'react';
import {View,Text, Image} from 'react-native';
import { scale, w } from './Exports';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import styles from './Styles';

const BodyPart = ({selected,icon,title,onPress}) => {
    return (
        <View style={!selected?{flex:1,borderRadius:scale(4),elevation:2,overflow:'hidden',borderWidth:1,borderColor:'gainsboro'}:{flex:1,borderRadius:scale(10),elevation:0,borderWidth:2,borderColor:'darkturquoise',overflow:'hidden'}} >
            <TouchableNativeFeedback onPress={() => onPress()}
              style={styles.tstyles} >
                <View style={{flex:1,backgroundColor:'white'}} >
                     <View style={{height:w/6,justifyContent:'center'}} >
                         <View style={{width:w/7.5,height:w/7.5,borderRadius:w/7.5,alignSelf:'center',backgroundColor:'darkturquoise',justifyContent:'center',alignItems:'center'}}>
                             <Image source={icon} resizeMode="contain" style={{width:'70%',height:'70%'}} />
                         </View>
                     </View>
                     <View style={{flex:1,backgroundColor:'white',justifyContent:'center',alignItems:'center'}} >
                        <Text allowFontScaling={false} style={{color:'darkturquoise',fontSize:scale(13),fontFamily:'Gilroy-SemiBold',marginHorizontal:scale(5)}} >{title}</Text>
                     </View>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
};

export default BodyPart;