import React, {useContext} from 'react'
import {Image, SafeAreaView, View, Text, TextInput, TouchableOpacity } from 'react-native'

import InputField from '../components/InputField'
import CustomButton from '../components/CustomButton'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { AuthContext } from '../context/AuthContext'

const LoginScreen = ({navigation}) => {
    const {login} = useContext(AuthContext);
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
                <Text style={{fontSize:28, fontWeight:'500', color:'#1C4C4E'}}>Login</Text>
                <InputField label={'Email ID'} icon={<MaterialIcons name='alternate-email' size={20} color="#989898" style={{marginRight:5}}/>} keyboardType="email-address"/>

                <InputField label={'Password'} icon={<Ionicons name='ios-lock-closed-outline' size={20} color="#989898" style={{marginRight:5}}/>} inputType="password"/>

                <CustomButton label={"Login"} onPress={() => {login()}}/>

                <View style={{flexDirection:'row', justifyContent:'center',marginBottom:30}}>
                <Text>First time using the Plantaea? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={{color:'#1C4C4E', fontWeight:'700'}}>Register</Text>
                    </TouchableOpacity>
                </View>
        </View>
        </SafeAreaView>
    )
}

export default LoginScreen