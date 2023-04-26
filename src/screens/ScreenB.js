import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ScreenB = ({ route }) => {
  const navigation = useNavigation();
  const navigateToMarker = (markerName) => {
    navigation.navigate('ScreenA', { marker: markerName });
  };

  useEffect(() => {
    if (route.params?.marker) {
      navigateToMarker(route.params?.marker);
    }
  }, [route.params?.marker]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, styles.buttonMarker1]}
        onPress={() => navigateToMarker('Lagundi')}
      >
        <Text style={styles.buttonText}>Lagundi</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.buttonMarker2]}
        onPress={() => navigateToMarker('Sambong')}
      >
        <Text style={styles.buttonText}>Sambong</Text>
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
