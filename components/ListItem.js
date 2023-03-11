import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function ListItem({image, scientificName, localName, onPress}){
    return(
        <View>
            <View style={{flexDirection:'row', alignItems:'center', flex:1}}>
                <TouchableOpacity onPress={onPress} style={{flexDirection:'row', alignItems:'center', flex:1, backgroundColor:'#F3F3F3', borderWidth:.2, borderRadius:8, paddingHorizontal:10,paddingVertical:10,marginTop:7}}>
                    <Image source={image} style={{width:55,height:55,borderRadius:10,marginRight:8}}/>
                    <View>
                    <Text style={{fontStyle:"italic"}}>{scientificName}</Text>
                    <Text>{localName}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}