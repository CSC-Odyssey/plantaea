import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from "react-native";

export default function ListItem({image, scientificName, localName, category, onPress}){
    var medicine = ""
    var food = ""
 
    // if (category[0] == 'medicine' && category[1] == 'food') {
    //     medicine = category[0]
    //     food = category[1]
    // } else if (category[0] == 'medicine') {
    //     medicine = category[0]
    // } else {
    //     food = category[0]
    // }
    
    return(
        <View>
            <View style={{flexDirection:'row', alignItems:'center', flex:1}}>
                <TouchableOpacity onPress={onPress} style={{borderRadius:20,flexDirection:'row', alignItems:'center', flex:1, backgroundColor:'#F7FFF9', paddingHorizontal:15,paddingVertical:10,marginTop:10,marginHorizontal:3,elevation:3}}>
                    <Image source={image} style={{width:55,height:55,borderRadius:55/2,marginRight:8}}/>
                    <View>
                    <Text>{localName}</Text>
                    <Text style={{fontStyle:"italic",fontSize:10}}>{scientificName}</Text>
                    <View style={{flexDirection:'row'}}>
                    {category[0] == 'medicine' && category[1] == 'food'?
                        <View style={{flexDirection:'row'}}>
                            <View style={{backgroundColor:'#F37373', alignItems:'center', borderRadius:8, paddingHorizontal:5,paddingVertical:1,marginTop:2}}><Text style={{fontSize:8, color:'white'}}>Medicine</Text></View>
                            <View style={{backgroundColor:'#E281DA', alignItems:'center', borderRadius:8, paddingHorizontal:5,paddingVertical:1,marginTop:2}}><Text style={{fontSize:8, color:'white'}}>Food</Text></View>
                        </View>
                        : category[0] == 'medicine' ? 
                        <View style={{backgroundColor:'#F37373', alignItems:'center', borderRadius:8, paddingHorizontal:5,paddingVertical:1,marginTop:2}}><Text style={{fontSize:8, color:'white'}}>Medicine</Text></View>
                        : <View style={{backgroundColor:'#E281DA', alignItems:'center', borderRadius:8, paddingHorizontal:5,paddingVertical:1,marginTop:2}}><Text style={{fontSize:8, color:'white'}}>Food</Text></View>
                    }
                    </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}