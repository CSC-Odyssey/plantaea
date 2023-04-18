import React from "react";
import { View, Text} from "react-native";
//import {ProgressBar} from '@react-native-community/progress-bar-android';

export default function ListActivities({title}){
    return( 
            <View style={{flexDirection:'row', 
                alignItems:'center', 
                flex:1, 
                backgroundColor:'#F3F3F3', 
                borderWidth:.2, 
                borderRadius:8, 
                paddingHorizontal:10,
                paddingVertical:10,
                margin: 10,
                marginTop:7,
            }}>
                 <View>
                    <Text style={{fontStyle: "italic", fontWeight: "bold"}}>{title}</Text>
                  {/* <ProgressBar styleAttr="Horizontal" color="#2196F3" />*/}
                 </View>
             </View>
    )
}