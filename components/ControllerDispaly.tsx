import React from 'react';
import { View } from 'react-native';
import { Controller } from 'control-lib';
import WidgetDisplay from './Widget/WidgetDisplay';

export default function ControllerDisplay({controller}:{controller:Controller}) {
  return <View>
    {controller.layout.map(widget=>
      <WidgetDisplay widget={widget}/>
    )}
  </View>
}
