import React, { useState } from 'react'
import { View, Text, TouchableOpacity} from 'react-native'

export default function CustomSwitch({
    selectionMode,
    option1,
    option2,
    option3,
    onSelectSwitch
}) {

    const [getSelectionMode, setSelectionMode] = useState(selectionMode);

    const updateSwitchData = (value) => {
        setSelectionMode(value);
        onSelectSwitch(value);
    }

    return (
        <View style={{height:44, width:'100%', backgroundColor:'#EAE7E6', borderRadius:10, borderColor:'#1C4C4E', flexDirection:'row', justifyContent:'center'}}>
            <TouchableOpacity activeOpacity={1} onPress={() => updateSwitchData(1)}
            style={{flex:1, backgroundColor: getSelectionMode == 1 ? '#1C4C4E' : '#EAE7E6', borderRadius:10, justifyContent:'center', alignItems:'center'}}>
                <Text
                style={{color: getSelectionMode == 1 ? 'white' : '#1C4C4E', fontSize:14}}>
                    {option1}</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={1} onPress={() => updateSwitchData(2)}
            style={{flex:1, backgroundColor: getSelectionMode == 2 ? '#1C4C4E' : '#EAE7E6', borderRadius:10, justifyContent:'center', alignItems:'center'}}>
                <Text
                style={{color: getSelectionMode == 2 ? 'white' : '#1C4C4E', fontSize:14}}>
                    {option2}</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={1} onPress={() => updateSwitchData(3)}
            style={{flex:1, backgroundColor: getSelectionMode == 3 ? '#1C4C4E' : '#EAE7E6', borderRadius:10, justifyContent:'center', alignItems:'center'}}>
                
                <Text
                style={{color: getSelectionMode == 3 ? 'white' : '#1C4C4E', fontSize:14}}>
                    {option3}</Text>
            </TouchableOpacity>
        </View>
    )

}