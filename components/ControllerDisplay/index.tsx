import React, { useContext, useEffect } from 'react';
import { View } from 'react-native';
import { Controller } from 'control-lib';
import WidgetDisplay from '../Widget/WidgetDisplay';
import { RouterContext } from '../Router';
import { Some } from '@hqoss/monads';

export default function ControllerDisplay({controller}:{controller:Controller}) {
  const {setTitle} = useContext(RouterContext)
  useEffect(()=>setTitle(Some(controller.name)),[controller])
  return <View>
    {controller.layout.map((widget,i)=>
      <View key={i} style={{margin:10}}>
        <WidgetDisplay widget={widget}/>
      </View>
    )}
  </View>
}
