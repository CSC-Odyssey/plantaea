import React from "react";
import { View, Text,Image, SafeAreaView, ScrollView, StyleSheet, ImageBackground, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Swiper from 'react-native-swiper'

import { windowWidth, windowHeight } from '../utils/Dimensions'

import Feather from 'react-native-vector-icons/Feather'

export default function HomeScreen({navigation}){
    return (
        
        
        <View style={{ flex:1, backgroundColor:'#92AF9F'}}>
<View style={[{ backgroundColor:'white',backgroundColor:'white',borderBottomLeftRadius:20,borderBottomRightRadius:20,marginBottom:5},styles.shadow]}>
        <View style={{padding:10,flexDirection:'row',alignItems:'center',justifyContent:'space-between',backgroundColor:'white',marginTop:windowHeight-(windowHeight-50)}}>
        <View>
            <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                <ImageBackground source={require('../assets/images/hamburgerMenu-icon.png')} style={{width:30,height:30}} />
            </TouchableOpacity>    
        </View>
        <View>
            <Text style = {styles.appName}>PLANTAEA</Text>
        </View>
        <View style={{width:30}}/>

                     


            </View>
            {/* <View style={styles.sliderContainer}> */}
            {/* <Swiper autoplay height={50} activeDotColor="#1C4C4E" removeClippedSubviews={false}> */}
            {/* <View styles={styles.slide}> */}
            <Image
                source={require('../assets/images/undraw_Gardening_re_e658.png')}
                resizeMode="contain"
                style={{width:windowWidth,height:200,marginTop:2,marginBottom:10}}
            >
            </Image>
            {/* </View> */}

            {/* <View styles={styles.slide}>
            <ImageBackground
                source={require('../assets/images/undraw_tourist_map_re_293e.png')}
                resizeMode="contain"
                style={{width:windowWidth,height:400}}
            >

            </ImageBackground>
            </View> */}

</View>


            {/* </Swiper> */}
            {/* </View> */}
            <ScrollView style={{alignContent:'center', flex: 1, backgroundColor:'#92AF9F'}}>
                

             
                {/* <View style={{flex:1,alignItems:'center'}}>
                  <Image
                     source={require('../assets/images/plantaea-logo.png')}
                     resizeMode="contain"
                     style={{width:80,height:80}}
                     />
                    <Text style={{color:'#1C4C4E',fontSize:30 , marginBottom: 10, fontFamily:'Josefin Sans-Bold'}}> PLANTAEA </Text>                  
                </View> */}

                
                {/* <View style={{padding:7,borderTopWidth:1,borderTopColor:'#E6E6E6'}} /> */}

                    {/* <Text style={{ fontSize:20, fontWeight:'bold',color:'#1C4C4E'}}>PLANT TRIVIAS</Text> */}

                {/* <TouchableOpacity 
                    style={{ backgroundColor:'white',flexDirection:'row', alignItems:'center', borderColor:'#E1F6F7', borderWidth:1, borderRadius:8, paddingHorizontal:10,paddingVertical:10, marginTop:2,marginBottom:5, marginHorizontal:20}}
                    onPress={()=>navigation.navigate('PlantLibraryStack')}
                >
                        <Feather name="search" size={20} color="#1C4C4E" style={{marginRight:5}} />
                        <Text style={{flex: 1, paddingTop: 2, paddingRight: 10, paddingBottom: 2, paddingLeft: 0,color:'#1C4C4E'}}>Search</Text>
                </TouchableOpacity> */}

                {/* <View style={styles.sliderContainer}>
                    <Swiper autoplay height={50} activeDotColor="#1C4C4E" removeClippedSubviews={false}>
                            <View styles={styles.slide}>
                                <ImageBackground
                                    source={require('../assets/images/banners/plant-banner1.png')}
                                    resizeMode="cover"
                                    style={styles.sliderImage}
                                    imageStyle={{borderRadius:10}}
                                >
                                <Text style={{color:'white'}}>PLANTS ARE NICE</Text>
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
                    </Swiper>
                </View> */}

                {/* <View style={styles.containerT}>
                </View> */}

                
                {/* <View style={{padding:7,borderTopWidth:1,borderTopColor:'#E6E6E6', marginTop:15}} /> */}
            

                <View style={{flex:1,margin:17,paddingVertical:20}}>
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

                <TouchableOpacity style={{alignItems:'center', marginTop:10}}>
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
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>    
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
        height : 190,
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
