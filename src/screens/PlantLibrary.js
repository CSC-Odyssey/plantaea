import React, { useState } from "react";
import { View, Text, SafeAreaView, ScrollView, TextInput, StyleSheet, Image, ImageBackground} from 'react-native'

import Feather from 'react-native-vector-icons/Feather'
import { alignItems } from 'react-native-wind/dist/styles/flex/align-items'
import ListItem from '../components/ListItem'
import { TouchableOpacity } from "react-native-gesture-handler";
import CustomSwitchLibrary from "../components/CustomSwitchLibrary";

import {plantListLibrary} from '../model/data'

const PlantLibrary = ({navigation, route}) => {

    const [descriptionTab, setDescriptionTab] = useState(1);
    const onSelectSwitch = (value) => {
        setDescriptionTab(value);
    }

    return (
        <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
            <ScrollView style={{padding:17}}>
                <View style={{flexDirection:'row',alignItems:'center',marginBottom: 1}}>
                    {/* <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                        <ImageBackground source={require('../assets/images/hamburgerMenu-icon.png')} style={{width:35,height:35}} imageStyle={{borderRadius:25}} />
                    </TouchableOpacity>           */}
                </View>
                <View style={{flex:1, alignItems:'center'}}>
                <Image
                    source={require('../assets/images/plantaea-logo.png')}
                    resizeMode="contain"
                    style={{width:80,height:50,marginTop:30,marginBottom:10}}
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
                    <ListItem key={item.id} image={item.image} scientificName={item.scientificName} localName={item.localName} category={item.category} onPress={() => navigation.navigate('PlantDetails', {image: item.image, scientificName: item.scientificName, localName: item.localName, description: item.description, use: item.use, taxonomy: item.taxonomy, category: item.category, id: item.id})}/>
                ))
                }
            </View>
        }
        {descriptionTab == 2 &&
            <View>
                
                {plantListLibrary.map(item => (
                    item.category[0] == 'medicine'? 
                    <ListItem key={item.id} image={item.image} scientificName={item.scientificName} localName={item.localName} category={item.category} onPress={() => navigation.navigate('PlantDetails', {image: item.image, scientificName: item.scientificName, localName: item.localName, description: item.description, use: item.use, taxonomy: item.taxonomy, category: item.category, id: item.id})}/>
                    : null
                ))
                }
            </View>
        }
        {descriptionTab == 3 &&
            <View>
                {plantListLibrary.map(item => (
                    item.category[0] == 'food' || item.category[1] == 'food'? 
                    <ListItem key={item.id} image={item.image} scientificName={item.scientificName} localName={item.localName} category={item.category} onPress={() => navigation.navigate('PlantDetails', {image: item.image, scientificName: item.scientificName, localName: item.localName, description: item.description, use: item.use, taxonomy: item.taxonomy, category: item.category, id: item.id})}/>
                    : null
                ))
                }
            </View>
        }

<View style={{padding:7,borderTopWidth:1,borderTopColor:'white', marginTop:60}} />
            </ScrollView>
        </SafeAreaView>

    )
}

export default PlantLibrary