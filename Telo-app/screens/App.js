import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './Routes';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
    <StatusBar style="light" />
    </>
  );
}