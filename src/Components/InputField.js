import React, { useState } from 'react';
import {Text,View,StyleSheet,TextInput} from 'react-native';
import { scale } from './Exports';

const InputField = ({placeholderText,legendText,secure,autoFocus,type,onChangeText,value}) => {
    const[focused,setFocused] = useState(false);
    return <View style={focused?styles.fieldSetFocused:styles.fieldSetBlured}>
                <View style={{flex:1}}></View>
                <View style={{position:'relative',flex:10}}>
                    <TextInput
                        value={value}
                        allowFontScaling={false}
                        style={styles.inputStyle}
                        placeholder={placeholderText}
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                        autoCapitalize='none'
                        autoFocus={autoFocus}
                        keyboardType={type}
                        secure={secure}
                        importantForAutofill='no'
                        onChangeText={value => onChangeText(value)}
                        multiline={true}
                        />
                        <Text allowFontScaling={false}
                          style={focused?styles.legendFocused:styles.legendBlured}>{legendText}</Text>
                    </View>
                <View style={{flex:1}}></View>
           
         </View>
};

const styles = StyleSheet.create({
    inputStyle:{
        top:2,
        left:0,
        right:0,
        bottom:0,
        borderRadius:2,
        position:'absolute',
        color:'#6c7a89',
        flex:1,
        fontFamily:'Gilroy-SemiBold',
        fontSize:scale(15)
    },fieldSetFocused:{
        width:'100%',
        height:'100%',
        flexDirection:'row',
        borderColor:'darkturquoise',
        borderWidth:1,
        borderRadius:5,
        fontFamily:'Gilroy-Light'
    },legendFocused:{
        position: 'absolute',
        top: -10,
        left: 0,
        fontWeight: '900',
        backgroundColor: 'white',
        color:'darkturquoise',
        fontFamily:'Gilroy-SemiBold',
        fontSize:scale(14)
    },fieldSetBlured:{
        width:'100%',
        height:'100%',
        flexDirection:'row',
        borderRadius: 5,
        backgroundColor:'#eeeeee',
        fontFamily:'Gilroy-Light'
    },legendBlured:{
        display:"none"
    }
});

export default InputField;