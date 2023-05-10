import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { windowWidth } from '../utils/Dimensions'

const OnboardingScreen = ({navigation}) => {
    return(
      <SafeAreaView style={{flex:1,justifyContent:'center', alignItems: 'center', padding:20,backgroundColor:'white'}}>
        <View style={{alignItems:'center', marginTop:2}}>
        <View>
        <Image
                source={require('../assets/images/undraw_flowers_vx06.png')}
                resizeMode="contain"
                style={{width:300,height:300}}
        />
        </View>
        <View style={{alignItems:'center'}}>
          <Text style={{ fontSize:15, fontFamily:'Josefin Sans-LightItalic', color:'#1C4C4E',letterSpacing:2}}>welcome to</Text>
          <Text style={{ fontSize:40, fontFamily:'Josefin Sans-Light', color:'#1C4C4E',letterSpacing:10}}>PLANTAEA</Text>
        </View>
        </View>
        <View style={{flex:1, justifyContent:'flex-end',marginBottom:50}}>
        <TouchableOpacity 
        style={{flexDirection:'row',justifyContent:'space-between', backgroundColor:'#92AF9F', padding:20, width:windowWidth-40,borderRadius:15}}
        onPress={() => navigation.navigate('Login')}
        >
          <Text style= {{ fontFamily:'Josefin Sans-SemiBold', fontSize:18, color:'white',letterSpacing:3}}>Get Started!</Text>
          <MaterialIcons name="arrow-forward-ios" size={22} color="white" />
        </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  export default OnboardingScreen