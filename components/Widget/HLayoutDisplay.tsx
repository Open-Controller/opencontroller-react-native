import React from 'react';
import { HLayout } from "opencontroller-lib"
import { View } from 'react-native';
import WidgetDisplay from './WidgetDisplay';

export default function HLayoutDisplay({widget}:{widget:HLayout}) {
  return <View style={{flexDirection:"row"}}>
    {widget.children.map((child,i)=>
      <WidgetDisplay widget={child} key={i}/>
    )}
  </View>
}