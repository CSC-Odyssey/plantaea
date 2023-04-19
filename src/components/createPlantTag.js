import React from 'react'
import { View, Text} from 'react-native'

export default function createPlantTag(isMedicine, isFood, isAromatic) {
    return (
        <View style={{flexDirection:'row'}}>
            {isMedicine == true? 
                <View style={{backgroundColor:'#F37373', alignItems:'center', borderRadius:8, paddingHorizontal:5,paddingVertical:1,marginTop:2}}><Text style={{fontSize:8, color:'white'}}>Medicine</Text></View>
                :
                null
            }
            {isFood == true? 
                <View style={{backgroundColor:'#F6C36C', alignItems:'center', borderRadius:8, paddingHorizontal:5,paddingVertical:1,marginTop:2}}><Text style={{fontSize:8, color:'white'}}>Food</Text></View>
                :
                null
            }
            {isAromatic == true? 
                <View style={{backgroundColor:'#E281DA', alignItems:'center', borderRadius:8, paddingHorizontal:5,paddingVertical:1,marginTop:2}}><Text style={{fontSize:8, color:'white'}}>Aromatic</Text></View>
                :
                null
            }
        </View>
    )
}