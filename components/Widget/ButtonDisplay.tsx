import React from 'react';
import { Button as ButtonComponent } from 'react-native-paper';
import { Button } from "control-lib"
import { Vibration } from 'react-native';

export default function ButtonDisplay({widget}:{widget:Button}) {
  return <ButtonComponent 
    mode="outlined" 
    onPress={()=>{
      widget.action.run()
      Vibration.vibrate(10)
    }} 
    style={{
      margin:3
    }}
    contentStyle={{
      width:60,
      height:60
    }}
    key={widget.action.name}>{widget.action.name}</ButtonComponent>
}