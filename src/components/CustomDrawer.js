import React, {useContext} from 'react'
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { AuthContext } from '../context/AuthContext'

import Feather from 'react-native-vector-icons/Feather'

const CustomDrawer = (props) => {
    const {logout} = useContext(AuthContext);

    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
            <View style={{padding:20}}>
            <Image source={require('../assets/images/user-profile.jpg')} style={{height:80,width:80,borderRadius:40,marginBottom:10}} />
            <Text style={{fontFamily:'Josefin Sans-Light',color:'#1C4C4E',fontSize:18}}>Username</Text>
            <Text style={{fontFamily:'Josefin Sans-Light',color:'#1C4C4E'}}>Botanist</Text>
            </View>
            <View style={{flex:1, backgroundColor:'white',paddingTop:10}}>
            <DrawerItemList {...props} />
            </View>
            </DrawerContentScrollView>
            <View style={{padding:20,borderTopWidth:1,borderTopColor:'#ccc'}}>
                <TouchableOpacity onPress={()=>{logout()}} style={{paddingVertical:15}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                <Feather name="log-out" size={20} color="#1C4C4E" style={{marginRight:5}}/>
                <Text style={{fontFamily:'Josefin Sans-Light',fontSize:15, marginLeft:5}}>Sign Out</Text>
                </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CustomDrawer