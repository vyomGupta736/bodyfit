import React from 'react';
import {View,Text,BackHandler,Image,ActivityIndicator,LayoutAnimation,UIManager} from 'react-native';
import { connect } from 'react-redux';
import {clearCart, bookDemoSession, bookPaidSession, bookPaidLater } from '../Actions/workActions';
import { scale, verticalScale, w } from '../Components/Exports';
import { ScrollView, TouchableOpacity, TouchableNativeFeedback } from 'react-native-gesture-handler';
import styles from '../Components/Styles';

if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

class Payment extends React.Component{

    state = {
        loading : false,
        focused : false,
        showExtra : false
    }

    componentDidMount()
    {
        this.props.navigation.addListener('focus', () => {
            this.setState({focused : true});
        }); 

        this.props.navigation.addListener('blur', () => {
            this.setState({focused : false});
        }); 

       this.backListener = BackHandler.addEventListener("hardwareBackPress", () => {
            if(this.state.focused)
            {
                return true;
            }
            else
            {
                return false
            }
        })
    }

    componentWillUnmount()
    {
        if(this.backListener)
        {
            this.backListener.remove();
        }
    }

    render(){
        return(
            <View style={{flex:1,backgroundColor:'white'}} >
                {this.props.sending?<View style={{...styles.astyles,zIndex:100,justifyContent:'center',alignItems:'center'}}>
                    <View style={{...styles.astyles,backgroundColor:'gray',opacity:0.5}} />
                    <View style={{width:'70%',height:'20%',backgroundColor:'white',justifyContent:'center',alignItems:'center',borderTopLeftRadius:scale(15),borderBottomRightRadius:scale(15)}}>
                        <ActivityIndicator size="large" />
                        <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(14)}}>Please hold on</Text>
                        <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',color:'rgb(51,148,24)',fontSize:scale(15)}}>We are booking your session...</Text>
                    </View>
                </View>:null}
                <View style={{height:verticalScale(65),backgroundColor:'darkturquoise',flexDirection:'row',justifyContent:'center',alignItems:'center',elevation:10,shadowColor:'gray',shadowOffset:{height:10},marginBottom:verticalScale(10)}} >
                     <View style={{width:w/1.3,borderColor:'white',height:verticalScale(50),flexDirection:'row'}} >
                         <View style={{flex:3,justifyContent:'center',alignItems:'center'}} >
                             <Text allowFontScaling={false} style={{color:'white',fontFamily:'Gilroy-SemiBold',fontSize:scale(17)}} >Health highway</Text>
                         </View>
                         <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
                            <Image source={require('../StaticImages/logo.png')} resizeMode="contain" style={{width:'100%',height:'100%'}} />
                         </View>
                     </View>
                </View>
                <View style={{height:verticalScale(35),borderWidth:0,justifyContent:'center',alignItems:'center',marginBottom:verticalScale(10)}} >
                   <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(15),color:'gray',marginHorizontal:scale(10)}} >Payment Gateway</Text>
                </View>
                <View style={{flex:1}} >
                    {
                        (this.props.booked && Object.keys(this.props.unpaidSession).length == 0)?<View style={{minHeight : verticalScale(100),alignItems:'center'}} >
                               <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(16),color:'orange',marginHorizontal:scale(10),marginVertical:verticalScale(20)}} >Hurray !!! your session is booked</Text>
                               <View style={{height:verticalScale(56),flexDirection:'row',marginBottom:verticalScale(30)}} >
                                    <View style={{flex:1}} />
                                    <View style={{flex:10,borderRadius:scale(5),overflow:'hidden'}} >
                                        <TouchableOpacity onPress={() => {
                                            this.props.navigation.navigate('HomeEntry')
                                        }}
                                        style={{...styles.tstyles, backgroundColor:'darkturquoise',justifyContent:'center',alignItems:'center'}} >
                                        <Text allowFontScaling={false} style={{fontSize:scale(16),fontFamily:'Gilroy-SemiBold',color:'white',marginHorizontal:scale(10)}} >Select more...</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{flex:1}} />
                               </View>
                               <View style={{height:verticalScale(56),flexDirection:'row',marginBottom:verticalScale(30)}} >
                                    <View style={{flex:1}} />
                                    <View style={{flex:10,borderRadius:scale(5),overflow:'hidden'}} >
                                        <TouchableOpacity onPress={() => {
                                            this.props.navigation.navigate('ProfileSection',{ screen : 'Profile' });
                                        }}
                                        style={{...styles.tstyles, backgroundColor:'darkturquoise',justifyContent:'center',alignItems:'center'}} >
                                        <Text allowFontScaling={false} style={{fontSize:scale(16),fontFamily:'Gilroy-SemiBold',color:'white',marginHorizontal:scale(10)}} >See your booked sessions..</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{flex:1}} />
                               </View>
                        </View>
                        :null
                    }
                    {
                        (this.props.error && (Object.keys(this.props.unpaidSession).length == 0))?<View style={{minHeight : verticalScale(100),alignItems:'center'}} >
                               <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'red',marginHorizontal:scale(10),marginVertical:verticalScale(20)}} >Oops!!! there seems to be some error</Text>
                               <View style={{height:verticalScale(56),flexDirection:'row',marginBottom:verticalScale(30)}} >
                                    <View style={{flex:1}} />
                                    <View style={{flex:12,borderRadius:scale(5),overflow:'hidden'}} >
                                        <TouchableOpacity onPress={() => {
                                            this.props.navigation.navigate('HomeEntry')
                                        }}
                                        style={{...styles.tstyles, backgroundColor:'darkturquoise',justifyContent:'center',alignItems:'center'}} >
                                        <Text allowFontScaling={false} style={{fontSize:scale(16),fontFamily:'Gilroy-SemiBold',color:'white',marginHorizontal:scale(10)}} >Select again...</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{flex:1}} />
                               </View>
                        </View>
                        :null
                    }
                    {(Object.keys(this.props.unpaidSession).length >= 1)?<ScrollView style={{flex:1}} >
                    
                        <View style={{flexDirection:'row'}} >
                            <View style={{flex:1}} />
                            <View style={{flex:30,borderWidth:0,elevation:2}} >
                                <TouchableNativeFeedback onPress={() => {
                                    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
                                    this.setState({showExtra : !this.state.showExtra});
                                }}
                                  style={{height:verticalScale(45),borderWidth:0,justifyContent:'center',alignItems:'center',backgroundColor:'darkturquoise'}} >
                                    <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(15),color:'white'}} >Book your session...</Text>
                                </TouchableNativeFeedback>
                                <View style={{borderWidth:1,borderColor:'gainsboro'}} >
                                    <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'gray',marginHorizontal:scale(10),paddingTop:scale(5)}} >Your Session beginning time is : </Text>
                                    {this.props.unpaidSession.time.map((time, index) => {
                                        return (
                                        <Text key={index} allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(15),color:'gray',marginHorizontal:scale(10),paddingTop:scale(10)}} >{index+1} : {(time.charAt(0) === 'e')?`${6+Number(time.charAt(1))-1}:00 PM`:`${6+Number(time.charAt(1)-1)}:00 AM`}</Text>
                                        )
                                    })}
                                    <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'gray',marginHorizontal:scale(10),paddingTop:scale(5)}} >Duration : {(this.props.demoTaken)?"40 min.":(this.props.unpaidSession.premium)?"40 min":"30 min.."} </Text>
                                    <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(15),color:'gray',marginHorizontal:scale(10),paddingTop:scale(10)}} >Your choosen date is : {this.props.unpaidSession.date.substring(0,15)} </Text>
                                    <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(15),color:'gray',marginHorizontal:scale(10),paddingTop:scale(10)}} >Your choosen Mode of session : {this.props.unpaidSession.mode} </Text>
                                    <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(15),color:'gray',marginHorizontal:scale(10),paddingTop:scale(10)}} >Your choice(s) for today is/are : </Text>
                                    {this.props.unpaidSession.exercises.map((exercise, index) => {
                                        return (
                                        <Text key={index} allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(15),color:'gray',marginHorizontal:scale(10),marginVertical:scale(10)}} >{index+1} : {exercise}</Text>
                                        )
                                    })}
                                    <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(15),color:'gray',marginHorizontal:scale(10),marginVertical:scale(10)}} >You have to Pay us Rs : {(!this.props.unpaidSession.premium )?(!this.props.demoTaken)?<Text style={{color:'darkturquoise'}} >0 (as free demo Session)</Text>:<Text>{this.props.unpaidSession.price}</Text>:<Text>{this.props.unpaidSession.price }</Text>}</Text>
                                    <TouchableOpacity onPress={() => {
                                        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
                                        this.setState({showExtra : !this.state.showExtra});
                                    }} >
                                        {!this.state.showExtra?<Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(16),color:'darkturquoise',marginHorizontal:scale(10),alignSelf:'flex-end',marginBottom:verticalScale(10)}} >show more....</Text>:null}
                                    </TouchableOpacity>
                                    {this.state.showExtra?<View style={{marginBottom:verticalScale(10)}} >
                                        <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(15),color:'gray',marginHorizontal:scale(10),marginTop:scale(10)}} >Username : {this.props.userName} </Text>
                                        <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(15),color:'gray',marginHorizontal:scale(10),marginTop:scale(5)}} >Mobile number :  {this.props.phoneNumber}</Text>
                                        <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(15),color:'gray',marginHorizontal:scale(10),marginTop:scale(5)}} >Address :--</Text>
                                        <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(15),color:'gray',marginHorizontal:scale(10),marginTop:scale(5)}} >1 :  Street Name : {this.props.unpaidSession.streetName}</Text>
                                        <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(15),color:'gray',marginHorizontal:scale(10),marginTop:scale(5)}} >2 :  House/Lane NO :  {this.props.unpaidSession.houseNo}</Text>
                                        <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(15),color:'gray',marginHorizontal:scale(10),marginTop:scale(5)}} >3 :  Landmark :  {this.props.unpaidSession.landmark}</Text>
                                        <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(15),color:'gray',marginHorizontal:scale(10),marginTop:scale(5)}} >4 : Some Other Info :  {this.props.unpaidSession.other}</Text>
                                        <TouchableOpacity onPress={() => {
                                        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
                                        this.setState({showExtra : !this.state.showExtra});
                                        }} >
                                            {this.state.showExtra?<Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(16),color:'darkturquoise',marginHorizontal:scale(10),alignSelf:'flex-end',marginBottom:verticalScale(10)}} >show less....</Text>:null}
                                        </TouchableOpacity>
                                    </View>:null}
                                </View>
                            </View>
                            <View style={{flex:1}} />
                        </View>

                        <View style={{height:verticalScale(56),flexDirection:'row',marginTop:verticalScale(10),marginBottom:verticalScale(15),borderWidth:0}} >
                            <View style={{flex:1}} />
                            <View style={{flex:6}} >
                                <TouchableNativeFeedback onPress={() => {
                                    if(!this.props.demoTaken)
                                    {
                                        if(this.props.unpaidSession.premium)
                                        {
                                            this.props.bookPaidLater(this.props.phoneNumber, this.props.unpaidSession, this.props.userName)
                                        }
                                        else
                                        {
                                            this.props.bookDemoSession(this.props.phoneNumber,this.props.email,this.props.userName,this.props.unpaidSession);
                                        }
                                    }
                                    else
                                    {
                                        this.props.bookPaidLater(this.props.phoneNumber, this.props.unpaidSession, this.props.userName)
                                    }
                                }}
                                  style={{...styles.tstyles, backgroundColor : 'darkturquoise',borderRadius:scale(4),overflow:'hidden',justifyContent:'center',alignItems:'center'}} >
                                   <Text allowFontScaling={false} style={{fontSize:scale(14),fontFamily:'Gilroy-SemiBold',color:'white',marginHorizontal:scale(10)}} >{(this.props.demoTaken)?`Book Session now`:(this.props.unpaidSession.premium)?`Book session now`:`Book session now`}</Text>
                                </TouchableNativeFeedback>
                            </View>
                            <View style={{flex:.6}} />
                            <View style={{flex:6}} >
                                <TouchableNativeFeedback onPress={() => {
                                    this.props.clearCart();
                                    this.props.navigation.navigate('HomeEntry')
                                }}
                                  style={{...styles.tstyles, backgroundColor : 'orange',borderRadius:scale(4),overflow:'hidden',justifyContent:'center',alignItems:'center'}} >
                                    <Text allowFontScaling={false} style={{fontSize:scale(14),fontFamily:'Gilroy-SemiBold',color:'white',marginHorizontal:scale(10)}} >Cancel</Text>
                                </TouchableNativeFeedback>
                            </View>
                            <View style={{flex:1}} />
                            
                        </View>

                        {/* {(this.props.demoTaken || this.props.unpaidSession.premium)?<View style={{height:verticalScale(56),borderWidth:0,flexDirection:'row',marginTop:verticalScale(5)}} >
                            <View style={{flex:1}} />
                            <View style={{flex:14,borderWidth:0,borderRadius:scale(5),overflow:'hidden',backgroundColor:'darkturquoise'}} >
                                <TouchableNativeFeedback onPress={() => {
                                    this.props.bookPaidLater(this.props.phoneNumber, this.props.unpaidSession, this.props.userName)
                                }}
                                  style={{...styles.tstyles,justifyContent:'center',alignItems:'center'}} >
                                     <Text allowFontScaling={false} style={{fontSize:scale(14),fontFamily:'Gilroy-SemiBold',color:'white',marginHorizontal:scale(10)}} >Pay on delivery</Text>
                                </TouchableNativeFeedback>
                            </View>
                            <View style={{flex:1}} />
                        </View>:null} */}
                        
                    </ScrollView>:null}
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    console.log("from payment screen");
    console.log(state.sessions.unpaidSession);
    console.log(state.phoneReducer.demoTaken);
    console.log(state.phoneReducer.userName);
    console.log(state.phoneReducer.phoneNumber);
    console.log(state.sessions.error);
    console.log(state.sessions.booked);
    return {
        sending : state.sessions.sending,
        unpaidSession : state.sessions.unpaidSession,
        demoTaken : state.phoneReducer.demoTaken,
        userName : state.phoneReducer.userName,
        phoneNumber : state.phoneReducer.phoneNumber,
        email : state.phoneReducer.email,
        booked : state.sessions.booked,
        error : state.sessions.error
    }
};

export default connect(mapStateToProps,{ clearCart, bookDemoSession, bookPaidSession, bookPaidLater })(Payment);