import React, {useState, useEffect} from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Button, Image } from 'react-native';
import * as Location from 'expo-location';
import {PlantsLocation, plantDetails} from '../model/IndigenousPlantsLocation'
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
  const listType = [
    {
      status: 'All',
    },
    {
      status: 'Medicinal',
    },
    {
      status: 'Food',
    },
  ]
  
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
          {
            listType.map(e => (
              <TouchableOpacity>
          
              </TouchableOpacity>
            ))
          }
        </View>
      </View>
      
      <MapView
        style={styles.map}
        initialRegion={{latitude: 17.3513,
                        longitude: 121.1719,
                        latitudeDelta: 0, 
                        longitudeDelta: 2}}
      >

          {PlantsLocation.map(item => (
            <Marker 
              title={item.name} 
              coordinate = {{ latitude: item.latitude , 
                              longitude: item.longitude}}
              key={item.id}
            >
              <Image source = {require('../assets/images/plant_marker.png')} style={{height: 35, width:35 }}/>
            </Marker>
          ))
          }
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
  }
});