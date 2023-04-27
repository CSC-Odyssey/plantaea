import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { plantListLibrary } from '../model/data';

const ScreenA = ({ route }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (route.params?.latitude && route.params?.longitude) {
      const { latitude, longitude } = route.params;
      mapRef.current.animateToRegion(
        {
          latitude,
          longitude,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        },
        1000
      );
    }
  }, [route.params?.latitude, route.params?.longitude]);

  const onMapLoaded = () => {
    if (route.params?.latitude && route.params?.longitude) {
      const { latitude, longitude } = route.params;
      mapRef.current.animateToRegion(
        {
          latitude,
          longitude,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        },
        1000
      );
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: 16.345,
          longitude: 120.689,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
        onMapReady={onMapLoaded} // added onMapReady prop to call onMapLoaded function when the map is ready
      >
        {plantListLibrary.map((plant) => (
          <Marker
            key={plant.id}
            coordinate={{
              latitude: plant.latitude,
              longitude: plant.longitude,
            }}
            title={plant.localName}
            description={plant.use}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default ScreenA;
