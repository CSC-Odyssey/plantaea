import 'react-native-gesture-handler';
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack';
import AppStack from './src/navigation/AppStack';

const App = () => {
  return(
    <NavigationContainer>
      {/* calls the OnboardingScreen and log in screen */}
      <AuthStack/>

      {/* calls the main app */}
      {/* <AppStack/> */}
    </NavigationContainer>
  )
}

export default App;