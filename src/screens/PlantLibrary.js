import React, { useState } from "react";
import { View, Text, SafeAreaView, ScrollView, TextInput, StyleSheet, Image, ImageBackground} from 'react-native'

import Feather from 'react-native-vector-icons/Feather'
import { alignItems } from 'react-native-wind/dist/styles/flex/align-items'
import ListItem from '../components/ListItem'
import { TouchableOpacity } from "react-native-gesture-handler";
import CustomSwitchLibrary from "../components/CustomSwitchLibrary";

import { windowWidth, windowHeight } from '../utils/Dimensions'

import {plantListLibrary} from '../model/data'


export let libCounter = 0;
const PlantLibrary = ({navigation, route}) => {

    const [descriptionTab, setDescriptionTab] = useState(1);
    const onSelectSwitch = (value) => {
        setDescriptionTab(value);
    }
    const [count,setCount] = useState(1)
    var lCounter = () => {
        setCount(count + 1)
        libCounter = count
        console.log(count)
      }

    return (
        <SafeAreaView style={{flex:1, padding:5, paddingTop:windowHeight-(windowHeight-5), backgroundColor:'white'}}>
        <View style={{overflow: 'hidden', paddingBottom:5}}>
        <SafeAreaView style={{backgroundColor:'white', alignItems:'center', ...styles.shadow }}> 
            <Image
                source={require('../assets/images/undraw_Bookshelves_re_lxoy.png')}
                resizeMode="contain"
                style={{width:200,height:140}}
            />
            <Text style={{fontSize:27, color:'#1C4C4E',marginBottom:15, fontFamily:'Josefin Sans-Light',letterSpacing:8}}>PLANT LIBRARY</Text>

    <View style={{paddingHorizontal:20}}>
        <CustomSwitchLibrary 
            selectionMode={1}
            option1="All"
            option2="Medicine"
            option3="Consumable"
            option4="Ornamental"
            onSelectSwitch={onSelectSwitch}
        />
    </View>

    <View style={{borderTopWidth:1,borderTopColor:'#E6E6E6', marginTop:2,  paddingHorizontal:183, paddingVertical:2}} />
    <View style={{ flexDirection:'row', alignItems:'center', borderColor:'#E6E6E6', borderWidth:1, borderRadius:8, paddingHorizontal:10,paddingVertical:2, marginTop:2,marginBottom:5, marginHorizontal:20}}>
                <Feather name="search" size={20} color="#C6C6C6" style={{marginRight:5}} />
                <TextInput placeholder='Search' clearButtonMode='always' style={{flex: 1, paddingTop: 2, paddingRight: 10, paddingBottom: 2, paddingLeft: 0, fontFamily:'Josefin Sans-Light'}}/>
    </View>
    </SafeAreaView>
        </View>
                <ScrollView style={{paddingHorizontal:15,paddingVertical:15, marginTop:0, backgroundColor:'#92AF9F'}}>
        {descriptionTab == 1 &&
            <View>
                {plantListLibrary.map(item => (
                    <ListItem key={item.id} image={item.image} scientificName={item.scientificName} localName={item.localName} category={item.category} 
                    onPress={() => {lCounter(); navigation.navigate('PlantDetails', {image: item.image, scientificName: item.scientificName, localName: item.localName, description: item.description, use: item.use, taxonomy: item.taxonomy, latitude: item.latitude, longitude: item.longitude, category: item.category, id: item.id})}}/>
                ))
                }
            </View>
        }
        {descriptionTab == 2 &&
            <View>
                
                {plantListLibrary.map(item => (
                    item.category[0] == 'medicine'? 
                    <ListItem key={item.id} image={item.image} scientificName={item.scientificName} localName={item.localName} category={item.category} 
                    onPress={() => navigation.navigate('PlantDetails', {image: item.image, scientificName: item.scientificName, localName: item.localName, description: item.description, use: item.use, taxonomy: item.taxonomy, latitude: item.latitude, longitude: item.longitude, category: item.category, id: item.id})}/>
                    : null
                ))
                }
            </View>
        }
        {descriptionTab == 3 &&
            <View>
                {plantListLibrary.map(item => (
                    item.category[0] == 'consumable' || item.category[1] == 'consumable'? 
                    <ListItem key={item.id} image={item.image} scientificName={item.scientificName} localName={item.localName} category={item.category} 
                    onPress={() => navigation.navigate('PlantDetails', {image: item.image, scientificName: item.scientificName, localName: item.localName, description: item.description, use: item.use, taxonomy: item.taxonomy, latitude: item.latitude, longitude: item.longitude, category: item.category, id: item.id})}/>
                    : null
                ))
                }
            </View>
        }
        {descriptionTab == 4 &&
            <View>
                {plantListLibrary.map(item => (
                    item.category[0] == 'ornamental' || item.category[1] == 'ornamental' || item.category[2] == 'ornamental'? 
                    <ListItem key={item.id} image={item.image} scientificName={item.scientificName} localName={item.localName} category={item.category} 
                    onPress={() => navigation.navigate('PlantDetails', {image: item.image, scientificName: item.scientificName, localName: item.localName, description: item.description, use: item.use, taxonomy: item.taxonomy, latitude: item.latitude, longitude: item.longitude, category: item.category, id: item.id})}/>
                    : null
                ))
                }
            </View>
        }

<View style={{padding:7,marginTop:100}} />
            </ScrollView>
        </SafeAreaView>

    )
}

export default PlantLibrary

const styles = StyleSheet.create({
    shadow: {
        shadowColor:'black',
        shadowOffset: {width:1,height:1},
        shadowOpacity:1,
        shadowRadius:3.5,
        elevation:5
    }
});