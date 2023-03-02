import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { alignItems } from 'react-native-wind/dist/styles/flex/align-items';

const Startup = () => {
  const navigation = useNavigation();
  const[name, setName] = useState('');
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      {/* <Text className="text-red-200">HomeScreenTest</Text> */}
      <Text>Enter your Username</Text>
      <TextInput
        value={name}
        onChangeText={(username) => setName(username)}
        placeholder={'Enter Your Username'}
        style={styles.inputStyle}
      />

      <Button
        title='Login'
        mode='contained'
        onPress={() => navigation.navigate('Detail', {
            paramKey: name
        })}
      />
      <Button
        title='Continue without signing up or logging in'
        // mode='contained'
        onPress={() => navigation.navigate('Home'

        )}
      />
    </View>
  )
}

export default Startup

const styles = StyleSheet.create({
  inputStyle: {
    width: '80%',
    height: 44,
    padding:10,
    marginVertical:10,
    backgroundColor:'#D8D8D6',
  }
})