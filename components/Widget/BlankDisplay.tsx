import React from 'react';
import { View } from 'react-native';
import { Widget } from '@open-controller/lib';

export default function BlankDisplay({widget}:{widget:Widget}) {
  return <View style={{flex:1}}/>
}