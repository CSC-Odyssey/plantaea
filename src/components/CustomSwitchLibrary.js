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
            style={{marginTop:getSelectionMode == 1 ? 0 : 17 ,flex:1, backgroundColor: getSelectionMode == 1 ? '#79D27E' : '#DEFFE0', borderTopRightRadius:13,borderTopLeftRadius:13, justifyContent:'center', alignItems:'center'}}>
                <Text
                style={{color: getSelectionMode == 1 ? 'white' : 'white', fontSize: getSelectionMode == 1 ?14:10}}>
                    {option1}</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={1} onPress={() => updateSwitchData(2)}
            style={{marginTop:getSelectionMode == 2 ? 0 : 17 ,flex:1, backgroundColor: getSelectionMode == 2 ? '#F37373' : '#FFDFDF', borderTopRightRadius:13,borderTopLeftRadius:13, justifyContent:'center', alignItems:'center'}}>
                <Text
                style={{color: getSelectionMode == 2 ? 'white' : 'white', fontSize: getSelectionMode == 2 ?14:10}}>
                    {option2}</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={1} onPress={() => updateSwitchData(3)}
            style={{marginTop:getSelectionMode == 3 ? 0 : 17 ,flex:1, backgroundColor: getSelectionMode == 3 ? '#F6C36C' : '#FFF7DF', borderTopRightRadius:13,borderTopLeftRadius:13, justifyContent:'center', alignItems:'center'}}>
                
                <Text
                style={{color: getSelectionMode == 3 ? 'white' : 'white', fontSize: getSelectionMode == 3 ?14:10}}>
                    {option3}</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={1} onPress={() => updateSwitchData(4)}
            style={{marginTop:getSelectionMode == 4 ? 0 : 17 ,flex:1, backgroundColor: getSelectionMode == 4 ? '#E281DA' : '#FFE0FC', borderTopRightRadius:13,borderTopLeftRadius:13, justifyContent:'center', alignItems:'center'}}>
                
                <Text
                style={{color: getSelectionMode == 4 ? 'white' : 'white', fontSize: getSelectionMode == 4 ?14:10}}>
                    {option4}</Text>
            </TouchableOpacity>
        </View>
    )

}