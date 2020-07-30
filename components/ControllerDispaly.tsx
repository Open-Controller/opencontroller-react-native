import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Controller, Custom, Button } from 'control-lib';
import WidgetDisplay from './Widget/WidgetDisplay';

export default function ControllerDisplay({controller}:{controller:Controller}) {
  // console.log(JSON.stringify(controller,null,1))
  return (
    // <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
    //  {controller.name}
    // </Button>
    <WidgetDisplay widget={controller.layout[0]}/>
  );
}

const styles = StyleSheet.create({
  
});
