import React from "react";
import { View, Text, SafeAreaView, ScrollView, ImageBackground, Button } from "react-native";

export default function HomeScreen(){
    return(
        <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
            <ScrollView style={{padding:40}}>
                <View style={{flexDirection:'row',alignItems:'center',marginBottom:20}}>
                    <ImageBackground source={require('../assets/images/user-profile.jpg')} style={{width:35,height:35}} imageStyle={{borderRadius:25}} />          
                    <Text style={{fontSize:16, fontWeight:'bold', marginLeft:10}}>Hello, User!</Text>
                </View>

            <Text>This is the Home Screen</Text>

            </ScrollView>
        </SafeAreaView>
        
    )
}