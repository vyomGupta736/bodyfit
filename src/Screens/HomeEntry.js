import React from 'react';
import {View,Text,Image,TouchableOpacity, Alert,Animated} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { connect } from 'react-redux';
import { verticalScale, w, scale } from '../Components/Exports';
import { ScrollView, TouchableNativeFeedback } from 'react-native-gesture-handler';
import Demo from '../Components/Demo';
import styles from '../Components/Styles';
import BodyPart from '../Components/BodyPart';
import { bookPaidSession } from '../Actions/workActions';
import Header from '../Components/Header';

class HomeEntry extends React.Component{

    state = {
        xAnim : new Animated.Value(0),
        pos : 0
    }

    componentDidMount()
    {
        console.log(this.state.xAnim);
        SplashScreen.hide();
        this.props.navigation.addListener('focus', () => {
            this.handleCarousel();
            console.log("from homeentry")
            console.log(this.props.unpaidSession);
            if(Object.keys(this.props.unpaidSession).length >= 1)
            {
                this.props.navigation.navigate('Payment');
                Alert.alert(
                    "item in cart.. ",
                    "Please book your session first or clear your cart before moving ahead....."
                )
            }
            else
            {
                return;
            }
        });
        this.props.navigation.addListener('blur', () => {
            clearInterval(this.interval);
        });
    }

    handleCarousel = () => {
        this.interval = setInterval(() => {
            this.setState({pos : (this.state.pos <= 6*w)?this.state.pos + w:0}, () => {
                this.scrollview_ref.scrollTo({
                    x : this.state.pos,
                    y : 0,
                    Animated : true
                });
            });
            
        },2500)
    }

    componentWillUnmount()
    {
        clearInterval(this.interval);
    }

    render()
    {
        const scrollX = this.state.xAnim.interpolate({
            inputRange : [0, w, 2*w, 3*w, 4*w, 5*w, 6*w],
            outputRange : [scale(1.5),scale(11.5),scale(21.5),scale(31.5),scale(41.5),scale(51.5),scale(61.5)],
            extrapolate : 'clamp'
        })

        return (
            <View style={{flex:1,backgroundColor:'white'}} >
                <Header showNot={true}
                  />
                <View style={{flex:1,marginTop:verticalScale(10)}} >
                   <ScrollView style={{flex:1}} >
                       <View style={{height:9*w/16,flexDirection:'row'}} >
                           {/* <View style={{flex:1}} /> */}
                           <View style={{flex:1}} >
                                <Animated.ScrollView 
                                  ref={ref => {
                                    this.scrollview_ref = ref ;
                                       }}
                                    onScroll={
                                        Animated.event(
                                            [{nativeEvent : { contentOffset : {x : this.state.xAnim} }}],
                                            {useNativeDriver : true}
                                        ) 
                                    }
                                    pagingEnabled={true}
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                    disableIntervalMomentum={true}
                                    style={{backgroundColor:'white',flex:1}} >
                                      <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('Yoga')}
                                       style={{width:w,height:'100%',backgroundColor:'black'}}>
                                          <Image source={require('../StaticImages/c1.jpg')} resizeMode="stretch" style={styles.istyles} />
                                      </TouchableNativeFeedback>
                                      <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('Yoga')}
                                       style={{width:w,height:'100%',backgroundColor:'black'}}>
                                          <Image source={require('../StaticImages/c2.jpg')} resizeMode="stretch" style={styles.istyles} />
                                      </TouchableNativeFeedback>
                                      <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('Zumba')}
                                       style={{width:w,height:'100%',backgroundColor:'black'}}>
                                          <Image source={require('../StaticImages/c4.jpg')} resizeMode="stretch" style={styles.istyles} />
                                      </TouchableNativeFeedback>
                                      <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('Yoga')}
                                        style={{width:w,height:'100%',backgroundColor:'black'}}>
                                          <Image source={require('../StaticImages/c3.jpg')} resizeMode="stretch" style={styles.istyles} />
                                      </TouchableNativeFeedback>
                                      <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('Exclusive')}
                                        style={{width:w,height:'100%',backgroundColor:'black'}}>
                                          <Image source={require('../StaticImages/c5.jpg')} resizeMode="stretch" style={styles.istyles} />
                                      </TouchableNativeFeedback>
                                      <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('Exclusive')}
                                       style={{width:w,height:'100%',backgroundColor:'black'}}>
                                          <Image source={require('../StaticImages/c6.jpg')} resizeMode="stretch" style={styles.istyles} />
                                      </TouchableNativeFeedback>
                                      <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('Exclusive')}
                                       style={{width:w,height:'100%',backgroundColor:'black'}}>
                                          <Image source={require('../StaticImages/c7.jpg')} resizeMode="stretch" style={styles.istyles} />
                                      </TouchableNativeFeedback>
                                    </Animated.ScrollView>
                                    <View style={{position:'absolute',width:scale(70),height:scale(10),bottom:scale(2),alignSelf:'center',flexDirection:'row',alignItems:'center'}} >
                                        <View style={{width:scale(10),height:scale(10),borderWidth:1,borderColor:'white',borderRadius:scale(10)}} />
                                        <View style={{width:scale(10),height:scale(10),borderWidth:1,borderColor:'white',borderRadius:scale(10)}} />
                                        <View style={{width:scale(10),height:scale(10),borderWidth:1,borderColor:'white',borderRadius:scale(10)}} />
                                        <View style={{width:scale(10),height:scale(10),borderWidth:1,borderColor:'white',borderRadius:scale(10)}} />
                                        <View style={{width:scale(10),height:scale(10),borderWidth:1,borderColor:'white',borderRadius:scale(10)}} />
                                        <View style={{width:scale(10),height:scale(10),borderWidth:1,borderColor:'white',borderRadius:scale(10)}} />
                                        <View style={{width:scale(10),height:scale(10),borderWidth:1,borderColor:'white',borderRadius:scale(10)}} />
                                        <Animated.View style={[{position:'absolute',width:scale(7),height:scale(7),borderRadius:scale(7),backgroundColor:'darkturquoise'},{
                                        transform : [
                                            {
                                                translateX : scrollX
                                            }
                                        ]
                                    }]} >

                                    </Animated.View>
                                    </View>
                           </View>
                           {/* <View style={{flex:1}} /> */}
                       </View>
                        <View style={{width:w,height:w/3.5,flexDirection:'row',marginTop:verticalScale(15)}} >
                           <View style={{flex:1}} />
                           <View style={{flex:18,borderRadius:scale(4),overflow:'hidden',borderWidth:1,borderColor:'gainsboro',elevation:2}} >
                               <BodyPart 
                                 onPress={() => this.props.navigation.navigate('Yoga')}
                                 icon={require('../StaticImages/meditation.png')}
                                 title="Try our Yoga & Meditation packs..."
                                 />
                           </View>
                           <View style={{flex:1}} />
                       </View>
                       <View style={{width:w,height:w/3.5,flexDirection:'row',marginTop:verticalScale(10)}} >
                           <View style={{flex:1}} />
                           <View style={{flex:18,borderRadius:scale(4),overflow:'hidden',borderWidth:1,borderColor:'gainsboro',elevation:2}} >
                               <BodyPart 
                                 onPress={() => this.props.navigation.navigate('Exclusive')}
                                 icon={require('../StaticImages/shoulder.png')}
                                 title="Our work out plans for a resistive body.."
                                 />
                           </View>
                           <View style={{flex:1}} />
                       </View>
                       <View style={{width:w,height:w/3.5,flexDirection:'row',marginTop:verticalScale(10)}} >
                           <View style={{flex:1}} />
                           <View style={{flex:18,borderRadius:scale(4),overflow:'hidden',borderWidth:1,borderColor:'gainsboro',elevation:2}} >
                               <BodyPart 
                                 onPress={() => this.props.navigation.navigate('Zumba')}
                                 icon={require('../StaticImages/cardio.png')}
                                 title="Zumba Classes, to make u more FIT"
                                 />
                           </View>
                           <View style={{flex:1}} />
                       </View>
                       <View style={{marginBottom:verticalScale(20)}} />
                   </ScrollView>
                </View>
            </View>
        )
    }
};

const mapStateToProps = state => {
    console.log("from home entry screen")
    console.log(state.phoneReducer.userName);
    console.log(state.sessions.paidSessions);
    console.log(state.sessions.demoSession);
    console.log(state.sessions.unpaidSession);
    console.log(state.phoneReducer.demoTaken);
    return {
         userName : state.phoneReducer.userName,
         demoTaken : state.phoneReducer.demoTaken,
         unpaidSession : state.sessions.unpaidSession
    }
};

export default connect(mapStateToProps,{ bookPaidSession })(HomeEntry);