import React, { useState, useEffect, useContext } from 'react';
import { IconButton, useTheme } from 'react-native-paper';
import { Button } from "opencontroller-lib"
import { Vibration } from 'react-native';
import { ErrorContext } from '../ErrorDisplay';

export default function ButtonDisplay({widget}:{widget:Button}) {
  const theme = useTheme()
  const [borderColor,$borderColor] = useState(theme.colors.onSurface);
  const {throwError} = useContext(ErrorContext)
  useEffect(()=>$borderColor(theme.colors.onSurface),[theme])
  const highlight = ()=>{
    $borderColor(theme.colors.primary)
    setTimeout(()=>$borderColor(theme.colors.onSurface),200)
  }
  return <IconButton 
    onPress={()=>{
      widget.action.run().catch(throwError)
      highlight()
      Vibration.vibrate(10)
    }} 
    style={{
      margin:3,
      width:60,
      height:60,
      borderWidth:2,
      borderColor,
      borderStyle:"solid",
      borderRadius:theme.roundness
    }}
    size={30}
    color={theme.colors.primary}
    icon={widget.icon}/>
}