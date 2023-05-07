import React from 'react'
import {Image, SafeAreaView, View, Text, TextInput, TouchableOpacity } from 'react-native'

import InputField from '../components/InputField'
import CustomButton from '../components/CustomButton'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

const RegisterScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{flex:1, justifyContent:'center', backgroundColor:'white'}}>
        <View style={{paddingHorizontal:25}}>
            <View style={{alignItems:'center'}}>
            <Image
                source={require('../assets/images/undraw_farm_girl_dnpe.png')}
                resizeMode="contain"
                style={{width:300,height:300}}
            />
            </View>
                <Text style={{fontSize:28, fontFamily:'Josefin Sans-Light', color:'#1C4C4E',marginBottom:20}}>Register</Text>

                <InputField label={'Full Name'} icon={<Ionicons name="person-outline" size={20} color="#989898" style={{marginRight:5}}/>}/>

                <InputField label={'Email ID'} icon={<MaterialIcons name='alternate-email' size={20} color="#989898" style={{marginRight:5}}/>} keyboardType="email-address"/>

                <InputField label={'Password'} icon={<Ionicons name='ios-lock-closed-outline' size={20} color="#989898" style={{marginRight:5}}/>} inputType="password"/>

                <InputField label={'Confirm Password'} icon={<Ionicons name='ios-lock-closed-outline' size={20} color="#989898" style={{marginRight:5}}/>} inputType="password"/>

                <CustomButton label={"Register"} onPress={() => {}}/>

                <View style={{flexDirection:'row', justifyContent:'center',marginBottom:30}}>
                <Text style={{color:'#1C4C4E', fontFamily:'Josefin Sans-Light'}}>Already Have an Account? </Text>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={{color:'#1C4C4E', fontFamily:'Josefin Sans-Bold'}}>Login</Text>
                    </TouchableOpacity>
                </View>
        </View>
        </SafeAreaView>
    )
}

export default RegisterScreen