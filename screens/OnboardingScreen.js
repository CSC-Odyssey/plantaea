import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import PlantImgTemp from '../assets/icons/plant.svg';

const OnboardingScreen = ({navigation}) => {
    return(
      <SafeAreaView style={{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{marginTop:100}}>
          <Text style={{ fontSize:60, fontWeight:'bold', color:'#73C615'}}>Plantaea</Text>
        </View>
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <PlantImgTemp width={300} height={300} style={{ transform: [{rotate: '15deg'}]}}/>
        </View>
        <TouchableOpacity 
        style={{backgroundColor:'#B8E538', padding:20, width:'90%',borderRadius:5, flexDirection:'row',justifyContent:'space-between',marginBottom:50}}
        onPress={() => navigation.navigate('Login')}
        >
          <Text style= {{ fontWeight:'bold', fontSize:18, color:'white'}}>Let's Start!</Text>
          <MaterialIcons name="arrow-forward-ios" size={22} color="white" />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  export default OnboardingScreen