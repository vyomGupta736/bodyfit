import React from 'react';
import {View,Text,Image} from 'react-native';
import { verticalScale, scale, w, h } from '../Components/Exports';
import styles from '../Components/Styles';

const ShowSession = ({session,title,userName,phoneNumber,isDemo}) => {
    return (
        <View style={{borderWidth:0,flexDirection:'row',marginTop:verticalScale(20)}} >
                        <View style={{flex:1}} />
                        <View style={{flex:30,borderWidth:0}} >
                            <View style={{height:verticalScale(200)}} >
                                <Image source={require('../StaticImages/gym.jpg')} resizeMode="cover" style={styles.istyles} />
                                <View style={{...styles.astyles, backgroundColor:'rgb(60,60,60)',opacity:0.6}} />
                                <View style={{...styles.astyles}} >
                                    <View style={{position:'absolute',top:verticalScale(30),left:0,height:verticalScale(80),width:w/1.5,borderTopRightRadius:scale(100),borderBottomRightRadius:scale(100),overflow:'hidden'}} >
                                        <View style={{...styles.astyles, backgroundColor:'turquoise',opacity:0.5}} />
                                        <View style={{...styles.astyles,justifyContent:'center',alignItems:'center'}} >
                                            <Text allowFontScaling={false} style={{fontSize:scale(15),fontFamily:'Gilroy-SemiBold',color:'white',marginHorizontal:scale(10)}} >{title}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{minHeight:verticalScale(200),borderWidth:1,borderColor:'gray'}} >
                               <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(15),color:'gray',marginHorizontal:scale(10),marginVertical:scale(10)}} >Username : {userName} </Text>
                               <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(15),color:'gray',marginHorizontal:scale(10),marginVertical:scale(10)}} >Mobile number :  {phoneNumber}</Text>
                               <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(15),color:'gray',marginHorizontal:scale(10),marginVertical:scale(10)}} >Address :--</Text>
                               <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(15),color:'gray',marginHorizontal:scale(10),marginVertical:scale(10)}} >1 :  Street Name : {session.streetName}</Text>
                               <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(15),color:'gray',marginHorizontal:scale(10),marginVertical:scale(10)}} >2 :  House/Lane NO :  {session.houseNo}</Text>
                               <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(15),color:'gray',marginHorizontal:scale(10),marginVertical:scale(10)}} >3 :  Landmark :  {session.landmark}</Text>
                               <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(15),color:'gray',marginHorizontal:scale(10),marginVertical:scale(10)}} >4 : Some Other Info :  {session.other}</Text>
                               <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(15),color:'gray',marginHorizontal:scale(10),marginVertical:scale(10)}} >Your choosen time slot(s) is/are : </Text>
                               {session.time.map((time, index) => {
                                   return (
                                   <Text key={index} allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(15),color:'gray',marginHorizontal:scale(10),marginVertical:scale(10)}} >{index+1} : {(time.charAt(0) === 'e')?`${6+Number(time.charAt(1))-1}:00 PM`:`${6+Number(time.charAt(1)-1)}:00 AM`}</Text>
                                   )
                               })}
                               <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(15),color:'gray',marginHorizontal:scale(10),marginVertical:scale(10)}} >Your choosen session Mode is : {session.mode}</Text>
                               <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(15),color:'gray',marginHorizontal:scale(10),marginVertical:scale(10)}} >Your choosen date is : {session.date.substring(0,15)} </Text>
                               <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(15),color:'gray',marginHorizontal:scale(10),marginVertical:scale(10)}} >Your Selected Exercise(s) is/are : </Text>
                               {session.exercises.map((exercise, index) => {
                                   return (
                                   <Text key={index} allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(15),color:'gray',marginHorizontal:scale(10),marginVertical:scale(10)}} >{index+1} : {exercise}</Text>
                                   )
                               })}
                               <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(15),color:'gray',marginHorizontal:scale(10),marginVertical:scale(10)}} >Payment : {isDemo?<Text allowFontScaling={false} style={{color:'darkturquoise',fontSize:scale(15)}} >0 (as free demo Session)</Text>:<Text allowFontScaling={false} style={{color:'darkturquoise',fontSize:scale(15)}} >{session.price }</Text>}</Text>
                            {isDemo?null:<Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(15),color:'gray',marginHorizontal:scale(10),marginVertical:scale(10)}} >Payment Mode : {session.paymentMode}</Text>}
                               <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(15),color:'gray',marginHorizontal:scale(10),marginVertical:scale(10)}} >Order id : {session.order_id || session.sessionId}</Text>
                            </View>
                        </View>
                        <View style={{flex:1}} />
                        </View>
    )
};

export default ShowSession;