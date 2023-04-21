import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from "react-native";

import createPlantTag from "../components/createPlantTag";

export default function ListItem({image, scientificName, localName, category, onPress}){
    return(
        <View>
            <View style={{flexDirection:'row', alignItems:'center', flex:1}}>
                <TouchableOpacity onPress={onPress} style={{borderRadius:20,flexDirection:'row', alignItems:'center', flex:1, backgroundColor:'#F7FFF9', paddingHorizontal:15,paddingVertical:10,marginBottom:10,marginHorizontal:3,elevation:3}}>
                    <Image source={image} style={{width:55,height:55,borderRadius:55/2,marginRight:8}}/>
                    <View>
                    <Text>{localName}</Text>
                    <Text style={{fontStyle:"italic",fontSize:10}}>{scientificName}</Text>
                    <View style={{flexDirection:'row'}}>
                    {category[0] == 'medicine' && category[1] == 'consumable' && category[2] == 'ornamental'?
                        createPlantTag(true,true,true)
                        : category[0] == 'medicine' && category[1] == 'consumable'?
                            createPlantTag(true,true)
                        : category[0] == 'medicine' && category[1] == 'ornamental'?
                            createPlantTag(true,false,true)
                        : category[0] == 'consumable' && category[1] == 'ornamental'?
                            createPlantTag(false,true,true)
                        : category[0] == 'medicine'?     
                            createPlantTag(true)    
                        : category[0] == 'consumable'?
                            createPlantTag(false,true)   
                        :
                            createPlantTag(false,false,true)
                    }
                    </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}