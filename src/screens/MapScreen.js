import React, {useState, useEffect} from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Button, Image } from 'react-native';
import * as Location from 'expo-location';
import {PlantsLocation, plantDetails} from '../model/IndigenousPlantsLocation';
import {medicinalPlants} from '../model/MedicinalPlants';
import {foodPlants} from '../model/FoodPlants';
import ListItem from '../components/ListItem';
import { position } from 'react-native-wind/dist/styles/layout/position';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function App() {
  /*const [mapRegion, setMapRegion] = useState({
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
  }, []);*/
  // var userInput
  // var filteredData = filterType(PlantsLocation, userInput) 
  // function setMarker(PlantsLocation, userInput){
  //   {userInput = this.userInput}
  //    <MapView
  //     style={styles.map}
  //     initialRegion={{latitude: 17.3513,
  //                     longitude: 121.1719,
  //                     latitudeDelta: 0, 
  //                     longitudeDelta: 2}}
  //   >
  //       {filteredData.map(item => (
  //         <Marker 
  //           title={item.name} 
  //           coordinate = {{ latitude: item.latitude , 
  //                           longitude: item.longitude}}
  //           key={item.id}
  //         >
  //           <Image source = {require('../assets/images/plant_marker.png')} style={{height: 35, width:35 }}/>
  //         </Marker>
  //       ))
  //     }
  //     console.log(filteredData)
  //   </MapView>
  // }

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
  var filteredData = []

  const [currentCategory, setCurrentCategory] = React.useState('All');

  const getMarkers = () => {
    switch (currentCategory) {
      case 'Medicinal': return medic;
      case 'Food': return food;
      default: return [...medic,...food]
    }
  }

  const onCategoryClick = category => {
    setCurrentCategory(category);
  }

  const medic = medicinalPlants.map((medpla) => (
    <Marker 
      title={medpla.name} 
      coordinate = {{ latitude: medpla.latitude , 
                      longitude: medpla.longitude}}
      key={medpla.id}
    >
      <Image source = {require('../assets/images/medicine_marker.png')} style={{height: 35, width:35 }}/>
    </Marker>
  ))

  const food = foodPlants.map((foopla) => (
    <Marker 
      title={foopla.name} 
      coordinate = {{ latitude: foopla.latitude , 
                      longitude: foopla.longitude}}
      key={foopla.id}
    >
      <Image source = {require('../assets/images/food_marker.png')} style={{height: 35, width:35 }}/>
    </Marker>
  ))

  const [status, setStatus] = useState("All")

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
          {/* {lastArray.map(item => (
            <TouchableOpacity>
              <Text>{item}</Text>
            </TouchableOpacity>
          ))
          } */}
          <TouchableOpacity onPress={() => onCategoryClick('All')}>
            <Text>All</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onCategoryClick('Medicinal')}>
            <Text>Medicine</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onCategoryClick('Food')}>
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
          {/* {PlantsLocation.map(item => (
            <Marker 
              title={item.name} 
              coordinate = {{ latitude: item.latitude , 
                              longitude: item.longitude}}
              key={item.id}
            >
              <Image source = {require('../assets/images/plant_marker.png')} style={{height: 35, width:35 }}/>
            </Marker>
          ))
          } */}
          {getMarkers()}
      </MapView>
    </SafeAreaView>
  );
}

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
    height: '20%',
    borderColor: "Black",
    borderWidth: 1,
    backgroundColor: "white",
  }
});