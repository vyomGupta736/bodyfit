import React from 'react';
import {View,Text,Image, TouchableOpacity} from 'react-native';
import { scale, verticalScale, w, h } from '../Components/Exports';
import InputField from '../Components/InputField';
import { ScrollView} from 'react-native-gesture-handler';
import { address } from '../Actions/workActions';
import { connect } from 'react-redux';
import Header from '../Components/Header';

class Address extends React.Component{
    state = {
        streetName : '',
        houseNo : '',
        landmark : '',
        other : '',
        valid : false
    }

    componentDidMount()
    {
       this.props.navigation.addListener('focus', () => {
           console.log("focusing");
            if(!this.props.time.length)
            {
                this.props.navigation.navigate('HomeEntry');
            }
            this.setState({streetName : this.props.streetName, houseNo : this.props.houseNo || '', landmark : this.props.landmark || ''}, () => {
                if(this.props.streetName)
                {
                    this.setState({ valid : true });
                }
            });
        }); 

        this.props.navigation.addListener('blur', () => {
            
        });
    }

    validateForm = () => {
        if(this.state.streetName.length>=6 && this.state.houseNo.length && this.state.landmark.length >= 5)
        {
            this.setState({valid : true})
        }
        else
        {
            this.setState({valid : false})
        }
    }

    render()
    {
        return (
            <View style={{flex:1,backgroundColor:'white'}} >
                
                <Header onPress={() => this.props.navigation.navigate('ChooseType')} />

                <View style={{height:verticalScale(20),justifyContent:'center',alignItems:'center',marginTop:verticalScale(10)}} >
                    <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(15),color:'gray',marginLeft:scale(10)}} >Enter your Address for delivery</Text>
                </View>
                <View style={{flex:1,marginTop:verticalScale(10)}} >
                     <ScrollView style={{flex:1}} >
                        <View style={{height:verticalScale(60),flexDirection:'row',marginTop:verticalScale(20)}} >
                            <View style={{flex:1}} ></View>
                            <View style={{flex:17}} >
                                <InputField 
                                onChangeText = {(value) => this.setState({streetName : value}, this.validateForm) }
                                value = {this.state.streetName}
                                legendText="Street Name"
                                placeholderText="Street name..."
                                autoFocus={false}
                                secure={false}
                                type="default" />
                            </View>
                            <View style={{flex:1}} ></View>
                        </View>
                        <View style={{height:verticalScale(60),flexDirection:'row',marginTop:verticalScale(20)}} >
                            <View style={{flex:1}} ></View>
                            <View style={{flex:17}} >
                                <InputField 
                                onChangeText = {(value) => this.setState({houseNo : value}, this.validateForm) }
                                value = {this.state.houseNo}
                                legendText="House No"
                                autoFocus={false}
                                secure={false}
                                type="phone-pad"
                                placeholderText="House no./lane no." />
                            </View>
                            <View style={{flex:1}} ></View>
                        </View>
                        <View style={{height:verticalScale(80),flexDirection:'row',marginTop:verticalScale(20)}} >
                            <View style={{flex:1}} ></View>
                            <View style={{flex:17}} >
                                <InputField 
                                onChangeText = {(value) => this.setState({landmark : value}, this.validateForm) }
                                value = {this.state.landmark}
                                legendText="Landmark"
                                autoFocus={false}
                                secure={false}
                                type="default"
                                placeholderText="Some landmark..." />
                            </View>
                            <View style={{flex:1}} ></View>
                        </View>
                        <View style={{height:verticalScale(100),flexDirection:'row',marginTop:verticalScale(20)}} >
                            <View style={{flex:1}} ></View>
                            <View style={{flex:17}} >
                                <InputField 
                                onChangeText = {(value) => this.setState({other : value}, this.validateForm) }
                                value = {this.state.other}
                                legendText="Some Other Valuable Tips"
                                autoFocus={false}
                                secure={false}
                                type="default"
                                placeholderText="Some Other Valuable Tips for delivery" />
                            </View>
                            <View style={{flex:1}} ></View>
                        </View>

                           <View style={{height:verticalScale(56),borderWidth:0,marginTop:verticalScale(30),flexDirection:'row'}} >
                              <View style={{flex:1}} />
                              <View style={{flex:20,borderWidth:0,borderRadius:scale(7),overflow:'hidden'}} >
                                <TouchableOpacity disabled={!this.state.valid}
                                onPress={() => {
                                    this.props.address({...this.state,exercises : this.props.exercises,date : this.props.date, time : this.props.time, mode : this.props.mode, price : this.props.price, premium : this.props.premium});
                                    this.props.navigation.navigate("Payment")
                                }}
                                style={this.state.valid?{width:'100%',height:'100%',backgroundColor:'darkturquoise',justifyContent:'center',alignItems:'center'}:{width:'100%',height:'100%',backgroundColor:'gainsboro',justifyContent:'center',alignItems:'center'}} >
                                    <Text allowFontScaling={false} style={{color:'white',fontSize:scale(17),fontFamily:'Gilroy-SemiBold',fontFamily:'Gilroy-SemiBold'}} >Save & Next</Text>
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
    console.log("from address screen");
    console.log(state.workoutReducer);
    console.log(state.phoneReducer.streetName);
    console.log(state.phoneReducer.houseNo);
    console.log(state.phoneReducer.landmark);
    console.log(state.workoutReducer.premium);
    return {
        exercises : state.workoutReducer.exercises,
        date : state.workoutReducer.date,
        time : state.workoutReducer.time,
        mode : state.workoutReducer.mode,
        price : state.workoutReducer.price,
        streetName : state.phoneReducer.streetName,
        houseNo : state.phoneReducer.houseNo,
        landmark : state.phoneReducer.landmark,
        premium : state.workoutReducer.premium
    }
}

export default connect(mapStateToProps, { address })(Address);