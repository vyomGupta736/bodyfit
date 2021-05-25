import React from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';
import { verticalScale, scale, w, h } from '../Components/Exports';
import { ScrollView, TouchableNativeFeedback } from 'react-native-gesture-handler';
import { time } from '../Actions/workActions';
import { connect } from 'react-redux';
import BodyPart from '../Components/BodyPart';
import Header from '../Components/Header';

const INITIAL_STATE = {
    m1 : false,
    m2 : false,
    m3 : false,
    m4 : false,
    m5 : false,
    e1 : false,
    e2 : false,
    e3 : false,
    e4 : false,
}

class Time extends React.Component{
    state = {
        m1 : true,
        m2 : false,
        m3 : false,
        m4 : false,
        m5 : false,
        e1 : false,
        e2 : false,
        e3 : false,
        e4 : false,
        valid : {
            validated : true,
            data : ["m1"]
        }
    }

    componentDidMount()
    {
        console.log(this.state.valid.data);
        this.props.navigation.addListener('focus', () => {
            if(!this.props.date)
            {
                this.props.navigation.navigate('Date');
            }
            this.setState({
                m1 : true,
                m2 : false,
                m3 : false,
                m4 : false,
                m5 : false,
                e1 : false,
                e2 : false,
                e3 : false,
                e4 : false
            })
        })
    }

    validateForm = () => {
        const data = Object.keys(this.state).filter(item => {
            return this.state[item] == true
        });
        if(data.length)
        {
            this.setState({valid : {...this.state.valid, validated : true, data : [...data]}});
        }
        else
        {
            this.setState({valid : {...this.state.valid, validated : false, data : [...data]}});
        }
    }

    render()
    {
        return (
            <View style={{flex:1,backgroundColor:'white'}} >
                <Header onPress={() => this.props.navigation.navigate('Date')}
                  />
                <View style={{height:verticalScale(20),justifyContent:'center',alignItems:'flex-start',marginTop:verticalScale(10)}} >
                    <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(15),color:'gray',marginLeft:scale(10)}} >Choose Time Slot</Text>
                </View>
                
                <View style={{flex:1,marginTop:verticalScale(10)}} >
                    <ScrollView style={{flex:1}} >
                    <View style={{width:w,height:w/3.5,flexDirection:'row',marginBottom:verticalScale(20)}} >
                           <View style={{width:w/28}} />
                           <View style={{width:w/3.5,borderRadius:scale(4),overflow:'hidden'}} >
                               <BodyPart 
                                 onPress = {() => this.setState({...INITIAL_STATE, m1 : !INITIAL_STATE.m1}, this.validateForm)}
                                 selected={this.state.m1}
                                 icon={require('../StaticImages/m1.png')}
                                 title="6:00 AM"
                                 />
                           </View>
                           <View style={{width:w/28}} />
                           <View style={{width:w/3.5}} >
                               <BodyPart 
                               onPress = {() => this.setState({...INITIAL_STATE, m2 : !INITIAL_STATE.m2}, this.validateForm)}
                               selected = {this.state.m2}
                               icon={require('../StaticImages/m2.png')}
                               title="7:00 AM"
                               />
                           </View>
                           <View style={{width:w/28}} />
                           <View style={{width:w/3.5}} >
                               <BodyPart 
                                onPress = {() => this.setState({...INITIAL_STATE, m3 : !INITIAL_STATE.m3}, this.validateForm)}
                                selected = {this.state.m3}
                                icon={require('../StaticImages/m1.png')}
                                title="8:00 AM"
                                />
                           </View>
                           <View style={{width:w/28}} />
                       </View>
                       <View style={{width:w,height:w/3.5,flexDirection:'row',marginBottom:verticalScale(20)}} >
                           <View style={{width:w/28}} />
                           <View style={{width:w/3.5}} >
                               <BodyPart 
                                onPress = {() => this.setState({...INITIAL_STATE, m4 : !INITIAL_STATE.m4}, this.validateForm)}
                                selected = {this.state.m4}
                                icon={require('../StaticImages/m3.png')}
                                title="9:00 AM"
                                />
                           </View>
                           <View style={{width:w/28}} />
                           <View style={{width:w/3.5}} >
                               <BodyPart 
                                onPress = {() => this.setState({...INITIAL_STATE, m5 : !INITIAL_STATE.m5}, this.validateForm)}
                                selected = {this.state.m5}
                                icon={require('../StaticImages/m2.png')}
                                title="10:00 AM"
                                />
                           </View>
                           <View style={{width:w/28}} />
                           <View style={{width:w/3.5}} >
                               <BodyPart 
                                onPress = {() => this.setState({...INITIAL_STATE, e1 : !INITIAL_STATE.e1}, this.validateForm)}
                                selected = {this.state.e1}
                                icon={require('../StaticImages/n2.png')}
                                title="6:00 PM"
                                />
                           </View>
                           <View style={{width:w/28}} />
                       </View>
                       <View style={{width:w,height:w/3.5,flexDirection:'row',marginBottom:verticalScale(20)}} >
                           <View style={{width:w/28}} />
                           <View style={{width:w/3.5}} >
                               <BodyPart 
                                 onPress = {() => this.setState({...INITIAL_STATE, e2 : !INITIAL_STATE.e2}, this.validateForm)}
                                 selected = {this.state.e2}
                                 icon={require('../StaticImages/n1.png')}
                                 title="7:00 PM"
                                />
                           </View>
                           <View style={{width:w/28}} />
                           <View style={{width:w/3.5}} >
                               <BodyPart 
                                onPress = {() => this.setState({...INITIAL_STATE, e3 : !INITIAL_STATE.e3}, this.validateForm)}
                                selected = {this.state.e3}
                                icon={require('../StaticImages/n3.png')}
                                title="8:00 PM"
                                />
                           </View>
                           <View style={{width:w/28}} />
                           <View style={{width:w/3.5}} >
                               <BodyPart 
                                 onPress = {() => this.setState({...INITIAL_STATE, e4 : !INITIAL_STATE.e4}, this.validateForm)}
                                 selected = {this.state.e4}
                                 icon={require('../StaticImages/n3.png')}
                                 title="9:00 PM"
                                />
                           </View>
                           <View style={{width:w/28}} />
                       </View>
                        
                          {!this.state.valid.validated?
                           <View style={{height:verticalScale(20),justifyContent:'center',alignItems:'center',marginVertical:verticalScale(10)}} >
                                <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(15),color:'red',marginLeft:scale(10)}} >Please select atleast one Time Slot</Text>
                           </View>:null}
                          <View style={{height:verticalScale(60),borderWidth:0,marginVertical:verticalScale(10),flexDirection:'row'}} >
                              <View style={{flex:1}} />
                              <View style={{flex:25,borderWidth:0,borderRadius:scale(7),overflow:'hidden'}} >
                                <TouchableOpacity onPress={() => {
                                    this.props.time(this.state.valid.data);
                                    this.props.navigation.navigate("ChooseType");
                                }}
                                style={{width:'100%',height:'100%',backgroundColor:'darkturquoise',justifyContent:'center',alignItems:'center'}} >
                                    <Text allowFontScaling={false} style={{color:'white',fontSize:scale(17),fontFamily:'Gilroy-SemiBold',fontFamily:'Gilroy-SemiBold'}} >Next</Text>
                                </TouchableOpacity>
                              </View>
                              <View style={{flex:1}} />
                           </View>

                           
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    console.log(state.workoutReducer.date);
    return {
        date : state.workoutReducer.date,
        time : state.workoutReducer.time,
        demoTaken : state.workoutReducer.demoTaken
    }
}

export default connect(mapStateToProps,{ time })(Time);