import { View, Text } from 'react-native'
import React from 'react'

const Home = ({route}) => {
    return(
        <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
        <Text className="text-red-200">HOME</Text>
         </View>
    )
}

export default Home