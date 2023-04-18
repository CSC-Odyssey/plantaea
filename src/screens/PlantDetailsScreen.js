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

                <ImageBackground source={route.params?.image} style={{width:windowWidth ,height:400}} imageStyle={{borderRadius:0}}/>
            </View>

<ScrollView style={{padding:20}}>
<TouchableOpacity onPress={()=>navigation.goBack()} style={{flexDirection:'row', marginBottom:20}}>
            <Feather name="chevron-left" color="#1C4C4E" size={30}/>
        </TouchableOpacity>

        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontWeight:'bold', fontSize:30, color:'#1C4C4E'}}>{route.params?.localName}</Text>
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

        {descriptionTab == 1 && <Text style={{textAlign:'justify', marginBottom:100}}>{route.params?.description}</Text>}
        {descriptionTab == 2 && <Text style={{textAlign:'justify', marginBottom:100}}>{route.params?.use}</Text>}
        {descriptionTab == 3 && <Text style={{textAlign:'justify', marginBottom:100, fontSize:10}}>{route.params?.taxonomy}</Text>}

        
        </View>
        </ScrollView>
        </SafeAreaView>
    )
}

export default PlantDetailsScreen