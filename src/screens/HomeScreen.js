import React from "react";
import { View, Text,Image, SafeAreaView, ScrollView, StyleSheet, ImageBackground, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Swiper from 'react-native-swiper'

import Feather from 'react-native-vector-icons/Feather'

export default function HomeScreen({navigation}){
    return (
        <SafeAreaView style={{ padding: 10, flex:1, backgroundColor:'white'}}>
            <SafeAreaView style={{paddingTop:40}}>
                <View style={{flexDirection:'row',alignItems:'center',marginBottom:1}}>
                    <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                        <ImageBackground source={require('../assets/images/hamburgerMenu-icon.png')} style={{width:30,height:30}} imageStyle={{borderRadius:0}} />
                    </TouchableOpacity>          
                </View>
            </SafeAreaView>

            <ScrollView style={{alignContent:'center', flex: 1, backgroundColor:'white'}}>
             
                {/* <View style={{flex:1,alignItems:'center'}}>
                  <Image
                     source={require('../assets/images/plantaea-logo.png')}
                     resizeMode="contain"
                     style={{width:80,height:80}}
                     />
                    <Text style={{fontSize:30 ,fontWeight:'bold', marginBottom: 10}}> PLANTAEA </Text>                  
                </View> */}

                
                <View style={{padding:7,borderTopWidth:1,borderTopColor:'#E6E6E6'}} />

                    {/* <Text style={{ fontSize:20, fontWeight:'bold',color:'#1C4C4E'}}>PLANT TRIVIAS</Text> */}

                <TouchableOpacity 
                    style={{ backgroundColor:'white',flexDirection:'row', alignItems:'center', borderColor:'#E1F6F7', borderWidth:1, borderRadius:8, paddingHorizontal:10,paddingVertical:10, marginTop:2,marginBottom:5, marginHorizontal:20}}
                    onPress={()=>navigation.navigate('PlantLibraryStack')}
                >
                        <Feather name="search" size={20} color="#1C4C4E" style={{marginRight:5}} />
                        <Text style={{flex: 1, paddingTop: 2, paddingRight: 10, paddingBottom: 2, paddingLeft: 0,color:'#1C4C4E'}}>Search</Text>
                </TouchableOpacity>

                <View style={styles.sliderContainer}>
                    <Swiper autoplay height={200} activeDotColor="white" removeClippedSubviews={false}>
                            <View styles={styles.slide}>
                                <ImageBackground
                                    source={require('../assets/images/banners/plant-banner1.jpg')}
                                    resizeMode="cover"
                                    style={styles.sliderImage}
                                    imageStyle={{borderRadius:10}}
                                >
                                <Text style={{color:'white'}}>PLANTS ARE GAY</Text>
                                </ImageBackground>           
                            </View>

                            <View styles={styles.slide}>
                                <ImageBackground
                                    source={require('../assets/images/banners/plant-banner2.jpg')}
                                    resizeMode="cover"
                                    style={styles.sliderImage}
                                    imageStyle={{borderRadius:10}}
                                >
                                <Text style={{color:'white'}}>There are over 200,000 identified plant species and the list is growing all the time. 90 percent of the foods humans eat come from just 30 plants. An average size tree can provide enough wood to make 170,100 pencils.</Text>
                                </ImageBackground>           
                            </View>

                            <View styles={styles.slide}>
                                <ImageBackground
                                    source={require('../assets/images/banners/plant-banner3.jpg')}
                                    resizeMode="cover"
                                    style={styles.sliderImage}
                                    imageStyle={{borderRadius:10}}
                                >
                                <Text style={{color:'white'}}>sample text</Text>
                                </ImageBackground>           
                            </View>

                            <View styles={styles.slide}>
                                <ImageBackground
                                    source={require('../assets/images/banners/plant-banner4.jpg')}
                                    resizeMode="cover"
                                    style={styles.sliderImage}
                                    imageStyle={{borderRadius:10}}
                                >
                                <Text style={{color:'white'}}>sample text</Text>
                                </ImageBackground>           
                            </View>

                            <View styles={styles.slide}>
                                <ImageBackground
                                    source={require('../assets/images/banners/plant-banner5.jpg')}
                                    resizeMode="cover"
                                    style={styles.sliderImage}
                                    imageStyle={{borderRadius:10}}
                                >
                                <Text style={{color:'white'}}>sample text</Text>
                                </ImageBackground>           
                            </View>

                            <View styles={styles.slide}>
                                <ImageBackground
                                    source={require('../assets/images/banners/plant-banner6.jpg')}
                                    resizeMode="cover"
                                    style={styles.sliderImage}
                                    imageStyle={{borderRadius:10}}
                                >
                                <Text style={{color:'white'}}>Some Plants help with Skincare</Text>
                                </ImageBackground>           
                            </View>

                    </Swiper>
                </View>

                {/* <View style={styles.containerT}>
                </View> */}

                
                {/* <View style={{padding:7,borderTopWidth:1,borderTopColor:'#E6E6E6', marginTop:15}} /> */}
            
                <View style= {{flex: 1, flexDirection:'row', alignContent:'center'}} >
                   <TouchableOpacity> 
                     <View style = {styles.containerLE}> 
                         <Image
                            source={require('../assets/images/learn-icon.png')}
                            resizeMode="contain"
                            style={{width:70,height:70,alignSelf:"center", margin: 20}}
                         />
                            <Text style = {styles.headingText}> GUIDE </Text>
                            <Text style = {styles.bodyText}> get the best results when scanning plants</Text>
                     </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={()=>navigation.navigate('Map')}>
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
        margin: 17,
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
        height:200,
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
    }
})
