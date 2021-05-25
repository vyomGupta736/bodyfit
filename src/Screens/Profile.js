import React from 'react';
import {View,Text,Image,TouchableOpacity, Alert} from 'react-native';
import { verticalScale, w, scale } from '../Components/Exports';
import styles from '../Components/Styles';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';
import { logOut } from '../Actions/logoutActions';
import { workoutClear, selectItem } from '../Actions/workActions';
import ShowSession from '../Components/ShowSession';
import ShowOrders from '../Components/ShowOrders';
import Header from '../Components/Header';

class Profile extends React.Component{

    UNSAFE_componentWillReceiveProps(nextProps)
    {
        if(!nextProps.phone_info)
        {
           this.props.navigation.navigate('LoginFlow',{ screen : 'Entry' });
        }
    }

    handleLogout = () => {
        Alert.alert(
            'Logging out...',
            'Are you sure you want to log out?',
            [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel'
                },
                { text: 'OK', onPress: () => this.props.logOut() }
            ],
              { cancelable: false }
        )
    }

    render()
    {
        return (
            <View style={{flex:1,backgroundColor:'white'}} >
                
                 <Header onPress={() => this.props.navigation.navigate('Main',{ screen : 'HomeEntry' }) }
                   />
                
                <View style={{flex:1}} >
                    <ScrollView style={{flex:1}} >
                    <View style={{height:verticalScale(20),justifyContent:'center',alignItems:'flex-start',marginBottom:verticalScale(10)}} >
                        <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(15),color:'gray',marginLeft:scale(10)}} >Your Name : <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(15),color:'turquoise',marginRight:scale(10)}} >{this.props.userName}</Text> </Text>
                    </View>
                    <View style={{height:verticalScale(20),justifyContent:'center',alignItems:'flex-start',marginBottom:verticalScale(10)}} >
                        <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(15),color:'gray',marginLeft:scale(10)}} >Your Contact number : <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(15),color:'turquoise',marginRight:scale(10)}} >{this.props.phoneNumber}</Text> </Text>
                    </View>

                    <View style={{height:verticalScale(20),justifyContent:'center',alignItems:'center',marginBottom:verticalScale(10)}} >
                        <Text allowFontScaling={false} style={{fontFamily:'Gilroy-Medium',fontSize:scale(16),color:'darkturquoise',marginLeft:scale(10)}} >Here are your booked sessions....</Text>
                    </View>
                    {(Object.keys(this.props.demoSession).length == 0 && !this.props.paidSessions.length )?
                    <View style={{marginVertical:verticalScale(10)}} >
                        <View style={{height:verticalScale(20),justifyContent:'center',alignItems:'flex-start',marginBottom:verticalScale(15)}} >
                            <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(16),color:'gray',marginLeft:scale(10)}} >You haven't booked anything yet.....</Text>
                        </View>
                        <View style={{height:verticalScale(56),flexDirection:'row'}} >
                            <View style={{flex:1}} />
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Main',{ screen : 'HomeEntry' })} 
                            style={{flex:10,borderRadius:scale(5),backgroundColor:'darkturquoise',justifyContent:'center',alignItems:'center'}} >
                                <Text allowFontScaling={false} style={{fontSize:scale(16),fontFamily:'Gilroy-SemiBold',color:'white',marginHorizontal:scale(10)}} >Book a session now.</Text>
                            </TouchableOpacity>
                            <View style={{flex:1}} />
                        </View>
                    </View>:null}
                        {(Object.keys(this.props.demoSession).length >= 1)?
                         <ShowOrders onPress={() => {
                             this.props.navigation.navigate('OrderExpand');
                             this.props.selectItem(this.props.demoSession,true);
                         }}
                           session={this.props.demoSession} isDemo={true} />:null}
                        {this.props.paidSessions.length?(this.props.paidSessions.map((session,index) => {
                            return (
                                 <ShowOrders
                                    onPress={() => {
                                        this.props.navigation.navigate('OrderExpand');
                                        this.props.selectItem(session,false);
                                    }}
                                   key={index}
                                   session={session}
                                   isDemo={false}
                                 />
                            )
                        })):null}
                        
                        {(Object.keys(this.props.demoSession).length == 0 && !this.props.paidSessions.length )?null:<View style={{height:verticalScale(56),flexDirection:'row',marginTop:verticalScale(20)}} >
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
                        </View>}

                        <View style={{height:verticalScale(56),flexDirection:'row',marginTop:verticalScale(20)}} >
                             <View style={{flex:1}} />
                             <TouchableOpacity onPress={() => this.handleLogout()}
                              style={{flex:10,backgroundColor:'orange',justifyContent:'center',alignItems:'center',borderRadius:scale(5)}} >
                                 <Text allowFontScaling={false} style={{fontSize:scale(16),letterSpacing:2,fontFamily:'Gilroy-SemiBold',color:'white',alignSelf:'center'}} >Log out <Ionicons name="sign-out-alt" color="white" size={25} /> </Text>
                             </TouchableOpacity>
                             <View style={{flex:1}} />
                        </View>
                        <View style={{height:verticalScale(150),borderWidth:0,marginTop:verticalScale(20),marginBottom:verticalScale(10)}} >
                              <Image source={require('../StaticImages/new.jpg')} resizeMode="contain" style={styles.istyles} />
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const mapStatetoProps = (state) => {
    console.log("from profile page");
    console.log(state.sessions.demoSession);
    console.log(state.sessions.paidSessions)
    return {
        phone_info : state.phoneReducer.phone_info,
        phoneNumber : state.phoneReducer.phoneNumber,
        paidSessions : state.sessions.paidSessions,
        userName : state.phoneReducer.userName,
        demoSession : state.sessions.demoSession
     }
}

export default connect(mapStatetoProps,{ logOut, workoutClear, selectItem })(Profile);

//<ShowSession session={this.props.demoSession} userName={this.props.userName} phoneNumber={this.props.phoneNumber} isDemo={true} title="A Demo session for you.." />

{/* <ShowSession 
    key={index}
    session={session}
    userName={this.props.userName}
    phoneNumber={this.props.phoneNumber}
    isDemo={false}
    title="Enjoy your booked session"
/> */}