import React from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';
import { scale, verticalScale, w, h }  from '../Components/Exports'
import { ScrollView } from 'react-native-gesture-handler';
import Part from '../Components/Part';
import { mode } from '../Actions/workActions';
import { connect } from 'react-redux';
import Header from '../Components/Header';

class ChooseType extends React.Component{
    state = {
        physical : false,
        video : true
    }

    componentDidMount()
    {
        this.props.navigation.addListener('focus', () => {
            if(!this.props.time.length)
            {
                this.props.navigation.navigate('Time');
            }
            this.setState({video : true, physical : false});
        })
    }


    handleMode = () => {
        if(this.state.physical)
        {
            this.props.mode("Physical",300);
            this.props.navigation.navigate('Address');
        }
        else
        {
            this.props.mode("Video",150);
            this.props.navigation.navigate('Address');
        }
    }

    render()
    {
        return (
            <View style={{flex:1,backgroundColor:'white'}} >
                 
                 <Header onPress={() => this.props.navigation.navigate('Time')} />

                <View style={{flex:1}} >
                   <ScrollView style={{flex:1}} >
                       <Part cost="Rs 150/- session"
                           sized={210} 
                           partName="Want live sessions with your trainer over a video call?"
                           imageSource={require('../StaticImages/video.jpg')}
                           onPress = {() => this.setState({video : !this.state.video, physical : !this.state.physical})}
                           selected = {this.state.video}
                       />
                       <Part cost="Rs 300/- session" 
                           sized={210} 
                           partName="Want sessions at your home at ur comfort ?"
                           imageSource={require('../StaticImages/home.jpg')}
                           onPress = {() => this.setState({physical : !this.state.physical, video : !this.state.video})}
                           selected = {this.state.physical}
                       />

                          <View style={{height:verticalScale(60),borderWidth:0,marginTop:verticalScale(10),flexDirection:'row'}} >
                              <View style={{flex:1}} />
                              <View style={{flex:25,borderWidth:0,borderRadius:scale(7),overflow:'hidden'}} >
                                <TouchableOpacity onPress={() => {
                                    this.handleMode();
                                }}
                                style={{width:'100%',height:'100%',backgroundColor:'darkturquoise',justifyContent:'center',alignItems:'center'}} >
                                    <Text allowFontScaling={false} style={{color:'white',fontSize:scale(17),fontFamily:'Gilroy-SemiBold',fontFamily:'Gilroy-SemiBold'}} >Next</Text>
                                </TouchableOpacity>
                              </View>
                              <View style={{flex:1}} />
                           </View>

                           <View style={{height:verticalScale(30)}} />
                   </ScrollView>
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    console.log(state.workoutReducer.mode);
    console.log(state.workoutReducer.time);
    return {
        time : state.workoutReducer.time,
        mode : state.workoutReducer.mode
    }
}

export default connect(mapStateToProps,{ mode })(ChooseType);