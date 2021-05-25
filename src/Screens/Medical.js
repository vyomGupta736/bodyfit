import React from 'react';
import {View,Text} from 'react-native';
import Header from '../Components/Header';
import Part from '../Components/Part';
import { connect } from 'react-redux';

class Medical extends React.Component{
    render()
    {
        return(
            <View style={{flex:1,backgroundColor:'white'}} >
                <Header onPress={() => this.props.navigation.navigate('HomeEntry')} />

                <Part 
                onPress={() => this.props.navigation.navigate('Date')}
                partName={this.props.demoTaken?"Consult our certified dieticians...":"Get free consultancy with out certified nutritionists..."}
                imageSource={require('../StaticImages/doctor.jpg')}
                size={200} />

            </View>
        )
    }
};

const mapStateToProps = state => {
    return {
        demoTaken : state.phoneReducer.demoTaken
    }
}

export default connect(mapStateToProps,null)(Medical);