import React, { useRef, useState } from "react";
import { View, Text, Image, SafeAreaView, ScrollView, ImageBackground, StyleSheet, StatusBar } from "react-native";
import { windowWidth, windowHeight } from '../utils/Dimensions'

import Feather from 'react-native-vector-icons/Feather'
import { TouchableOpacity } from "react-native-gesture-handler";
import CustomSwitch from "../components/CustomSwitch";

import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
import * as Animatable from 'react-native-animatable';

const MIN_HEIGHT = 55;
const MAX_HEIGHT = 350;

const PlantDetailsScreen = ({navigation, route}) => {

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
            <Text style={[styles.title,styles.section]}>Use</Text>
            <Text style={styles.section}>{route.params?.use}</Text>
            <Text style={[styles.title,styles.section]}>Taxonomy</Text>
            <Text style={[styles.section,{fontSize:10}]}>{route.params?.taxonomy}</Text>
            </SafeAreaView>

        </ImageHeaderScrollView>
        </View>





        // <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
        //     <View>
        //         <ImageBackground source={route.params?.image} style={{width:windowWidth ,height:400}} imageStyle={{borderRadius:0}}>
        //             <View style={{backgroundColor:'white',width:44,height:44,borderRadius:44/2,marginTop:40,marginLeft:20,alignItems:'center',justifyContent:'center', shadowColor:'#171717', shadowOffset:{width: 100, height: 100}, shadowOpacity: 1,shadowRadius: 3}}>
        //                 <TouchableOpacity onPress={()=>navigation.goBack()}>
        //                     <Feather name="chevron-left" color="#1C4C4E" size={30}/>
        //                 </TouchableOpacity>
        //             </View>
        //         </ImageBackground>
        //     </View>

        // <ScrollView style={{padding:20}}>

        // <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        // <Text style={{fontWeight:'bold', fontSize:30, color:'#1C4C4E', textAlign:'center'}}>{route.params?.localName}</Text>
        // <Text style={{fontStyle:'italic', marginBottom:20}}>{route.params?.scientificName}</Text>

        // <View>
        //     <CustomSwitch 
        //         selectionMode={1}
        //         option1="Description"
        //         option2="Uses"
        //         option3="Taxonomy"
        //         onSelectSwitch={onSelectSwitch}
        //     />
        // </View>
        
        // <View style={{backgroundColor:'red'}}>
        // {descriptionTab == 1 && <Text style={{textAlign:'justify', marginBottom:100}}>{route.params?.description}</Text>}
        // {descriptionTab == 2 && <Text style={{textAlign:'justify', marginBottom:100}}>{route.params?.use}</Text>}
        // {descriptionTab == 3 && <Text style={{textAlign:'justify', marginBottom:100, fontSize:10}}>{route.params?.taxonomy}</Text>}
        // </View>

        
        // </View>
        // </ScrollView>
        // </SafeAreaView>
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