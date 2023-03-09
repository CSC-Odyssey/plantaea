import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../../screens/OnboardingScreen';
import LoginScreen from '../../screens/LoginScreen';

const Stack = createNativeStackNavigator();

const AuthStack = ({}) => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen component={OnboardingScreen} name="Onboarding" />
        <Stack.Screen component={LoginScreen} name="Login" />
      </Stack.Navigator>
    )
}

export default AuthStack