import 'react-native-gesture-handler';
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../screens/HomeScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import TabNavigator from './TabNavigator';

import CustomDrawer from '../components/CustomDrawer';

import Ionicons from 'react-native-vector-icons/Ionicons'

const Drawer = createDrawerNavigator();

const AppStack = ({}) => {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} screenOptions={{headerShown: false, drawerLabelStyle: {marginLeft: -25}, drawerActiveBackgroundColor:'#102409', drawerActiveTintColor:'white'}}>
          <Drawer.Screen name="Home" component={TabNavigator} options={{drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          )
          }}/>
          <Drawer.Screen name="Profile" component={UserProfileScreen} options={{drawerIcon: ({color}) => (
          <Ionicons name="person-outline" size={22} color={color} />
          )
          }}/>
          <Drawer.Screen name="Settings" component={SettingsScreen} options={{drawerIcon: ({color}) => (
          <Ionicons name="settings-outline" size={22} color={color} />
          )
          }}/>
        </Drawer.Navigator>
    )
}

export default AppStack

// import React from 'react'
// import { View, Text } from 'react-native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import OnboardingScreen from '../../screens/OnboardingScreen';
// import LoginScreen from '../../screens/LoginScreen';

// const Stack = createNativeStackNavigator();

// const AuthStack = ({}) => {
//     return (
//         <Stack.Navigator screenOptions={{headerShown:false}}>
//         <Stack.Screen component={OnboardingScreen} name="Onboarding" />
//         <Stack.Screen component={LoginScreen} name="Login" />
//       </Stack.Navigator>
//     )
// }

// export default AuthStack