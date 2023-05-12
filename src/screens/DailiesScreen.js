import React, { useState,useEffect } from "react";
import { View, Text,Image, SafeAreaView, ScrollView, StyleSheet, ImageBackground, Button } from "react-native";
import {activities} from '../model/dailyActivities'
import ListActivities from "../components/listActivities";


export default function DailiesScreen({navigation}){
   
/*
  const [dActivities, setdActivities] = useState([activities]);

  
  const shuffleActivities = (array) => {
    // Shuffle the daily activities array
    const shuffledActivities = [...dActivities]; //creates a copy of the activities

    for (let i = shuffledActivities.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledActivities[i], shuffledActivities[j]] = [shuffledActivities[j], shuffledActivities[i]];
    }
    setdActivities(shuffledActivities)
    //console.log(dActivities)
  };

  useEffect(() => {
    // Initial shuffle when the component mounts
    shuffleActivities();

    // Shuffle every 30 seconds
    const intervalId = setInterval(() => {
      shuffleActivities(), 30 * 1000});

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const dailies = dActivities.flat()

  */
    return (
        <SafeAreaView style={{backgroundColor:'white'}}> 
         <ScrollView style={{marginTop:2}}>
            <View style={{flex:1, alignItems:'center'}}>
              <Image
                source={require('../assets/images/undraw_Gaming_re_cma2.png')}
                resizeMode="contain"
                style={{width:300,height:140}}
              />
             <Text style={{fontSize:27, color:'#1C4C4E',marginBottom:15, fontFamily:'Josefin Sans-Light',letterSpacing:8}}>DAILIES</Text>
            </View>
          
            <View style={{padding:7,borderTopWidth:1,borderTopColor:'#E6E6E6', marginTop:15}} />

            {activities.map(e => (
                    <ListActivities key={e.id}  title={e.title}  total= {e.total} category= {e.category} />
                ))
            }


         </ScrollView>
        </SafeAreaView>

    )
}