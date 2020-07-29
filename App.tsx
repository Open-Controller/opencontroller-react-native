import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text, Surface, useTheme } from 'react-native-paper';
export default function App() {
  const theme = useTheme();
  return (
    <Surface style={styles.container}>
      <Text>Open up App.js to start working on your app! {JSON.stringify(theme)}</Text>
      <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
        Press me
      </Button>
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
