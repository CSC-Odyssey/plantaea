import React from 'react'
import {Image, SafeAreaView, View, Text, TextInput, TouchableOpacity } from 'react-native'

import InputField from '../components/InputField'
import CustomButton from '../components/CustomButton'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

const RegisterScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{flex:1, justifyContent:'center'}}>
        <View style={{paddingHorizontal:25}}>
            <View style={{alignItems:'center'}}>
                <Image
                source={require('../assets/images/plantaea-logo.png')}
                resizeMode="contain"
                style={{width:80,height:80}}
                />
            </View>
                <Text style={{fontSize:28, fontWeight:'500', color:'#1C4C4E'}}>Register</Text>

                <InputField label={'Full Name'} icon={<Ionicons name="person-outline" size={20} color="#989898" style={{marginRight:5}}/>}/>

                <InputField label={'Email ID'} icon={<MaterialIcons name='alternate-email' size={20} color="#989898" style={{marginRight:5}}/>} keyboardType="email-address"/>

                <InputField label={'Password'} icon={<Ionicons name='ios-lock-closed-outline' size={20} color="#989898" style={{marginRight:5}}/>} inputType="password"/>

                <InputField label={'Confirm Password'} icon={<Ionicons name='ios-lock-closed-outline' size={20} color="#989898" style={{marginRight:5}}/>} inputType="password"/>

                <CustomButton label={"Register"} onPress={() => {}}/>

                <View style={{flexDirection:'row', justifyContent:'center',marginBottom:30}}>
                <Text>Already Have an Account? </Text>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={{color:'#1C4C4E', fontWeight:'700'}}>Login</Text>
                    </TouchableOpacity>
                </View>
        </View>
        </SafeAreaView>
    )
}

export default RegisterScreen