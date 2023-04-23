import React, {useState, useEffect} from 'react';
import MapView, {Marker, Callout} from 'react-native-maps';
import { StyleSheet, Text, View, Image,  } from 'react-native';
import * as Location from 'expo-location';
import {PlantsLocation} from '../model/IndigenousPlantsLocation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';

const PlantLibrary = ({navigation,route}) => { 
  const [mapRegion, setMapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const userLocation = async () => {
    let {status} = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted'){
      setErrorMsg('Permission to access location was denied');
    }
    let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
    setMapRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      // latitudeDelta: 0.0822
      latitudeDelta: 0.01,
      longitudeDelta: 0.002,
    });
    console.log(location.coords.latitude, location.coords.longitude);
  }

  useEffect(() => {
    userLocation();
  }, []);

  function listDownType(PlantsLocation){
    const uniqueType = ["Medicinal"]
    for (let i = 0; i < PlantsLocation.length; i++){
      uniqueType.push(PlantsLocation[i].type)
    }
    const uniqueArray = [...new Set(uniqueType)]
    return uniqueArray
  }
  const lastArray = listDownType(PlantsLocation)  

  function filterType(PlantsLocation, userInput){
    const plantType = []
    for (let i = 0; i < PlantsLocation.length; i++){
      if(PlantsLocation[i].type == userInput)
        plantType.push(PlantsLocation[i])
    }
    return plantType
  }
    const [showMarkers, setShowMarker] = useState("All");
    const typeSelect = (value) => {
        setShowMarker(value);
    }

  return (
    /*<View style={styles.container}>
      <MapView style={styles.map}
        region={mapRegion}
      >
          <Marker coordinate={mapRegion} title='You are here!' />
        </MapView>
        <Button title='Get Location' onPress={userLocation} />
    </View>*/
    <SafeAreaView>
      <View style={styles.filterContainer}>
        <View style={{borderBottomWidth: 1,}}>
          <Text style={{textAlign: "center"}}>
            FIlter
          </Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => typeSelect("All")}>
            <Text>All</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => typeSelect("Medicinal")}>
            <Text>Medicinal</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => typeSelect("Food")}>
            <Text>Food</Text>
          </TouchableOpacity>
        </View>
      </View>
      <MapView
        style={styles.map}
        initialRegion={{latitude: 17.3513,
                        longitude: 121.1719,
                        latitudeDelta: 0, 
                        longitudeDelta: 2}}
      >
        {showMarkers === "All" && 
          <View>
            {PlantsLocation.map(item => (
              item.type == "Medicinal"?
              <Marker
                title={item.name} 
                coordinate = {{ latitude: item.latitude , 
                                longitude: item.longitude}}
                key={item.id}
              >
                <Image source = {require('../assets/images/medicine_marker.png')} style={{height: 35, width:35 }}/>
                <Callout onPress={() => navigation.navigate('PlantDetails', 
                                                            {image: item.image, 
                                                             name: item.name, 
                                                             description: item.description, 
                                                             type: item.type, 
                                                             id: item.id})}>
                  <View style={styles.calloutBox}>
                    <Text>{item.name}</Text>
                    <Text><Image style={{width: 70, height:90}} source={item.image}/></Text>
                  </View>
                </Callout>
              </Marker>:              
              <Marker
                title={item.name} 
                coordinate = {{ latitude: item.latitude , 
                                longitude: item.longitude}}
                key={item.id}
              >
                <Image source = {require('../assets/images/food_marker.png')} style={{height: 35, width:35 }}/>
                <Callout onPress={() => navigation.navigate('PlantDetails', 
                                                            {image: item.image, 
                                                             name: item.name, 
                                                             description: item.description, 
                                                             type: item.type, 
                                                             id: item.id})}>
                  <View style={styles.calloutBox}>
                    <Text>{item.name}</Text>
                    <Text style={{bottom: 40}}>
                      <Image resizeMode="cover" style={{width: 70, height:90}} source={item.image}/>
                    </Text>
                  </View>
                </Callout>
              </Marker>
            ))}
          </View>
        }
        {showMarkers === "Medicinal" && 
          <View>
            {PlantsLocation.map(item => (
              item.type == "Medicinal"?
              <Marker
                title={item.name} 
                coordinate = {{ latitude: item.latitude , 
                                longitude: item.longitude}}
                key={item.id}
              >
                <Image source = {require('../assets/images/medicine_marker.png')} style={{height: 35, width:35 }}/>
                <Callout onPress={() => navigation.navigate('PlantDetails', 
                                                            {image: item.image, 
                                                             name: item.name, 
                                                             description: item.description, 
                                                             type: item.type, 
                                                             id: item.id})}>
                  <View style={styles.calloutBox}>
                    <Text>{item.name}</Text>
                    <Text style={{bottom: 40}}>
                      <Image resizeMode="cover" style={{width: 70, height:90}} source={item.image}/>
                    </Text>
                  </View>
                </Callout>
              </Marker>:null
            ))}
          </View>
        }
        {showMarkers === "Food" && 
          <View>
            {PlantsLocation.map(item => (
              item.type == "Food"?
              <Marker
                title={item.name} 
                coordinate = {{ latitude: item.latitude , 
                                longitude: item.longitude}}
                key={item.id}
              >   
                <Image source = {require('../assets/images/food_marker.png')} style={{height: 35, width:35 }}/>
                <Callout onPress={() => navigation.navigate('PlantDetails', 
                                                            {image: item.image, 
                                                             name: item.name, 
                                                             description: item.description, 
                                                             type: item.type, 
                                                             id: item.id})}>
                  <View style={styles.calloutBox}>
                    <Text>{item.name}</Text>
                    <Text style={{bottom: 40}}>
                      <Image resizeMode="cover" style={{width: 70, height:90}} source={item.image}/>
                    </Text>
                  </View>
                </Callout>
              </Marker>:null
            ))}
          </View>
        }
      </MapView>
    </SafeAreaView>
  );
}

export default PlantLibrary

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  filterContainer: {
    position: "absolute",
    zIndex: 1,
    bottom: 10,
    right: 10,
    width: '20%',
    height: "12%",
    borderColor: "Black",
    borderWidth: 1,
    backgroundColor: "white",
  },
  textStyle: {
    paddingLeft: 5,
  },
  bubble: {
    width: 150,
    flexDirection: "column",
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    borderRadius: 6,
    borderWidth: 0.5,
    padding: 15,
    borderColor: "#ccc"
  },
  name: {
    fontSize: 16,
    marginBottom: 5,
  }, 
  arrow: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#fff",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#007a87",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -0.5,
  },
  image: {
    widht: 120,
    height: 80,
  },
  calloutBox: {
    lexDirection: 'column', 
    width: 100
  },
});