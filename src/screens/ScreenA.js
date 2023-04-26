import React, { useRef, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const ScreenA = ({ route, navigation }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const markers = {
      Lagundi: { lat: 37.8565, lon: -122.4773 }, // Marker 1 - Lagundi
      Sambong: { lat: 37.7749, lon: -122.4194 }, // Marker 2 - Sambong
    };
    const marker = route.params?.marker || 'Lagundi'; // Default to 'Lagundi' if no marker provided
    const region = {
      latitude: markers[marker].lat,
      longitude: markers[marker].lon,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };
    mapRef.current?.animateToRegion(region, 1000);
  }, [route.params?.marker]);

  const handleMapReady = () => {
    if (route.params?.marker) {
      const markers = {
        Lagundi: { lat: 37.8565, lon: -122.4773 }, // Marker 1 - Lagundi
        Sambong: { lat: 37.7749, lon: -122.4194 }, // Marker 2 - Sambong
      };
      const marker = route.params.marker;
      const region = {
        latitude: markers[marker].lat,
        longitude: markers[marker].lon,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };
      mapRef.current?.animateToRegion(region, 1000);
    }
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} ref={mapRef} onMapReady={handleMapReady}>
        {/* Marker 1 - Lagundi */}
        <Marker
          coordinate={{ latitude: 37.8565, longitude: -122.4773 }}
          title="Lagundi"
        />
        {/* Marker 2 - Sambong */}
        <Marker
          coordinate={{ latitude: 37.7749, longitude: -122.4194 }}
          title="Sambong"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default ScreenA;
