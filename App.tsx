import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text, Surface, useTheme } from 'react-native-paper';
import ControllerDisplay from './components/ControllerDispaly';
import { fios } from './data/fios';
export default function App() {
  const theme = useTheme();
  return (
    <Surface style={styles.container}>
      <ControllerDisplay controller={fios}/>
      <StatusBar style="auto"/>
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
