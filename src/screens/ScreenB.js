import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ScreenB = ({ navigation }) => {
  const navigateToMarker = (markerNumber) => {
    navigation.navigate('ScreenA', { marker: markerNumber });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, styles.buttonMarker1]}
        onPress={() => navigateToMarker(1)}
      >
        <Text style={styles.buttonText}>Marker 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.buttonMarker2]}
        onPress={() => navigateToMarker(2)}
      >
        <Text style={styles.buttonText}>Marker 2</Text>
      </TouchableOpacity>
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
  buttonMarker1: {
    backgroundColor: 'blue',
  },
  buttonMarker2: {
    backgroundColor: 'green',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
});

export default ScreenB;
