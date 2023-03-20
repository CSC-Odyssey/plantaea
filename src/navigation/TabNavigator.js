import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from '../screens/HomeScreen'
import MapScreen from '../screens/MapScreen'
import CameraScreen from '../screens/CameraScreen'
import PlantLibraryScreen from '../screens/PlantLibrary'
import UserProfileScreen from '../screens/UserProfileScreen'
import PlantDetailsScreen from '../screens/PlantDetailsScreen'

import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const PlantLibraryStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen component={PlantLibraryScreen} name="PlantLibraryStack" />
        <Stack.Screen component={PlantDetailsScreen} name="PlantDetails" />
      </Stack.Navigator>
    )
}

const HomeStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen component={HomeScreen} name="HomeScreen" />
        <Stack.Screen component={PlantLibraryScreen} name="PlantLibraryStack" />
        <Stack.Screen component={MapScreen} name="Map" />
      </Stack.Navigator>
    )
}

const CameraBottomTabButton = ({children, onPress}) => (
    <TouchableOpacity
        style={{
            top:-30,
            justifyContent:'center',
            alignItems:'center',
            ...styles.shadow
        }}
        onPress={onPress}
    >
        <View style={{
            width:70,
            height:70,
            borderRadius:35,

        }}>
            {children}
        </View>
    </TouchableOpacity>
);

const TabNavigator = () => {
    return (

    <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel:false, tabBarStyle:{backgroundColor:'white'},tabBarActiveTintColor:'#102409',tabBarInactiveTintColor:'#C6C6C6'}}>
        <Tab.Screen name="Home2" component={HomeStack} options={{
            tabBarIcon: ({color,size}) => (
                <Ionicons name="home-outline" color={color} size={size} />
            )
        }}/>
        <Tab.Screen name="Map" component={MapScreen} options={{
        tabBarIcon: ({color,size}) => (
                <Ionicons name="map-outline" color={color} size={size} />
            )
        }}/>
        <Tab.Screen name="Camera" component={CameraScreen} options={{
        tabBarIcon: ({focused}) => (
                <Image
                    source={require('../assets/images/CameraButtonIcon.png')}
                    resizeMode="contain"
                    style={{width:100,height:100}}
                />
            ),
            tabBarButton: (props) => (
                <CameraBottomTabButton {...props} />
            )
        }}/>
        <Tab.Screen name="PlantLibrary" component={PlantLibraryStack} options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="book-outline" color={color} size={size} />
          ),
        }}/>
        <Tab.Screen name="UserProfile" component={UserProfileScreen} options={{
        tabBarIcon: ({color,size}) => (
                <Ionicons name="person-outline" color={color} size={size} />
            )
        }}/>
    </Tab.Navigator>
        )
}

export default TabNavigator

const styles = StyleSheet.create({
    shadow: {
        shadowColor:'#7F5DF0',
        shadowOffset: {width:0,height:10},
        shadowOpacity:0.25,
        shadowRadius:3.5,
        elevation:5
    }
});