import React from 'react'
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import Ionicons from 'react-native-vector-icons/Ionicons'


const CustomDrawer = (props) => {
    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:'#B6E03F'}}>
            <ImageBackground source={require('../assets/images/drawer-bg.png')} style={{padding:20}}>
            <Image source={require('../assets/images/user-profile.jpg')} style={{height:80,width:80,borderRadius:40,marginBottom:10}} />
            <Text style={{color:'white',fontSize:18}}>Username</Text>
            <Text style={{color:'white'}}>Botanist</Text>
            </ImageBackground>
            <View style={{flex:1, backgroundColor:'white',paddingTop:10}}>
            <DrawerItemList {...props} />
            </View>
            </DrawerContentScrollView>
            <View style={{padding:20,borderTopWidth:1,borderTopColor:'#ccc'}}>
                <TouchableOpacity onPress={()=>{}} style={{paddingVertical:15}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                <Ionicons name="exit-outline" size={22} />
                <Text style={{fontSize:15, marginLeft:5}}>Sign Out</Text>
                </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CustomDrawer