import React from 'react';
import {View,Text,TouchableOpacity, ActivityIndicator,BackHandler} from 'react-native';
import InputField from '../Components/InputField';
import SplashScreen from 'react-native-splash-screen';
import { scale, verticalScale } from '../Components/Exports';
import { userAdditionalInfo, isUserAlreadyPresent } from '../Actions/phoneActions';
import { connect } from 'react-redux';
import styles from '../Components/Styles';

class UserInfo extends React.Component{
    state = {
        name : '',
        email : '',
        valid : false,
        focused : false
    }
    componentDidMount()
    {
        SplashScreen.hide();
        console.log("from component did mount of user info screen ");
        if(this.props.phone_info)
        {
            this.props.isUserAlreadyPresent(this.props.phone_info.phoneNumber);
        }else
        {
            this.props.navigation.navigate('PhoneCode');
        }
        
        this.props.navigation.addListener('focus', () => {
            this.setState({name : '',email : '',focused : true, valid : false});
        }); 

        this.props.navigation.addListener('blur',() => {
            this.setState({focused : false, valid : false});
        });

       this.backListener = BackHandler.addEventListener("hardwareBackPress", () => {
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

    UNSAFE_componentWillReceiveProps(nextProps)
    {
        if(nextProps.sent)
        {
            this.props.navigation.navigate('Other',{ screen : 'Main', params : { screen : 'HomeEntry' } })
        }
        else if(nextProps.userName)
        {
            this.props.navigation.navigate('Other',{ screen : 'Main', params : { screen : 'HomeEntry' } })
        }
    }

    validateForm = () => {
        if(this.state.name.length>=3)
        {
            this.setState({valid : true})
        }
        else
        {
            this.setState({valid : false});
        }
    }

    handleAdditionalInfo = () => {
        // let phoneNumber = '';
        // if(this.props.phone_info.user == undefined)
        // {
        //     phoneNumber = this.props.phone_info.phoneNumber
        // }
        // else
        // {
        //     phoneNumber = this.props.phone_info.user.phoneNumber
        // }
        if(this.props.phone_info)
        {
            const info = {
                name : this.state.name,
                email : this.state.email,
                phoneNumber : this.props.phone_info.phoneNumber
            };
           this.props.userAdditionalInfo(info);
        }
        else
        {
            this.props.navigation.navigate('PhoneCode');
        }
        
    }

    render()
    {
        return(
            <View style={{flex:1,backgroundColor:'white'}}>
            {this.props.sending?<View style={{...styles.astyles,zIndex:100,justifyContent:'center',alignItems:'center'}}>
                    <View style={{...styles.astyles,backgroundColor:'gray',opacity:0.5}} />
                    <View style={{width:'70%',height:'20%',backgroundColor:'white',justifyContent:'center',alignItems:'center',borderTopLeftRadius:scale(15),borderBottomRightRadius:scale(15)}}>
                        <ActivityIndicator size="large" />
                        <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(14)}}>Please hold on</Text>
                        <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',color:'rgb(51,148,24)',fontSize:scale(15)}}>We are authenticating you</Text>
                    </View>
                </View>:null}
            <View style={{flex:.5}}/>
            <View style={{flex:1,alignItems:'center',justifyContent:'space-between'}}>
                <Text allowFontScaling={false} style={{color:'rgb(14,14,86)',fontFamily:'Gilroy-Semibold',fontSize:scale(14)}}>Personal Details</Text>
                <Text allowFontScaling={false} style={{color:'rgb(14,14,86)',fontFamily:'Gilroy-Light',fontSize:scale(18)}}>Tell us a bit more about yourself</Text>
            </View>
            <View style={{flex:.5}}></View>
            <View style={{flex:1.2}}>
                <View style={{flex:1}}></View>
                <View style={{flex:5,flexDirection:'row'}}>
                    <View style={{flex:1}}></View>
                    <View style={{flex:15}}>
                        <InputField 
                         onChangeText = {value => this.setState({name : value}, this.validateForm)}
                         value = {this.state.name}
                         placeholderText="Your name " 
                         legendText="User Name" 
                         secure={false} 
                         autoFocus={true} 
                         type="default" />
                    </View>
                    <View style={{flex:1}}></View>
                </View>
                <View style={{flex:1}}></View>
            </View>
            <View style={{height:verticalScale(12)}}></View>
            <View style={{height:verticalScale(12),marginBottom:verticalScale(30)}} >
                <Text allowFontScaling={false} style={{color:'red',fontFamily:'Gilroy-Light',fontSize:scale(14),marginLeft:scale(20)}} >* email is optional</Text>
            </View>
            <View style={{flex:1.2}}>
                <View style={{flex:1}}></View>
                <View style={{flex:5,flexDirection:'row'}}>
                    <View style={{flex:1}}></View>
                    <View style={{flex:15}}>
                        <InputField 
                          onChangeText = {value => this.setState({email : value}, this.validateForm) }
                          value = {this.state.email}
                          placeholderText="your email id.." 
                          legendText="Email Address" 
                          secure={false} 
                          autoFocus={false} 
                          type="default" />
                    </View>
                    <View style={{flex:1}}></View>
                </View>
                <View style={{flex:1}}></View>
            </View>

            <View style={{flex:.4}}></View>
            <View style={{flex:1.6}}>
                <View style={{flex:1,flexDirection:'row'}}>
                    <View style={{flex:1}}></View>
                    <TouchableOpacity onPress={() => this.handleAdditionalInfo()}
                        disabled={!this.state.valid}
                        style={{flex:15,borderRadius:scale(3),overflow:'hidden'}}>
                        <View style={this.state.valid?{flex:1,backgroundColor:'rgb(51,148,24)',justifyContent:'center',alignItems:'center'}:{flex:1,backgroundColor:'gainsboro',justifyContent:'center',alignItems:'center'}}>
                            <Text allowFontScaling={false} style={{color:'white',fontSize:16,fontFamily:'Gilroy-SemiBold',fontSize:scale(19)}} >Continue</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{flex:1}}></View>
                </View>
                <View style={{flex:.8}}></View>
            </View>

            <View style={{flex:1}}></View>

            <View style={{flex:1}}></View>

            <View style={{flex:1}}></View>


            </View>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("inside map state to props function from user info screen ");
    console.log(state.phoneReducer.phone_info);
    console.log(state.phoneReducer.userName);
    return {
       phone_info : state.phoneReducer.phone_info,
       sending : state.phoneReducer.sending,
       sent : state.phoneReducer.sent,
       userName : state.phoneReducer.userName
    }
}

export default connect(mapStateToProps,{ userAdditionalInfo, isUserAlreadyPresent })(UserInfo);