import React from 'react';
import {View,Text,ActivityIndicator} from 'react-native';
import { scale, verticalScale, w, h } from '../Components/Exports';
import styles from '../Components/Styles';
import CalendarPicker from 'react-native-calendar-picker';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { dateAndName } from '../Actions/workActions';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import Header from '../Components/Header';

class Dated extends React.Component{
    state = {
        date : '',
        valid : false,
        trialBefore : false
    }

    componentDidMount()
    {
        const date = new Date();
        this.props.navigation.addListener('focus', () => {
            this.setState({date : '', valid : false});
            if(!this.props.exercises.length)
            {
                this.props.navigation.navigate('HomeEntry');
            }
        });

        this.props.navigation.addListener('blur', () => {
            this.setState({date : '', valid : false});
        })

    }

    validateForm = () => {
        if(this.state.date)
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
                
                <Header onPress={() => this.props.navigation.navigate('HomeEntry')}
                  />
                <View style={{height:verticalScale(25),justifyContent:'center',alignItems:'center',marginVertical:verticalScale(10)}} >
                    <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(18),color:'mediumturquoise',marginLeft:scale(10)}} >Fitness calender</Text>
                </View>
                <View style={{flex:1,marginTop:verticalScale(3)}} >
                    <ScrollView>
                        <View style={{height:verticalScale(40),justifyContent:'center',alignItems:'center',marginBottom:verticalScale(15)}} >
                            <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(15),color:'gray',marginHorizontal:scale(10)}} >Choose date you want to book session for?</Text>
                        </View> 
                        <CalendarPicker
                        minDate={new Date(2020,6,18)}
                        allowRangeSelection={false}
                        weekdays={['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']}
                        months={[
                            'January',
                            'Febraury',
                            'March',
                            'April',
                            'May',
                            'June',
                            'July',
                            'August',
                            'September',
                            'October',
                            'November',
                            'December',
                        ]}
                        previousTitle="Previous"
                        nextTitle="Next"
                        todayBackgroundColor="#e6ffe6"
                        selectedDayColor="#66ff33"
                        selectedDayTextColor="#000000"
                        scaleFactor={375}
                        textStyle={{
                            fontFamily: 'Gilroy-SemiBold',
                            color: '#000000',
                        }}
                        onDateChange={(date) => this.setState({date : date.toString()}, this.validateForm)}
                    />
                    {this.state.date?<View style={{height:verticalScale(25),justifyContent:'center',alignItems:'flex-start',marginTop:verticalScale(10)}} >
                       <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(15),color:'gray',marginLeft:scale(20)}} >Selected date : </Text>
                       <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(15),color:'darkturquoise',marginLeft:scale(20)}} >{this.state.date.substring(0,15)} </Text>
                    </View>:null}
                    <View style={{height:verticalScale(60),borderWidth:0,flexDirection:'row',marginTop:verticalScale(20)}} >
                        <View style={{flex:1}} />
                        <View style={{flex:25,borderWidth:0,borderRadius:scale(7),overflow:'hidden'}} >
                            <TouchableNativeFeedback disabled={!this.state.valid}
                                onPress={() => {
                                    this.props.dateAndName(this.state.date);
                                    this.props.navigation.navigate('Time');
                                }}
                                style={{width:'100%',height:'100%',backgroundColor:this.state.valid?'darkturquoise':'gainsboro',justifyContent:'center',alignItems:'center'}} >
                                <Text allowFontScaling={false} style={{color:'white',fontSize:scale(17),fontFamily:'Gilroy-SemiBold',fontFamily:'Gilroy-SemiBold'}} >Next</Text>
                            </TouchableNativeFeedback>
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

const mapStateToProps = (state) => {
    console.log(state.workoutReducer.exercises);
    console.log(state.workoutReducer.premium);
    return {
        exercises : state.workoutReducer.exercises,
        demoTaken : state.phoneReducer.demoTaken,
        zumba : state.workoutReducer.zumba
    }
}

export default connect(mapStateToProps,{ dateAndName })(Dated);