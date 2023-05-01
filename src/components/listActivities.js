import React from "react";
import { View, Text, StyleSheet,Animated} from "react-native";
import { capCounter } from "../screens/CameraScreen";





const Progress = ({ step, steps, height}) => {
    const animatedValue =React.useRef(new Animated.Value(-1000)).current;
    const reactive =React.useRef(new Animated.Value(-1000)).current;
    const [width,setWidth] =React.useState(0);

    React.useEffect(() => {
        Animated.timing(animatedValue,{
            toValue: reactive,
            duration:300,
            useNativeDriver: true
        }).start();
    },[])

    React.useEffect(() => {
        reactive.setValue(-width + (width*step)/steps)
    }, [step,width])

    return ( 
    <>
        <Text> 
            {step} /{steps}
        </Text>

        <View 
            onLayout={(e) => {
                const newWidth =e.nativeEvent.layout.width;
                setWidth(newWidth);
            }}
            style = {{
                height, 
                backgroundColor:'rgba(0,0,0,0.1)',
                borderRadius:height,
                overflow:'hidden'}}>

           <Animated.View  
            style ={{height,
            width:'100%',
            borderRadius:height, 
            backgroundColor:'rgba(63,89,57,0.7)',
            position:'absolute',
            left :0,
            top: 0,
            transform:[{translateX: animatedValue},],
            }}>
          </Animated.View>

        </View>

        
    </>
    )
}
    

export default function ListActivities({title, total,category}){
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

                     

                    { category == "camera" &&
                            <View style ={styles.container}>
                            <Text style={{fontStyle: "italic", fontWeight: "bold"}}>{title}</Text>
                            { capCounter != total &&
                                <Progress step={capCounter} steps= {total} height={10} />
                            } 
                            {capCounter == total &&
                            <View>
                             <Text> Completed </Text>
                            </View>
                            }

                            </View>
                            
                    }
                    
                    {
                    category == "map" &&
                    <View style ={styles.container}>
                    <Text style={{fontStyle: "italic", fontWeight: "bold"}}>{title}</Text>
                        <Progress step={1} steps= {total} height={10} />
                    
                    </View>
                    }
                    {
                    category == "library" &&
                    <View style ={styles.container}>
                    <Text style={{fontStyle: "italic", fontWeight: "bold"}}>{title}</Text>
                        <Progress step={3} steps= {total} height={10} />
                    
                    </View>
                    }
              


                
                        
                        {/* <View style={{ flex: 1, justifyContent: "space-evenly", paddingTop: 5}}>
                            <Progress.Bar progress={0.6}  height={9} width={350} /> 
                                <Text style={{paddingTop: 3}}> 
                                    0 / {total}
                                </Text>
                        </View>*/}
                    
                
            </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#fff',
      justifyContent:'center',
     
    }
})