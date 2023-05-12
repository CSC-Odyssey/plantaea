import React, { useState,useEffect } from "react";
import { View, Text,Image, SafeAreaView, ScrollView, StyleSheet, ImageBackground, Button } from "react-native";
import {activities} from '../model/dailyActivities'
import ListActivities from "../components/listActivities";


export default function DailiesScreen({navigation}){
   


  //data
  const [dailyActivity, setDailyActivity] = useState(activities);  
  // Shuffle every 24 hrs :24 * 60 * 60 * 1000
  useEffect(() => {
    const interval = setInterval(() => {
      shuffleDailies();
    }, 24 * 60 * 60 * 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Shuffle the data array using Fisher-Yates shuffle algorithm
  const shuffleDailies = () => {
    setDailyActivity((prevData) => {
      const shuffleActivity = [...prevData];
      for (let i = shuffleActivity.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffleActivity[i], shuffleActivity[j]] = [shuffleActivity[j], shuffleActivity[i]];
      }
      return shuffleActivity;
     
    });
  };

  
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

            {dailyActivity.map(e => (
                    <ListActivities key={e.id}  title={e.title}  total= {e.total} category= {e.category} />
                ))
            }


         </ScrollView>
        </SafeAreaView>

    )
}