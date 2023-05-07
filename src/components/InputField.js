import React from 'react'
import {View, Text, TouchableOpacity, TextInput} from 'react-native'

export default function InputField({label, icon, inputType,keyboardType}) {
    return (
        <View style={{flexDirection:'row', alignItems:'center', borderBottomColor:'#ccc', borderBottomWidth:1,paddingBottom:8,marginBottom:25,marginTop:2}}>
        {icon}
        {inputType == 'password' ?
        (<TextInput placeholder={label} keyboardType={keyboardType} style={{flex:1, paddingVertical:0,fontFamily:'Josefin Sans-Light'}} secureTextEntry={true}/>) : 
        (<TextInput placeholder={label} keyboardType={keyboardType} style={{flex:1, paddingVertical:0,fontFamily:'Josefin Sans-Light'}}/>) }
        </View>
    )
    }