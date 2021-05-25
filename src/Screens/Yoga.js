import React from 'react';
import {View,Text, Image} from 'react-native';
import Header from '../Components/Header';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import { w, scale } from '../Components/Exports';
import styles from '../Components/Styles';
import YogaComponent from '../Components/YogaComponent';
import { connect } from 'react-redux';
import { addItem } from '../Actions/workActions';

const data = [
    {name : 'Fight your thyroid with yoga',imageSource : require('../StaticImages/thyroid.png')},
    {name : 'Sleepless nights? cure it with Yoga..',imageSource : require('../StaticImages/insomnia.png')},
    {name : 'Get rid of Joint pains',imageSource : require('../StaticImages/joints.png')},
    {name : 'Deep Meditation',imageSource : require('../StaticImages/meditate.png')},
    {name : 'Pranayam',imageSource : require('../StaticImages/morning.png')},
    {name : "Relief from Diabetes 'n' blood pressure",imageSource : require('../StaticImages/bp.png')},
    {name : 'Migrane or Spinal Cord problems',imageSource : require('../StaticImages/headache.png')},
    {name : 'Breathing exercises..',imageSource : require('../StaticImages/lungs.png')},
    {name : 'Improve your Eye sight',imageSource : require('../StaticImages/eye.png')},
    {name : 'Stomach related issues..',imageSource : require('../StaticImages/stomach.png')},
    {name : 'Get rid of extra belly fat!!', imageSource : require('../StaticImages/fat.png')},
    {name : 'Gain weight with proper Yoga..',imageSource : require('../StaticImages/thin.png')}
]

class Yoga extends React.Component{
    render()
    {
        return(
            <View style={{flex:1,backgroundColor:'white'}} >
                <Header onPress={() => this.props.navigation.navigate('HomeEntry')} />
                <View style={{flex:1}} >
                     <FlatList style={{flex:1,marginLeft:w/21}}
                       numColumns={2}
                       data={data}
                       keyExtractor={item => item.name}
                       renderItem = {({item}) => {
                           return (
                               <YogaComponent 
                                 onPress={() => {
                                    this.props.addItem([`${item.name}`],false);
                                    this.props.navigation.navigate('Date');
                                 }}
                                 title={item.name}
                                 imageSource={item.imageSource}
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
        exercises : state.workoutReducer.exercises
    }
}

export default connect(mapStateToProps,{ addItem })(Yoga);