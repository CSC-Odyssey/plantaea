import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import React from 'react'
import { withExpoSnack } from 'nativewind';

import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { styled } from 'nativewind'

import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();
const StyledView = styled(View)
const StyledText = styled(Text)

export default function App() {
  return (
    // <NavigationContainer>
    //   <TailwindProvider>
    //     <Stack.Navigator>
    //       <Stack.Screen name="Home" component={ HomeScreen } />
    //     </Stack.Navigator>
    //   </TailwindProvider>
    // </NavigationContainer>

    <View className="bg-slate-300 min-h-screen justify-center items-center">
      <Text className="text-white font-extrabold text-4xl">Plantaea</Text>
      <Button className="bg-violet-500 hover:bg-violet-400 text-white font-bold py-2 px-4 border-b-4 border-violet-700 hover:border-violet-500 rounded" title="Button">
      </Button>
      <StatusBar hidden/>
    </View>
  );
}

