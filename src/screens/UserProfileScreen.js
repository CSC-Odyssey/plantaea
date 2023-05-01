import React,  { useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, Image, ImageBackground } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import { TouchableOpacity } from "react-native-gesture-handler";
import ListItem from '../components/ListItem'
import ListImage from '../components/ListImage'
import {plantListLibrary} from '../model/data'
import { s } from 'react-native-wind';

const UserProfileScreen = ({navigation}) => {
    const [switchView,setSwitchView] = useState(true); 
    return (
        <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
            <ScrollView style={{padding:40}}>

                <View style={{flex:1,alignItems:'center',marginBottom:20}}>
                    <Image source={require('../assets/images/undraw_Female_avatar_efig.png')} 
                           style={{width:175,height:175, borderRadius: 75}}  
                    />
                    <Text style={{fontSize:20, fontWeight:'bold', color:'#1C4C4E', marginTop:10}}>User</Text>
                </View>
                <View style={{marginTop: -10, alignItems:'center'}}>
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
                <View style={{paddingTop: 10,  flexDirection: 'row', alignContent: 'center', justifyContent: 'center'}}>
                    <View style={{alignContent: 'center', justifyContent: 'center'}}>
                        <Image
                            source={require('../assets/images/rank-icon.png')}
                            resizeMode="contain"
                            style={{width:35,height:35}}
                        />  
                        <Text style={{fontSize: 12}}>Bronze</Text> 
                    </View>   
                    <View style={{marginLeft:15, alignContent: 'center', justifyContent: 'center'}}>      
                        <Image
                            source={require('../assets/images/empty-rank-icon.png')}
                            resizeMode="contain"
                            style={{width:35,height:35}}
                        />  
                        <Text style={{marginLeft: 3, fontSize: 12}}>Silver</Text> 
                    </View>      
                    <View style={{marginLeft:15, alignContent: 'center', justifyContent: 'center'}}>      
                        <Image
                            source={require('../assets/images/empty-rank-icon.png')}
                            resizeMode="contain"
                            style={{width:35,height:35}}
                        />  
                        <Text style={{marginLeft: 4, fontSize: 12}}>Gold</Text> 
                    </View>  
                    <View style={{marginLeft:15, alignContent: 'center', justifyContent: 'center'}}>      
                        <Image
                            source={require('../assets/images/empty-rank-icon.png')}
                            resizeMode="contain"
                            style={{width:35,height:35}}
                        />  
                        <Text style={{marginLeft: -6,fontSize: 12}}>Diamond</Text> 
                    </View> 
                    <View style={{marginLeft:15, alignContent: 'center', justifyContent: 'center'}}>      
                        <Image
                            source={require('../assets/images/empty-rank-icon.png')}
                            resizeMode="contain"
                            style={{width:35,height:35}}
                        />  
                        <Text style={{marginLeft: -4, fontSize: 12}}>Botanist</Text> 
                    </View>  
                </View>
                <View style={{width: 350,padding:7,borderTopWidth:1,borderTopColor:'black', marginTop:30}} />
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
                    <View style={{alignItems:'center', justifyContent: 'center'}}>
                        <Text>Complete Missions to get Achievements</Text>
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    )
}

export default UserProfileScreen