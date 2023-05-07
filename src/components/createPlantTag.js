import React from 'react'
import { View, Text} from 'react-native'

export default function createPlantTag(isMedicine, isConsumable, isAromatic) {
    return (
        <View style={{flexDirection:'row'}}>
            {isMedicine == true? 
                <View style={{backgroundColor:'#E88E8E', alignItems:'center', borderRadius:8, paddingHorizontal:5,paddingVertical:1,marginTop:2,marginRight:2.5}}><Text style={{fontSize:8, color:'white', fontFamily:'Josefin Sans-Light'}}>Medicine</Text></View>
                :
                null
            }
            {isConsumable == true? 
                <View style={{backgroundColor:'#E8D38E', alignItems:'center', borderRadius:8, paddingHorizontal:5,paddingVertical:1,marginTop:2,marginRight:2.5}}><Text style={{fontSize:8, color:'white', fontFamily:'Josefin Sans-Light'}}>Consumable</Text></View>
                :
                null
            }
            {isAromatic == true? 
                <View style={{backgroundColor:'#E8A4DC', alignItems:'center', borderRadius:8, paddingHorizontal:5,paddingVertical:1,marginTop:2,marginRight:2.5}}><Text style={{fontSize:8, color:'white', fontFamily:'Josefin Sans-Light'}}>Ornamental</Text></View>
                :
                null
            }
        </View>
    )
}