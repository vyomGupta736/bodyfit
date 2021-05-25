import React from 'react';
import {View,Text,Image,TouchableOpacity,TextInput,ActivityIndicator,BackHandler, Alert} from 'react-native';
import styles from '../Components/Styles';
import { scale, verticalScale } from '../Components/Exports';
import { connect } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import { manualPhoneLogin } from '../Actions/phoneActions';
import Timer from '../Components/Timer';

class PhoneCode extends React.Component
{
    state = {
        code : '',
        focused : false,
        showTimer : true
    }

    componentDidMount()
    {
        SplashScreen.hide();
        console.log("from component did mount of phone code");
        this.props.navigation.addListener('focus', () => {
            this.setState({focused : true,showTimer : true});
        }); 

        this.props.navigation.addListener('blur',() => {
            this.setState({focused : false});
        });

       this.backListener =  BackHandler.addEventListener("hardwareBackPress", () => {
            if(this.state.focused)
            {
                return true;
            }
            else
            {
                return false;
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

    componentDidUpdate()
    {
        console.log("in updated");
        if(!this.state.showTimer)
        {
            this.props.navigation.navigate('PhoneEntry');
        }
    }

    render()
    {
        return (
            <View style={{flex:1,backgroundColor:'rgb(255,255,255)',position:'relative'}}>
            {this.props.loading?<View style={{...styles.astyles,zIndex:100,justifyContent:'center',alignItems:'center'}}>
                <View style={{...styles.astyles,backgroundColor:'gray',opacity:0.5}} />
                <View style={{width:'70%',height:'20%',backgroundColor:'white',justifyContent:'center',alignItems:'center',borderTopLeftRadius:scale(15),borderBottomRightRadius:scale(15)}}>
                    <ActivityIndicator size="large" />
                    <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(14)}}>Please hold on</Text>
                    <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',color:'rgb(51,148,24)',fontSize:scale(15)}}>We are authenticating you</Text>
                </View>
            </View>:null}
           <View style={{flex:2.6}}>
               <View style={{flex:2.3}}></View>
               <View style={{flex:1,flexDirection:'row'}}>
                  <View style={{flex:1}}></View>
                  <TouchableOpacity disabled={this.state.showTimer && this.props.loginCodeFail}
                    onPress = {() => this.props.navigation.navigate('PhoneEntry')}
                    style={{flex:1.7}}>
                      <Image source={require('../StaticImages/arrow.png')} resizeMode="contain" style={styles.istyles} />
                  </TouchableOpacity>
                  <View style={{flex:14}}></View>
               </View>
               <View style={{flex:1}}></View>
           </View>
           <View style={{flex:1,flexDirection:'row'}}>
               <View style={{flex:1}}></View>
               <View style={{flex:10}}>
                   <Text allowFontScaling={false} style={{fontSize:scale(22),fontWeight:'bold',color:'rgb(14,14,86)'}}>Log in using the OTP</Text>
               </View>
               <View style={{flex:2.4}}></View>
           </View>
           <View style={{flex:.2}}></View>
           <View style={{flex:1,flexDirection:'row'}}>
               <View style={{flex:1}}></View>
               <View style={{flex:10,justifyContent:'flex-start'}}>
                   <Image source={require('../StaticImages/otp.png')} resizeMode="contain" style={{width:'100%', height:'80%'}} />
               </View>
               <View style={{flex:2}}></View>
           </View>
           <View style={{flex:2.6}}>
               <View style={{flex:2,borderColor:'red'}}></View>
               <View style={{flex:7,flexDirection:'row'}}>
                   <View style={{flex:1}}></View>
                   <View style={{flex:15}}>
                       <View style={{flex:2,flexDirection:'row'}}>
                           <TextInput
                            disabled={this.state.showTimer}
                            allowFontScaling={false}
                            value={this.state.value}
                            onChangeText = {value => this.setState({code : value})}
                            keyboardType="phone-pad" autoFocus={true} maxLength={6} 
                            allowFontScaling={false} style={{letterSpacing:5,flex:1,fontFamily:'Gilroy-SemiBold',fontSize:scale(19),textAlign:'center'}} placeholder="enter your code here" />
                       </View>
                       <View style={{flex:1,borderTopWidth:2,borderColor:'rgb(14,14,86)'}}/>
                   </View>
                   <View style={{flex:1}}></View>
               </View>
               <View style={{flex:3.5,justifyContent:'center',alignItems:'center'}} >
                    {this.props.loginCodeFail && this.state.showTimer?<Timer transferValue = {() => {
                        this.setState({showTimer : !this.state.showTimer})
                    }} />:null}
               </View>
           </View>
           <View style={{flex:4.8}}>
               <View style={{flex:.7}}></View>
               <View style={{flex:1.3,flexDirection:'row'}}>
                   <View style={{flex:1,}}></View>
                    <TouchableOpacity disabled={this.state.showTimer && this.props.loginCodeFail}
                       onPress = {() => {this.props.manualPhoneLogin(this.state.code, this.props.phone_response)}}
                       style={this.state.showTimer && this.props.loginCodeFail?{flex:15,backgroundColor:'rgb(230,230,230)',borderRadius:6,overflow:'hidden',justifyContent:'center',alignItems:'center'}:
                                                    {flex:15,backgroundColor:'rgb(51,148,24)',borderRadius:6,overflow:'hidden',justifyContent:'center',alignItems:'center'}}>
                            <Text allowFontScaling={false} style={{color:'white',fontFamily:'Gilroy-SemiBold',fontSize:scale(16)}} allowFontScaling={false}>Next</Text>
                    </TouchableOpacity>
                   <View style={{flex:1}}></View>
               </View>
               <View style={{flex:4}}></View>
           </View>
           <View style={{flex:1}}></View>
    </View>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("from phone code map state");
    return {
        phone_response :  state.phoneReducer.phone_response,
        loading : state.phoneReducer.loading,
        loginCodeFail : state.phoneReducer.loginCodeFail
    }
}

export default connect(mapStateToProps,{manualPhoneLogin})(PhoneCode);