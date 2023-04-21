import React, { useState } from "react";
import { View, Text, Image, SafeAreaView, ScrollView, ImageBackground } from "react-native";
import { windowWidth, windowHeight } from '../utils/Dimensions'

import Feather from 'react-native-vector-icons/Feather'
import { TouchableOpacity } from "react-native-gesture-handler";
import CustomSwitch from "../components/CustomSwitch";

const PlantDetailsScreen = ({navigation, route}) => {

    const [descriptionTab, setDescriptionTab] = useState(1);
    const onSelectSwitch = (value) => {
        setDescriptionTab(value);
    }

    return(
        <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
            <View>
                <ImageBackground source={route.params?.image} style={{width:windowWidth ,height:400}} imageStyle={{borderRadius:0}}>
                    <View style={{backgroundColor:'white',width:44,height:44,borderRadius:44/2,marginTop:40,marginLeft:20,alignItems:'center',justifyContent:'center', shadowColor:'#171717', shadowOffset:{width: 100, height: 100}, shadowOpacity: 1,shadowRadius: 3}}>
                        <TouchableOpacity onPress={()=>navigation.goBack()}>
                            <Feather name="chevron-left" color="#1C4C4E" size={30}/>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>

        <ScrollView style={{padding:20}}>

        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontWeight:'bold', fontSize:30, color:'#1C4C4E', textAlign:'center'}}>{route.params?.localName}</Text>
        <Text style={{fontStyle:'italic', marginBottom:20}}>{route.params?.scientificName}</Text>

        <View>
            <CustomSwitch 
                selectionMode={1}
                option1="Description"
                option2="Uses"
                option3="Taxonomy"
                onSelectSwitch={onSelectSwitch}
            />
        </View>
        
        <View style={{backgroundColor:'red'}}>
        {descriptionTab == 1 && <Text style={{textAlign:'justify', marginBottom:100}}>{route.params?.description}</Text>}
        {descriptionTab == 2 && <Text style={{textAlign:'justify', marginBottom:100}}>{route.params?.use}</Text>}
        {descriptionTab == 3 && <Text style={{textAlign:'justify', marginBottom:100, fontSize:10}}>{route.params?.taxonomy}</Text>}
        </View>

        
        </View>
        </ScrollView>
        </SafeAreaView>
    )
}

export default PlantDetailsScreen