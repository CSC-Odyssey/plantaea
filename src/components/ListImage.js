import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function ListItem({image, onPress}){
    return(
        <View>
            <View style={{alignItems:'center',}}>
                <TouchableOpacity onPress={onPress}>
                    <Image source={image} style={{width:100,height:100,borderRadius:10,margin:10}}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}