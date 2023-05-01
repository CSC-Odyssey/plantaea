import React from 'react'
import { View, Text} from 'react-native'

import Feather from 'react-native-vector-icons/Feather'

export default function PlantTagDetailsScreen(isMedicine, isConsumable, isAromatic) {
    return (
        <View style={{flexDirection:'row'}}>
            {isMedicine == true? 
                <View 
                    style={{ flexDirection:'row', backgroundColor:'#F37373', alignItems:'center', borderRadius:20, paddingHorizontal:10,paddingVertical:3,marginTop:2,marginRight:2.5}}>
                    <Feather name="heart" size={12} color="white" style={{marginRight:5}} />
                    <Text style={{fontSize:12, color:'white', fontFamily:'Josefin Sans-Regular'}}>Medicine</Text></View>
                :
                null
            }
            {isConsumable == true? 
                <View style={{flexDirection:'row',backgroundColor:'#F6C36C', alignItems:'center', borderRadius:20, paddingHorizontal:10,paddingVertical:3,marginTop:2,marginRight:2.5}}>
                    <Feather name="coffee" size={12} color="white" style={{marginRight:5}} />
                    <Text style={{fontSize:12, color:'white', fontFamily:'Josefin Sans-Regular'}}>Consumable</Text></View>
                :
                null
            }
            {isAromatic == true? 
                <View style={{flexDirection:'row',backgroundColor:'#E281DA', alignItems:'center', borderRadius:20, paddingHorizontal:10,paddingVertical:3,marginTop:2,marginRight:2.5}}>
                    <Feather name="star" size={12} color="white" style={{marginRight:5}} />
                    <Text style={{fontSize:12, color:'white', fontFamily:'Josefin Sans-Regular'}}>Ornamental</Text></View>
                :
                null
            }
        </View>
    )
}