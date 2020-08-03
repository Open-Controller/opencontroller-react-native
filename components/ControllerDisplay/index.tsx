import React, { useContext, useEffect } from 'react';
import { View } from 'react-native';
import { Controller } from 'control-lib';
import WidgetDisplay from '../Widget/WidgetDisplay';
import { RouterContext } from '../Router';

export default function ControllerDisplay({controller}:{controller:Controller}) {
  const {setTitle} = useContext(RouterContext)
  useEffect(()=>setTitle(controller.name))
  return <View>
    {controller.layout.map((widget,i)=>
      <View key={i} style={{margin:10}}>
        <WidgetDisplay widget={widget}/>
      </View>
    )}
  </View>
}
