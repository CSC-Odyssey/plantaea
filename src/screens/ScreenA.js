import React, { useRef, useEffect } from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const ScreenA = ({ route }) => {
  const { marker } = route.params || {}; // Use default empty object if route.params is undefined
  const mapRef = useRef(null); // Ref to MapView component

  useEffect(() => {
    // Use effect to set map region once component is mounted
    if (mapRef.current && marker !== undefined) { // Check if marker is defined
      const initialMarkers = [
        { lat: 37.8565, lon: -122.4773 }, // Marker 1 - Sausalito
        { lat: 37.7749, lon: -122.4194 }, // Marker 2 - San Francisco
      ];
      const region = {
        latitude: initialMarkers[marker - 1].lat,
        longitude: initialMarkers[marker - 1].lon,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };
      mapRef.current.animateToRegion(region, 1000); // Animate to new region with duration of 1000ms
    }
  }, [marker]);

  return (
    <View style={{ flex: 1 }}>
      <MapView
        ref={mapRef} // Set ref to mapRef
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.8565, // Set initial latitude to any default value
          longitude: -122.4773, // Set initial longitude to any default value
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: 37.8565,
            longitude: -122.4773,
          }}
          title="Marker 1"
        />
        <Marker
          coordinate={{
            latitude: 37.7749,
            longitude: -122.4194,
          }}
          title="Marker 2"
        />
      </MapView>
    </View>
  );
};

export default ScreenA;
