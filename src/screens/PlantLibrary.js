import React, { useState } from "react";
import { View, Text, SafeAreaView, ScrollView, TextInput, StyleSheet, Image, ImageBackground} from 'react-native'

import Feather from 'react-native-vector-icons/Feather'
import { alignItems } from 'react-native-wind/dist/styles/flex/align-items'
import ListItem from '../components/ListItem'
import { TouchableOpacity } from "react-native-gesture-handler";
import CustomSwitchLibrary from "../components/CustomSwitch";

import {plantListLibrary} from '../model/data'

const PlantLibrary = ({navigation, route}) => {

    const [descriptionTab, setDescriptionTab] = useState(1);
    const onSelectSwitch = (value) => {
        setDescriptionTab(value);
    }

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
                    <TextInput placeholder='Search' clearButtonMode='always' style={{flex: 1, paddingTop: 2, paddingRight: 10, paddingBottom: 2, paddingLeft: 0,}}/>
                </View>
                <View style={{padding:7,borderTopWidth:1,borderTopColor:'#E6E6E6', marginTop:20}} />
                <View>
            <CustomSwitchLibrary 
                selectionMode={1}
                option1="All"
                option2="Medicine"
                option3="Food"
                onSelectSwitch={onSelectSwitch}
            />
        </View>

        {descriptionTab == 1 &&
            <View>
                {plantListLibrary.map(item => (
                    <ListItem key={item.id} image={item.image} scientificName={item.scientificName} localName={item.localName} onPress={() => navigation.navigate('PlantDetails', {image: item.image, scientificName: item.scientificName, localName: item.localName, description: item.description, use: item.use, taxonomy: item.taxonomy, id: item.id})}/>
                ))
                }
            </View>
        }
        {descriptionTab == 2 &&
            <View>
                {plantListLibrary.map(item => (
                    item.category == 'medicine' || item.category == 'food,medicine'? 
                    <ListItem key={item.id} image={item.image} scientificName={item.scientificName} localName={item.localName} onPress={() => navigation.navigate('PlantDetails', {image: item.image, scientificName: item.scientificName, localName: item.localName, description: item.description, use: item.use, taxonomy: item.taxonomy, id: item.id})}/>
                    : null
                ))
                }
            </View>
        }
        {descriptionTab == 3 &&
            <View>
                {plantListLibrary.map(item => (
                    item.category == 'food' || item.category == 'food,medicine'? 
                    <ListItem key={item.id} image={item.image} scientificName={item.scientificName} localName={item.localName} onPress={() => navigation.navigate('PlantDetails', {image: item.image, scientificName: item.scientificName, localName: item.localName, description: item.description, use: item.use, taxonomy: item.taxonomy, id: item.id})}/>
                    : null
                ))
                }
            </View>
        }

                
            </ScrollView>
        </SafeAreaView>

    )
}

export default PlantLibrary