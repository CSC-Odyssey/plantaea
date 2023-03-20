import React from "react";
import { View, Text,Image, SafeAreaView, ScrollView, StyleSheet, ImageBackground, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function HomeScreen({navigation}){
    return(
        <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
            <ScrollView style={{padding:40}}>
                <View style={{flexDirection:'row',alignItems:'center',marginBottom:20}}>
                    <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                        <ImageBackground source={require('../assets/images/hamburgerMenu-icon.png')} style={{width:35,height:35}} imageStyle={{borderRadius:25}} />
                    </TouchableOpacity>          
                   
                </View>

                <View style={{flex:1,alignItems:'center',margintop: 10}}>
                    <Text style={{fontSize:30 ,fontWeight:'bold'}}> PLANTAEA </Text>
                </View>
            

                <View style={{padding:7,borderTopWidth:1,borderTopColor:'#E6E6E6', marginTop:15}} />
                <View>
                    <Text style={{ fontSize:20, fontWeight:'bold',color:'#1C4C4E'}}> TRIVIA OF THE DAY</Text>
                </View>
                <View style={styles.containerT}>
                </View>


                <View style={{padding:7,borderTopWidth:1,borderTopColor:'#E6E6E6', marginTop:15}} />
                
              
                <View style= {{flexDirection:'row', alignContent:'center'}} >
                   <TouchableOpacity onPress={()=>navigation.navigate('Map')}> 
                     <View style = {styles.containerLE}> 
                         <Image
                            source={require('../assets/images/learn-icon.png')}
                            resizeMode="contain"
                            style={{width:70,height:70,alignSelf:"center", margin: 20}}
                         />
                            <Text style = {styles.headingText}> LEARN </Text>
                            <Text style = {styles.bodyText}> Knowledge is within reach </Text>
                     </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={()=>navigation.navigate('PlantLibraryStack')}>
                        <View style ={styles.containerLE}>
                          <Image
                            source={require('../assets/images/explore-icon.png')}
                            resizeMode="contain"
                            style={{width:70,height:70,alignSelf:"center", borderRadius:70, margin: 20}}
                          />

                            <Text style = {styles.headingText}> EXPLORE</Text>
                            <Text style = {styles.bodyText}> Find the wonders around you</Text>
                     </View>
                    </TouchableOpacity>
                </View>
            </ScrollView> 
        </SafeAreaView>
        
    )
}


const  styles = StyleSheet.create({
    headingText:{
        textAlign: "center",
        fontSize:20,
        fontWeight: 'bold',
        color:'#1C4C4E',
     },
     bodyText:{
        textAlign: "center",
        fontSize:15,
     },
    containerLE:{
        margin: 10,
        width: 150,
        height : 210,
        borderRadius: 10,
        opacity: 20,
        backgroundColor: '#ecf0f1',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4
    }, containerT:{
        margin: 10,
        width: 320,
        height : 130,
        borderRadius: 10,
        opacity: 20,
        backgroundColor: '#ecf0f1',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4
    }
})
