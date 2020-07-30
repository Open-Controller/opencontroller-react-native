import React from 'react';
import { HLayout } from "control-lib"
import { View } from 'react-native';
import WidgetDisplay from './WidgetDisplay';

export default function HLayoutDisplay({widget}:{widget:HLayout}) {
  return <View>
    {widget.children.map(child=>
      <WidgetDisplay widget={child}/>
    )}
  </View>
}