import React from 'react';
import { GridLayout } from "control-lib"
import { View, Text } from 'react-native';
import WidgetDisplay from './WidgetDisplay';

export default function GridLayoutDisplay({widget}:{widget:GridLayout}) {
  return <View>
    {new Array(widget.width).fill(null).map((_,i)=>
      <View key={i}>
        {widget.children.slice(i, widget.height+i).map((child,j)=>
            <WidgetDisplay widget={child} key={j}/>
        )}
      </View>
    )}
  </View>
}