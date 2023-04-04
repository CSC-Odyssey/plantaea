import React from 'react'
import {Text, TouchableOpacity, TextInput} from 'react-native'

export default function CustomButton({label, onPress}) {
    return (
        <TouchableOpacity onPress={onPress} style={{backgroundColor:'#1C4C4E', padding:20, borderRadius:10,marginBottom:30}}>
            <Text style={{textAlign:'center', fontWeight:'700', fontSize:16,color:'white'}}>{label}</Text>
        </TouchableOpacity>
    )
    }