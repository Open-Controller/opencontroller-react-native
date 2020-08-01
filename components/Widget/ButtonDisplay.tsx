import React, { useState, useEffect } from 'react';
import { IconButton, useTheme } from 'react-native-paper';
import { Button } from "control-lib"
import { Vibration } from 'react-native';

export default function ButtonDisplay({widget}:{widget:Button}) {
  const theme = useTheme()
  const [borderColor,$borderColor] = useState(theme.colors.onSurface);
  useEffect(()=>$borderColor(theme.colors.onSurface),[theme])
  const highlight = ()=>{
    $borderColor(theme.colors.primary)
    setTimeout(()=>$borderColor(theme.colors.onSurface),200)
  }
  return <IconButton 
    onPress={()=>{
      widget.action.run()
      highlight()
      Vibration.vibrate(10)
    }} 
    style={{
      margin:3,
      width:60,
      height:60,
      borderWidth:1,
      borderColor,
      borderStyle:"solid",
      borderRadius:theme.roundness
    }}
    color={theme.colors.primary}
    icon={widget.icon}
    key={widget.action.name}>{widget.icon? "":widget.action.name}</IconButton>
}