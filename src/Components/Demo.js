import React from 'react';
import {View,Text,Image} from 'react-native';
import { verticalScale, scale,w } from './Exports';
import styles from './Styles';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

const Demo = ({userName,demoTaken}) => {
   return (
       <View style={{height:20/32*w,flexDirection:'row'}} >
           <View style={{flex:1}} />
           <View style={{flex:30,borderRadius:scale(3),overflow:'hidden',elevation:5,shadowColor:'black',shadowOffset:{height:10,width:0}}} >
               <View style={styles.tstyles} >
                 <View style={{flex:1}} >
                    <Image source={require('../StaticImages/demo.jpg')} resizeMode="cover" style={styles.istyles} />
                    <View style={{...styles.astyles,backgroundColor:'rgb(60,60,60)',opacity:0.2}}/>
                    <View style={styles.astyles} >
                    <View style={{width:w/4,height:w/4,backgroundColor:'white',borderRadius:w/4,position:'absolute',left:-w/10,top:-w/10,backgroundColor:'cyan',opacity:0.3}} ></View>
                    <View style={{position:'absolute',height:w/2.1,width:w/2.1,borderRadius:w/2.1,top:Math.abs(verticalScale(110)-w/4.2),alignSelf:'center',overflow:'hidden'}} >
                        <View style={{...styles.astyles, backgroundColor:'cyan',opacity:0.4}} />
                        {!demoTaken?<View style={{...styles.astyles,justifyContent:'center',alignItems:'center'}} >
                            <Text allowFontScaling={false} style={{fontSize:scale(16),fontFamily:'Gilroy-Light',color:'white'}} >Hello <Text allowFontScaling={false} style={{fontSize:scale(16),fontFamily:'Gilroy-SemiBold',color:'white'}} >{userName}</Text></Text>
                            <Text allowFontScaling={false} style={{fontSize:scale(16),fontFamily:'Gilroy-Light',color:'white'}} >Enjoy</Text>
                            <Text allowFontScaling={false} style={{fontSize:scale(16),fontFamily:'Gilroy-SemiBold',color:'white'}} >your Free</Text>
                            <Text allowFontScaling={false} style={{fontSize:scale(16),fontFamily:'Gilroy-SemiBold',color:'white'}} >Demo session</Text>
                        </View>:<View style={{...styles.astyles,justifyContent:'center',alignItems:'center'}}  >
                             <Text allowFontScaling={false} style={{fontSize:scale(17),fontFamily:'Gilroy-SemiBold',color:'white'}} >Health</Text>
                             <Text allowFontScaling={false} style={{fontSize:scale(16),fontFamily:'Gilroy-SemiBold',color:'white'}} >is the</Text>
                             <Text allowFontScaling={false} style={{fontSize:scale(16),fontFamily:'Gilroy-SemiBold',color:'white'}} >biggest luxury</Text>
                             <Text allowFontScaling={false} style={{fontSize:scale(16),fontFamily:'Gilroy-SemiBold',color:'white'}} >you have!!</Text>
                            </View>}
                    </View>
                    <View style={{width:w/3.2,height:w/3.2,position:'absolute',bottom:-w/15,right:-w/15,backgroundColor:'white',borderRadius:w/3.2,justifyContent:'center',alignItems:'center'}} >
                        <Text allowFontScaling={false} style={{fontSize:scale(16),fontFamily:'Gilroy-SemiBold',color:'turquoise',marginRight:scale(10),marginBottom:scale(10)}} >Explore!!</Text>
                    </View>
                   </View>   
                 </View>
               </View>
           </View>
           <View style={{flex:1}} />
       </View>
   )
};


export default Demo;