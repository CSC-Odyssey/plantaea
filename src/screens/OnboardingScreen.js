import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import PlantImgTemp from '../assets/icons/plant.svg';

import { windowWidth } from '../utils/Dimensions'

const OnboardingScreen = ({navigation}) => {
    return(
      <SafeAreaView style={{flex:1,justifyContent:'center', alignItems: 'center', padding:20}}>
        <View style={{alignItems:'center', marginTop:200}}>
        <View>
        {/* <PlantImgTemp width={300} height={300} style={{ transform: [{rotate: '15deg'}]}}/> */}
        <Image
          source={require('../assets/images/plantaea-logo.png')}
          resizeMode="contain"
          style={{width:80,height:80}}
        />
        </View>
        <View style={{marginTop:1}}>
          <Text style={{ fontSize:60, fontWeight:'bold', color:'#1C4C4E'}}>Plantaea</Text>
        </View>
        </View>
        <View style={{flex:1, justifyContent:'flex-end',marginBottom:50}}>
        <TouchableOpacity 
        style={{flexDirection:'row',justifyContent:'space-between', backgroundColor:'#1C4C4E', padding:20, width:windowWidth-40,borderRadius:15}}
        onPress={() => navigation.navigate('Login')}
        >
          <Text style= {{ fontWeight:'bold', fontSize:18, color:'white'}}>Let's Start!</Text>
          <MaterialIcons name="arrow-forward-ios" size={22} color="white" />
        </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  export default OnboardingScreen