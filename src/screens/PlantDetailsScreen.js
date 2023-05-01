import React, { useRef, useState } from "react";
import { View, Text, Image, SafeAreaView, ScrollView, ImageBackground, StyleSheet, StatusBar, Button } from "react-native";
import { windowWidth, windowHeight } from '../utils/Dimensions'
import { Linking } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { plantListLibrary } from '../model/data';

import ListItem from '../components/ListItem'
import PlantTagDetailsScreen from "../components/PlantTagDetailsScreen";

import Feather from 'react-native-vector-icons/Feather'
import { TouchableOpacity } from "react-native-gesture-handler";

import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
import * as Animatable from 'react-native-animatable';

const MIN_HEIGHT = 55;
const MAX_HEIGHT = 350;

const PlantDetailsScreen = ({navigation, route}) => {

  const nav = useNavigation();
  const navigateToMarker = (latitude, longitude) => {
    nav.navigate('ScreenA', {
      latitude,
      longitude,
    });
  };

    const navTitleView = useRef(null);

    const [descriptionTab, setDescriptionTab] = useState(1);
    const onSelectSwitch = (value) => {
        setDescriptionTab(value);
    }

    return(

        <View style={styles.container}>
        <StatusBar barStyle='light-content'/>

        <ImageHeaderScrollView
            maxHeight={MAX_HEIGHT}
            minHeight={MIN_HEIGHT}
            maxOverlayOpacity={0.6}
            minOverlayOpacity={0.3}
            renderHeader={() =>  (
                <Image source={route.params?.image} style={{width:windowWidth,height:400}}/>
                )}

            renderForeground={() => (
                <View style={styles.titleContainer}>
                    <Text style={styles.imageTitle}>{route.params?.localName}</Text>
                    <Text style={{color:'white',fontFamily:'Josefin Sans-Italic'}}>{route.params?.scientificName}</Text>
                </View>
            )}

            renderFixedForeground={() => (
                <Animatable.View style={styles.navTitleView} ref={navTitleView}>
                    <Text style={styles.navTitle}>{route.params?.localName}</Text>
                </Animatable.View>

            )}
        >
            <SafeAreaView style={{padding:10,backgroundColor:'white'}}>
            <TriggeringView
                style={styles.section}
                onHide={() => navTitleView.current.fadeInUp(200)}
                onDisplay={() => navTitleView.current.fadeOut(100)}
            >
                    <Text style={styles.title}>Description</Text>
            </TriggeringView>
            
            <View style={{borderBottomWidth: 1, borderBottomColor: '#cccccc'}}/>
            
            <Text style={styles.section}>{route.params?.description}</Text>


            {/* <View style={{borderBottomWidth: 1, borderBottomColor: '#cccccc',marginBottom:50}}/> */}


            <View style={{alignItems:'center'}}>
                    {route.params?.category[0] == 'medicine' && route.params?.category[1] == 'consumable' && route.params?.category[2] == 'ornamental'?
                        PlantTagDetailsScreen(true,true,true)
                        : route.params?.category[0] == 'medicine' && route.params?.category[1] == 'consumable'?
                        PlantTagDetailsScreen(true,true)
                        : route.params?.category[0] == 'medicine' && route.params?.category[1] == 'ornamental'?
                        PlantTagDetailsScreen(true,false,true)
                        : route.params?.category[0] == 'consumable' && route.params?.category[1] == 'ornamental'?
                        PlantTagDetailsScreen(false,true,true)
                        : route.params?.category[0] == 'medicine'?     
                        PlantTagDetailsScreen(true)    
                        : route.params?.category[0] == 'consumable'?
                        PlantTagDetailsScreen(false,true)   
                        :
                        PlantTagDetailsScreen(false,false,true)
                    }
                    </View>





            <View style={{borderBottomWidth: 1, borderBottomColor: '#cccccc',marginTop:50}}/>
            <Text style={[styles.title, {padding:20}]}>Use</Text>
            <View style={{borderBottomWidth: 1, borderBottomColor: '#cccccc'}}/>
            <Text style={styles.section}
            >
              {route.params?.use}
            </Text>
            <Text style={styles.section}
                  onPress={() => Linking.openURL("https://www.youtube.com/watch?v=uMNzY4V9N2I")}>
              Guide To Make
            </Text>

            <TouchableOpacity 
              style={{flexDirection:'row', alignItems:'center', justifyContent:'center',backgroundColor:'#8EB96F', borderRadius:8,paddingVertical:15, marginTop:2,marginBottom:5, marginHorizontal:20,marginBottom:100}}
              onPress={() => navigateToMarker(route.params?.latitude, route.params?.longitude)}
            >
                <Feather name="map-pin" size={20} color="white" style={{marginRight:5}} />
                <Text style={{fontFamily:'Josefin Sans-Bold', color:"white"}}>Plant Location</Text>
            </TouchableOpacity>
            {/* <Text style={[styles.title,styles.section]}>Taxonomy</Text>
            <Text style={[styles.section,{fontSize:10}]}>{route.params?.taxonomy}</Text> */}
            </SafeAreaView>

        </ImageHeaderScrollView>
        </View>
    )
}

export default PlantDetailsScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      height: MAX_HEIGHT,
      width: windowWidth,
      alignSelf: 'stretch',
      resizeMode: 'cover',
    },
    title: {
      fontSize: 20,
      fontFamily:'Josefin Sans-Regular',
      color:'#1C4C4E'
    },
    name: {
      fontWeight: 'bold',
    },
    section: {
      padding: 20,
      // borderBottomWidth: 1,
      // borderBottomColor: '#cccccc',
      backgroundColor: 'white',
      fontFamily:'Josefin Sans-Light',
      textAlign:'justify',
      lineHeight:25,
      color:'#1C4C4E',
      fontSize:15
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    sectionContent: {
      fontSize: 16,
      textAlign: 'justify',
    },
    categories: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
    },
    categoryContainer: {
      flexDirection: 'row',
      backgroundColor: '#FF6347',
      borderRadius: 20,
      margin: 10,
      padding: 10,
      paddingHorizontal: 15,
    },
    category: {
      fontSize: 14,
      color: '#fff',
      marginLeft: 10,
    },
    titleContainer: {
      flex: 1,
      alignSelf: 'stretch',
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageTitle: {
      color: 'white',
      backgroundColor: 'transparent',
      fontSize: 24,
      fontFamily:'Josefin Sans-SemiBold'
    },
    navTitleView: {
      height: MIN_HEIGHT,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: Platform.OS === 'ios' ? 40 : 5,
      opacity: 0,
    },
    navTitle: {
      color: 'white',
      fontSize: 18,
      backgroundColor: 'transparent',
    },
    sectionLarge: {
      minHeight: 300,
    },
  });