import React from 'react';
import {View,Text,ActivityIndicator} from 'react-native';
import { scale, verticalScale, w, h } from '../Components/Exports';
import styles from '../Components/Styles';
import { connect } from 'react-redux';
import Header from '../Components/Header';
import ShowSession from '../Components/ShowSession';
import { ScrollView } from 'react-native-gesture-handler';

class OrderExpand extends React.Component{
    
    state={
        loading : true
    }

    componentDidMount()
    {
        if(this.props.selectedItem)
        {
            this.setState({loading : false})
        }

        this.props.navigation.addListener('focus', () => {
            if(this.props.selectedItem)
            {
                this.setState({loading : false});
            }
        })

        this.props.navigation.addListener('blur', () => {
            this.setState({loading : true });
        });
    }

    UNSAFE_componentWillReceiveProps(nextProps)
    {
        if(nextProps.selectedItem)
        {
            this.setState({loading : false})
        }
    }

    render()
    {
        return(
            <View style={{flex:1,backgroundColor:'white'}} >
                 {this.state.loading?<View style={{...styles.astyles,zIndex:100,justifyContent:'center',alignItems:'center'}}>
                    <View style={{...styles.astyles,backgroundColor:'gray',opacity:0.5}} />
                    <View style={{width:'70%',height:'20%',backgroundColor:'white',justifyContent:'center',alignItems:'center',borderTopLeftRadius:scale(7),borderBottomRightRadius:scale(7)}}>
                        <ActivityIndicator size="large" />
                        <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',color:'rgb(51,148,24)',fontSize:scale(15),marginTop:verticalScale(5)}}>Fetching your data......</Text>
                    </View>
                </View>:null}
                <View style={{flex:1}} >
                    
                     <Header title="My Orders" onPress={() => this.props.navigation.navigate('Profile')} />
                     <ScrollView style={{flex:1}} >
                    {this.props.selectedItem?<ShowSession 
                        session={this.props.selectedItem}
                        userName={this.props.userName}
                        phoneNumber={this.props.phoneNumber}
                        isDemo={this.props.isDemo}
                        title="Enjoy your booked session"
                    />:null} 
                    </ScrollView>
                </View>
                
                
            </View>
        )
    }
};

const mapStateToProps = state => {
    console.log("from orderexpand screen");
    console.log(state.selectionReducer.selectedItem);
    console.log(state.phoneReducer.userName);
    console.log(state.phoneReducer.phoneNumber);
    return {
        selectedItem : state.selectionReducer.selectedItem,
        isDemo : state.selectionReducer.isDemo,
        userName : state.phoneReducer.userName,
        phoneNumber : state.phoneReducer.phoneNumber
    }
}

export default connect(mapStateToProps,null)(OrderExpand);