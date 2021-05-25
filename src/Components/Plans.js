import React from 'react';
import {View,Text,Image} from 'react-native';
import { verticalScale, scale, w } from './Exports';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import styles from './Styles';

const Plans = ({imageSource,header,subTitle,onPress}) => {
    return (
        <View style={{height:verticalScale(180),flexDirection:'row',marginTop:verticalScale(20)}} >
             <View style={{flex:1}} />
             <View style={{flex:30,borderRadius:scale(3),overflow:'hidden',elevation:1,shadowColor:'black',shadowOffset:{height:10,width:0}}}>
                 <TouchableNativeFeedback onPress={() => onPress()}
                   style={{...styles.tstyles}} >
                      <View style={{flex:1}} >
                         <Image source={imageSource} resizeMode="cover" style={styles.istyles} />
                         <View style={{...styles.astyles, backgroundColor:'rgb(60,60,60)',opacity:0.6}} />
                         <View style={{...styles.astyles}} >
                             <View style={{position:'absolute',top:verticalScale(30),left:0,height:verticalScale(80),width:w/1.5,borderTopRightRadius:scale(100),borderBottomRightRadius:scale(100),overflow:'hidden'}} >
                                <View style={{...styles.astyles, backgroundColor:'turquoise',opacity:0.5}} />
                                <View style={{...styles.astyles,justifyContent:'center',alignItems:'center'}} >
                                    <Text allowFontScaling={false} style={{fontSize:scale(15),fontFamily:'Gilroy-SemiBold',color:'white',marginHorizontal:scale(10)}} >{header}</Text>
                                </View>
                             </View>
                             {subTitle?<View style={{position:'absolute',width:w/3.0,height:w/3.0,borderRadius:w/3.0,bottom:0,right:0,bottom:-w/16,right:-w/16,overflow:'hidden'}} >
                                  <View style={{...styles.astyles,backgroundColor:'turquoise',opacity:0.5}} />
                                  <View style={{...styles.astyles,justifyContent:'center',alignItems:'center'}} >
                                     <Text allowFontScaling={false} style={{fontSize:scale(14),fontFamily:'Gilroy-SemiBold',color:'white',marginRight:scale(20),marginLeft:scale(5)}} >Turn</Text>
                                     <Text allowFontScaling={false} style={{fontSize:scale(14),fontFamily:'Gilroy-SemiBold',color:'white',marginRight:scale(20),marginLeft:scale(5)}} >FAT into FIT !!!</Text>
                                  </View>
                             </View>:null}
                         </View>
                      </View>
                 </TouchableNativeFeedback>
             </View>
             <View style={{flex:1}} />
        </View>
    )
}

export default Plans;