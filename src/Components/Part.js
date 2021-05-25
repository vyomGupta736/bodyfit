import React from 'react';
import {View,Text,Image} from 'react-native';
import { verticalScale, scale, w } from './Exports';
import styles from './Styles';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

const Part = ({imageSource,partName,selected,onPress,sized,cost}) => {
    const size = sized?sized:13/32*w;
    return (
        <View style={{height:size,marginTop:verticalScale(15)}} >
            <View style={{flex:1,flexDirection:'row'}} >
                <View style={{flex:1}} ></View>
                <View style={{flex:30,borderWidth:0,borderRadius:scale(4),overflow:'hidden'}} >
                    <TouchableNativeFeedback onPress = {() => onPress()}
                    style={{width:'100%',height:'100%'}} >
                        <Image source={imageSource} resizeMode="stretch" style={{width:'100%',height:'100%'}} />
                        <View style={{...styles.astyles,backgroundColor:'rgb(60,60,60)',opacity:0.5}}/>
                        <View style={{...styles.astyles,borderWidth:0}} >
                            <View style={{height:verticalScale(2*size/5),borderColor:'white',flexDirection:'row'}} >
                                <View style={{flex:1,borderColor:'white'}} >
                                   <Text allowFontScaling={false} style={{color:'white',fontSize:scale(15),fontFamily:'Gilroy-SemiBold',marginLeft:scale(10),marginTop:verticalScale(10)}} >{partName}</Text>
                                </View>
                                {sized?<View style={{width:scale(20),height:scale(20),borderRadius:scale(20),borderWidth:1,borderColor:'white',marginRight:scale(10),marginTop:verticalScale(10),justifyContent:'center',alignItems:'center',marginLeft:scale(10)}} >
                                    <View style={selected?{width:scale(13),height:scale(13),borderRadius:scale(16),backgroundColor:'white'}:null} ></View>
                                </View>:null}
                            </View>
                            <View style={{height:verticalScale(size/5)}} ></View>
                            <View style={{height:verticalScale(size/5),borderWidth:0,borderColor:'white',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}} >
                                <Text allowFontScaling={false} style={{color:'white',fontSize:scale(15),fontFamily:'Gilroy-SemiBold',marginLeft:scale(10)}} >{cost}</Text>
                                <View style={{width:w/4,backgroundColor:'darkturquoise',height:verticalScale(25),marginRight:scale(10),borderRadius:scale(10),justifyContent:'center',alignItems:'center'}} >
                                    <Text allowFontScaling={false} style={{color:'white',fontSize:scale(15),fontFamily:'Gilroy-SemiBold'}} >Let's Go</Text>
                                </View>
                            </View>
                            <View style={{height:verticalScale(size/5)}} ></View>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                
                <View style={{flex:1}} ></View>
            </View>
        </View>
    )
};

export default Part;