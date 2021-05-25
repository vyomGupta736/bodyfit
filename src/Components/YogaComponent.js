import React from 'react';
import {View,Text,Image} from 'react-native';
import styles from './Styles';
import { w, h, scale, verticalScale } from '../Components/Exports';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

const YogaComponent = ({imageSource,title,onPress,body,color,size}) => {
    return (
        <View style={{width:3*w/7,marginRight:w/21,borderWidth:0,height:size?size:3*w/7,marginBottom:w/21,borderRadius:scale(5),overflow:'hidden',backgroundColor:color}} >
            <Image source={imageSource} resizeMode="stretch" style={styles.istyles} />
            <View style={{...styles.astyles,backgroundColor:'black',opacity:color?0.2:0.6}} />
            <View style={styles.astyles} >
                <TouchableNativeFeedback onPress={() => onPress()}
                  style={styles.tstyles} >
                    <View style={{flex:1,padding:scale(5),justifyContent:'space-between'}} >
                       <Text allowFontScaling={false} style={{color:'white',fontFamily:'Gilroy-Medium',fontSize:scale(16)}} >{title}</Text>
                       <Text allowFontScaling={false} style={{color:'white',fontFamily:'Gilroy-Medium',fontSize:scale(13),padding:scale(5)}} >{body}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View> 
        </View>
    )
};

export default YogaComponent;