import React, { useRef, useState } from "react";
import { View, Text, Image, SafeAreaView, ScrollView, ImageBackground, StyleSheet, StatusBar, Button } from "react-native";
import { windowWidth, windowHeight } from '../utils/Dimensions'
import { Linking } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { plantListLibrary } from '../model/data';


import Feather from 'react-native-vector-icons/Feather'
import { TouchableOpacity } from "react-native-gesture-handler";
import CustomSwitch from "../components/CustomSwitch";

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
                    <Text style={{fontStyle:'italic',color:'white'}}>{route.params?.scientificName}</Text>
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
            
            <Text style={styles.section}>{route.params?.description}</Text>

            <Button title="Go to map screen and select marker" onPress={() => navigateToMarker(route.params?.latitude, route.params?.longitude)}/>

            <Text style={[styles.title,styles.section]}>Use</Text>
            <Text style={styles.section}
                  onPress={() => Linking.openURL("https://www.youtube.com/watch?v=uMNzY4V9N2I")}
            >
              {/* {route.params?.use} */}
              Medicine Guide
              </Text>
            <Text style={[styles.title,styles.section]}>Taxonomy</Text>
            <Text style={[styles.section,{fontSize:10}]}>{route.params?.taxonomy}</Text>
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
    },
    name: {
      fontWeight: 'bold',
    },
    section: {
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#cccccc',
      backgroundColor: 'white',
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