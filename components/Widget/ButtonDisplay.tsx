import React from 'react';
import { View } from 'react-native';
import { Widget } from 'control-lib';
import { Button as ButtonComponent } from 'react-native-paper';
import { Button } from "control-lib"

export default function ButtonDisplay({widget}:{widget:Button}) {
  return <ButtonComponent onPress={()=>widget.action.run()}>{widget.action.name}</ButtonComponent>
}