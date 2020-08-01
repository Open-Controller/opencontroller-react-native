import React from 'react';
import { View } from 'react-native';
import { Controller } from 'control-lib';
import WidgetDisplay from './Widget/WidgetDisplay';

export default function ControllerDisplay({controller}:{controller:Controller}) {
  return <View>
    {controller.layout.map((widget,i)=>
      <View key={i} style={{margin:10}}>
        <WidgetDisplay widget={widget}/>
      </View>
    )}
  </View>
}
