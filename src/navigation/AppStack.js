import 'react-native-gesture-handler';
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import AboutScreen from '../screens/AboutScreen';
import SettingsScreen from '../screens/SettingsScreen';
import TabNavigator from './TabNavigator';

import CustomDrawer from '../components/CustomDrawer';

import Feather from 'react-native-vector-icons/Feather'

const Drawer = createDrawerNavigator();

const AppStack = ({}) => {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} screenOptions={{headerShown: false, drawerLabelStyle: {marginLeft: -25, fontFamily:'Josefin Sans-Regular'}, drawerActiveBackgroundColor:'#92AF9F', drawerActiveTintColor:'white'}}>
          <Drawer.Screen name="Home" component={TabNavigator} options={{drawerIcon: ({color}) => (
            <Feather name="home" size={22} color={color} style={{marginRight:5}}/>
          )
          }}/>
          <Drawer.Screen name="Settings" component={SettingsScreen} options={{drawerIcon: ({color}) => (
            <Feather name="settings" size={22} color={color} style={{marginRight:5}}/>
          )
          }}/>
          <Drawer.Screen name="About Plantaea" component={AboutScreen} options={{drawerIcon: ({color}) => (
            <Feather name="archive" size={22} color={color} style={{marginRight:5}}/>
          )
          }}/>
        </Drawer.Navigator>
    )
}

export default AppStack