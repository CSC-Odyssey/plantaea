import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from '../screens/HomeScreen'
import MapScreen from '../screens/MapScreen'
import CameraScreen from '../screens/CameraScreen'
import PlantLibraryScreen from '../screens/PlantLibrary'
import UserProfileScreen from '../screens/UserProfileScreen'

import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (

    <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel:false, tabBarStyle:{backgroundColor:'#C2F373'},tabBarActiveTintColor:'white',tabBarInactiveTintColor:'#A4B489'}}>
        <Tab.Screen name="Home2" component={HomeScreen} options={{
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
        tabBarIcon: ({color,size}) => (
                <Ionicons name="camera-outline" color={color} size={size} />
            )
        }}/>
        <Tab.Screen name="PlantLibrary" component={PlantLibraryScreen} options={{
        tabBarIcon: ({color,size}) => (
                <Ionicons name="book-outline" color={color} size={size} />
            )
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