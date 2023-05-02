import React, { useRef, useState } from "react";
import { View, Text, Image, SafeAreaView, ScrollView, ImageBackground, StyleSheet, StatusBar, Button } from "react-native";
import { windowWidth, windowHeight } from '../utils/Dimensions'
import { Linking } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import YoutubePlayer from 'react-native-youtube-iframe'

import { plantListLibrary } from '../model/data';

import MapView, {Marker} from 'react-native-maps';

import ListItem from '../components/ListItem'
import PlantTagDetailsScreen from "../components/PlantTagDetailsScreen";

import Feather from 'react-native-vector-icons/Feather'
import { TouchableOpacity } from "react-native-gesture-handler";

import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
import * as Animatable from 'react-native-animatable';

const MIN_HEIGHT = 150;
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
        
        {/* <StatusBar barStyle='light-content'/> */}
        {/* <StatusBar translucent hidden backgroundColor='transparent' /> */}

        <ImageHeaderScrollView
            maxHeight={MAX_HEIGHT}
            minHeight={MIN_HEIGHT}
            maxOverlayOpacity={.9}
            minOverlayOpacity={.5}
            renderHeader={() =>  (
                <ImageBackground source={route.params?.image} style={styles.image}/>
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


            {/* <View style={{justifyContent:'center',alignItems:'center'}}>
              <YoutubePlayer
                height={300}
                width={300}
                play={false}
                videoId="gdsyer04cVI"
                webViewStyle={ {opacity:0.99} } //Do not remove this line, the app will crash when navigating to this screen(Bug in the WebView library where the fix is to set its opacity to 0.99.)
              />
            </View> */}


            <View style={{borderBottomWidth: 1, borderBottomColor: '#cccccc',marginTop:50}}/>
            <Text style={[styles.title, {padding:20}]}>Use</Text>
            <View style={{borderBottomWidth: 1, borderBottomColor: '#cccccc'}}/>
            <Text style={styles.section}
            >
              {route.params?.use}
            </Text>


            <TouchableOpacity 
              style={{flexDirection:'row', alignItems:'center', justifyContent:'center',backgroundColor:'#C48E8E', borderRadius:8,paddingVertical:15,marginHorizontal:20,marginBottom:50}}
              onPress={() => Linking.openURL("https://www.youtube.com/watch?v=uMNzY4V9N2I")}
            >
                <Feather name="external-link" size={20} color="white" style={{marginRight:5}} />
                <Text style={{fontFamily:'Josefin Sans-Bold',letterSpacing:1, color:"white"}}>Video Guide</Text>
            </TouchableOpacity>
            
            <View style={{borderBottomWidth: 1, borderBottomColor: '#cccccc'}}/>
            <Text style={[styles.title, {padding:20}]}>Location</Text>
            <View style={{borderBottomWidth: 1, borderBottomColor: '#cccccc'}}/>

            
            <View style={styles.mapSection}>
              <MapView
                style={{flex:1}}
                region={{
                  latitude: route.params?.latitude,
                  longitude: route.params?.longitude,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
              >
                <Marker
                  coordinate={{
                    latitude: route.params?.latitude,
                    longitude: route.params?.longitude,
                  }}
              >
                <Image source={require('../assets/images/plant_marker.png')} style={{height: 35, width:35 }} />
              </Marker>

              </MapView>
            </View>


            <TouchableOpacity 
              style={{flexDirection:'row', alignItems:'center', justifyContent:'center',backgroundColor:'#92AF9F', borderRadius:8,paddingVertical:15,marginTop:2,marginHorizontal:20,marginBottom:100}}
              onPress={() => navigateToMarker(route.params?.latitude, route.params?.longitude)}
            >
                <Feather name="map-pin" size={20} color="white" style={{marginRight:5}} />
                <Text style={{fontFamily:'Josefin Sans-Bold',letterSpacing:1,color:"white"}}>Locate in Map Screen</Text>
            </TouchableOpacity>
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
      fontFamily:'Josefin Sans-Light',
      textAlign:'justify',
      lineHeight:25,
      color:'#1C4C4E',
      fontSize:15
    },
    mapSection: {
      padding: 20,
      height:250,
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