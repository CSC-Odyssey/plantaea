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
                headerShown:false
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
        <Stack.Screen component={MapScreen} name="Map" />
      </Stack.Navigator>
    )
}

const HomeStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown:false}}
    >
        <Stack.Screen component={HomeScreen} name="HomeScreen"      />
        <Stack.Screen component={PlantLibraryStack} name="PlantLibrary" />
        <Stack.Screen component={CameraScreen} name="Camera" />
        {/* <Stack.Screen component={DailiesScreen} name="Dailies" /> */}
        <Stack.Screen component={MapScreen} name="Map" />
        {/* <Stack.Screen component={PlantUsesScreen} name="PlantUses" /> */}
      </Stack.Navigator>
    )
}

const CameraBottomTabButton = ({children, onPress}) => (
    <TouchableOpacity
        style={{
            top:-20,
            justifyContent:'center',
            alignItems:'center',

        }}
        onPress={onPress}
    >
        <View style={{
            width:60,
            height:60,
            borderRadius:30,
            backgroundColor:'white',
            ...styles.shadow

        }}>
            {children}
        </View>
    </TouchableOpacity>
);

const TabNavigator = () => {
    return (

    <Tab.Navigator 
        screenOptions={{headerShown: false, tabBarShowLabel:false,tabBarActiveTintColor:'#6B8778',tabBarInactiveTintColor:'#E2E2E2',
        tabBarStyle:{backgroundColor:'white',position:'absolute',borderRadius:20,bottom:15, left:20, right:20}
        }}
    >
        <Tab.Screen name="Home2" component={HomeStack} options={{
            tabBarIcon: ({color,size}) => (
                <Feather name="home" color={color} size={size}/>
            )
        }}/>

        <Tab.Screen name="Dailies" component={DailiesScreen} options={{
        tabBarIcon: ({color,size}) => (
            <Feather name="flag" color={color} size={size} />
    ) }} />


        {/* <Tab.Screen name="Map" component={MapScreen} options={{
        tabBarIcon: ({color,size}) => (
            <Ionicons name="ios-map" color={color} size={size} />
    ) }} /> */}


        
        {/* <Tab.Screen name="Camera" component={CameraScreen} options={{
            tabBarIcon: ({focused}) => (
                    <Image
                        source={require('../assets/images/icons/camera-button-icon.png')}
                        resizeMode="contain"
                        style={{width:90,height:90}}
                    />
                ),
                tabBarButton: (props) => (
                    <CameraBottomTabButton {...props} />
                )
            }}/>    */}

                    {/* <Tab.Screen name="PlantUses" component={PlantUsesScreen} options={{
                tabBarIcon: ({color,size}) => (
                    <Ionicons name="ios-bandage-sharp" color={color} size={size} />
            ) }} />        */}

                                {/* <Tab.Screen name="ScreenA" component={ScreenA} options={{
                tabBarIcon: ({color,size}) => (
                    <Ionicons name="ios-logo-tux" color={color} size={size} />
            ) }} />        */}

            {/* <Tab.Screen name="ScreenB" component={ScreenB} options={{
                tabBarIcon: ({color,size}) => (
                    <Ionicons name="ios-bandage-sharp" color={color} size={size} />
            ) }} />        */}
{/* 
        <Tab.Screen name="PlantLibrary" component={PlantLibraryStack} options={{
          tabBarIcon: ({color, size}) => (
            <Feather name="bookmark" color={color} size={size} />
          ),
        }}/> */}
        <Tab.Screen name="UserProfile" component={UserProfileScreen} options={{
        tabBarIcon: ({color,size}) => (
                <Feather name="user" color={color} size={size} />
            )
        }}/>
    </Tab.Navigator>
        )
}

export default TabNavigator

const styles = StyleSheet.create({
    shadow: {
        shadowColor:'black',
        shadowOffset: {width:0,height:5},
        shadowOpacity:.5,
        shadowRadius:3.5,
        elevation:1
    }
});