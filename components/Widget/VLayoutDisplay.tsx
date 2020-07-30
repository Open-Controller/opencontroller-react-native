import React from 'react';
import { VLayout } from "control-lib"
import { View } from 'react-native';
import WidgetDisplay from './WidgetDisplay';

export default function VLayoutDisplay({widget}:{widget:VLayout}) {
  return <View>
    {widget.children.map(child=>
      <WidgetDisplay widget={child}/>
    )}
  </View>
}