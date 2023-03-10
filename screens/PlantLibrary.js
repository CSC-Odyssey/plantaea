import React from 'react'
import { View, Text, SafeAreaView, ScrollView, TextInput, StyleSheet, Image} from 'react-native'

import Feather from 'react-native-vector-icons/Feather'
import { alignItems } from 'react-native-wind/dist/styles/flex/align-items'

const PlantLibrary = ({}) => {
    return (
        <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
            <ScrollView style={{padding:40}}>
                <View style={{flex:1, alignItems:'center'}}>
                <Image
                    source={require('../assets/images/plant-library-icon.png')}
                    resizeMode="contain"
                    style={{width:80,height:80}}
                />
                    <Text style={{fontWeight:'bold', fontSize:20, color:'#1C4C4E'}}>ETHNOBOTANICAL PLANTS</Text>
                </View>
                <View style={{flex:1, flexDirection:'row', alignItems:'center', borderColor:'#C6C6C6', borderWidth:1, borderRadius:8, paddingHorizontal:10,paddingVertical:2, marginTop:20}}>
                    <Feather name="search" size={20} color="#C6C6C6" style={{marginRight:5}} />
                    <TextInput placeholder='Search' style={{flex: 1, paddingTop: 2, paddingRight: 10, paddingBottom: 2, paddingLeft: 0,}}/>
                </View>
                <View style={{padding:20,borderTopWidth:1,borderTopColor:'#E6E6E6', marginTop:20}} />
            </ScrollView>
        </SafeAreaView>

    )
}

export default PlantLibrary