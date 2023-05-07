import React, { useState } from 'react'
import { View, Text, TouchableOpacity} from 'react-native'

export default function CustomSwitchLibrary({
    selectionMode,
    option1,
    option2,
    option3,
    option4,
    onSelectSwitch
}) {

    const [getSelectionMode, setSelectionMode] = useState(selectionMode);

    const updateSwitchData = (value) => {
        setSelectionMode(value);
        onSelectSwitch(value);
    }

    return (
        <View style={{height:50, width:'100%', backgroundColor:'white', borderRadius:10, borderColor:'#1C4C4E', flexDirection:'row', justifyContent:'center'}}>
            <TouchableOpacity activeOpacity={1} onPress={() => updateSwitchData(1)}
            style={{marginTop:getSelectionMode == 1 ? 0 : 17 ,flex:1, backgroundColor: getSelectionMode == 1 ? '#92AF9F' : '#CBE2D6', borderTopRightRadius:13,borderTopLeftRadius:13, justifyContent:'center', alignItems:'center'}}>
                <Text
                style={{color: getSelectionMode == 1 ? 'white' : 'white', fontSize: getSelectionMode == 1 ? 14 : 10 , fontFamily:'Josefin Sans-Regular'}}>
                    {option1}</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={1} onPress={() => updateSwitchData(2)}
            style={{marginTop:getSelectionMode == 2 ? 0 : 17 ,flex:1, backgroundColor: getSelectionMode == 2 ? '#E88E8E' : '#FFDFDF', borderTopRightRadius:13,borderTopLeftRadius:13, justifyContent:'center', alignItems:'center'}}>
                <Text
                style={{color: getSelectionMode == 2 ? 'white' : 'white', fontSize: getSelectionMode == 2 ? 14 : 10 , fontFamily:'Josefin Sans-Regular'}}>
                    {option2}</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={1} onPress={() => updateSwitchData(3)}
            style={{marginTop:getSelectionMode == 3 ? 0 : 17 ,flex:1, backgroundColor: getSelectionMode == 3 ? '#E8D38E' : '#FFF7DF', borderTopRightRadius:13,borderTopLeftRadius:13, justifyContent:'center', alignItems:'center'}}>
                
                <Text
                style={{color: getSelectionMode == 3 ? 'white' : 'white', fontSize: getSelectionMode == 3 ? 12 : 10 , fontFamily:'Josefin Sans-Regular'}}>
                    {option3}</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={1} onPress={() => updateSwitchData(4)}
            style={{marginTop:getSelectionMode == 4 ? 0 : 17 ,flex:1, backgroundColor: getSelectionMode == 4 ? '#E8A4DC' : '#FFE0FC', borderTopRightRadius:13,borderTopLeftRadius:13, justifyContent:'center', alignItems:'center'}}>
                
                <Text
                style={{color: getSelectionMode == 4 ? 'white' : 'white', fontSize: getSelectionMode == 4 ? 12 : 10 , fontFamily:'Josefin Sans-Regular'}}>
                    {option4}</Text>
            </TouchableOpacity>
        </View>
    )

}