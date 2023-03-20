import React,  { useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, Image, } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import { TouchableOpacity } from "react-native-gesture-handler";
import ListItem from '../components/ListItem'
import ListImage from '../components/ListImage'
import {plantListLibrary} from '../model/data'

const UserProfileScreen = ({navigation}) => {
    const [switchView,setSwitchView] = useState(true); 
    return (
        <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
            <ScrollView style={{padding:40}}>
                <View style={{flex:1,alignItems:'center',marginBottom:20}}>
                    <Image source={require('../assets/images/user-profile.jpg')} 
                           style={{width:150,height:150, marginTop:50, borderRadius: 75}}  
                    />
                    <Text style={{fontSize:20, fontWeight:'bold', color:'#1C4C4E', marginTop:10}}>User</Text>
                </View>
                <View style={{alignItems:'center'}}>
                    <View style={{alignItems:'center', 
                                  width: 300, 
                                  height: 35,
                                  justifyContent: 'center' ,
                                  backgroundColor: '#F1F1F1',
                                  borderColor:'#C6C6C6', 
                                  borderWidth:1, 
                                  borderRadius:8,}}>
                        <Text>Title</Text>
                    </View>
                </View>
                <View style={{width: 350,padding:7,borderTopWidth:1,borderTopColor:'black', marginTop:50}} />
                <View style={{flexDirection:'row',alignItems:'center', justifyContent: 'center'}}>             
                    <View style={{borderRightWidth: 1, 
                                  borderColor:'black',
                                  paddingRight: 30}}>
                    <TouchableOpacity onPress={() => setSwitchView(true)}>
                        <Image
                            source={require('../assets/images/library-icon.png')}
                            resizeMode="contain"
                            style={{width:40,height:40}}
                        />
                    </TouchableOpacity>
                    </View> 
                    <View style={{borderLeftidth: 1, borderColor:'black', paddingLeft:30}}>
                    <TouchableOpacity onPress={() => setSwitchView(false)}>
                        <Image
                            source={require('../assets/images/achievement-icon.png')}
                            resizeMode="contain"
                            style={{width:40,height:40}}
                        />
                    </TouchableOpacity>
                    </View>
                </View>
                <View style={{width: 350,padding:7,borderTopWidth:1,borderTopColor:'black',marginTop:14}} />
                
                {switchView ? (
                    <View style={{flexDirection: 'row',justifyContent:'flex-start'}}>
                        {plantListLibrary.map(item => (
                            <ListImage key={item.id} 
                                    image={item.image}
                                    onPress={() => navigation.navigate('PlantDetails', {image: item.image, 
                                                                                        scientificName: item.scientificName, 
                                                                                        localName: item.localName, 
                                                                                        description: item.description, 
                                                                                        id: item.id})}/>
                        ))
                        }
                    </View>
                ) : (
                    <View>
                        <Text>Achievements</Text>
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    )
}

export default UserProfileScreen