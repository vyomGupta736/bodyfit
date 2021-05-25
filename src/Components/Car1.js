import React from 'react';
import {View, Text,Image} from 'react-native';
import { w, h, scale } from './Exports';
import styles from './Styles';
import Ionicon from 'react-native-vector-icons/FontAwesome5';

const Car1 = () => {
    return (
        <View style={{width:w,height:h/1.1,borderWidth:0}} >
             <Image source={require('../StaticImages/one.jpg')} resizeMode="stretch" style={styles.istyles} />
             <View style={{...styles.astyles}} >
                    <View style={{width:scale(180),height:scale(180),borderRadius:scale(200),backgroundColor:'white',position:'absolute',left:-scale(40),top:-scale(30),justifyContent:'center',alignItems:'center'}} >
                        <Text allowFontScaling={false} style={{color:'mediumturquoise',fontFamily:'Gilroy-Light',fontSize:scale(19),marginLeft:scale(10),marginTop:scale(10)}} >Practice</Text>
                        <Text allowFontScaling={false} style={{color:'mediumturquoise',fontFamily:'Gilroy-Light',fontSize:scale(18),marginLeft:scale(10)}} >Your flow</Text>
                        <Text allowFontScaling={false} style={{color:'mediumturquoise',fontFamily:'Gilroy-SemiBold',fontSize:scale(18),marginLeft:scale(10)}} >Wherever</Text>
                        <Text allowFontScaling={false} style={{color:'mediumturquoise',fontFamily:'Gilroy-SemiBold',fontSize:scale(18),marginLeft:scale(10)}} >you go!</Text>
                    </View>
                    <View style={{width:scale(250),height:scale(250),borderRadius:scale(250),alignSelf:'center',marginTop:h/2-scale(200),justifyContent:'center',alignItems:'center'}} >
                          <View style={{...styles.astyles,borderRadius:scale(200),opacity:0.5,backgroundColor:'cyan'}} />
                          <View style={{width:scale(60),height:scale(60)}} >
                              <Image source={require('../StaticImages/logo.png')} resizeMode="contain" style={styles.istyles} />
                          </View>
                          <Text allowFontScaling={false} style={{color:'white',fontFamily:'Gilroy-SemiBold',fontSize:scale(20)}} >healthHighway</Text>
                          <Ionicon name="running" size={40} color="white" style={{marginTop:scale(5)}} />
                          <View style={{width:scale(60),height:scale(3),backgroundColor:'white',borderRadius:scale(10),marginTop:scale(10),marginBottom:scale(5)}} />
                          <View style={{width:scale(90),height:scale(3),backgroundColor:'white',borderRadius:scale(10)}} />
                    </View>
                    <View style={{width:scale(180),height:scale(180),borderRadius:scale(200),backgroundColor:'white',position:'absolute',bottom:scale(10),right:-scale(40),justifyContent:'center',alignItems:'center'}} >
                        <Text allowFontScaling={false} style={{color:'mediumturquoise',fontFamily:'Gilroy-SemiBold',fontSize:scale(19),marginRight:scale(20)}} >Start</Text>
                        <Text allowFontScaling={false} style={{color:'mediumturquoise',fontFamily:'Gilroy-SemiBold',fontSize:scale(18),marginRight:scale(20)}} >Your</Text>
                        <Text allowFontScaling={false} style={{color:'mediumturquoise',fontFamily:'Gilroy-SemiBold',fontSize:scale(18),marginRight:scale(20)}} >journey</Text>
                        <Text allowFontScaling={false} style={{color:'mediumturquoise',fontFamily:'Gilroy-Light',fontSize:scale(18),marginRight:scale(20)}} >with FREE</Text>
                        <Text allowFontScaling={false} style={{color:'mediumturquoise',fontFamily:'Gilroy-Light',fontSize:scale(18),marginRight:scale(20)}} >sample</Text>
                        <Text allowFontScaling={false} style={{color:'mediumturquoise',fontFamily:'Gilroy-Light',fontSize:scale(18),marginRight:scale(20)}} >classes</Text>
                    </View>
             </View>
        </View>
    )
};

export default Car1;