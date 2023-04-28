import 'react-native-gesture-handler';
import React, { useEffect } from 'react';

import { useFonts } from 'expo-font';

import { AuthProvider } from './src/context/AuthContext';
import AppNav from './src/navigation/AppNav';

import * as SplashScreen from 'expo-splash-screen'

const App = () => {

  const [fontsLoaded] = useFonts ({
    "Josefin Sans-Regular": require('./src/assets/fonts/JosefinSans-Regular.ttf'),
    "Josefin Sans-Light": require('./src/assets/fonts/JosefinSans-Light.ttf'),
    "Josefin Sans-SemiBold": require('./src/assets/fonts/JosefinSans-SemiBold.ttf'),
    "Josefin Sans-Bold": require('./src/assets/fonts/JosefinSans-Bold.ttf'),
    "Josefin Sans-Italic": require('./src/assets/fonts/JosefinSans-Italic.ttf'),
});

// useEffect(() => {
//   async function prepare() {
//     await SplashScreen.preventAutoHideAsync();
//   }
//   prepare();
// }, []);

if(!fontsLoaded){
  return undefined;
} 

// else {
//   SplashScreen.hideAsync();
// }

  return(
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  )
}

export default App;