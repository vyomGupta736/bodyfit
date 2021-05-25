import React from 'react';
import {View,Text,TouchableOpacity,Image} from 'react-native';
import { verticalScale, scale, w, h } from './Exports';
import styles from '../Components/Styles';

const ShowOrders = ({session,isDemo,onPress}) => {
    
    return (
        <View style={{flexDirection:'row',marginTop:verticalScale(10)}} >
             <View style={{flex:1}} />
             <TouchableOpacity onPress={() => onPress()}
               style={{flex:30,borderWidth:1,borderColor:'gainsboro'}} >
                <View style={{height:verticalScale(150)}} >
                    <Image source={require('../StaticImages/gym.jpg')} resizeMode="cover" style={styles.istyles} />
                    <View style={{...styles.astyles, backgroundColor:'rgb(60,60,60)',opacity:0.6}} />
                    <View style={{...styles.astyles}} >
                        <View style={{position:'absolute',top:verticalScale(30),left:0,height:verticalScale(60),width:w/1.5,borderTopRightRadius:scale(100),borderBottomRightRadius:scale(100),overflow:'hidden'}} >
                            <View style={{...styles.astyles, backgroundColor:'turquoise',opacity:0.5}} />
                            <View style={{...styles.astyles,justifyContent:'center',alignItems:'center'}} >
                                <Text allowFontScaling={false} style={{fontSize:scale(14),fontFamily:'Gilroy-SemiBold',color:'white',marginHorizontal:scale(10)}} >{(isDemo)?`your demo session is booked`:`your session is booked`}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                 <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}} >
                    <Text allowFontScaling={false} style={{fontFamily:'Gilroy-Medium',fontSize:scale(14),color:'black',paddingLeft:scale(10),paddingTop:verticalScale(10)}} >Order id : {session?`${session.order_id.substring(0,10) || session.sessionId.substring(0,10) }......`:null}</Text>
                    <Text allowFontScaling={false} style={{fontFamily:'Gilroy-Medium',fontSize:scale(14),color:'black',paddingRight:scale(10),paddingTop:verticalScale(10)}} >{!isDemo?`Rs ${session.price}`:`Free`}</Text>
                 </View>
                 <View style={{flex:1}} >
                    <Text allowFontScaling={false} style={{fontFamily:'Gilroy-Medium',fontSize:scale(14),color:'black',paddingLeft:scale(10),paddingTop:verticalScale(5),paddingBottom:verticalScale(10)}} >{session?session.date.substring(0,15):null}</Text>
                 </View>
             </TouchableOpacity>
             <View style={{flex:1}} />
        </View>
    )
};

export default ShowOrders;