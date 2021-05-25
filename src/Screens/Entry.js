import React from 'react';
import {View,Text,Image,ScrollView,Animated, StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { w, h, scale } from '../Components/Exports'
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import Car1 from '../Components/Car1';

class Entry extends React.Component{

    state = {
        xAnim : new Animated.Value(0)
    }

    componentDidMount()
    {
        if(this.props.phone_info && this.props.userName )
        {
            this.props.navigation.navigate('Other',{ screen : "Main", params : { screen : 'HomeEntry' } });
        }
        else
        {
            SplashScreen.hide();
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps)
    {
        if(nextProps.phone_info && nextProps.userName)
        {
            this.props.navigation.navigate('Other',{ screen : "Main", params : { screen : 'HomeEntry' } });
        }
    }

    render()
    {
        const scrollX = this.state.xAnim.interpolate({
            inputRange : [0, w, 2*w, 3*w, 4*w, 5*w, 6*w],
            outputRange : [scale(1.5),scale(11.5),scale(21.5),scale(31.5),scale(41.5),scale(51.5),scale(61.5)],
            extrapolate : 'clamp'
        })
        return (
            <View style={{flex:1,backgroundColor:'black'}} >
                <StatusBar backgroundColor="black" />
                <View style={{height:h/1.1,backgroundColor:'black'}}>
                   <Car1 />
                     {/* <Animated.ScrollView 
                      onScroll={
                          Animated.event(
                              [{nativeEvent : { contentOffset : {x : this.state.xAnim} }}],
                              {useNativeDriver : true}
                          ) 
                      }
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                      pagingEnabled={true}
                      style={{backgroundColor:'white'}} >
                      <Car1 />
                      <Car2 />
                      <Car3 />
                      <Car4 />
                      <Car5 />
                      <Car6 />
                      <Car7 />
                     </Animated.ScrollView>
                     <View style={{position:'absolute',width:scale(60),height:scale(10),bottom:scale(10),alignSelf:'center',flexDirection:'row',alignItems:'center'}} >
                         <View style={{width:scale(10),height:scale(10),borderWidth:1,borderColor:'white',borderRadius:scale(10)}} />
                         <View style={{width:scale(10),height:scale(10),borderWidth:1,borderColor:'white',borderRadius:scale(10)}} />
                         <View style={{width:scale(10),height:scale(10),borderWidth:1,borderColor:'white',borderRadius:scale(10)}} />
                         <View style={{width:scale(10),height:scale(10),borderWidth:1,borderColor:'white',borderRadius:scale(10)}} />
                         <View style={{width:scale(10),height:scale(10),borderWidth:1,borderColor:'white',borderRadius:scale(10)}} />
                         <View style={{width:scale(10),height:scale(10),borderWidth:1,borderColor:'white',borderRadius:scale(10)}} />
                         <View style={{width:scale(10),height:scale(10),borderWidth:1,borderColor:'white',borderRadius:scale(10)}} />
                         <Animated.View style={[{position:'absolute',width:scale(7),height:scale(7),borderRadius:scale(7),backgroundColor:'white'},{
                         transform : [
                             {
                                 translateX : scrollX
                             }
                         ]
                     }]} >

                     </Animated.View>
                     </View> */}
                     
                </View>
                <View style={{flex:1,borderWidth:0,backgroundColor:'blue',flexDirection:'row'}} >
                     <View style={{flex:1,backgroundColor:'turquoise'}} >
                         <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('PhoneEntry')}
                          style={{width:'100%', height:'100%',justifyContent:'center',alignItems:'center'}} >
                             <Text allowFontScaling={false} style={{color:'white',fontSize:scale(17),fontFamily:'Gilroy-Medium'}} >Quick Start In One Click</Text>
                         </TouchableNativeFeedback>
                     </View>
                </View>
            </View>
        )
    }
};

const mapStateToProps = (state) => {
    console.log("from entry");
    return {
        phone_info : state.phoneReducer.phone_info,
        userName : state.phoneReducer.userName
    }
}

export default connect(mapStateToProps, null)(Entry);