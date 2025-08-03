// routes/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen() {
  return (
    <LinearGradient 
      colors={['#003049','#0073AF']}
      style={styles.container}
    >
      <Text style={styles.text}>Home screen</Text>
      <StatusBar style="light" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '600',
  },
});
