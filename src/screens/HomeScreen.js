import React from "react";
import { View, Text,Image, SafeAreaView, ScrollView, StyleSheet, ImageBackground, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Swiper from 'react-native-swiper'

import { windowWidth, windowHeight } from '../utils/Dimensions'

import Feather from 'react-native-vector-icons/Feather'

export default function HomeScreen({navigation}){
    return (
        
        
        <SafeAreaView style={{ flex:1, backgroundColor:'#92AF9F'}}>
<View style={[{ backgroundColor:'white',borderBottomLeftRadius:20,borderBottomRightRadius:20,marginBottom:10},styles.shadow]}>
        <View style={{padding:10,alignItems:'center',justifyContent:'center',backgroundColor:'white',marginTop:windowHeight-(windowHeight-10)}}>
        {/* <View>
            <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                <ImageBackground source={require('../assets/images/hamburgerMenu-icon.png')} style={{width:30,height:30}} />
            </TouchableOpacity>    
        </View> */}
        <View>
            <Text style = {styles.appName}>PLANTAEA</Text>
        </View>
        <View style={{width:30}}/>
        </View>

            <Image
                source={require('../assets/images/undraw_Gardening_re_e658.png')}
                resizeMode="contain"
                style={{width:windowWidth,height:200,marginTop:2,marginBottom:10}}
            >
            </Image>


</View>



            <ScrollView style={{alignContent:'center', flex: 1, backgroundColor:'#92AF9F'}}>
                

                <View style={{flex:1,margin:10}}>
                <View style= {{flexDirection:'row',justifyContent:'space-evenly'}} >
                   <TouchableOpacity onPress={()=>navigation.navigate('Camera')}> 
                     <View style = {styles.containerLE}> 
                         <Image
                            source={require('../assets/images/undraw_Camera_re_cnp4.png')}
                            resizeMode="contain"
                            style={{width:200,height:100,alignSelf:"center", margin: 8}}
                         />
                            <Text style = {styles.headingText}>SCAN</Text>
                            <Text style = {styles.bodyText}>Scan a plant!</Text>
                     </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={()=>navigation.navigate('Map')}>
                        <View style ={styles.containerLE}>
                          <Image
                            source={require('../assets/images/undraw_My_current_location_re_whmt.png')}
                            resizeMode="contain"
                            style={{width:200,height:100,alignSelf:"center",margin: 8}}
                         />

                            <Text style = {styles.headingText}>LOCATE</Text>
                            <Text style = {styles.bodyText}>Look at plant coordinates</Text>
                     </View>
                    </TouchableOpacity>
                </View>

                <View style= {{flexDirection:'row',justifyContent:'space-evenly',paddingTop:15}} >
                   <TouchableOpacity onPress={()=>navigation.navigate('PlantLibrary')}> 
                     <View style = {styles.containerLE}> 
                         <Image
                            source={require('../assets/images/undraw_Bookshelves_re_lxoy.png')}
                            resizeMode="contain"
                            style={{width:200,height:100,alignSelf:"center", margin: 8}}
                         />
                            <Text style = {styles.headingText}>LIBRARY</Text>
                            <Text style = {styles.bodyText}>Browse plant species!</Text>
                     </View>
                  </TouchableOpacity>

                  <TouchableOpacity>
                        <View style ={styles.containerLE}>
                          <Image
                            source={require('../assets/images/undraw_Questions_re_1fy7.png')}
                            resizeMode="contain"
                            style={{width:200,height:100,alignSelf:"center",margin: 8}}
                         />

                            <Text style = {styles.headingText}>GUIDE</Text>
                            <Text style = {styles.bodyText}>For more accurate results.</Text>
                     </View>
                    </TouchableOpacity>
                </View>

                {/* <TouchableOpacity style={{alignItems:'center', marginTop:10}}>
                    <View style ={styles.containerLE2}>
                        <Image
                                source={require('../assets/images/undraw_Questions_re_1fy7.png')}
                                resizeMode="contain"
                                style={{width:150,height:200,margin: 2}}
                        />
                        <View style={{justifyContent:'flex-start'}}>
                        <Text style = {styles.headingText}>GUIDE</Text>
                        <Text style = {styles.bodyText}>For more accurate results.</Text>
                        </View>
                    </View>
                    </TouchableOpacity> */}
                </View>

            </ScrollView>
        </SafeAreaView>    
    )
}


const  styles = StyleSheet.create({
    appName:{
        fontSize:20,
        fontFamily:'Josefin Sans-Light',
        color:'#1C4C4E',
        letterSpacing:10
    },
    headingText:{
        textAlign: "center",
        fontSize:20,
        fontFamily:'Josefin Sans-Light',
        color:'#1C4C4E',
        letterSpacing:2
     },
     bodyText:{
        textAlign: "center",
        fontSize:11,
        fontFamily:'Josefin Sans-Light'
     },
    containerLE:{
        width: 150,
        height : 170,
        borderRadius: 10,
        opacity: 20,
        backgroundColor: 'white',
        // elevation: 5,
        // shadowOffset: {
        //     width: 1,
        //     height: 1
        // },
        // shadowColor: '#333',
        // shadowOpacity: 0.4
    },
    containerLE2:{
        margin:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        margin: 2,
        width: 320,
        height : 120,
        borderRadius: 10,
        opacity: 20,
        backgroundColor: 'white',
    }, 
    containerT:{
        margin: 17,
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
    }, 
    sliderContainer: {
        height:300,
        width:'90%',
        marginTop:10,
        justifyContent:'center',
        alignSelf:'center',
        borderRadius:8,
    }, slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor:'transparent',
        borderRadius:8,
    },
    sliderImage: {
        height:'100%',
        width:'100%',
        alignSelf:'center',
        borderRadius:8,
        justifyContent: 'center',
        alignItems:'center',
    },
    shadow: {
        shadowColor:'black',
        shadowOffset: {width:1,height:1},
        shadowOpacity:1,
        shadowRadius:3.5,
        elevation:5
    }
})
