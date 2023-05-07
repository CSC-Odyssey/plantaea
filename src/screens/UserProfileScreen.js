import React,  { useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, Image, ImageBackground } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import { TouchableOpacity } from "react-native-gesture-handler";
import ListItem from '../components/ListItem'
import ListImage from '../components/ListImage'
import {plantListLibrary} from '../model/data'
import { s } from 'react-native-wind';

const UserProfileScreen = ({navigation}) => {
    const [switchView,setSwitchView] = useState(true); 
    return (
        <SafeAreaView style={{flex:1, backgroundColor:'white',padding:40,alignItems:'center'}}>

                <View style={{alignItems:'center',marginBottom:50}}>
                    <Image source={require('../assets/images/undraw_Female_avatar_efig.png')} 
                           style={{width:175,height:175, borderRadius: 75}}  
                    />
                    <Text style={{fontSize:20, fontFamily:'Josefin Sans-Light', color:'#1C4C4E', marginTop:2,letterSpacing:1}}>Hello, User</Text>
                </View>



                <View style={{justifyContent:'center',alignItems:'center',height:300,width:300,borderRadius:150,borderWidth:.5,borderColor:'#1C4C4E'}}>
                <View style={{flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize: 50,fontFamily:'Josefin Sans-SemiBold', color:'#1C4C4E',marginRight:2}}>256</Text>
                    <Text style={{fontSize: 15,fontFamily:'Josefin Sans-Light', color:'#1C4C4E'}}>pts</Text>
                </View>
                </View>

        </SafeAreaView>
    )
}

export default UserProfileScreen