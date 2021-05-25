import React from 'react';
import {View,Text, Image} from 'react-native';
import Header from '../Components/Header';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import { w, scale, verticalScale } from '../Components/Exports';
import styles from '../Components/Styles';
import YogaComponent from '../Components/YogaComponent';
import { connect } from 'react-redux';
import { addItem } from '../Actions/workActions';

const data = [
    {name : 'Zumba Gold',body:'for beginners and older ones..',color:'gold'},
    {name : 'Zumba Kids.',body : 'for kids of age 7-11',color:'teal'},
    {name : 'Zumba Strong',body : 'for intermediate levels..',color:'plum'},
    {name : 'Zumba Advanced',body : 'for advanced levels.',color:'darkturquoise'},
    {name : 'Zumba for All',body : 'Zumba for generic body muscle movements..',color:'tomato'}
]

class Zumba extends React.Component{
    render()
    {
        return(
            <View style={{flex:1,backgroundColor:'white'}} >
                <Header onPress={() => this.props.navigation.navigate('HomeEntry')} />
                <View style={{height:20/32*w,borderWidth:0,flexDirection:'row'}} >
                    <View style={{flex:1}} />
                    <View style={{flex:30,borderWidth:0,borderRadius:scale(4),overflow:'hidden'}} >
                        <Image source={require('../StaticImages/zumba.jpg')} resizeMode="stretch" style={styles.istyles} />
                        <View style={{...styles.astyles,backgroundColor:'black',opacity:0.4}} />
                        <View style={{...styles.astyles, padding:scale(10),justifyContent:'space-between'}} >
                            <Text allowFontScaling={false} style={{color:'white',fontSize:scale(17),fontFamily:'Gilroy-SemiBold',fontFamily:'Gilroy-SemiBold',paddingRight:scale(10)}}  >Enjoy your Zumba fitness even at your home...</Text>
                            <Text allowFontScaling={false} style={{color:'white',fontSize:scale(17),fontFamily:'Gilroy-SemiBold',fontFamily:'Gilroy-SemiBold',paddingLeft:scale(10),paddingBottom:scale(10)}}>Book your Zumba class from our premium packs..</Text>
                        </View>
                    </View>
                    <View style={{flex:1}} />
                </View>
                <View style={{flex:1,marginTop:verticalScale(10)}} >
                     <FlatList style={{flex:1,marginLeft:w/21}}
                       numColumns={2}
                       data={data}
                       keyExtractor={item => item.name}
                       renderItem = {({item}) => {
                           return (
                               <YogaComponent 
                                 onPress={() => {
                                    this.props.addItem([`${item.name} : ZUMBA`],true);
                                    this.props.navigation.navigate('Date');
                                 }}
                                 size={2.2*w/7}
                                 title={item.name}
                                 imageSource={item.imageSource}
                                 body={item.body}
                                 color={item.color}
                                />
                           )
                       }}
                      />
                </View>
            </View>
        )
    }
};

const mapStateToProps = state => {
    console.log(state.workoutReducer.exercises);
    return {
        exercises : state.workoutReducer.exercises,
        demoTaken : state.phoneReducer.demoTaken
    }
}

export default connect(mapStateToProps,{ addItem })(Zumba);