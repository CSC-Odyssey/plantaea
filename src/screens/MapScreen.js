import React, {useState, useEffect, useRef} from 'react';
import MapView, {Marker, Callout} from 'react-native-maps';
import { StyleSheet, Text, View, Image, TouchableHighlight,  } from 'react-native';
import * as Location from 'expo-location';
import {plantListLibrary, MarketListLibrary} from '../model/data';
import { DepartmentOfAgriculture } from '../model/carDOA';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useRoute, useIsFocused } from '@react-navigation/native';
import { outSName } from './PlantDetailsScreen';

import Feather from 'react-native-vector-icons/Feather'

import DropDownPicker from 'react-native-dropdown-picker';



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

    let sName = outSName;
    console.log(sName);
    const [showMarkers, setShowMarker] = useState(sName === "" ? "All" : "Scientific Name");
    const typeSelect = (value) => {
        setShowMarker(value);
    }
    const isFocused = useIsFocused();
    useEffect(() => {
      console.log("Map Screen Unmounted")
      return() => {setShowMarker("All");
                  sName = "";
                  }
    }, [isFocused]); 

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

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      { label:  'All', value: 'All' , icon: () => <View style={[styles.circle, {backgroundColor:'#92AF9F'}]} /> },
      { label: 'Medicine', value: 'Medicine' , icon: () => <View style={[styles.circle, {backgroundColor:'#E88E8E'}]} /> },
      { label: 'Consumable', value: 'Consumable'  , icon: () => <View style={[styles.circle, {backgroundColor:'#E8D38E'}]} /> },
      { label: 'Ornamental', value: 'Ornamental'  , icon: () => <View style={[styles.circle, {backgroundColor:'#E8A4DC'}]} /> },
      { label: 'Establishments', value: 'Office' , icon: () => <View style={[styles.circle, {backgroundColor:'#9EEBE2'}]} />  },
    ]);
  
    const handleValueChange = (itemValue, itemIndex) => {
      setValue(itemValue);
      console.log(itemValue);
    };

    const handleItemChange = (selectedItem) => {
      setValue(selectedItem.value);
      console.log(`Selected Item: ${selectedItem.label}`);
    };

    const selectedItemStyle = {
      backgroundColor: 'lightblue',
      borderRadius: 5,
      paddingHorizontal: 10,
      paddingVertical: 5,
    };
    
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

    <View style={styles.dropcontainer}>
      <DropDownPicker
        textStyle={{
          fontSize: 16,
          fontFamily:'Josefin Sans-Light'
        }}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        containerStyle={styles.dropdownContainer}
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropDownContainer}
        onChangeValue={(value) => {
          typeSelect(value)
        }}
        placeholder="Filter"
      />
    </View>

      <MapView
        provider={MapView.PROVIDER_OPENSTREETMAP}
        style={styles.map}
        initialRegion={{latitude: 17.3513,
                        longitude: 121.1719,
                        latitudeDelta: 0, 
                        longitudeDelta: 1.9}}
      >
        <Marker coordinate={mapRegion} title='You are here!' >
          <Image source = {require('../assets/images/user_marker.png')} style={{height: 35, width:35 }}/>
        </Marker>
        {showMarkers === "Scientific Name" &&
              <View>
                  {plantListLibrary.map(item => (
                    item.scientificName == sName? 
                    <Marker
                      title={item.localName} 
                      coordinate = {{latitude: item.latitude,
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
                <Image source = {require('../assets/images/market_marker.png')} style={{height: 35, width:35 }}/>
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
  dropcontainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    paddingTop: 50,
    paddingRight: 20,
  },
  dropdownContainer: {
    height: 90,
    width: 200,
    marginTop: 10,
  },
  dropdown: {
    // backgroundColor: '#fff',
    // borderColor: 'blue',
    borderWidth: 0,
    borderRadius: 10,
  },
  dropDownContainer: {
    marginTop:6,
    // backgroundColor: '#=',
    // borderColor: 'green',
    borderWidth:0,
    borderRadius: 10,
  },
  selectedItem: {
    marginTop: 100,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
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
  },
  circle: {
    height:20,
    width:20,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center'
  },
});