import React, { useState, useEffect, useContext } from 'react';
import { IconButton, useTheme, Button } from 'react-native-paper';
import { ToggleButton } from "@open-controller/lib"
import { Vibration } from 'react-native';
import { ErrorContext } from '../ErrorDisplay';

export default function ToggleButtonDisplay({widget}:{widget:ToggleButton}) {
  const theme = useTheme()
  const [borderColor,$borderColor] = useState(theme.colors.onSurface);
  const {throwError} = useContext(ErrorContext)
  useEffect(()=>$borderColor(theme.colors.onSurface),[theme])
  const highlight = ()=>{
    $borderColor(theme.colors.primary)
    setTimeout(()=>$borderColor(theme.colors.onSurface),200)
  }
  const [state,$state] = useState<boolean>(false)
  useEffect(()=>{
    const unsubscribe = widget.state.onValue($state)
    return ()=> unsubscribe()
  },[])
  return widget.text ? 
  <Button
  onPress={()=>{
    widget.action.run().catch(throwError)
    highlight()
    Vibration.vibrate(10)
  }} 
  style={{
    margin:3,
    borderWidth:2,
    borderColor,
    backgroundColor:state?theme.colors.primary+"33":undefined,
    borderStyle:"solid",
    borderRadius:theme.roundness
  }}
  color={theme.colors.primary}
  icon={widget.icon}
  >{widget.text}</Button>
  : <IconButton 
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
      backgroundColor:state?theme.colors.primary+"33":undefined,
      borderStyle:"solid",
      borderRadius:theme.roundness
    }}
    size={30}
    color={theme.colors.primary}
    icon={widget.icon}/>
}