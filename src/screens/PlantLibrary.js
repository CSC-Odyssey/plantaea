import React from 'react'
import { View, Text, SafeAreaView, ScrollView, TextInput, StyleSheet, Image, ImageBackground} from 'react-native'

import Feather from 'react-native-vector-icons/Feather'
import { alignItems } from 'react-native-wind/dist/styles/flex/align-items'
import ListItem from '../components/ListItem'
import { TouchableOpacity } from "react-native-gesture-handler";

import {plantListLibrary} from '../model/data'

const PlantLibrary = ({navigation}) => {
    return (
        <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
            <ScrollView style={{padding:40}}>
                <View style={{flexDirection:'row',alignItems:'center',marginBottom: -30}}>
                    <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                        <ImageBackground source={require('../assets/images/hamburgerMenu-icon.png')} style={{width:35,height:35}} imageStyle={{borderRadius:25}} />
                    </TouchableOpacity>          
                </View>
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
                <View style={{padding:7,borderTopWidth:1,borderTopColor:'#E6E6E6', marginTop:20}} />
                {plantListLibrary.map(item => (
                    <ListItem key={item.id} image={item.image} scientificName={item.scientificName} localName={item.localName} onPress={() => navigation.navigate('PlantDetails', {image: item.image, scientificName: item.scientificName, localName: item.localName, description: item.description, id: item.id})}/>
                ))
                }
            </ScrollView>
        </SafeAreaView>

    )
}

export default PlantLibrary