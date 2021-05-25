import React from 'react';
import {View} from 'react-native';
import Header from '../Components/Header';
import Part from '../Components/Part';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import {addItem} from '../Actions/workActions';

class Exclusive extends React.Component
{
    render()
    {
        return (
            <View style={{flex:1,backgroundColor:'white'}} >
                <Header onPress={() => this.props.navigation.navigate('HomeEntry')}
                 title="Choose from our plans"
                 />

                 <View style={{flex:1}} >
                    <ScrollView style={{flex:1}} >
                        <Part onPress={() => {
                            this.props.addItem(["weight losing program : GYM"],false);
                            this.props.navigation.navigate('Date');
                         }} 
                            partName="Our weight losing programs.." 
                            imageSource={require('../StaticImages/thinToFat.png')} />

                        <Part onPress={() => {
                            this.props.addItem(["Weight gain program : GYM"],false);
                            this.props.navigation.navigate('Date');
                        }}
                            partName="Gain weight with our programs.." 
                            imageSource={require('../StaticImages/thinny.png')} />

                        <Part onPress={() => this.props.navigation.navigate('Home')}
                            partName="Or choose yourself..." 
                            imageSource={require('../StaticImages/gym.jpg')} />
                    </ScrollView>
                 </View>
            </View>
        )
    }
};

export default connect(null,{ addItem })(Exclusive);