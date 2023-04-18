import React from "react";
import { View, Text,Image, SafeAreaView, ScrollView, StyleSheet, ImageBackground, Button } from "react-native";
import {activities} from '../model/dailyActivities'
import ListActivities from "../components/listActivities";


export default function DailiesScreen({navigation}){
    return (
        <SafeAreaView> 
         <ScrollView style={{marginTop:80}}>
            <View style={{flex:1, alignItems:'center'}}>
              <Image
                source={require('../assets/images/gamepad.png')}
                resizeMode="contain"
                style={{width:80,height:80}}
              />
             <Text style={{fontWeight:'bold', fontSize:20, color:'#1C4C4E'}}>DAILIES</Text>
            </View>
          
            <View style={{padding:7,borderTopWidth:1,borderTopColor:'#E6E6E6', marginTop:15}} />

            {activities.map(e => (
                    <ListActivities key={e.id}  title={e.title} />
                ))
            }


         </ScrollView>
        </SafeAreaView>

    )
}