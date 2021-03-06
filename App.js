console.disableYellowBox = true
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FirebaseApp } from './src/services/firebase/firebase_app';
import { ApplicationContext } from './src/components/providers/ApplicationContext';
import Navigation from './src/navigations/Navigation';


export default function App() {

  return (
    <ApplicationContext>
      <Navigation />
      <StatusBar style="inverted" />
    </ApplicationContext>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
