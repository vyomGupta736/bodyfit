import React from 'react';
import {View,Text,Image} from 'react-native';
import { verticalScale, scale, w } from '../Components/Exports';
import { ScrollView, TouchableNativeFeedback } from 'react-native-gesture-handler';
import styles from '../Components/Styles';
import { addItem } from '../Actions/workActions';
import { connect } from 'react-redux';
import BodyPart from '../Components/BodyPart';
import Header from '../Components/Header';

class Home extends React.Component{
    state = {
        abs : false,
        back : false,
        chest : false,
        full : false,
        biceps : false,
        shoulders : false,
        cardio : false,
        upperBody : false,
        lowerBody : false,
        triceps : false,
        valid : {
            validated : false,
            data : []
        }
    }

    componentDidMount()
    {
        this.props.navigation.addListener('focus', () => {
            this.setState({
                abs : false,
                back : false,
                chest : false,
                full : false,
                biceps : false,
                shoulders : false,
                upperBody : false,
                lowerBody : false,
                triceps : false,
                valid : {...this.state.valid, validated : false, data : []}
            });
        });
    }

    validateForm = () => {
        console.log(Object.keys(this.state));
        const data = Object.keys(this.state).filter(item => {
             return this.state[item] == true
        });
        console.log(data);
        if(data.length)
        {
            this.setState({valid : {...this.state.valid, validated : true, data : [...data]}})
        }
        else
        {
            this.setState({valid : {...this.state.valid, validated : false, data : [...data]}})
        }
    }

    render()
    {
        return (
            <View style={{flex:1,backgroundColor:'white'}} >
                <Header onPress={() => this.props.navigation.navigate('HomeEntry')}
                  />
                <View style={{height:verticalScale(20),justifyContent:'center',alignItems:'center',marginTop:verticalScale(10)}} >
                    <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(15),color:'gray',marginLeft:scale(10)}} >Which body part(s) u wanna train today?</Text>
                </View>
                <View style={{flex:1,marginTop:verticalScale(20)}} >
                   <ScrollView style={{flex:1}} >
                       <View style={{width:w,height:w/3.5,flexDirection:'row',marginBottom:verticalScale(20)}} >
                           <View style={{width:w/28}} />
                           <View style={{width:w/3.5,borderRadius:scale(4),overflow:'hidden'}} >
                               <BodyPart 
                                 onPress={() => this.setState({abs : !this.state.abs}, this.validateForm)}
                                 selected={this.state.abs}
                                 icon={require('../StaticImages/abs.png')}
                                 title="Abs"
                                 />
                           </View>
                           <View style={{width:w/28}} />
                           <View style={{width:w/3.5}} >
                               <BodyPart 
                               onPress = {() => this.setState({biceps : !this.state.biceps}, this.validateForm)}
                               selected = {this.state.biceps}
                               icon={require('../StaticImages/arms.png')}
                               title="Biceps"
                               />
                           </View>
                           <View style={{width:w/28}} />
                           <View style={{width:w/3.5}} >
                               <BodyPart 
                                onPress = {() => this.setState({shoulders : !this.state.shoulders}, this.validateForm)}
                                selected = {this.state.shoulders}
                                icon={require('../StaticImages/shoulder.png')}
                                title="Shoulders"
                                />
                           </View>
                           <View style={{width:w/28}} />
                       </View>
                       <View style={{width:w,height:w/3.5,flexDirection:'row',marginBottom:verticalScale(20)}} >
                           <View style={{width:w/28}} />
                           <View style={{width:w/3.5}} >
                               <BodyPart 
                                onPress = {() => this.setState({lowerBody : !this.state.lowerBody}, this.validateForm)}
                                selected = {this.state.lowerBody}
                                icon={require('../StaticImages/lower.png')}
                                title="Lower body"
                                />
                           </View>
                           <View style={{width:w/28}} />
                           <View style={{width:w/3.5}} >
                               <BodyPart 
                                onPress = {() => this.setState({back : !this.state.back}, this.validateForm)}
                                selected = {this.state.back}
                                icon={require('../StaticImages/back.png')}
                                title="Back"
                                />
                           </View>
                           <View style={{width:w/28}} />
                           <View style={{width:w/3.5}} >
                               <BodyPart 
                                onPress = {() => this.setState({full : !this.state.full}, this.validateForm)}
                                selected = {this.state.full}
                                icon={require('../StaticImages/full.png')}
                                title="Full body"
                                />
                           </View>
                           <View style={{width:w/28}} />
                       </View>
                       <View style={{width:w,height:w/3.5,flexDirection:'row',marginBottom:verticalScale(20)}} >
                           <View style={{width:w/28}} />
                           <View style={{width:w/3.5}} >
                               <BodyPart 
                                 onPress = {() => this.setState({upperBody : !this.state.upperBody}, this.validateForm)}
                                 selected = {this.state.upperBody}
                                 icon={require('../StaticImages/upper.png')}
                                 title="Upper body"
                                />
                           </View>
                           <View style={{width:w/28}} />
                           <View style={{width:w/3.5}} >
                               <BodyPart 
                                onPress = {() => this.setState({triceps : !this.state.triceps}, this.validateForm)}
                                selected = {this.state.triceps}
                                icon={require('../StaticImages/triceps.png')}
                                title="Triceps"
                                />
                           </View>
                           <View style={{width:w/28}} />
                           <View style={{width:w/3.5}} >
                               <BodyPart 
                                 onPress = {() => this.setState({chest : !this.state.chest}, this.validateForm)}
                                 selected = {this.state.chest}
                                 icon={require('../StaticImages/chest.png')}
                                 title="Chest"
                                />
                           </View>
                           <View style={{width:w/28}} />
                       </View>

                           {!this.state.valid.validated?
                           <View style={{height:verticalScale(20),justifyContent:'center',alignItems:'center',marginVertical:verticalScale(10)}} >
                                <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(15),color:'red',marginLeft:scale(10)}} >Please select atleast one work out...</Text>
                           </View>:null}

                           <View style={{height:verticalScale(60),borderWidth:0,marginTop:verticalScale(10),flexDirection:'row'}} >
                              <View style={{flex:1}} />
                              <View style={{flex:25,borderWidth:0,borderRadius:scale(7),overflow:'hidden'}} >
                                <TouchableNativeFeedback disabled={!this.state.valid.validated}
                                onPress={() => {
                                    this.props.addItem(this.state.valid.data,false);
                                    this.props.navigation.navigate('Date');
                                  }}
                                style={{width:'100%',height:'100%',backgroundColor:this.state.valid.validated?'darkturquoise':'gainsboro',justifyContent:'center',alignItems:'center'}} >
                                    <Text allowFontScaling={false} style={{color:'white',fontSize:scale(17),fontFamily:'Gilroy-SemiBold',fontFamily:'Gilroy-SemiBold'}} >Next</Text>
                                </TouchableNativeFeedback>
                              </View>
                              <View style={{flex:1}} />
                           </View>

                           <View style={{height:verticalScale(200),borderWidth:0,marginVertical:verticalScale(20)}} >
                              <Image source={require('../StaticImages/new.jpg')} resizeMode="contain" style={styles.istyles} />
                           </View>

                   </ScrollView>
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    console.log("from home gym screen");
    console.log(state.workoutReducer.exercises);
    return {
        exercises : state.workoutReducer.exercises
    }
}

export default connect(mapStateToProps,{ addItem })(Home);