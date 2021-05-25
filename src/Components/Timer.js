import React from 'react';
import {View,Text} from 'react-native';
import { scale } from './Exports';


class Timer extends React.Component{
    state = {
        seconds : 30
    }
    
    lowerTime = () => {
        this.setState({seconds : this.state.seconds-1});
    }

    startInterval = () => {
       this.interval = setInterval(() => this.lowerTime(), 1000 );
    }

    shouldComponentUpdate(nextProps,nextState)
    {
        if(nextState.seconds >= 1)
        {
            return true;
        }
        else
        {
            clearInterval(this.interval);
            this.props.transferValue();
            return false;
        }
    }

    componentDidUpdate()
    {
        console.log(this.state.seconds);
    }

    UNSAFE_componentWillMount()
    {
        clearInterval(this.interval);
    }

    componentDidMount(){
        this.startInterval()
    }

    render()
    {
        return (
            <View>
                <Text allowFontScaling={false} style={{color:'red',fontSize:scale(13),fontFamily:'Gilroy-SemiBold'}}>
                    There was some error in the code....
                </Text>
                <Text allowFontScaling={false} style={{color:'rgb(51,148,24)',fontSize:scale(13),fontFamily:'Gilroy-Light'}}>
                    please try again in <Text allowFontScaling={false} style={{color:'red',fontFamily:'Gilroy-SemiBold',fontSize:scale(17)}} > {this.state.seconds}</Text>  secs
                </Text>
            </View>
        )
    }
};


export default Timer;