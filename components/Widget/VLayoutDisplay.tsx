import React from 'react';
import { VLayout } from "@open-controller/lib"
import { View } from 'react-native';
import WidgetDisplay from './WidgetDisplay';

export default function VLayoutDisplay({widget}:{widget:VLayout}) {
  return <View>
    {widget.children.map((child,i)=>
      <WidgetDisplay widget={child} key={i}/>
    )}
  </View>
}