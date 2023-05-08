import React, {useState, useEffect, useRef} from 'react';
import MapView, {Marker, Callout} from 'react-native-maps';
import { StyleSheet, Text, View, Image, TouchableHighlight,  } from 'react-native';
import * as Location from 'expo-location';
import {plantListLibrary, MarketListLibrary} from '../model/data';
import { DepartmentOfAgriculture } from '../model/carDOA';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/native';

import Feather from 'react-native-vector-icons/Feather'



export let mapCounter = 0;
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

  function listDownType(plantListLibrary){
    const uniqueType = ["Medicinal"]
    for (let i = 0; i < plantListLibrary.length; i++){
      uniqueType.push(plantListLibrary[i].type)
    }
    const uniqueArray = [...new Set(uniqueType)]
    return uniqueArray
  }
  const lastArray = listDownType(plantListLibrary)  

  function filterType(plantListLibrary, userInput){
    const plantType = []
    for (let i = 0; i < plantListLibrary.length; i++){
      if(plantListLibrary[i].type == userInput)
        plantType.push(plantListLibrary[i])
    }
    return plantType
  }
    const [showMarkers, setShowMarker] = useState("All");
    const typeSelect = (value) => {
        setShowMarker(value);
    }

  
    const mapRef = useRef(null);
  	const [selectedMarker, setSelectedMarker] = useState(null);

	  // useEffect(() => {
	  //   console.log('markerId:', route.params?.markerId);
	  //   const markerId = route.params?.markerId
	  //   if(markerId) {
	  //     const marker = plantListLibrary.find(m => m.id === markerId);
	  //     if (marker) {
	  //       setSelectedMarker(marker);
	  //       mapRef.current?.animateToRegion(marker.coordinate);
	  //     }
	  //   }
	  // }, [navigation]);
    const [count,setCount] = useState(1)
    var mCounter = () => {
      setCount(count + 1)
      mapCounter = count
      console.log(count)
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
          {/* <Text style={styles.textHeader}>
            FILTER
          </Text> */}
        </View>
        <View style={{flexDirection:'row',paddingBottom:20}}>
          <TouchableOpacity 
            onPress={() => typeSelect("All")}
            style={{ flexDirection:'row', backgroundColor:'#92AF9F', alignItems:'center', borderRadius:20, paddingHorizontal:10,paddingVertical:3,marginTop:2,marginRight:2.5}}
          >
            <Feather name="heart" size={12} color="white" style={{marginRight:5}} />
            <Text style={styles.filterText}>All</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => typeSelect("Medicine")}
            style={{ flexDirection:'row', backgroundColor:'#E88E8E', alignItems:'center', borderRadius:20, paddingHorizontal:10,paddingVertical:3,marginTop:2,marginRight:2.5}}
          >
            <Feather name="heart" size={12} color="white" style={{marginRight:5}} />
            <Text style={styles.filterText}>Medicine</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => typeSelect("Consumable")}
            style={{flexDirection:'row',backgroundColor:'#E8D38E', alignItems:'center', borderRadius:20, paddingHorizontal:10,paddingVertical:3,marginTop:2,marginRight:2.5}}
          >
            <Feather name="coffee" size={12} color="white" style={{marginRight:5}} />
            <Text style={styles.filterText}>Consumable</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            onPress={() => typeSelect("Ornamental")}
            style={{flexDirection:'row',backgroundColor:'#E8A4DC', alignItems:'center', borderRadius:20, paddingHorizontal:10,paddingVertical:3,marginTop:2,marginRight:2.5}}
          >
            <Feather name="star" size={12} color="white" style={{marginRight:5}} />
            <Text style={styles.filterText}>Ornamental</Text>
          </TouchableOpacity>

        </View>
        <TouchableOpacity 
          onPress={() => typeSelect("Office")}
          style={{flexDirection:'row',backgroundColor:'#8EE8DB', alignItems:'center', borderRadius:20, paddingHorizontal:10,paddingVertical:3,marginTop:2,marginRight:2.5}}
        >
            <Feather name="grid" size={12} color="white" style={{marginRight:5}} />
            <Text style={styles.filterText}>Plant Institutions</Text>
          </TouchableOpacity>
      </View>
      <MapView
        provider={MapView.PROVIDER_OPENSTREETMAP}
        style={styles.map}
        initialRegion={{latitude: 17.3513,
                        longitude: 121.1719,
                        latitudeDelta: 0, 
                        longitudeDelta: 1.9}}
      >
        <Marker coordinate={mapRegion} title='You are here!' />

        {showMarkers === "All" && 
          <View>
            {/* Markets */}
            {MarketListLibrary.map(item =>
              <Marker
                title={item.marketName}
                coordinate = {{latitude: item.latitude,
                               longitude: item.longitude}}
                key={item.id}
              >
                <Callout>
                  <View>
                    <Text key={`name-${item.id}`}>{item.marketName}</Text>
                  </View>
                  <View>
                    <Text>Goods</Text>
                    {MarketListLibrary.map(item => (
                      <TouchableOpacity key={`good-${item.id}`}>
                        <Text>
                          {item.goods}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </Callout>
              </Marker>)
            }
            {/* Departments */}
            {DepartmentOfAgriculture.map(item =>
                <Marker
                  title={item.departmentName}
                  coordinate = {{latitude: item.latitude,
                                 longitude: item.longitude}}
                  key={item.id}
                >
                  <Image source = {require('../assets/images/bldg_marker.png')} style={{height: 35, width:35 }}/>
                  <Callout tooltip>
                    <View style ={styles.bubble}>
                      <Text key={`name-${item.id}`}>
                        {item.departmentName}
                      </Text>
                    </View>
                  </Callout>
                </Marker>)
            }
            {/* Plants */}
            {plantListLibrary.map(item => (
              <Marker
                title={item.localName} 
                coordinate = {{ latitude: item.latitude , 
                                longitude: item.longitude}}
                key={item.id}
                onPress={mCounter}
                calloutVisible={selectedMarker && selectedMarker.id === marker.id}
              >
                <Image source = {require('../assets/images/plant_marker.png')} style={{height: 35, width:35 }}/>
                <Callout 
                  tooltip
                  onPress={() =>  navigation.navigate('PlantDetails', {image: item.image, scientificName: item.scientificName, 
                                                                      localName: item.localName, description: item.description, 
                                                                      use: item.use, taxonomy: item.taxonomy, 
                                                                      latitude: item.latitude, longitude: item.longitude, 
                                                                      category: item.category, id: item.id})}
                >
                  <View style={styles.bubble}>
                    <Text style={styles.name} key={`name-${item.id}`}>
                      {item.localName}
                    </Text>
                    <Text style={{bottom: 40, marginBottom: -30}}>
                      <Image style={{width: 100, height:100}} source={item.image}/>
                    </Text>
                  </View>
                  <View style={styles.arrowBorder}/>
                  <View style={styles.arrow} />
                </Callout>
              </Marker>           
            ))}
          </View>
        }
        {showMarkers === "Medicine" && 
          <View>
            {plantListLibrary.map(item => (
              item.category[0] == 'medicine'? 
              <Marker
                title={item.localName} 
                coordinate = {{ latitude: item.latitude , 
                                longitude: item.longitude}}
                key={item.id}
              >
                <Image source = {require('../assets/images/medicine_marker.png')} style={{height: 35, width:35 }}/>
                <Callout 
                  tooltip
                  onPress={() => navigation.navigate('PlantDetails', {image: item.image, scientificName: item.scientificName, 
                                                                      localName: item.localName, description: item.description, 
                                                                      use: item.use, taxonomy: item.taxonomy, 
                                                                      latitude: item.latitude, longitude: item.longitude, 
                                                                      category: item.category, id: item.id})}
                >
                  <View style={styles.bubble}>
                    <Text style={styles.name} key={`name-${item.id}`}>
                      {item.localName}
                    </Text>
                    <Text style={{bottom: 40, marginBottom: -30}}>
                      <Image style={{width: 100, height:100}} source={item.image}/>
                    </Text>
                  </View>
                  <View style={styles.arrowBorder}/>
                  <View style={styles.arrow} />
                </Callout>
              </Marker>:null
            ))}
          </View>
        }
        {showMarkers === "Consumable" && 
          <View>
            {plantListLibrary.map(item => (
              item.category[0] == 'consumable' || item.category[1] == 'consumable'? 
              <Marker
                title={item.localName} 
                coordinate = {{ latitude: item.latitude , 
                                longitude: item.longitude}}
                key={item.id}
              >   
                <Image source = {require('../assets/images/food_marker.png')} style={{height: 35, width:35 }}/>
                <Callout 
                  tooltip
                  onPress={() => navigation.navigate('PlantDetails', {image: item.image, scientificName: item.scientificName, 
                                                                      localName: item.localName, description: item.description, 
                                                                      use: item.use, taxonomy: item.taxonomy, 
                                                                      latitude: item.latitude, longitude: item.longitude, 
                                                                      category: item.category, id: item.id})}
                >
                  <View style={styles.bubble}>
                    <Text style={styles.name} key={`name-${item.id}`}>
                      {item.localName}
                    </Text>
                    <Text style={{bottom: 40, marginBottom: -30}}>
                      <Image style={{width: 100, height:100}} source={item.image}/>
                    </Text>
                  </View>
                  <View style={styles.arrowBorder}/>
                  <View style={styles.arrow} />
                </Callout>
              </Marker>:null
            ))}
          </View>
        }
        {showMarkers === "Ornamental" && 
          <View>
            {plantListLibrary.map(item => (
              item.category[0] == 'ornamental' || item.category[1] == 'ornamental' || item.category[2] == 'ornamental'? 
              <Marker
                title={item.localName} 
                coordinate = {{ latitude: item.latitude , 
                                longitude: item.longitude}}
                key={item.id}
              >   
                <Image source = {require('../assets/images/home_marker.png')} style={{height: 35, width:35 }}/>
                <Callout 
                  tooltip
                  onPress={() => navigation.navigate('PlantDetails', {image: item.image, scientificName: item.scientificName, 
                                                                      localName: item.localName, description: item.description, 
                                                                      use: item.use, taxonomy: item.taxonomy, 
                                                                      latitude: item.latitude, longitude: item.longitude, 
                                                                      category: item.category, id: item.id})}
                >
                  <View style={styles.bubble}>
                    <Text style={styles.name} key={`name-${item.id}`}>
                      {item.localName}
                    </Text>
                    <Text style={{bottom: 40, marginBottom: -30}}>
                      <Image style={{width: 100, height:100}} source={item.image}/>
                    </Text>
                  </View>
                  <View style={styles.arrowBorder}/>
                  <View style={styles.arrow} />
                </Callout>
              </Marker>:null
            ))}
          </View>
        } 
        
        { showMarkers === "Office" &&
         <View>
           {DepartmentOfAgriculture.map(item =>
                <Marker 
                  title={item.departmentName}
                  coordinate = {{latitude: item.latitude,
                                 longitude: item.longitude}}
                  key={item.id}
                >
                  <Image source = {require('../assets/images/bldg_marker.png')} style={{height: 35, width:35 }}/>
                  <Callout tooltip>
                    <View style = {styles.bubble}>
                      <Text key={`name-${item.id}`}>
                        {item.departmentName}
                      </Text>
                    </View>
                  </Callout>
                </Marker>)
            }
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
    padding:20,
    position: "absolute",
    zIndex: 1,
    bottom: 5,
    width: '100%',
    borderRadius: 8,
    alignItems:'center',
    justifyContent:'center',
    opacity:0.9
  },
  textStyle: {
    paddingLeft: 5,
  },
  bubble: {
    width: 130,
    flexDirection: "column",
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    borderRadius: 6,
    borderWidth: 0.5,
    padding: 15,
    borderColor: "#ccc"
  },
  name: {
    fontSize: 20,
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
  textHeader:{
    fontSize:16,
    fontStyle:'Semi-Bold',
    textAlign:'center',
    color :'white',
    backgroundColor:'#102409'

  },
   filterText: {
    fontSize:12, 
    color:'white', 
    fontFamily:'Josefin Sans-Regular',
    textAlign:'center'
  }
});