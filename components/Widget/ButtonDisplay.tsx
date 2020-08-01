import React from 'react';
import { IconButton, useTheme } from 'react-native-paper';
import { Button } from "control-lib"
import { Vibration } from 'react-native';

export default function ButtonDisplay({widget}:{widget:Button}) {
  const theme = useTheme()
  return <IconButton 
    onPress={()=>{
      widget.action.run()
      Vibration.vibrate(10)
    }} 
    style={{
      margin:3,
      width:60,
      height:60,
      borderWidth:1,
      borderColor:theme.colors.onSurface,
      borderStyle:"solid"
    }}
    color={theme.colors.primary}
    icon={widget.icon}
    key={widget.action.name}>{widget.icon? "":widget.action.name}</IconButton>
}