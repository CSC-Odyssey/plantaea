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
    "Josefin Sans-LightItalic": require('./src/assets/fonts/JosefinSans-LightItalic.ttf'),
    "Josefin Sans-SemiBold": require('./src/assets/fonts/JosefinSans-SemiBold.ttf'),
    "Josefin Sans-Bold": require('./src/assets/fonts/JosefinSans-Bold.ttf'),
    "Josefin Sans-Italic": require('./src/assets/fonts/JosefinSans-Italic.ttf'),

    "Montserrat-Regular": require('./src/assets/fonts/Montserrat-Regular.ttf'),
    "Montserrat-Light": require('./src/assets/fonts/Montserrat-Light.ttf'),
    "Montserrat-SemiBold": require('./src/assets/fonts/Montserrat-SemiBold.ttf'),
    "Montserrat-Bold": require('./src/assets/fonts/Montserrat-Bold.ttf'),
    "Montserrat-Italic": require('./src/assets/fonts/Montserrat-Italic.ttf'),

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