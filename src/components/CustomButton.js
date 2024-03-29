import React from 'react'
import {Text, TouchableOpacity, TextInput} from 'react-native'

export default function CustomButton({label, onPress}) {
    return (
        <TouchableOpacity onPress={onPress} style={{backgroundColor:'#92AF9F', padding:20, borderRadius:10,marginBottom:30}}>
            <Text style={{textAlign:'center', fontFamily:'Josefin Sans-SemiBold', fontSize:16,color:'white',letterSpacing:3}}>{label}</Text>
        </TouchableOpacity>
    )
    }