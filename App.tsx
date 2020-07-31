import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text, Surface, useTheme } from 'react-native-paper';
import ControllerDisplay from './components/ControllerDispaly';
import { home } from './sample-data/home';
import { House } from 'control-lib';
export default function App() {
  return <Surface style={styles.container}>
      <ControllerDisplay controller={House.fromJSON(JSON.parse(JSON.stringify(home))).rooms[0].controllers[0]}/>
      <StatusBar style="auto"/>
    </Surface>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
