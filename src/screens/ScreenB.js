import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { plantListLibrary } from '../model/data';

const ScreenB = () => {
  const navigation = useNavigation();

  const navigateToMarker = (latitude, longitude) => {
    navigation.navigate('ScreenA', {
      latitude,
      longitude,
    });
  };

  return (
    <View style={styles.container}>
      {plantListLibrary.map((plant) => (
        <TouchableOpacity
          key={plant.id}
          style={[styles.button, { backgroundColor: plant.color }]}
          onPress={() => navigateToMarker(plant.latitude, plant.longitude)}
        >
          <Text style={styles.buttonText}>{plant.localName}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 200,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
});

export default ScreenB;