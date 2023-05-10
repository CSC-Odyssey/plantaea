import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Image } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { Camera } from 'expo-camera';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';
import { TouchableOpacity } from 'react-native-gesture-handler';

export let capCounter = 0;
export default function App() {

  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();
  const [count,setCount] = useState(1)
  var counter = () => {
    setCount(count + 1)
    capCounter = count
    console.log(count)
  }

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>
  } else if (!hasCameraPermission) {
    return <Text>Permission for camera not granted. Please change this in settings.</Text>
  }

  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  if (photo) {
    let sharePic = () => {
      shareAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    let savePhoto = () => {
      MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.preview} source={{ uri: "data:image/jpg;base64," + photo.base64 }} />

        <View style={styles.circleContainer}>
          <TouchableOpacity style={styles.circle}>
            <Text style={styles.circleText}>SCAN</Text>
          </TouchableOpacity>

          {hasMediaLibraryPermission ?
            <TouchableOpacity 
              style={styles.circle} 
              onPress={savePhoto}>
                <Text style={styles.circleText}>SAVE</Text>
            </TouchableOpacity> 
          : undefined}

          <TouchableOpacity style={styles.circle} onPress={sharePic}>
            <Text style={styles.circleText}>SHARE</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.circle} onPress={() => setPhoto(undefined)}>
            <Text style={[styles.circleText,{fontSize:7.5}]}>DISCARD</Text>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>

        <Camera style={styles.container} ref={cameraRef}>
          <StatusBar style="auto" />
        </Camera>

            <TouchableOpacity 
              style={{backgroundColor:'#92AF9F', alignItems:'center', borderRadius:20, paddingHorizontal:50,paddingVertical:15,marginTop:50,marginHorizontal:70}}
              onPress={ () => {counter(); takePic()}}
            >
              <Text style={{fontSize:20, color:'white', fontFamily:'Josefin Sans-Light'}}>Scan Plant</Text>
            </TouchableOpacity>
            
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingBottom:50,
    paddingTop:100

  },
  preview: {
    alignSelf: 'stretch',
    flex: 3
  },
  circle: {
    height:70,
    width:70,
    borderRadius:35,
    backgroundColor:'#92AF9F',
    justifyContent:'center',
    alignItems:'center'
  },
  circleText: {
      fontSize:10,
      fontFamily:'Josefin Sans-Regular',
      color:'white',
      letterSpacing:2
  },
  circleContainer: {
    flex:1,
    flexDirection:'row',
    justifyContent:'space-evenly',
    marginTop:20
  }
});