import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from '../screens/HomeScreen'
import DailiesScreen from '../screens/DailiesScreen'
import MapScreen from '../screens/MapScreen'
import CameraScreen from '../screens/CameraScreen'
import PlantUsesScreen from '../screens/PlantUsesScreen'
import PlantLibraryScreen from '../screens/PlantLibrary'
import UserProfileScreen from '../screens/UserProfileScreen'
import PlantDetailsScreen from '../screens/PlantDetailsScreen'

import ScreenA from '../screens/ScreenA'
import ScreenB from '../screens/ScreenB'

import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const PlantLibraryStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen component={PlantLibraryScreen} name="PlantLibraryStack"
            options={({}) => ({
                headerShown:true,
                title:'',
                headerTintColor:'#1C4C4E',
                headerTransparent:true,
            })}        
        />
        <Stack.Screen component={PlantDetailsScreen} name="PlantDetails" 
            options={({}) => ({
                headerShown:true,
                title:'',
                headerTintColor:'white',
                headerTransparent:true,
            })}
        />
        <Stack.Screen component={ScreenA} name="ScreenA" 
                    options={({}) => ({
                        headerShown:true,
                        title:'',
                        headerTintColor:'black',
                        headerTransparent:true,
                    })}
        />
        {/* <Stack.Screen component={MapScreen} name="Map" /> */}
      </Stack.Navigator>
    )
}

const MapStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen component={MapScreen} name="MapStack"
            options={({}) => ({
                headerShown:true,
                title:'',
                headerTintColor:'#1C4C4E',
                headerTransparent:true,
            })}        
        />
        <Stack.Screen component={PlantDetailsScreen} name="PlantDetails" 
            options={({}) => ({
                headerShown:true,
                title:'',
                headerTintColor:'white',
                headerTransparent:true,
            })}
        />
      </Stack.Navigator>
    )
}

const HomeStack = () => {
    return (

        <Tab.Navigator 
        screenOptions={{headerShown: false, tabBarShowLabel:false,tabBarActiveTintColor:'#6CA285',tabBarInactiveTintColor:'#A2A2A2',
        tabBarStyle:{backgroundColor:'white',position:'absolute',borderRadius:20,bottom:15, left:20, right:20}
        }}
    >
        <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarIcon: ({color,size}) => (
                <Feather name="home" color={color} size={size}/>
            )
        }}/>

        <Tab.Screen name="Dailies" component={DailiesScreen} options={{
        tabBarIcon: ({color,size}) => (
            <Feather name="star" color={color} size={size} />
    ) }} />

        <Tab.Screen name="UserProfile" component={UserProfileScreen} options={{
        tabBarIcon: ({color,size}) => (
                <Feather name="user" color={color} size={size} />
            )
        }}/>
    </Tab.Navigator>

    )
}


const TabNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}
        >
            <Stack.Screen component={HomeStack} name="HomeScreen"      />
            <Stack.Screen 
                component={PlantLibraryStack} 
                name="PlantLibrary"
            />
            <Stack.Screen component={CameraScreen} name="Camera" />
            <Stack.Screen component={MapStack} name="Map" />
          </Stack.Navigator>

        )
}

export default TabNavigator